import React, { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import PublicLayout from '@/Components/Layout/PublicLayout';

import { Search, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Index({ recipients, years, schools, colleges, courses, filters }) {
    const { data, setData, get, processing } = useForm({
        search: filters?.search || '',
        year: filters?.year || '',
        school: filters?.school || '',
        college: filters?.college || '',
        course: filters?.course || '',
        duration: filters?.duration || '',
    });

    const [expandedRow, setExpandedRow] = useState(null);

    const handleSearch = (e) => {
        if (e) e.preventDefault();
        get(route('recipients'), { preserveState: true });
    };

    const handleFilterChange = (key, value) => {
        setData(key, value);
        setTimeout(() => {
            get(route('recipients'), { preserveState: true, data: { ...data, [key]: value } });
        }, 10);
    };

    const clearFilters = () => {
        setData({ search: '', year: '', school: '', college: '', course: '', duration: '' });
        setTimeout(() => {
            get(route('recipients'));
        }, 10);
    };

    const hasFilters = data.search || data.year || data.school || data.college || data.course || data.duration;

    return (
        <PublicLayout title="Our Scholars">
            {/* Page Header */}
            <div className="bg-forest text-cream pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-sage/20 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="font-display font-black text-4xl md:text-5xl mb-4">Meet Our Scholars</h1>
                    <p className="font-body text-xl text-cream/80 max-w-2xl mx-auto">
                        Celebrating the academic journeys of our bright students.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* Filters */}
                <div className="bg-cream p-6 rounded shadow-sm border border-saffron/20 mb-8">
                    <h3 className="font-sans font-bold text-charcoal uppercase tracking-wider mb-4 border-b border-mist pb-2">Filter Recipients</h3>
                    
                    <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Year */}
                        <div>
                            <label className="block text-xs font-bold text-charcoal/70 uppercase mb-1">Batch Year</label>
                            <select 
                                value={data.year}
                                onChange={(e) => handleFilterChange('year', e.target.value)}
                                className="w-full border-mist bg-white rounded text-sm focus:ring-saffron focus:border-saffron font-body text-charcoal"
                            >
                                <option value="">All Years</option>
                                {years?.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>

                        {/* Name */}
                        <div>
                            <label className="block text-xs font-bold text-charcoal/70 uppercase mb-1">Name</label>
                            <input 
                                type="text"
                                placeholder="Search by name..."
                                value={data.search}
                                onChange={(e) => setData('search', e.target.value)}
                                onBlur={() => handleSearch()}
                                className="w-full border-mist bg-white rounded text-sm focus:ring-saffron focus:border-saffron font-body"
                            />
                        </div>

                        {/* Course */}
                        <div>
                            <label className="block text-xs font-bold text-charcoal/70 uppercase mb-1">Degree / Course</label>
                            <select 
                                value={data.course}
                                onChange={(e) => handleFilterChange('course', e.target.value)}
                                className="w-full border-mist bg-white rounded text-sm focus:ring-saffron focus:border-saffron font-body text-charcoal"
                            >
                                <option value="">All Courses</option>
                                {courses?.map(course => (
                                    <option key={course.id} value={course.id}>{course.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* School */}
                        <div>
                            <label className="block text-xs font-bold text-charcoal/70 uppercase mb-1">School</label>
                            <select 
                                value={data.school}
                                onChange={(e) => handleFilterChange('school', e.target.value)}
                                className="w-full border-mist bg-white rounded text-sm focus:ring-saffron focus:border-saffron font-body text-charcoal"
                            >
                                <option value="">All Schools</option>
                                {schools?.map(school => (
                                    <option key={school.id} value={school.id}>{school.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* College */}
                        <div>
                            <label className="block text-xs font-bold text-charcoal/70 uppercase mb-1">College</label>
                            <select 
                                value={data.college}
                                onChange={(e) => handleFilterChange('college', e.target.value)}
                                className="w-full border-mist bg-white rounded text-sm focus:ring-saffron focus:border-saffron font-body text-charcoal"
                            >
                                <option value="">All Colleges</option>
                                {colleges?.map(college => (
                                    <option key={college.id} value={college.id}>{college.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Duration */}
                        <div>
                            <label className="block text-xs font-bold text-charcoal/70 uppercase mb-1">Duration (Years)</label>
                            <input 
                                type="number"
                                step="0.5"
                                placeholder="e.g. 3"
                                value={data.duration}
                                onChange={(e) => setData('duration', e.target.value)}
                                onBlur={() => handleSearch()}
                                className="w-full border-mist bg-white rounded text-sm focus:ring-saffron focus:border-saffron font-body"
                            />
                        </div>
                    </form>
                    
                    {hasFilters && (
                        <div className="mt-4 flex justify-end">
                            <button 
                                onClick={clearFilters}
                                className="text-sm font-bold text-saffron hover:text-forest transition-colors uppercase tracking-wider"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Grid */}
                <div className="relative">
                    {/* Loader Overlay */}
                    {processing && (
                        <div className="absolute inset-0 z-50 bg-white/60 backdrop-blur-[2px] flex items-center justify-center rounded-lg">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-12 h-12 border-4 border-saffron/20 border-t-saffron rounded-full animate-spin"></div>
                                <span className="font-sans font-bold text-saffron uppercase tracking-widest text-xs">Updating Scholars...</span>
                            </div>
                        </div>
                    )}

                    {recipients?.data?.length > 0 ? (
                        <>
                            {/* Mobile Card Layout */}
                            <div className="grid grid-cols-1 gap-6 md:hidden">
                                {recipients?.data?.map((recipient) => (
                                    <div key={recipient.id} className="bg-white rounded-2xl shadow-sm border border-mist overflow-hidden relative">
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold font-display shrink-0 border ${recipient.active ? 'bg-saffron/10 text-saffron border-saffron/20' : 'bg-charcoal/5 text-charcoal/30 border-charcoal/10'}`}>
                                                        {recipient.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg text-forest leading-tight">{recipient.name}</h4>
                                                        <div className="text-xs text-saffron font-bold uppercase tracking-wider mt-1">Batch {recipient.start_year || '-'}</div>
                                                    </div>
                                                </div>
                                                <div className={`w-2 h-2 rounded-full ${recipient.active ? 'bg-green-500 animate-pulse' : 'bg-charcoal/20'}`}></div>
                                            </div>

                                            <div className="space-y-4 font-sans text-sm">
                                                <div>
                                                    <div className="text-charcoal/40 font-bold uppercase text-[10px] tracking-widest mb-1">Education</div>
                                                    <div className="text-charcoal leading-relaxed">
                                                        <div className="font-medium">{recipient.ref_school?.name || '-'} (School)</div>
                                                        <div className="mt-1">{recipient.ref_college?.name || '-'} (College)</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-charcoal/40 font-bold uppercase text-[10px] tracking-widest mb-1">Course</div>
                                                    <div className="text-charcoal font-medium">
                                                        {recipient.ref_course?.name || '-'}
                                                        <span className="ml-2 text-charcoal/40 font-normal">({recipient.duration || '-'}Y)</span>
                                                    </div>
                                                </div>

                                                {(recipient.remarks || recipient.inactive_reason) && (
                                                    <div className="mt-4 pt-4 border-t border-mist/50">
                                                        <div className="text-xs italic text-charcoal/60 leading-relaxed">
                                                            {recipient.remarks && <p>"{recipient.remarks}"</p>}
                                                            {recipient.inactive_reason && <p className="text-red-800/40 mt-1">Note: {recipient.inactive_reason}</p>}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop Table Layout */}
                            <div className="hidden md:block bg-white rounded-3xl shadow-sm border border-mist overflow-hidden">
                                <table className="w-full text-left font-body">
                                    <thead className="bg-mist/50 text-charcoal font-sans text-xs uppercase tracking-[0.2em] border-b border-mist">
                                        <tr>
                                            <th className="px-8 py-5 font-black">Scholar</th>
                                            <th className="px-8 py-5 font-black">Institution</th>
                                            <th className="px-8 py-5 font-black">Program</th>
                                            <th className="px-8 py-5 font-black text-center">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-mist">
                                        {recipients?.data?.map((recipient) => (
                                            <tr key={recipient.id} className="hover:bg-cream/30 transition-colors group">
                                                <td className="px-8 py-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-display shrink-0 border ${recipient.active ? 'bg-saffron/10 text-saffron border-saffron/20' : 'bg-charcoal/5 text-charcoal/30 border-charcoal/10'}`}>
                                                            {recipient.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-forest group-hover:text-saffron transition-colors">{recipient.name}</div>
                                                            <div className="text-[10px] text-charcoal/40 font-bold uppercase tracking-widest mt-1">Batch {recipient.start_year || '-'}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="text-sm text-charcoal leading-relaxed max-w-xs">
                                                        <div className="truncate font-medium" title={recipient.ref_school?.name}>{recipient.ref_school?.name || '-'}</div>
                                                        <div className="truncate text-charcoal/50 text-xs mt-1" title={recipient.ref_college?.name}>{recipient.ref_college?.name || '-'}</div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="text-sm font-medium text-charcoal">{recipient.ref_course?.name || '-'}</div>
                                                    <div className="text-xs text-charcoal/40 mt-1">{recipient.duration ? `${recipient.duration} Years` : '-'}</div>
                                                </td>
                                                <td className="px-8 py-6 text-center">
                                                    <div className="flex justify-center">
                                                        {recipient.active ? (
                                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                                                Active
                                                            </span>
                                                        ) : (
                                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal/5 text-charcoal/40 text-[10px] font-black uppercase tracking-widest">
                                                                Completed
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        {/* Pagination */}
                        {recipients.links.length > 3 && (
                            <div className="mt-16 flex justify-center">
                                <div className="flex flex-wrap gap-1">
                                    {recipients?.links?.map((link, k) => {
                                        return (
                                            <Link
                                                key={k}
                                                href={link.url || '#'}
                                                className={`px-4 py-2 border rounded text-sm font-sans font-medium transition-colors ${
                                                    link.active 
                                                        ? 'bg-saffron text-white border-saffron' 
                                                        : 'bg-white text-charcoal border-mist hover:border-saffron hover:text-saffron'
                                                } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-32 bg-white rounded-[3rem] border border-mist shadow-sm max-w-2xl mx-auto px-10">
                        <div className="w-24 h-24 bg-mist rounded-full flex items-center justify-center mx-auto mb-8 text-saffron/30">
                            <Search size={48} />
                        </div>
                        <h3 className="font-display font-bold text-3xl text-forest mb-4">No Scholars Found</h3>
                        <p className="font-body text-lg text-charcoal/50 leading-relaxed">
                            We couldn't find any scholarship recipients matching your current selection. Try adjusting your filters or searching for a different batch.
                        </p>
                        {hasFilters && (
                            <button 
                                onClick={clearFilters}
                                className="mt-10 inline-flex items-center gap-2 bg-saffron text-white px-8 py-3 rounded-full font-sans font-bold text-sm uppercase tracking-widest hover:bg-forest transition-all hover:shadow-lg"
                            >
                                <AlertCircle size={18} />
                                Reset All Filters
                            </button>
                        )}
                    </div>
                )}
                </div>
            </div>
        </PublicLayout>
    );
}
