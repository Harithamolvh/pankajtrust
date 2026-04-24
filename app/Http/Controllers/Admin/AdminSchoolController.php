<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\School;
use Inertia\Inertia;
use App\Http\Requests\Admin\StoreSchoolRequest;
use App\Http\Requests\Admin\UpdateSchoolRequest;

class AdminSchoolController extends Controller
{
    public function index(Request $request)
    {
        $query = School::withCount('recipients')->latest();

        if ($request->filled('search')) {
            $query->where('name', 'like', "%{$request->search}%");
        }
        if ($request->filled('district')) {
            $query->where('district', $request->district);
        }
        if ($request->filled('type')) {
            $query->where('type', $request->type);
        }
        if ($request->filled('active')) {
            $query->where('active', $request->active === 'true');
        }

        $schools = $query->paginate(20)->withQueryString();

        return Inertia::render('Admin/Schools/Index', [
            'schools' => $schools,
            'filters' => $request->only(['search', 'district', 'type', 'active']),
        ]);
    }

    public function store(StoreSchoolRequest $request)
    {
        School::create($request->validated());
        return redirect()->back()->with('success', 'School created successfully.');
    }

    public function update(UpdateSchoolRequest $request, School $school)
    {
        $school->update($request->validated());
        return redirect()->back()->with('success', 'School updated successfully.');
    }

    public function toggle(Request $request, School $school)
    {
        $school->update(['active' => !$school->active]);
        return redirect()->back()->with('success', 'School status updated successfully.');
    }

    public function destroy(School $school)
    {
        if ($school->recipients()->exists()) {
            return redirect()->back()->with('error', 'Cannot delete school because it has recipients linked to it.');
        }
        
        $school->delete();
        return redirect()->back()->with('success', 'School deleted successfully.');
    }
}
