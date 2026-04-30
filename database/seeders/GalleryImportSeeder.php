<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\GalleryImage;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class GalleryImportSeeder extends Seeder
{
    public function run(): void
    {
        $groups = [
            '2024' => [
                'https://picsum.photos/seed/2024_1/800/600',
                'https://picsum.photos/seed/2024_2/800/600',
                'https://picsum.photos/seed/2024_3/800/600',
                'https://picsum.photos/seed/2024_4/800/600',
                'https://picsum.photos/seed/2024_5/800/600',
            ],
            '2019' => [
                'https://picsum.photos/seed/2019_1/800/600',
                'https://picsum.photos/seed/2019_2/800/600',
                'https://picsum.photos/seed/2019_3/800/600',
                'https://picsum.photos/seed/2019_4/800/600',
                'https://picsum.photos/seed/2019_5/800/600',
            ],
            '2018' => [
                'https://picsum.photos/seed/2018_1/800/600',
                'https://picsum.photos/seed/2018_2/800/600',
                'https://picsum.photos/seed/2018_3/800/600',
                'https://picsum.photos/seed/2018_4/800/600',
                'https://picsum.photos/seed/2018_5/800/600',
                'https://picsum.photos/seed/2018_6/800/600',
                'https://picsum.photos/seed/2018_7/800/600',
                'https://picsum.photos/seed/2018_8/800/600',
                'https://picsum.photos/seed/2018_9/800/600',
                'https://picsum.photos/seed/2018_10/800/600',
                'https://picsum.photos/seed/2018_11/800/600',
                'https://picsum.photos/seed/2018_12/800/600',
            ],
        ];

        foreach ($groups as $year => $urls) {
            foreach ($urls as $index => $url) {
                $title = "Scholarship Event {$year} - Image " . ($index + 1);
                
                // Check if already exists
                if (GalleryImage::where('title', $title)->where('category', $year)->exists()) {
                    continue;
                }

                $image = GalleryImage::create([
                    'title' => $title,
                    'category' => $year,
                    'active' => true,
                    'sort_order' => $index + 1,
                ]);

                try {
                    $image->addMediaFromUrl($url)->toMediaCollection('gallery');
                    $this->command->info("Imported: {$url}");
                } catch (\Exception $e) {
                    $this->command->error("Failed to import: {$url} - " . $e->getMessage());
                }
            }
        }
    }
}
