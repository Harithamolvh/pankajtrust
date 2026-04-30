import React, { useState } from 'react';
import { Head, Link, useForm as useInertiaForm } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Save, ArrowLeft } from 'lucide-react';

const meetingSchema = z.object({
    name: z.string().min(1, 'Name is required').max(255),
    date: z.string().min(1, 'Date is required'),
    minutes: z.string().nullable().optional(),
    agenda: z.string().nullable().optional(),
    venue: z.string().max(255).nullable().optional(),
    venue_type: z.string().max(255).nullable().optional(),
    is_distribution: z.boolean(),
});

export default function MeetingForm({ meeting }) {
    const isEdit = !!meeting;
    
    // Convert backend datetime string to HTML datetime-local format if editing
    const defaultDate = meeting?.date ? new Date(meeting.date).toISOString().slice(0, 16) : '';

    const { register, handleSubmit, formState: { errors }, control } = useForm({
        resolver: zodResolver(meetingSchema),
        defaultValues: {
            name: meeting?.name || '',
            date: defaultDate,
            minutes: meeting?.minutes || '',
            agenda: meeting?.agenda || '',
            venue: meeting?.venue || '',
            venue_type: meeting?.venue_type || '',
            is_distribution: meeting?.is_distribution || false,
        }
    });

    const { data, setData, post, put, processing, errors: inertiaErrors } = useInertiaForm({});

    const onSubmit = (formData) => {
        // Map hook-form data to Inertia form data
        Object.keys(formData).forEach(key => {
            setData(key, formData[key]);
        });

        if (isEdit) {
            put(route('admin.meetings.update', meeting.id));
        } else {
            post(route('admin.meetings.store'));
        }
    };

    return (
        <AdminLayout 
            title={isEdit ? 'Edit Meeting' : 'Create Meeting'} 
            breadcrumbs={[
                { label: 'Dashboard', href: route('admin.dashboard') },
                { label: 'Meetings', href: route('admin.meetings.index') },
                { label: isEdit ? 'Edit' : 'Create' }
            ]}
        >
            <Head title={`${isEdit ? 'Edit' : 'Create'} Meeting | Admin Panel`} />

            <div className="mb-6">
                <Link 
                    href={route('admin.meetings.index')} 
                    className="inline-flex items-center gap-2 text-sm font-sans font-medium text-charcoal/60 hover:text-charcoal transition-colors"
                >
                    <ArrowLeft size={16} /> Back to Meetings
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-black/5 p-6 max-w-3xl">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-sans font-bold text-charcoal mb-2">Meeting Name</label>
                            <input 
                                type="text" 
                                {...register('name')}
                                className={`w-full rounded-md border-inputBorder focus:border-saffron focus:ring-saffron text-sm font-sans bg-white ${errors.name ? 'border-red-500' : ''}`}
                            />
                            {errors.name && <p className="mt-1 text-xs text-red-500 font-sans">{errors.name.message}</p>}
                            {inertiaErrors.name && <p className="mt-1 text-xs text-red-500 font-sans">{inertiaErrors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-sans font-bold text-charcoal mb-2">Date & Time</label>
                            <input 
                                type="datetime-local" 
                                {...register('date')}
                                className={`w-full rounded-md border-inputBorder focus:border-saffron focus:ring-saffron text-sm font-sans bg-white ${errors.date ? 'border-red-500' : ''}`}
                            />
                            {errors.date && <p className="mt-1 text-xs text-red-500 font-sans">{errors.date.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-sans font-bold text-charcoal mb-2">Venue (Optional)</label>
                            <input 
                                type="text" 
                                {...register('venue')}
                                className="w-full rounded-md border-inputBorder focus:border-saffron focus:ring-saffron text-sm font-sans bg-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-sans font-bold text-charcoal mb-2">Venue Type (Optional)</label>
                            <select 
                                {...register('venue_type')}
                                className="w-full rounded-md border-inputBorder focus:border-saffron focus:ring-saffron text-sm font-sans bg-white"
                            >
                                <option value="">Select a type...</option>
                                <option value="school">School</option>
                                <option value="hall">Hall</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-sans font-bold text-charcoal mb-2">Agenda (Optional)</label>
                        <textarea 
                            {...register('agenda')}
                            rows={4}
                            className="w-full rounded-md border-inputBorder focus:border-saffron focus:ring-saffron text-sm font-sans bg-white"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-sans font-bold text-charcoal mb-2">Minutes (Optional)</label>
                        <textarea 
                            {...register('minutes')}
                            rows={4}
                            className="w-full rounded-md border-inputBorder focus:border-saffron focus:ring-saffron text-sm font-sans bg-white"
                        ></textarea>
                    </div>

                    <div className="flex items-center gap-2">
                        <input 
                            type="checkbox" 
                            id="is_distribution"
                            {...register('is_distribution')}
                            className="rounded border-inputBorder text-saffron focus:ring-saffron"
                        />
                        <label htmlFor="is_distribution" className="text-sm font-sans font-medium text-charcoal">
                            This meeting is for Scholarship Distribution
                        </label>
                    </div>

                    <div className="pt-4 border-t border-black/5 flex justify-end">
                        <button 
                            type="submit" 
                            disabled={processing}
                            className="px-6 py-2 bg-saffron text-white rounded-md hover:bg-[#C97420] transition-colors font-sans text-sm font-bold flex items-center gap-2 disabled:opacity-50"
                        >
                            <Save size={16} /> {isEdit ? 'Update Meeting' : 'Save Meeting'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
