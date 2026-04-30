<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\ScholarshipApplication;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScholarshipApplicationController extends Controller
{
    public function create()
    {
        return Inertia::render('Public/Applications/Create', [
            'meta' => [
                'title' => 'Scholarship Application | Dr. Pankaj Trust',
                'description' => 'Refer a student for the Dr. Pankaj Trust scholarship program.',
            ],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'student_name' => 'required|string|max:255',
            'student_phone' => 'required|string|max:20',
            'student_email' => 'nullable|email|max:255',
            'school_name' => 'required|string|max:255',
            'course_name' => 'required|string|max:255',
            'referrer_name' => 'required|string|max:255',
            'referrer_phone' => 'required|string|max:20',
            'referrer_designation' => 'nullable|string|max:100',
            'referrer_remarks' => 'nullable|string|max:1000',
        ]);

        ScholarshipApplication::create($validated);

        return redirect()->back()->with('success', 'Application submitted successfully! Our team will review and contact you.');
    }
}
