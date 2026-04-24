<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Recipient;
use App\Models\School;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\RecipientsExport;
use App\Http\Requests\Admin\StoreRecipientRequest;
use App\Http\Requests\Admin\UpdateRecipientRequest;

class AdminRecipientController extends Controller
{
    public function index(Request $request)
    {
        $query = Recipient::with('school:id,name,district')->latest();

        // Search
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where('name', 'like', "%{$search}%");
        }

        // Filters
        if ($request->filled('year')) {
            $query->where('year', $request->year);
        }
        if ($request->filled('district')) {
            $query->where('district', $request->district);
        }
        if ($request->filled('school_id')) {
            $query->where('school_id', $request->school_id);
        }
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }
        if ($request->filled('course_type')) {
            $query->where('course_type', $request->course_type);
        }

        $recipients = $query->paginate(20)->withQueryString();
        
        $schools = School::select('id', 'name', 'district')->get();
        $years = Recipient::select('year')->distinct()->orderBy('year', 'desc')->pluck('year');

        return Inertia::render('Admin/Recipients/Index', [
            'recipients' => $recipients,
            'filters' => $request->only(['search', 'year', 'district', 'school_id', 'status', 'course_type']),
            'schools' => $schools,
            'years' => $years
        ]);
    }

    public function store(StoreRecipientRequest $request)
    {
        $recipient = Recipient::create($request->validated());

        if ($request->hasFile('photo')) {
            $recipient->addMediaFromRequest('photo')->toMediaCollection('photo');
        }

        return redirect()->back()->with('success', 'Recipient created successfully.');
    }

    public function update(UpdateRecipientRequest $request, Recipient $recipient)
    {
        $recipient->update($request->validated());

        if ($request->hasFile('photo')) {
            $recipient->addMediaFromRequest('photo')->toMediaCollection('photo');
        }

        return redirect()->back()->with('success', 'Recipient updated successfully.');
    }

    public function updateStatus(Request $request, Recipient $recipient)
    {
        $request->validate(['status' => 'required|in:active,completed,withdrawn']);
        $recipient->update(['status' => $request->status]);
        return redirect()->back()->with('success', 'Status updated successfully.');
    }

    public function destroy(Recipient $recipient)
    {
        $recipient->delete();
        return redirect()->back()->with('success', 'Recipient deleted successfully.');
    }

    public function export(Request $request)
    {
        return Excel::download(new RecipientsExport($request->all()), 'recipients.xlsx');
    }
}
