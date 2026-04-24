import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedHeadline({ text }) {
    const words = text.split(' ');
    
    return (
        <h1 className="font-display font-black text-5xl md:text-7xl text-cream mb-6 leading-tight drop-shadow-md">
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    className="inline-block mr-3"
                    initial={{ opacity: 0, y: 60, rotateX: -30 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: 'backOut' }}
                >
                    {word}
                </motion.span>
            ))}
        </h1>
    );
}
