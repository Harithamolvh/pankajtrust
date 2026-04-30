<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Models\Meeting;
use App\Http\Requests\Admin\StoreMeetingRequest;
use App\Http\Requests\Admin\UpdateMeetingRequest;

class MeetingController extends Controller
{
    public function index()
    {
        $meetings = Meeting::orderBy('date', 'desc')->paginate(10);
        
        return Inertia::render('Admin/Meetings/Index', [
            'meetings' => $meetings
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Meetings/Form');
    }

    public function store(StoreMeetingRequest $request)
    {
        $meeting = Meeting::create($request->validated());

        if ($request->has('attendees')) {
            $meeting->attendees()->sync($request->attendees);
        }

        if ($request->hasFile('gallery_images')) {
            foreach ($request->file('gallery_images') as $file) {
                $meeting->addMedia($file)->toMediaCollection('meeting_gallery');
            }
        }

        return redirect()->route('admin.meetings.index')->with('success', 'Meeting created successfully.');
    }

    public function edit(Meeting $meeting)
    {
        $meeting->load('attendees');
        $meeting->loadMedia('meeting_gallery');

        return Inertia::render('Admin/Meetings/Form', [
            'meeting' => $meeting
        ]);
    }

    public function update(UpdateMeetingRequest $request, Meeting $meeting)
    {
        $meeting->update($request->validated());

        if ($request->has('attendees')) {
            $meeting->attendees()->sync($request->attendees);
        }

        if ($request->hasFile('gallery_images')) {
            foreach ($request->file('gallery_images') as $file) {
                $meeting->addMedia($file)->toMediaCollection('meeting_gallery');
            }
        }

        return redirect()->route('admin.meetings.index')->with('success', 'Meeting updated successfully.');
    }

    public function destroy(Meeting $meeting)
    {
        $meeting->delete();
        return redirect()->back()->with('success', 'Meeting deleted successfully.');
    }
}
