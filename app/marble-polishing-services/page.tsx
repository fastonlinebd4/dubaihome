'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import FloatingWhatsApp from '@/components/floating-whatsapp';
import { 
  Check, 
  Clock, 
  Shield, 
  Star, 
  Sparkles, 
  Home,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Gem // Marble এর জন্য লাক্সারি আইকন
} from 'lucide-react';

export default function MarblePolishingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#fcfcfc] overflow-x-hidden">
      <Header isScrolled={isScrolled} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-white via-[#fcfcfc] to-gray-50">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b8860b]/10 border border-[#b8860b]/20 rounded-full">
                <Gem className="w-4 h-4 text-[#b8860b]" />
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Premium Floor Care</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Professional Marble <span className="text-[#b8860b]">Polishing Dubai</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
  Our marble polishing service restores shine and smoothness to dull or scratched marble floors. Professional polishing machines remove stains and surface damage effectively. We provide high-gloss or matte finishes based on client preference. Polishing enhances durability and protects marble from wear. Ideal for villas, hotels, offices, and luxury spaces. Proper sealing ensures long-lasting protection. Clean and polished marble elevates interior elegance. Experience a premium finish with expert craftsmanship.
</p>
<div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Marble Polishing service"
                  className="inline-flex items-center gap-3 bg-[#b8860b] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#8b6508] transition-all shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="tel:+971565429198"
                  className="inline-flex items-center gap-3 bg-white text-[#091a33] px-8 py-4 rounded-xl font-bold text-sm border-2 border-gray-200 hover:border-[#b8860b] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#b8860b]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#b8860b]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Licensed</p>
                    <p className="text-sm font-black text-[#091a33]">Technicians</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Top Rated</p>
                    <p className="text-sm font-black text-[#091a33]">Stone Experts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/marble-polishing-hero.jpg"
                  alt="Marble Polishing Dubai"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a33]/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#b8860b] rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">Gloss</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Mirror Finish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task List Box */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#b8860b] to-[#8b6508] rounded-[60px] p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#f3e3a2] to-[#d4b64a] rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Gem className="w-12 h-12 text-[#b8860b]" />
            </div>

            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Marble Polishing Task List</h2>
              <p className="text-white/90 text-base font-medium">Professional Multi-Step Restoration Process</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#fff9e6] to-[#f7e9b8] rounded-[32px] p-8 space-y-4">
                {[
                  'Deep Surface Cleaning',
                  'Lippage Removal (Tile Leveling)',
                  'Diamond Grinding (Scratch Removal)',
                  'Honing (Surface Smoothing)',
                  'Grout Cleaning & Repair',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#b8860b] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <p className="text-[#091a33] font-bold text-base">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#fff9e6] to-[#f7e9b8] rounded-[32px] p-8 space-y-4">
                {[
                  'Mirror Finish Polishing',
                  'Crystallization (Hardening)',
                  'Nano-Sealer Application',
                  'Buffing for Extra Shine',
                  'Stain Protection Coating',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#b8860b] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <p className="text-[#091a33] font-bold text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              What's Included In Our <span className="text-[#b8860b]">Polishing Services?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in restoring all natural stones like Marble, Granite, and Travertine to their original glory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Scratch Removal',
                items: [
                  'Deep grinding with diamond pads',
                  'Eliminating etch marks',
                  'Smoothing uneven tiles',
                  'Restoring damaged surfaces',
                ]
              },
              {
                title: 'Stain Treatment',
                items: [
                  'Removing coffee & wine stains',
                  'Oil & grease extraction',
                  'Safe chemical cleaning',
                  'Removing deep-seated dirt',
                ]
              },
              {
                title: 'Shine Enhancement',
                items: [
                  'High-gloss polishing',
                  'Crystallization process',
                  'Color restoration',
                  'Mechanical buffing',
                ]
              },
              {
                title: 'Stone Protection',
                items: [
                  'Water-repellent sealing',
                  'Stain-resistant coating',
                  'Nano-technology protection',
                  'Long-lasting durability',
                ]
              },
              {
                title: 'Grout Detailing',
                items: [
                  'Grout deep cleaning',
                  'Epoxy grout filling',
                  'Color matching repair',
                  'Seamless tile look',
                ]
              },
              {
                title: 'Edge & Corner Care',
                items: [
                  'Hand-polishing corners',
                  'Skirting board cleaning',
                  'Step & riser detailing',
                  'Wall marble polishing',
                ]
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <h3 className="text-xl font-black text-[#091a33] mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#b8860b] flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-6">
                Why Do You Need <span className="text-[#b8860b]">Professional Polishing</span>?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Remove Stubborn Scratches',
                    desc: 'Regular cleaning can’t remove scratches. Our diamond grinding process levels the stone to perfection.'
                  },
                  {
                    title: 'Prevent Permanent Staining',
                    desc: 'Marble is porous. Professional sealing prevents liquids from seeping in and causing permanent damage.'
                  },
                  {
                    title: 'Increase Property Value',
                    desc: 'A well-maintained, shiny marble floor significantly increases the luxury appeal of your Dubai villa.'
                  },
                  {
                    title: 'Easier Daily Maintenance',
                    desc: 'Polished and sealed marble is much easier to mop and stays clean longer than a dull, porous surface.'
                  },
                  {
                    title: 'Restore Natural Beauty',
                    desc: 'Natural stones lose their vibrance over time. We bring back the original colors and unique vein patterns.'
                  },
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#e8c600] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#091a33] mb-2">{point.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-[#fcfcfc]">
                <Image
                  src="/images/marble-care-benefits.jpg"
                  alt="Marble Care Benefits"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-20 bg-[#fcfcfc] relative overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute top-20 left-10 opacity-10">
          <Gem className="w-32 h-32 text-[#b8860b]" />
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#b8860b] font-bold text-sm uppercase tracking-widest mb-3">ELITE QUALITY</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              The DUBAI HOME CLEANING SERVICES <br />
              <span className="text-[#b8860b]">Polishing Advantage</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '💎',
                title: 'Diamond Pad Technology',
                desc: 'We use high-grade diamond abrasives for the smoothest possible stone finish.'
              },
              {
                icon: '🇮🇹',
                title: 'Italian Machinery',
                desc: 'Utilizing world-class Italian machines and polishing compounds for superior results.'
              },
              {
                icon: '🛡️',
                title: 'Safe For Stones',
                desc: 'Our pH-neutral chemicals ensure your marble is polished without any acid damage.'
              },
              {
                icon: '👷',
                title: 'Expert Craftsmen',
                desc: 'Our technicians have years of experience handling delicate natural stones in Dubai.'
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#fff9e6] to-[#f7e9b8] p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md text-3xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#091a33] mb-3 leading-tight">{service.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/971565429198"
              className="inline-flex items-center gap-2 bg-white text-[#091a33] px-8 py-4 rounded-full font-bold text-sm border-2 border-gray-200 hover:border-[#b8860b] hover:bg-gray-50 transition-all shadow-md"
            >
              Book Inspection on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#b8860b] to-[#8b6508] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our Restoration Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A systematic multi-stage approach to ensure a perfect mirror finish
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Inspection', desc: 'Analyzing stone type and damage level' },
              { step: '02', title: 'Grinding', desc: 'Removing scratches and uneven layers' },
              { step: '03', title: 'Polishing', desc: 'Multi-stage honing for maximum shine' },
              { step: '04', title: 'Sealing', desc: 'Applying protection for a long-lasting look' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-black text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Polishing <span className="text-[#b8860b]">FAQs</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does the polishing last?',
                a: 'In residential villas, a high-quality polish typically lasts 1-3 years depending on maintenance and foot traffic.'
              },
              {
                q: 'Can you remove deep stains?',
                a: 'Most stains (oil, coffee) can be removed using specialized poultice treatments and deep grinding.'
              },
              {
                q: 'Is the process dusty?',
                a: 'We use a wet polishing method which traps dust in water, keeping your home clean and dust-free.'
              },
              {
                q: 'Do you polish walls and countertops?',
                a: 'Yes, we provide polishing for marble floors, walls, kitchen countertops, and stairs.'
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-[#091a33]">{faq.q}</span>
                  <div className="w-8 h-8 bg-[#b8860b]/10 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#b8860b] rotate-90" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#b8860b] to-[#d4b64a] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Bring Back The Shine Today!
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Get your marble floors inspected by our experts and enjoy a mirror-like finish.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Marble Polishing service"
                className="inline-flex items-center gap-3 bg-[#091a33] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#0a1f3d] transition-all shadow-lg"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="tel:+971565429198"
                className="inline-flex items-center gap-3 bg-white text-[#091a33] px-8 py-4 rounded-xl font-bold text-sm border-2 border-[#091a33] hover:bg-gray-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                +971 56 542 9198
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}