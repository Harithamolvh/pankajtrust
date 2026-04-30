import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { X, Upload, Image as ImageIcon } from 'lucide-react';
import InputError from '@/Components/InputError';

export default function RecipientForm({ recipient, schools, colleges, courses, onClose }) {
    const isEditing = !!recipient;
    
    const { data, setData, post, put, processing, errors, clearErrors } = useForm({
        name: recipient?.name || '',
        start_year: recipient?.start_year || new Date().getFullYear(),
        ref_school_id: recipient?.ref_school_id || '',
        ref_college_id: recipient?.ref_college_id || '',
        ref_course_id: recipient?.ref_course_id || '',
        duration: recipient?.duration || '',
        remarks: recipient?.remarks || '',
        active: recipient?.active ?? true,
        photo: null,
    });

    const [photoPreview, setPhotoPreview] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('photo', file);
            setPhotoPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e) => {
        e.preventDefault();
        
        if (isEditing) {
            post(route('admin.recipients.update', recipient.id), {
                _method: 'PUT',
                preserveScroll: true,
                onSuccess: () => onClose(),
            });
        } else {
            post(route('admin.recipients.store'), {
                preserveScroll: true,
                onSuccess: () => onClose(),
            });
        }
    };

    return (
        <>
            <div className="fixed inset-0 bg-charcoal/50 z-[100]" onClick={onClose} />
            
            <div className="fixed inset-y-0 right-0 w-full max-w-xl bg-white shadow-xl z-[110] flex flex-col transform transition-transform duration-300">
                <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 bg-adminBg/30">
                    <h2 className="font-display font-bold text-xl text-charcoal">
                        {isEditing ? 'Edit Recipient' : 'Add New Recipient'}
                    </h2>
                    <button onClick={onClose} className="p-2 text-charcoal/40 hover:text-charcoal hover:bg-white rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                    <form id="recipientForm" onSubmit={submit} className="space-y-8">
                        
                        {/* Personal Info */}
                        <div>
                            <h3 className="font-sans font-bold text-sm text-saffron uppercase tracking-wider mb-4 border-b border-black/5 pb-2">Basic Information</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Full Name *</label>
                                    <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required />
                                    <InputError message={errors.name} className="mt-1" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Batch (Start Year) *</label>
                                    <input type="number" min="1999" max={new Date().getFullYear()} value={data.start_year} onChange={e => setData('start_year', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required />
                                    <InputError message={errors.start_year} className="mt-1" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Active Status</label>
                                    <select value={data.active ? '1' : '0'} onChange={e => setData('active', e.target.value === '1')} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron">
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                    <InputError message={errors.active} className="mt-1" />
                                </div>
                            </div>
                        </div>

                        {/* Photo */}
                        <div>
                            <label className="block text-sm font-bold text-charcoal/80 mb-2 font-sans">Recipient Photo</label>
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 rounded-lg border border-inputBorder bg-adminBg flex items-center justify-center overflow-hidden shrink-0">
                                    {photoPreview ? (
                                        <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                                    ) : (
                                        <ImageIcon size={24} className="text-charcoal/20" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-white border border-inputBorder rounded-md text-sm font-medium text-charcoal hover:bg-adminBg transition-colors shadow-sm">
                                        <Upload size={16} /> Choose Image
                                        <input type="file" className="hidden" accept="image/*" onChange={handlePhotoChange} />
                                    </label>
                                    <p className="text-xs text-charcoal/50 mt-2 font-sans">Square image recommended. Max 2MB.</p>
                                    <InputError message={errors.photo} className="mt-1" />
                                </div>
                            </div>
                        </div>

                        {/* Institutions */}
                        <div>
                            <h3 className="font-sans font-bold text-sm text-saffron uppercase tracking-wider mb-4 border-b border-black/5 pb-2">Institution Details</h3>
                            
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">School (Original)</label>
                                    <select value={data.ref_school_id} onChange={e => setData('ref_school_id', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron">
                                        <option value="">Select School</option>
                                        {schools.map(s => (
                                            <option key={s.id} value={s.id}>{s.name}</option>
                                        ))}
                                    </select>
                                    <InputError message={errors.ref_school_id} className="mt-1" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">College</label>
                                    <select value={data.ref_college_id} onChange={e => setData('ref_college_id', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron">
                                        <option value="">Select College</option>
                                        {colleges.map(c => (
                                            <option key={c.id} value={c.id}>{c.name}</option>
                                        ))}
                                    </select>
                                    <InputError message={errors.ref_college_id} className="mt-1" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Course</label>
                                    <select value={data.ref_course_id} onChange={e => setData('ref_course_id', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron">
                                        <option value="">Select Course</option>
                                        {courses.map(c => (
                                            <option key={c.id} value={c.id}>{c.name}</option>
                                        ))}
                                    </select>
                                    <InputError message={errors.ref_course_id} className="mt-1" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Course Duration (Years)</label>
                                    <input type="number" step="0.5" value={data.duration} onChange={e => setData('duration', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" />
                                    <InputError message={errors.duration} className="mt-1" />
                                </div>
                            </div>
                        </div>

                        {/* Remarks */}
                        <div>
                            <h3 className="font-sans font-bold text-sm text-saffron uppercase tracking-wider mb-4 border-b border-black/5 pb-2">Remarks</h3>
                            <div>
                                <textarea rows="3" value={data.remarks} onChange={e => setData('remarks', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron resize-none" placeholder="Add any special notes..."></textarea>
                                <InputError message={errors.remarks} className="mt-1" />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="px-6 py-4 border-t border-black/5 bg-adminBg/30 flex justify-end gap-3">
                    <button type="button" onClick={onClose} className="px-4 py-2 border border-inputBorder rounded-md text-charcoal hover:bg-white transition-colors font-sans text-sm font-medium">
                        Cancel
                    </button>
                    <button type="submit" form="recipientForm" disabled={processing} className="px-6 py-2 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm disabled:opacity-50 flex items-center gap-2">
                        {processing ? 'Saving...' : 'Save Recipient'}
                    </button>
                </div>
            </div>
        </>
    );
}
