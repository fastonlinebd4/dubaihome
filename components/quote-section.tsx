'use client';

import { Phone, CheckCircle2, Sparkles, Mail, MessageSquare, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function QuoteSection() {
    const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        email: '',
        address: '',
        message: ''
    });

    // আপনার দেওয়া সার্ভিসের নতুন লিস্ট (ক্যাটাগরি সহ)
    const customServices = [
        "--- DEEP CLEANING SERVICES ---",
        "Apartment Deep Cleaning",
        "Villa Deep Cleaning",
        "Office Deep Cleaning",
        "Floor Deep Cleaning Services",
        "Move In Move Out Cleaning",
        "AC Duct Cleaning",
        "Villa Facade Cleaning Services",
        "Outside Deep Cleaning",
        "Outside Power Wash",
        "Rooftop Cleaning Services",
        "Outside Window Cleaning",
        "Post Construction Cleaning in Dubai",
        "Bathroom Deep Cleaning",
        "Steam Deep Cleaning",
        "Deep Cleaning Of Restaurant",
        "Deep Cleaning Of Warehouse",
        "Deep Cleaning Of Shops",
        "Kitchen Deep Cleaning",
        "Balcony Deep Cleaning",
        "--- CLEANING SERVICES ---",
        "Mattress Cleaning Services",
        "Curtain UV & Steam Machine",
        "Sofa & Carpet Shampooing",
		"Carpet Shampooing",
        "Water Tank Cleaning Services",
        "Swimming Pool Cleaning",
        "Artificial Grass Cleaning",
        "Marble Polishing Services",
        "--- DUBAI PAINTING SERVICES ---",
        "Office Painting Services",
        "Villa Painting Services",
        "Apartment Painting"
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('SENDING');

        try {
            const res = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('SUCCESS');
                setFormData({ name: '', phone: '', service: '', email: '', address: '', message: '' });
                alert('Thank you! Your quote request has been sent successfully.');
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            setStatus('ERROR');
            alert('Something went wrong. Please try again or call us directly.');
        } finally {
            setTimeout(() => setStatus('IDLE'), 5000);
        }
    };

    return (
        <section id="quote" className="py-24 bg-[#0a0c10] relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                            <Sparkles className="w-3.5 h-3.5 text-primary" />
                            <span className="text-white font-bold text-[9px] tracking-[0.2em] uppercase font-heading">Direct Pricing</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight font-heading">
                            Get Your <span className="text-primary italic">Free Quote</span> <br /> In Seconds.
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-md">
                            No hidden fees. No surprises. Just honest, transparent pricing for Dubai's best deep cleaning services.
                        </p>
                        <div className="space-y-4 pt-4">
                            {[
                                'Instant Response (Within 5 Minutes)',
                                'No Commitment Required',
                                'Customized Service Packages'
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-3 h-3 text-primary" />
                                    </div>
                                    <span className="text-gray-300 text-xs font-bold">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
                        <div className="relative bg-white/5 backdrop-blur-3xl p-8 md:p-10 rounded-[40px] border border-white/10 shadow-2xl">
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="space-y-1.5">
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name</p>
                                    <input
                                        type="text" required placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-xs font-semibold focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500 ml-1">Phone Number</p>
                                        <div className="relative group/input">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                                            <input
                                                type="tel" required placeholder="+971 56 542 9198"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full h-11 bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 text-xs font-semibold focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</p>
                                        <div className="relative group/input">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                                            <input
                                                type="email" placeholder="email@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full h-11 bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 text-xs font-semibold focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500 ml-1">Service Location / Address</p>
                                    <div className="relative group/input">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                                        <input
                                            type="text" required placeholder="United Arab Emirates, Dubai"
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            className="w-full h-11 bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 text-xs font-semibold focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500 ml-1">Select Service</p>
                                    <div className="relative">
                                        <select
                                            required value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            className="w-full h-11 bg-white/5 border border-white/10 rounded-xl px-4 text-xs font-semibold appearance-none focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white cursor-pointer"
                                        >
                                            <option value="" disabled className="bg-gray-900 text-gray-500">Choose a service...</option>
                                            {customServices.map((service, i) => (
                                                <option 
                                                    key={i} 
                                                    value={service} 
                                                    className={`bg-gray-900 ${service.startsWith('---') ? 'text-primary font-bold pt-4' : 'text-white'}`}
                                                    disabled={service.startsWith('---')}
                                                >
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500 ml-1">Message (Optional)</p>
                                    <div className="relative group/input">
                                        <MessageSquare className="absolute left-4 top-3 w-4 h-4 text-gray-600" />
                                        <textarea
                                            placeholder="Tell us more about your needs..."
                                            rows={3}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-xs font-semibold focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white resize-none"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit" disabled={status === 'SENDING'}
                                    className="w-full h-12 bg-primary hover:bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-xl flex items-center justify-center gap-2.5 transition-all disabled:opacity-50"
                                >
                                    {status === 'SENDING' ? 'Processing...' : 'Send Quote Request'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}