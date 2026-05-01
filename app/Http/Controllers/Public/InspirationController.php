<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class InspirationController extends Controller
{
    public function index()
    {
        return Inertia::render('Public/Inspiration', [
            'meta' => [
                'title' => 'Our Inspiration | Dr. Pankaj Educational and Charitable Trust',
                'description' => 'Learn about the inspiring journey of our founder, Dr. Thampil Pankaj.',
            ],
        ]);
    }
}
