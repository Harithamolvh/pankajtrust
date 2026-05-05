import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import DataTable from '@/Components/Admin/DataTable';
import Badge from '@/Components/Admin/Badge';
import { Plus, Edit2, Trash2, MapPin } from 'lucide-react';
import SchoolForm from './SchoolForm';
import Modal from '@/Components/Modal';

export default function SchoolsIndex({ schools, filters }) {
    const [searchQuery, setSearchQuery] = useState(filters.search || '');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingSchool, setEditingSchool] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);

    const handleSearch = (query) => {
        setSearchQuery(query);
        router.get(route('admin.schools.index'), { ...filters, search: query }, { preserveState: true, replace: true, preserveScroll: true });
    };

    const handleFilterChange = (key, value) => {
        router.get(route('admin.schools.index'), { ...filters, [key]: value }, { preserveState: true, replace: true, preserveScroll: true });
    };

    const toggleStatus = (school) => {
        router.patch(route('admin.schools.toggle', school.id), {}, { preserveScroll: true });
    };

    const openForm = (school = null) => {
        setEditingSchool(school);
        setIsFormOpen(true);
    };

    const handleDelete = () => {
        router.delete(route('admin.schools.destroy', confirmDelete.id), {
            preserveScroll: true,
            onSuccess: () => setConfirmDelete(null),
        });
    };

    const columns = [
        {
            header: 'School',
            cell: (row) => (
                <div>
                    <div className="font-bold font-sans text-charcoal">{row.name}</div>
                    <div className="text-xs text-charcoal/50 flex items-center gap-1 mt-0.5">
                        <MapPin size={12} /> <span className="capitalize">{row.district}</span>
                    </div>
                </div>
            )
        },
        { 
            header: 'Type', 
            cell: (row) => <span className="capitalize font-sans">{row.type}</span> 
        },
        { 
            header: 'Contact', 
            cell: (row) => (
                <div className="font-sans">
                    <div className="text-sm">{row.contact_person || '-'}</div>
                    <div className="text-xs text-charcoal/50">{row.contact_phone || ''}</div>
                </div>
            ) 
        },
        { 
            header: 'Recipients', 
            cell: (row) => <span className="font-stats font-bold text-lg text-forest">{row.recipients_count}</span> 
        },
        { 
            header: 'Status', 
            cell: (row) => (
                <button onClick={() => toggleStatus(row)} className="hover:opacity-80 transition-opacity focus:outline-none">
                    <Badge status={row.active ? 'active' : 'draft'}>{row.active ? 'Active' : 'Inactive'}</Badge>
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
                    <button onClick={() => setConfirmDelete(row)} className="p-1.5 text-charcoal/50 hover:text-red-600 transition-colors rounded-md hover:bg-red-50" title={row.recipients_count > 0 ? "Cannot delete school with recipients" : "Delete school"}>
                        <Trash2 size={16} className={row.recipients_count > 0 ? "opacity-30" : ""} />
                    </button>
                </div>
            )
        }
    ];

    return (
        <AdminLayout title="Sponsor Schools" breadcrumbs={[{ label: 'Dashboard', href: route('admin.dashboard') }, { label: 'Schools' }]}>
            <Head title="Schools | Admin Panel" />

            <div className="mb-6 flex flex-wrap gap-4 items-end justify-between bg-white p-4 rounded-lg shadow-sm border border-black/5">
                <div className="flex flex-wrap gap-4 flex-1">
                    <div>
                        <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-wider mb-1 font-sans">District</label>
                        <select className="border-inputBorder rounded-md text-sm font-sans focus:ring-saffron focus:border-saffron bg-white" value={filters.district || ''} onChange={e => handleFilterChange('district', e.target.value)}>
                            <option value="">All Districts</option>
                            <option value="ernakulam">Ernakulam</option>
                            <option value="idukki">Idukki</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-wider mb-1 font-sans">Type</label>
                        <select className="border-inputBorder rounded-md text-sm font-sans focus:ring-saffron focus:border-saffron bg-white" value={filters.type || ''} onChange={e => handleFilterChange('type', e.target.value)}>
                            <option value="">All Types</option>
                            <option value="government">Government</option>
                            <option value="aided">Aided</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-wider mb-1 font-sans">Status</label>
                        <select className="border-inputBorder rounded-md text-sm font-sans focus:ring-saffron focus:border-saffron bg-white" value={filters.active || ''} onChange={e => handleFilterChange('active', e.target.value)}>
                            <option value="">All Statuses</option>
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                        </select>
                    </div>
                </div>
            </div>

            <DataTable 
                data={schools.data}
                columns={columns}
                pagination={schools}
                searchQuery={searchQuery}
                onSearch={handleSearch}
                actions={
                    <button onClick={() => openForm()} className="h-[38px] px-4 flex items-center gap-2 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm">
                        <Plus size={16} /> Add School
                    </button>
                }
            />

            {/* Slide-over Form */}
            {isFormOpen && (
                <SchoolForm 
                    school={editingSchool} 
                    onClose={() => setIsFormOpen(false)} 
                />
            )}

            {/* Delete Confirmation Modal */}
            <Modal show={!!confirmDelete} onClose={() => setConfirmDelete(null)} maxWidth="sm">
                <div className="p-6">
                    <h2 className="text-lg font-bold text-charcoal mb-4 font-display">Delete School</h2>
                    {confirmDelete?.recipients_count > 0 ? (
                        <>
                            <div className="bg-red-50 text-red-800 p-4 rounded-md mb-6 font-sans text-sm">
                                <strong>Cannot delete this school.</strong> There are currently {confirmDelete.recipients_count} recipients associated with this school. Please reassign or remove them first.
                            </div>
                            <div className="flex justify-end">
                                <button onClick={() => setConfirmDelete(null)} className="px-4 py-2 bg-charcoal text-white rounded-md hover:bg-black transition-colors font-sans text-sm font-medium">
                                    Okay, understood
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </Modal>
        </AdminLayout>
    );
}
