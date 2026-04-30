import React, { useRef } from 'react';
import { Head, usePage, Link } from '@inertiajs/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PublicLayout from '@/Components/Layout/PublicLayout';
import HeroSection from '@/Components/Public/HeroSection';
import StatStrip from '@/Components/Public/StatStrip';
import NewsCard from '@/Components/Public/NewsCard';
import GallerySection from '@/Components/Public/GallerySection';
import ScrollReveal from '@/Components/Effects/ScrollReveal';
import SectionDivider from '@/Components/Effects/SectionDivider';
import { Quote } from 'lucide-react';

// Inline StepCard Component for 3D Tilt & Glow
function StepCard({ children, delay, stepNumber }) {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / width;
        const y = (e.clientY - top - height / 2) / height;
        card.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(30px)`;
        card.style.boxShadow = `${-x * 25}px ${y * 25}px 50px rgba(232,135,42,0.25)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateZ(0)';
        card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
    };

    return (
        <ScrollReveal delay={delay} direction="up">
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="bg-white p-10 rounded-2xl border border-charcoal/5 relative overflow-hidden group h-full transition-all duration-300 hover:border-saffron/30"
                style={{ transition: 'transform 0.15s ease, box-shadow 0.15s ease' }}
            >
                <div className="absolute top-0 right-0 -mr-6 -mt-6 text-[12rem] font-display font-black text-charcoal/[0.03] group-hover:text-saffron/[0.08] transition-colors pointer-events-none">
                    {stepNumber}
                </div>
                <div className="relative z-10">
                    {children}
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-saffron transition-all duration-500 group-hover:w-full" />
            </div>
        </ScrollReveal>
    );
}

export default function Home({ recentPosts, stats }) {
    const { settings } = usePage().props;

    return (
        <PublicLayout title="Home">
            <HeroSection />

            {/* Unified Stats & Legacy Container - Reverted to Clean 3-Card Grid */}
            <section className="bg-mist relative pt-0 pb-32 z-40">
                <StatStrip stats={stats} />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
                    <ScrollReveal>
                        <div className="text-center mb-20">
                            <h2 className="font-display font-bold text-4xl md:text-5xl text-charcoal mb-4">A Legacy of Service</h2>
                            <p className="font-body text-charcoal/60 max-w-2xl mx-auto italic leading-relaxed text-lg">
                                "From the backwaters of Kerala to the halls of the World Bank, and back to empowering the next generation."
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {/* Chapter 1: 1950s */}
                        <ScrollReveal delay={0.1} direction="up">
                            <div className="group relative h-full bg-white rounded-[2.5rem] p-8 md:p-12 border border-charcoal/5 shadow-[0_15px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(232,135,42,0.15)] transition-all duration-700 hover:-translate-y-4 overflow-hidden">
                                <div className="absolute -right-6 -top-6 font-display text-[12rem] font-black text-charcoal/[0.02] group-hover:text-saffron/[0.05] group-hover:scale-110 transition-all duration-1000 pointer-events-none select-none leading-none">
                                    50
                                </div>
                                <div className="relative z-10">
                                    <div className="w-20 h-20 rounded-2xl bg-saffron/10 flex items-center justify-center text-saffron mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm border border-saffron/5">
                                        <span className="font-display font-bold text-2xl">1950s</span>
                                    </div>
                                    <h3 className="font-display font-bold text-3xl text-charcoal mb-6 group-hover:translate-x-2 transition-transform duration-500">Early Life</h3>
                                    <p className="font-body text-charcoal/60 leading-relaxed text-lg group-hover:text-charcoal/80 transition-colors">
                                        Born in Maradu village, Dr. Pankaj's personal experience with poverty fueled a lifelong mission: ensuring financial hardship never blocks the path to higher education.
                                    </p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-2 bg-saffron origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                            </div>
                        </ScrollReveal>

                        {/* Chapter 2: 1999 */}
                        <ScrollReveal delay={0.2} direction="up">
                            <div className="group relative h-full bg-white rounded-[2.5rem] p-10 md:p-12 border border-charcoal/5 shadow-[0_15px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(201,168,76,0.15)] transition-all duration-700 hover:-translate-y-4 overflow-hidden">
                                <div className="absolute -right-6 -top-6 font-display text-[12rem] font-black text-charcoal/[0.02] group-hover:text-gold/[0.05] group-hover:scale-110 transition-all duration-1000 pointer-events-none select-none leading-none">
                                    99
                                </div>
                                <div className="relative z-10">
                                    <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-sm border border-gold/5">
                                        <span className="font-display font-bold text-2xl">1999</span>
                                    </div>
                                    <h3 className="font-display font-bold text-3xl text-charcoal mb-6 group-hover:translate-x-2 transition-transform duration-500">Global Impact</h3>
                                    <p className="font-body text-charcoal/60 leading-relaxed text-lg group-hover:text-charcoal/80 transition-colors">
                                        After a global career at the World Bank, he returned home to seed the trust with ₹15 lakhs of his own savings, creating a permanent fund for merit-cum-means scholarships.
                                    </p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-2 bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                            </div>
                        </ScrollReveal>

                        {/* Chapter 3: Today */}
                        <ScrollReveal delay={0.3} direction="up">
                            <div className="group relative h-full bg-white rounded-[2.5rem] p-10 md:p-12 border border-charcoal/5 shadow-[0_15px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(74,124,89,0.15)] transition-all duration-700 hover:-translate-y-4 overflow-hidden">
                                <div className="absolute -right-6 -top-6 font-display text-[12rem] font-black text-charcoal/[0.02] group-hover:text-sage/[0.05] group-hover:scale-110 transition-all duration-1000 pointer-events-none select-none leading-none">
                                    24
                                </div>
                                <div className="relative z-10">
                                    <div className="w-20 h-20 rounded-2xl bg-sage/10 flex items-center justify-center text-sage mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm border border-sage/5">
                                        <span className="font-display font-bold text-2xl">Today</span>
                                    </div>
                                    <h3 className="font-display font-bold text-3xl text-charcoal mb-6 group-hover:translate-x-2 transition-transform duration-500">A Continuing Mission</h3>
                                    <p className="font-body text-charcoal/60 leading-relaxed text-lg group-hover:text-charcoal/80 transition-colors">
                                        With a corpus that has grown significantly, the Trust now provides multi-year support to dozens of scholars annually across Ernakulam and Idukki districts.
                                    </p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-2 bg-sage origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Mission Callout — Cinematic Parallax */}
            <section className="relative min-h-[60vh] md:h-[80vh] py-20 md:py-0 flex items-center justify-center overflow-hidden bg-charcoal">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/70 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=2000"
                        alt="Education"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>

                <div className="max-w-5xl mx-auto px-4 text-center relative z-20">
                    <ScrollReveal delay={0.2} direction="up">
                        <div className="flex justify-center mb-10">
                            <Quote size={60} className="text-saffron/40 rotate-180" />
                        </div>
                        <p className="font-display italic text-2xl md:text-5xl text-white leading-tight mb-12 px-4">
                            "There are too many bright talented young children who are unable to receive higher education because of their family's poor financial background. With some financial assistance, they can do better in life and serve society much better."
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-1 bg-saffron mb-6" />
                            <p className="font-sans font-bold text-saffron uppercase tracking-[0.3em] text-sm md:text-base">
                                — Dr. Thampil Pankaj, Founder
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Redesigned How We Select - Modern Bento Feature Grid */}
            <section className="py-32 bg-mist relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal>
                        <div className="max-w-3xl mb-20">
                            <h2 className="font-display font-bold text-5xl md:text-7xl text-charcoal mb-8">
                                How We <span className="text-saffron italic">Select</span>
                            </h2>
                            <p className="font-body text-xl md:text-2xl text-charcoal/50 leading-relaxed italic border-l-4 border-saffron pl-8">
                                A multi-layered verification process to ensure absolute transparency and merit-cum-means based selection.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:min-h-[750px]">
                        {/* Step 1: Nomination - Large Vertical Feature */}
                        <div className="md:col-span-5 h-full">
                            <ScrollReveal delay={0.1} direction="left" className="h-full">
                                <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-xl border border-charcoal/5 h-full flex flex-col justify-between group hover:border-saffron/30 transition-all duration-700">
                                    <div>
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-saffron/10 flex items-center justify-center text-saffron mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                            <span className="font-display font-bold text-3xl">01</span>
                                        </div>
                                        <h3 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-6">School Nomination</h3>
                                        <p className="font-body text-lg text-charcoal/60 leading-relaxed">
                                            Partner government schools in Ernakulam and Idukki districts nominate students based on academic merit and financial need.
                                        </p>
                                    </div>
                                    <div className="mt-12 aspect-[4/3] rounded-[2rem] overflow-hidden bg-mist relative">
                                        <div className="absolute inset-0 bg-saffron/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                        <img 
                                            src="/images/site/nomination.png" 
                                            alt="School Nomination"
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Stack: Steps 2 & 3 */}
                        <div className="md:col-span-7 grid grid-rows-2 gap-8 h-full">
                            {/* Step 2: Field Verification - High Contrast Horizontal */}
                            <ScrollReveal delay={0.2} direction="right" className="h-full">
                                <div className="bg-charcoal rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden group h-full">
                                    <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center h-full">
                                        <div className="md:w-3/5">
                                            <div className="w-14 h-14 rounded-[1.2rem] bg-gold/20 flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                                                <span className="font-display font-bold text-2xl">02</span>
                                            </div>
                                            <h3 className="font-display font-bold text-3xl text-white mb-6">Field Verification</h3>
                                            <p className="font-body text-lg text-cream/60 leading-relaxed">
                                                50% merit + 50% need criteria, thoroughly verified by Trust members through local enquiry and field visits to their homes.
                                            </p>
                                        </div>
                                        <div className="md:w-2/5 h-full rounded-[2rem] overflow-hidden shadow-2xl relative">
                                            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
                                            <img 
                                                src="/images/site/verification.png" 
                                                alt="Verification"
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] -mr-32 -mt-32" />
                                </div>
                            </ScrollReveal>

                            {/* Step 3: Multi-Year Support - Soft Horizontal */}
                            <ScrollReveal delay={0.3} direction="up" className="h-full">
                                <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-xl border border-charcoal/5 h-full flex flex-col md:flex-row gap-10 items-center group hover:border-sage/30 transition-all duration-700">
                                    <div className="md:w-3/5 order-2 md:order-1">
                                        <div className="w-14 h-14 rounded-[1.2rem] bg-sage/10 flex items-center justify-center text-sage mb-8 group-hover:scale-110 transition-transform">
                                            <span className="font-display font-bold text-2xl">03</span>
                                        </div>
                                        <h3 className="font-display font-bold text-3xl text-charcoal mb-6">Multi-Year Support</h3>
                                        <p className="font-body text-lg text-charcoal/60 leading-relaxed">
                                            Assistance provided consistently for the entire 3rd or 4th-year degree course, subject to academic progress.
                                        </p>
                                    </div>
                                    <div className="md:w-2/5 h-full rounded-[2rem] overflow-hidden order-1 md:order-2 bg-mist relative">
                                        <div className="absolute inset-0 bg-sage/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                        <img 
                                            src="/images/site/support.png" 
                                            alt="Support"
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:rotate-2 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cinematic Gallery Section */}
            <GallerySection images={usePage().props.gallery} />

            {/* Founder Section */}
            <section className={`bg-charcoal relative overflow-hidden pt-32 ${(!recentPosts || recentPosts.length === 0) ? 'pb-0' : 'pb-32'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-[#2a2520]"></div>
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-5/12 relative">
                            <ScrollReveal direction="left">
                                <div className="relative overflow-hidden w-full max-w-[400px] mx-auto">
                                    {/* SVG Decor Frame */}
                                    <svg viewBox="0 0 400 500" className="w-full h-auto drop-shadow-2xl relative z-10">
                                        <defs>
                                            <clipPath id="founder-clip">
                                                <ellipse cx="200" cy="230" rx="165" ry="200" />
                                            </clipPath>
                                        </defs>
                                        <ellipse cx="200" cy="230" rx="175" ry="210" fill="none" stroke="#E8872A" strokeWidth="3" opacity="0.6" />
                                        <ellipse cx="200" cy="230" rx="185" ry="220" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.3" />
                                        <image href="/images/dr-pankaj.jpg" x="35" y="30" width="330" height="400" clipPath="url(#founder-clip)" preserveAspectRatio="xMidYMid slice" onError={(e) => { e.target.href.baseVal = "https://images.unsplash.com/photo-1507676184212-d0c30a47bfb0?auto=format&fit=crop&q=80&w=800"; }} />
                                        
                                        {/* Curtain wipe — Now inside SVG for perfect clipping */}
                                        <motion.rect
                                            x="35" y="30" width="330" height="400"
                                            fill="#E8872A"
                                            clipPath="url(#founder-clip)"
                                            initial={{ scaleX: 1 }}
                                            whileInView={{ scaleX: 0 }}
                                            viewport={{ once: true, margin: '-100px' }}
                                            transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                                            style={{ transformOrigin: 'left' }}
                                        />
                                        
                                        <ellipse cx="200" cy="440" rx="130" ry="20" fill="#E8872A" opacity="0.15" />
                                    </svg>
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="md:w-7/12 text-cream">
                            <ScrollReveal direction="right" delay={0.4}>
                                <h2 className="font-display font-bold text-4xl md:text-5xl mb-2 text-white">The Founder's Vision</h2>
                                <p className="font-sans font-bold text-saffron uppercase tracking-widest text-sm mb-10">{settings.founder_name}</p>

                                <div className="prose prose-lg prose-invert font-body text-cream/80 mb-10 leading-relaxed">
                                    <p>{settings.founder_short_bio}</p>
                                    <p className="mt-4">Established in {settings.trust_established} using personal funds, the trust was born from his own childhood experience of poverty in Maradu village, ensuring others have the opportunity he fought for.</p>
                                </div>

                                <Link
                                    href={route('about')}
                                    className="inline-block border border-saffron/50 text-saffron px-6 sm:px-8 py-3 sm:py-4 rounded-sm font-sans font-semibold text-xs sm:text-sm hover:bg-saffron hover:text-white transition-colors uppercase tracking-wider"
                                >
                                    Read Full Story
                                </Link>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest News */}
            {recentPosts && recentPosts.length > 0 && (
                <>
                    <SectionDivider flip={false} color="#FDF6EC" />
                    <section className="py-24 bg-cream section-mesh">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <ScrollReveal>
                                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                                    <div>
                                        <h2 className="font-display font-bold text-4xl text-charcoal mb-4">News & Updates</h2>
                                        <div className="w-16 h-1 bg-saffron"></div>
                                    </div>
                                    <Link
                                        href={route('news')}
                                        className="mt-6 md:mt-0 font-sans font-bold text-saffron hover:text-forest transition-colors flex items-center group uppercase tracking-widest text-sm"
                                    >
                                        View All News <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                                    </Link>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {recentPosts.map((post, i) => (
                                    <ScrollReveal key={post.id} delay={i * 0.15} direction="up">
                                        <NewsCard post={post} />
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}
        </PublicLayout>
    );
}
