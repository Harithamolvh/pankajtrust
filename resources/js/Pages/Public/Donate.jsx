import React, { useState } from 'react';
import { Head, usePage, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import PublicLayout from '@/Components/Layout/PublicLayout';
import { Heart, Landmark, ShieldCheck, FileText } from 'lucide-react';
import ScrollReveal from '@/Components/Effects/ScrollReveal';

function ImpactCalculator() {
    const [amount, setAmount] = useState(8000);
    const students = Math.floor(amount / 8000) || 0;
    const isMultiple = students !== 1;

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 mt-8 shadow-2xl">
            <p className="text-white/80 text-sm mb-4 uppercase tracking-widest font-sans font-semibold">Move the slider to see your impact</p>
            <input 
                type="range" min="1000" max="100000" step="1000"
                value={amount} onChange={e => setAmount(+e.target.value)}
                className="w-full accent-saffron mb-6 h-2 bg-charcoal/50 rounded-lg appearance-none cursor-pointer" 
            />
            <p className="text-5xl md:text-6xl font-stats font-bold text-saffron mb-4 drop-shadow-md">₹{amount.toLocaleString('en-IN')}</p>
            <p className="text-white text-lg font-body">
                supports <span className="text-gold font-bold text-xl">{students} student{isMultiple ? 's' : ''}</span> for one year
            </p>
            {students === 0 && <p className="text-white/50 text-sm mt-2">Every little bit helps the general fund.</p>}
        </div>
    );
}

export default function Donate() {
    const { settings } = usePage().props;

    return (
        <PublicLayout title="Make a Donation">
            {/* Page Header */}
            <div className="bg-forest text-cream py-24 md:py-32 relative overflow-hidden border-b-4 border-saffron -mt-20">
                <img 
                    src="/images/donate-bg.jpg" 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1544207936-7c95acc645d9?auto=format&fit=crop&q=80&w=2000"; }}
                    alt="Donate Background" 
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center pt-16">
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
                        <Heart className="mx-auto text-saffron mb-6 drop-shadow-md" size={48} />
                    </motion.div>
                    <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="font-display font-black text-4xl md:text-6xl mb-6 drop-shadow-md">Make a Difference</motion.h1>
                    <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="font-body text-xl md:text-2xl text-cream/90 mx-auto drop-shadow mb-8">
                        Join us in our mission to empower bright, financially disadvantaged students in Kerala through higher education.
                    </motion.p>
                    
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
                        <ImpactCalculator />
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Left Column - Why Donate */}
                    <div className="lg:col-span-7">
                        <ScrollReveal>
                            <h2 className="font-display font-bold text-3xl text-forest mb-8">Your Contribution Changes Lives</h2>
                            
                            <div className="prose prose-lg font-body text-charcoal/80 max-w-none mb-12">
                                <p>
                                    Since 1999, the Dr. Pankaj Educational and Charitable Trust has supported hundreds of bright students from impoverished backgrounds in Ernakulam and Idukki districts to complete their higher education.
                                </p>
                                <p>
                                    While approximately 70% of our annual scholarship funds are generated from the interest earned on our endowment corpus, the remaining 30% is generously contributed by family members, close friends, and well-wishers who believe in the power of education.
                                </p>
                                <p>
                                    Your donation, no matter the size, directly contributes to our scholarship fund. We maintain virtually zero administrative overhead, ensuring that <strong>100% of your contribution goes directly to supporting the students.</strong>
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <ScrollReveal delay={0.1}>
                                <div className="bg-cream p-6 rounded border-t-2 border-saffron shadow-sm h-full hover:shadow-md transition-shadow">
                                    <h3 className="font-sans font-bold text-lg text-charcoal mb-2">Support a 3-Year Course</h3>
                                    <p className="font-stats font-bold text-4xl text-saffron mb-2">{settings.scholarship_3year}</p>
                                    <p className="font-body text-sm text-charcoal/70">Covers one year of a standard degree program (BA, B.Sc, B.Com).</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2}>
                                <div className="bg-cream p-6 rounded border-t-2 border-gold shadow-sm h-full hover:shadow-md transition-shadow">
                                    <h3 className="font-sans font-bold text-lg text-charcoal mb-2">Support a 4-Year Course</h3>
                                    <p className="font-stats font-bold text-4xl text-gold mb-2">{settings.scholarship_4year}</p>
                                    <p className="font-body text-sm text-charcoal/70">Covers one year of a professional degree (Engineering, Nursing).</p>
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal>
                            <div className="bg-mist p-8 rounded flex items-start space-x-4 border-l-4 border-forest">
                                <ShieldCheck className="text-forest shrink-0 mt-1" size={32} />
                                <div>
                                    <h3 className="font-sans font-bold text-xl text-forest mb-2">80G Tax Exemption</h3>
                                    <p className="font-body text-charcoal/80 mb-4">
                                        {settings.donate_80g_note}
                                    </p>
                                    <p className="font-body text-sm text-charcoal/60 border-t border-forest/10 pt-4 mt-2">
                                        To claim your tax deduction, please email us your transaction details, full name, address, and PAN card number so we can issue your official receipt.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column - Donation Methods */}
                    <div className="lg:col-span-5">
                        <ScrollReveal direction="left">
                            <div className="bg-cream rounded-sm shadow-xl border-t-4 border-saffron p-8 sticky top-28">
                                <h2 className="font-display font-bold text-2xl text-charcoal mb-8 text-center">Ways to Donate</h2>
                                
                                <div className="space-y-8">
                                    {/* Bank Transfer */}
                                    <div>
                                        <div className="flex items-center text-forest mb-4 border-b border-mist pb-2">
                                            <Landmark className="mr-3" size={24} />
                                            <h3 className="font-sans font-bold text-lg uppercase tracking-wider">Bank Transfer (NEFT/RTGS)</h3>
                                        </div>
                                        <div className="bg-white p-5 rounded border border-mist font-body text-charcoal space-y-3 shadow-sm hover:border-saffron/30 transition-colors">
                                            <div className="flex justify-between">
                                                <span className="text-charcoal/60">Account Name:</span>
                                                <span className="font-bold text-right text-sm sm:text-base">Dr. Pankaj Educational & Charitable Trust</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-charcoal/60">Bank Name:</span>
                                                <span className="font-bold text-right">{settings.donate_bank_name || 'State Bank of India'}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-charcoal/60">Account No:</span>
                                                <span className="font-bold text-right font-mono tracking-wider text-saffron bg-mist px-2 py-1 rounded">{settings.donate_account_number || '30000000000'}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-charcoal/60">IFSC Code:</span>
                                                <span className="font-bold text-right font-mono tracking-wider">{settings.donate_ifsc || 'SBIN0000000'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* UPI */}
                                    <div>
                                        <div className="flex items-center text-forest mb-4 border-b border-mist pb-2">
                                            <svg className="mr-3 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.5 16.5L6.5 12.5L7.91 11.09L10.5 13.67L16.59 7.58L18 9L10.5 16.5Z" fill="currentColor"/>
                                            </svg>
                                            <h3 className="font-sans font-bold text-lg uppercase tracking-wider">UPI Payment</h3>
                                        </div>
                                        <div className="bg-white p-5 rounded border border-mist font-body text-charcoal text-center shadow-sm">
                                            <p className="text-charcoal/60 mb-2">Scan & Pay using any UPI app</p>
                                            <div className="w-48 h-48 bg-mist mx-auto mb-4 border-2 border-dashed border-charcoal/20 flex items-center justify-center">
                                                <span className="text-charcoal/40 font-sans text-sm">[QR Code Here]</span>
                                            </div>
                                            <p className="font-bold font-mono text-lg tracking-wider bg-mist p-3 rounded inline-block border border-saffron/20">
                                                {settings.donate_upi || 'pankajtrust@upi'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-8 pt-6 border-t border-mist text-center">
                                    <p className="font-sans text-sm text-charcoal/70 mb-4">
                                        After making a donation, please notify us so we can acknowledge your receipt.
                                    </p>
                                    <Link 
                                        href={route('contact')} 
                                        className="inline-flex items-center font-sans font-bold text-white bg-forest hover:bg-saffron px-6 py-3 rounded-full transition-colors uppercase tracking-widest text-xs shadow-md"
                                    >
                                        <FileText size={16} className="mr-2" />
                                        Notify Us About Donation
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </PublicLayout>
    );
}
