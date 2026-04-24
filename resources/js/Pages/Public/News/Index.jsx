import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Components/Layout/PublicLayout';
import NewsCard from '@/Components/Public/NewsCard';

export default function Index({ posts }) {
    return (
        <PublicLayout title="News & Updates">
            {/* Page Header */}
            <div className="bg-forest text-cream py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="font-display font-black text-4xl md:text-5xl mb-4">News & Updates</h1>
                    <p className="font-body text-xl text-cream/80 max-w-2xl mx-auto">
                        Stay informed about our latest activities, announcements, and stories of impact.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {posts.data.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.data.map((post) => (
                                <NewsCard key={post.id} post={post} />
                            ))}
                        </div>

                        {/* Pagination */}
                        {posts.links && posts.links.length > 3 && (
                            <div className="mt-16 flex justify-center">
                                <div className="flex flex-wrap gap-1">
                                    {posts.links.map((link, k) => {
                                        return (
                                            <Link
                                                key={k}
                                                href={link.url || '#'}
                                                className={`px-4 py-2 border rounded text-sm font-sans font-medium transition-colors ${
                                                    link.active 
                                                        ? 'bg-saffron text-white border-saffron' 
                                                        : 'bg-white text-charcoal border-mist hover:border-saffron hover:text-saffron'
                                                } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-24 bg-mist rounded border border-charcoal/5">
                        <div className="text-4xl mb-4">📰</div>
                        <h3 className="font-display font-bold text-2xl text-charcoal mb-2">No news posted yet</h3>
                        <p className="font-body text-charcoal/70">
                            Check back soon for updates from the Trust.
                        </p>
                    </div>
                )}
            </div>
        </PublicLayout>
    );
}
