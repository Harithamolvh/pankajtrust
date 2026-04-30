<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class GalleryImage extends Model implements HasMedia
{
    use InteractsWithMedia, HasUuids;

    protected $guarded = [];

    public function getUrlAttribute()
    {
        return $this->getFirstMediaUrl('gallery');
    }
}
