import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import DataTable from '@/Components/Admin/DataTable';
import Badge from '@/Components/Admin/Badge';
import { Plus, Download, Edit2, Trash2 } from 'lucide-react';
import RecipientForm from './RecipientForm';
import Modal from '@/Components/Modal';

export default function RecipientsIndex({ recipients, filters, schools, colleges, courses, years }) {
    const [searchQuery, setSearchQuery] = useState(filters.search || '');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingRecipient, setEditingRecipient] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);

    const handleSearch = (query) => {
        setSearchQuery(query);
        router.get(route('admin.recipients.index'), { ...filters, search: query }, { preserveState: true, replace: true, preserveScroll: true });
    };

    const handleFilterChange = (key, value) => {
        router.get(route('admin.recipients.index'), { ...filters, [key]: value }, { preserveState: true, replace: true, preserveScroll: true });
    };

    const handleExport = () => {
        window.location.href = route('admin.recipients.export', filters);
    };

    const toggleStatus = (recipient) => {
        router.patch(route('admin.recipients.status', recipient.id), {}, { preserveScroll: true });
    };

    const openForm = (recipient = null) => {
        setEditingRecipient(recipient);
        setIsFormOpen(true);
    };

    const handleDelete = () => {
        router.delete(route('admin.recipients.destroy', confirmDelete.id), {
            preserveScroll: true,
            onSuccess: () => setConfirmDelete(null),
        });
    };

    const columns = [
        {
            header: 'Name',
            cell: (row) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-adminBg flex items-center justify-center font-bold text-saffron shrink-0">
                        {row.name.charAt(0)}
                    </div>
                    <div>
                        <div className="font-bold">{row.name}</div>
                    </div>
                </div>
            )
        },
        { header: 'Batch', cell: (row) => row.start_year },
        { header: 'School', cell: (row) => row.ref_school?.name || '-' },
        { header: 'College', cell: (row) => row.ref_college?.name || '-' },
        { header: 'Course', cell: (row) => row.ref_course?.name || '-' },
        { 
            header: 'Status', 
            cell: (row) => (
                <button onClick={() => toggleStatus(row)} className="hover:opacity-80 transition-opacity focus:outline-none">
                    <Badge status={row.active ? 'active' : 'withdrawn'}>{row.active ? 'Active' : 'Inactive'}</Badge>
                </button>
            )
        },
        {
            header: 'Actions',
            cell: (row) => (
                <div className="flex items-center gap-2">
                    <button onClick={() => openForm(row)} className="p-1.5 text-charcoal/50 hover:text-saffron transition-colors rounded-md hover:bg-adminBg">
                        <Edit2 size={16} />
                    </button>
                    <button onClick={() => setConfirmDelete(row)} className="p-1.5 text-charcoal/50 hover:text-red-600 transition-colors rounded-md hover:bg-red-50">
                        <Trash2 size={16} />
                    </button>
                </div>
            )
        }
    ];

    return (
        <AdminLayout title="Recipients Manager" breadcrumbs={[{ label: 'Dashboard', href: route('admin.dashboard') }, { label: 'Recipients' }]}>
            <Head title="Recipients | Admin Panel" />

            <div className="mb-6 flex flex-wrap gap-4 items-end justify-between bg-white p-4 rounded-lg shadow-sm border border-black/5">
                <div className="flex flex-wrap gap-4 flex-1">
                    <div>
                        <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-wider mb-1 font-sans">Batch Year</label>
                        <select className="border-inputBorder rounded-md text-sm font-sans focus:ring-saffron focus:border-saffron bg-white" value={filters.year || ''} onChange={e => handleFilterChange('year', e.target.value)}>
                            <option value="">All Years</option>
                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-wider mb-1 font-sans">Status</label>
                        <select className="border-inputBorder rounded-md text-sm font-sans focus:ring-saffron focus:border-saffron bg-white" value={filters.active || ''} onChange={e => handleFilterChange('active', e.target.value)}>
                            <option value="">All Statuses</option>
                            <option value="yes">Active</option>
                            <option value="no">Inactive</option>
                        </select>
                    </div>
                    <div className="flex items-end">
                        <button onClick={handleExport} className="h-[38px] px-4 flex items-center gap-2 border border-inputBorder rounded-md text-charcoal hover:bg-adminBg transition-colors font-sans text-sm font-medium">
                            <Download size={16} /> Export CSV
                        </button>
                    </div>
                </div>
            </div>

            <DataTable 
                data={recipients.data}
                columns={columns}
                pagination={recipients}
                searchQuery={searchQuery}
                onSearch={handleSearch}
                actions={
                    <button onClick={() => openForm()} className="h-[38px] px-4 flex items-center gap-2 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm">
                        <Plus size={16} /> Add Recipient
                    </button>
                }
            />

            {/* Slide-over Form */}
            {isFormOpen && (
                <RecipientForm 
                    recipient={editingRecipient} 
                    schools={schools}
                    colleges={colleges}
                    courses={courses}
                    onClose={() => setIsFormOpen(false)} 
                />
            )}

            {/* Delete Confirmation Modal */}
            <Modal show={!!confirmDelete} onClose={() => setConfirmDelete(null)} maxWidth="sm">
                <div className="p-6">
                    <h2 className="text-lg font-bold text-charcoal mb-4 font-display">Delete Recipient</h2>
                    <p className="text-charcoal/70 mb-6 font-sans text-sm">
                        Are you sure you want to delete <strong>{confirmDelete?.name}</strong>? This action cannot be undone.
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
