<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ScholarshipApplication;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminScholarshipApplicationController extends Controller
{
    public function index(Request $request)
    {
        $query = ScholarshipApplication::latest();

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('student_name', 'like', "%{$search}%")
                  ->orWhere('referrer_name', 'like', "%{$search}%")
                  ->orWhere('school_name', 'like', "%{$search}%");
            });
        }

        $applications = $query->paginate(20)->withQueryString();

        return Inertia::render('Admin/Applications/Index', [
            'applications' => $applications,
            'filters' => $request->only(['search']),
            'applicationLink' => route('scholarship.apply')
        ]);
    }

    public function show(ScholarshipApplication $application)
    {
        return Inertia::render('Admin/Applications/Show', [
            'application' => $application
        ]);
    }

    public function destroy(ScholarshipApplication $application)
    {
        $application->delete();
        return redirect()->back()->with('success', 'Application deleted successfully.');
    }
}
