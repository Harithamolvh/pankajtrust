import React from 'react';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-forest text-cream py-16 border-t-4 border-saffron">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1.5 shadow-sm overflow-hidden">
                                <img src="/images/logo.png" alt="Trust Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="font-display font-bold text-2xl text-mist leading-none">Dr. Pankaj Trust</span>
                        </Link>
                        <p className="font-body text-mist/80 text-sm mb-6 leading-relaxed">
                            Empowering bright, financially disadvantaged students in Kerala to achieve university education since 1999.
                        </p>
                        <div className="text-xs text-mist/60 font-sans border border-mist/20 p-3 rounded bg-charcoal/20">
                            Registered under Charitable Trust Act of Kerala.
                        </div>
                    </div>

                    <div>
                        <h3 className="font-sans font-bold text-saffron tracking-wider uppercase text-sm mb-6">Quick Links</h3>
                        <ul className="space-y-3 font-sans text-sm">
                            <li><Link href={route('home')} className="text-mist hover:text-saffron transition-colors">Home</Link></li>
                            <li><Link href={route('about')} className="text-mist hover:text-saffron transition-colors">About the Trust</Link></li>
                            <li><Link href={route('scholarship')} className="text-mist hover:text-saffron transition-colors">Scholarship Program</Link></li>
                            <li><Link href={route('recipients.index')} className="text-mist hover:text-saffron transition-colors">Meet the Recipients</Link></li>
                            <li><Link href={route('gallery')} className="text-mist hover:text-saffron transition-colors">Photo Gallery</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-sans font-bold text-saffron tracking-wider uppercase text-sm mb-6">Involved</h3>
                        <ul className="space-y-3 font-sans text-sm">
                            <li><Link href={route('schools')} className="text-mist hover:text-saffron transition-colors">Partner Schools</Link></li>
                            <li><Link href={route('donors')} className="text-mist hover:text-saffron transition-colors">Our Donors</Link></li>
                            <li><Link href={route('news.index')} className="text-mist hover:text-saffron transition-colors">News & Updates</Link></li>
                            <li><Link href={route('contact')} className="text-mist hover:text-saffron transition-colors">Contact Us</Link></li>
                            <li><Link href={route('donate')} className="text-mist font-semibold hover:text-saffron transition-colors">Donate Now</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-sans font-bold text-saffron tracking-wider uppercase text-sm mb-6">Contact</h3>
                        <ul className="space-y-4 font-sans text-sm text-mist/80">
                            <li>
                                <strong>Email:</strong><br />
                                <a href="mailto:info@pankajtrust.org" className="hover:text-saffron transition-colors">info@pankajtrust.org</a>
                            </li>
                            <li>
                                <strong>Address:</strong><br />
                                Ernakulam, Kerala, India
                            </li>
                            <li className="pt-4 border-t border-mist/10">
                                <span className="block text-xs font-bold text-gold mb-1">80G CERTIFIED</span>
                                <span className="text-xs text-mist/60">Donations are eligible for tax deduction under Section 80G.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-mist/10 flex flex-col md:flex-row justify-between items-center font-sans text-xs text-mist/60">
                    <p>&copy; {new Date().getFullYear()} Dr. Pankaj Educational and Charitable Trust. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
