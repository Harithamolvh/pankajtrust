<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\GalleryImage;
use App\Models\NewsPost;
use App\Models\Recipient;
use App\Models\School;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Public/Home', [
            'recentRecipients' => Recipient::with('school')
                ->latest('year')
                ->take(3)
                ->get(['id', 'name', 'year', 'course', 'college', 'photo', 'school_id']),
            'recentPosts' => NewsPost::published()
                ->latest('published_at')
                ->take(3)
                ->get(['id', 'title', 'slug', 'excerpt', 'cover_image', 'published_at']),
            'gallery' => GalleryImage::where('active', true)->orderBy('sort_order')->take(8)->get(),
            'stats' => [
                'students' => Recipient::count(),
                'schools' => School::where('active', true)->count(),
                'years' => now()->year - 1999,
                'active' => Recipient::where('status', 'active')->count(),
            ],
            'meta' => [
                'title' => 'Dr. Pankaj Educational and Charitable Trust',
                'description' => 'Empowering bright, financially disadvantaged students in Kerala since 1999 through merit-cum-means scholarships.',
            ],
        ]);
    }
}
