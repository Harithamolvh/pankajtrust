import React from 'react';
import { motion } from 'framer-motion';

export default function RecipientCard({ recipient }) {
    const photoUrl = recipient.photo || "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&q=80&w=600";
    
    return (
        <div className="group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-shadow h-80">
            {/* Photo */}
            <img 
                src={photoUrl} 
                alt={recipient.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />

            {/* Base Info Gradient (always visible for legibility of names) */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent pointer-events-none"></div>

            {/* Always visible minimal info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-20">
                <h3 className="font-display font-bold text-2xl text-white mb-1 drop-shadow-md">{recipient.name}</h3>
                <p className="font-sans text-xs text-gold font-bold uppercase tracking-widest drop-shadow">
                    {recipient.school?.name || 'Partner School'}
                </p>
            </div>

            {/* Extra Info overlay — slides up from bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-charcoal/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-6 pt-4 border-t-2 border-saffron">
                <p className="font-sans text-sm text-cream font-medium mb-1">{recipient.course}</p>
                <p className="font-body text-sm text-mist/70">{recipient.college}</p>
            </div>

            {/* Year badge */}
            <span className="absolute top-4 right-4 bg-saffron text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                {recipient.year}
            </span>
        </div>
    );
}
