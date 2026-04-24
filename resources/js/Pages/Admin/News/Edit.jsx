import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import NewsForm from './NewsForm';

export default function EditNews({ post }) {
    return (
        <AdminLayout 
            title="Edit Post" 
            breadcrumbs={[
                { label: 'Dashboard', href: route('admin.dashboard') }, 
                { label: 'News', href: route('admin.news.index') },
                { label: 'Edit Post' }
            ]}
        >
            <Head title={`Edit ${post.title} | Admin Panel`} />

            <div className="max-w-5xl mx-auto">
                <NewsForm post={post} isEditing={true} />
            </div>
        </AdminLayout>
    );
}
