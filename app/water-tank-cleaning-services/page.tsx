'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Check, 
  Clock, 
  Shield, 
  Star, 
  Sparkles, 
  Droplets, // Changed from Home for Water context
  ArrowRight,
  Phone,
  CheckCircle2,
  Waves
} from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import FloatingWhatsApp from '@/components/floating-whatsapp';

export default function WaterTankCleaningPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Municipal Approved</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Professional Water Tank <span className="text-[#529e00]">Cleaning Dubai</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
Ensure safe and clean water with our professional water tank cleaning services. We remove sludge, bacteria, and contaminants from residential and commercial tanks. Proper sanitization improves water quality and prevents health risks. We follow Dubai Municipality standards for safe cleaning procedures. Tanks are inspected and disinfected thoroughly. Ideal for villas, buildings, and commercial properties. Regular cleaning ensures compliance and hygiene. Protect your family and property with certified tank cleaning.              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Water Tank Cleaning service"
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
                    <p className="text-xs font-bold text-gray-500 uppercase">Top Rated</p>
                    <p className="text-sm font-black text-[#091a33]">Cleaning Experts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/water-tank-hero.jpg"
                  alt="Water Tank Cleaning Dubai"
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
                    <Droplets className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">5000+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Tanks Sanitized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task List Box Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#529e00] to-[#3d7700] rounded-[60px] p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            {/* Top Icon Badge */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#c5e899] to-[#a8d96e] rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Waves className="w-12 h-12 text-[#529e00]" />
            </div>

            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Tank Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">Multi-stage cleaning process for 100% pure water storage</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Column 1 */}
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  'Dewatering & Sludge Removal',
                  'High-Pressure Scrubbing',
                  'Wall & Floor Sanitization',
                  'Vacuuming Residual Silt',
                  'Anti-Bacterial Spray',
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
                  'UV Radiation Treatment',
                  'Chlorination Process',
                  'Float Valve Inspection',
                  'External Area Cleaning',
                  'Water Quality Testing',
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
              Our Professional Tank <span className="text-[#529e00]">Cleaning Stages</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a rigorous 6-stage cleaning process to ensure your water storage meets health standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Stage 1: Dewatering',
                items: [
                  'Full tank drainage',
                  'Surrounding area prep',
                  'Submersible pump usage',
                  'Sediment removal',
                ]
              },
              {
                title: 'Stage 2: Sludge Removal',
                items: [
                  'Manual sludge extraction',
                  'Vacuuming remaining silt',
                  'Floor debris clearing',
                  'Internal pipe checking',
                ]
              },
              {
                title: 'Stage 3: High Pressure',
                items: [
                  'Jet pressure cleaning',
                  'Stain removal from walls',
                  'Ceiling slab cleaning',
                  'Removing stubborn algae',
                ]
              },
              {
                title: 'Stage 4: Vacuuming',
                items: [
                  'Industrial vacuum suction',
                  'Micro-particle removal',
                  'Dry floor preparation',
                  'Ensuring zero residue',
                ]
              },
              {
                title: 'Stage 5: Sanitization',
                items: [
                  'Approved disinfectant spray',
                  'Bacterial elimination',
                  'Odor removal treatment',
                  'Wall surface coating',
                ]
              },
              {
                title: 'Stage 6: Testing',
                items: [
                  'pH level check',
                  'Chlorine balance test',
                  'Float valve check-up',
                  'Final safety report',
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
                Why Do You Need <span className="text-[#529e00]">Tank Cleaning</span> Regularly?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Prevent Waterborne Diseases',
                    desc: 'Stagnant water attracts bacteria like Legionella and E. coli. Regular cleaning eliminates health risks.'
                  },
                  {
                    title: 'Remove Algae & Biofilm',
                    desc: 'Warm weather in Dubai leads to rapid algae growth inside tanks, which pollutes the entire plumbing system.'
                  },
                  {
                    title: 'Extend Pipe Longevity',
                    desc: 'Sediment and sludge buildup can cause corrosion and blockages in your villa\'s internal pipelines.'
                  },
                  {
                    title: 'Clean Water for Skin/Hair',
                    desc: 'Contaminated water can cause skin irritation and hair fall. Pure water ensures better personal hygiene.'
                  },
                  {
                    title: 'Compliance with DM Rules',
                    desc: 'Dubai Municipality recommends professional cleaning every 6 months for residential properties.'
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
                  src="/images/water-tank-process.jpg"
                  alt="Professional Tank Cleaning"
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
        {/* Decorative Shapes (Same as original) */}
        <div className="absolute top-20 left-10 opacity-20">
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
            <path d="M60 10C40 30 20 60 20 90C20 110 35 130 60 130C85 130 100 110 100 90C100 60 80 30 60 10Z" fill="#529e00" opacity="0.3"/>
            <path d="M60 10L60 130" stroke="#529e00" strokeWidth="2" opacity="0.4"/>
          </svg>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#529e00] font-bold text-sm uppercase tracking-widest mb-3">ELITE WATER CARE</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Benefits of DUBAI HOME CLEANING SERVICES <br />
              <span className="text-[#529e00]">Tank Sanitization</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🛡️',
                title: 'Municipality Approved',
                desc: 'We use only eco-friendly, DM-approved chemicals that are safe for drinking water.'
              },
              {
                icon: '🔬',
                title: 'Micro-Clean Technology',
                desc: 'Our advanced suction and UV tools remove particles as small as 5 microns from your tank.'
              },
              {
                icon: '⏱️',
                title: 'Swift & Efficient',
                desc: 'We complete most residential tanks within 2-4 hours, minimizing water supply disruption.'
              },
              {
                icon: '📄',
                title: 'Detailed Certification',
                desc: 'Receive a cleaning certificate and water test report after every successful service.'
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
              Book Service Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Icons Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Expert Water Tank <span className="text-[#529e00]">Cleaning Team</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Licensed & Insured',
                desc: 'Registered cleaning company ensuring safety and professional standards for your property.'
              },
              {
                icon: Star,
                title: 'DM Certified Staff',
                desc: 'Our team is specifically trained for confined space entry and water sanitization.'
              },
              {
                icon: Clock,
                title: 'Punctual Service',
                desc: 'We value your time. Our team arrives on schedule with all required equipment.'
              },
              {
                icon: CheckCircle2,
                title: 'Quality Check',
                desc: 'Post-cleaning inspection to ensure no residue or contaminants are left behind.'
              },
              {
                icon: Sparkles,
                title: 'Non-Toxic Products',
                desc: 'Zero-odor, non-hazardous cleaning agents that don\'t affect water taste.'
              },
              {
                icon: Waves,
                title: 'All Tank Types',
                desc: 'Experts in cleaning GRP, Concrete, Polyethylene, and Stainless Steel tanks.'
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
              The Cleaning Journey
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              How we ensure your tank water is pure and crystal clear
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Inspection', desc: 'Detailed analysis of tank condition and contamination levels' },
              { step: '02', title: 'Deep Scrub', desc: 'Removal of physical impurities, sludge, and wall scaling' },
              { step: '03', title: 'Disinfection', desc: 'Sterilization using DM approved anti-bacterial agents' },
              { step: '04', title: 'Certification', desc: 'Final testing and issuance of cleaning certificate' },
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
              Tank Cleaning <span className="text-[#529e00]">FAQs</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How often should I clean my water tank?',
                a: 'Dubai Municipality recommends cleaning residential water tanks every 6 months to prevent bacterial growth and sediment buildup.'
              },
              {
                q: 'Is the water safe to use immediately after cleaning?',
                a: 'Yes, we use food-grade, approved disinfectants that are safe. We recommend flushing the taps for 2 minutes after we finish.'
              },
              {
                q: 'Do you provide a cleaning certificate?',
                a: 'Yes, we provide a professional cleaning certificate that can be used for building management or municipality records.'
              },
              {
                q: 'How long does the process take?',
                a: 'A standard villa water tank usually takes between 2 to 4 hours depending on the size and dirt level.'
              },
              {
                q: 'Do I need to empty the tank before you arrive?',
                a: 'No, our team will handle the drainage. However, we suggest not refilling it right before our arrival to avoid water wastage.'
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
              Get Pure Water Today!
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Don't compromise on your health. Schedule a professional tank inspection and cleaning service now.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Water Tank Cleaning service"
                className="inline-flex items-center gap-3 bg-[#091a33] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#0a1f3d] transition-all shadow-lg"
              >
                Book Now on WhatsApp
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