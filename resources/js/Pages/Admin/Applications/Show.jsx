import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import { User, Phone, Mail, School, BookOpen, UserCheck, MessageSquare, ArrowLeft, Calendar } from 'lucide-react';

export default function ApplicationShow({ application }) {
    const DetailItem = ({ icon: Icon, label, value, subValue }) => (
        <div className="flex gap-4 p-4 bg-white rounded-xl border border-black/5 shadow-sm">
            <div className="w-12 h-12 bg-adminBg rounded-lg flex items-center justify-center text-saffron shrink-0">
                <Icon size={24} />
            </div>
            <div>
                <div className="text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-1 font-sans">{label}</div>
                <div className="font-sans font-bold text-charcoal">{value || 'N/A'}</div>
                {subValue && <div className="text-xs text-charcoal/50 font-sans mt-0.5">{subValue}</div>}
            </div>
        </div>
    );

    return (
        <AdminLayout title="Application Details" breadcrumbs={[
            { label: 'Dashboard', href: route('admin.dashboard') },
            { label: 'Applications', href: route('admin.applications.index') },
            { label: application.student_name }
        ]}>
            <Head title={`Application: ${application.student_name}`} />

            <div className="max-w-5xl mx-auto">
                <div className="mb-6">
                    <Link href={route('admin.applications.index')} className="inline-flex items-center gap-2 text-charcoal/60 hover:text-saffron transition-colors text-sm font-medium">
                        <ArrowLeft size={16} /> Back to List
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Student Info Card */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-saffron"></div>
                            <h3 className="font-display font-bold text-2xl text-charcoal mb-6">Student Information</h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <DetailItem icon={User} label="Full Name" value={application.student_name} />
                                <DetailItem icon={Phone} label="Contact Phone" value={application.student_phone} />
                                <DetailItem icon={Mail} label="Email Address" value={application.student_email} />
                                <DetailItem icon={Calendar} label="Submitted On" value={new Date(application.created_at).toLocaleString()} />
                            </div>

                            <div className="mt-8 pt-8 border-t border-black/5">
                                <h3 className="font-display font-bold text-xl text-charcoal mb-6">Academic Details</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <DetailItem icon={School} label="School Name" value={application.school_name} />
                                    <DetailItem icon={BookOpen} label="Course Name" value={application.course_name} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Referrer Info Card */}
                    <div className="space-y-6">
                        <div className="bg-forest p-8 rounded-2xl shadow-lg text-white relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                            <h3 className="font-display font-bold text-2xl mb-6 flex items-center gap-2">
                                <UserCheck size={24} className="text-gold" />
                                Referrer
                            </h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Name</div>
                                    <div className="font-sans font-bold text-lg">{application.referrer_name}</div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Designation</div>
                                    <div className="font-sans font-medium">{application.referrer_designation || 'Principal'}</div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Phone</div>
                                    <div className="font-sans font-bold">{application.referrer_phone}</div>
                                </div>
                                
                                {application.referrer_remarks && (
                                    <div className="pt-6 border-t border-white/10">
                                        <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 flex items-center gap-1">
                                            <MessageSquare size={12} /> Remarks
                                        </div>
                                        <p className="text-sm italic text-cream/90 leading-relaxed bg-white/5 p-3 rounded-lg">
                                            "{application.referrer_remarks}"
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Status/Action Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
                            <div className="text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-4">Application Status</div>
                            <div className="flex items-center gap-3 p-3 bg-adminBg rounded-lg mb-4">
                                <div className="w-3 h-3 rounded-full bg-saffron animate-pulse"></div>
                                <span className="font-sans font-bold text-charcoal uppercase text-sm tracking-wide">Pending Review</span>
                            </div>
                            <button className="w-full py-3 bg-charcoal text-white rounded-xl font-sans font-bold text-sm hover:bg-forest transition-colors shadow-md">
                                Convert to Recipient
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
