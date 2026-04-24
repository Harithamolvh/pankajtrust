<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Donor;
use Inertia\Inertia;
use App\Http\Requests\Admin\StoreDonorRequest;
use App\Http\Requests\Admin\UpdateDonorRequest;

class AdminDonorController extends Controller
{
    public function index()
    {
        $donors = Donor::orderBy('sort_order', 'asc')->get();

        return Inertia::render('Admin/Donors/Index', [
            'donors' => $donors,
        ]);
    }

    public function store(StoreDonorRequest $request)
    {
        $maxSort = Donor::max('sort_order') ?? 0;
        $data = $request->validated();
        $data['sort_order'] = $maxSort + 1;
        
        Donor::create($data);
        return redirect()->back()->with('success', 'Donor created successfully.');
    }

    public function update(UpdateDonorRequest $request, Donor $donor)
    {
        $donor->update($request->validated());
        return redirect()->back()->with('success', 'Donor updated successfully.');
    }

    public function reorder(Request $request)
    {
        $request->validate([
            'order' => 'required|array',
            'order.*.id' => 'required|exists:donors,id',
            'order.*.sort_order' => 'required|integer',
        ]);

        foreach ($request->order as $item) {
            Donor::where('id', $item['id'])->update(['sort_order' => $item['sort_order']]);
        }

        return redirect()->back()->with('success', 'Donors reordered successfully.');
    }

    public function destroy(Donor $donor)
    {
        $donor->delete();
        return redirect()->back()->with('success', 'Donor deleted successfully.');
    }
}
