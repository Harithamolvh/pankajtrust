<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\StdRecipient;
use App\Models\RefSchool;
use App\Models\ContactMessage;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $totalRecipients = StdRecipient::count();
        $activeScholars = StdRecipient::where('active', true)->count();
        $partnerSchools = RefSchool::count();
        $unreadMessages = ContactMessage::whereNull('read_at')->count();

        $recipientsByYear = StdRecipient::selectRaw('start_year as year, count(*) as total')
            ->whereNotNull('start_year')
            ->groupBy('start_year')
            ->orderBy('start_year')
            ->get()
            ->map(fn($item) => ['year' => (string)$item->year, 'total' => $item->total]);

        $statusBreakdown = StdRecipient::selectRaw('active, count(*) as total')
            ->groupBy('active')
            ->get()
            ->map(fn($item) => ['status' => $item->active ? 'active' : 'inactive', 'total' => $item->total]);

        $recentMessages = ContactMessage::latest()
            ->take(5)
            ->get()
            ->map(function ($msg) {
                return [
                    'id' => $msg->id,
                    'name' => $msg->name,
                    'subject' => $msg->subject,
                    'read_at' => $msg->read_at,
                    'created_at_human' => $msg->created_at->diffForHumans()
                ];
            });

        $recentRecipients = StdRecipient::with('refSchool:id,name')
            ->latest()
            ->take(5)
            ->get(['id', 'name', 'start_year', 'ref_school_id', 'active'])
            ->map(function ($r) {
                return [
                    'id' => $r->id,
                    'name' => $r->name,
                    'year' => $r->start_year,
                    'school' => $r->refSchool,
                    'status' => $r->active ? 'active' : 'inactive'
                ];
            });

        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'total_recipients' => $totalRecipients,
                'active_scholars' => $activeScholars,
                'partner_schools' => $partnerSchools,
                'unread_messages' => $unreadMessages,
            ],
            'charts' => [
                'recipients_by_year' => $recipientsByYear,
                'status_breakdown' => $statusBreakdown,
            ],
            'recent_activity' => [
                'messages' => $recentMessages,
                'recipients' => $recentRecipients,
            ]
        ]);
    }
}
