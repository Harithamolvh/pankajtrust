<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\Trustee;
use App\Models\TrusteeHome;
use App\Models\RefAcademicYear;
use App\Models\Meeting;

class ImportLegacyData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:legacy-data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import legacy trustees, academic years, meetings, and gallery images from pankajtrust_old database.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Starting Legacy Data Import...');

        // 1. Clear existing data
        $this->info('Clearing old data in users, trustees, ref_academic_years, meetings...');
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Meeting::truncate();
        RefAcademicYear::truncate();
        Trustee::truncate();
        TrusteeHome::truncate();
        User::truncate();
        DB::table('media')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // 2. Import Trustee Homes
        $this->info('Importing Trustee Homes...');
        $oldHomes = DB::connection('mysql_old')->table('trustee_2_homes')->get();
        $homeIds = [];
        
        foreach ($oldHomes as $h) {
            $newHome = TrusteeHome::create([
                'name' => $h->name,
                'landline' => $h->landline,
                'address_1' => $h->address_1,
                'address_2' => $h->address_2,
                'address_3' => $h->address_3,
                'address_4' => $h->address_4,
                'active' => $h->active,
            ]);
            $homeIds[$h->id] = $newHome->id;
        }

        // 3. Import Trustees
        $this->info('Importing Trustees & generating User accounts...');
        $oldTrustees = DB::connection('mysql_old')->table('trustee_1_list')->get();
        
        foreach ($oldTrustees as $t) {
            $email = Str::slug($t->name, '.') . '@pankajtrust.org';
            
            // Ensure email is unique
            $count = 1;
            $originalEmail = $email;
            while(User::where('email', $email)->exists()) {
                $email = str_replace('@', $count . '@', $originalEmail);
                $count++;
            }

            $user = User::create([
                'name' => $t->name,
                'email' => $email,
                'password' => Hash::make('Pankaj@123!'),
                'is_admin' => true, // Giving them admin access initially or adjust based on role
            ]);

            Trustee::create([
                'user_id' => $user->id,
                'home_id' => $t->home_id ? ($homeIds[$t->home_id] ?? null) : null,
                'gender' => $t->gender,
                'mobile' => $t->mobile,
                'whatsapp' => $t->whatsapp,
                'rank' => $t->rank,
                'work' => $t->work,
                'active' => $t->active,
            ]);

            if ($t->image) {
                $imagePath = 'd:/laragon/www/PankajTrustWeb/public/3_FileUploads/1_UserAvatars/' . $t->image;
                if (file_exists($imagePath)) {
                    try {
                        $user->addMedia($imagePath)->preservingOriginal()->toMediaCollection('avatar');
                    } catch (\Exception $e) {
                        $this->warn("Failed to attach avatar for user {$user->name}: " . $e->getMessage());
                    }
                }
            }
        }

        // 4. Import Academic Years & Meetings
        $this->info('Importing Academic Years & Meetings...');
        $oldMeetings = DB::connection('mysql_old')->table('meeting')->get();
        $yearsMap = [];

        foreach ($oldMeetings as $m) {
            // Check if year already exists
            if (!isset($yearsMap[$m->year])) {
                $ay = RefAcademicYear::firstOrCreate(['name' => (string)$m->year]);
                $yearsMap[$m->year] = $ay->id;
            }

            $newMeeting = Meeting::create([
                'year_id' => $yearsMap[$m->year],
                'district' => null, // Leave null as it wasn't tracked in old DB
                'name' => $m->name,
                'date' => $m->date,
                'minutes' => $m->minutes,
                'agenda' => $m->agenda,
                'is_distribution' => $m->distribution,
            ]);

            // Import Media for this meeting
            $pics = DB::connection('mysql_old')->table('meeting_pics')->where('meeting_id', $m->id)->get();
            $this->info("Found " . count($pics) . " pic records for meeting ID: " . $m->id);
            
            foreach ($pics as $pic) {
                $fileName = $pic->name; // e.g. "01.jpg"
                $path = 'd:/laragon/www/PankajTrustWeb/public/3_FileUploads/3_Meetings/' . $m->id . '/2_Pictures/' . $fileName;
                
                if (file_exists($path)) {
                    $this->info("   - Attaching file: " . $fileName);
                    try {
                        $newMeeting->addMedia($path)
                            ->withCustomProperties([
                                'title' => $pic->title,
                                'description' => $pic->description
                            ])
                            ->preservingOriginal()
                            ->toMediaCollection('meeting_gallery');
                    } catch (\Exception $e) {
                        $this->warn("Failed to attach media for meeting {$newMeeting->name}: " . $e->getMessage());
                    }
                } else {
                    $this->warn("   - File missing: " . $path);
                }
            }
        }

        $this->info('✅ Legacy Data Import Completed Successfully!');
    }
}
