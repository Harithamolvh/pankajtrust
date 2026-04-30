<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class NewsPost extends Model implements HasMedia
{
    use InteractsWithMedia, HasUuids;
    
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('cover')->singleFile();
    }

    protected $fillable = [
        'title', 'slug', 'excerpt', 'body', 'cover_image', 'author_id', 'published_at', 'meta_title', 'meta_description'
    ];

    public function getCoverUrlAttribute()
    {
        return $this->getFirstMediaUrl('cover');
    }

    protected $casts = [
        'published_at' => 'datetime',
    ];

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function scopePublished($query)
    {
        return $query->whereNotNull('published_at')->where('published_at', '<=', now());
    }
}
