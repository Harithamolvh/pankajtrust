import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import { Plus, Edit2, Trash2, GripVertical } from 'lucide-react';
import DonorForm from './DonorForm';
import Modal from '@/Components/Modal';
import Badge from '@/Components/Admin/Badge';

import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableRow({ donor, onEdit, onDelete }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: donor.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 50 : 'auto',
        boxShadow: isDragging ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none',
    };

    return (
        <tr ref={setNodeRef} style={style} className={`bg-white border-b border-black/5 last:border-0 hover:bg-adminBg/50 transition-colors ${isDragging ? 'opacity-50' : ''}`}>
            <td className="px-4 py-4 w-12">
                <button {...attributes} {...listeners} className="text-charcoal/30 hover:text-charcoal cursor-grab active:cursor-grabbing focus:outline-none">
                    <GripVertical size={20} />
                </button>
            </td>
            <td className="px-6 py-4">
                <div className="font-bold font-sans text-charcoal">{donor.name}</div>
                <div className="text-xs text-charcoal/50 font-sans mt-0.5">{donor.relationship}</div>
            </td>
            <td className="px-6 py-4">
                <Badge status={donor.contribution_type === 'capital' ? 'published' : (donor.contribution_type === 'annual' ? 'completed' : 'draft')}>
                    {donor.contribution_type.replace('-', ' ')}
                </Badge>
            </td>
            <td className="px-6 py-4 font-sans text-sm text-charcoal/70">
                {donor.amount ? `₹${parseFloat(donor.amount).toLocaleString('en-IN')}` : '-'}
                {donor.year && <span className="text-xs text-charcoal/40 block">in {donor.year}</span>}
            </td>
            <td className="px-6 py-4">
                <Badge status={donor.display_publicly ? 'active' : 'draft'}>{donor.display_publicly ? 'Public' : 'Hidden'}</Badge>
            </td>
            <td className="px-6 py-4 text-right whitespace-nowrap">
                <div className="flex items-center justify-end gap-2">
                    <button onClick={() => onEdit(donor)} className="p-1.5 text-charcoal/50 hover:text-saffron transition-colors rounded-md hover:bg-adminBg">
                        <Edit2 size={16} />
                    </button>
                    <button onClick={() => onDelete(donor)} className="p-1.5 text-charcoal/50 hover:text-red-600 transition-colors rounded-md hover:bg-red-50">
                        <Trash2 size={16} />
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default function DonorsIndex({ donors }) {
    const [items, setItems] = useState(donors || []);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingDonor, setEditingDonor] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);
    const [isReordering, setIsReordering] = useState(false);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over.id);
                
                const newItems = arrayMove(items, oldIndex, newIndex);
                
                // Save order to backend
                saveReorder(newItems);
                
                return newItems;
            });
        }
    };

    const saveReorder = (newItems) => {
        setIsReordering(true);
        
        const payload = newItems.map((item, index) => ({
            id: item.id,
            sort_order: index + 1
        }));

        router.post(route('admin.donors.reorder'), { order: payload }, {
            preserveScroll: true,
            onSuccess: () => setIsReordering(false),
            onError: () => {
                setIsReordering(false);
                setItems(donors); // Revert on error
            }
        });
    };

    const openForm = (donor = null) => {
        setEditingDonor(donor);
        setIsFormOpen(true);
    };

    const handleDelete = () => {
        router.delete(route('admin.donors.destroy', confirmDelete.id), {
            preserveScroll: true,
            onSuccess: () => setConfirmDelete(null),
        });
    };

    return (
        <AdminLayout title="Donors Manager" breadcrumbs={[{ label: 'Dashboard', href: route('admin.dashboard') }, { label: 'Donors' }]}>
            <Head title="Donors | Admin Panel" />

            <div className="mb-6 flex justify-between items-end">
                <div className="flex-1">
                    <p className="text-sm font-sans text-charcoal/60">Drag and drop rows using the grip icon to reorder how donors appear on the public website.</p>
                </div>
                <button onClick={() => openForm()} className="h-[38px] px-4 flex items-center gap-2 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm shrink-0 ml-4">
                    <Plus size={16} /> Add Donor
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-black/5 overflow-hidden relative">
                {isReordering && (
                    <div className="absolute inset-0 bg-white/50 z-10 flex items-center justify-center backdrop-blur-[1px]">
                        <span className="font-sans font-bold text-sm text-saffron">Saving Order...</span>
                    </div>
                )}
                <table className="min-w-full divide-y divide-black/5 relative">
                    <thead className="bg-adminTh">
                        <tr>
                            <th scope="col" className="px-4 py-3 w-12 text-center text-xs font-bold text-charcoal/60"></th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-charcoal/60 uppercase tracking-wider font-sans">Donor Info</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-charcoal/60 uppercase tracking-wider font-sans">Type</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-charcoal/60 uppercase tracking-wider font-sans">Amount</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-charcoal/60 uppercase tracking-wider font-sans">Visibility</th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-bold text-charcoal/60 uppercase tracking-wider font-sans">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-black/5 relative">
                        {items.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="px-6 py-12 text-center text-charcoal/50 font-sans">
                                    No donors found.
                                </td>
                            </tr>
                        ) : (
                            <DndContext 
                                sensors={sensors}
                                collisionDetection={closestCenter}
                                onDragEnd={handleDragEnd}
                            >
                                <SortableContext 
                                    items={items.map(i => i.id)}
                                    strategy={verticalListSortingStrategy}
                                >
                                    {items.map((donor) => (
                                        <SortableRow 
                                            key={donor.id} 
                                            donor={donor} 
                                            onEdit={openForm} 
                                            onDelete={setConfirmDelete} 
                                        />
                                    ))}
                                </SortableContext>
                            </DndContext>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Slide-over Form */}
            {isFormOpen && (
                <DonorForm 
                    donor={editingDonor} 
                    onClose={() => setIsFormOpen(false)} 
                />
            )}

            {/* Delete Confirmation Modal */}
            <Modal show={!!confirmDelete} onClose={() => setConfirmDelete(null)} maxWidth="sm">
                <div className="p-6">
                    <h2 className="text-lg font-bold text-charcoal mb-4 font-display">Delete Donor</h2>
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
