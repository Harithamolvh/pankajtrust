<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\School;
use Inertia\Inertia;

class SchoolController extends Controller
{
    public function index()
    {
        $schools = School::withCount('recipients')
            ->orderBy('district')
            ->orderBy('name')
            ->get();
            
        return Inertia::render('Public/Schools', [
            'schools' => $schools,
            'meta' => [
                'title' => 'Partner Schools | Dr. Pankaj Educational and Charitable Trust',
                'description' => 'List of partner government and aided higher secondary schools in Ernakulam and Idukki districts.',
            ],
        ]);
    }
}
