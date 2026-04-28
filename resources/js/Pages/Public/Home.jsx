import React, { useRef } from 'react';
import { Head, usePage, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import PublicLayout from '@/Components/Layout/PublicLayout';
import HeroSection from '@/Components/Public/HeroSection';
import StatStrip from '@/Components/Public/StatStrip';
import RecipientCard from '@/Components/Public/RecipientCard';
import NewsCard from '@/Components/Public/NewsCard';
import ScrollReveal from '@/Components/Effects/ScrollReveal';
import SectionDivider from '@/Components/Effects/SectionDivider';

// Inline StepCard Component for 3D Tilt
function StepCard({ children, delay }) {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / width;
        const y = (e.clientY - top - height / 2) / height;
        card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(20px)`;
        card.style.boxShadow = `${-x * 20}px ${y * 20}px 40px rgba(232,135,42,0.2)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateZ(0)';
        card.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    };

    return (
        <ScrollReveal delay={delay} direction="up">
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="bg-cream p-8 rounded shadow-sm border-t-4 border-saffron relative overflow-hidden group h-full"
                style={{ transition: 'transform 0.15s ease, box-shadow 0.15s ease' }}
            >
                {children}
            </div>
        </ScrollReveal>
    );
}

export default function Home({ recentRecipients, recentPosts, stats }) {
    const { settings } = usePage().props;

    return (
        <PublicLayout title="Home">
            <HeroSection />

            {/* Solid Stats Strip */}
            <StatStrip stats={stats} />

            {/* Mission Callout */}
            <section className="py-32 bg-cream section-mesh overflow-hidden relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <ScrollReveal delay={0.2} direction="up">
                        <div className="relative">
                            <span className="absolute -top-12 -left-8 quote-mark">"</span>
                            <p className="font-display italic text-2xl md:text-4xl text-forest leading-relaxed relative z-10 px-8">
                                There are too many bright talented young children who are unable to receive higher education because of their family's poor financial background. With some financial assistance, they can do better in life and serve society much better.
                            </p>
                            <span className="absolute -bottom-24 -right-8 quote-mark">"</span>
                        </div>
                        <div className="mt-16 font-sans font-semibold text-charcoal/80 uppercase tracking-widest text-sm">
                            — Dr. Thampil Pankaj, Founder
                        </div>
                    </ScrollReveal>
                </div>
            </section>
            <SectionDivider flip={false} color="#F0EBE3" />

            {/* How It Works */}
            <section className="py-24 bg-mist relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal direction="down">
                        <div className="text-center mb-20">
                            <h2 className="font-display font-bold text-4xl text-charcoal mb-4">How It Works</h2>
                            <div className="w-24 h-1 bg-saffron mx-auto"></div>
                        </div>
                    </ScrollReveal>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <StepCard delay={0.15}>
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 text-9xl font-display font-black text-mist/60 group-hover:text-saffron/10 transition-colors pointer-events-none">1</div>
                            <h3 className="font-sans font-bold text-xl text-forest mb-4 relative z-10">Schools Nominate</h3>
                            <p className="font-body text-charcoal/80 relative z-10">
                                Partner government schools in Ernakulam and Idukki districts nominate students based on academic merit and financial need.
                            </p>
                        </StepCard>
                        
                        <StepCard delay={0.3}>
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 text-9xl font-display font-black text-mist/60 group-hover:text-saffron/10 transition-colors pointer-events-none">2</div>
                            <h3 className="font-sans font-bold text-xl text-forest mb-4 relative z-10">Rigorous Selection</h3>
                            <p className="font-body text-charcoal/80 relative z-10">
                                50% academic merit + 50% financial need criteria, thoroughly verified by Trust members through local enquiry and field visits.
                            </p>
                        </StepCard>
                        
                        <StepCard delay={0.45}>
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 text-9xl font-display font-black text-mist/60 group-hover:text-saffron/10 transition-colors pointer-events-none">3</div>
                            <h3 className="font-sans font-bold text-xl text-forest mb-4 relative z-10">Multi-Year Support</h3>
                            <p className="font-body text-charcoal/80 relative z-10">
                                Financial assistance provided consistently for the entire 3 or 4-year degree course, subject to satisfactory academic progress.
                            </p>
                        </StepCard>
                    </div>
                </div>
            </section>
            <SectionDivider flip={true} color="#F0EBE3" />

            {/* Recent Recipients Spotlight */}
            {recentRecipients && recentRecipients.length > 0 && (
                <section className="py-24 bg-cream relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                                <div>
                                    <h2 className="font-display font-bold text-4xl text-forest mb-4">Latest Scholars</h2>
                                    <div className="w-16 h-1 bg-saffron"></div>
                                </div>
                                <Link 
                                    href={route('recipients.index')} 
                                    className="mt-6 md:mt-0 font-sans font-bold text-saffron hover:text-forest transition-colors flex items-center group uppercase tracking-widest text-sm"
                                >
                                    Meet All Recipients <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                                </Link>
                            </div>
                        </ScrollReveal>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {recentRecipients.map((recipient, i) => (
                                <ScrollReveal key={recipient.id} delay={i * 0.15}>
                                    <RecipientCard recipient={recipient} />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Founder Section */}
            <section className={`bg-forest relative overflow-hidden pt-32 ${(!recentPosts || recentPosts.length === 0) ? 'pb-0' : 'pb-32'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest to-charcoal"></div>
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-5/12 relative">
                            <ScrollReveal direction="left">
                                <div className="relative overflow-hidden w-full max-w-[400px] mx-auto">
                                    {/* SVG Decor Frame */}
                                    <svg viewBox="0 0 400 500" className="w-full h-auto drop-shadow-2xl">
                                        <defs>
                                            <clipPath id="founder-clip">
                                                <ellipse cx="200" cy="230" rx="165" ry="200"/>
                                            </clipPath>
                                        </defs>
                                        <ellipse cx="200" cy="230" rx="175" ry="210" fill="none" stroke="#E8872A" strokeWidth="3" opacity="0.6"/>
                                        <ellipse cx="200" cy="230" rx="185" ry="220" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.3"/>
                                        <image href="/images/dr-pankaj.jpg" x="35" y="30" width="330" height="400" clipPath="url(#founder-clip)" preserveAspectRatio="xMidYMid slice" onError={(e) => { e.target.href.baseVal = "https://images.unsplash.com/photo-1507676184212-d0c30a47bfb0?auto=format&fit=crop&q=80&w=800"; }}/>
                                        <ellipse cx="200" cy="440" rx="130" ry="20" fill="#E8872A" opacity="0.15"/>
                                    </svg>

                                    {/* Curtain wipe — animates width 100%→0% when in view */}
                                    <motion.div
                                        className="absolute inset-0 bg-saffron origin-right z-10"
                                        initial={{ scaleX: 1 }}
                                        whileInView={{ scaleX: 0 }}
                                        viewport={{ once: true, margin: '-100px' }}
                                        transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                                    />
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
                                    className="inline-block border border-saffron/50 text-saffron px-8 py-4 rounded-sm font-sans font-semibold text-sm hover:bg-saffron hover:text-white transition-colors uppercase tracking-wider"
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
                                        href={route('news.index')} 
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
