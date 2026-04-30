<?php

namespace Database\Seeders;

use App\Models\GalleryImage;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Symfony\Component\Finder\Finder;

class LocalGalleryImportSeeder extends Seeder
{
    public function run(): void
    {
        $basePath = 'C:\\Users\\ASUS\\Downloads\\events\\events';

        if (!File::exists($basePath)) {
            $this->command->error("Directory not found: {$basePath}");
            return;
        }

        $this->command->info("Scanning directory: {$basePath}");

        $finder = new Finder();
        $finder->files()->in($basePath)->name(['*.jpg', '*.jpeg', '*.png']);

        $count = 0;
        foreach ($finder as $file) {
            $absolutePath = $file->getRealPath();
            $relativePath = $file->getRelativePathname(); // e.g. "2018/location/uuid/03.jpg"
            
            // Extract year from path
            $parts = explode(DIRECTORY_SEPARATOR, $relativePath);
            $year = $parts[0] ?? 'Unknown';

            $title = "Scholarship Event {$year}";
            
            // Create record
            $image = GalleryImage::create([
                'title' => $title,
                'category' => $year,
                'active' => true,
                'sort_order' => ++$count,
            ]);

            // Add media
            try {
                $image->addMedia($absolutePath)
                    ->preservingOriginal()
                    ->toMediaCollection('gallery');
                
                $this->command->info("Imported: {$relativePath}");
            } catch (\Exception $e) {
                $this->command->error("Failed to import {$relativePath}: " . $e->getMessage());
            }
            
            // Limit for testing if needed, but here we go for all
            // if ($count >= 100) break; 
        }

        $this->command->info("Total imported: {$count} images.");
    }
}
