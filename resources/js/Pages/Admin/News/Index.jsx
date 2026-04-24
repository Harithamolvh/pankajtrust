import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import DataTable from '@/Components/Admin/DataTable';
import Badge from '@/Components/Admin/Badge';
import { Plus, Edit2, Trash2, ExternalLink } from 'lucide-react';
import Modal from '@/Components/Modal';

export default function NewsIndex({ posts, filters }) {
    const [searchQuery, setSearchQuery] = useState(filters.search || '');
    const [confirmDelete, setConfirmDelete] = useState(null);

    const handleSearch = (query) => {
        setSearchQuery(query);
        router.get(route('admin.news.index'), { search: query }, { preserveState: true, replace: true, preserveScroll: true });
    };

    const handleDelete = () => {
        router.delete(route('admin.news.destroy', confirmDelete.id), {
            preserveScroll: true,
            onSuccess: () => setConfirmDelete(null),
        });
    };

    const columns = [
        {
            header: 'Post Title',
            cell: (row) => (
                <div className="font-sans">
                    <div className="font-bold text-charcoal">{row.title}</div>
                    <div className="text-xs text-charcoal/50 mt-0.5 max-w-md truncate">{row.excerpt || 'No excerpt'}</div>
                </div>
            )
        },
        { 
            header: 'Author', 
            cell: (row) => <span className="font-sans text-charcoal/80">{row.author?.name || 'Unknown'}</span> 
        },
        { 
            header: 'Status', 
            cell: (row) => {
                const isPublished = row.published_at && new Date(row.published_at) <= new Date();
                return (
                    <Badge status={isPublished ? 'published' : 'draft'}>
                        {isPublished ? 'Published' : 'Draft'}
                    </Badge>
                );
            }
        },
        { 
            header: 'Date', 
            cell: (row) => (
                <div className="font-sans text-sm text-charcoal/70">
                    {new Date(row.created_at).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    })}
                </div>
            ) 
        },
        {
            header: 'Actions',
            cell: (row) => (
                <div className="flex items-center gap-2">
                    <a href={`/news/${row.slug}`} target="_blank" rel="noopener noreferrer" className="p-1.5 text-charcoal/50 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50" title="View Post">
                        <ExternalLink size={16} />
                    </a>
                    <Link href={route('admin.news.edit', row.id)} className="p-1.5 text-charcoal/50 hover:text-saffron transition-colors rounded-md hover:bg-adminBg" title="Edit Post">
                        <Edit2 size={16} />
                    </Link>
                    <button onClick={() => setConfirmDelete(row)} className="p-1.5 text-charcoal/50 hover:text-red-600 transition-colors rounded-md hover:bg-red-50" title="Delete Post">
                        <Trash2 size={16} />
                    </button>
                </div>
            )
        }
    ];

    return (
        <AdminLayout title="News & Updates" breadcrumbs={[{ label: 'Dashboard', href: route('admin.dashboard') }, { label: 'News' }]}>
            <Head title="News | Admin Panel" />

            <DataTable 
                data={posts.data}
                columns={columns}
                pagination={posts}
                searchQuery={searchQuery}
                onSearch={handleSearch}
                actions={
                    <Link href={route('admin.news.create')} className="h-[38px] px-4 flex items-center gap-2 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold shadow-sm">
                        <Plus size={16} /> Write Post
                    </Link>
                }
            />

            {/* Delete Confirmation Modal */}
            <Modal show={!!confirmDelete} onClose={() => setConfirmDelete(null)} maxWidth="sm">
                <div className="p-6">
                    <h2 className="text-lg font-bold text-charcoal mb-4 font-display">Delete Post</h2>
                    <p className="text-charcoal/70 mb-6 font-sans text-sm">
                        Are you sure you want to delete <strong>{confirmDelete?.title}</strong>? This action cannot be undone.
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
