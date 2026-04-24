import { useState, useEffect } from 'react';

export function useCountUp(end, duration = 2000, isInView = true) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let animationFrame;
        const start = performance.now();
        const numericEnd = typeof end === 'string' ? parseInt(end.replace(/[^0-9]/g, ''), 10) || 0 : end;
        
        if (numericEnd === 0) return;

        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numericEnd));
            
            if (progress < 1) {
                animationFrame = window.requestAnimationFrame(step);
            } else {
                setCount(numericEnd);
            }
        };

        animationFrame = window.requestAnimationFrame(step);

        return () => {
            if (animationFrame) {
                window.cancelAnimationFrame(animationFrame);
            }
        };
    }, [isInView, end, duration]);

    return count;
}
