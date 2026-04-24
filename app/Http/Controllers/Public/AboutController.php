<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        return Inertia::render('Public/About', [
            'meta' => [
                'title' => 'About the Trust | Dr. Pankaj Educational and Charitable Trust',
                'description' => 'Learn about the history, mission, and the founder of Dr. Pankaj Educational and Charitable Trust.',
            ],
        ]);
    }
}
