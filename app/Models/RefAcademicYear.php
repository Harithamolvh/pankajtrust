<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class RefAcademicYear extends Model
{
    use HasUuids;

    protected $table = 'ref_academic_years';

    protected $fillable = [
        'name', 'start_date', 'end_date', 'active'
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'active' => 'boolean',
    ];
}
