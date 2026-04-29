import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * HeroSlider — Full-height auto-rotating image carousel.
 * Fills its parent container completely. Images are displayed
 * with object-cover to fill the space, creating an immersive look.
 *
 * @param {string[]} images - Array of image paths
 * @param {number}   interval - Auto-advance interval in ms (default 5000)
 * @param {boolean}  showDots - Show navigation dots
 */
export default function HeroSlider({ images = [], interval = 5000, showDots = true }) {
	const [current, setCurrent] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const touchStartX = useRef(0);
	const touchEndX = useRef(0);

	/** Advance to next slide */
	const next = useCallback(() => {
		setCurrent((prev) => (prev + 1) % images.length);
	}, [images.length]);

	/** Go to previous slide */
	const prev = useCallback(() => {
		setCurrent((prev) => (prev - 1 + images.length) % images.length);
	}, [images.length]);

	/** Auto-advance timer */
	useEffect(() => {
		if (isPaused || images.length <= 1) return;
		const timer = setInterval(next, interval);
		return () => clearInterval(timer);
	}, [isPaused, next, interval, images.length]);

	/** Touch/swipe handlers */
	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = (e) => {
		touchEndX.current = e.changedTouches[0].clientX;
		const diff = touchStartX.current - touchEndX.current;
		if (Math.abs(diff) > 50) {
			diff > 0 ? next() : prev();
		}
	};

	if (!images.length) return null;

	return (
		<div
			className="relative w-full h-full"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			{/* Full-size image viewport */}
			<div className="relative w-full h-full overflow-hidden flex items-center justify-center">
				<AnimatePresence mode="wait">
					<motion.img
						key={current}
						src={images[current]}
						alt={`Trust event photo ${current + 1}`}
						initial={{ opacity: 0, scale: 1.05 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 1.05 }}
						transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
						className="absolute inset-0 w-full h-full object-cover"
						draggable={false}
					/>
				</AnimatePresence>
			</div>

			{/* Navigation dots — positioned at bottom center */}
			{showDots && images.length > 1 && (
				<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
					{images.map((_, i) => (
						<button
							key={i}
							onClick={() => setCurrent(i)}
							aria-label={`Go to slide ${i + 1}`}
							className={`transition-all duration-300 rounded-full ${i === current
									? 'w-8 h-2.5 bg-saffron shadow-glow-saffron'
									: 'w-2.5 h-2.5 bg-white/60 hover:bg-white/80'
								}`}
						/>
					))}
				</div>
			)}
		</div>
	);
}
