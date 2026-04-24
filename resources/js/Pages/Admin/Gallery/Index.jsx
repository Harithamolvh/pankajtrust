import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import { Plus, Edit2, Trash2, GripHorizontal, Upload } from 'lucide-react';
import GalleryUploadModal from './GalleryUploadModal';
import GalleryEditModal from './GalleryEditModal';
import Modal from '@/Components/Modal';

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
    rectSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableImageCard({ image, onEdit, onDelete }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: image.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 50 : 'auto',
    };

    return (
        <div 
            ref={setNodeRef} 
            style={style} 
            className={`relative group rounded-lg overflow-hidden border border-black/5 bg-white shadow-sm transition-all ${isDragging ? 'opacity-50 scale-105 shadow-xl' : 'hover:shadow-md'}`}
        >
            <div className="aspect-[4/3] w-full bg-adminBg relative">
                {image.url ? (
                    <img src={image.url} alt={image.title || 'Gallery image'} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-charcoal/20">No Image</div>
                )}
                
                {/* Drag Handle Overlay */}
                <div 
                    {...attributes} 
                    {...listeners} 
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-grab active:cursor-grabbing"
                >
                    <GripHorizontal className="text-white drop-shadow-md" size={32} />
                </div>

                {!image.active && (
                    <div className="absolute top-2 left-2 bg-charcoal text-white text-xs px-2 py-1 rounded font-sans font-medium opacity-90">
                        Hidden
                    </div>
                )}
            </div>

            <div className="p-3">
                <div className="flex justify-between items-start gap-2">
                    <div className="flex-1 min-w-0">
                        <h4 className="font-sans font-bold text-sm text-charcoal truncate">{image.title || 'Untitled'}</h4>
                        <p className="font-sans text-xs text-charcoal/50 capitalize mt-0.5">{image.category}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                        <button onClick={() => onEdit(image)} className="p-1 text-charcoal/50 hover:text-saffron transition-colors rounded hover:bg-adminBg">
                            <Edit2 size={14} />
                        </button>
                        <button onClick={() => onDelete(image)} className="p-1 text-charcoal/50 hover:text-red-600 transition-colors rounded hover:bg-red-50">
                            <Trash2 size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function GalleryIndex({ images, filters }) {
    const [items, setItems] = useState(images || []);
    const [isUploadOpen, setIsUploadOpen] = useState(false);
    const [editingImage, setEditingImage] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);
    const [isReordering, setIsReordering] = useState(false);

    const handleFilterChange = (category) => {
        router.get(route('admin.gallery.index'), { category }, { preserveState: true, replace: true, preserveScroll: true });
    };

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        }),
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

        router.post(route('admin.gallery.reorder'), { order: payload }, {
            preserveScroll: true,
            onSuccess: () => setIsReordering(false),
            onError: () => {
                setIsReordering(false);
                setItems(images); // Revert on error
            }
        });
    };

    const handleDelete = () => {
        router.delete(route('admin.gallery.destroy', confirmDelete.id), {
            preserveScroll: true,
            onSuccess: () => setConfirmDelete(null),
        });
    };

    return (
        <AdminLayout title="Gallery Manager" breadcrumbs={[{ label: 'Dashboard', href: route('admin.dashboard') }, { label: 'Gallery' }]}>
            <Head title="Gallery | Admin Panel" />

            <div className="mb-6 flex flex-wrap gap-4 items-end justify-between bg-white p-4 rounded-lg shadow-sm border border-black/5">
                <div className="flex flex-wrap gap-4 flex-1">
                    <div>
                        <label className="block text-xs font-bold text-charcoal/60 uppercase tracking-wider mb-1 font-sans">Filter by Category</label>
                        <select className="border-inputBorder rounded-md text-sm font-sans focus:ring-saffron focus:border-saffron bg-white" value={filters.category || ''} onChange={e => handleFilterChange(e.target.value)}>
                            <option value="">All Categories</option>
                            <option value="events">Events</option>
                            <option value="students">Students</option>
                            <option value="schools">Schools</option>
                            <option value="founder">Founder</option>
                            <option value="general">General</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-sm font-sans text-charcoal/50 mr-2">
                        {isReordering ? 'Saving order...' : 'Drag images to reorder'}
                    </span>
                    <button onClick={() => setIsUploadOpen(true)} className="h-[38px] px-4 flex items-center gap-2 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm">
                        <Upload size={16} /> Bulk Upload
                    </button>
                </div>
            </div>

            <div className="relative min-h-[400px]">
                {items.length === 0 ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-charcoal/50 bg-white rounded-lg border border-black/5 border-dashed">
                        <Upload size={48} className="mb-4 text-charcoal/20" />
                        <p className="font-sans font-medium">No images found in this category.</p>
                        <p className="font-sans text-sm mt-1">Click bulk upload to add some.</p>
                    </div>
                ) : (
                    <DndContext 
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext 
                            items={items.map(i => i.id)}
                            strategy={rectSortingStrategy}
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {items.map((image) => (
                                    <SortableImageCard 
                                        key={image.id} 
                                        image={image} 
                                        onEdit={setEditingImage} 
                                        onDelete={setConfirmDelete} 
                                    />
                                ))}
                            </div>
                        </SortableContext>
                    </DndContext>
                )}
            </div>

            {/* Upload Modal */}
            <Modal show={isUploadOpen} onClose={() => setIsUploadOpen(false)} maxWidth="2xl">
                <GalleryUploadModal onClose={() => setIsUploadOpen(false)} />
            </Modal>

            {/* Edit Modal */}
            <Modal show={!!editingImage} onClose={() => setEditingImage(null)} maxWidth="md">
                {editingImage && (
                    <GalleryEditModal 
                        image={editingImage} 
                        onClose={() => setEditingImage(null)} 
                    />
                )}
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal show={!!confirmDelete} onClose={() => setConfirmDelete(null)} maxWidth="sm">
                <div className="p-6">
                    <h2 className="text-lg font-bold text-charcoal mb-4 font-display">Delete Image</h2>
                    <p className="text-charcoal/70 mb-6 font-sans text-sm">
                        Are you sure you want to delete this image? This action cannot be undone.
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
