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
  Layers // Floor relevant icon
} from 'lucide-react';

export default function FloorDeepCleaningPage() {
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
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-white via-[#fcfcfc] to-blue-50">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full">
                <Layers className="w-4 h-4 text-blue-600" />
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Premium Floor Care</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Top Floor Deep Cleaning In <span className="text-blue-600">Dubai</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
Dubai Home Cleaning Services provides professional floor deep cleaning services in Dubai designed to restore shine, hygiene, and durability to all types of flooring. Over time, floors collect stubborn stains, embedded dirt, bacteria, and discoloration that regular mopping cannot remove. Our expert team uses industrial-grade machines and specialized cleaning solutions to deeply clean marble, tile, ceramic, parquet, vinyl, and concrete floors. We focus on grout lines, corners, and high-traffic areas to eliminate hidden buildup and restore the original appearance. For marble and natural stone surfaces, we apply safe techniques to protect and enhance the finish. Our process not only improves cleanliness but also extends the lifespan of your flooring. Ideal for villas, apartments, offices, restaurants, and warehouses. Trust Dubai Home Cleaning Services to deliver spotless, polished, and professionally maintained floors with guaranteed quality results.              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Floor Deep Cleaning service"
                  className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="tel:+971565429198"
                  className="inline-flex items-center gap-3 bg-white text-[#091a33] px-8 py-4 rounded-xl font-bold text-sm border-2 border-gray-200 hover:border-blue-600 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-600/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Licensed</p>
                    <p className="text-sm font-black text-[#091a33]">Expert Crew</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Premium</p>
                    <p className="text-sm font-black text-[#091a33]">Machines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/floor-cleaning-hero.jpg"
                  alt="Floor Deep Cleaning Dubai"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a33]/20 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">Mirror</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Finish Shine</p>
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
          <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-[60px] p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Layers className="w-12 h-12 text-white" />
            </div>

            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Floor Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">Step-by-Step Restoration for All Floor Types</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-[32px] p-8 space-y-4">
                {[
                  'Surface Dusting & Vacuuming',
                  'Deep Scrubbing with Machines',
                  'Tough Stain & Grout Cleaning',
                  'Old Wax & Sealant Removal',
                  'Hard-to-reach Corner Cleaning',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <p className="text-[#091a33] font-bold text-base">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-[32px] p-8 space-y-4">
                {[
                  'Marble Polishing & Buffing',
                  'Tile Sanitization & Rinsing',
                  'Anti-slip Coating Application',
                  'Edge & Skirting Cleaning',
                  'Final Gloss Inspection',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
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
              Our Professional <span className="text-blue-600">Floor Cleaning Scope</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use industrial-grade equipment to deep clean, sanitize, and restore your flooring to its former glory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Marble Restoration',
                items: ['Polishing of dull surfaces', 'Scratch removal treatment', 'Honing for smooth finish', 'Diamond pad buffing']
              },
              {
                title: 'Tile & Grout Care',
                items: ['High-pressure scrubbing', 'Grout whitening/cleaning', 'Soap scum removal', 'Bacterial disinfection']
              },
              {
                title: 'Wood & Vinyl',
                items: ['Gentle deep cleaning', 'Moisture-controlled wash', 'Vinyl floor buffing', 'Protective layer cleaning']
              },
              {
                title: 'Outdoor Flooring',
                items: ['Interlock deep wash', 'Oil & grease removal', 'Moss & algae treatment', 'Pressure washing']
              },
              {
                title: 'Industrial Floors',
                items: ['Epoxy floor cleaning', 'Warehouse floor scrubbing', 'Heavy dirt removal', 'Degreasing services']
              },
              {
                title: 'Sanitization',
                items: ['Hospital-grade disinfectants', 'Safe for kids and pets', 'Odor neutralization', 'Fresh scent finish']
              },
			    {
                title: 'Floor Deep Cleaning',
                items: [
                 'Deep Cleaning of vinyl floors, concrete tiles, ceramic tiles using a scrubbing machine and wooden floors will be cleane by vacuum mopping.',
				  'Deep Cleaning of marble-type floors and stairs using a vacuum and  mopping',
                ]
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <h3 className="text-xl font-black text-[#091a33] mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Do You Need Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-6">
                Why Invest in <span className="text-blue-600">Deep Floor Cleaning?</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Remove Stubborn Dirt', desc: 'Mopping only cleans the surface. Deep cleaning removes dirt trapped deep within the pores and grout lines.' },
                  { title: 'Eliminate Bacteria', desc: 'Floors are high-traffic areas. Our sanitization process kills harmful pathogens and allergens.' },
                  { title: 'Preserve Floor Life', desc: 'Regular professional cleaning prevents abrasive dirt from scratching and permanently damaging your floors.' },
                  { title: 'Enhanced Aesthetics', desc: 'A clean, polished floor significantly improves the overall look and value of your home or office.' },
                  { title: 'Safe & Non-Toxic', desc: 'We use eco-friendly chemicals that are completely safe for your family, especially crawling toddlers.' },
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
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/why-floor-cleaning.jpg"
                  alt="Why Deep Clean Floors"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#fcfcfc] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">ELITE QUALITY</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              DUBAI HOME CLEANING SERVICES <br />
              <span className="text-blue-600">Floor Care Advantage</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚙️', title: 'Industrial Gear', desc: 'High-torque rotary scrubbers and suction machines for perfect results.' },
              { icon: '🌿', title: 'Green Chemicals', desc: '100% biodegradable solutions safe for environment and indoor air.' },
              { icon: '🛡️', title: 'Expert Care', desc: 'We know which chemical and pressure to use for marble vs ceramic floors.' },
              { icon: '⚡', title: 'Fast & Efficient', desc: 'Our team covers large residential or commercial areas in record time.' },
            ].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md text-3xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#091a33] mb-3 leading-tight">{service.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#e8c600] to-[#d4b600] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Give Your Floors a New Life!
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Book your professional floor deep cleaning today and enjoy a spotless, shining home.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Floor Deep Cleaning service"
                className="inline-flex items-center gap-3 bg-[#091a33] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#0a1f3d] transition-all shadow-lg"
              >
                Get Free Quote Now
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