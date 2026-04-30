<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Trustee extends Model
{
    use SoftDeletes, HasUuids;

    protected $fillable = [
        'user_id', 'home_id', 'gender', 'mobile', 'whatsapp', 'rank', 'work', 'active'
    ];

    protected $casts = [
        'active' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function home()
    {
        return $this->belongsTo(TrusteeHome::class, 'home_id');
    }
    //
}
