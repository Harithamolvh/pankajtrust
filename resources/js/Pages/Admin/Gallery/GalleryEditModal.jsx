import React from 'react';
import { useForm } from '@inertiajs/react';
import { X } from 'lucide-react';
import InputError from '@/Components/InputError';

export default function GalleryEditModal({ image, onClose }) {
    const { data, setData, put, processing, errors } = useForm({
        title: image.title || '',
        caption: image.caption || '',
        category: image.category || 'general',
        active: image.active ?? true,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('admin.gallery.update', image.id), {
            preserveScroll: true,
            onSuccess: () => onClose(),
        });
    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 bg-adminBg/30">
                <h2 className="font-display font-bold text-xl text-charcoal">
                    Edit Image Details
                </h2>
                <button onClick={onClose} className="p-2 text-charcoal/40 hover:text-charcoal hover:bg-white rounded-full transition-colors">
                    <X size={20} />
                </button>
            </div>

            <div className="p-6">
                <div className="mb-6 rounded-lg overflow-hidden border border-black/5 bg-adminBg aspect-video flex items-center justify-center">
                    {image.url ? (
                        <img src={image.url} alt={image.title} className="max-w-full max-h-full object-contain" />
                    ) : (
                        <span className="text-charcoal/30 font-sans text-sm">No Image Preview</span>
                    )}
                </div>

                <form id="editForm" onSubmit={submit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Category *</label>
                        <select value={data.category} onChange={e => setData('category', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron bg-white" required>
                            <option value="events">Events & Programs</option>
                            <option value="students">Student Life</option>
                            <option value="schools">Partner Schools</option>
                            <option value="founder">Founder & Trust</option>
                            <option value="general">General</option>
                        </select>
                        <InputError message={errors.category} className="mt-1" />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Title</label>
                        <input type="text" value={data.title} onChange={e => setData('title', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" />
                        <InputError message={errors.title} className="mt-1" />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Caption</label>
                        <textarea rows="3" value={data.caption} onChange={e => setData('caption', e.target.value)} className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron resize-none"></textarea>
                        <InputError message={errors.caption} className="mt-1" />
                    </div>

                    <div>
                        <label className="flex items-center gap-2 cursor-pointer mt-2">
                            <input type="checkbox" checked={data.active} onChange={e => setData('active', e.target.checked)} className="rounded border-inputBorder text-saffron focus:ring-saffron bg-white" />
                            <span className="text-sm font-sans font-medium text-charcoal/80">Visible to Public</span>
                        </label>
                        <InputError message={errors.active} className="mt-1" />
                    </div>
                </form>
            </div>

            <div className="px-6 py-4 border-t border-black/5 bg-adminBg/30 flex justify-end gap-3">
                <button type="button" onClick={onClose} className="px-4 py-2 border border-inputBorder rounded-md text-charcoal hover:bg-white transition-colors font-sans text-sm font-medium">
                    Cancel
                </button>
                <button type="submit" form="editForm" disabled={processing} className="px-6 py-2 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm disabled:opacity-50">
                    {processing ? 'Saving...' : 'Save Changes'}
                </button>
            </div>
        </div>
    );
}
