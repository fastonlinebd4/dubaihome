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
  Warehouse
} from 'lucide-react';

export default function RooftopCleaningPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Exterior Care</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Professional Rooftop Cleaning Services In <span className="text-[#529e00]">Dubai</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
Protect your property with our professional rooftop cleaning services in Dubai. We remove accumulated dust, sand, leaves, debris, and mold growth from rooftops. Blocked drainage systems are cleared to prevent water damage and leakage. Regular rooftop cleaning extends structural durability and prevents costly repairs. Ideal for villas, commercial buildings, and warehouses. Our team uses safe access methods and proper safety equipment. We ensure thorough cleaning without damaging roofing materials. Maintain your roof’s performance and longevity with expert care.              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Rooftop Cleaning service"
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
                    <p className="text-xs font-bold text-gray-500 uppercase">5.0 Rating</p>
                    <p className="text-sm font-black text-[#091a33]">Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/rooftop-cleaning-hero.jpg"
                  alt="Rooftop Cleaning Dubai"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a33]/20 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#529e00] rounded-full flex items-center justify-center">
                    <Warehouse className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">800+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Roofs Restored</p>
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
          <div className="relative bg-gradient-to-br from-[#529e00] to-[#3d7700] rounded-[60px] p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#c5e899] to-[#a8d96e] rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Warehouse className="w-12 h-12 text-[#529e00]" />
            </div>
            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Rooftop Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">Professional Exterior Cleaning to Preserve Your Property Quality</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  'Loose Debris & Leaf Removal',
                  'Sand & Dust Extraction',
                  'High-Pressure Tile Washing',
                  'Gutter & Drain Clearing',
                  'Algae & Moss Treatment',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#529e00] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <p className="text-[#091a33] font-bold text-base">{item}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  'Stain & Bird Dropping Removal',
                  'Solar Panel Dusting (Optional)',
                  'AC Outdoor Unit Area Cleaning',
                  'Edge & Parapet Wall Scrubbing',
                  'Final Inspection for Leaks',
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
              What's Included In Our Rooftop <span className="text-[#529e00]">Cleaning Services?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our specialized exterior team ensures every inch of your rooftop is sanitized and functional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Debris Management',
                items: [
                  'Large trash & debris removal',
                  'Leaf & branch clearing',
                  'Construction residue cleanup',
                  'Bird nest removal (safe)',
                  'Bagging and disposal',
                ]
              },
              {
                title: 'Surface Deep Clean',
                items: [
                  'Jet pressure washing',
                  'Tough stain treatment',
                  'Grout & tile scrubbing',
                  'Eco-friendly degreasing',
                  'Parapet wall washing',
                ]
              },
              {
                title: 'Drainage Care',
                items: [
                  'Drain pipe unclogging',
                  'Gutter deep cleaning',
                  'Water flow testing',
                  'Silt & sand removal',
                  'Outlet screen cleaning',
                ]
              },
              {
                title: 'Mechanical Areas',
                items: [
                  'AC platform cleaning',
                  'Exhaust fan exterior wiping',
                  'Pipe insulation check',
                  'Mechanical debris removal',
                  'Vent cover dusting',
                ]
              },
              {
                title: 'Protection Treatment',
                items: [
                  'Anti-fungal spray application',
                  'Dust-repellent coating',
                  'Mildew prevention',
                  'Surface sanitization',
                  'Tile inspection report',
                ]
              },
              {
                title: 'Finishing Touches',
                items: [
                  'Staircase to roof cleaning',
                  'Access door sanitization',
                  'Skylight glass polishing',
                  'Water tank exterior wipe',
                  'Final site walkthrough',
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
                Why Do You Need <span className="text-[#529e00]">Rooftop Cleaning</span> In Dubai?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Prevent Structural Damage',
                    desc: 'Accumulated sand and water can lead to cracks and leakage, causing expensive repairs to your interior ceilings.'
                  },
                  {
                    title: 'Improve Energy Efficiency',
                    desc: 'A clean, reflective roof absorbs less heat from the Dubai sun, lowering your AC energy consumption and bills.'
                  },
                  {
                    title: 'Drainage Security',
                    desc: 'Sandstorms often block roof drains. Regular cleaning ensures water flows freely during unexpected heavy rains.'
                  },
                  {
                    title: 'Solar Panel Performance',
                    desc: 'If you have solar panels, a clean rooftop reduces dust circulation, ensuring maximum sunlight absorption.'
                  },
                  {
                    title: 'Pest Prevention',
                    desc: 'Removing bird droppings and organic waste prevents pests and rodents from nesting on your property.'
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
                  src="/images/why-rooftop-cleaning.jpg"
                  alt="Why Rooftop Cleaning"
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
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#529e00] font-bold text-sm uppercase tracking-widest mb-3">TRUSTED BY DUBAI LANDLORDS</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Benefits of Our Professional <br />
              <span className="text-[#529e00]">Roof Maintenance</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🛠️',
                title: 'Specialized Pressure Tools',
                desc: 'We use adjustable jet washers that clean deeply without damaging roof tiles or waterproofing membranes.'
              },
              {
                icon: '🛡️',
                title: 'Waterproofing Safe',
                desc: 'Our cleaning techniques are 100% safe for all types of roof coatings, including bitumen and liquid membranes.'
              },
              {
                icon: '💧',
                title: 'Flood Prevention',
                desc: "We focus on clearing drainage outlets, the most critical part of rooftop maintenance in Dubai."
              },
              {
                icon: '📋',
                title: 'Condition Report',
                desc: 'After cleaning, we provide a basic report on any visible cracks or damages found on your roof.'
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
              Book On WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Why Choose DUBAI HOME CLEANING SERVICES For <span className="text-[#529e00]">Rooftop Cleaning</span>?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Safety Compliant',
                desc: 'Our cleaners are trained in high-altitude safety with proper harnesses and gear.'
              },
              {
                icon: Star,
                title: 'Deep Stain Removal',
                desc: 'Expertise in removing stubborn desert stains and oil marks from outdoor units.'
              },
              {
                icon: Clock,
                title: 'Swift Execution',
                desc: 'Efficient teams that complete even large rooftops within a single day.'
              },
              {
                icon: CheckCircle2,
                title: 'Guaranteed Clarity',
                desc: 'We guarantee a 100% sand-free and debris-free rooftop after our service.'
              },
              {
                icon: Sparkles,
                title: 'Eco-Cleaning',
                desc: 'Biodegradable cleaning agents that won’t harm your property or the local ecology.'
              },
              {
                icon: Warehouse,
                title: 'Modern Jet Washers',
                desc: 'Industrial-grade equipment for powerful yet controlled exterior cleaning.'
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
              Our Rooftop Cleaning Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A rigorous 4-step approach to ensure your roof is clean and safe
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Site Survey', desc: 'Identifying debris hotspots and checking drain health' },
              { step: '02', title: 'Dry Cleaning', desc: 'Manual removal of large waste, leaves, and bulk sand' },
              { step: '03', title: 'Jet Washing', desc: 'Intensive pressure washing of all tiles and surfaces' },
              { step: '04', title: 'Drain Flush', desc: 'Flushing all gutters and pipes to ensure zero blockage' },
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
              Rooftop Cleaning <span className="text-[#529e00]">FAQs</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'How often should I clean my rooftop in Dubai?',
                a: 'We recommend at least twice a year—once after the sandstorm season and once before the rainy season (winter).'
              },
              {
                q: 'Will pressure washing damage my waterproofing?',
                a: 'No, we use specialized nozzles and pressure settings specifically designed to be safe for rooftop membranes.'
              },
              {
                q: 'Do you clean solar panels as well?',
                a: 'Yes, we can include solar panel dusting and cleaning as an add-on service to your rooftop package.'
              },
              {
                q: 'Is rooftop cleaning safe for old buildings?',
                a: 'Yes, we adjust our methods for older structures, using soft-washing techniques if the tiles or grout are fragile.'
              },
              {
                q: 'Do I need to provide water or electricity?',
                a: 'Access to a water outlet is required. If not available, please inform us in advance so we can arrange solutions.'
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
              Ready to Secure Your Roof?
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Book your professional rooftop cleaning today and protect your investment from dust and damage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Rooftop Cleaning service"
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