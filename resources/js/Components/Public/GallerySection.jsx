import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/Components/Effects/ScrollReveal';
import { Link } from '@inertiajs/react';

export default function GallerySection({ images = [] }) {
    if (!images || images.length === 0) return null;

    return (
        <section className="py-32 bg-charcoal relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal z-10" />
                <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">
                                Moments of <span className="text-saffron italic">Hope</span>
                            </h2>
                            <p className="font-body text-xl text-cream/50 leading-relaxed italic border-l-4 border-saffron pl-8">
                                A visual journey through our impact, showcasing the students, schools, and communities we serve.
                            </p>
                        </div>
                        <Link 
                            href={route('gallery')}
                            className="group font-sans font-bold text-saffron uppercase tracking-widest text-sm flex items-center gap-3 hover:text-white transition-colors"
                        >
                            View Full Gallery 
                            <span className="w-12 h-12 rounded-full border border-saffron/30 flex items-center justify-center group-hover:bg-saffron group-hover:border-saffron transition-all">
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    →
                                </motion.span>
                            </span>
                        </Link>
                    </div>
                </ScrollReveal>

                {/* Cinematic Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {images.map((image, idx) => (
                        <ScrollReveal 
                            key={image.id} 
                            delay={idx * 0.1} 
                            direction={idx % 2 === 0 ? 'up' : 'down'}
                            className={`${idx === 0 || idx === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}
                        >
                            <div className="group relative aspect-square rounded-[2rem] overflow-hidden bg-forest/20 border border-white/5 transition-all duration-700 hover:border-saffron/50 shadow-2xl">
                                {/* Image Container */}
                                <div className="absolute inset-0 z-0">
                                    <img 
                                        src={image.url} 
                                        alt={image.title || 'Gallery Image'} 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                                    <div className="w-8 h-1 bg-saffron mb-4" />
                                    <p className="font-sans font-bold text-xs text-saffron uppercase tracking-widest mb-1">{image.category || 'Event'}</p>
                                    <h4 className="font-display font-bold text-xl text-white">{image.title || 'Scholarship Distribution'}</h4>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
