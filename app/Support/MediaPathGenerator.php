<?php

namespace App\Support;

use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\MediaLibrary\Support\PathGenerator\PathGenerator;
use App\Models\Meeting;

class MediaPathGenerator implements PathGenerator
{
    public function getPath(Media $media): string
    {
        return $this->getBasePath($media) . '/';
    }

    public function getPathForConversions(Media $media): string
    {
        return $this->getBasePath($media) . '/conversions/';
    }

    public function getPathForResponsiveImages(Media $media): string
    {
        return $this->getBasePath($media) . '/responsive-images/';
    }

    protected function getBasePath(Media $media): string
    {
        $model = $media->model;

        if ($model instanceof Meeting) {
            $year = $model->academicYear ? $model->academicYear->name : 'unknown-year';
            $location = $model->district ?? 'unknown-location';
            
            return 'events/' . $year . '/' . $location . '/' . $media->uuid;
        }

        // Fallback to default behavior
        return $media->uuid;
    }
}
