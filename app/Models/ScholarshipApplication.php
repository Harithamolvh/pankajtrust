<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\SoftDeletes;

class ScholarshipApplication extends Model
{
    use HasUuids, SoftDeletes;

    protected $fillable = [
        'student_name',
        'student_phone',
        'student_email',
        'school_name',
        'course_name',
        'referrer_name',
        'referrer_phone',
        'referrer_designation',
        'referrer_remarks',
        'status',
    ];
}
