import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function NewsCard({ post }) {
    return (
        <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-cream rounded shadow-sm border border-saffron/10 overflow-hidden group hover:shadow-lg transition-all flex flex-col h-full"
        >
            {post.cover_image ? (
                <div className="h-48 w-full relative overflow-hidden">
                    <img 
                        src={post.cover_image} 
                        alt={post.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            ) : (
                <div className="h-48 w-full bg-mist relative overflow-hidden flex items-center justify-center">
                    <span className="font-display text-2xl text-charcoal/10">News</span>
                </div>
            )}
            
            <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center space-x-2 text-saffron mb-3">
                    <Calendar size={14} />
                    <span className="font-sans text-xs font-medium uppercase tracking-wider">
                        {new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                </div>
                
                <h3 className="font-display font-bold text-xl text-forest mb-3 line-clamp-2">
                    <Link href={route('news.show', post.slug)} className="hover:text-saffron transition-colors">
                        {post.title}
                    </Link>
                </h3>
                
                <p className="font-body text-sm text-charcoal/70 mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-mist/20">
                    <Link 
                        href={route('news.show', post.slug)} 
                        className="font-sans text-sm font-bold text-saffron hover:text-forest transition-colors uppercase tracking-widest flex items-center group-hover:gap-2"
                    >
                        Read More <span className="transition-all opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 group-hover:pl-1">→</span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
