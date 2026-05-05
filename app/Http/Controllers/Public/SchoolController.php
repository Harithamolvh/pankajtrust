<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\RefSchool;
use Inertia\Inertia;

class SchoolController extends Controller
{
    public function index()
    {
        $schools = RefSchool::withCount('stdRecipients')
            ->select('ref_schools.*', 'ref_districts.name as district')
            ->leftJoin('ref_areas', 'ref_schools.area_id', '=', 'ref_areas.id')
            ->leftJoin('ref_districts', 'ref_areas.district_id', '=', 'ref_districts.id')
            ->where('ref_schools.active', true)
            ->orderBy('ref_districts.name', 'asc')
            ->orderBy('ref_schools.name', 'asc')
            ->get();

        return Inertia::render('Public/Schools', [
            'schools' => $schools,
            'meta' => [
                'title' => 'Our Sponsor Schools',
                'description' => 'List of sponsor government and aided higher secondary schools in Ernakulam and Idukki districts.',
            ],
        ]);
    }
}
