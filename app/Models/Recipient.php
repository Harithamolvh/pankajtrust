<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Recipient extends Model implements HasMedia
{
    use InteractsWithMedia;

    protected $fillable = [
        'name', 'year', 'school_id', 'district', 'course', 'course_type', 'college', 'photo', 'bio', 'academic_score', 'need_score', 'status'
    ];

    public function school()
    {
        return $this->belongsTo(School::class);
    }
}
