import React from 'react';
import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Components/Layout/PublicLayout';
import NewsCard from '@/Components/Public/NewsCard';
import { Calendar, ArrowLeft } from 'lucide-react';

export default function Show({ post, relatedPosts }) {
    return (
        <PublicLayout title={post.title}>
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                <Link 
                    href={route('news.index')} 
                    className="inline-flex items-center font-sans font-bold text-sm text-charcoal/60 hover:text-saffron mb-8 transition-colors uppercase tracking-wider group"
                >
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to News
                </Link>

                <header className="mb-12">
                    <div className="flex items-center space-x-2 text-saffron mb-4">
                        <Calendar size={16} />
                        <span className="font-sans text-sm font-bold uppercase tracking-wider">
                            {new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                    </div>
                    <h1 className="font-display font-black text-4xl md:text-5xl text-forest leading-tight mb-6">
                        {post.title}
                    </h1>
                </header>

                {post.cover_image && (
                    <div className="mb-12 rounded overflow-hidden shadow-md">
                        <img 
                            src={post.cover_image} 
                            alt={post.title} 
                            className="w-full max-h-[500px] object-cover object-center"
                        />
                    </div>
                )}

                <div 
                    className="prose prose-lg prose-headings:font-display prose-headings:text-forest prose-p:font-body prose-p:text-charcoal/80 prose-a:text-saffron max-w-none mb-16"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

            </article>

            {/* Related Posts */}
            {relatedPosts && relatedPosts.length > 0 && (
                <section className="bg-mist py-16 border-t border-mist">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-display font-bold text-3xl text-forest mb-8">Related News</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <NewsCard key={relatedPost.id} post={relatedPost} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </PublicLayout>
    );
}
