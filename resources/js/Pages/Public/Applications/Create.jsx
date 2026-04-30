import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import PublicLayout from '@/Components/Layout/PublicLayout';
import { GraduationCap, Phone, User, BookOpen, School, Send, CheckCircle, Award, UserCheck, ChevronRight } from 'lucide-react';
import InputError from '@/Components/InputError';

export default function CreateApplication({ meta }) {
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        student_name: '',
        student_phone: '',
        student_email: '',
        school_name: '',
        course_name: '',
        referrer_name: '',
        referrer_phone: '',
        referrer_designation: 'Principal',
        referrer_remarks: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('scholarship.store'), {
            onSuccess: () => reset(),
        });
    };

    if (wasSuccessful) {
        return (
            <PublicLayout>
                <Head title="Success | Scholarship Application" />
                <div className="min-h-[80vh] flex items-center justify-center px-4 bg-cream">
                    <div className="max-w-lg w-full text-center bg-white p-12 rounded-3xl shadow-2xl border border-black/5">
                        <div className="w-24 h-24 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                            <CheckCircle size={48} className="text-forest" />
                        </div>
                        <h1 className="font-display font-bold text-4xl text-charcoal mb-4 tracking-tight">Application Received</h1>
                        <p className="font-sans text-charcoal/60 mb-10 text-lg leading-relaxed">
                            Thank you for your valuable recommendation. We have successfully registered the student in our evaluation pipeline.
                        </p>
                        <div className="flex flex-col gap-4">
                            <button 
                                onClick={() => window.location.reload()}
                                className="bg-saffron text-white px-10 py-4 rounded-full font-sans font-bold hover:bg-rust transition-all shadow-lg shadow-saffron/20"
                            >
                                Submit Another Recommendation
                            </button>
                            <a href="/" className="text-charcoal/40 hover:text-charcoal font-sans text-sm font-medium transition-colors">
                                Return to Homepage
                            </a>
                        </div>
                    </div>
                </div>
            </PublicLayout>
        );
    }

    return (
        <PublicLayout>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
            </Head>

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/images/scholarship-bg.png" 
                        alt="Background" 
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/80 to-cream"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest text-white rounded-full font-sans text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
                        <Award size={14} className="text-gold" /> Private Referral Portal
                    </div>
                    <h1 className="font-display font-bold text-5xl md:text-7xl text-charcoal mb-6 tracking-tight">
                        Empowering <span className="text-saffron italic">Excellence</span>
                    </h1>
                    <p className="font-sans text-charcoal/60 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        This portal is exclusively for School Principals and Academic Officers to recommend deserving students for the <span className="font-bold text-forest">Dr. Pankaj Trust Scholarship</span>.
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className="bg-cream pb-32 pt-10">
                <div className="max-w-6xl mx-auto px-4">
                    <form onSubmit={submit} className="w-full bg-white rounded-[2.5rem] shadow-2xl border border-black/5 overflow-hidden">
                        <div className="flex flex-col lg:flex-row min-h-[700px]">
                            
                            {/* Left Side - Info Panel */}
                            <div className="w-full lg:w-1/3 bg-forest p-10 lg:p-12 text-white relative shrink-0">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                                        <GraduationCap size={32} className="text-gold" />
                                    </div>
                                    <h2 className="font-display font-bold text-3xl mb-6">Selection Criteria</h2>
                                    <ul className="space-y-6">
                                        <li className="flex gap-4">
                                            <div className="mt-1 shrink-0 w-5 h-5 rounded-full border border-gold/50 flex items-center justify-center">
                                                <ChevronRight size={12} className="text-gold" />
                                            </div>
                                            <p className="font-sans text-sm text-cream/80 leading-relaxed">Financial disadvantage with exceptional academic performance.</p>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="mt-1 shrink-0 w-5 h-5 rounded-full border border-gold/50 flex items-center justify-center">
                                                <ChevronRight size={12} className="text-gold" />
                                            </div>
                                            <p className="font-sans text-sm text-cream/80 leading-relaxed">Students entering 11th, 12th or University courses.</p>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="mt-1 shrink-0 w-5 h-5 rounded-full border border-gold/50 flex items-center justify-center">
                                                <ChevronRight size={12} className="text-gold" />
                                            </div>
                                            <p className="font-sans text-sm text-cream/80 leading-relaxed">Strong recommendation from the Head of Institution.</p>
                                        </li>
                                    </ul>

                                    <div className="mt-20 pt-10 border-t border-white/10">
                                        <p className="font-sans text-[11px] text-cream/40 uppercase tracking-widest font-bold mb-2">Need Assistance?</p>
                                        <p className="font-sans text-sm text-cream/70">support@pankajtrust.org</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Form Fields */}
                            <div className="w-full lg:w-2/3 p-10 lg:p-16">
                                
                                {/* Step 1: Student */}
                                <div className="mb-16">
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="w-10 h-10 bg-saffron text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-saffron/20">1</div>
                                        <h3 className="font-display font-bold text-2xl text-charcoal">Student Information</h3>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="md:col-span-2">
                                            <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2 font-sans">Full Legal Name</label>
                                            <div className="group relative">
                                                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20 group-focus-within:text-saffron transition-colors" />
                                                <input 
                                                    type="text" 
                                                    value={data.student_name} 
                                                    onChange={e => setData('student_name', e.target.value)}
                                                    placeholder="Student's name as per school records"
                                                    className="w-full pl-12 pr-4 py-4 bg-adminBg border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-saffron/20 focus:border-saffron transition-all font-sans"
                                                    required 
                                                />
                                            </div>
                                            <InputError message={errors.student_name} className="mt-1" />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2 font-sans">Contact Phone</label>
                                            <div className="group relative">
                                                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20 group-focus-within:text-saffron transition-colors" />
                                                <input 
                                                    type="tel" 
                                                    value={data.student_phone} 
                                                    onChange={e => setData('student_phone', e.target.value)}
                                                    className="w-full pl-12 pr-4 py-4 bg-adminBg border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-saffron/20 focus:border-saffron transition-all font-sans"
                                                    required 
                                                />
                                            </div>
                                            <InputError message={errors.student_phone} className="mt-1" />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2 font-sans">Email (Optional)</label>
                                            <input 
                                                type="email" 
                                                value={data.student_email} 
                                                onChange={e => setData('student_email', e.target.value)}
                                                className="w-full px-5 py-4 bg-adminBg border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-saffron/20 focus:border-saffron transition-all font-sans"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2 font-sans">School / Institution</label>
                                            <div className="group relative">
                                                <School size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20 group-focus-within:text-saffron transition-colors" />
                                                <input 
                                                    type="text" 
                                                    value={data.school_name} 
                                                    onChange={e => setData('school_name', e.target.value)}
                                                    className="w-full pl-12 pr-4 py-4 bg-adminBg border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-saffron/20 focus:border-saffron transition-all font-sans"
                                                    required 
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2 font-sans">Proposed Course</label>
                                            <div className="group relative">
                                                <BookOpen size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20 group-focus-within:text-saffron transition-colors" />
                                                <input 
                                                    type="text" 
                                                    value={data.course_name} 
                                                    onChange={e => setData('course_name', e.target.value)}
                                                    placeholder="e.g. 11th Standard"
                                                    className="w-full pl-12 pr-4 py-4 bg-adminBg border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-saffron/20 focus:border-saffron transition-all font-sans"
                                                    required 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2: Referrer */}
                                <div className="mb-12">
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="w-10 h-10 bg-forest text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-forest/20">2</div>
                                        <h3 className="font-display font-bold text-2xl text-charcoal">Principal / Referrer</h3>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2 font-sans">Your Name</label>
                                            <div className="group relative">
                                                <UserCheck size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20 group-focus-within:text-forest transition-colors" />
                                                <input 
                                                    type="text" 
                                                    value={data.referrer_name} 
                                                    onChange={e => setData('referrer_name', e.target.value)}
                                                    className="w-full pl-12 pr-4 py-4 bg-adminBg border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all font-sans"
                                                    required 
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2 font-sans">Official Phone</label>
                                            <input 
                                                type="tel" 
                                                value={data.referrer_phone} 
                                                onChange={e => setData('referrer_phone', e.target.value)}
                                                className="w-full px-5 py-4 bg-adminBg border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all font-sans"
                                                required 
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2 font-sans">Recommendation Notes</label>
                                            <textarea 
                                                value={data.referrer_remarks} 
                                                onChange={e => setData('referrer_remarks', e.target.value)}
                                                rows="4"
                                                placeholder="Please provide a brief justification for this student's eligibility..."
                                                className="w-full px-5 py-4 bg-adminBg border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all font-sans resize-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 flex flex-col items-center sm:items-start">
                                    <button 
                                        type="submit" 
                                        disabled={processing}
                                        className="group relative bg-charcoal text-white px-12 py-5 rounded-full font-sans font-bold text-lg hover:bg-forest transition-all overflow-hidden flex items-center gap-3 shadow-2xl disabled:opacity-50"
                                    >
                                        <span className="relative z-10">{processing ? 'Processing...' : 'Submit Application'}</span>
                                        <Send size={20} className={`relative z-10 transition-transform ${processing ? 'translate-x-10 opacity-0' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                                        <div className="absolute inset-0 bg-gradient-to-r from-forest to-forest/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </button>
                                    <p className="mt-6 text-[11px] text-charcoal/40 font-sans text-center sm:text-left max-w-sm">
                                        By submitting this form, you certify that the student mentioned above belongs to a financially weak background and possesses strong academic potential.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </PublicLayout>
    );
}
