<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\NewsPost;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $posts = NewsPost::published()
            ->latest('published_at')
            ->paginate(12)
            ->through(fn($post) => $post->append('cover_url'));
            
        return Inertia::render('Public/News/Index', [
            'posts' => $posts,
            'meta' => [
                'title' => 'News & Updates | Dr. Pankaj Educational and Charitable Trust',
                'description' => 'Stay updated with the latest news, announcements, and stories from the Dr. Pankaj Educational and Charitable Trust.',
            ],
        ]);
    }

    public function show($slug)
    {
        $post = NewsPost::published()->where('slug', $slug)->firstOrFail()->append('cover_url');
        
        $relatedPosts = NewsPost::published()
            ->where('id', '!=', $post->id)
            ->latest('published_at')
            ->take(3)
            ->get()
            ->map(fn($p) => $p->append('cover_url'));
            
        return Inertia::render('Public/News/Show', [
            'post' => $post,
            'relatedPosts' => $relatedPosts,
            'meta' => [
                'title' => $post->title . ' | Dr. Pankaj Educational and Charitable Trust',
                'description' => $post->excerpt,
            ],
        ]);
    }
}
