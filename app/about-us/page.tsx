'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import AboutSection from '@/components/about-section';
import { Sparkles, CheckCircle2, ShieldCheck, Heart, Users2, Award } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function AboutUs() {
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

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center space-y-6 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full animate-fade-in">
                            <Sparkles className="w-3.5 h-3.5 text-primary" />
                            <span className="text-primary font-bold text-[10px] tracking-widest uppercase font-heading">Our Story</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight font-heading">
                            Redefining Cleanliness <br />
                            <span className="text-primary">In The Heart Of Dubai</span>
                        </h1>

                        <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                            Since 2014, Dubai Home Cleaning Services has been the gold standard for specialized hygiene
                            and technical excellence across the UAE.
                        </p>
                    </div>
                </div>
            </section>

            {/* Reusing AboutSection Component */}
            <AboutSection />

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Our Core Values</h2>
                        <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl mx-auto">
                            The principles that drive our commitment to excellence every single day.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Unmatched Quality',
                                desc: 'We never settle for "good enough". We aim for perfection in every corner.',
                                icon: Award,
                                color: 'bg-primary'
                            },
                            {
                                title: 'Trusted Security',
                                desc: 'Every member of our team is background-checked and vetted for your peace of mind.',
                                icon: ShieldCheck,
                                color: 'bg-accent'
                            },
                            {
                                title: 'Pure Integrity',
                                desc: 'Honesty and transparency are at the core of our relationships with every client.',
                                icon: Heart,
                                color: 'bg-red-500'
                            }
                        ].map((value, idx) => (
                            <div key={idx} className="p-8 rounded-[32px] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                                <div className={cn("w-14 h-14 rounded-[20px] flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500", value.color)}>
                                    <value.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">{value.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-medium">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
                        {[
                            { label: 'Happy Clients', value: '5K+' },
                            { label: 'Total Services', value: '12K+' },
                            { label: 'Expert Cleaners', value: '150+' },
                            { label: 'Years Experience', value: '10+' }
                        ].map((stat, idx) => (
                            <div key={idx} className="space-y-2">
                                <div className="text-4xl md:text-5xl font-black text-primary font-heading tracking-tight">{stat.value}</div>
                                <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
