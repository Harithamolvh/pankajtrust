import React from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Components/Layout/PublicLayout';
import { School, MapPin } from 'lucide-react';

export default function Schools({ schools }) {
    // Group schools by district
    const districts = schools.reduce((acc, school) => {
        const district = school.district || 'Unassigned';
        if (!acc[district]) acc[district] = [];
        acc[district].push(school);
        return acc;
    }, {});

    return (
        <PublicLayout title="Partner Schools">
            {/* Page Header */}
            <div className="bg-forest text-cream py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="font-display font-black text-4xl md:text-5xl mb-4">Partner Schools</h1>
                    <p className="font-body text-xl text-cream/80 max-w-2xl mx-auto">
                        We partner with government and aided higher secondary schools to identify deserving students.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-16">
                    {Object.entries(districts).map(([district, districtSchools]) => (
                        <div key={district}>
                            <h2 className="font-display font-bold text-3xl text-forest mb-8 border-b border-mist pb-4 capitalize flex items-center gap-3">
                                <MapPin className="text-saffron" size={28} />
                                {district} District
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {districtSchools.map(school => (
                                    <div key={school.id} className={`bg-cream p-6 rounded shadow-sm border ${school.active ? 'border-saffron/20 hover:border-saffron' : 'border-mist/50 opacity-70'} transition-colors`}>
                                        <div className="flex items-start gap-4">
                                            <div className="bg-mist p-3 rounded-full shrink-0">
                                                <School className={school.active ? 'text-forest' : 'text-charcoal/40'} size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-sans font-bold text-lg text-charcoal mb-2">{school.name}</h3>
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${school.type === 'government' ? 'bg-forest/10 text-forest' : 'bg-saffron/10 text-saffron'}`}>
                                                        {school.type}
                                                    </span>
                                                    {!school.active && (
                                                        <span className="text-xs font-bold px-2 py-1 rounded uppercase tracking-wider bg-charcoal/10 text-charcoal/60">
                                                            Inactive
                                                        </span>
                                                    )}
                                                </div>
                                                {school.recipients_count > 0 && (
                                                    <p className="mt-4 font-sans text-sm font-medium text-charcoal/70">
                                                        <strong className="text-gold">{school.recipients_count}</strong> scholar{school.recipients_count !== 1 ? 's' : ''} supported
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {schools.length === 0 && (
                    <div className="text-center py-24 bg-mist rounded border border-charcoal/5">
                        <div className="text-4xl mb-4">🏫</div>
                        <h3 className="font-display font-bold text-2xl text-charcoal mb-2">No schools found</h3>
                        <p className="font-body text-charcoal/70">
                            Partner school list is currently empty.
                        </p>
                    </div>
                )}
            </div>
        </PublicLayout>
    );
}
