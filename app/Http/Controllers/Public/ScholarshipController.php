<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ScholarshipController extends Controller
{
    public function index()
    {
        return Inertia::render('Public/Scholarship', [
            'meta' => [
                'title' => 'Scholarship Program | Dr. Pankaj Educational and Charitable Trust',
                'description' => 'Details about the merit-cum-means scholarship program, selection criteria, and support structure.',
            ],
        ]);
    }
}
