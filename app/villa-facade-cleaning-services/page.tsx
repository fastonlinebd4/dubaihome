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
  Building2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export default function VillaFacadeCleaningPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Exterior Specialist</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Professional Villa <span className="text-[#529e00]">Facade Cleaning</span> In Dubai
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Restore your property's <strong>exterior beauty</strong> with our{' '}
                <strong>villa facade cleaning services</strong>. We clean{' '}
                <strong>exterior walls, glass panels, cladding, and architectural finishes</strong> to remove pollution stains and sand buildup.{' '}
                <strong>Advanced pressure cleaning and safe detergents</strong> ensure effective results.{' '}
                <strong>Clean facades improve curb appeal and property value</strong>. This service{' '}
                <strong>protects surfaces from long-term environmental damage</strong>. Ideal for{' '}
                <Link href="/villa-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">luxury villas</Link>{' '}
                and residential buildings. We handle <strong>delicate surfaces carefully to avoid damage</strong>. Keep your villa exterior fresh, clean, and impressive.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Villa Facade Cleaning service"
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
                    <p className="text-sm font-black text-[#091a33]">Safety Insured</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Expertise</p>
                    <p className="text-sm font-black text-[#091a33]">High-Rise Access</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/facade-cleaning-hero.jpg"
                  alt="Villa Facade Cleaning Dubai"
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
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">500+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Facades Restored</p>
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
              <h2 className="text-3xl md:text-4xl font-black mb-4">Villa Facade Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">Complete Exterior Restoration to Enhance Your Property's Curb Appeal</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Exterior Wall Washing', href: null },
                  { label: 'Window & Glass Cleaning', href: '/outside-window-cleaning' },
                  { label: 'Roof & Gutter Cleaning', href: '/rooftop-cleaning-services' },
                  { label: 'Stone & Marble Polishing', href: '/marble-polishing-services' },
                  { label: 'Balcony & Terrace Cleaning', href: '/balcony-deep-cleaning' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#529e00] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    {item.href ? (
                      <Link href={item.href} className="text-[#091a33] font-bold text-base hover:text-[#529e00] underline underline-offset-2 transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <p className="text-[#091a33] font-bold text-base">{item.label}</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Sand & Dust Removal', href: null },
                  { label: 'High-Pressure Washing', href: '/outside-power-wash' },
                  { label: 'Spider Web & Nest Removal', href: null },
                  { label: 'Pavement & Driveway Cleaning', href: '/outside-deep-cleaning' },
                  { label: 'Gate & Fence Detailing', href: null },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#529e00] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    {item.href ? (
                      <Link href={item.href} className="text-[#091a33] font-bold text-base hover:text-[#529e00] underline underline-offset-2 transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <p className="text-[#091a33] font-bold text-base">{item.label}</p>
                    )}
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
              Our Professional <span className="text-[#529e00]">Facade Cleaning Methods</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use specialized techniques to ensure every inch of your villa's exterior looks brand new
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'High-Pressure Washing',
                href: '/outside-power-wash',
                items: [
                  { label: 'Removes stubborn dirt & oil', href: null },
                  { label: 'Deep cleans stone surfaces', href: null },
                  { label: 'Safe for concrete walls', href: null },
                  { label: 'Driveway restoration', href: '/outside-deep-cleaning' },
                  { label: 'Fast & efficient cleaning', href: null },
                ]
              },
              {
                title: 'Glass & Window Detailing',
                href: '/outside-window-cleaning',
                items: [
                  { label: 'Crystal clear finishing', href: null },
                  { label: 'Streak-free cleaning', href: null },
                  { label: 'Frame & sill wiping', href: null },
                  { label: 'High-rise glass access', href: null },
                  { label: 'Hard water spot removal', href: null },
                ]
              },
              {
                title: 'Soft Wash Technology',
                href: null,
                items: [
                  { label: 'Safe for delicate paints', href: null },
                  { label: 'Biodegradable solutions', href: null },
                  { label: 'Algae & mold removal', href: null },
                  { label: 'Long-lasting protection', href: null },
                  { label: 'No damage to seals', href: null },
                ]
              },
              {
                title: 'Roof & Tiles Cleaning',
                href: '/rooftop-cleaning-services',
                items: [
                  { label: 'Debris & sand removal', href: null },
                  { label: 'Gutter clearing & washing', href: null },
                  { label: 'Preventing water leaks', href: null },
                  { label: 'Solar panel cleaning', href: null },
                  { label: 'Roof tile sanitization', href: null },
                ]
              },
              {
                title: 'Architectural Details',
                href: null,
                items: [
                  { label: 'Cladding & ACP cleaning', href: null },
                  { label: 'Metal & glass railings', href: null },
                  { label: 'Decorative stone care', href: '/marble-polishing-services' },
                  { label: 'Lighting fixture dusting', href: null },
                  { label: 'Column & pillar cleaning', href: null },
                ]
              },
              {
                title: 'Boundary & Gates',
                href: null,
                items: [
                  { label: 'Perimeter wall washing', href: null },
                  { label: 'Iron gate restoration', href: null },
                  { label: 'Interlock pressure wash', href: '/outside-power-wash' },
                  { label: 'Parking area cleaning', href: '/outside-deep-cleaning' },
                  { label: 'Signage & letter cleaning', href: null },
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
                Why Regular <span className="text-[#529e00]">Facade Cleaning</span> is Vital in Dubai?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Fight Sand & Dust Build-up',
                    desc: 'Frequent sandstorms in Dubai leave a thick layer of dust that can damage your villa\'s paint and stone over time.',
                    href: null,
                  },
                  {
                    title: 'Prevent Permanent Staining',
                    desc: 'High humidity and bird droppings can create acidic reactions, leading to permanent stains on luxury facades if not cleaned regularly.',
                    href: null,
                  },
                  {
                    title: 'Increase Curb Appeal',
                    desc: 'The exterior is the first thing people see. A clean facade significantly increases the prestige and value of your property.',
                    href: null,
                  },
                  {
                    title: 'Extend Paint Life',
                    desc: 'Removing pollutants and salt deposits helps preserve the quality of exterior coatings, saving you from expensive repainting.',
                    href: null,
                  },
                  {
                    title: 'Healthier Environment',
                    desc: 'Eliminating mold, bird nests, and dust from the outside prevents them from entering your home through vents and windows.',
                    href: '/ac-duct-cleaning',
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
                  src="/images/why-facade-cleaning.jpg"
                  alt="Importance of Facade Cleaning"
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
              <span className="text-[#529e00]">Exterior Cleaning Experts</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🏗️',
                title: 'High-Reach Specialists',
                desc: 'Equipped with the latest ladders, reach-poles, and cradles to clean even the tallest villa facades safely.'
              },
              {
                icon: '🚿',
                title: 'Advanced Equipment',
                desc: 'We use industrial-grade pressure washers and specialized brushes to remove grime without scratching surfaces.'
              },
              {
                icon: '🛡️',
                title: 'Safety First Approach',
                desc: "Our team follows strict safety protocols and uses professional PPE to ensure a risk-free cleaning environment."
              },
              {
                icon: '💎',
                title: 'Flawless Finish',
                desc: 'We don\'t just wash; we restore. Our detailed approach ensures your windows and walls shine like new.'
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
              Book Facade Cleaning On WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Best <span className="text-[#529e00]">Villa Exterior Cleaning</span> in Dubai
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Fully Insured',
                desc: 'Our cleaning services are backed by insurance, protecting your property against any accidental damage.',
                href: null,
              },
              {
                icon: Star,
                title: '10+ Years Experience',
                desc: 'A decade of experience cleaning luxury villas across Dubai, from Palm Jumeirah to Arabian Ranches.',
                href: null,
              },
              {
                icon: Clock,
                title: 'Swift Execution',
                desc: 'Efficient workflows that minimize disruption to your daily life while delivering maximum results.',
                href: null,
              },
              {
                icon: CheckCircle2,
                title: '100% Satisfaction',
                desc: 'We perform a final walkthrough with you. If you\'re not happy, we re-clean it immediately.',
                href: null,
              },
              {
                icon: Sparkles,
                title: 'Eco-Friendly Chemicals',
                desc: 'We use premium biodegradable cleaning agents that are safe for your garden plants and pets.',
                href: null,
              },
              {
                icon: Building2,
                title: 'All-Surface Expertise',
                desc: 'Whether it is limestone, paint, glass, or ACP, we know the exact pressure and chemical to use.',
                href: '/marble-polishing-services',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 bg-[#529e00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#529e00]" />
                </div>
                <div>
                  {item.href ? (
                    <Link href={item.href}>
                      <h3 className="text-lg font-bold text-[#091a33] mb-2 hover:text-[#529e00] transition-colors">{item.title}</h3>
                    </Link>
                  ) : (
                    <h3 className="text-lg font-bold text-[#091a33] mb-2">{item.title}</h3>
                  )}
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
              Our Facade Cleaning Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A detailed 4-step approach to restore your villa's beauty
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Site Inspection', desc: 'Evaluating facade material and identifying high-soiling areas' },
              { step: '02', title: 'Masking', desc: 'Protecting outdoor furniture, plants, and electrical outlets' },
              { step: '03', title: 'Active Cleaning', desc: 'Systematic washing using pressure spray or specialized brushes' },
              { step: '04', title: 'Glass Polishing', desc: 'Final squeegee cleaning of windows for a sparkling finish' },
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
              { label: 'Villa Deep Cleaning', href: '/villa-deep-cleaning' },
              { label: 'Outside Window Cleaning', href: '/outside-window-cleaning' },
              { label: 'Outside Power Wash', href: '/outside-power-wash' },
              { label: 'Outside Deep Cleaning', href: '/outside-deep-cleaning' },
              { label: 'Rooftop Cleaning Services', href: '/rooftop-cleaning-services' },
              { label: 'Balcony Deep Cleaning', href: '/balcony-deep-cleaning' },
              { label: 'Marble Polishing Services', href: '/marble-polishing-services' },
              { label: 'AC Duct Cleaning', href: '/ac-duct-cleaning' },
              { label: 'Apartment Deep Cleaning', href: '/apartment-deep-cleaning' },
              { label: 'Post Construction Cleaning', href: '/post-construction-cleaning-in-dubai' },
              { label: 'Move In Move Out Cleaning', href: '/move-in-move-out-cleaning' },
              { label: 'Office Deep Cleaning', href: '/office-deep-cleaning' },
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
              Common <span className="text-[#529e00]">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Will high-pressure washing damage my villa\'s paint?',
                a: 'Not at all. We use adjustable pressure settings and "Soft Wash" techniques for painted surfaces to ensure zero damage while removing all dirt.'
              },
              {
                q: 'How often should I clean my villa facade in Dubai?',
                a: 'Due to sandstorms and dust, we recommend a professional facade clean every 6 months to maintain the exterior condition.'
              },
              {
                q: 'Do you clean high-reach windows on 2-story villas?',
                a: 'Yes, we are equipped with water-fed poles and specialized ladders to reach high areas safely and effectively.'
              },
              {
                q: 'Do I need to provide water or electricity?',
                a: 'Typically, we use the client\'s water connection. If electricity is needed for specialized equipment, we will coordinate with you.'
              },
              {
                q: 'How long does a full facade clean take?',
                a: 'For a standard 4-bedroom villa, it usually takes 4-6 hours depending on the level of cleaning required.'
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
              Make Your Villa Shine Again!
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Book your professional villa facade cleaning today and give your home the luxury look it deserves.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Villa Facade Cleaning service"
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
