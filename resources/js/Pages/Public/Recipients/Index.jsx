import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import PublicLayout from '@/Components/Layout/PublicLayout';

import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Index({ recipients, years, filters }) {
    const { data, setData, get, processing } = useForm({
        search: filters.search || '',
        year: filters.year || '',
    });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('recipients.index'), { preserveState: true });
    };

    const handleFilterChange = (key, value) => {
        setData(key, value);
        // Delay form submission slightly to let state update
        setTimeout(() => {
            get(route('recipients.index'), { preserveState: true, data: { ...data, [key]: value } });
        }, 10);
    };

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
                <div className="bg-cream p-6 rounded shadow-sm border border-saffron/20 mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="flex gap-2 items-center w-full md:w-auto">
                        <span className="font-sans font-bold text-sm text-charcoal uppercase tracking-wider mr-2">Filter by Year:</span>
                        <select 
                            value={data.year}
                            onChange={(e) => handleFilterChange('year', e.target.value)}
                            className="border-mist bg-white rounded text-sm focus:ring-saffron focus:border-saffron font-body text-charcoal"
                        >
                            <option value="">All Years</option>
                            {years.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>

                    <form onSubmit={handleSearch} className="w-full md:w-auto flex">
                        <div className="relative w-full md:w-64">
                            <input 
                                type="text"
                                placeholder="Search by name, course..."
                                value={data.search}
                                onChange={(e) => setData('search', e.target.value)}
                                className="w-full border-mist bg-white rounded-l text-sm focus:ring-saffron focus:border-saffron font-body pl-4 pr-10"
                            />
                            {data.search && (
                                <button 
                                    type="button" 
                                    onClick={() => handleFilterChange('search', '')}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-mist hover:text-saffron"
                                >
                                    &times;
                                </button>
                            )}
                        </div>
                        <button 
                            type="submit"
                            disabled={processing}
                            className="bg-saffron text-white px-4 py-2 rounded-r flex items-center justify-center hover:bg-forest transition-colors"
                        >
                            <Search size={16} />
                        </button>
                    </form>
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
                                            <th className="px-6 py-4 font-bold">School / District</th>
                                            <th className="px-6 py-4 font-bold">Course / College</th>
                                            <th className="px-6 py-4 font-bold">Year</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-mist">
                                        {recipients.data.map((recipient) => (
                                            <tr key={recipient.id} className="hover:bg-cream transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-full bg-saffron/10 text-saffron flex items-center justify-center font-bold font-display shrink-0 overflow-hidden border border-saffron/20">
                                                            {recipient.photo ? (
                                                                <img src={recipient.photo} alt={recipient.name} className="w-full h-full object-cover" />
                                                            ) : (
                                                                recipient.name.charAt(0)
                                                            )}
                                                        </div>
                                                        <span className="font-bold text-forest text-lg">{recipient.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-charcoal font-medium">{recipient.school?.name || '-'}</div>
                                                    <div className="text-sm text-charcoal/60 mt-0.5">{recipient.district || recipient.school?.district}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-charcoal font-medium">{recipient.course}</div>
                                                    <div className="text-sm text-charcoal/60 mt-0.5">{recipient.college}</div>
                                                </td>
                                                <td className="px-6 py-4 font-bold text-saffron whitespace-nowrap">
                                                    {recipient.year}
                                                </td>
                                            </tr>
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
                        {(data.search || data.year) && (
                            <button 
                                onClick={() => {
                                    setData({ search: '', year: '' });
                                    get(route('recipients.index'));
                                }}
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
