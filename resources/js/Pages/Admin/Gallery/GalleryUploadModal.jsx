import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { X, Upload, FileImage, XCircle } from 'lucide-react';
import InputError from '@/Components/InputError';

export default function GalleryUploadModal({ onClose }) {
    const { data, setData, post, processing, errors, progress } = useForm({
        images: [],
        title: '',
        caption: '',
        category: 'general',
        active: true,
    });

    const [previews, setPreviews] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        
        if (files.length > 0) {
            setData('images', [...data.images, ...files]);
            
            // Generate previews
            const newPreviews = files.map(file => ({
                name: file.name,
                url: URL.createObjectURL(file),
                size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
            }));
            
            setPreviews([...previews, ...newPreviews]);
        }
    };

    const removeFile = (index) => {
        const newImages = [...data.images];
        newImages.splice(index, 1);
        setData('images', newImages);

        const newPreviews = [...previews];
        URL.revokeObjectURL(newPreviews[index].url);
        newPreviews.splice(index, 1);
        setPreviews(newPreviews);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.gallery.store'), {
            preserveScroll: true,
            onSuccess: () => {
                previews.forEach(p => URL.revokeObjectURL(p.url));
                onClose();
            },
        });
    };

    return (
        <div className="flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 bg-adminBg/30 shrink-0">
                <h2 className="font-display font-bold text-xl text-charcoal flex items-center gap-2">
                    <Upload size={20} className="text-saffron" />
                    Bulk Upload Images
                </h2>
                <button onClick={onClose} className="p-2 text-charcoal/40 hover:text-charcoal hover:bg-white rounded-full transition-colors">
                    <X size={20} />
                </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
                <form id="uploadForm" onSubmit={submit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Col: Upload Area */}
                        <div>
                            <label className="block text-sm font-bold text-charcoal/80 mb-2 font-sans">Select Images *</label>
                            
                            <div className="border-2 border-dashed border-inputBorder rounded-lg bg-adminBg/50 hover:bg-adminBg transition-colors relative">
                                <input 
                                    type="file" 
                                    multiple 
                                    accept="image/*" 
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                <div className="p-8 flex flex-col items-center justify-center text-center pointer-events-none">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-saffron mb-3 shadow-sm border border-black/5">
                                        <FileImage size={24} />
                                    </div>
                                    <p className="font-sans font-bold text-charcoal mb-1">Click or drag images here</p>
                                    <p className="font-sans text-xs text-charcoal/50">Supports JPG, PNG, WEBP (Max 5MB each)</p>
                                </div>
                            </div>
                            <InputError message={errors.images} className="mt-1" />

                            {previews.length > 0 && (
                                <div className="mt-4">
                                    <h4 className="font-sans font-bold text-xs text-charcoal/60 uppercase tracking-wider mb-2">Selected Files ({previews.length})</h4>
                                    <div className="space-y-2 max-h-[240px] overflow-y-auto custom-scrollbar pr-2">
                                        {previews.map((preview, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-2 rounded border border-black/5 bg-white">
                                                <div className="flex items-center gap-3 overflow-hidden">
                                                    <img src={preview.url} alt="Preview" className="w-10 h-10 object-cover rounded border border-black/5 shrink-0" />
                                                    <div className="min-w-0">
                                                        <p className="font-sans text-xs font-bold text-charcoal truncate">{preview.name}</p>
                                                        <p className="font-sans text-[10px] text-charcoal/50">{preview.size}</p>
                                                    </div>
                                                </div>
                                                <button type="button" onClick={() => removeFile(idx)} className="p-1 text-charcoal/40 hover:text-red-600 transition-colors shrink-0">
                                                    <XCircle size={16} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Col: Shared Metadata */}
                        <div className="space-y-4">
                            <div className="bg-saffron/10 text-saffron-dark p-3 rounded-md border border-saffron/20 font-sans text-xs mb-4">
                                <strong>Note:</strong> The details entered below will be applied to ALL images in this batch. You can edit them individually later.
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Category *</label>
                                <select value={data.category} onChange={e => setData('category', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron bg-white" required>
                                    <option value="events">Events & Programs</option>
                                    <option value="students">Student Life</option>
                                    <option value="schools">Sponsor Schools</option>
                                    <option value="founder">Founder & Trust</option>
                                    <option value="general">General</option>
                                </select>
                                <InputError message={errors.category} className="mt-1" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Batch Title (Optional)</label>
                                <input type="text" placeholder="e.g. Annual Day 2024" value={data.title} onChange={e => setData('title', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" />
                                <InputError message={errors.title} className="mt-1" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Batch Caption (Optional)</label>
                                <textarea rows="3" value={data.caption} onChange={e => setData('caption', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron resize-none"></textarea>
                                <InputError message={errors.caption} className="mt-1" />
                            </div>

                            <div>
                                <label className="flex items-center gap-2 cursor-pointer mt-2">
                                    <input type="checkbox" checked={data.active} onChange={e => setData('active', e.target.checked)} className="rounded border-inputBorder text-saffron focus:ring-saffron bg-white" />
                                    <span className="text-sm font-sans font-medium text-charcoal/80">Publish immediately</span>
                                </label>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

            <div className="px-6 py-4 border-t border-black/5 bg-adminBg/30 flex justify-between items-center shrink-0">
                <div className="flex-1 mr-4">
                    {progress && (
                        <div className="w-full bg-white rounded-full h-2 border border-black/5 overflow-hidden">
                            <div className="bg-saffron h-2 rounded-full transition-all duration-300" style={{ width: `${progress.percentage}%` }}></div>
                        </div>
                    )}
                </div>
                <div className="flex gap-3 shrink-0">
                    <button type="button" onClick={onClose} className="px-4 py-2 border border-inputBorder rounded-md text-charcoal hover:bg-white transition-colors font-sans text-sm font-medium">
                        Cancel
                    </button>
                    <button type="submit" form="uploadForm" disabled={processing || data.images.length === 0} className="px-6 py-2 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm disabled:opacity-50 flex items-center gap-2">
                        {processing ? 'Uploading...' : `Upload ${data.images.length} Images`}
                    </button>
                </div>
            </div>
        </div>
    );
}
