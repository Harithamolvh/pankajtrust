<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Recipient;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RecipientController extends Controller
{
    public function index(Request $request)
    {
        $query = Recipient::with('school')->orderBy('year', 'desc')->orderBy('name', 'asc');

        if ($request->has('year') && $request->year != '') {
            $query->where('year', $request->year);
        }

        if ($request->has('search') && $request->search != '') {
            $query->where(function($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('course', 'like', '%' . $request->search . '%')
                  ->orWhere('college', 'like', '%' . $request->search . '%');
            });
        }

        $recipients = $query->paginate(12)->withQueryString();
        
        $years = Recipient::select('year')->distinct()->orderBy('year', 'desc')->pluck('year');

        return Inertia::render('Public/Recipients/Index', [
            'recipients' => $recipients,
            'years' => $years,
            'filters' => $request->only(['year', 'search']),
            'meta' => [
                'title' => 'Our Scholars | Dr. Pankaj Educational and Charitable Trust',
                'description' => 'Meet the bright and talented students supported by the Dr. Pankaj Educational and Charitable Trust.',
            ],
        ]);
    }
}
