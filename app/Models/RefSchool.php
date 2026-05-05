<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class RefSchool extends Model
{
    use HasUuids;

    protected $guarded = [];

    public function stdRecipients()
    {
        return $this->hasMany(StdRecipient::class);
    }
}
