<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\NewsPost;
use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Http\Requests\Admin\StoreNewsRequest;
use App\Http\Requests\Admin\UpdateNewsRequest;

class AdminNewsController extends Controller
{
    public function index(Request $request)
    {
        $query = NewsPost::with('author:id,name')->latest();

        if ($request->filled('search')) {
            $query->where('title', 'like', "%{$request->search}%");
        }

        $posts = $query->paginate(20)->through(fn($post) => $post->append('cover_url'))->withQueryString();

        return Inertia::render('Admin/News/Index', [
            'posts' => $posts,
            'filters' => $request->only('search'),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/News/Create');
    }

    public function store(StoreNewsRequest $request)
    {
        $data = $request->validated();
        $data['slug'] = Str::slug($data['title']);
        $data['author_id'] = auth()->id();
        
        $post = NewsPost::create(array_diff_key($data, ['cover_image' => '']));

        if ($request->hasFile('cover_image')) {
            $post->addMediaFromRequest('cover_image')->toMediaCollection('cover');
        }

        return redirect()->route('admin.news.index')->with('success', 'News post created successfully.');
    }

    public function edit(NewsPost $news)
    {
        return Inertia::render('Admin/News/Edit', [
            'post' => $news->append('cover_url'),
        ]);
    }

    public function update(UpdateNewsRequest $request, NewsPost $news)
    {
        $data = $request->validated();
        $data['slug'] = Str::slug($data['title']);
        
        $news->update(array_diff_key($data, ['cover_image' => '']));

        if ($request->hasFile('cover_image')) {
            $news->addMediaFromRequest('cover_image')->toMediaCollection('cover');
        }

        return redirect()->route('admin.news.index')->with('success', 'News post updated successfully.');
    }

    public function destroy(NewsPost $news)
    {
        $news->delete();
        return redirect()->back()->with('success', 'News post deleted successfully.');
    }
}
