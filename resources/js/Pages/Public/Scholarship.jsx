import React, { useState } from 'react';
import { Head, usePage, Link } from '@inertiajs/react';
import PublicLayout from '@/Components/Layout/PublicLayout';
import { motion, AnimatePresence } from 'framer-motion';

const PartnerSchoolsModal = ({ isOpen, onClose }) => {
    const schools = [
        { name: "Maharaja's College", location: "Ernakulam", type: "Government" },
        { name: "Government Higher Secondary School", location: "Maradu", type: "Government" },
        { name: "Government Arts & Science College", location: "Tripunithura", type: "Government" },
        { name: "St. Albert's College", location: "Ernakulam", type: "Aided" },
        { name: "Sacred Heart College", location: "Thevara", type: "Aided" },
        { name: "Government College", location: "Kattappana, Idukki", type: "Government" },
        { name: "St. Thomas College", location: "Pala (Associate)", type: "Aided" },
        { name: "Govt Model Boys HSS", location: "Tripunithura", type: "Government" },
        { name: "Govt HSS", location: "Panampilly Nagar", type: "Government" },
        { name: "St. Mary's College", location: "Thrissur (Associate)", type: "Aided" }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
                    />
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-[2rem] shadow-2xl flex flex-col"
                    >
                        <div className="p-8 border-b border-mist flex justify-between items-center bg-forest text-white">
                            <div>
                                <h3 className="font-display font-bold text-2xl">Partner Institutions</h3>
                                <p className="text-cream/70 text-sm">Empowering students from government & aided schools</p>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                        <div className="p-8 overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {schools.map((school, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-mist border border-charcoal/5 hover:border-saffron/30 transition-all group">
                                        <h4 className="font-sans font-bold text-charcoal group-hover:text-saffron transition-colors">{school.name}</h4>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-xs text-charcoal/50 uppercase tracking-wider">{school.location}</span>
                                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${school.type === 'Government' ? 'bg-forest/10 text-forest' : 'bg-gold/10 text-gold'}`}>
                                                {school.type}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 bg-mist border-t border-mist text-center">
                            <p className="text-xs text-charcoal/50">The Trust primarily focuses on schools within Ernakulam and Idukki districts.</p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default function Scholarship() {
    const { settings } = usePage().props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <PublicLayout title="Scholarship Program">
            <Head>
                <title>Scholarship Program | Dr. Pankaj Trust</title>
            </Head>
            
            <PartnerSchoolsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Page Header */}
            <div className="bg-forest text-cream pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="font-display font-black text-5xl md:text-6xl mb-4">Scholarship Program</h1>
                    <p className="font-body text-xl text-cream/80 max-w-2xl">
                        A structured approach to transforming lives through merit-cum-means assistance.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
                
                {/* Financial Support Structure */}
                <div className="mb-24">
                    <h2 className="font-display font-bold text-3xl text-forest mb-12 text-center">Financial Support Structure</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-12 max-w-5xl mx-auto">
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-charcoal/5 shadow-[0_15px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(232,135,42,0.15)] transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-24 h-24 bg-saffron/5 rounded-br-[4rem]" />
                            <div className="w-20 h-20 bg-mist rounded-2xl flex items-center justify-center text-saffron mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="font-display font-bold text-2xl text-charcoal mb-4 tracking-tight">3-Year Course</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="font-display font-bold text-4xl md:text-5xl text-forest">{settings.scholarship_3year || '₹8,000'}</span>
                                <span className="text-charcoal/40 font-sans text-sm font-medium">/ year</span>
                            </div>
                            <p className="font-body text-charcoal/60 leading-relaxed mb-8">For standard degree programs like BA, B.Sc, B.Com across Kerala universities.</p>
                            <div className="w-full h-1 bg-gradient-to-r from-transparent via-saffron/20 to-transparent" />
                        </motion.div>
                        
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-charcoal/5 shadow-[0_15px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(201,168,76,0.15)] transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-[4rem]" />
                            <div className="w-20 h-20 bg-mist rounded-2xl flex items-center justify-center text-gold mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                            </div>
                            <h3 className="font-display font-bold text-2xl text-charcoal mb-4 tracking-tight">4-Year Course</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="font-display font-bold text-4xl md:text-5xl text-forest">{settings.scholarship_4year || '₹10,000'}</span>
                                <span className="text-charcoal/40 font-sans text-sm font-medium">/ year</span>
                            </div>
                            <p className="font-body text-charcoal/60 leading-relaxed mb-8">For professional degrees including Engineering, Nursing, and advanced studies.</p>
                            <div className="w-full h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
                        </motion.div>
                    </div>
                    
                    <div className="mt-12 flex justify-center">
                        <div className="bg-mist/50 backdrop-blur-md px-8 py-4 rounded-2xl border border-charcoal/5 text-center">
                            <p className="font-sans text-sm text-charcoal/60 leading-relaxed">
                                <span className="font-bold text-forest">Note:</span> Assistance is provided continuously for the entire duration of the course, subject to satisfactory academic progress.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Selection Process */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-display font-bold text-3xl text-forest mb-6">Rigorous Selection Process</h2>
                        
                        <div className="space-y-8">
                            <div className="flex group">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="w-12 h-12 bg-saffron text-white rounded-2xl flex items-center justify-center font-display font-bold text-xl group-hover:scale-110 transition-transform shadow-lg shadow-saffron/20">1</div>
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold text-lg text-charcoal mb-2">School Nominations</h4>
                                    <p className="font-body text-charcoal/70">
                                        Partner higher-secondary schools (government and aided) in Ernakulam and Idukki districts are invited to nominate candidates who have successfully completed 12th standard (Plus Two).
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex group">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="w-12 h-12 bg-gold text-white rounded-2xl flex items-center justify-center font-display font-bold text-xl group-hover:scale-110 transition-transform shadow-lg shadow-gold/20">2</div>
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold text-lg text-charcoal mb-2">Merit + Means Criteria</h4>
                                    <p className="font-body text-charcoal/70">
                                        Nominees are evaluated based on a strict 50% academic merit and 50% financial need criteria. No discrimination is made based on religion or caste.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex group">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="w-12 h-12 bg-sage text-white rounded-2xl flex items-center justify-center font-display font-bold text-xl group-hover:scale-110 transition-transform shadow-lg shadow-sage/20">3</div>
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold text-lg text-charcoal mb-2">Verification</h4>
                                    <p className="font-body text-charcoal/70">
                                        Trust members conduct thorough verifications, including local enquiries and house visits, to ensure the authenticity of the financial need before finalizing the list.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-mist p-10 md:p-14 rounded-[3rem] relative shadow-xl border border-charcoal/5">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] opacity-20"></div>
                        <h3 className="font-display font-bold text-3xl text-forest mb-8 relative z-10 tracking-tight">Annual Timeline</h3>
                        
                        <div className="space-y-8 relative z-10">
                            <div className="border-l-4 border-saffron pl-6 pb-2 group">
                                <span className="font-sans text-xs font-black text-saffron uppercase tracking-[0.2em] block mb-2 opacity-60">June - July</span>
                                <h4 className="font-display font-bold text-xl text-charcoal mb-1">Nomination Period</h4>
                                <p className="font-body text-charcoal/60">Schools submit their selected candidates.</p>
                            </div>
                            <div className="border-l-4 border-gold pl-6 pb-2 group">
                                <span className="font-sans text-xs font-black text-gold uppercase tracking-[0.2em] block mb-2 opacity-60">August</span>
                                <h4 className="font-display font-bold text-xl text-charcoal mb-1">Verification Process</h4>
                                <p className="font-body text-charcoal/60">Trust members visit and verify candidates.</p>
                            </div>
                            <div className="border-l-4 border-sage pl-6 pb-2 group">
                                <span className="font-sans text-xs font-black text-sage uppercase tracking-[0.2em] block mb-2 opacity-60">Sept - Oct</span>
                                <h4 className="font-display font-bold text-xl text-charcoal mb-1">Fund Disbursement</h4>
                                <p className="font-body text-charcoal/60">Scholarships are awarded for the academic year.</p>
                            </div>
                        </div>
                        
                        <div className="mt-12 pt-8 border-t border-charcoal/5 relative z-10">
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="font-sans font-bold text-forest hover:text-saffron transition-all flex items-center group uppercase tracking-widest text-sm"
                            >
                                View Partner Schools 
                                <div className="ml-3 w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center transition-all group-hover:translate-x-2 group-hover:bg-saffron">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </PublicLayout>
    );
}
