<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Donor extends Model
{
    protected $fillable = [
        'name', 'relationship', 'contribution_type', 'amount', 'year', 'description', 'display_publicly', 'sort_order'
    ];

    protected $casts = [
        'display_publicly' => 'boolean',
    ];
}
