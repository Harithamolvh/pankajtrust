import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import DataTable from '@/Components/Admin/DataTable';
import Badge from '@/Components/Admin/Badge';
import { Copy, Check, Eye, Trash2, ExternalLink } from 'lucide-react';
import Modal from '@/Components/Modal';

export default function ApplicationsIndex({ applications, filters, applicationLink }) {
    const [searchQuery, setSearchQuery] = useState(filters.search || '');
    const [confirmDelete, setConfirmDelete] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleSearch = (query) => {
        setSearchQuery(query);
        router.get(route('admin.applications.index'), { ...filters, search: query }, { preserveState: true, replace: true, preserveScroll: true });
    };

    const copyLink = () => {
        navigator.clipboard.writeText(applicationLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDelete = () => {
        router.delete(route('admin.applications.destroy', confirmDelete.id), {
            preserveScroll: true,
            onSuccess: () => setConfirmDelete(null),
        });
    };

    const columns = [
        {
            header: 'Student',
            cell: (row) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-adminBg flex items-center justify-center font-bold text-saffron shrink-0">
                        {row.student_name.charAt(0)}
                    </div>
                    <div>
                        <div className="font-bold">{row.student_name}</div>
                        <div className="text-xs text-charcoal/50">{row.student_phone}</div>
                    </div>
                </div>
            )
        },
        { header: 'School', cell: (row) => row.school_name },
        { header: 'Course', cell: (row) => row.course_name },
        { 
            header: 'Referred By', 
            cell: (row) => (
                <div>
                    <div className="font-medium text-forest">{row.referrer_name}</div>
                    <div className="text-xs text-charcoal/50">{row.referrer_designation || 'Principal'}</div>
                </div>
            ) 
        },
        { header: 'Date', cell: (row) => new Date(row.created_at).toLocaleDateString() },
        {
            header: 'Actions',
            cell: (row) => (
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => router.get(route('admin.applications.show', row.id))}
                        className="p-1.5 text-charcoal/50 hover:text-saffron transition-colors rounded-md hover:bg-adminBg"
                    >
                        <Eye size={16} />
                    </button>
                    <button onClick={() => setConfirmDelete(row)} className="p-1.5 text-charcoal/50 hover:text-red-600 transition-colors rounded-md hover:bg-red-50">
                        <Trash2 size={16} />
                    </button>
                </div>
            )
        }
    ];

    return (
        <AdminLayout title="Scholarship Applications" breadcrumbs={[{ label: 'Dashboard', href: route('admin.dashboard') }, { label: 'Applications' }]}>
            <Head title="Applications | Admin Panel" />

            <div className="mb-6 flex flex-wrap gap-4 items-center justify-between bg-white p-6 rounded-lg shadow-sm border border-black/5">
                <div className="flex-1">
                    <h3 className="text-sm font-bold text-charcoal/40 uppercase tracking-wider mb-2 font-sans">Private Referral Link</h3>
                    <div className="flex items-center gap-3 bg-adminBg p-2 pr-4 rounded-md border border-black/5 max-w-2xl">
                        <code className="text-xs text-charcoal/70 flex-1 truncate font-mono bg-white px-2 py-1.5 rounded border border-black/5">
                            {applicationLink}
                        </code>
                        <button 
                            onClick={copyLink}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold transition-all ${
                                copied ? 'bg-forest text-white' : 'bg-saffron text-white hover:bg-rust'
                            }`}
                        >
                            {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy Link</>}
                        </button>
                        <a 
                            href={applicationLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-1.5 text-charcoal/40 hover:text-saffron transition-colors"
                            title="Open Link"
                        >
                            <ExternalLink size={16} />
                        </a>
                    </div>
                    <p className="mt-2 text-[11px] text-charcoal/40 font-sans italic">
                        Share this link privately with Principals or Educational Officers to receive applications.
                    </p>
                </div>
            </div>

            <DataTable 
                data={applications.data}
                columns={columns}
                pagination={applications}
                searchQuery={searchQuery}
                onSearch={handleSearch}
                emptyState="No scholarship applications found yet."
            />

            {/* Delete Confirmation Modal */}
            <Modal show={!!confirmDelete} onClose={() => setConfirmDelete(null)} maxWidth="sm">
                <div className="p-6">
                    <h2 className="text-lg font-bold text-charcoal mb-4 font-display">Delete Application</h2>
                    <p className="text-charcoal/70 mb-6 font-sans text-sm">
                        Are you sure you want to delete the application for <strong>{confirmDelete?.student_name}</strong>?
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
