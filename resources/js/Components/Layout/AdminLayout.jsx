import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { 
    LayoutDashboard, Users, School, Award, 
    Images, Newspaper, Mail, Settings, UserCog,
    Menu, Bell, LogOut, ChevronRight
} from 'lucide-react';
import Toast from '@/Components/Admin/Toast';

export default function AdminLayout({ title, children, breadcrumbs = [] }) {
    const { auth, unreadMessagesCount = 0 } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const NavItem = ({ href, icon: Icon, label, active, badge }) => (
        <Link 
            href={href}
            className={`flex items-center justify-between px-4 py-3 mb-1 rounded-sm transition-colors ${
                active 
                    ? 'bg-saffron/15 text-saffron border-l-4 border-saffron' 
                    : 'text-white/85 hover:bg-white/5 border-l-4 border-transparent'
            }`}
        >
            <div className="flex items-center gap-3">
                <Icon size={20} className={active ? 'text-saffron' : 'text-white/60'} />
                <span className="font-sans font-medium text-sm">{label}</span>
            </div>
            {badge > 0 && (
                <span className="bg-saffron text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {badge}
                </span>
            )}
        </Link>
    );

    const NavSection = ({ title, children }) => (
        <div className="mb-6">
            <h3 className="px-4 text-xs font-bold text-white/40 uppercase tracking-wider mb-2 font-sans">
                {title}
            </h3>
            {children}
        </div>
    );

    return (
        <div className="min-h-screen bg-adminBg text-charcoal flex">
            <Toast />
            
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-charcoal/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed lg:sticky top-0 left-0 h-screen w-[260px] bg-forest text-cream flex flex-col z-50 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                {/* Logo Area */}
                <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0">
                    <div className="font-display font-bold text-xl flex items-center gap-3 text-white">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1.5 shadow-sm overflow-hidden">
                            <img src="/images/logo.png" alt="Trust Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="hidden sm:inline-block">Admin Panel</span>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto py-6 px-3 custom-scrollbar">
                    <NavSection title="Dashboard">
                        <NavItem href={route('admin.dashboard')} icon={LayoutDashboard} label="Dashboard" active={route().current('admin.dashboard')} />
                    </NavSection>

                    <NavSection title="Scholarship">
                        <NavItem href={route('admin.recipients.index')} icon={Users} label="Recipients" active={route().current('admin.recipients.*')} />
                        <NavItem href={route('admin.schools.index')} icon={School} label="Schools" active={route().current('admin.schools.*')} />
                        <NavItem href={route('admin.applications.index')} icon={Mail} label="Applications" active={route().current('admin.applications.*')} />
                    </NavSection>

                    <NavSection title="Content">

                        <NavItem href={route('admin.news.index')} icon={Newspaper} label="News & Updates" active={route().current('admin.news.*')} />
                        <NavItem href={route('admin.messages.index')} icon={Mail} label="Messages" active={route().current('admin.messages.*')} badge={unreadMessagesCount} />
                    </NavSection>

                    <NavSection title="Settings">
                        <NavItem href={route('admin.settings.index')} icon={Settings} label="Site Settings" active={route().current('admin.settings.*')} />
                        {auth.user.is_admin && (
                            <NavItem href={route('admin.users.index')} icon={UserCog} label="Admin Users" active={route().current('admin.users.*')} />
                        )}
                    </NavSection>
                </div>

                {/* User Area */}
                <div className="p-4 border-t border-white/10 shrink-0">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center font-bold text-saffron border border-white/10">
                                {auth.user.name.charAt(0)}
                            </div>
                            <div className="overflow-hidden">
                                <div className="font-sans font-bold text-sm text-white truncate">{auth.user.name}</div>
                                <div className="font-sans text-xs text-white/50 truncate capitalize">{auth.user.role || 'Admin'}</div>
                            </div>
                        </div>
                        <Link href={route('logout')} method="post" as="button" className="p-2 text-white/50 hover:text-saffron transition-colors">
                            <LogOut size={18} />
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0">
                {/* Topbar */}
                <header className="h-16 bg-white border-b border-black/5 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        <button 
                            className="lg:hidden p-2 -ml-2 text-charcoal/60 hover:text-saffron"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                        
                        <div>
                            <h1 className="font-display font-bold text-xl text-charcoal leading-none mb-1">{title}</h1>
                            {breadcrumbs.length > 0 && (
                                <div className="flex items-center gap-2 text-xs font-sans text-charcoal/50">
                                    {breadcrumbs.map((crumb, idx) => (
                                        <React.Fragment key={idx}>
                                            {idx > 0 && <ChevronRight size={12} />}
                                            {crumb.href ? (
                                                <Link href={crumb.href} className="hover:text-saffron transition-colors">{crumb.label}</Link>
                                            ) : (
                                                <span className="text-charcoal/80">{crumb.label}</span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="#" className="relative p-2 text-charcoal/60 hover:text-saffron transition-colors">
                            <Bell size={20} />
                            {unreadMessagesCount > 0 && (
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rust rounded-full"></span>
                            )}
                        </Link>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-4 sm:p-8 flex-1">
                    {children}
                </div>
            </main>
        </div>
    );
}
