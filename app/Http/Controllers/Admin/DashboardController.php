<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Recipient;
use App\Models\School;
use App\Models\ContactMessage;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $totalRecipients = Recipient::count();
        $activeScholars = Recipient::where('status', 'active')->count();
        $partnerSchools = School::where('active', true)->count();
        $unreadMessages = ContactMessage::whereNull('read_at')->count();

        $recipientsByYear = Recipient::selectRaw('year, count(*) as total')
            ->groupBy('year')
            ->orderBy('year')
            ->get()
            ->map(fn($item) => ['year' => (string)$item->year, 'total' => $item->total]);

        $statusBreakdown = Recipient::selectRaw('status, count(*) as total')
            ->groupBy('status')
            ->get();

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

        $recentRecipients = Recipient::with('school:id,name')
            ->latest()
            ->take(5)
            ->get(['id', 'name', 'year', 'school_id', 'status']);

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
