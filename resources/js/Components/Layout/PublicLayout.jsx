import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from './Navbar';
import Footer from './Footer';

function ScrollProgress() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const update = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            setProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
        };
        window.addEventListener('scroll', update, { passive: true });
        return () => window.removeEventListener('scroll', update);
    }, []);

    return (
        <div className="fixed top-0 left-0 z-[100] h-[3px] bg-saffron transition-none"
             style={{ width: `${progress}%` }} />
    );
}

export default function PublicLayout({ title, children }) {
    return (
        <div className="min-h-screen flex flex-col font-body bg-cream text-charcoal selection:bg-saffron selection:text-white">
            {title && <Head title={`${title} - Pankaj Trust`} />}
            <ScrollProgress />
            <Navbar />
            <main className="flex-grow flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    );
}
