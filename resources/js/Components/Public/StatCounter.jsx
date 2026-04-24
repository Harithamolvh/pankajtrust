import React, { useRef } from 'react';
import { useCountUp } from '../../Hooks/useCountUp';
import { useInView } from 'framer-motion';

export default function StatCounter({ label, value, suffix = '', prefix = '' }) {
    const ref = useRef(null);
    const isVisible = useInView(ref, { once: true, margin: '-50px' });
    const count = useCountUp(value, 2500, isVisible);

    return (
        <div ref={ref} className="text-center p-6">
            <div className="font-stats font-bold text-5xl md:text-6xl text-gold mb-2 drop-shadow-sm">
                {prefix}{count}{suffix}
            </div>
            <div className="font-sans font-semibold text-sm uppercase tracking-widest text-mist">
                {label}
            </div>
        </div>
    );
}
