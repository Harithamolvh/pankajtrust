import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Components/Layout/PublicLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);

    // Group images by category
    const categories = ['All', ...new Set(images.map(img => img.category).filter(Boolean))];
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredImages = activeCategory === 'All' 
        ? images 
        : images.filter(img => img.category === activeCategory);

    return (
        <PublicLayout title="Photo Gallery">
            {/* Page Header */}
            <div className="bg-forest text-cream py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="font-display font-black text-4xl md:text-5xl mb-4">Photo Gallery</h1>
                    <p className="font-body text-xl text-cream/80 max-w-2xl mx-auto">
                        Visual stories of our impact, events, and the scholars we support.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* Filters */}
                {categories.length > 1 && (
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full font-sans font-bold text-sm transition-all ${
                                    activeCategory === category 
                                        ? 'bg-saffron text-white shadow-md' 
                                        : 'bg-cream border border-mist text-charcoal hover:border-saffron hover:text-saffron'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <AnimatePresence>
                        {filteredImages.map((image) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={image.id}
                                className="group relative aspect-square bg-mist rounded overflow-hidden cursor-pointer"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img 
                                    src={image.url || 'https://via.placeholder.com/600'} 
                                    alt={image.title || 'Gallery Image'} 
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                    <h3 className="font-sans font-bold text-cream text-lg leading-tight mb-1">{image.title}</h3>
                                    {image.category && (
                                        <span className="text-saffron text-xs font-bold uppercase tracking-wider">{image.category}</span>
                                    )}
                                    <div className="absolute top-4 right-4 bg-black/40 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 delay-100">
                                        <ZoomIn className="text-white w-5 h-5" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {images.length === 0 && (
                    <div className="text-center py-24 bg-mist rounded border border-charcoal/5">
                        <div className="text-4xl mb-4">📸</div>
                        <h3 className="font-display font-bold text-2xl text-charcoal mb-2">No photos available</h3>
                        <p className="font-body text-charcoal/70">
                            Our gallery is currently empty. Check back later for updates.
                        </p>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 backdrop-blur-sm p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button 
                            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={24} />
                        </button>
                        
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="max-w-5xl w-full max-h-[90vh] flex flex-col bg-charcoal rounded-lg overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex-1 overflow-hidden bg-black/50 relative flex items-center justify-center">
                                <img 
                                    src={selectedImage.url || 'https://via.placeholder.com/1200'} 
                                    alt={selectedImage.title} 
                                    className="max-w-full max-h-[70vh] object-contain"
                                />
                            </div>
                            
                            {(selectedImage.title || selectedImage.caption) && (
                                <div className="p-6 bg-cream border-t-4 border-saffron">
                                    {selectedImage.title && (
                                        <h3 className="font-display font-bold text-2xl text-forest mb-2">{selectedImage.title}</h3>
                                    )}
                                    {selectedImage.category && (
                                        <span className="inline-block bg-mist text-saffron text-xs font-bold uppercase tracking-wider px-2 py-1 rounded mb-3">
                                            {selectedImage.category}
                                        </span>
                                    )}
                                    {selectedImage.caption && (
                                        <p className="font-body text-charcoal/80 mt-2">{selectedImage.caption}</p>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </PublicLayout>
    );
}
