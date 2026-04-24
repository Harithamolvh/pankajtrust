import React, { useRef, useState, useEffect } from 'react';

// AnimatedCounter sub-component
function AnimatedCounter({ target, suffix = '' }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const start = performance.now();
    const numericTarget = typeof target === 'string' ? parseInt(target.replace(/[^0-9]/g, ''), 10) || 0 : target;

    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setCount(Math.round(eased * numericTarget));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatStrip({ stats }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative z-30 px-6 lg:px-16" style={{ marginTop: '-20px' }}>
      <div
        style={{
          background: 'rgba(253, 246, 236, 0.18)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          borderRadius: '16px',
          border: '1px solid rgba(232, 135, 42, 0.5)',
          boxShadow: `
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 rgba(255, 255, 255, 0.05),
            0 8px 32px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(232, 135, 42, 0.2)
          `,
          overflow: 'hidden',
          display: isMobile ? 'grid' : 'flex',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'none',
        }}
      >
        {[
          { value: stats.students,  label: 'Students Supported', sub: 'since 1999' },
          { value: stats.schools,   label: 'Partner Schools',    sub: 'across 2 districts' },
          { value: stats.years,     label: 'Years Active',       sub: 'of uninterrupted impact' },
          { value: stats.active || stats.districts || 2, label: 'Districts',          sub: 'Ernakulam & Idukki' },
        ].map((stat, i, arr) => {
          let borderRight = 'none';
          let borderBottom = 'none';
          
          if (isMobile) {
            if (i % 2 === 0) borderRight = '1px solid rgba(255, 255, 255, 0.15)';
            if (i < 2) borderBottom = '1px solid rgba(255, 255, 255, 0.15)';
          } else {
            if (i < arr.length - 1) borderRight = '1px solid rgba(255, 255, 255, 0.15)';
          }

          return (
            <div
              key={i}
              style={{
                flex: isMobile ? 'none' : 1,
                padding: '28px 24px',
                textAlign: 'center',
                borderRight,
                borderBottom,
                position: 'relative',
              }}
            >
              {/* Top accent line per stat */}
              <div style={{
                position: 'absolute', top: 0, left: '20%', right: '20%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #E8872A, transparent)',
                opacity: 1,
                borderRadius: '0 0 4px 4px',
              }} />

              {/* Value */}
              <p style={{
                fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
                fontSize: '42px',
                fontWeight: '600',
                fontStyle: 'italic',
                color: '#FFFFFF',
                textShadow: '0 0 20px rgba(232,135,42,0.8), 0 2px 4px rgba(0,0,0,0.5)',
                lineHeight: 1,
                marginBottom: '8px',
                letterSpacing: '-0.5px',
              }}>
                <AnimatedCounter target={stat.value} suffix={String(stat.value).includes('+') ? '+' : ''} />
              </p>

              {/* Label */}
              <p style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#1B4332',
                marginBottom: '4px',
              }}>
                {stat.label}
              </p>

              {/* Sub-label */}
              <p style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '11px',
                color: 'rgba(27, 67, 50, 0.8)',
              }}>
                {stat.sub}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
