import React from 'react';
import { useForm } from '@inertiajs/react';
import { X } from 'lucide-react';
import InputError from '@/Components/InputError';

export default function DonorForm({ donor, onClose }) {
    const isEditing = !!donor;
    
    const { data, setData, post, put, processing, errors } = useForm({
        name: donor?.name || '',
        relationship: donor?.relationship || '',
        contribution_type: donor?.contribution_type || 'capital',
        amount: donor?.amount || '',
        year: donor?.year || new Date().getFullYear(),
        description: donor?.description || '',
        display_publicly: donor?.display_publicly ?? true,
    });

    const submit = (e) => {
        e.preventDefault();
        
        if (isEditing) {
            put(route('admin.donors.update', donor.id), {
                preserveScroll: true,
                onSuccess: () => onClose(),
            });
        } else {
            post(route('admin.donors.store'), {
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
                        {isEditing ? 'Edit Donor' : 'Add New Donor'}
                    </h2>
                    <button onClick={onClose} className="p-2 text-charcoal/40 hover:text-charcoal hover:bg-white rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    <form id="donorForm" onSubmit={submit} className="space-y-6">
                        
                        <div>
                            <h3 className="font-sans font-bold text-sm text-saffron uppercase tracking-wider mb-4 border-b border-black/5 pb-2">Donor Information</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Full Name / Organization *</label>
                                    <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required />
                                    <InputError message={errors.name} className="mt-1" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Relationship/Title *</label>
                                    <input type="text" placeholder="e.g. Well Wisher, Corporate Partner" value={data.relationship} onChange={e => setData('relationship', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required />
                                    <InputError message={errors.relationship} className="mt-1" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Contribution Type *</label>
                                        <select value={data.contribution_type} onChange={e => setData('contribution_type', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required>
                                            <option value="capital">Capital</option>
                                            <option value="annual">Annual</option>
                                            <option value="one-time">One-Time</option>
                                        </select>
                                        <InputError message={errors.contribution_type} className="mt-1" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Year</label>
                                        <input type="number" min="1999" value={data.year} onChange={e => setData('year', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" />
                                        <InputError message={errors.year} className="mt-1" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Amount (₹)</label>
                                    <input type="number" step="0.01" min="0" value={data.amount} onChange={e => setData('amount', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" />
                                    <InputError message={errors.amount} className="mt-1" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Short Description / Message</label>
                                    <textarea rows="3" value={data.description} onChange={e => setData('description', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron resize-none"></textarea>
                                    <InputError message={errors.description} className="mt-1" />
                                </div>

                                <div className="bg-adminBg p-4 rounded-md border border-black/5 mt-4">
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input type="checkbox" checked={data.display_publicly} onChange={e => setData('display_publicly', e.target.checked)} className="rounded border-inputBorder text-saffron focus:ring-saffron bg-white mt-1" />
                                        <div>
                                            <span className="text-sm font-sans font-bold text-charcoal">Display Publicly</span>
                                            <p className="text-xs font-sans text-charcoal/60 mt-0.5">If unchecked, this donor will be hidden from the public website.</p>
                                        </div>
                                    </label>
                                    <InputError message={errors.display_publicly} className="mt-1" />
                                </div>
                            </div>
                        </div>

                    </form>
                </div>

                <div className="px-6 py-4 border-t border-black/5 bg-adminBg/30 flex justify-end gap-3">
                    <button type="button" onClick={onClose} className="px-4 py-2 border border-inputBorder rounded-md text-charcoal hover:bg-white transition-colors font-sans text-sm font-medium">
                        Cancel
                    </button>
                    <button type="submit" form="donorForm" disabled={processing} className="px-6 py-2 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm disabled:opacity-50 flex items-center gap-2">
                        {processing ? 'Saving...' : 'Save Donor'}
                    </button>
                </div>
            </div>
        </>
    );
}
