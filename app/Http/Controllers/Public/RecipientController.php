<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\StdRecipient;
use App\Models\RefSchool;
use App\Models\RefCollege;
use App\Models\RefCourse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RecipientController extends Controller
{
    public function index(Request $request)
    {
        $query = StdRecipient::with(['refSchool', 'refCollege', 'refCourse'])
            ->orderBy('start_year', 'desc')
            ->orderBy('name', 'asc');

        if ($request->filled('year')) {
            $query->where('start_year', $request->year);
        }

        if ($request->filled('search')) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        if ($request->filled('school')) {
            $query->where('ref_school_id', $request->school);
        }

        if ($request->filled('college')) {
            $query->where('ref_college_id', $request->college);
        }

        if ($request->filled('course')) {
            $query->where('ref_course_id', $request->course);
        }

        if ($request->filled('duration')) {
            $query->where('duration', $request->duration);
        }

        $recipients = $query->paginate(12)->withQueryString();
        
        $years = StdRecipient::select('start_year')->distinct()->whereNotNull('start_year')->orderBy('start_year', 'desc')->pluck('start_year');
        $schools = RefSchool::whereIn('id', StdRecipient::select('ref_school_id')->distinct())->orderBy('name')->get(['id', 'name']);
        $colleges = RefCollege::whereIn('id', StdRecipient::select('ref_college_id')->distinct())->orderBy('name')->get(['id', 'name']);
        $courses = RefCourse::whereIn('id', StdRecipient::select('ref_course_id')->distinct())->orderBy('name')->get(['id', 'name']);

        return Inertia::render('Public/Recipients/Index', [
            'recipients' => $recipients,
            'years' => $years,
            'schools' => $schools,
            'colleges' => $colleges,
            'courses' => $courses,
            'filters' => $request->only(['year', 'search', 'school', 'college', 'course', 'duration']),
            'meta' => [
                'title' => 'Our Scholars | Dr. Pankaj Educational and Charitable Trust',
                'description' => 'Meet the bright and talented students supported by the Dr. Pankaj Educational and Charitable Trust.',
            ],
        ]);
    }
}
