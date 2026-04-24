<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\GalleryImage;
use Inertia\Inertia;
use App\Http\Requests\Admin\StoreGalleryRequest;
use App\Http\Requests\Admin\UpdateGalleryRequest;

class AdminGalleryController extends Controller
{
    public function index(Request $request)
    {
        $query = GalleryImage::orderBy('sort_order', 'asc');

        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }

        $images = $query->get();

        return Inertia::render('Admin/Gallery/Index', [
            'images' => $images,
            'filters' => $request->only('category'),
        ]);
    }

    public function store(StoreGalleryRequest $request)
    {
        $maxSort = GalleryImage::max('sort_order') ?? 0;

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $index => $file) {
                $image = GalleryImage::create([
                    'title' => $request->title,
                    'caption' => $request->caption,
                    'category' => $request->category,
                    'active' => $request->boolean('active', true),
                    'sort_order' => $maxSort + $index + 1,
                ]);

                $image->addMedia($file)->toMediaCollection('gallery');
            }
        }

        return redirect()->back()->with('success', 'Images uploaded successfully.');
    }

    public function update(UpdateGalleryRequest $request, GalleryImage $gallery)
    {
        $gallery->update($request->validated());
        return redirect()->back()->with('success', 'Image details updated successfully.');
    }

    public function reorder(Request $request)
    {
        $request->validate([
            'order' => 'required|array',
            'order.*.id' => 'required|exists:gallery_images,id',
            'order.*.sort_order' => 'required|integer',
        ]);

        foreach ($request->order as $item) {
            GalleryImage::where('id', $item['id'])->update(['sort_order' => $item['sort_order']]);
        }

        return redirect()->back()->with('success', 'Gallery reordered successfully.');
    }

    public function destroy(GalleryImage $gallery)
    {
        $gallery->delete();
        return redirect()->back()->with('success', 'Image deleted successfully.');
    }
}
