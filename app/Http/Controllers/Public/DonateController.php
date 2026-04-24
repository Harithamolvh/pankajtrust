<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DonateController extends Controller
{
    public function index()
    {
        return Inertia::render('Public/Donate', [
            'meta' => [
                'title' => 'Donate | Dr. Pankaj Educational and Charitable Trust',
                'description' => 'Support bright, financially disadvantaged students in Kerala. Your contribution makes a lasting impact.',
            ],
        ]);
    }
}
