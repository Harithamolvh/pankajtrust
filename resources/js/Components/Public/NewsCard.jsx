import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

export default function NewsCard({ post }) {
    return (
        <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-charcoal/5"
        >
            <div className="h-64 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent z-10" />
                {post.cover_url || post.cover_image ? (
                    <img 
                        src={post.cover_url || post.cover_image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full bg-mist flex items-center justify-center">
                        <span className="font-display text-2xl text-charcoal/10 uppercase tracking-widest">News</span>
                    </div>
                )}
                {/* Date Badge */}
                <div className="absolute top-6 left-6 z-20">
                    <div className="glass-card-light px-4 py-2 rounded-lg flex flex-col items-center">
                        <span className="font-display font-bold text-lg leading-none text-charcoal">
                            {new Date(post.published_at).getDate()}
                        </span>
                        <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-saffron">
                            {new Date(post.published_at).toLocaleDateString('en-US', { month: 'short' })}
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col relative">
                <h3 className="font-display font-bold text-2xl text-charcoal mb-4 line-clamp-2 group-hover:text-saffron transition-colors duration-300">
                    <Link href={route('news.show', post.slug)}>
                        {post.title}
                    </Link>
                </h3>
                
                <p className="font-body text-base text-charcoal/60 mb-8 line-clamp-3 flex-grow leading-relaxed">
                    {post.excerpt}
                </p>
                
                <Link 
                    href={route('news.show', post.slug)} 
                    className="inline-flex items-center gap-2 font-sans text-xs font-bold text-saffron uppercase tracking-[0.2em] group/btn"
                >
                    Read Full Story 
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
                
                {/* Decorative element */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-saffron/5 rounded-full -z-10 group-hover:scale-150 transition-transform duration-500" />
            </div>
        </motion.div>
    );
}
