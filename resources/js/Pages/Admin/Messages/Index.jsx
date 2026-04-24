import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import DataTable from '@/Components/Admin/DataTable';
import Badge from '@/Components/Admin/Badge';
import { Trash2, Eye, MailOpen, Mail } from 'lucide-react';
import Modal from '@/Components/Modal';

export default function MessagesIndex({ messages, filters }) {
    const [searchQuery, setSearchQuery] = useState(filters.search || '');
    const [confirmDelete, setConfirmDelete] = useState(null);

    const handleSearch = (query) => {
        setSearchQuery(query);
        router.get(route('admin.messages.index'), { ...filters, search: query }, { preserveState: true, replace: true, preserveScroll: true });
    };

    const handleFilterChange = (status) => {
        router.get(route('admin.messages.index'), { ...filters, status }, { preserveState: true, replace: true, preserveScroll: true });
    };

    const handleDelete = () => {
        router.delete(route('admin.messages.destroy', confirmDelete.id), {
            preserveScroll: true,
            onSuccess: () => setConfirmDelete(null),
        });
    };

    const columns = [
        {
            header: 'Sender',
            cell: (row) => (
                <div className="font-sans">
                    <div className={`font-bold ${row.read_at ? 'text-charcoal/80' : 'text-charcoal'}`}>{row.name}</div>
                    <div className="text-xs text-charcoal/50 mt-0.5">{row.email}</div>
                </div>
            )
        },
        { 
            header: 'Subject', 
            cell: (row) => (
                <div className={`font-sans max-w-sm truncate ${row.read_at ? 'text-charcoal/80' : 'text-charcoal font-semibold'}`}>
                    {row.subject}
                </div>
            ) 
        },
        { 
            header: 'Status', 
            cell: (row) => (
                <Badge status={row.read_at ? 'published' : 'draft'} className="flex items-center gap-1 w-max">
                    {row.read_at ? <MailOpen size={12} /> : <Mail size={12} />}
                    {row.read_at ? 'Read' : 'New'}
                </Badge>
            )
        },
        { 
            header: 'Date', 
            cell: (row) => (
                <div className="font-sans text-sm text-charcoal/70">
                    {new Date(row.created_at).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </div>
            ) 
        },
        {
            header: 'Actions',
            cell: (row) => (
                <div className="flex items-center gap-2">
                    <Link href={route('admin.messages.show', row.id)} className="p-1.5 text-charcoal/50 hover:text-saffron transition-colors rounded-md hover:bg-adminBg" title="View Message">
                        <Eye size={16} />
                    </Link>
                    <button onClick={() => setConfirmDelete(row)} className="p-1.5 text-charcoal/50 hover:text-red-600 transition-colors rounded-md hover:bg-red-50" title="Delete Message">
                        <Trash2 size={16} />
                    </button>
                </div>
            )
        }
    ];

    return (
        <AdminLayout title="Messages & Enquiries" breadcrumbs={[{ label: 'Dashboard', href: route('admin.dashboard') }, { label: 'Messages' }]}>
            <Head title="Messages | Admin Panel" />

            <div className="mb-6 flex flex-wrap gap-4 items-end justify-between bg-white p-4 rounded-lg shadow-sm border border-black/5">
                <div className="flex flex-wrap gap-4 flex-1">
                    <div>
                        <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-wider mb-1 font-sans">Filter by Status</label>
                        <select className="border-inputBorder rounded-md text-sm font-sans focus:ring-saffron focus:border-saffron bg-white" value={filters.status || ''} onChange={e => handleFilterChange(e.target.value)}>
                            <option value="">All Messages</option>
                            <option value="unread">Unread Only</option>
                            <option value="read">Read Only</option>
                        </select>
                    </div>
                </div>
            </div>

            <DataTable 
                data={messages.data}
                columns={columns}
                pagination={messages}
                searchQuery={searchQuery}
                onSearch={handleSearch}
            />

            {/* Delete Confirmation Modal */}
            <Modal show={!!confirmDelete} onClose={() => setConfirmDelete(null)} maxWidth="sm">
                <div className="p-6">
                    <h2 className="text-lg font-bold text-charcoal mb-4 font-display">Delete Message</h2>
                    <p className="text-charcoal/70 mb-6 font-sans text-sm">
                        Are you sure you want to delete this message from <strong>{confirmDelete?.name}</strong>? This action cannot be undone.
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
