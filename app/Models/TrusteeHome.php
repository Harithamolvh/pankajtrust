<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class TrusteeHome extends Model
{
    use SoftDeletes, HasUuids;

    protected $fillable = [
        'name', 'landline', 'address_1', 'address_2', 'address_3', 'address_4', 'active'
    ];

    protected $casts = [
        'active' => 'boolean',
    ];
    //
}
