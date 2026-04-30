<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\StdRecipient;
use App\Models\RefSchool;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\RecipientsExport;
use App\Http\Requests\Admin\StoreRecipientRequest;
use App\Http\Requests\Admin\UpdateRecipientRequest;

class AdminRecipientController extends Controller
{
    public function index(Request $request)
    {
        $query = StdRecipient::with(['refSchool', 'refCollege', 'refCourse'])->latest();

        // Search
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where('name', 'like', "%{$search}%");
        }

        // Filters
        if ($request->filled('year')) {
            $query->where('start_year', $request->year);
        }
        if ($request->filled('school_id')) {
            $query->where('ref_school_id', $request->school_id);
        }
        if ($request->filled('active')) {
            $query->where('active', $request->active === 'yes');
        }

        $recipients = $query->paginate(20)->withQueryString();
        
        $schools = RefSchool::select('id', 'name')->get();
        $colleges = \App\Models\RefCollege::select('id', 'name')->get();
        $courses = \App\Models\RefCourse::select('id', 'name')->get();
        $years = StdRecipient::select('start_year as year')->distinct()->whereNotNull('start_year')->orderBy('start_year', 'desc')->pluck('year');

        return Inertia::render('Admin/Recipients/Index', [
            'recipients' => $recipients,
            'filters' => $request->only(['search', 'year', 'school_id', 'active']),
            'schools' => $schools,
            'colleges' => $colleges,
            'courses' => $courses,
            'years' => $years
        ]);
    }

    public function store(StoreRecipientRequest $request)
    {
        $recipient = StdRecipient::create($request->validated());

        if ($request->hasFile('photo')) {
            $recipient->addMediaFromRequest('photo')->toMediaCollection('photo');
        }

        return redirect()->back()->with('success', 'Recipient created successfully.');
    }

    public function update(UpdateRecipientRequest $request, StdRecipient $recipient)
    {
        $recipient->update($request->validated());

        if ($request->hasFile('photo')) {
            $recipient->addMediaFromRequest('photo')->toMediaCollection('photo');
        }

        return redirect()->back()->with('success', 'Recipient updated successfully.');
    }

    public function updateStatus(Request $request, StdRecipient $recipient)
    {
        $recipient->update(['active' => !$recipient->active]);
        return redirect()->back()->with('success', 'Status updated successfully.');
    }

    public function destroy(StdRecipient $recipient)
    {
        $recipient->delete();
        return redirect()->back()->with('success', 'Recipient deleted successfully.');
    }

    public function export(Request $request)
    {
        return Excel::download(new RecipientsExport($request->all()), 'recipients.xlsx');
    }
}
