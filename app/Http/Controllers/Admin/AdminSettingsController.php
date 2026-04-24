<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\SiteSetting;
use Inertia\Inertia;

class AdminSettingsController extends Controller
{
    public function index()
    {
        $settings = SiteSetting::all()->groupBy('group');

        return Inertia::render('Admin/Settings/Index', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'settings' => 'required|array',
            'settings.*.key' => 'required|string|exists:site_settings,key',
            'settings.*.value' => 'nullable|string',
        ]);

        foreach ($data['settings'] as $settingData) {
            SiteSetting::where('key', $settingData['key'])->update(['value' => $settingData['value']]);
        }

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }
}
