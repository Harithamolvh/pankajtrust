import React from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Components/Layout/PublicLayout';
import ScrollReveal from '@/Components/Effects/ScrollReveal';

export default function Inspiration() {
    return (
        <PublicLayout title="Our Inspiration">
            {/* Hero Section - Dark & Cinematic */}
            <section className="relative min-h-[90vh] flex items-center pt-20 bg-charcoal overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal z-10" />
                    <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-saffron/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-1/4 w-full max-w-2xl h-96 bg-gold/10 rounded-full blur-[150px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
                                Our <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">Inspiration.</span>
                            </h1>
                            <p className="font-body text-xl md:text-2xl text-cream/70 leading-relaxed mb-12 border-l-4 border-saffron pl-6">
                                The extraordinary journey of Dr. Thampil Pankaj—from a poverty-stricken childhood in Maradu village to the halls of the World Bank, and back again to change lives.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2} direction="left">
                            <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto">
                                <div className="absolute inset-0 bg-gradient-to-tr from-saffron to-gold rounded-[3rem] rotate-6 opacity-20 blur-xl"></div>
                                <div className="relative h-full rounded-[3rem] overflow-hidden border border-white/10 bg-forest/40 backdrop-blur-sm p-4">
                                    <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-charcoal relative">
                                        <img 
                                            src="/images/dr-pankaj.jpg" 
                                            alt="Dr. Thampil Pankaj"
                                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507676184212-d0c30a47bfb0?auto=format&fit=crop&q=80&w=800"; }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80"></div>
                                        <div className="absolute bottom-0 left-0 p-8">
                                            <h3 className="font-display font-bold text-3xl text-white">Dr. Thampil Pankaj</h3>
                                            <p className="font-sans text-saffron font-bold text-sm uppercase tracking-widest mt-1">Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Central Quote Block */}
            <section className="py-24 bg-mist relative z-30 -mt-10 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal direction="up">
                        <div className="w-20 h-20 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-10">
                            <span className="text-saffron text-5xl leading-none rotate-180 font-serif">"</span>
                        </div>
                        <h2 className="font-display italic text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-10">
                            "Brilliant young minds are often held back by financial barriers—not lack of potential. When we invest in their education, we don’t just change lives—we unlock a generation ready to lead, innovate, and shape a more equitable society."
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-saffron to-gold mx-auto"></div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Timeline / Story Section */}
            <section className="py-32 bg-cream overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="mb-20">
                            <span className="font-sans font-bold text-saffron uppercase tracking-widest text-sm mb-2 block">The Story</span>
                            <h2 className="font-display font-black text-5xl text-charcoal">Our Founder – <span className="text-forest italic">Dr. Pankaj</span></h2>
                        </div>
                    </ScrollReveal>
                    
                    {/* Chapter 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <ScrollReveal direction="right" className="order-2 lg:order-1">
                            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-charcoal/5 relative group hover:border-saffron/30 transition-colors">
                                <div className="absolute -left-6 -top-6 text-[10rem] leading-none font-display font-black text-charcoal/5 pointer-events-none group-hover:text-saffron/5 transition-colors">01</div>
                                <h3 className="font-display font-bold text-4xl text-forest mb-6 relative z-10">Humble Beginnings</h3>
                                <p className="font-body text-lg text-charcoal/70 leading-relaxed mb-6">
                                    Dr. Pankaj’s journey is a powerful reminder that where you begin does not define where you can go.
                                </p>
                                <p className="font-body text-lg text-charcoal/70 leading-relaxed">
                                    Born in Maradu village, he rose from modest beginnings to pursue his education at Mangayil High School, Maharaja’s College, and the Gokhale Institute of Politics and Economics, later earning his PhD in Economics from the University of Pune.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="left" className="order-1 lg:order-2 flex justify-center">
                            <div className="relative w-full max-w-md aspect-square rounded-[3rem] bg-forest overflow-hidden group shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-forest/60 to-transparent mix-blend-overlay z-10 opacity-80"></div>
                                <img src="/images/site/kerala_village_roots.png" alt="Kerala Backwaters" className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Chapter 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <ScrollReveal direction="right" className="flex justify-center">
                            <div className="relative w-full max-w-md aspect-square rounded-[3rem] bg-charcoal overflow-hidden group shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/40 to-transparent mix-blend-overlay z-10 opacity-60"></div>
                                <img src="/images/site/global_institution_career.png" alt="World Bank" className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="left">
                            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-charcoal/5 relative group hover:border-gold/30 transition-colors">
                                <div className="absolute -right-6 -bottom-6 text-[10rem] leading-none font-display font-black text-charcoal/5 pointer-events-none group-hover:text-gold/5 transition-colors">02</div>
                                <h3 className="font-display font-bold text-4xl text-charcoal mb-6 relative z-10">A Global Career</h3>
                                <p className="font-body text-lg text-charcoal/70 leading-relaxed mb-6">
                                    With determination and a strong belief in education, he built a distinguished career—serving the Government of India and contributing to global policy at the United Nations Conference on Trade and Development in Geneva.
                                </p>
                                <p className="font-body text-lg text-charcoal/70 leading-relaxed">
                                    He dedicated 25 years to the World Bank, where he retired as Principal Economist (Infrastructure) for the South Asia Region. His work has impacted lives across Africa, the Middle East, and South Asia, especially in improving infrastructure and supporting underserved communities.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Chapter 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal direction="right" className="order-2 lg:order-1">
                            <div className="bg-forest p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-white/10">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
                                <div className="absolute -left-6 -top-6 text-[10rem] leading-none font-display font-black text-white/5 pointer-events-none group-hover:text-white/10 transition-colors">03</div>
                                <h3 className="font-display font-bold text-4xl text-cream mb-6 relative z-10">A Deeper Purpose</h3>
                                <p className="font-body text-lg text-cream/80 leading-relaxed mb-6 relative z-10">
                                    Beyond his professional achievements lies a deeper purpose. Having experienced financial hardship in his early years, Dr. Pankaj understands the struggles many young students face today. His vision is simple yet powerful: no deserving student should be denied an education because of financial limitations.
                                </p>
                                <p className="font-body text-lg text-cream/80 leading-relaxed relative z-10">
                                    Through this trust, built on that very belief, support reaches bright, hardworking students from economically disadvantaged backgrounds. For many, even modest assistance has been life-changing—opening doors to education, confidence, and a better future.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="left" className="order-1 lg:order-2 flex justify-center">
                            <div className="relative w-full max-w-md aspect-[4/3] md:aspect-square rounded-[3rem] bg-mist overflow-hidden group shadow-2xl border border-charcoal/5">
                                <img src="/images/site/students_hopeful_future.png" alt="Education" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-90" />
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </section>

            {/* Founder's Message Section */}
            <section className="py-24 bg-charcoal relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                    <ScrollReveal direction="up">
                        <span className="inline-block px-4 py-1 rounded-full bg-saffron/10 border border-saffron/20 text-saffron font-display font-bold text-sm tracking-widest uppercase mb-8">
                            A Message to Every Young Mind
                        </span>
                        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-12 leading-tight">
                            "No matter your circumstances today, your <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">determination</span> can shape a brighter tomorrow."
                        </h2>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-saffron/30 mb-4 p-1">
                                <img 
                                    src="/images/dr-pankaj.jpg" 
                                    alt="Dr. Pankaj" 
                                    className="w-full h-full object-cover rounded-full grayscale"
                                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507676184212-d0c30a47bfb0?auto=format&fit=crop&q=80&w=800"; }}
                                />
                            </div>
                            <p className="font-display font-bold text-xl text-gold italic">— Dr. Pankaj</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </PublicLayout>
    );
}
