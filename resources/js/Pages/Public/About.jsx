import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import PublicLayout from '@/Components/Layout/PublicLayout';

export default function About() {
    const { settings } = usePage().props;

    return (
        <PublicLayout title="About the Trust">
            {/* Page Header */}
            <div className="bg-forest text-cream pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="font-display font-black text-5xl md:text-6xl mb-4">About the Trust</h1>
                    <p className="font-body text-xl text-cream/80 max-w-2xl">
                        A legacy of turning potential into possibility since 1999.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Left Column - Trust Story */}
                    <div className="lg:col-span-7">
                        <div className="prose prose-lg prose-headings:font-display prose-headings:text-forest prose-p:font-body prose-p:text-charcoal/80 prose-a:text-saffron max-w-none">
                            <h2 className="text-3xl font-bold mb-6">Our Founding Story</h2>
                            <p>
                                The Dr. Pankaj Educational and Charitable Trust was established in <strong>{settings.trust_established || 'April 1999'}</strong> under the Charitable Trust Act of Kerala. It was formally inaugurated in <strong>{settings.trust_inaugurated || 'August 1999 at Maharaja\'s College, Ernakulam'}</strong>.
                            </p>
                            <p>
                                The Trust was born from the personal journey of its founder, {settings.founder_name || 'Dr. Thampil Pankaj'}. Having grown up experiencing the challenges of poverty in Maradu village, he carried a lifelong vision: to ensure that financial hardship would not be a barrier to higher education for bright, talented students.
                            </p>
                            
                            <h3 className="text-2xl font-bold mt-12 mb-4">The Scholarship Fund</h3>
                            <p>
                                The initial corpus fund of ₹15 lakhs, provided entirely by the founder from his personal savings in 1999, has since expanded to <strong>{settings.corpus_amount || '₹32 lakhs'}</strong>. 
                            </p>
                            <p>
                                Currently, the Trust provides annual scholarships totaling <strong>{settings.annual_expenditure || '₹4 lakhs+'}</strong>. Approximately 70% of this amount is generated from the interest earned on the endowment corpus, while the remaining 30% is generously contributed by family members and close friends who have joined the cause since 2008.
                            </p>

                            <h3 className="text-2xl font-bold mt-12 mb-4">Our Mission</h3>
                            <div className="bg-mist p-6 rounded-sm border-l-4 border-saffron my-6">
                                <p className="font-body italic text-xl text-forest m-0 leading-relaxed">
                                    "To provide merit-cum-means scholarships to academically talented students from economically disadvantaged backgrounds, without discrimination on the basis of religion or caste, with a focused outreach to government and aided schools in Ernakulam and Idukki districts."
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold mt-12 mb-4">Legal & Tax Information</h3>
                            <ul className="space-y-2">
                                <li><strong>Registration:</strong> Charitable Trust Act of Kerala</li>
                                <li><strong>Tax Exemption:</strong> Donations are eligible under Section 80G of the Income Tax Act, 1961.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Founder Profile */}
                    <div className="lg:col-span-5">
                        <div className="bg-cream rounded-sm shadow-xl border-t-4 border-gold sticky top-28">
                            <div className="bg-forest pt-12 pb-6 px-6 text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
                                <div className="w-72 h-auto mx-auto relative z-10 mb-4">
                                    <svg viewBox="0 0 400 500" className="w-full h-auto drop-shadow-xl">
                                        <defs>
                                            <clipPath id="about-founder-clip">
                                                <ellipse cx="200" cy="230" rx="165" ry="200"/>
                                            </clipPath>
                                        </defs>
                                        <ellipse cx="200" cy="230" rx="175" ry="210" fill="none" stroke="#E8872A" strokeWidth="3" opacity="0.6"/>
                                        <ellipse cx="200" cy="230" rx="185" ry="220" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.3"/>
                                        <image href="/images/dr-pankaj.jpg" x="35" y="30" width="330" height="400" clipPath="url(#about-founder-clip)" preserveAspectRatio="xMidYMid slice" onError={(e) => { e.target.href.baseVal = "https://images.unsplash.com/photo-1507676184212-d0c30a47bfb0?auto=format&fit=crop&q=80&w=800"; }}/>
                                        <ellipse cx="200" cy="440" rx="130" ry="20" fill="#E8872A" opacity="0.15"/>
                                    </svg>
                                </div>
                                <h2 className="font-display font-bold text-3xl text-cream mb-1 relative z-10">{settings.founder_name}</h2>
                                <p className="font-sans text-gold font-bold text-xs uppercase tracking-widest relative z-10">Founder & Managing Trustee</p>
                            </div>
                            
                            <div className="p-8">
                                <p className="font-body text-charcoal/80 mb-8 leading-relaxed">
                                    {settings.founder_short_bio}
                                </p>

                                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-saffron/20 before:to-transparent">
                                    
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-saffron text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 pr-0 md:group-odd:pl-4 md:group-even:pr-4">
                                            <div className="font-sans font-bold text-forest text-sm mb-1">Early Life</div>
                                            <div className="font-body text-sm text-charcoal/70">Born in Maradu village, Kochi. Son of Shri S. Sankara Panicker & K. Kunji Amma. Educated at Mangayil High School.</div>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-gold text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 pr-0 md:group-odd:pl-4 md:group-even:pr-4">
                                            <div className="font-sans font-bold text-forest text-sm mb-1">1953–1964</div>
                                            <div className="font-body text-sm text-charcoal/70">Maharaja's College, Ernakulam. Gokhale Institute of Politics & Economics, Pune. PhD in Economics from University of Pune.</div>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-sage text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 pr-0 md:group-odd:pl-4 md:group-even:pr-4">
                                            <div className="font-sans font-bold text-forest text-sm mb-1">1972–1999</div>
                                            <div className="font-body text-sm text-charcoal/70">UN/UNCTAD Geneva (1972-74). World Bank, Washington DC for 25 years. Led projects across 15 countries.</div>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-saffron text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 pr-0 md:group-odd:pl-4 md:group-even:pr-4">
                                            <div className="font-sans font-bold text-forest text-sm mb-1">1999–Present</div>
                                            <div className="font-body text-sm text-charcoal/70">Retired as Principal Economist. Established Pankaj Trust. Currently resides in Kerala.</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </PublicLayout>
    );
}
