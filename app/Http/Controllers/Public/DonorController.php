<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Donor;
use Inertia\Inertia;

class DonorController extends Controller
{
    public function index()
    {
        $donors = Donor::where('active', true)->orderBy('name')->get();
            
        return Inertia::render('Public/Donors', [
            'donors' => $donors,
            'meta' => [
                'title' => 'Our Donors | Dr. Pankaj Educational and Charitable Trust',
                'description' => 'Acknowledging the generous contributors who make our scholarship program possible.',
            ],
        ]);
    }
}
