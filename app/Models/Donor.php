<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Donor extends Model
{
    use HasUuids;
    protected $fillable = [
        'name', 'relationship', 'contribution_type', 'amount', 'year', 'description', 'display_publicly', 'sort_order'
    ];

    protected $casts = [
        'display_publicly' => 'boolean',
    ];
}
