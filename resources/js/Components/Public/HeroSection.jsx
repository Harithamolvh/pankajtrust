import React, { useState, useEffect, useRef } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, GraduationCap, Heart } from 'lucide-react';
import HeroParticles from '@/Components/Effects/HeroParticles';

export default function HeroSection() {
    const { settings } = usePage().props;
    const heroRef = useRef(null);
    const { scrollY } = useScroll();
    
    // Slider state for the 3 banner images
    const [currentIndex, setCurrentIndex] = useState(0);
    const bannerImages = [
        '/images/trust-banner1.png',
        '/images/trust_banner2.png',
        '/images/trust-banner3.png'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
        }, 6000); // 6 second interval
        return () => clearInterval(timer);
    }, []);

    // Parallax and fade transforms
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

    return (
        <section 
            ref={heroRef} 
            className="relative w-full h-screen overflow-hidden bg-charcoal flex items-center justify-center text-center"
        >
            {/* Background Image Slider with Parallax & Zoom */}
            <motion.div 
                style={{ y: y1, scale }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/70 z-10" />
                <AnimatePresence mode="wait">
                    <motion.img 
                        key={currentIndex}
                        src={bannerImages[currentIndex]} 
                        alt="Pankaj Trust Hero" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000"; }}
                    />
                </AnimatePresence>
            </motion.div>

            {/* Particles Layer */}
            <HeroParticles />

            {/* Content Container */}
            <motion.div 
                style={{ opacity }}
                className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-saffron bg-saffron/10 border border-saffron/30 px-6 py-2.5 rounded-full backdrop-blur-md">
                        Empowering Futures Since {settings.trust_established || '1999'}
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8"
                >
                    Turning <span className="text-saffron italic">Potential</span> <br />
                    Into <span className="text-glow">Possibility</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="font-body text-lg md:text-2xl text-cream/80 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    {settings.hero_subtext || "Empowering bright, financially disadvantaged students in Kerala to achieve university education through merit-cum-means scholarships."}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Link
                        href={route('donate')}
                        className="group relative px-10 py-5 bg-saffron text-white rounded-sm font-sans font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(232,135,42,0.4)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <Heart size={20} className="transition-transform group-hover:scale-110" />
                            {settings.hero_cta_secondary || "Support a Student"}
                        </span>
                        <div className="absolute inset-0 bg-rust translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                    </Link>

                    <Link
                        href={route('scholarships')}
                        className="group relative px-10 py-5 border border-white/30 text-white rounded-sm font-sans font-bold text-lg overflow-hidden transition-all duration-300 hover:border-saffron backdrop-blur-sm"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <GraduationCap size={22} className="transition-transform group-hover:rotate-12" />
                            {settings.hero_cta_primary || "Explore Scholarships"}
                        </span>
                        <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Floating Decorative Elements */}
            <motion.div 
                animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="absolute top-1/4 left-10 w-24 h-24 border border-saffron/20 rounded-full hidden xl:block opacity-30"
            />
            <motion.div 
                animate={{ 
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="absolute bottom-1/4 right-10 w-32 h-32 border border-white/10 rounded-full hidden xl:block opacity-20"
            />

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
                    <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <ChevronDown size={24} className="text-saffron" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
