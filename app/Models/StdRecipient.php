<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class StdRecipient extends Model
{
    use HasUuids;

    protected $guarded = [];

    protected $casts = [
        'start_year' => 'integer',
        'duration' => 'float',
        'active' => 'boolean',
        'inactive_from' => 'datetime',
    ];

    public function refSchool()
    {
        return $this->belongsTo(RefSchool::class, 'ref_school_id');
    }

    public function refCollege()
    {
        return $this->belongsTo(RefCollege::class, 'ref_college_id');
    }

    public function refCourse()
    {
        return $this->belongsTo(RefCourse::class, 'ref_course_id');
    }
}
