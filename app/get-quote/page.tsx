'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import QuoteSection from '@/components/quote-section';
import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function GetQuotePage() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="min-h-screen bg-white">
            <Header isScrolled={isScrolled} />

            {/* Mini Hero */}
            <section className="relative pt-32 pb-8 lg:pt-48 lg:pb-12 overflow-hidden bg-gray-50 text-center">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="space-y-4 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full animate-fade-in">
                            <Sparkles className="w-3.5 h-3.5 text-primary" />
                            <span className="text-primary font-bold text-[10px] tracking-widest uppercase font-heading">Free Estimate</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight font-heading">
                            Ready For A <span className="text-primary">Spotless Space?</span>
                        </h1>
                        <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto">
                            Fill out the form below and receive a detailed, transparent quote customized to your specific cleaning requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Quote Form Section */}
            <QuoteSection />

            {/* Trust Message Section */}
            <section className="py-20 bg-white">
                <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center italic text-gray-400 font-medium">
                    <p className="text-lg md:text-xl">
                        "We treat your home with the same care and respect as our own. Our goal is 100% satisfaction, every single time."
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-3 not-italic">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-black text-primary text-xs">DH</div>
                        <div className="text-left">
                            <p className="text-gray-900 font-black text-sm leading-none">Management Team</p>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Dubai Home Cleaning Services</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
