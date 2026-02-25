'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Shield, Clock, Lock, Eye, FileText, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function PrivacyPolicy() {
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
            <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-gray-950 text-white">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[160px]" />
                </div>

                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="space-y-6 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                            <Shield className="w-3.5 h-3.5 text-primary" />
                            <span className="text-white font-bold text-[10px] tracking-widest uppercase font-heading">Security First</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight font-heading">
                            Privacy & Data <span className="text-primary">Protection Policy</span>
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
                            Your trust is our most valuable asset. Learn how we collect, use, and safeguard your personal information.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-28">
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">

                        {/* Introduction */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 text-primary">
                                <FileText className="w-6 h-6" />
                                <h2 className="text-2xl font-bold text-gray-900 font-heading">1. Introduction</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                Welcome to Dubai Home Cleaning Services. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at dubaihomecleaningservices@gmail.com.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 text-primary">
                                <Eye className="w-6 h-6" />
                                <h2 className="text-2xl font-bold text-gray-900 font-heading">2. Information We Collect</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed font-medium mb-4">
                                We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services. The personal information we collect includes:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Name and Contact Data (Phone, Email, Address)',
                                    'Payment Information (Processed securely via our partners)',
                                    'Service preferences and instructions',
                                    'Location data for technical service delivery'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                                        <span className="text-sm font-bold text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* How we use info */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 text-primary">
                                <Lock className="w-6 h-6" />
                                <h2 className="text-2xl font-bold text-gray-900 font-heading">3. How We Use Informantion</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                We use the information we collect primarily to provide and improve our services to you. This includes scheduling, communication, processing payments, and internal analytics to better understand our customers' needs. We do NOT sell or share your personal data with third parties for marketing purposes.
                            </p>
                        </div>

                        {/* Data Security */}
                        <div className="p-8 rounded-[32px] bg-primary/5 border border-primary/10 space-y-4">
                            <div className="flex items-center gap-3 text-primary">
                                <Shield className="w-6 h-6 rotate-12" />
                                <h3 className="text-xl font-bold text-gray-900 font-heading">Data Security Guarantee</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.
                            </p>
                        </div>

                        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-3 text-gray-400">
                                <Clock className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-widest">Last Updated: February 2026</span>
                            </div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Dubai Home Cleaning Services</p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
