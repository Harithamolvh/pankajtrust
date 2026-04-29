import React from 'react';
import { motion } from 'framer-motion';

export default function RecipientCard({ recipient, featured = false }) {
    const photoUrl = recipient.photo || "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&q=80&w=800";
    
    return (
        <div className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${featured ? 'h-full' : 'h-[380px]'}`}>
            {/* Photo with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-80 z-10 group-hover:opacity-95 transition-opacity duration-500" />
                <img 
                    src={photoUrl} 
                    alt={recipient.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="overflow-hidden mb-2">
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="font-sans text-xs text-saffron font-bold uppercase tracking-[0.2em]"
                    >
                        {recipient.school?.name || 'Partner School'}
                    </motion.p>
                </div>
                
                <h3 className={`${featured ? 'text-4xl md:text-5xl' : 'text-2xl'} font-display font-bold text-white mb-4 transition-all duration-500 group-hover:text-saffron`}>
                    {recipient.name}
                </h3>

                <div className="max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="font-sans text-sm text-cream/90 font-medium mb-1 uppercase tracking-wider">{recipient.course}</p>
                    <p className="font-body text-sm text-mist/60 leading-relaxed line-clamp-2 italic">{recipient.college}</p>
                </div>
            </div>

            {/* Year Badge */}
            <div className="absolute top-6 left-6 z-30">
                <span className="bg-charcoal/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-4 py-2 rounded-full">
                    Class of {recipient.year}
                </span>
            </div>

            {/* Hover Glow Border */}
            <div className="absolute inset-0 border-2 border-saffron/0 group-hover:border-saffron/30 rounded-2xl transition-all duration-500 z-40 pointer-events-none" />
        </div>
    );
}
