import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import { ArrowLeft, Trash2, Mail, Phone, Calendar, Reply } from 'lucide-react';
import Modal from '@/Components/Modal';

export default function MessageShow({ message }) {
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleDelete = () => {
        router.delete(route('admin.messages.destroy', message.id), {
            onSuccess: () => router.visit(route('admin.messages.index')),
        });
    };

    return (
        <AdminLayout 
            title="Message Details" 
            breadcrumbs={[
                { label: 'Dashboard', href: route('admin.dashboard') }, 
                { label: 'Messages', href: route('admin.messages.index') },
                { label: 'Details' }
            ]}
        >
            <Head title={`Message from ${message.name} | Admin Panel`} />

            <div className="max-w-4xl mx-auto">
                <div className="mb-6 flex justify-between items-center">
                    <Link href={route('admin.messages.index')} className="text-sm font-sans font-medium text-charcoal/60 hover:text-saffron transition-colors flex items-center gap-1">
                        <ArrowLeft size={16} /> Back to Inbox
                    </Link>
                    
                    <button onClick={() => setConfirmDelete(true)} className="flex items-center gap-2 text-sm font-sans font-medium text-red-600 hover:text-red-700 transition-colors px-3 py-1.5 rounded-md hover:bg-red-50">
                        <Trash2 size={16} /> Delete Message
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-black/5 overflow-hidden">
                    <div className="p-6 border-b border-black/5 bg-adminBg/30">
                        <h2 className="font-display font-bold text-2xl text-charcoal mb-4">{message.subject}</h2>
                        
                        <div className="flex flex-wrap gap-x-8 gap-y-4">
                            <div className="flex items-center gap-2 text-charcoal/80 font-sans text-sm">
                                <div className="w-8 h-8 rounded-full bg-saffron/10 text-saffron flex items-center justify-center font-bold text-lg uppercase">
                                    {message.name.charAt(0)}
                                </div>
                                <div>
                                    <span className="block font-bold">{message.name}</span>
                                    <a href={`mailto:${message.email}`} className="text-saffron hover:underline flex items-center gap-1 mt-0.5">
                                        <Mail size={12} /> {message.email}
                                    </a>
                                </div>
                            </div>
                            
                            {message.phone && (
                                <div className="flex items-center gap-2 text-charcoal/80 font-sans text-sm border-l border-black/5 pl-8">
                                    <Phone size={16} className="text-charcoal/40" />
                                    <a href={`tel:${message.phone}`} className="hover:text-saffron transition-colors">{message.phone}</a>
                                </div>
                            )}

                            <div className="flex items-center gap-2 text-charcoal/80 font-sans text-sm border-l border-black/5 pl-8">
                                <Calendar size={16} className="text-charcoal/40" />
                                <span>{new Date(message.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 font-sans text-charcoal/90 leading-relaxed whitespace-pre-wrap">
                        {message.message}
                    </div>

                    <div className="p-6 border-t border-black/5 bg-adminBg/30 flex justify-end">
                        <a href={`mailto:${message.email}?subject=Re: ${message.subject}`} className="px-6 py-2.5 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm flex items-center gap-2">
                            <Reply size={16} /> Reply via Email
                        </a>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            <Modal show={confirmDelete} onClose={() => setConfirmDelete(false)} maxWidth="sm">
                <div className="p-6">
                    <h2 className="text-lg font-bold text-charcoal mb-4 font-display">Delete Message</h2>
                    <p className="text-charcoal/70 mb-6 font-sans text-sm">
                        Are you sure you want to delete this message? This action cannot be undone.
                    </p>
                    <div className="flex justify-end gap-3">
                        <button onClick={() => setConfirmDelete(false)} className="px-4 py-2 border border-inputBorder rounded-md text-charcoal hover:bg-adminBg transition-colors font-sans text-sm font-medium">
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
