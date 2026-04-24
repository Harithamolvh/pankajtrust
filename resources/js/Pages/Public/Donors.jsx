import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Components/Layout/PublicLayout';
import { Heart } from 'lucide-react';

export default function Donors({ donors }) {
    return (
        <PublicLayout title="Our Donors">
            {/* Page Header */}
            <div className="bg-forest text-cream py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="font-display font-black text-4xl md:text-5xl mb-4">Our Generous Donors</h1>
                    <p className="font-body text-xl text-cream/80 max-w-2xl mx-auto">
                        With immense gratitude to those who make our mission possible.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                <div className="bg-mist p-8 md:p-12 rounded-sm border-t-4 border-gold text-center mb-16 max-w-4xl mx-auto">
                    <Heart className="mx-auto text-saffron mb-6" size={48} />
                    <h2 className="font-display font-bold text-3xl text-forest mb-4">Thank You For Your Support</h2>
                    <p className="font-body text-lg text-charcoal/80 mb-8 leading-relaxed">
                        While approximately 70% of our annual scholarship funds are generated from the interest earned on our endowment corpus, the remaining 30% is generously contributed by family members, close friends, and well-wishers who believe in the power of education.
                    </p>
                    <Link 
                        href={route('donate')} 
                        className="inline-block bg-saffron text-white px-8 py-3 rounded-sm font-sans font-bold text-sm hover:bg-forest transition-colors shadow-sm"
                    >
                        Join Our Supporters
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {donors.map(donor => (
                        <div key={donor.id} className="bg-cream p-6 rounded shadow-sm border border-saffron/10 text-center hover:shadow-md hover:border-saffron/30 transition-all flex flex-col items-center">
                            <div className="w-16 h-16 bg-forest/5 rounded-full flex items-center justify-center mb-4 text-forest font-display font-black text-2xl">
                                {donor.name.charAt(0)}
                            </div>
                            <h3 className="font-sans font-bold text-lg text-charcoal mb-2">{donor.name}</h3>
                            {donor.notes && (
                                <p className="font-body text-sm text-charcoal/60 italic">"{donor.notes}"</p>
                            )}
                        </div>
                    ))}
                </div>

                {donors.length === 0 && (
                    <div className="text-center py-24 bg-mist rounded border border-charcoal/5">
                        <div className="text-4xl mb-4">🙏</div>
                        <h3 className="font-display font-bold text-2xl text-charcoal mb-2">Becoming a Donor</h3>
                        <p className="font-body text-charcoal/70 max-w-md mx-auto mb-6">
                            We are currently updating our donor list. Your contribution can change a life.
                        </p>
                        <Link 
                            href={route('donate')} 
                            className="text-saffron font-bold text-sm uppercase tracking-wider hover:underline"
                        >
                            Learn how to donate
                        </Link>
                    </div>
                )}
            </div>
        </PublicLayout>
    );
}
