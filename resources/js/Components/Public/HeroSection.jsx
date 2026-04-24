import React, { useEffect, useRef } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import HeroParticles from '@/Components/Effects/HeroParticles';
import AnimatedHeadline from '@/Components/Effects/AnimatedHeadline';

export default function HeroSection() {
    const { settings } = usePage().props;
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;
            const scrollY = window.scrollY;
            
            // Layer 1: background image — slowest
            const heroBg = heroRef.current.querySelector('.hero-bg');
            if (heroBg) heroBg.style.transform = `translateY(${scrollY * 0.4}px)`;
            
            // Layer 2: particles — medium
            const canvas = heroRef.current.querySelector('canvas');
            if (canvas) canvas.style.transform = `translateY(${scrollY * 0.25}px)`;
            
            // Layer 3: text — fastest (feels like it floats up and away)
            const heroText = heroRef.current.querySelector('.hero-text');
            if (heroText) {
                heroText.style.transform = `translateY(${scrollY * 0.15}px)`;
                heroText.style.opacity = Math.max(1 - scrollY / 500, 0);
            }
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={heroRef} className="relative h-screen min-h-[600px] w-full overflow-hidden flex flex-col justify-center bg-forest text-cream">
            {/* Layer 1: Background Image with Gradient */}
            <div className="absolute inset-0 z-0 hero-bg origin-top">
                <img 
                    src="/images/hero-bg.jpg" 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1544207936-7c95acc645d9?auto=format&fit=crop&q=80&w=2000"; }}
                    alt="Kerala Students" 
                    className="w-full h-full object-cover object-center opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-forest/60 to-transparent mix-blend-multiply"></div>
            </div>

            {/* Layer 2: Particles */}
            <HeroParticles />

            {/* Layer 3: Text Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 hero-text">
                <div className="max-w-3xl">
                    <AnimatedHeadline text={settings.hero_headline || "Turning Potential Into Possibility"} />
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="font-body text-xl md:text-2xl text-cream/90 mb-10 leading-relaxed drop-shadow"
                    >
                        {settings.hero_subtext || "Empowering bright, financially disadvantaged students in Kerala to achieve university education since 1999."}
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link 
                            href={route('scholarship')} 
                            className="bg-saffron text-white text-center px-8 py-4 rounded-sm font-sans font-semibold text-lg hover:bg-gold transition-colors shadow-glow-saffron"
                        >
                            {settings.hero_cta_primary || "Explore Scholarships"}
                        </Link>
                        <Link 
                            href={route('donate')} 
                            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white text-center px-8 py-4 rounded-sm font-sans font-semibold text-lg hover:bg-white hover:text-forest transition-colors"
                        >
                            {settings.hero_cta_secondary || "Support a Student"}
                        </Link>
                    </motion.div>
                </div>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-20 animate-float-up"
            >
                <ChevronDown size={32} className="text-white/70" />
            </motion.div>
        </section>
    );
}
