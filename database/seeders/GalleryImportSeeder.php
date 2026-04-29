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
            '2019' => [
                'https://www.pankajtrust.org/storage/gallery/1722333066_3980.jpg',
                'https://www.pankajtrust.org/storage/gallery/1722333066_6097.jpg',
                'https://www.pankajtrust.org/storage/gallery/1722333066_8109.jpg',
                'https://www.pankajtrust.org/storage/gallery/1722333066_3429.jpg',
                'https://www.pankajtrust.org/storage/gallery/1722333066_1762.jpg',
                'https://www.pankajtrust.org/storage/gallery/1722333116_2957.jpg',
                'https://www.pankajtrust.org/storage/gallery/1722333116_6213.jpg',
                'https://www.pankajtrust.org/storage/gallery/1722333116_1648.jpg',
                'https://www.pankajtrust.org/storage/gallery/1722333116_1688.jpg',
                'https://www.pankajtrust.org/storage/gallery/1722333116_9984.jpg',
                'https://www.pankajtrust.org/storage/gallery/1722333171_3728.jpg',
                'https://www.pankajtrust.org/storage/gallery/1722333171_7612.jpg',
            ],
            '2018' => [
                'https://www.pankajtrust.org/1_WebFrontend/img/gallery/2018/1.jpg',
                'https://www.pankajtrust.org/1_WebFrontend/img/gallery/2018/2.jpg',
                'https://www.pankajtrust.org/1_WebFrontend/img/gallery/2018/3.jpg',
                'https://www.pankajtrust.org/1_WebFrontend/img/gallery/2018/4.jpg',
                'https://www.pankajtrust.org/1_WebFrontend/img/gallery/2018/5.jpg',
                'https://www.pankajtrust.org/1_WebFrontend/img/gallery/2018/6.jpg',
                'https://www.pankajtrust.org/1_WebFrontend/img/gallery/2018/7.jpg',
                'https://www.pankajtrust.org/1_WebFrontend/img/gallery/2018/8.jpg',
                'https://www.pankajtrust.org/1_WebFrontend/img/gallery/2018/9.jpg',
                'https://www.pankajtrust.org/1_WebFrontend/img/gallery/2018/10.jpg',
                'https://www.pankajtrust.org/1_WebFrontend/img/gallery/2018/11.jpg',
                'https://www.pankajtrust.org/1_WebFrontend/img/gallery/2018/12.jpg',
            ]
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
