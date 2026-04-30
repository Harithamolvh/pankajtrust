<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Meeting;
use App\Models\NewsPost;
use App\Models\StdRecipient;
use App\Models\RefSchool;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Public/Home', [
            'recentRecipients' => StdRecipient::with('refSchool')
                ->latest('start_year')
                ->take(3)
                ->get(),
            'recentPosts' => NewsPost::published()
                ->latest('published_at')
                ->take(3)
                ->get(['id', 'title', 'slug', 'excerpt', 'cover_image', 'published_at']),
            'gallery' => Media::where('collection_name', 'meeting_gallery')->latest()->take(8)->get(),
            'stats' => [
                'students' => StdRecipient::count(),
                'schools' => RefSchool::count(),
                'years' => now()->year - 1999,
                'active' => StdRecipient::where('active', true)->count(),
            ],
            'meta' => [
                'title' => 'Dr. Pankaj Educational and Charitable Trust',
                'description' => 'Empowering bright, financially disadvantaged students in Kerala since 1999 through merit-cum-means scholarships.',
            ],
        ]);
    }
}
