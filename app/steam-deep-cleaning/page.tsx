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
  Wind, // Changed Home to Wind for steam vibe
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export default function SteamDeepCleaningPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8c600]/10 border border-[#e8c600]/20 rounded-full">
                <Sparkles className="w-4 h-4 text-[#529e00]" />
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">High-Temperature Sanitization</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Professional Steam <span className="text-[#529e00]">Deep Cleaning</span> In Dubai
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
Our steam deep cleaning service in Dubai uses high-temperature steam technology to sanitize surfaces without harsh chemicals. Steam effectively kills bacteria, viruses, dust mites, and allergens while penetrating deep into fabrics and surfaces. This method is ideal for kitchens, bathrooms, mattresses, upholstery, and high-touch areas. It provides deep disinfection while being safe for children and pets. Steam cleaning also removes grease, stains, and odor-causing bacteria naturally. The process is eco-friendly and leaves minimal residue behind. It is perfect for homes and commercial spaces requiring hygienic cleaning solutions. Enjoy a chemical-free deep clean with powerful sanitization results.              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Steam Deep Cleaning service"
                  className="inline-flex items-center gap-3 bg-[#529e00] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#3d7700] transition-all shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+971565429198"
                  className="inline-flex items-center gap-3 bg-white text-[#091a33] px-8 py-4 rounded-xl font-bold text-sm border-2 border-gray-200 hover:border-[#529e00] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#529e00]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#529e00]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Certified</p>
                    <p className="text-sm font-black text-[#091a33]">Technicians</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Eco-Friendly</p>
                    <p className="text-sm font-black text-[#091a33]">100% Chemical Free</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/steam-cleaning-hero.jpg"
                  alt="Steam Deep Cleaning Dubai"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a33]/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#529e00] rounded-full flex items-center justify-center">
                    <Wind className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">140°C+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Steam Power</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Cleaning Services Box */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#529e00] to-[#3d7700] rounded-[60px] p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            {/* Top Icon Badge */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#c5e899] to-[#a8d96e] rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Sparkles className="w-12 h-12 text-[#529e00]" />
            </div>
            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Steam Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">Eco-friendly heat treatment for every corner of your property</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Column 1 */}
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  'Upholstery & Sofa Steaming',
                  'Curtain & Drapery Sanitization',
                  'Mattress Steam Treatment',
                  'Tile & Grout Deep Cleaning',
                  'Kitchen Surface Degreasing',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#529e00] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <p className="text-[#091a33] font-bold text-base">{item}</p>
                  </div>
                ))}
              </div>
              {/* Column 2 */}
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  'Bathroom Sanitize & Disinfect',
                  'Floor Steam Mopping',
                  'Window Track Steam Blast',
                  'AC Vent Sterilization',
                  'Deep Bacteria & Germ Removal',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#529e00] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
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

      {/* What's Included Section */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Where We Apply Our <span className="text-[#529e00]">Steam Technology?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our high-pressure steam cleaning is versatile and perfect for various surfaces throughout your villa or apartment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Upholstery & Carpets',
                items: [
                  'Deep fabric penetration',
                  'Stain & odor removal',
                  'Dust mite elimination',
                  'Fast drying time',
                  'Color revival treatment',
                ]
              },
              {
                title: 'Kitchen Hygiene',
                items: [
                  'Heavy grease removal',
                  'Stovetop & oven steaming',
                  'Sink & drain disinfection',
                  'Countertop sterilization',
                  'Floor degreasing treatment',
                ]
              },
              {
                title: 'Bathroom Sanitization',
                items: [
                  'Tile & grout whitening',
                  'Mold & mildew removal',
                  'Shower glass descaling',
                  'Toilet rim sterilization',
                  'Fixture polishing with steam',
                ]
              },
              {
                title: 'Mattress Care',
                items: [
                  'Bed bug prevention',
                  'Allergen & pollen removal',
                  'Sweat stain treatment',
                  'Complete disinfection',
                  'Refreshing deodorizing',
                ]
              },
              {
                title: 'Hard Floors',
                items: [
                  'Marble & tile cleaning',
                  'Hidden dirt extraction',
                  'Streaks-free finish',
                  'Corner & edge detailing',
                  'Bacteria-free surfaces',
                ]
              },
              {
                title: 'Window & Glass',
                items: [
                  'Track & frame cleaning',
                  'Residue-free glass',
                  'Hard water spot removal',
                  'Seal & joint cleaning',
                  'Eco-friendly shine',
                ]
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <h3 className="text-xl font-black text-[#091a33] mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#529e00] flex-shrink-0 mt-1" />
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
                The Power of <span className="text-[#529e00]">Steam Cleaning</span> for Your Home
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Chemical-Free Safety',
                    desc: 'Perfect for homes with children and pets. Steam uses only water to clean, leaving zero toxic residue behind.'
                  },
                  {
                    title: 'Kill 99.9% of Pathogens',
                    desc: 'High-temperature steam naturally kills bacteria, viruses, and mold spores without harsh disinfectants.'
                  },
                  {
                    title: 'Deep Allergen Control',
                    desc: 'Steam effectively removes dust mites, pet dander, and pollen trapped deep within fabrics and surfaces.'
                  },
                  {
                    title: 'Powerful Odor Removal',
                    desc: 'Steam neutralizes odors at their source rather than just masking them with artificial scents.'
                  },
                  {
                    title: 'Protect Your Furniture',
                    desc: 'Gentle yet effective cleaning that extends the life of your upholstery and delicate surfaces.'
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
                  src="/images/why-steam-cleaning.jpg"
                  alt="Why Steam Cleaning"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-[#fcfcfc] relative overflow-hidden">
        {/* Decorative Leaf Shapes (Optional icons change) */}
        <div className="absolute top-20 left-10 opacity-20">
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 10C40 30 20 60 20 90C20 110 35 130 60 130C85 130 100 110 100 90C100 60 80 30 60 10Z" fill="#529e00" opacity="0.3"/>
            <path d="M60 10L60 130" stroke="#529e00" strokeWidth="2" opacity="0.4"/>
          </svg>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#529e00] font-bold text-sm uppercase tracking-widest mb-3">ELITE STEAM SERVICE</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Benefits of Choosing Our <br />
              <span className="text-[#529e00]">Steam Deep Cleaning</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '💨',
                title: 'High-Pressure Technology',
                desc: 'We use industrial-grade steam machines that reach optimal temperatures for maximum sterilization.'
              },
              {
                icon: '🌿',
                title: 'Eco-Friendly Approach',
                desc: '100% water-based cleaning. No chemicals, no fumes, and completely safe for your family and the planet.'
              },
              {
                icon: '⏱️',
                title: 'Fast Drying Process',
                desc: 'Our dry-steam technology uses minimal moisture, allowing surfaces to dry significantly faster than traditional methods.'
              },
              {
                icon: '💎',
                title: 'Superior Results',
                desc: 'Get a level of cleanliness that manual scrubbing simply cannot achieve, especially in pores and crevices.'
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
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
              className="inline-flex items-center gap-2 bg-white text-[#091a33] px-8 py-4 rounded-full font-bold text-sm border-2 border-gray-200 hover:border-[#529e00] hover:bg-gray-50 transition-all shadow-md"
            >
              Book Steam Cleaning on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Expert Steam <span className="text-[#529e00]">Cleaning Specialists</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Professional Grade',
                desc: 'We use the latest high-temperature dry steam equipment for professional results.'
              },
              {
                icon: Star,
                title: 'Trained Operators',
                desc: 'Our staff is specifically trained in heat-cleaning protocols for various materials.'
              },
              {
                icon: Clock,
                title: 'Timely Service',
                desc: 'Efficient steam application that respects your time and schedule.'
              },
              {
                icon: CheckCircle2,
                title: 'Deep Sanitization',
                desc: 'Goes beyond surface cleaning to kill hidden germs and bacteria effectively.'
              },
              {
                icon: Sparkles,
                title: 'Chemical Free',
                desc: 'A pure cleaning method that protects indoor air quality and health.'
              },
              {
                icon: Wind,
                title: 'Odor Neutralization',
                desc: 'Natural steam power to remove stubborn smells from pets, smoke, or cooking.'
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 bg-[#529e00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#529e00]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#091a33] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#529e00] to-[#3d7700] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our Steam Cleaning Workflow
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Precision and care at every step for a spotless, germ-free home
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Surface Check', desc: 'Identifying material types to apply the correct steam temperature' },
              { step: '02', title: 'Vacuuming', desc: 'Pre-removal of loose dust and debris before steam application' },
              { step: '03', title: 'Steam Blast', desc: 'High-pressure steam injection to loosen dirt and kill bacteria' },
              { step: '04', title: 'Extraction', desc: 'Final wipe-down or extraction of lifted dirt for a perfect finish' },
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
              Steam Cleaning <span className="text-[#529e00]">FAQs</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Is steam cleaning safe for all types of furniture?',
                a: 'Most fabrics and hard surfaces are safe for steam. Our experts assess each piece of furniture beforehand to ensure the right heat levels are used.'
              },
              {
                q: 'How long does it take for items to dry?',
                a: 'Since we use dry steam (low moisture), most upholstery and carpets dry within 1-2 hours.'
              },
              {
                q: 'Can steam cleaning remove old stains?',
                a: 'Steam is excellent for breaking down tough stains. While some permanent discolorations may remain, steam offers the best chance of removal.'
              },
              {
                q: 'Does it really kill bed bugs and mites?',
                a: 'Yes! Steam temperatures above 60°C instantly kill dust mites, bed bugs, and their eggs on contact.'
              },
              {
                q: 'Do I need to move furniture?',
                a: 'We recommend clearing small items. Our team can help move light furniture to ensure we reach all areas.'
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-[#091a33]">{faq.q}</span>
                  <div className="w-8 h-8 bg-[#529e00]/10 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#529e00] rotate-90" />
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
          <div className="bg-gradient-to-r from-[#e8c600] to-[#d4b600] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Get Your Home Sanitized Today
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Choose the healthiest way to clean. Book our premium steam deep cleaning service now.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Steam Deep Cleaning service"
                className="inline-flex items-center gap-3 bg-[#091a33] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#0a1f3d] transition-all shadow-lg"
              >
                Book Steam Cleaning Now
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