import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import { Users, GraduationCap, Building2, MessageSquare, ArrowRight, TrendingUp, Bell, ChevronRight, PlusCircle, PenTool } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Badge from '@/Components/Admin/Badge';
import { motion } from 'framer-motion';

export default function Dashboard({ stats, charts, recent_activity }) {
    const { total_recipients, active_scholars, partner_schools, unread_messages } = stats;
    const { recipients_by_year, status_breakdown } = charts;
    const { messages, recipients } = recent_activity;
    const { auth } = usePage().props;

    const PIE_COLORS = {
        'active': '#1B4332',
        'completed': '#E8872A',
        'withdrawn': '#8B7355',
        'draft': '#9CA3AF'
    };

    // Animation variants for bento items
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <AdminLayout title="Dashboard" breadcrumbs={[{ label: 'Dashboard' }]}>
            <Head title="Dashboard | Admin Panel" />
            
            <motion.div 
                initial="hidden" 
                animate="visible" 
                transition={{ staggerChildren: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto"
            >
                {/* 1. Greeting Banner (Bento 8 cols) */}
                <motion.div variants={itemVariants} className="md:col-span-8 bg-forest rounded-2xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-center text-cream shadow-xl border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest to-charcoal"></div>
                    <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-2 h-2 rounded-full bg-saffron animate-pulse"></span>
                            <span className="font-sans font-bold text-xs uppercase tracking-widest text-saffron">Admin Portal Active</span>
                        </div>
                        <h1 className="font-display font-black text-4xl md:text-5xl mb-4 text-white">
                            Welcome back, {auth.user.name.split(' ')[0]}
                        </h1>
                        <p className="font-body text-lg text-cream/80 max-w-xl leading-relaxed">
                            Here's what's happening at the Pankaj Trust today. You have <strong className="text-saffron font-semibold">{unread_messages} unread messages</strong> and <strong className="text-saffron font-semibold">{active_scholars} active scholars</strong> currently being supported.
                        </p>
                    </div>
                    
                    {/* Decorative Background Elements */}
                    <svg className="absolute -right-20 -bottom-20 w-96 h-96 opacity-10 pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#E8872A" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.1,-46.3C90.4,-33.5,96,-18.1,95.5,-2.9C95,12.3,88.4,27.3,78.8,40.1C69.2,52.9,56.6,63.5,42.5,70.5C28.4,77.5,12.8,80.9,-2.4,84.2C-17.6,87.5,-32.4,90.7,-45.3,85.2C-58.2,79.7,-69.2,65.5,-78.2,50.7C-87.2,35.9,-94.2,20.5,-94.1,5.1C-94,-10.3,-86.8,-25.6,-77.8,-39.6C-68.8,-53.6,-58,-66.3,-44.6,-74.3C-31.2,-82.3,-15.6,-85.6,-0.1,-85.4C15.4,-85.2,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                </motion.div>

                {/* 2. Quick Actions (Bento 4 cols) */}
                <motion.div variants={itemVariants} className="md:col-span-4 bg-white rounded-2xl p-6 shadow-sm border border-black/5 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-saffron to-gold"></div>
                    <h3 className="font-display font-bold text-xl text-charcoal mb-6">Quick Actions</h3>
                    <div className="grid grid-cols-1 gap-3 flex-1">
                        <Link href={route('admin.recipients.create')} className="flex items-center justify-between p-4 rounded-xl bg-adminBg hover:bg-mist hover:text-forest transition-colors group">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-forest shadow-sm group-hover:scale-110 transition-transform">
                                    <PlusCircle size={16} />
                                </div>
                                <span className="font-sans font-bold text-sm text-charcoal">Add New Scholar</span>
                            </div>
                            <ChevronRight size={16} className="text-charcoal/30 group-hover:text-saffron transition-colors" />
                        </Link>
                        <Link href={route('admin.news.create')} className="flex items-center justify-between p-4 rounded-xl bg-adminBg hover:bg-mist hover:text-forest transition-colors group">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-forest shadow-sm group-hover:scale-110 transition-transform">
                                    <PenTool size={16} />
                                </div>
                                <span className="font-sans font-bold text-sm text-charcoal">Publish News Update</span>
                            </div>
                            <ChevronRight size={16} className="text-charcoal/30 group-hover:text-saffron transition-colors" />
                        </Link>
                    </div>
                </motion.div>

                {/* 3. Stat Cards Row (4 cards x 3 cols = 12) */}
                {[
                    { label: 'Total Recipients', value: total_recipients, icon: Users, link: route('admin.recipients.index'), color: 'text-forest', bg: 'bg-forest/5' },
                    { label: 'Active Scholars', value: active_scholars, icon: GraduationCap, link: route('admin.recipients.index'), color: 'text-saffron', bg: 'bg-saffron/10' },
                    { label: 'Partner Schools', value: partner_schools, icon: Building2, link: route('admin.schools.index'), color: 'text-gold', bg: 'bg-gold/10' },
                    { label: 'Unread Messages', value: unread_messages, icon: MessageSquare, link: route('admin.messages.index'), color: 'text-rust', bg: 'bg-rust/10', alert: unread_messages > 0 }
                ].map((stat, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="md:col-span-3">
                        <Link href={stat.link} className="block h-full bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:border-saffron/40 hover:shadow-md transition-all group relative overflow-hidden">
                            <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${stat.bg} opacity-50 group-hover:scale-150 transition-transform duration-500`}></div>
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color} group-hover:-translate-y-1 transition-transform`}>
                                    <stat.icon size={24} />
                                </div>
                                {stat.alert && (
                                    <span className="flex h-3 w-3 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rust opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-rust"></span>
                                    </span>
                                )}
                            </div>
                            <div className="relative z-10">
                                <div className="font-stats font-bold text-5xl text-charcoal mb-1 tracking-tight">{stat.value}</div>
                                <div className="font-sans font-bold text-xs text-charcoal/50 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        </Link>
                    </motion.div>
                ))}

                {/* 4. Chart: Bar Chart (8 cols) */}
                <motion.div variants={itemVariants} className="md:col-span-8 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black/5">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="font-display font-bold text-2xl text-charcoal">Scholars Over Time</h3>
                            <p className="font-sans text-sm text-charcoal/60 mt-1">Number of recipients awarded scholarships per year.</p>
                        </div>
                        <div className="p-2 bg-mist rounded-lg text-saffron">
                            <TrendingUp size={20} />
                        </div>
                    </div>
                    <div className="h-[280px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={recipients_by_year} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280', fontFamily: 'DM Sans' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280', fontFamily: 'DM Sans' }} />
                                <RechartsTooltip 
                                    cursor={{ fill: '#FDF6EC', opacity: 0.5 }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)', padding: '12px 16px', fontFamily: 'DM Sans', fontWeight: 700 }}
                                />
                                <Bar dataKey="total" fill="#E8872A" radius={[6, 6, 0, 0]} activeBar={{ fill: '#1B4332' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* 5. Chart: Donut (4 cols) */}
                <motion.div variants={itemVariants} className="md:col-span-4 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black/5 flex flex-col">
                    <h3 className="font-display font-bold text-2xl text-charcoal mb-6">Status Overview</h3>
                    <div className="flex-1 min-h-[220px] relative flex justify-center items-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={status_breakdown}
                                    innerRadius={70}
                                    outerRadius={100}
                                    paddingAngle={4}
                                    dataKey="total"
                                    nameKey="status"
                                    stroke="none"
                                >
                                    {status_breakdown.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={PIE_COLORS[entry.status.toLowerCase()] || '#D1D5DB'} />
                                    ))}
                                </Pie>
                                <RechartsTooltip 
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', fontFamily: 'DM Sans', fontWeight: 700, textTransform: 'capitalize' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="font-stats font-bold text-5xl text-forest italic leading-none">{total_recipients}</span>
                            <span className="font-sans text-[10px] text-charcoal/50 uppercase tracking-widest mt-1">Total</span>
                        </div>
                    </div>
                    {/* Custom Legend */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        {status_breakdown.map((entry, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-adminBg px-3 py-2 rounded-lg">
                                <div className="w-3 h-3 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: PIE_COLORS[entry.status.toLowerCase()] || '#D1D5DB' }}></div>
                                <span className="font-sans font-bold text-xs text-charcoal/70 capitalize truncate">{entry.status}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 6. Recent Messages (6 cols) */}
                <motion.div variants={itemVariants} className="md:col-span-6 bg-white rounded-2xl shadow-sm border border-black/5 flex flex-col overflow-hidden">
                    <div className="p-6 border-b border-black/5 flex justify-between items-center bg-mist/30">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white rounded-lg shadow-sm text-forest"><Bell size={18} /></div>
                            <h3 className="font-display font-bold text-xl text-charcoal">Inbox Activity</h3>
                        </div>
                        <Link href={route('admin.messages.index')} className="text-saffron hover:text-forest transition-colors font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                            View All <ArrowRight size={14} />
                        </Link>
                    </div>
                    <div className="divide-y divide-black/5 flex-1 p-2">
                        {messages.length === 0 ? (
                            <div className="p-8 text-center text-charcoal/50 font-sans text-sm">No recent messages.</div>
                        ) : (
                            messages.map(msg => (
                                <Link key={msg.id} href={route('admin.messages.index')} className="block p-4 rounded-xl hover:bg-mist transition-colors group">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            {!msg.read_at && <span className="w-2 h-2 rounded-full bg-rust shrink-0 shadow-sm shadow-rust/30"></span>}
                                            <span className={`font-sans text-sm ${!msg.read_at ? 'font-bold text-charcoal' : 'font-medium text-charcoal/80'}`}>{msg.name}</span>
                                        </div>
                                        <span className="font-sans text-xs font-medium text-charcoal/40 bg-white px-2 py-1 rounded-md border border-black/5 group-hover:border-black/10 transition-colors whitespace-nowrap">{msg.created_at_human}</span>
                                    </div>
                                    <p className={`font-sans text-sm truncate pl-4 ${!msg.read_at ? 'text-charcoal/90' : 'text-charcoal/50'}`}>{msg.subject}</p>
                                </Link>
                            ))
                        )}
                    </div>
                </motion.div>

                {/* 7. Recent Recipients (6 cols) */}
                <motion.div variants={itemVariants} className="md:col-span-6 bg-white rounded-2xl shadow-sm border border-black/5 flex flex-col overflow-hidden">
                    <div className="p-6 border-b border-black/5 flex justify-between items-center bg-mist/30">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white rounded-lg shadow-sm text-forest"><GraduationCap size={18} /></div>
                            <h3 className="font-display font-bold text-xl text-charcoal">Latest Scholars</h3>
                        </div>
                        <Link href={route('admin.recipients.index')} className="text-saffron hover:text-forest transition-colors font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                            Manage All <ArrowRight size={14} />
                        </Link>
                    </div>
                    <div className="divide-y divide-black/5 flex-1 p-2">
                        {recipients.length === 0 ? (
                            <div className="p-8 text-center text-charcoal/50 font-sans text-sm">No recipients found.</div>
                        ) : (
                            recipients.map(rec => (
                                <div key={rec.id} className="p-4 rounded-xl hover:bg-mist transition-colors flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center text-forest font-display font-bold text-lg group-hover:bg-forest group-hover:text-white transition-colors">
                                            {rec.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-sans font-bold text-sm text-charcoal mb-0.5 group-hover:text-forest transition-colors">{rec.name}</div>
                                            <div className="font-sans text-xs text-charcoal/60 flex items-center gap-2">
                                                <span>{rec.year}</span>
                                                <span className="w-1 h-1 rounded-full bg-black/20"></span>
                                                <span className="truncate max-w-[150px] sm:max-w-[200px]">{rec.school?.name || 'Unknown School'}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Badge status={rec.status}>{rec.status}</Badge>
                                </div>
                            ))
                        )}
                    </div>
                </motion.div>
                
            </motion.div>
        </AdminLayout>
    );
}

