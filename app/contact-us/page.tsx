'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ContactUs() {
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
            <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-gray-50 text-center">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="space-y-6 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full animate-fade-in">
                            <Sparkles className="w-3.5 h-3.5 text-primary" />
                            <span className="text-primary font-bold text-[10px] tracking-widest uppercase font-heading">Get In Touch</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight font-heading">
                            How Can We <span className="text-primary">Help You?</span>
                        </h1>
                        <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                            Whether you have a question or are ready to book, our team is standing by to assist you 24/7.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Contact Info cards */}
                        <div className="lg:col-span-5 space-y-6">
                            {[
                                {
                                    title: 'Call Us Now',
                                    value: '+971 56 542 9198',
                                    icon: Phone,
                                    href: 'tel:+971565429198',
                                    color: 'text-blue-500',
                                    bg: 'bg-blue-50'
                                },
                                {
                                    title: 'WhatsApp Chat',
                                    value: 'Live 24/7 Support',
                                    icon: MessageCircle,
                                    href: 'https://wa.me/971565429198',
                                    color: 'text-green-500',
                                    bg: 'bg-green-50'
                                },
                                {
                                    title: 'Email Address',
                                    value: 'dubaihomecleaningservices@gmail.com',
                                    icon: Mail,
                                    href: 'mailto:dubaihomecleaningservices@gmail.com',
                                    color: 'text-orange-500',
                                    bg: 'bg-orange-50'
                                },
                                {
                                    title: 'Office Location',
                                    value: 'Dubai Silicon Oasis, UAE',
                                    icon: MapPin,
                                    href: '#',
                                    color: 'text-primary',
                                    bg: 'bg-primary/5'
                                }
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className="flex items-center gap-6 p-6 bg-white rounded-[28px] border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                                >
                                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110", item.bg)}>
                                        <item.icon className={cn("w-6 h-6", item.color)} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">{item.title}</p>
                                        <p className="text-gray-900 font-black text-sm md:text-base leading-tight">{item.value}</p>
                                    </div>
                                </a>
                            ))}

                            <div className="p-8 rounded-[32px] bg-gray-950 text-white relative overflow-hidden">
                                <Clock className="absolute -top-4 -right-4 w-24 h-24 text-white/5 rotate-12" />
                                <h4 className="text-lg font-bold mb-4 font-heading">Working Hours</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-sm font-medium">
                                        <span className="text-gray-400">Sun - Thu</span>
                                        <span>24 Hours</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-medium">
                                        <span className="text-gray-400">Fri - Sat</span>
                                        <span>24 Hours</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-7">
                            <div className="p-8 md:p-12 bg-white rounded-[40px] border border-gray-100 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

                                <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading">Send Us A Message</h3>

                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. John Doe"
                                                className="w-full h-12 bg-gray-50 border-none rounded-2xl px-6 text-sm font-bold text-gray-900 focus:ring-2 focus:ring-primary/20 transition-all outline-none placeholder:text-gray-300"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                placeholder="+971 00 000 0000"
                                                className="w-full h-12 bg-gray-50 border-none rounded-2xl px-6 text-sm font-bold text-gray-900 focus:ring-2 focus:ring-primary/20 transition-all outline-none placeholder:text-gray-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="name@example.com"
                                            className="w-full h-12 bg-gray-50 border-none rounded-2xl px-6 text-sm font-bold text-gray-900 focus:ring-2 focus:ring-primary/20 transition-all outline-none placeholder:text-gray-300"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Message</label>
                                        <textarea
                                            rows={4}
                                            placeholder="How can we help you today?"
                                            className="w-full bg-gray-50 border-none rounded-3xl p-6 text-sm font-bold text-gray-900 focus:ring-2 focus:ring-primary/20 transition-all outline-none placeholder:text-gray-300 resize-none"
                                        />
                                    </div>

                                    <Button className="w-full h-14 rounded-full bg-gray-950 hover:bg-primary text-white font-black uppercase tracking-widest text-xs gap-3 transition-all">
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
