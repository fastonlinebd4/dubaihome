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
  UtensilsCrossed // Representing kitchen context
} from 'lucide-react';

export default function KitchenDeepCleaningPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff9900]/10 border border-[#ff9900]/20 rounded-full">
                <UtensilsCrossed className="w-4 h-4 text-[#ff9900]" />
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Hygienic Cooking Space</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Professional Kitchen <span className="text-[#ff9900]">Deep Cleaning</span> Dubai
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
Our kitchen deep cleaning service targets grease buildup, food residue, and hidden bacteria. We clean cabinets, countertops, backsplashes, appliances, and exhaust areas thoroughly. Degreasing and sanitization ensure a hygienic cooking environment. Ideal for residential and commercial kitchens requiring food-safe standards. We remove stubborn oil stains from tiles and surfaces. Appliances are cleaned inside and outside for maximum freshness. Eco-friendly products protect surfaces while ensuring deep disinfection. Enjoy a sparkling clean and odor-free kitchen.              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Kitchen Deep Cleaning service"
                  className="inline-flex items-center gap-3 bg-[#ff9900] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e68a00] transition-all shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="tel:+971565429198"
                  className="inline-flex items-center gap-3 bg-white text-[#091a33] px-8 py-4 rounded-xl font-bold text-sm border-2 border-gray-200 hover:border-[#ff9900] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#ff9900]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#ff9900]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Food</p>
                    <p className="text-sm font-black text-[#091a33]">Safe Clean</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Grease</p>
                    <p className="text-sm font-black text-[#091a33]">Free Finish</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/kitchen-deep-cleaning-hero.jpg"
                  alt="Kitchen Deep Cleaning Dubai"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a33]/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#ff9900] rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">99%</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Oil Removal</p>
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
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#ff9900] to-[#e68a00] rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <UtensilsCrossed className="w-12 h-12 text-white" />
            </div>

            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Kitchen Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">Complete Degreasing & Sanitization Checklist</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Column 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-[32px] p-8 space-y-4 border border-white/10">
                {[
                  'Stove & Hob Degreasing',
                  'Exhaust Fan & Hood Cleaning',
                  'Countertop & Backsplash Scrubbing',
                  'Cabinet Interior & Exterior Wiping',
                  'Sink & Tap Sanitization',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#ff9900] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <p className="text-white font-bold text-base">{item}</p>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-[32px] p-8 space-y-4 border border-white/10">
                {[
                  'Oven & Microwave Deep Clean',
                  'Refrigerator Exterior & Dusting',
                  'Floor Scrubbing & Stain Removal',
                  'Wall Tile Steam Cleaning',
                  'Drain Odor Neutralization',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#ff9900] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
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
              Comprehensive <span className="text-[#ff9900]">Kitchen Scope</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our professional team targets the areas where grease and germs hide the most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Heavy Degreasing',
                items: [
                  'Removal of thick oil layers',
                  'Hood filter cleaning',
                  'Cooktop deep scrubbing',
                  'Grime removal from knobs',
                ]
              },
              {
                title: 'Appliance Cleaning',
                items: [
                  'Microwave interior/exterior',
                  'Oven burnt residue removal',
                  'Fridge rubber seal cleaning',
                  'Dishwasher exterior wiping',
                ]
              },
              {
                title: 'Storage & Surfaces',
                items: [
                  'Inside kitchen cabinets',
                  'Polishing granite/marble',
                  'Backsplash steam clean',
                  'Shelf reorganization dusting',
                ]
              },
              {
                title: 'Sanitization',
                items: [
                  'Killing bacteria on counters',
                  'Sink lime-scale removal',
                  'Disinfecting handles/switches',
                  'Food-safe cleaning agents',
                ]
              },
              {
                title: 'Floor & Walls',
                items: [
                  'Wall tile grout cleaning',
                  'Removing sticky residues',
                  'Skirting board wiping',
                ]
              },
              {
                title: 'Waste & Hygiene',
                items: [
                  'Bin area sanitization',
                  'Drainage pipe flushing',
                  'Eliminating kitchen odors',
                  'Pest-prevention cleaning',
                ]
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
                      <CheckCircle2 className="w-4 h-4 text-[#ff9900] flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-6">
                Why Hire <span className="text-[#ff9900]">Experts</span> for Your Kitchen?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Fire Safety',
                    desc: 'Accumulated grease in exhaust hoods is a major fire hazard. Our deep degreasing reduces this risk significantly.'
                  },
                  {
                    title: 'Bacterial Protection',
                    desc: 'Kitchens are breeding grounds for E. coli and Salmonella. We use hospital-grade disinfectants to keep you safe.'
                  },
                  {
                    title: 'Remove Stubborn Odors',
                    desc: 'Old grease and food particles cause lingering smells. We neutralize odors at the source for a fresh kitchen.'
                  },
                  {
                    title: 'Extend Appliance Life',
                    desc: 'Regularly cleaned ovens and hobs work more efficiently and last longer when free from carbon buildup.'
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
                  src="/images/clean-kitchen-lifestyle.jpg"
                  alt="Spotless Kitchen Service"
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
            <p className="text-[#ff9900] font-bold text-sm uppercase tracking-widest mb-3">ELITE CLEANING</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              DUBAI HOME CLEANING SERVICES <br />
              <span className="text-[#ff9900]">Kitchen Advantage</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🍳',
                title: 'Stain Expertise',
                desc: 'Specialized chemicals to remove tough turmeric and spice stains from countertops.'
              },
              {
                icon: '🛡️',
                title: 'Food-Safe Agents',
                desc: 'We use non-toxic, eco-friendly cleaners that are safe for surfaces where food is prepared.'
              },
              {
                icon: '💨',
                title: 'Steam Cleaning',
                desc: 'High-pressure steam used for tile grout and tight corners to kill germs instantly.'
              },
              {
                icon: '✨',
                title: 'Mirror Finish',
                desc: 'We polish stainless steel and chrome fixtures to a brilliant, streak-free shine.'
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                <div className="w-16 h-16 bg-[#ff9900]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-3xl">
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
              Kitchen Cleaning <span className="text-[#ff9900]">FAQs</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Do I need to empty my kitchen cabinets?',
                a: 'If you want us to clean the inside of the cabinets, we recommend removing items. However, we can also clean just the exterior if you prefer.'
              },
              {
                q: 'Will you clean inside the oven and fridge?',
                a: 'Yes, our Deep Kitchen Cleaning includes the interior of the microwave and oven. Fridge interior cleaning can be added as an extra service.'
              },
              {
                q: 'How long does a kitchen deep clean take?',
                a: 'Depending on the size and grease level, it typically takes 3 to 5 hours for a professional team to complete.'
              },
              {
                q: 'Are the cleaning chemicals safe for food preparation?',
                a: 'Absolutely. We use professional-grade, food-safe detergents that leave no harmful residues on your counters or stovetops.'
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-[#fcfcfc] rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-[#091a33]">{faq.q}</span>
                  <div className="w-8 h-8 bg-[#ff9900]/10 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#ff9900] rotate-90" />
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
          <div className="bg-[#ff9900] rounded-3xl p-8 md:p-12 text-center shadow-2xl text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              A Sparkling Clean Kitchen Awaits!
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Ready to enjoy a grease-free, hygienic cooking space? Book our professional team today.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Kitchen Deep Cleaning service"
                className="inline-flex items-center gap-3 bg-[#091a33] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#0a1f3d] transition-all shadow-lg"
              >
                Book Your Cleaning
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="tel:+971565429198"
                className="inline-flex items-center gap-3 bg-white text-[#ff9900] px-8 py-4 rounded-xl font-bold text-sm border-2 border-white hover:bg-gray-100 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call +971 56 542 9198
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