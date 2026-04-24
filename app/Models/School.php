<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $fillable = [
        'name', 'district', 'address', 'type', 'contact_person', 'contact_email', 'contact_phone', 'active'
    ];

    protected $casts = [
        'active' => 'boolean',
    ];

    public function recipients()
    {
        return $this->hasMany(Recipient::class);
    }
}
