import React from 'react';
import { useForm } from '@inertiajs/react';
import { X } from 'lucide-react';
import InputError from '@/Components/InputError';

export default function SchoolForm({ school, onClose }) {
    const isEditing = !!school;
    
    const { data, setData, post, put, processing, errors } = useForm({
        name: school?.name || '',
        district: school?.district || 'ernakulam',
        type: school?.type || 'government',
        address: school?.address || '',
        contact_person: school?.contact_person || '',
        contact_email: school?.contact_email || '',
        contact_phone: school?.contact_phone || '',
        active: school?.active ?? true,
    });

    const submit = (e) => {
        e.preventDefault();
        
        if (isEditing) {
            put(route('admin.schools.update', school.id), {
                preserveScroll: true,
                onSuccess: () => onClose(),
            });
        } else {
            post(route('admin.schools.store'), {
                preserveScroll: true,
                onSuccess: () => onClose(),
            });
        }
    };

    return (
        <>
            <div className="fixed inset-0 bg-charcoal/50 z-[100]" onClick={onClose} />
            
            <div className="fixed inset-y-0 right-0 w-full max-w-lg bg-white shadow-xl z-[110] flex flex-col transform transition-transform duration-300">
                <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 bg-adminBg/30">
                    <h2 className="font-display font-bold text-xl text-charcoal">
                        {isEditing ? 'Edit School' : 'Add New School'}
                    </h2>
                    <button onClick={onClose} className="p-2 text-charcoal/40 hover:text-charcoal hover:bg-white rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    <form id="schoolForm" onSubmit={submit} className="space-y-6">
                        
                        <div>
                            <h3 className="font-sans font-bold text-sm text-saffron uppercase tracking-wider mb-4 border-b border-black/5 pb-2">Basic Information</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">School Name *</label>
                                    <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required />
                                    <InputError message={errors.name} className="mt-1" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">District *</label>
                                        <select value={data.district} onChange={e => setData('district', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required>
                                            <option value="ernakulam">Ernakulam</option>
                                            <option value="idukki">Idukki</option>
                                        </select>
                                        <InputError message={errors.district} className="mt-1" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">School Type *</label>
                                        <select value={data.type} onChange={e => setData('type', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required>
                                            <option value="government">Government</option>
                                            <option value="aided">Aided</option>
                                            <option value="private">Private</option>
                                        </select>
                                        <InputError message={errors.type} className="mt-1" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Full Address</label>
                                    <textarea rows="3" value={data.address} onChange={e => setData('address', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron resize-none"></textarea>
                                    <InputError message={errors.address} className="mt-1" />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 cursor-pointer mt-2">
                                        <input type="checkbox" checked={data.active} onChange={e => setData('active', e.target.checked)} className="rounded border-inputBorder text-saffron focus:ring-saffron bg-white" />
                                        <span className="text-sm font-sans font-medium text-charcoal/80">Active Partner School</span>
                                    </label>
                                    <InputError message={errors.active} className="mt-1" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-sans font-bold text-sm text-saffron uppercase tracking-wider mb-4 border-b border-black/5 pb-2 mt-8">Contact Person</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Name / Designation</label>
                                    <input type="text" placeholder="e.g. Mr. John Doe (Principal)" value={data.contact_person} onChange={e => setData('contact_person', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" />
                                    <InputError message={errors.contact_person} className="mt-1" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Email</label>
                                        <input type="email" value={data.contact_email} onChange={e => setData('contact_email', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" />
                                        <InputError message={errors.contact_email} className="mt-1" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Phone</label>
                                        <input type="text" value={data.contact_phone} onChange={e => setData('contact_phone', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" />
                                        <InputError message={errors.contact_phone} className="mt-1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>

                <div className="px-6 py-4 border-t border-black/5 bg-adminBg/30 flex justify-end gap-3">
                    <button type="button" onClick={onClose} className="px-4 py-2 border border-inputBorder rounded-md text-charcoal hover:bg-white transition-colors font-sans text-sm font-medium">
                        Cancel
                    </button>
                    <button type="submit" form="schoolForm" disabled={processing} className="px-6 py-2 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm disabled:opacity-50 flex items-center gap-2">
                        {processing ? 'Saving...' : 'Save School'}
                    </button>
                </div>
            </div>
        </>
    );
}
