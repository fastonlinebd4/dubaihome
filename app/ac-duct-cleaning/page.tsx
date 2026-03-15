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
  Wind,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export default function ACDuctCleaningPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Premium Service</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Professional AC Duct Cleaning Services In <span className="text-[#529e00]">Dubai</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Improve <strong>indoor air quality</strong> with our professional{' '}
                <strong>AC duct cleaning services in Dubai</strong>. Over time,{' '}
                <strong>dust, mold, and allergens</strong> accumulate inside ducts, affecting airflow and health. Our technicians use{' '}
                <strong>advanced vacuum and sanitization equipment</strong> to remove deep contamination.{' '}
                <strong>Clean ducts improve cooling efficiency</strong> and reduce electricity consumption. This service is essential for{' '}
                <Link href="/villa-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">villas</Link>,{' '}
                <Link href="/apartment-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">apartments</Link>, and{' '}
                <Link href="/office-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">offices</Link>{' '}
                in Dubai's dusty climate. We ensure <strong>thorough cleaning without damaging your HVAC system</strong>. Regular AC duct cleaning helps{' '}
                <strong>prevent allergies and respiratory issues</strong>. Breathe cleaner, healthier air with our expert service.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need AC Duct Cleaning service"
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
                  src="/images/ac-duct-cleaning-hero.jpg"
                  alt="AC Duct Cleaning Dubai"
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
                    <p className="text-2xl font-black text-[#091a33]">2500+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Units Serviced</p>
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
              <Wind className="w-12 h-12 text-[#529e00]" />
            </div>

            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">AC Duct Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">We Remove Contaminants to Ensure Pure, Breathable Air</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Column 1 */}
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Internal Duct Inspection', href: null },
                  { label: 'Supply & Return Vent Cleaning', href: null },
                  { label: 'Main Duct Line Scrubbing', href: null },
                  { label: 'Filter Deep Cleaning', href: null },
                  { label: 'Blower Fan Sanitization', href: null },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#529e00] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <p className="text-[#091a33] font-bold text-base">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Cooling Coil Sterilization', href: null },
                  { label: 'Drain Pan & Pipe Cleaning', href: null },
                  { label: 'Anti-Bacterial Fogging', href: null },
                  { label: 'Mold & Mildew Removal', href: null },
                  { label: 'Air Flow Performance Test', href: null },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#529e00] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <p className="text-[#091a33] font-bold text-base">{item.label}</p>
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
              What's Included In Our AC Duct <span className="text-[#529e00]">Cleaning Services?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our 7-step clinical cleaning process ensures your entire HVAC system is free from microscopic pollutants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Inspection & Setup',
                href: null,
                items: [
                  { label: 'Full system diagnostic', href: null },
                  { label: 'Video inspection of ducts', href: null },
                  { label: 'System pressure check', href: null },
                  { label: 'Equipment calibration', href: null },
                ]
              },
              {
                title: 'Vent & Grill Cleaning',
                href: null,
                items: [
                  { label: 'Removal of all vent covers', href: null },
                  { label: 'High-pressure vent washing', href: null },
                  { label: 'Diffuser sanitization', href: null },
                  { label: 'Manual scrubbing of slots', href: null },
                  { label: 'Polishing of external grills', href: null },
                ]
              },
              {
                title: 'Mechanical Component',
                href: null,
                items: [
                  { label: 'Blower motor cleaning', href: null },
                  { label: 'Cooling coil deep wash', href: null },
                  { label: 'Condensation tray clearing', href: null },
                  { label: 'Belt and pulley check', href: null },
                  { label: 'Electrical connection dust-off', href: null },
                ]
              },
              {
                title: 'Deep Duct Scrubbing',
                href: null,
                items: [
                  { label: 'Rotary brush technology', href: null },
                  { label: 'HEPA vacuum extraction', href: null },
                  { label: 'Removing debris & dust', href: null },
                  { label: 'Corner & joint detailing', href: null },
                  { label: 'Negative air pressure cleaning', href: null },
                ]
              },
              {
                title: 'Sanitization & Fogging',
                href: '/steam-deep-cleaning',
                items: [
                  { label: 'Hospital-grade disinfectant', href: null },
                  { label: 'Anti-fungal treatment', href: null },
                  { label: 'Odor neutralization', href: null },
                  { label: 'Bio-sanitizer application', href: null },
                  { label: 'Long-lasting germ protection', href: null },
                ]
              },
              {
                title: 'Post-Clean Support',
                href: null,
                items: [
                  { label: 'Final airflow verification', href: null },
                  { label: 'System re-assembly', href: null },
                  { label: 'Before & After report', href: null },
                  { label: 'Work area cleanup', href: null },
                  { label: 'Maintenance tips session', href: null },
                ]
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                {service.href ? (
                  <Link href={service.href}>
                    <h3 className="text-xl font-black text-[#091a33] mb-4 hover:text-[#529e00] transition-colors">{service.title}</h3>
                  </Link>
                ) : (
                  <h3 className="text-xl font-black text-[#091a33] mb-4">{service.title}</h3>
                )}
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#529e00] flex-shrink-0 mt-1" />
                      {item.href ? (
                        <Link href={item.href} className="text-sm text-[#529e00] font-semibold underline underline-offset-2 hover:text-[#3d7700] transition-colors">
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-sm text-gray-600 font-medium">{item.label}</span>
                      )}
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
                Why Do You Need <span className="text-[#529e00]">AC Duct Cleaning</span> In Dubai?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Eliminate Allergens',
                    desc: 'Ducts are breeding grounds for mold and bacteria. Our cleaning helps prevent asthma, allergies, and respiratory issues.',
                    href: null,
                  },
                  {
                    title: 'Reduce Electricity Bills',
                    desc: 'Clean ducts allow your AC to work efficiently, significantly reducing energy consumption and monthly bills.',
                    href: null,
                  },
                  {
                    title: 'Remove Desert Dust',
                    desc: 'Dubai\'s fine sand penetrates AC systems easily. We remove years of accumulated sand and grit from your ductwork.',
                    href: null,
                  },
                  {
                    title: 'Better Cooling Performance',
                    desc: 'Clogged ducts restrict airflow. Deep cleaning restores maximum airflow, making your home cool down faster.',
                    href: null,
                  },
                  {
                    title: 'Eliminate Bad Odors',
                    desc: 'Musty smells often come from mold in ducts. Our sanitization process leaves your home smelling fresh and clean.',
                    href: '/steam-deep-cleaning',
                  },
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#e8c600] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      {point.href ? (
                        <Link href={point.href}>
                          <h3 className="text-lg font-bold text-[#091a33] mb-2 hover:text-[#529e00] transition-colors">{point.title}</h3>
                        </Link>
                      ) : (
                        <h3 className="text-lg font-bold text-[#091a33] mb-2">{point.title}</h3>
                      )}
                      <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/why-ac-cleaning.jpg"
                  alt="Why AC Duct Cleaning"
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
          <Wind className="w-24 h-24 text-[#529e00]" />
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#529e00] font-bold text-sm uppercase tracking-widest mb-3">WHY CHOOSE DUBAI HOME CLEANING SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Benefits of Our Specialized <br />
              <span className="text-[#529e00]">Duct Cleaning Technology</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🛠️',
                title: 'Advanced Robotic Brushing',
                desc: 'We use the latest robotic brushes to reach deep into ductwork where manual cleaning is impossible.'
              },
              {
                icon: '🧪',
                title: 'Eco-Friendly Sanitizers',
                desc: 'Our disinfectants are Dubai Municipality approved, non-toxic, and safe for babies and pets.'
              },
              {
                icon: '📸',
                title: 'Before & After Proof',
                desc: 'We provide clear video or photographic evidence of your clean ducts for total transparency.'
              },
              {
                icon: '⚡',
                title: 'Energy Efficiency',
                desc: 'Our service is designed not just to clean, but to optimize your AC system for lower power usage.'
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
              Expertise In <span className="text-[#529e00]">AC Duct Cleaning</span> Since 2010
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Certified Company',
                desc: 'Trakhees and Dubai Municipality approved AC duct cleaning specialists.',
                href: null,
              },
              {
                icon: Star,
                title: 'Expert Engineers',
                desc: 'HVAC qualified technicians who understand the mechanics of your cooling system.',
                href: null,
              },
              {
                icon: Clock,
                title: 'Timely Execution',
                desc: 'Efficient cleaning processes that minimize downtime and respect your schedule.',
                href: null,
              },
              {
                icon: CheckCircle2,
                title: 'Odor Guarantee',
                desc: 'We guarantee the removal of all organic odors caused by mold and mildew in your ducts.',
                href: null,
              },
              {
                icon: Sparkles,
                title: 'Zero Mess Policy',
                desc: 'We use industrial-grade dust containment so your home stays spotless during the process.',
                href: null,
              },
              {
                icon: Wind,
                title: 'Improved Airflow',
                desc: 'Scientifically proven increase in air velocity after our deep scrubbing process.',
                href: null,
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
              Our 4-Step Duct Cleaning Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A scientific approach to indoor air quality
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Video Inspection', desc: 'Detailed camera check to identify mold and dust accumulation points' },
              { step: '02', title: 'Mechanical Brushing', desc: 'Powerful rotary brushing to loosen stubborn debris from duct walls' },
              { step: '03', title: 'HEPA Extraction', desc: 'High-power suction to remove all loosened particles from the system' },
              { step: '04', title: 'Bio-Sanitization', desc: 'Mist fogging with eco-friendly agents to kill bacteria and fungus' },
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

      {/* Related Services Section */}
      <section className="py-16 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Explore Our Other <span className="text-[#529e00]">Cleaning Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of professional cleaning solutions across Dubai.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: 'Apartment Deep Cleaning', href: '/apartment-deep-cleaning' },
              { label: 'Villa Deep Cleaning', href: '/villa-deep-cleaning' },
              { label: 'Office Deep Cleaning', href: '/office-deep-cleaning' },
              { label: 'Steam Deep Cleaning', href: '/steam-deep-cleaning' },
              { label: 'Bathroom Deep Cleaning', href: '/bathroom-deep-cleaning' },
              { label: 'Kitchen Deep Cleaning', href: '/kitchen-deep-cleaning' },
              { label: 'Floor Deep Cleaning', href: '/floor-deep-cleaning-services' },
              { label: 'Move In Move Out Cleaning', href: '/move-in-move-out-cleaning' },
              { label: 'Balcony Deep Cleaning', href: '/balcony-deep-cleaning' },
              { label: 'Outside Window Cleaning', href: '/outside-window-cleaning' },
              { label: 'Post Construction Cleaning', href: '/post-construction-cleaning-in-dubai' },
              { label: 'Marble Polishing Services', href: '/marble-polishing-services' },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold text-[#091a33] hover:border-[#529e00] hover:text-[#529e00] hover:shadow-md transition-all group"
              >
                <ArrowRight className="w-4 h-4 text-[#529e00] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Frequently Asked <span className="text-[#529e00]">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How often should AC ducts be cleaned in Dubai?',
                a: 'Due to the dusty climate, we recommend professional cleaning every 12 to 18 months to maintain air quality and AC efficiency.'
              },
              {
                q: 'Will the cleaning process make my house dusty?',
                a: 'Not at all. We use negative air pressure and HEPA-filtered vacuums to ensure all dust is trapped inside our equipment.'
              },
              {
                q: 'Does duct cleaning really lower energy bills?',
                a: 'Yes. When ducts are clean, your AC blower doesn\'t have to work as hard, which can reduce cooling costs by up to 15-20%.'
              },
              {
                q: 'Is the sanitization spray safe for children?',
                a: 'Absolutely. We use hospital-grade, water-based disinfectants that are non-toxic and biodegradable.'
              },
              {
                q: 'How long does the service take?',
                a: 'A standard villa usually takes 4-6 hours, depending on the number of AC units and the complexity of the ductwork.'
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-[#fcfcfc] rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
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
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#e8c600] to-[#d4b600] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Breathe Cleaner Air Today!
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Schedule your professional AC duct cleaning and sterilization service now for a healthier home.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need AC Duct Cleaning service"
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
