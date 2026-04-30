<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\RefSchool;
use Inertia\Inertia;

class SchoolController extends Controller
{
    public function index()
    {
        $schools = RefSchool::orderBy('district')
            ->orderBy('name')
            ->get();

        $districts = $schools->groupBy('district');

        return Inertia::render('Public/Schools/Index', [
            'districts' => $districts,
            'meta' => [
                'title' => 'Our Partner Schools',
                'description' => 'List of partner government and aided higher secondary schools in Ernakulam and Idukki districts.',
            ],
        ]);
    }
}
