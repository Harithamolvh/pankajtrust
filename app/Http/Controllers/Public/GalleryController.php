<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Media;
use App\Models\Meeting;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {
        $mediaRecords = Media::with(['model.academicYear'])
            ->where('model_type', Meeting::class)
            ->where('collection_name', 'meeting_gallery')
            ->orderBy('created_at', 'desc')
            ->get();

        $meetingImages = $mediaRecords->map(function ($media) {
            $meeting = $media->model;
            
            $customTitle = $media->getCustomProperty('title');
            $customDesc = $media->getCustomProperty('description');
            
            $captionParts = [];
            if ($customDesc) $captionParts[] = $customDesc;
            if ($meeting && $meeting->district) $captionParts[] = 'District: ' . $meeting->district;

            return [
                'id' => $media->uuid,
                'url' => $media->getUrl(),
                'title' => $customTitle ?: ($meeting ? $meeting->name : 'Gallery Image'),
                'category' => $meeting && $meeting->academicYear ? $meeting->academicYear->name : 'General',
                'district' => $meeting ? $meeting->district : null,
                'caption' => implode(' | ', $captionParts),
            ];
        });

        $galleryImages = \App\Models\GalleryImage::where('active', true)
            ->orderBy('sort_order')
            ->get()
            ->map(function ($img) {
                return [
                    'id' => $img->id,
                    'url' => $img->url,
                    'title' => $img->title,
                    'category' => $img->category ?: 'General',
                    'district' => null,
                    'caption' => $img->title,
                ];
            });

        $images = $meetingImages->concat($galleryImages);
            
        return Inertia::render('Public/Gallery', [
            'images' => $images,
            'meta' => [
                'title' => 'Photo Gallery | Dr. Pankaj Educational and Charitable Trust',
                'description' => 'A visual journey through the activities, events, and milestones of the Dr. Pankaj Educational and Charitable Trust.',
            ],
        ]);
    }
}
