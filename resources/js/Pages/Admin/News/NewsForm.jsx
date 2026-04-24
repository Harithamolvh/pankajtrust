import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { 
    Bold, Italic, Strikethrough, Heading1, Heading2, 
    List, ListOrdered, Quote, Undo, Redo, Image as ImageIcon
} from 'lucide-react';

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    const addImage = () => {
        const url = window.prompt('URL');

        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };

    return (
        <div className="flex flex-wrap gap-1 p-2 bg-adminBg/50 border-b border-inputBorder rounded-t-md">
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`p-1.5 rounded transition-colors ${editor.isActive('bold') ? 'bg-saffron/20 text-saffron-dark' : 'text-charcoal/60 hover:bg-white'}`}
            >
                <Bold size={16} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`p-1.5 rounded transition-colors ${editor.isActive('italic') ? 'bg-saffron/20 text-saffron-dark' : 'text-charcoal/60 hover:bg-white'}`}
            >
                <Italic size={16} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={`p-1.5 rounded transition-colors ${editor.isActive('strike') ? 'bg-saffron/20 text-saffron-dark' : 'text-charcoal/60 hover:bg-white'}`}
            >
                <Strikethrough size={16} />
            </button>
            
            <div className="w-px h-6 bg-inputBorder mx-1 my-auto"></div>
            
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`p-1.5 rounded transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-saffron/20 text-saffron-dark' : 'text-charcoal/60 hover:bg-white'}`}
            >
                <Heading1 size={16} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={`p-1.5 rounded transition-colors ${editor.isActive('heading', { level: 3 }) ? 'bg-saffron/20 text-saffron-dark' : 'text-charcoal/60 hover:bg-white'}`}
            >
                <Heading2 size={16} />
            </button>
            
            <div className="w-px h-6 bg-inputBorder mx-1 my-auto"></div>
            
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-1.5 rounded transition-colors ${editor.isActive('bulletList') ? 'bg-saffron/20 text-saffron-dark' : 'text-charcoal/60 hover:bg-white'}`}
            >
                <List size={16} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-1.5 rounded transition-colors ${editor.isActive('orderedList') ? 'bg-saffron/20 text-saffron-dark' : 'text-charcoal/60 hover:bg-white'}`}
            >
                <ListOrdered size={16} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`p-1.5 rounded transition-colors ${editor.isActive('blockquote') ? 'bg-saffron/20 text-saffron-dark' : 'text-charcoal/60 hover:bg-white'}`}
            >
                <Quote size={16} />
            </button>
            
            <div className="w-px h-6 bg-inputBorder mx-1 my-auto"></div>
            
            <button
                type="button"
                onClick={addImage}
                className="p-1.5 rounded transition-colors text-charcoal/60 hover:bg-white"
            >
                <ImageIcon size={16} />
            </button>
            
            <div className="flex-1"></div>
            
            <button
                type="button"
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
                className="p-1.5 rounded transition-colors text-charcoal/60 hover:bg-white disabled:opacity-30"
            >
                <Undo size={16} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
                className="p-1.5 rounded transition-colors text-charcoal/60 hover:bg-white disabled:opacity-30"
            >
                <Redo size={16} />
            </button>
        </div>
    );
};

export default function NewsForm({ post, isEditing }) {
    const [coverPreview, setCoverPreview] = useState(null);
    
    // Check if post exists, properly handling Inertia props structure
    const postData = post?.data || post || {};

    const { data, setData, post: postForm, processing, errors } = useForm({
        title: postData.title || '',
        excerpt: postData.excerpt || '',
        body: postData.body || '',
        published_at: postData.published_at ? new Date(postData.published_at).toISOString().slice(0, 16) : '',
        meta_title: postData.meta_title || '',
        meta_description: postData.meta_description || '',
        cover_image: null,
        _method: isEditing ? 'PUT' : 'POST'
    });

    const editor = useEditor({
        extensions: [
            StarterKit,
            Image.configure({
                HTMLAttributes: {
                    class: 'max-w-full rounded-lg shadow-sm border border-black/5 my-4',
                },
            }),
        ],
        content: data.body,
        onUpdate: ({ editor }) => {
            setData('body', editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose-base focus:outline-none max-w-none p-4 min-h-[300px]',
            },
        },
    });

    const handleCoverChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('cover_image', file);
            setCoverPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e) => {
        e.preventDefault();
        
        if (isEditing) {
            postForm(route('admin.news.update', postData.id), {
                preserveScroll: true,
            });
        } else {
            postForm(route('admin.news.store'), {
                preserveScroll: true,
            });
        }
    };

    return (
        <form onSubmit={submit} className="space-y-8 pb-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-black/5">
                        <h3 className="font-sans font-bold text-lg text-charcoal mb-4">Post Content</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Title *</label>
                                <input 
                                    type="text" 
                                    value={data.title} 
                                    onChange={e => setData('title', e.target.value)} 
                                    className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" 
                                    placeholder="Enter an engaging title"
                                    required 
                                />
                                <InputError message={errors.title} className="mt-1" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Short Excerpt</label>
                                <textarea 
                                    rows="2" 
                                    value={data.excerpt} 
                                    onChange={e => setData('excerpt', e.target.value)} 
                                    className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron resize-none"
                                    placeholder="A brief summary shown on the blog index page"
                                ></textarea>
                                <InputError message={errors.excerpt} className="mt-1" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Full Body *</label>
                                <div className="border border-inputBorder rounded-md overflow-hidden bg-white">
                                    <MenuBar editor={editor} />
                                    <EditorContent editor={editor} />
                                </div>
                                <InputError message={errors.body} className="mt-1" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-black/5">
                        <h3 className="font-sans font-bold text-lg text-charcoal mb-4">SEO Settings</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Meta Title</label>
                                <input 
                                    type="text" 
                                    value={data.meta_title} 
                                    onChange={e => setData('meta_title', e.target.value)} 
                                    className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" 
                                    placeholder="Optimal length is 50-60 characters"
                                    maxLength="160"
                                />
                                <InputError message={errors.meta_title} className="mt-1" />
                                <p className="text-xs text-charcoal/50 mt-1">{data.meta_title?.length || 0}/160</p>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Meta Description</label>
                                <textarea 
                                    rows="3" 
                                    value={data.meta_description} 
                                    onChange={e => setData('meta_description', e.target.value)} 
                                    className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron resize-none"
                                    placeholder="Optimal length is 150-160 characters"
                                    maxLength="320"
                                ></textarea>
                                <InputError message={errors.meta_description} className="mt-1" />
                                <p className="text-xs text-charcoal/50 mt-1">{data.meta_description?.length || 0}/320</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-black/5">
                        <h3 className="font-sans font-bold text-lg text-charcoal mb-4">Publishing</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-charcoal/80 mb-1 font-sans">Publish Date</label>
                                <input 
                                    type="datetime-local" 
                                    value={data.published_at} 
                                    onChange={e => setData('published_at', e.target.value)} 
                                    className="w-full border-inputBorder rounded-md font-sans text-sm focus:ring-saffron focus:border-saffron" 
                                />
                                <p className="text-xs text-charcoal/50 mt-1">Leave empty to keep as draft. Set to a future date to schedule.</p>
                                <InputError message={errors.published_at} className="mt-1" />
                            </div>

                            <button type="submit" disabled={processing} className="w-full py-2.5 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm disabled:opacity-50 mt-2">
                                {processing ? 'Saving...' : (isEditing ? 'Update Post' : 'Create Post')}
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-black/5">
                        <h3 className="font-sans font-bold text-lg text-charcoal mb-4">Cover Image</h3>
                        
                        <div>
                            {coverPreview || postData.cover_image ? (
                                <div className="mb-4 relative rounded-md overflow-hidden border border-black/5">
                                    <img 
                                        src={coverPreview || `/storage/${postData.cover_image}`} 
                                        alt="Cover Preview" 
                                        className="w-full aspect-video object-cover" 
                                    />
                                    <label className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer text-white font-sans text-sm font-medium">
                                        Change Image
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            onChange={handleCoverChange}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            ) : (
                                <label className="flex flex-col items-center justify-center w-full aspect-video border-2 border-inputBorder border-dashed rounded-md cursor-pointer bg-adminBg hover:bg-adminBg/80 transition-colors mb-4">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <ImageIcon className="w-8 h-8 text-charcoal/30 mb-2" />
                                        <p className="text-sm font-sans font-bold text-charcoal/60">Upload Cover Image</p>
                                        <p className="text-xs text-charcoal/40">PNG, JPG up to 2MB</p>
                                    </div>
                                    <input 
                                        type="file" 
                                        accept="image/*" 
                                        onChange={handleCoverChange}
                                        className="hidden" 
                                    />
                                </label>
                            )}
                            <InputError message={errors.cover_image} className="mt-1" />
                        </div>
                    </div>
                </div>

            </div>
        </form>
    );
}
