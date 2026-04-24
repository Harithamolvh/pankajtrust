import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { X, Upload, Image as ImageIcon } from 'lucide-react';
import InputError from '@/Components/InputError';

export default function RecipientForm({ recipient, schools, onClose }) {
    const isEditing = !!recipient;
    
    const { data, setData, post, put, processing, errors, clearErrors } = useForm({
        name: recipient?.name || '',
        year: recipient?.year || new Date().getFullYear(),
        district: recipient?.district || 'ernakulam',
        school_id: recipient?.school_id || '',
        status: recipient?.status || 'active',
        course: recipient?.course || '',
        course_type: recipient?.course_type || '3year',
        college: recipient?.college || '',
        academic_score: recipient?.academic_score || '',
        need_score: recipient?.need_score || '',
        bio: recipient?.bio || '',
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
            // Inertia doesn't support PUT with files easily, use POST with _method=PUT
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
                            <h3 className="font-sans font-bold text-sm text-saffron uppercase tracking-wider mb-4 border-b border-black/5 pb-2">Personal Information</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Full Name *</label>
                                    <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required />
                                    <InputError message={errors.name} className="mt-1" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Year of Selection *</label>
                                    <input type="number" min="1999" max={new Date().getFullYear()} value={data.year} onChange={e => setData('year', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required />
                                    <InputError message={errors.year} className="mt-1" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Status *</label>
                                    <select value={data.status} onChange={e => setData('status', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required>
                                        <option value="active">Active</option>
                                        <option value="completed">Completed</option>
                                        <option value="withdrawn">Withdrawn</option>
                                    </select>
                                    <InputError message={errors.status} className="mt-1" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">District *</label>
                                    <select value={data.district} onChange={e => setData('district', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required>
                                        <option value="ernakulam">Ernakulam</option>
                                        <option value="idukki">Idukki</option>
                                    </select>
                                    <InputError message={errors.district} className="mt-1" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">School *</label>
                                    <select value={data.school_id} onChange={e => setData('school_id', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required>
                                        <option value="">Select School</option>
                                        {schools.filter(s => s.district === data.district).map(s => (
                                            <option key={s.id} value={s.id}>{s.name}</option>
                                        ))}
                                    </select>
                                    <InputError message={errors.school_id} className="mt-1" />
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

                        {/* Academic Info */}
                        <div>
                            <h3 className="font-sans font-bold text-sm text-saffron uppercase tracking-wider mb-4 border-b border-black/5 pb-2">Academic Information</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Course Name *</label>
                                    <input type="text" placeholder="e.g. B.Sc Computer Science" value={data.course} onChange={e => setData('course', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required />
                                    <InputError message={errors.course} className="mt-1" />
                                </div>

                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">College/Institution *</label>
                                    <input type="text" value={data.college} onChange={e => setData('college', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required />
                                    <InputError message={errors.college} className="mt-1" />
                                </div>

                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Course Type *</label>
                                    <select value={data.course_type} onChange={e => setData('course_type', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" required>
                                        <option value="3year">3-Year Course</option>
                                        <option value="4year">4-Year Professional Course</option>
                                    </select>
                                    <InputError message={errors.course_type} className="mt-1" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Academic Score (out of 50)</label>
                                    <input type="number" step="0.1" min="0" max="50" value={data.academic_score} onChange={e => setData('academic_score', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" />
                                    <InputError message={errors.academic_score} className="mt-1" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Need Score (out of 50)</label>
                                    <input type="number" step="0.1" min="0" max="50" value={data.need_score} onChange={e => setData('need_score', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" />
                                    <InputError message={errors.need_score} className="mt-1" />
                                </div>

                                <div className="col-span-2 bg-adminBg p-3 rounded-md flex justify-between items-center border border-black/5">
                                    <span className="font-sans font-bold text-sm text-charcoal/70">Total Selection Score:</span>
                                    <span className="font-stats font-bold text-2xl text-forest">
                                        {((parseFloat(data.academic_score) || 0) + (parseFloat(data.need_score) || 0)).toFixed(1)} <span className="text-sm text-charcoal/40">/ 100</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Bio */}
                        <div>
                            <h3 className="font-sans font-bold text-sm text-saffron uppercase tracking-wider mb-4 border-b border-black/5 pb-2">Biography</h3>
                            <div>
                                <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Short Bio (Optional)</label>
                                <textarea rows="4" value={data.bio} onChange={e => setData('bio', e.target.value)} maxLength="300" className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron resize-none"></textarea>
                                <div className="flex justify-between mt-1">
                                    <InputError message={errors.bio} />
                                    <span className="text-xs text-charcoal/40 font-sans ml-auto">{data.bio?.length || 0}/300</span>
                                </div>
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
