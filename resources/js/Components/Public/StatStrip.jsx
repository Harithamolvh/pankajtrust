import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, School, Calendar, MapPin } from 'lucide-react';

// Simplified CountUp component
function CountUp({ end, duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatStrip({ stats }) {
  const statItems = [
    { 
        label: 'Students Supported', 
        value: stats.students || stats.totalRecipients || 0, 
        icon: <GraduationCap className="w-6 h-6 text-saffron" />, 
        subtext: 'Empowering bright minds' 
    },
    { 
        label: 'Partner Schools', 
        value: stats.schools || stats.totalSchools || 0, 
        icon: <School className="w-6 h-6 text-gold" />, 
        subtext: 'Local impact network' 
    },
    { 
        label: 'Years Active', 
        value: stats.years || 27, 
        icon: <Calendar className="w-6 h-6 text-sage" />, 
        subtext: 'Uninterrupted service' 
    },
    { 
        label: 'Districts Covered', 
        value: stats.active || 2, 
        icon: <MapPin className="w-6 h-6 text-charcoal" />, 
        subtext: 'Ernakulam & Idukki' 
    },
  ];

  return (
    <div className="relative z-50 -mt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statItems.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-44 rounded-[2rem] overflow-hidden bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-saffron/10 transition-all duration-500"
          >
            {/* Accent Corner Glow */}
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-saffron/5 rounded-full blur-2xl group-hover:bg-saffron/10 transition-colors" />
            
            <div className="p-8 h-full flex flex-col justify-between relative z-10">
              <div className="flex justify-between items-start">
                <div className="p-3.5 rounded-2xl bg-mist border border-charcoal/5 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-inner">
                  {stat.icon}
                </div>
                <div className="text-right">
                  <span className="font-display font-bold text-5xl text-charcoal group-hover:text-saffron transition-colors block leading-none">
                    <CountUp end={stat.value} />
                  </span>
                </div>
              </div>
              
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-1">{stat.label}</h4>
                <p className="font-body text-[10px] text-charcoal/40 italic">{stat.subtext}</p>
              </div>
            </div>
            
            {/* Bottom Progress Accent */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-saffron/30 group-hover:w-full transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
