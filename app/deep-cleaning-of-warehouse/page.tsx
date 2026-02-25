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
  Building2, // Warehouse এর জন্য Building2 আইকন বেশি মানানসই
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Factory // ইন্ডাস্ট্রিয়াল ভাইব দেওয়ার জন্য
} from 'lucide-react';

export default function WarehouseDeepCleaningPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Industrial Grade Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Top Warehouse <span className="text-[#529e00]">Deep Cleaning</span> In Dubai
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
Our warehouse deep cleaning service is designed to handle large industrial spaces with heavy dust and debris buildup. We clean storage racks, floors, loading areas, machinery surroundings, and ventilation systems. Oil stains, industrial dirt, and accumulated grime are removed using professional equipment. A clean warehouse improves operational efficiency and workplace safety. This service reduces hazards caused by dust and slippery floors. Ideal for logistics centers, factories, and storage facilities. We follow strict safety procedures during the cleaning process. Keep your warehouse clean, organized, and compliant with professional standards.              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Warehouse Deep Cleaning service"
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
                    <p className="text-xs font-bold text-gray-500 uppercase">Health & Safety</p>
                    <p className="text-sm font-black text-[#091a33]">HSE Compliant</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Industrial Experts</p>
                    <p className="text-sm font-black text-[#091a33]">Certified Team</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/warehouse-cleaning-hero.jpg"
                  alt="Warehouse Deep Cleaning Dubai"
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
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">500+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Units Cleaned</p>
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
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#c5e899] to-[#a8d96e] rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Building2 className="w-12 h-12 text-[#529e00]" />
            </div>
            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Warehouse Deep Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">Professional Solutions for Large Scale Industrial Environments</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Column 1 */}
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  'Ceiling & High-Level Dusting',
                  'Floor Degreasing & Scrubbing',
                  'Racking & Shelving Cleaning',
                  'Loading Bay Sanitization',
                  'Ventilation & Duct Wiping',
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
                  'Forklift Mark Removal',
                  'Office & Mezzanine Cleaning',
                  'Industrial Waste Removal',
                  'Window & Skylight Detailing',
                  'Wall & Steel Beam Cleaning',
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
              What's Included In Our Warehouse <span className="text-[#529e00]">Deep Cleaning?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our industrial experts cover every square meter of your facility with heavy-duty equipment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Structural Cleaning',
                items: [
                  'Steel beam & pillar dusting',
                  'High-ceiling cobweb removal',
                  'Ductwork exterior cleaning',
                  'Wall washing & degreasing',
                  'Skylight glass cleaning',
                ]
              },
              {
                title: 'Storage & Racking',
                items: [
                  'Pallet rack dusting',
                  'Safe chemical wiping',
                  'Inventory area clearing',
                  'Vertical surface detailing',
                  'Label residue removal',
                ]
              },
              {
                title: 'Loading Bays',
                items: [
                  'Dock leveler cleaning',
                  'Shutter door washing',
                  'External ramp scrubbing',
                  'Safety barrier wiping',
                  'Waste management area',
                ]
              },
              {
                title: 'Office & Staff Areas',
                items: [
                  'Staff pantry sanitization',
                  'Restroom deep cleaning',
                  'Partition glass wiping',
                  'Furniture & desk dusting',
                ]
              },
              {
                title: 'Safety Compliance',
                items: [
                  'Fire extinguisher dusting',
                  'Safety sign cleaning',
                  'Emergency exit clearing',
                  'Ventilation grill cleaning',
                  'HSE standard inspection',
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
                Why Do You Need <span className="text-[#529e00]">Warehouse Cleaning</span> In Dubai?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Dust Control for Inventory',
                    desc: 'Dubai\'s desert environment causes rapid dust buildup, which can damage sensitive stock and electronics.'
                  },
                  {
                    title: 'Operational Safety',
                    desc: 'Clean floors prevent slips and forklift skidding, significantly reducing workplace accidents.'
                  },
                  {
                    title: 'Regulatory Compliance',
                    desc: 'Maintain Municipality and HSE standards to avoid fines and ensure a healthy workspace for staff.'
                  },
                  {
                    title: 'Pest Prevention',
                    desc: 'Deep cleaning removes potential nesting grounds for pests that can ruin stored goods.'
                  },
                  {
                    title: 'Professional Image',
                    desc: 'A pristine warehouse impresses clients and partners during site visits and audits.'
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
                  src="/images/why-warehouse-cleaning.jpg"
                  alt="Why Warehouse Deep Cleaning"
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
        <div className="absolute top-20 left-10 opacity-20">
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 10C40 30 20 60 20 90C20 110 35 130 60 130C85 130 100 110 100 90C100 60 80 30 60 10Z" fill="#529e00" opacity="0.3"/>
            <path d="M60 10L60 130" stroke="#529e00" strokeWidth="2" opacity="0.4"/>
          </svg>
        </div>
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#529e00] font-bold text-sm uppercase tracking-widest mb-3">TRUST DUBAI HOME CLEANING SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Benefits of Choosing Our <br />
              <span className="text-[#529e00]">Warehouse Specialists</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🏗️',
                title: 'High-Level Equipment',
                desc: 'We use scissor lifts and high-reach poles to clean ceilings and beams safely.'
              },
              {
                icon: '🚜',
                title: 'Industrial Machinery',
                desc: 'Equipped with heavy-duty ride-on scrubbers and industrial vacuums for fast, large-scale results.'
              },
              {
                icon: '🦺',
                title: 'HSE Certified Team',
                desc: 'Our staff are trained in industrial safety and use appropriate PPE for every task.'
              },
              {
                icon: '⏱️',
                title: 'Minimal Downtime',
                desc: 'We work around your operational schedule to ensure zero disruption to your workflow.'
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
              Contact Specialist on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Best <span className="text-[#529e00]">Warehouse Cleaning</span> Company in Dubai
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Insured & Licensed',
                desc: 'Fully insured for industrial work, giving you complete peace of mind during the cleaning.'
              },
              {
                icon: Star,
                title: 'Scale Experts',
                desc: 'Whether it\'s 5,000 or 500,000 sq.ft, we have the manpower to handle any facility size.'
              },
              {
                icon: Clock,
                title: 'Punctual Delivery',
                desc: 'We strictly adhere to project timelines to get your warehouse back in action quickly.'
              },
              {
                icon: CheckCircle2,
                title: 'Standardized Quality',
                desc: 'Follows international cleaning standards for industrial and logistics hubs.'
              },
              {
                icon: Sparkles,
                title: 'Tailored Solutions',
                desc: 'Custom cleaning plans based on your specific industry (F&B, Logistics, Pharma).'
              },
              {
                icon: Factory,
                title: 'Advanced Tech',
                desc: 'Utilizing the latest steam cleaning and degreasing technology for superior results.'
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
              Our Industrial Cleaning Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Systematic execution for massive industrial spaces
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Site Survey', desc: 'Detailed assessment of square footage and specific cleaning needs' },
              { step: '02', title: 'Safety Briefing', desc: 'Preparation of site-specific risk assessment and PPE setup' },
              { step: '03', title: 'Deep Cleaning', desc: 'Execution of high-level dusting and industrial floor scrubbing' },
              { step: '04', title: 'Handover', desc: 'Quality inspection and final walkthrough with your facility manager' },
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
              Common <span className="text-[#529e00]">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Can you clean a warehouse while operations are ongoing?',
                a: 'Yes, we can perform sectional cleaning to allow your operations to continue without full shutdown.'
              },
              {
                q: 'Do you provide height-access equipment like scissor lifts?',
                a: 'Yes, we provide all necessary access equipment and our operators are certified to use them.'
              },
              {
                q: 'What chemicals do you use for floor degreasing?',
                a: 'We use industrial-grade, non-hazardous degreasers that effectively remove oil without damaging the floor surface.'
              },
              {
                q: 'Are your cleaners trained for industrial environments?',
                a: 'Absolutely. Our team is specifically trained in warehouse safety protocols and high-reach cleaning.'
              },
              {
                q: 'Do you offer post-construction warehouse cleaning?',
                a: 'Yes, we specialize in removing construction dust and debris from new industrial units before handover.'
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
              Ready for a Spotless Warehouse?
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Get an expert consultation and free quote for your facility today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Warehouse Deep Cleaning service"
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