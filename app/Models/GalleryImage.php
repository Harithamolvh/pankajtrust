<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class GalleryImage extends Model implements HasMedia
{
    use InteractsWithMedia;

    protected $fillable = [
        'title', 'caption', 'category', 'file_path', 'sort_order', 'active'
    ];

    protected $casts = [
        'active' => 'boolean',
    ];

    protected $appends = ['url'];

    public function getUrlAttribute()
    {
        return $this->file_path ?: $this->getFirstMediaUrl('gallery');
    }
}
