<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\GalleryImage;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {
        $images = GalleryImage::where('active', true)
            ->orderBy('sort_order', 'asc')
            ->orderBy('created_at', 'desc')
            ->get();
            
        return Inertia::render('Public/Gallery', [
            'images' => $images,
            'meta' => [
                'title' => 'Photo Gallery | Dr. Pankaj Educational and Charitable Trust',
                'description' => 'A visual journey through the activities, events, and milestones of the Dr. Pankaj Educational and Charitable Trust.',
            ],
        ]);
    }
}
