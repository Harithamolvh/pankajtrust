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
        { name: 'Scholarship', href: route('scholarships') },
        { name: 'Recipients', href: route('recipients') },
        { name: 'Gallery', href: route('gallery') },
    ];

    return (
        <>
            <header style={{
                position: 'fixed', top: 0, width: '100%', zIndex: 90,
                background: scrolled ? 'rgba(253,246,236,0.95)' : 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.08)' : '0 1px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.35s ease',
            }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href={route('home')} className="flex items-center gap-2 sm:gap-3">
                                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center p-1.5 transition-shadow overflow-hidden ${scrolled ? 'shadow-sm' : 'shadow-md'}`}>
                                    <img src="/images/logo.png" alt="Trust Logo" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col">
                                    <span className={`font-display font-bold text-lg sm:text-xl md:text-2xl tracking-tight transition-colors ${scrolled ? 'text-charcoal' : 'text-charcoal'}`}>Dr. Pankaj Trust</span>
                                    <span className={`font-sans text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest font-medium transition-colors ${scrolled ? 'text-saffron' : 'text-saffron'}`}>Educational & Charitable</span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="hidden md:flex space-x-8 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`font-sans transition-colors text-sm font-medium ${scrolled ? 'text-charcoal hover:text-saffron' : 'text-charcoal/80 hover:text-saffron'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile menu button */}
                        <div className="flex md:hidden items-center space-x-4">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`p-2 transition-colors ${scrolled ? 'text-charcoal hover:text-saffron' : 'text-charcoal hover:text-saffron'}`}
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Backdrop */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-charcoal/40 backdrop-blur-md md:hidden z-[100]" 
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Menu Content */}
            {isOpen && (
                <div 
                    className="md:hidden bg-cream border-b border-saffron/20 shadow-2xl fixed w-full left-0 top-20 z-[101]"
                >
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-4 border-b border-mist last:border-0 font-sans font-bold text-charcoal hover:text-saffron transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
