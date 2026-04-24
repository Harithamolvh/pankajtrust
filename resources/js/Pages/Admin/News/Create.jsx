import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import NewsForm from './NewsForm';

export default function CreateNews() {
    return (
        <AdminLayout 
            title="Write New Post" 
            breadcrumbs={[
                { label: 'Dashboard', href: route('admin.dashboard') }, 
                { label: 'News', href: route('admin.news.index') },
                { label: 'Write Post' }
            ]}
        >
            <Head title="Write Post | Admin Panel" />

            <div className="max-w-5xl mx-auto">
                <NewsForm isEditing={false} />
            </div>
        </AdminLayout>
    );
}
