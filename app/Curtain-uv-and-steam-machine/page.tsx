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
  Zap // Representing power/machine
} from 'lucide-react';

export default function CurtainUVSteamMachinePage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff3d00]/10 border border-[#ff3d00]/20 rounded-full">
                <Zap className="w-4 h-4 text-[#ff3d00]" />
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Advanced Technology</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Curtain UV Steam <span className="text-[#ff3d00]">Machine Service</span> In Dubai
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
Restore freshness and hygiene to your curtains with our professional UV & steam curtain cleaning services in Dubai. Curtains easily trap dust, allergens, bacteria, and odors over time, affecting indoor air quality and overall comfort. Our advanced UV light technology helps eliminate harmful microorganisms, while high-temperature steam penetrates deep into fabric fibers for powerful sanitization. This chemical-free method is safe for delicate fabrics, making it ideal for homes, offices, hotels, and commercial spaces. We carefully treat different curtain materials including Curtain, linen, blackout, and sheer fabrics without causing damage or shrinkage. Steam cleaning also removes stubborn stains and neutralizes unpleasant odors effectively. Regular curtain cleaning improves air circulation and reduces allergy triggers. Experience cleaner, fresher curtains with long-lasting hygiene and professional care.              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Curtain UV Steam Machine service"
                  className="inline-flex items-center gap-3 bg-[#ff3d00] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#d43300] transition-all shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="tel:+971565429198"
                  className="inline-flex items-center gap-3 bg-white text-[#091a33] px-8 py-4 rounded-xl font-bold text-sm border-2 border-gray-200 hover:border-[#ff3d00] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#ff3d00]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#ff3d00]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Hospital</p>
                    <p className="text-sm font-black text-[#091a33]">Grade Clean</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">99.9%</p>
                    <p className="text-sm font-black text-[#091a33]">Sanitization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/uv-steam-cleaning-hero.jpg"
                  alt="Curtain UV Steam Machine Dubai"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a33]/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#ff3d00] rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">Pure Tech</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Steam Sterilized</p>
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
          <div className="relative bg-gradient-to-br from-[#091a33] to-[#1a3a5a] rounded-[60px] p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#ff3d00] to-[#b32b00] rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Zap className="w-12 h-12 text-white" />
            </div>

            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Curtain UV Steam Task List</h2>
              <p className="text-white/90 text-base font-medium">Technologically Advanced Sterilization Process</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-[32px] p-8 space-y-4 border border-white/10">
                {[
                  'Initial Dust Extraction',
                  'High-Temp Steam Penetration',
                  'Deep Fiber Sanitization',
                  'UV Light Bacteria Killing',
                  'Curtain Safe Spot Removal',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#ff3d00] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <p className="text-white font-bold text-base">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-[32px] p-8 space-y-4 border border-white/10">
                {[
                  'Mite & Allergen Removal',
                  'Deodorization Treatment',
                  'Moisture-Free Finishing',
                  'Fiber Texture Restoration',
                  'Post-Service Hygiene Audit',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#ff3d00] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <p className="text-white font-bold text-base">{item}</p>
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
              Advanced <span className="text-[#ff3d00]">Service Scope</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Utilizing high-end UV and Steam technology to bring back the purity of your Curtain surfaces and fabrics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'UV Sterilization',
                items: [
                  'UV-C light treatment',
                  'Killing bacteria/viruses',
                  'DNA-level pathogen destruction',
                  'Chemical-free sanitization',
                ]
              },
              {
                title: 'Steam Deep Clean',
                items: [
                  '100°C+ dry steam injection',
                  'Breaking down tough oils',
                  'Opening fabric pores',
                  'Deep fiber extraction',
                ]
              },
              {
                title: 'Fabric Protection',
                items: [
                  'Safe for natural Curtain',
                  'No shrinkage technology',
                  'Color fading protection',
                  'Softness preservation',
                ]
              },
              {
                title: 'Dust Mite Control',
                items: [
                  'Eliminating microscopic pests',
                  'Removal of egg larvae',
                  'Allergy relief solution',
                  'Sanitary barrier creation',
                ]
              },
              {
                title: 'Curtain Polishing',
                items: [
                  'Surface lint removal',
                  'Gentle texture grooming',
                  'Restoring fabric luster',
                  'Machine-precise finishing',
                ]
              },
              {
                title: 'Health Inspection',
                items: [
                  'Surface hygiene testing',
                  'Odor source identification',
                  'Final microbial check',
                  'Quality assurance report',
                ]
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <h3 className="text-xl font-black text-[#091a33] mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff3d00] flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-6">
                Why Use <span className="text-[#ff3d00]">UV & Steam</span> Machines?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Ultimate Sanitization',
                    desc: 'Standard cleaning only removes surface dirt. UV-C light kills germs at the source without harmful chemicals.'
                  },
                  {
                    title: 'Deep Allergen Removal',
                    desc: 'Hot steam penetrates deep into Curtain fibers, removing trapped pollen and dust mites that cause allergies.'
                  },
                  {
                    title: 'Eco-Friendly Approach',
                    desc: 'By using the power of heat and light, we reduce the need for harsh detergents, making it safe for your home.'
                  },
                  {
                    title: 'Prevents Fabric Decay',
                    desc: 'Micro-organisms can eat away at Curtain fibers. Sterilization extends the life of your furniture and fabrics.'
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
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/uv-machine-action.jpg"
                  alt="UV Steam Machine Service"
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
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Advanced <span className="text-[#ff3d00]">Machinery Benefits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🌡️',
                title: '120°C Steam',
                desc: 'Powerful dry steam that kills germs instantly without soaking the fabric.'
              },
              {
                icon: '🛡️',
                title: 'UV-C Shield',
                desc: 'Medical-grade UV technology to sterilize and protect surfaces.'
              },
              {
                icon: '🌬️',
                title: 'Rapid Drying',
                desc: 'Our machines extract moisture instantly, leaving fabrics ready to use.'
              },
              {
                icon: '💎',
                title: 'Curtain Safe',
                desc: 'Specifically calibrated settings for natural and synthetic Curtain.'
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                <div className="w-16 h-16 bg-[#ff3d00]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-3xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#091a33] mb-3 leading-tight">{service.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Machine Service <span className="text-[#ff3d00]">FAQs</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Is UV light safe for all types of Curtain?',
                a: 'Yes, our UV-C machines are calibrated for domestic use and do not damage natural or synthetic Curtain fibers.'
              },
              {
                q: 'How long does the steam take to dry?',
                a: 'We use "Dry Steam" technology which contains very low moisture. Most surfaces are dry and ready for use within 15-30 minutes.'
              },
              {
                q: 'Does it remove old stains?',
                a: 'The heat from the steam is excellent at loosening old stains, though permanent dye damage cannot be reversed.'
              },
              {
                q: 'Can this service help with bed bugs?',
                a: 'Yes, the combination of high-temperature steam and UV light is highly effective at killing bed bugs and their eggs on contact.'
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-[#fcfcfc] rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-[#091a33]">{faq.q}</span>
                  <div className="w-8 h-8 bg-[#ff3d00]/10 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#ff3d00] rotate-90" />
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
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#ff3d00] rounded-3xl p-8 md:p-12 text-center shadow-2xl text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Ready for a Deeper, Healthier Clean?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Book our Curtain UV Steam Machine service today and give your home the protection it deserves.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Curtain UV Steam Machine service"
                className="inline-flex items-center gap-3 bg-white text-[#ff3d00] px-8 py-4 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all shadow-lg"
              >
                Book Machine Service
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="tel:+971565429198"
                className="inline-flex items-center gap-3 bg-[#091a33] text-white px-8 py-4 rounded-xl font-bold text-sm border-2 border-[#091a33] hover:bg-[#0a1f3d] transition-all"
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