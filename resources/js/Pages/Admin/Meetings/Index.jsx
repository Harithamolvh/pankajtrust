import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import Modal from '@/Components/Modal';

export default function MeetingsIndex({ meetings }) {
    const [confirmDelete, setConfirmDelete] = useState(null);

    const handleDelete = () => {
        router.delete(route('admin.meetings.destroy', confirmDelete.id), {
            preserveScroll: true,
            onSuccess: () => setConfirmDelete(null),
        });
    };

    return (
        <AdminLayout title="Meetings Manager" breadcrumbs={[{ label: 'Dashboard', href: route('admin.dashboard') }, { label: 'Meetings' }]}>
            <Head title="Meetings | Admin Panel" />

            <div className="mb-6 flex justify-end">
                <Link 
                    href={route('admin.meetings.create')} 
                    className="h-[38px] px-4 flex items-center gap-2 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm"
                >
                    <Plus size={16} /> Add Meeting
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-black/5 overflow-hidden">
                <table className="w-full text-left text-sm font-sans text-charcoal">
                    <thead className="bg-adminBg border-b border-black/5 text-xs uppercase tracking-wider text-charcoal/60">
                        <tr>
                            <th className="px-6 py-4 font-bold">Name</th>
                            <th className="px-6 py-4 font-bold">Date</th>
                            <th className="px-6 py-4 font-bold">Venue</th>
                            <th className="px-6 py-4 font-bold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5">
                        {meetings.data.map((meeting) => (
                            <tr key={meeting.id} className="hover:bg-adminBg/50 transition-colors">
                                <td className="px-6 py-4 font-medium">{meeting.name}</td>
                                <td className="px-6 py-4">{new Date(meeting.date).toLocaleDateString()}</td>
                                <td className="px-6 py-4">
                                    {meeting.venue || '-'} 
                                    {meeting.venue_type && <span className="ml-2 text-xs text-charcoal/50 bg-black/5 px-2 py-0.5 rounded-full capitalize">{meeting.venue_type}</span>}
                                </td>
                                <td className="px-6 py-4 text-right flex justify-end gap-2">
                                    <Link 
                                        href={route('admin.meetings.edit', meeting.id)} 
                                        className="p-1.5 text-charcoal/50 hover:text-saffron transition-colors rounded hover:bg-adminBg inline-block"
                                    >
                                        <Edit2 size={16} />
                                    </Link>
                                    <button 
                                        onClick={() => setConfirmDelete(meeting)} 
                                        className="p-1.5 text-charcoal/50 hover:text-red-600 transition-colors rounded hover:bg-red-50"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {meetings.data.length === 0 && (
                            <tr>
                                <td colSpan="4" className="px-6 py-8 text-center text-charcoal/50">
                                    No meetings found. Click "Add Meeting" to create one.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination placeholder (Assuming standard laravel links) */}
            <div className="mt-4 flex justify-between items-center text-sm text-charcoal/50 font-sans">
                <div>Showing {meetings.from || 0} to {meetings.to || 0} of {meetings.total} results</div>
                {/* Add standard Inertia pagination here if needed */}
            </div>

            <Modal show={!!confirmDelete} onClose={() => setConfirmDelete(null)} maxWidth="sm">
                <div className="p-6">
                    <h2 className="text-lg font-bold text-charcoal mb-4 font-display">Delete Meeting</h2>
                    <p className="text-charcoal/70 mb-6 font-sans text-sm">
                        Are you sure you want to delete this meeting? All associated gallery images and attendee records will also be removed. This action cannot be undone.
                    </p>
                    <div className="flex justify-end gap-3">
                        <button onClick={() => setConfirmDelete(null)} className="px-4 py-2 border border-inputBorder rounded-md text-charcoal hover:bg-adminBg transition-colors font-sans text-sm font-medium">
                            Cancel
                        </button>
                        <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-sans text-sm font-medium">
                            Delete
                        </button>
                    </div>
                </div>
            </Modal>
        </AdminLayout>
    );
}
