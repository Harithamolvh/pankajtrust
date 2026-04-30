<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Meeting extends Model implements HasMedia
{
    use SoftDeletes, InteractsWithMedia, HasUuids;

    protected $fillable = [
        'year_id',
        'district',
        'name',
        'date',
        'minutes',
        'agenda',
        'venue',
        'venue_type',
        'is_distribution',
        'delete_reason'
    ];

    protected $casts = [
        'date' => 'datetime',
        'is_distribution' => 'boolean',
    ];

    public function attendees()
    {
        return $this->belongsToMany(User::class)->withPivot('signature', 'comments', 'status');
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('meeting_gallery')
             ->acceptsMimeTypes(['image/jpeg', 'image/png', 'image/webp']);
    }

    public function academicYear()
    {
        return $this->belongsTo(RefAcademicYear::class, 'year_id');
    }
}
