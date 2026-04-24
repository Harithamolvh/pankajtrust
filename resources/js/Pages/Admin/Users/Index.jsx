import React, { useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import Badge from '@/Components/Admin/Badge';
import { Plus, Edit2, Trash2, UserCog, ShieldCheck, X } from 'lucide-react';
import Modal from '@/Components/Modal';
import InputError from '@/Components/InputError';

export default function UsersIndex({ users }) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);

    const openForm = (user = null) => {
        setEditingUser(user);
        setIsFormOpen(true);
    };

    const handleDelete = () => {
        router.delete(route('admin.users.destroy', confirmDelete.id), {
            preserveScroll: true,
            onSuccess: () => setConfirmDelete(null),
        });
    };

    return (
        <AdminLayout title="Admin Users" breadcrumbs={[{ label: 'Dashboard', href: route('admin.dashboard') }, { label: 'Users' }]}>
            <Head title="Admin Users | Admin Panel" />

            <div className="mb-6 flex justify-between items-end">
                <div className="flex-1">
                    <p className="text-sm font-sans text-charcoal/60">Manage administrators who can access this panel. Superadmins have full control over all settings and users.</p>
                </div>
                <button onClick={() => openForm()} className="h-[38px] px-4 flex items-center gap-2 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm shrink-0 ml-4">
                    <Plus size={16} /> Add User
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map(user => (
                    <div key={user.id} className="bg-white rounded-lg shadow-sm border border-black/5 p-6 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-forest to-saffron opacity-50"></div>
                        
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 rounded-full bg-adminBg text-charcoal flex items-center justify-center font-bold text-xl uppercase border border-black/5">
                                {user.name.charAt(0)}
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => openForm(user)} className="p-1.5 text-charcoal/30 hover:text-saffron transition-colors rounded hover:bg-adminBg">
                                    <Edit2 size={16} />
                                </button>
                                <button onClick={() => setConfirmDelete(user)} className="p-1.5 text-charcoal/30 hover:text-red-600 transition-colors rounded hover:bg-red-50">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-sans font-bold text-lg text-charcoal truncate">{user.name}</h3>
                            <p className="font-sans text-sm text-charcoal/60 truncate mb-4">{user.email}</p>
                            
                            <div className="flex items-center gap-2">
                                {user.role === 'superadmin' ? (
                                    <Badge status="published" className="flex items-center gap-1">
                                        <ShieldCheck size={12} /> Super Admin
                                    </Badge>
                                ) : (
                                    <Badge status="draft" className="flex items-center gap-1">
                                        <UserCog size={12} /> Administrator
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slide-over Form */}
            {isFormOpen && (
                <UserForm 
                    user={editingUser} 
                    onClose={() => setIsFormOpen(false)} 
                />
            )}

            {/* Delete Confirmation Modal */}
            <Modal show={!!confirmDelete} onClose={() => setConfirmDelete(null)} maxWidth="sm">
                <div className="p-6">
                    <h2 className="text-lg font-bold text-charcoal mb-4 font-display">Delete Admin User</h2>
                    <p className="text-charcoal/70 mb-6 font-sans text-sm">
                        Are you sure you want to remove <strong>{confirmDelete?.name}</strong>'s access? This action cannot be undone.
                    </p>
                    <div className="flex justify-end gap-3">
                        <button onClick={() => setConfirmDelete(null)} className="px-4 py-2 border border-inputBorder rounded-md text-charcoal hover:bg-adminBg transition-colors font-sans text-sm font-medium">
                            Cancel
                        </button>
                        <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-sans text-sm font-medium">
                            Delete User
                        </button>
                    </div>
                </div>
            </Modal>
        </AdminLayout>
    );
}

function UserForm({ user, onClose }) {
    const isEditing = !!user;
    
    const { data, setData, post, put, processing, errors } = useForm({
        name: user?.name || '',
        email: user?.email || '',
        password: '',
        role: user?.role || 'admin',
    });

    const submit = (e) => {
        e.preventDefault();
        
        if (isEditing) {
            put(route('admin.users.update', user.id), {
                preserveScroll: true,
                onSuccess: () => onClose(),
            });
        } else {
            post(route('admin.users.store'), {
                preserveScroll: true,
                onSuccess: () => onClose(),
            });
        }
    };

    return (
        <>
            <div className="fixed inset-0 bg-charcoal/50 z-[100]" onClick={onClose} />
            
            <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl z-[110] flex flex-col transform transition-transform duration-300">
                <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 bg-adminBg/30">
                    <h2 className="font-display font-bold text-xl text-charcoal flex items-center gap-2">
                        <UserCog size={20} className="text-saffron" />
                        {isEditing ? 'Edit User' : 'Add Admin User'}
                    </h2>
                    <button onClick={onClose} className="p-2 text-charcoal/40 hover:text-charcoal hover:bg-white rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    <form id="userForm" onSubmit={submit} className="space-y-6">
                        
                        <div>
                            <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Full Name *</label>
                            <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required />
                            <InputError message={errors.name} className="mt-1" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Email Address *</label>
                            <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required />
                            <InputError message={errors.email} className="mt-1" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Role *</label>
                            <select value={data.role} onChange={e => setData('role', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron bg-white" required>
                                <option value="admin">Administrator</option>
                                <option value="superadmin">Super Admin</option>
                            </select>
                            <p className="text-xs text-charcoal/50 mt-1">Super admins can manage other admin accounts and change system settings.</p>
                            <InputError message={errors.role} className="mt-1" />
                        </div>

                        <div className="border-t border-black/5 pt-6 mt-6">
                            <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">
                                {isEditing ? 'New Password (leave blank to keep current)' : 'Password *'}
                            </label>
                            <input 
                                type="password" 
                                value={data.password} 
                                onChange={e => setData('password', e.target.value)} 
                                className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" 
                                required={!isEditing}
                            />
                            <InputError message={errors.password} className="mt-1" />
                        </div>

                    </form>
                </div>

                <div className="px-6 py-4 border-t border-black/5 bg-adminBg/30 flex justify-end gap-3">
                    <button type="button" onClick={onClose} className="px-4 py-2 border border-inputBorder rounded-md text-charcoal hover:bg-white transition-colors font-sans text-sm font-medium">
                        Cancel
                    </button>
                    <button type="submit" form="userForm" disabled={processing} className="px-6 py-2 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm disabled:opacity-50 flex items-center gap-2">
                        {processing ? 'Saving...' : 'Save User'}
                    </button>
                </div>
            </div>
        </>
    );
}
