import React from 'react';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0 bg-forest relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest to-charcoal"></div>
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
            
            <div className="relative z-10 w-full flex flex-col items-center">
                <Link href="/" className="mb-8 group">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shadow-glow-gold group-hover:scale-105 transition-transform overflow-hidden">
                            <img src="/images/logo.png" alt="Trust Logo" className="w-full h-full object-contain" onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=PT&background=E8872A&color=fff"; }} />
                        </div>
                        <div className="text-white">
                            <h2 className="font-display font-bold text-xl leading-tight">Dr. Pankaj</h2>
                            <p className="font-sans text-xs text-saffron uppercase tracking-widest">Trust Admin</p>
                        </div>
                    </div>
                </Link>

                <div className="w-full overflow-hidden bg-cream px-8 py-10 shadow-2xl sm:max-w-md sm:rounded-2xl border-t-4 border-saffron relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none"></div>
                    {children}
                </div>
                
                <div className="mt-8 font-sans text-xs text-white/40">
                    &copy; {new Date().getFullYear()} Dr. Pankaj Educational & Charitable Trust
                </div>
            </div>
        </div>
    );
}
