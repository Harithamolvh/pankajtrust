import React from 'react';
import { Head, usePage, Link } from '@inertiajs/react';
import PublicLayout from '@/Components/Layout/PublicLayout';

export default function Scholarship() {
    const { settings } = usePage().props;

    return (
        <PublicLayout title="Scholarship Program">
            {/* Page Header */}
            <div className="bg-forest text-cream py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="font-display font-black text-5xl md:text-6xl mb-4">Scholarship Program</h1>
                    <p className="font-body text-xl text-cream/80 max-w-2xl">
                        A structured approach to transforming lives through merit-cum-means assistance.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                
                {/* Financial Support Structure */}
                <div className="mb-24">
                    <h2 className="font-display font-bold text-3xl text-forest mb-8 text-center">Financial Support Structure</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-cream p-8 rounded border-t-4 border-saffron shadow-sm flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-mist rounded-full flex items-center justify-center text-saffron mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="font-sans font-bold text-2xl text-charcoal mb-2">3-Year Course</h3>
                            <p className="font-display font-bold text-4xl text-forest mb-4">{settings.scholarship_3year}</p>
                            <p className="font-body text-charcoal/70">For standard degree programs like BA, B.Sc, B.Com across Kerala universities.</p>
                        </div>
                        
                        <div className="bg-cream p-8 rounded border-t-4 border-gold shadow-sm flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-mist rounded-full flex items-center justify-center text-gold mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                            </div>
                            <h3 className="font-sans font-bold text-2xl text-charcoal mb-2">4-Year Course</h3>
                            <p className="font-display font-bold text-4xl text-forest mb-4">{settings.scholarship_4year}</p>
                            <p className="font-body text-charcoal/70">For professional degrees including Engineering, Nursing, and advanced studies.</p>
                        </div>
                    </div>
                    
                    <p className="text-center font-sans text-sm text-charcoal/60 mt-8 max-w-2xl mx-auto bg-mist p-4 rounded border border-charcoal/10">
                        * Assistance is provided continuously for the entire duration of the course (3 or 4 years), subject to the student's satisfactory academic progress.
                    </p>
                </div>

                {/* Selection Process */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-display font-bold text-3xl text-forest mb-6">Rigorous Selection Process</h2>
                        
                        <div className="space-y-8">
                            <div className="flex">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="w-10 h-10 bg-saffron text-white rounded-full flex items-center justify-center font-display font-bold text-xl">1</div>
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold text-lg text-charcoal mb-2">School Nominations</h4>
                                    <p className="font-body text-charcoal/70">
                                        Partner higher-secondary schools (government and aided) in Ernakulam and Idukki districts are invited to nominate candidates who have successfully completed 12th standard (Plus Two).
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center font-display font-bold text-xl">2</div>
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold text-lg text-charcoal mb-2">Merit + Means Criteria</h4>
                                    <p className="font-body text-charcoal/70">
                                        Nominees are evaluated based on a strict 50% academic merit and 50% financial need criteria. No discrimination is made based on religion or caste.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="w-10 h-10 bg-sage text-white rounded-full flex items-center justify-center font-display font-bold text-xl">3</div>
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold text-lg text-charcoal mb-2">Verification</h4>
                                    <p className="font-body text-charcoal/70">
                                        Trust members conduct thorough verifications, including local enquiries and house visits, to ensure the authenticity of the financial need before finalizing the list.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="w-10 h-10 bg-forest text-white rounded-full flex items-center justify-center font-display font-bold text-xl">4</div>
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold text-lg text-charcoal mb-2">Annual Intake</h4>
                                    <p className="font-body text-charcoal/70">
                                        Approximately 15 to 20 new students are selected each year, maintaining a total active scholar pool of 40-50 students at any given time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-mist p-10 rounded-sm relative">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] opacity-20"></div>
                        <h3 className="font-display font-bold text-2xl text-forest mb-6 relative z-10">Annual Timeline</h3>
                        
                        <div className="space-y-6 relative z-10">
                            <div className="border-l-2 border-saffron pl-4 pb-2">
                                <span className="font-sans text-xs font-bold text-saffron uppercase tracking-widest block mb-1">June - July</span>
                                <h4 className="font-sans font-bold text-charcoal">Nomination Period</h4>
                                <p className="font-body text-sm text-charcoal/70">Schools submit their selected candidates.</p>
                            </div>
                            <div className="border-l-2 border-saffron pl-4 pb-2">
                                <span className="font-sans text-xs font-bold text-saffron uppercase tracking-widest block mb-1">August</span>
                                <h4 className="font-sans font-bold text-charcoal">Verification Process</h4>
                                <p className="font-body text-sm text-charcoal/70">Trust members visit and verify candidates.</p>
                            </div>
                            <div className="border-l-2 border-saffron pl-4 pb-2">
                                <span className="font-sans text-xs font-bold text-saffron uppercase tracking-widest block mb-1">September - October</span>
                                <h4 className="font-sans font-bold text-charcoal">Fund Disbursement</h4>
                                <p className="font-body text-sm text-charcoal/70">Scholarships are awarded for the academic year.</p>
                            </div>
                        </div>
                        
                        <div className="mt-10 pt-6 border-t border-charcoal/10 relative z-10">
                            <Link 
                                href={route('schools')} 
                                className="font-sans font-bold text-forest hover:text-saffron transition-colors flex items-center group uppercase tracking-widest text-sm"
                            >
                                View Partner Schools <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </PublicLayout>
    );
}
