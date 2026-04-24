import React from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import PublicLayout from '@/Components/Layout/PublicLayout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    const { settings, flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <PublicLayout title="Contact Us">
            {/* Page Header */}
            <div className="bg-forest text-cream py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="font-display font-black text-4xl md:text-5xl mb-4">Contact Us</h1>
                    <p className="font-body text-xl text-cream/80 max-w-2xl mx-auto">
                        Get in touch with us for inquiries, support, or partnership opportunities.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* Contact Info */}
                    <div>
                        <h2 className="font-display font-bold text-3xl text-forest mb-8">Get In Touch</h2>
                        <p className="font-body text-charcoal/80 mb-12 leading-relaxed">
                            We welcome inquiries from potential donors, volunteers, partner schools, and anyone interested in supporting our mission to empower bright, financially disadvantaged students in Kerala.
                        </p>
                        
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="bg-mist p-4 rounded-full mr-6 text-saffron shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-sans font-bold text-lg text-charcoal mb-1">Email Address</h3>
                                    <a href={`mailto:${settings.contact_email}`} className="font-body text-charcoal/70 hover:text-saffron transition-colors">
                                        {settings.contact_email}
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-mist p-4 rounded-full mr-6 text-saffron shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-sans font-bold text-lg text-charcoal mb-1">Phone Number</h3>
                                    <a href={`tel:${settings.contact_phone}`} className="font-body text-charcoal/70 hover:text-saffron transition-colors">
                                        {settings.contact_phone}
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-mist p-4 rounded-full mr-6 text-saffron shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-sans font-bold text-lg text-charcoal mb-1">Office Address</h3>
                                    <address className="font-body text-charcoal/70 not-italic whitespace-pre-line">
                                        {settings.contact_address}
                                    </address>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-mist rounded border-l-4 border-gold">
                            <h3 className="font-sans font-bold text-forest mb-2">Student Inquiries</h3>
                            <p className="font-body text-sm text-charcoal/70">
                                Please note that direct scholarship applications from students are not accepted. Nominations must be submitted through our partner government and aided higher-secondary schools.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-cream p-8 md:p-10 rounded-sm shadow-xl border-t-4 border-saffron relative">
                        {flash.success && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded text-sm font-sans flex items-start">
                                <div className="mr-3 mt-0.5">✅</div>
                                <div>{flash.success}</div>
                            </div>
                        )}

                        <h2 className="font-display font-bold text-2xl text-charcoal mb-6">Send a Message</h2>
                        
                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block font-sans text-sm font-bold text-forest mb-2 uppercase tracking-wide">Your Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        className={`w-full bg-white border ${errors.name ? 'border-red-500 ring-red-500' : 'border-mist focus:ring-saffron focus:border-saffron'} rounded px-4 py-3 font-body text-charcoal transition-colors`}
                                        required
                                    />
                                    {errors.name && <div className="text-red-500 text-xs mt-1 font-sans">{errors.name}</div>}
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block font-sans text-sm font-bold text-forest mb-2 uppercase tracking-wide">Email Address <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className={`w-full bg-white border ${errors.email ? 'border-red-500 ring-red-500' : 'border-mist focus:ring-saffron focus:border-saffron'} rounded px-4 py-3 font-body text-charcoal transition-colors`}
                                        required
                                    />
                                    {errors.email && <div className="text-red-500 text-xs mt-1 font-sans">{errors.email}</div>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block font-sans text-sm font-bold text-forest mb-2 uppercase tracking-wide">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={data.phone}
                                        onChange={e => setData('phone', e.target.value)}
                                        className={`w-full bg-white border ${errors.phone ? 'border-red-500 ring-red-500' : 'border-mist focus:ring-saffron focus:border-saffron'} rounded px-4 py-3 font-body text-charcoal transition-colors`}
                                    />
                                    {errors.phone && <div className="text-red-500 text-xs mt-1 font-sans">{errors.phone}</div>}
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block font-sans text-sm font-bold text-forest mb-2 uppercase tracking-wide">Subject <span className="text-red-500">*</span></label>
                                    <select
                                        id="subject"
                                        value={data.subject}
                                        onChange={e => setData('subject', e.target.value)}
                                        className={`w-full bg-white border ${errors.subject ? 'border-red-500 ring-red-500' : 'border-mist focus:ring-saffron focus:border-saffron'} rounded px-4 py-3 font-body text-charcoal transition-colors`}
                                        required
                                    >
                                        <option value="">Select a subject...</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Donation">Donation Information</option>
                                        <option value="Partnership">School Partnership</option>
                                        <option value="Feedback">Feedback</option>
                                    </select>
                                    {errors.subject && <div className="text-red-500 text-xs mt-1 font-sans">{errors.subject}</div>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block font-sans text-sm font-bold text-forest mb-2 uppercase tracking-wide">Message <span className="text-red-500">*</span></label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    value={data.message}
                                    onChange={e => setData('message', e.target.value)}
                                    className={`w-full bg-white border ${errors.message ? 'border-red-500 ring-red-500' : 'border-mist focus:ring-saffron focus:border-saffron'} rounded px-4 py-3 font-body text-charcoal transition-colors resize-y`}
                                    required
                                ></textarea>
                                {errors.message && <div className="text-red-500 text-xs mt-1 font-sans">{errors.message}</div>}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-saffron text-white px-6 py-4 rounded font-sans font-bold text-sm uppercase tracking-wider hover:bg-forest transition-colors shadow-sm flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {processing ? 'Sending...' : (
                                    <>Send Message <Send size={16} className="ml-2" /></>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </PublicLayout>
    );
}
