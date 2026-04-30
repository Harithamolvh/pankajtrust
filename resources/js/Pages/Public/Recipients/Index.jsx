import React, { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import PublicLayout from '@/Components/Layout/PublicLayout';

import { Search, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

export default function Index({ recipients, years, schools, colleges, courses, filters }) {
    const { data, setData, get, processing } = useForm({
        search: filters.search || '',
        year: filters.year || '',
        school: filters.school || '',
        college: filters.college || '',
        course: filters.course || '',
        duration: filters.duration || '',
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
                                {years.map(year => (
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
                                {courses.map(course => (
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
                                {schools.map(school => (
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
                                {colleges.map(college => (
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
                {recipients.data.length > 0 ? (
                    <>
                        <div className="bg-white rounded shadow-sm border border-mist overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left font-body">
                                    <thead className="bg-mist text-charcoal/80 font-sans text-sm uppercase tracking-wider border-b border-mist/80">
                                        <tr>
                                            <th className="px-6 py-4 font-bold">Scholar Name</th>
                                            <th className="px-6 py-4 font-bold">School / College</th>
                                            <th className="px-6 py-4 font-bold">Course / Duration</th>
                                            <th className="px-6 py-4 font-bold">Status</th>
                                            <th className="px-6 py-4 font-bold">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-mist">
                                        {recipients.data.map((recipient) => (
                                            <React.Fragment key={recipient.id}>
                                                <tr className={`hover:bg-cream transition-colors ${!recipient.active ? 'bg-mist/30' : ''}`}>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-4">
                                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-display shrink-0 overflow-hidden border ${recipient.active ? 'bg-saffron/10 text-saffron border-saffron/20' : 'bg-charcoal/10 text-charcoal/50 border-charcoal/20'}`}>
                                                                {recipient.name.charAt(0)}
                                                            </div>
                                                            <div>
                                                                <span className={`font-bold text-lg ${recipient.active ? 'text-forest' : 'text-charcoal/60'}`}>{recipient.name}</span>
                                                                <div className="text-sm text-saffron font-bold">Batch: {recipient.start_year || '-'}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="text-charcoal font-medium text-sm">
                                                            <span className="font-bold text-charcoal/50 mr-1">S:</span> 
                                                            {recipient.ref_school?.name || '-'}
                                                        </div>
                                                        <div className="text-sm text-charcoal mt-1">
                                                            <span className="font-bold text-charcoal/50 mr-1">C:</span> 
                                                            {recipient.ref_college?.name || '-'}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="text-charcoal font-medium">{recipient.ref_course?.name || '-'}</div>
                                                        <div className="text-sm text-charcoal/60 mt-0.5">{recipient.duration ? `${recipient.duration} Years` : '-'}</div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {recipient.active ? (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                                Active
                                                            </span>
                                                        ) : (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                                Inactive
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {(recipient.remarks || recipient.inactive_reason) ? (
                                                            <button 
                                                                onClick={() => setExpandedRow(expandedRow === recipient.id ? null : recipient.id)}
                                                                className="text-saffron hover:text-forest transition-colors p-1"
                                                            >
                                                                {expandedRow === recipient.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                            </button>
                                                        ) : (
                                                            <span className="text-charcoal/30">-</span>
                                                        )}
                                                    </td>
                                                </tr>
                                                {/* Expanded Details Row */}
                                                {expandedRow === recipient.id && (recipient.remarks || recipient.inactive_reason) && (
                                                    <tr className="bg-saffron/5">
                                                        <td colSpan="5" className="px-6 py-4 border-b border-saffron/10">
                                                            <div className="flex gap-2 items-start">
                                                                <AlertCircle className="text-saffron shrink-0 mt-0.5" size={18} />
                                                                <div className="text-sm">
                                                                    {recipient.remarks && (
                                                                        <div className="mb-2">
                                                                            <span className="font-bold text-charcoal">Remarks: </span>
                                                                            <span className="text-charcoal/80">{recipient.remarks}</span>
                                                                        </div>
                                                                    )}
                                                                    {recipient.inactive_reason && (
                                                                        <div>
                                                                            <span className="font-bold text-red-800">Inactive Reason: </span>
                                                                            <span className="text-red-800/80">{recipient.inactive_reason}</span>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Pagination */}
                        {recipients.links.length > 3 && (
                            <div className="mt-16 flex justify-center">
                                <div className="flex flex-wrap gap-1">
                                    {recipients.links.map((link, k) => {
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
                    <div className="text-center py-24 bg-mist rounded border border-charcoal/5">
                        <div className="text-4xl mb-4">🔍</div>
                        <h3 className="font-display font-bold text-2xl text-charcoal mb-2">No recipients found</h3>
                        <p className="font-body text-charcoal/70">
                            We couldn't find any scholars matching your current filters.
                        </p>
                        {hasFilters && (
                            <button 
                                onClick={clearFilters}
                                className="mt-6 text-saffron font-bold text-sm uppercase tracking-wider hover:underline"
                            >
                                Clear All Filters
                            </button>
                        )}
                    </div>
                )}
            </div>
        </PublicLayout>
    );
}
