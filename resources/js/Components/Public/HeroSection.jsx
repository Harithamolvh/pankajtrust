import React, { useEffect, useRef } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import HeroParticles from '@/Components/Effects/HeroParticles';
import AnimatedHeadline from '@/Components/Effects/AnimatedHeadline';
import HeroSlider from '@/Components/Public/HeroSlider';

/**
 * HeroSection — Full-screen split layout hero.
 * Left side: text content + CTAs (takes remaining space).
 * Right side: slider fills full viewport height, edge-to-edge.
 */
export default function HeroSection() {
	const { settings } = usePage().props;
	const heroRef = useRef(null);

	/** Slider images from the public directory */
	const sliderImages = [
		'/images/sliders/1.jpg',
		'/images/sliders/2.jpg',
	];

	/** Parallax scroll handler for layered depth effect */
	useEffect(() => {
		const handleScroll = () => {
			if (!heroRef.current) return;
			const scrollY = window.scrollY;

			// Layer 1: particles — slow
			const canvas = heroRef.current.querySelector('canvas');
			if (canvas) canvas.style.transform = `translateY(${scrollY * 0.25}px)`;

			// Layer 2: content — fades out on scroll
			const heroText = heroRef.current.querySelector('.hero-text');
			if (heroText) {
				heroText.style.transform = `translateY(${scrollY * 0.1}px)`;
				heroText.style.opacity = Math.max(1 - scrollY / 600, 0);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section ref={heroRef} className="relative w-full overflow-hidden bg-white" style={{ height: '100vh' }}>
			{/* Subtle warm tint in the background (left side only) */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-br from-white via-cream/30 to-leafLight/20" />
				{/* Decorative gradient blobs */}
				<div
					className="absolute top-0 left-0 w-[50%] h-[60%] opacity-[0.07]"
					style={{
						background: 'radial-gradient(ellipse at 30% 30%, rgba(76,175,80,0.8) 0%, transparent 60%)',
					}}
				/>
				<div
					className="absolute bottom-0 left-[20%] w-[30%] h-[50%] opacity-[0.06]"
					style={{
						background: 'radial-gradient(ellipse at 50% 70%, rgba(232,135,42,0.6) 0%, transparent 60%)',
					}}
				/>
			</div>

			{/* Sparkle particles — saffron/orange (left side only) */}
			<HeroParticles />

			{/* ===== SPLIT LAYOUT — starts below navbar ===== */}
			<div className="relative z-20 flex flex-col lg:flex-row pt-20" style={{ height: '100vh' }}>

				{/* LEFT — Text Content (vertically centered, padded) */}
				<div className="lg:w-[45%] xl:w-[40%] flex items-center hero-text order-2 lg:order-1">
					<div className="px-6 sm:px-10 lg:px-12 xl:px-16 py-8 lg:py-0 w-full text-center lg:text-left">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="inline-block mb-6"
						>
							<span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-leafDark bg-leafLight border border-leaf/30 px-4 py-2 rounded-full">
								Since {settings.trust_established || '1999'} • Ernakulam & Idukki
							</span>
						</motion.div>

						<AnimatedHeadline text={settings.hero_headline || "Turning Potential Into Possibility"} />

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
							className="font-body text-base md:text-lg lg:text-xl text-charcoal/70 mb-8 lg:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
						>
							{settings.hero_subtext || "Empowering bright, financially disadvantaged students in Kerala to achieve university education since 1999."}
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
							className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
						>
							<Link
								href={route('donate')}
								className="bg-saffron text-white text-center px-6 py-3 sm:px-8 sm:py-4 rounded-full font-sans font-semibold text-base sm:text-lg hover:bg-rust transition-all duration-300 shadow-lg shadow-saffron/25 hover:shadow-xl hover:shadow-saffron/30 hover:-translate-y-0.5"
							>
								{settings.hero_cta_secondary || "Support a Student"}
							</Link>
							<Link
								href={route('scholarships')}
								className="bg-leafDark text-white text-center px-6 py-3 sm:px-8 sm:py-4 rounded-full font-sans font-semibold text-base sm:text-lg hover:bg-leaf transition-all duration-300 border border-leaf/30"
							>
								{settings.hero_cta_primary || "Explore Scholarships"}
							</Link>
						</motion.div>
					</div>
				</div>

				{/* RIGHT — Full-height Slider */}
				<motion.div
					className="lg:w-[55%] xl:w-[60%] h-[50vh] lg:h-full order-1 lg:order-2"
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
				>
					<HeroSlider images={sliderImages} interval={5000} />
				</motion.div>

			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 1 }}
				className="absolute bottom-4 left-[22%] lg:left-[20%] -translate-x-1/2 z-30 animate-float-up"
				aria-hidden="true"
			>
				<ChevronDown size={28} className="text-charcoal/30" />
			</motion.div>
		</section>
	);
}
