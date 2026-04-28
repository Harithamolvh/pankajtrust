import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const navLinks = [
        { name: 'Home', href: route('home') },
        { name: 'About', href: route('about') },
        { name: 'Scholarship', href: route('scholarship') },
        { name: 'Recipients', href: route('recipients.index') },
        { name: 'Gallery', href: route('gallery') },
        { name: 'News', href: route('news.index') },

    ];

    return (
        <header style={{
            position: 'fixed', top: 0, width: '100%', zIndex: 90,
            background: scrolled ? 'rgba(253,246,236,0.92)' : 'transparent',
            backdropFilter: scrolled ? 'blur(16px)' : 'none',
            boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : 'none',
            transition: 'all 0.35s ease',
        }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href={route('home')} className="flex items-center gap-3">
                            <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center p-1.5 transition-shadow overflow-hidden ${scrolled ? 'shadow-sm' : 'shadow-glow-gold'}`}>
                                <img src="/images/logo.png" alt="Trust Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className={`font-display font-bold text-xl md:text-2xl tracking-tight transition-colors ${scrolled ? 'text-forest' : 'text-white'}`}>Dr. Pankaj Trust</span>
                                <span className={`font-sans text-[10px] md:text-xs uppercase tracking-widest font-medium transition-colors ${scrolled ? 'text-saffron' : 'text-white/80'}`}>Educational & Charitable</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-sans transition-colors text-sm font-medium ${scrolled ? 'text-charcoal hover:text-saffron' : 'text-white/90 hover:text-white'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href={route('donate')}
                            className="bg-saffron text-white px-5 py-2.5 rounded-full font-sans font-semibold text-sm hover:bg-forest transition-colors shadow-sm hover:shadow-md"
                        >
                            Donate
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center space-x-4">
                        <Link
                            href={route('donate')}
                            className="bg-saffron text-white px-4 py-2 rounded-full font-sans font-semibold text-xs hover:bg-forest transition-colors"
                        >
                            Donate
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 transition-colors ${scrolled ? 'text-charcoal hover:text-saffron' : 'text-white hover:text-saffron'}`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-cream border-b border-saffron/20 shadow-lg absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-3 rounded-md text-base font-sans font-medium text-charcoal hover:text-saffron hover:bg-mist transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
