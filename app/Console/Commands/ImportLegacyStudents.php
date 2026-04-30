<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\RefSchool;
use App\Models\RefCollege;
use App\Models\RefCourse;
use App\Models\StdRecipient;

class ImportLegacyStudents extends Command
{
    protected $signature = 'import:legacy-students';
    protected $description = 'Import legacy recipients and reference tables from the old database';

    public function handle()
    {
        $this->info('Starting Legacy Students Import...');

        // Clear existing data
        $this->info('Clearing old data in ref_schools, ref_colleges, ref_courses, std_recipients...');
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        StdRecipient::truncate();
        RefSchool::truncate();
        RefCollege::truncate();
        RefCourse::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $oldDb = DB::connection('mysql_old');

        // Mappings
        $schoolMap = [];
        $collegeMap = [];
        $courseMap = [];

        // Import Schools
        $this->info('Importing Schools...');
        $schools = $oldDb->table('edu_1_schools')->get();
        foreach ($schools as $s) {
            $newSchool = RefSchool::create([
                'name' => $s->name,
                'short_name' => $s->short_name,
                'is_private' => $s->is_private ?? false,
                'active' => $s->active ?? true,
            ]);
            $schoolMap[$s->id] = $newSchool->id;
        }

        // Import Colleges
        $this->info('Importing Colleges...');
        $colleges = $oldDb->table('edu_3_colleges')->get();
        foreach ($colleges as $c) {
            $newCollege = RefCollege::create([
                'name' => $c->name,
                'short_name' => $c->short_name,
                'is_private' => $c->is_private ?? false,
                'active' => $c->active ?? true,
            ]);
            $collegeMap[$c->id] = $newCollege->id;
        }

        // Import Courses
        $this->info('Importing Courses...');
        $courses = $oldDb->table('edu_4_courses')->get();
        foreach ($courses as $c) {
            $newCourse = RefCourse::create([
                'name' => $c->name,
                'short_name' => $c->short_name,
                'duration' => $c->duration ?? null,
                'active' => $c->active ?? true,
            ]);
            $courseMap[$c->id] = $newCourse->id;
        }

        // Import Recipients
        $this->info('Importing Recipients...');
        $recipients = $oldDb->table('recipients')->get();
        $bar = $this->output->createProgressBar(count($recipients));
        $bar->start();

        foreach ($recipients as $rec) {
            StdRecipient::create([
                'name' => $rec->name,
                'start_year' => $rec->start_year,
                'ref_school_id' => $rec->school_id ? ($schoolMap[$rec->school_id] ?? null) : null,
                'ref_college_id' => $rec->college_id ? ($collegeMap[$rec->college_id] ?? null) : null,
                'ref_course_id' => $rec->course_id ? ($courseMap[$rec->course_id] ?? null) : null,
                'duration' => $rec->duration,
                'remarks' => $rec->remarks,
                'active' => $rec->active ?? true,
                'inactive_from' => $rec->inactive_from,
                'inactive_reason' => $rec->inactive_reason,
            ]);
            $bar->advance();
        }

        $bar->finish();
        $this->newLine();

        $this->info('✅ Legacy Students Import Completed Successfully!');
        return 0;
    }
}
