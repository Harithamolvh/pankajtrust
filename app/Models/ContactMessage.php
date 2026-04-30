<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class ContactMessage extends Model
{
    use HasUuids;
    protected $fillable = [
        'name', 'email', 'phone', 'subject', 'message', 'read_at', 'replied_at'
    ];

    protected $casts = [
        'read_at' => 'datetime',
        'replied_at' => 'datetime',
    ];
}
