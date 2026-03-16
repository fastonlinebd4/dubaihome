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
  Wind
} from 'lucide-react';

export default function BalconyDeepCleaningPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#007bff]/10 border border-[#007bff]/20 rounded-full">
                <Wind className="w-4 h-4 text-[#007bff]" />
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Outdoor Freshness</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Premium Balcony Deep Cleaning In <span className="text-[#007bff]">Dubai</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Our <strong>balcony deep cleaning service</strong> removes{' '}
                <strong>dust, sand buildup, bird droppings, and stains</strong> caused by Dubai's climate. We scrub{' '}
                <strong>floors, railings, walls, and drainage areas</strong> carefully.{' '}
                <strong>Special cleaning techniques</strong> restore tiles and outdoor surfaces without damage. This service{' '}
                <strong>improves hygiene and enhances outdoor comfort</strong>. Ideal for{' '}
                <Link href="/apartment-deep-cleaning" className="text-[#007bff] underline underline-offset-2 hover:text-[#0056b3] transition-colors font-bold">high-rise apartments</Link>{' '}and{' '}
                <Link href="/villa-deep-cleaning" className="text-[#007bff] underline underline-offset-2 hover:text-[#0056b3] transition-colors font-bold">villas</Link>{' '}
                exposed to harsh weather. We ensure{' '}
                <strong>proper waste removal and safe cleaning methods</strong>. Clean balconies{' '}
                <strong>increase property appeal and usability</strong>. Enjoy a fresh and well-maintained outdoor space.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Balcony Deep Cleaning service"
                  className="inline-flex items-center gap-3 bg-[#007bff] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#0056b3] transition-all shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="tel:+971565429198"
                  className="inline-flex items-center gap-3 bg-white text-[#091a33] px-8 py-4 rounded-xl font-bold text-sm border-2 border-gray-200 hover:border-[#007bff] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#007bff]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#007bff]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">100%</p>
                    <p className="text-sm font-black text-[#091a33]">Hygienic</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Top</p>
                    <p className="text-sm font-black text-[#091a33]">Rated Service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/balcony-cleaning-hero.jpg"
                  alt="Balcony Deep Cleaning Dubai"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a33]/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#007bff] rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">Spotless</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Guarantee</p>
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
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#007bff] to-[#0056b3] rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Sparkles className="w-12 h-12 text-white" />
            </div>

            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Balcony Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">A Comprehensive Checklist for a Perfect Outdoor Space</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Column 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-[32px] p-8 space-y-4 border border-white/10">
                {[
                  { label: 'Pressure Washing of Floors', href: '/outside-power-wash' },
                  { label: 'Glass Railing & Window Cleaning', href: '/outside-window-cleaning' },
                  { label: 'Wall & Ceiling Dusting', href: null },
                  { label: 'Removal of Pigeon Droppings', href: null },
                  { label: 'Drain Cleaning & Unblocking', href: null },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#007bff] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    {item.href ? (
                      <Link href={item.href} className="text-white font-bold text-base hover:text-[#007bff] underline underline-offset-2 transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <p className="text-white font-bold text-base">{item.label}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-[32px] p-8 space-y-4 border border-white/10">
                {[
                  { label: 'Furniture Dusting & Wiping', href: null },
                  { label: 'AC Unit Exterior Cleaning', href: '/ac-duct-cleaning' },
                  { label: 'Light Fixtures Sanitization', href: null },
                  { label: 'Floor Scrubbing & Polishing', href: '/floor-deep-cleaning-services' },
                  { label: 'Final Disinfection Spray', href: null },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#007bff] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    {item.href ? (
                      <Link href={item.href} className="text-white font-bold text-base hover:text-[#007bff] underline underline-offset-2 transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <p className="text-white font-bold text-base">{item.label}</p>
                    )}
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
              Our Professional <span className="text-[#007bff]">Cleaning Scope</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We cover every inch of your balcony to ensure it's safe, clean, and ready for use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Floor Restoration',
                href: '/floor-deep-cleaning-services',
                items: [
                  { label: 'High-pressure water jetting', href: '/outside-power-wash' },
                  { label: 'Deep scrubbing of tiles/decks', href: null },
                  { label: 'Grout cleaning & whitening', href: null },
                  { label: 'Removing oil & rust stains', href: null },
                ]
              },
              {
                title: 'Glass & Railing',
                href: '/outside-window-cleaning',
                items: [
                  { label: 'Crystal clear glass cleaning', href: null },
                  { label: 'Metal railing polishing', href: null },
                  { label: 'Dust removal from crevices', href: null },
                  { label: 'Streaks-free finish', href: null },
                ]
              },
              {
                title: 'Wall & Ceiling',
                href: null,
                items: [
                  { label: 'Spider web removal', href: null },
                  { label: 'Dusting of painted walls', href: null },
                  { label: 'Cleaning of skirting boards', href: null },
                  { label: 'Removing outdoor marks', href: null },
                ]
              },
              {
                title: 'Pest Debris Removal',
                href: null,
                items: [
                  { label: 'Safe pigeon poop removal', href: null },
                  { label: 'Nests clearing (if vacant)', href: null },
                  { label: 'Disinfecting affected areas', href: null },
                  { label: 'Odor elimination', href: null },
                ]
              },
              {
                title: 'Fixtures & AC',
                href: '/ac-duct-cleaning',
                items: [
                  { label: 'AC outdoor unit dusting', href: '/ac-duct-cleaning' },
                  { label: 'Light switch cleaning', href: null },
                  { label: 'Exterior lamp wiping', href: null },
                  { label: 'Door frame deep cleaning', href: null },
                ]
              },
              {
                title: 'Furniture Care',
                href: null,
                items: [
                  { label: 'Wiping outdoor tables/chairs', href: null },
                  { label: 'Cushion surface vacuuming', href: '/sofa-shampooing' },
                  { label: 'Removing sand from gaps', href: null },
                  { label: 'Final detailing check', href: null },
                ]
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                {service.href ? (
                  <Link href={service.href}>
                    <h3 className="text-xl font-black text-[#091a33] mb-4 hover:text-[#007bff] transition-colors">{service.title}</h3>
                  </Link>
                ) : (
                  <h3 className="text-xl font-black text-[#091a33] mb-4">{service.title}</h3>
                )}
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#007bff] flex-shrink-0 mt-1" />
                      {item.href ? (
                        <Link href={item.href} className="text-sm text-[#007bff] font-semibold underline underline-offset-2 hover:text-[#0056b3] transition-colors">
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

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-6">
                Why Do You Need <span className="text-[#007bff]">Professional</span> Balcony Cleaning?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Health Risks from Pigeons',
                    desc: 'Pigeon droppings carry diseases and parasites. We safely remove and sanitize these areas for your protection.',
                    href: null,
                  },
                  {
                    title: 'Dubai Dust Accumulation',
                    desc: 'Frequent sandstorms leave thick layers of dust that regular mopping can\'t fully remove from porous outdoor tiles.',
                    href: '/outside-deep-cleaning',
                  },
                  {
                    title: 'Preserve Your Property',
                    desc: 'Regular cleaning prevents permanent staining of tiles and corrosion of metal railings caused by the humid salt air.',
                    href: '/villa-facade-cleaning-services',
                  },
                  {
                    title: 'Enhanced Leisure Space',
                    desc: 'Turn your balcony back into a usable space for morning coffee or evening relaxation without the mess.',
                    href: null,
                  },
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#e8c600] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      {point.href ? (
                        <Link href={point.href}>
                          <h3 className="text-lg font-bold text-[#091a33] mb-2 hover:text-[#007bff] transition-colors">{point.title}</h3>
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
                  src="/images/clean-balcony-view.jpg"
                  alt="Spotless Balcony View"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Advantage Section */}
      <section className="py-20 bg-[#fcfcfc] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#007bff] font-bold text-sm uppercase tracking-widest mb-3">QUALITY FIRST</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              DUBAI HOME CLEANING SERVICES <br />
              <span className="text-[#007bff]">Cleaning Advantage</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🚀',
                title: 'High-Pressure Tech',
                desc: 'We use advanced pressure washers to blast away deep-seated dirt from tiles.'
              },
              {
                icon: '🛡️',
                title: 'Eco-Safe Chemicals',
                desc: 'Our cleaning solutions are effective yet safe for your plants and pets.'
              },
              {
                icon: '🧤',
                title: 'Expert Handling',
                desc: 'Trained staff who know how to clean without splashing water into neighbors\' balconies.'
              },
              {
                icon: '✨',
                title: 'Complete Sanitization',
                desc: 'We don\'t just clean for looks; we disinfect every corner for hygiene.'
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                <div className="w-16 h-16 bg-[#007bff]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-3xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#091a33] mb-3 leading-tight">{service.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#091a33] to-[#007bff] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-12">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Dry Dusting', desc: 'Removal of loose sand and debris from all surfaces.' },
              { step: '02', title: 'Spot Treatment', desc: 'Pre-treating heavy stains and bird droppings.' },
              { step: '03', title: 'Deep Wash', desc: 'Pressure washing and scrubbing floors and railings.' },
              { step: '04', title: 'Final Shine', desc: 'Drying and polishing glass and metal fixtures.' },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="text-5xl font-black opacity-30 mb-4">{item.step}</div>
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
              Explore Our Other <span className="text-[#007bff]">Cleaning Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of professional cleaning solutions across Dubai.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: 'Apartment Deep Cleaning', href: '/apartment-deep-cleaning' },
              { label: 'Villa Deep Cleaning', href: '/villa-deep-cleaning' },
              { label: 'Villa Facade Cleaning', href: '/villa-facade-cleaning-services' },
              { label: 'Outside Deep Cleaning', href: '/outside-deep-cleaning' },
              { label: 'Outside Power Wash', href: '/outside-power-wash' },
              { label: 'Outside Window Cleaning', href: '/outside-window-cleaning' },
              { label: 'AC Duct Cleaning', href: '/ac-duct-cleaning' },
              { label: 'Floor Deep Cleaning', href: '/floor-deep-cleaning-services' },
              { label: 'Rooftop Cleaning Services', href: '/rooftop-cleaning-services' },
              { label: 'Move In Move Out Cleaning', href: '/move-in-move-out-cleaning' },
              { label: 'Swimming Pool Cleaning', href: '/swimming-pool-cleaning' },
              { label: 'Artificial Grass Cleaning', href: '/artificial-grass-cleaning' },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold text-[#091a33] hover:border-[#007bff] hover:text-[#007bff] hover:shadow-md transition-all group"
              >
                <ArrowRight className="w-4 h-4 text-[#007bff] group-hover:translate-x-1 transition-transform flex-shrink-0" />
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
              Frequently Asked <span className="text-[#007bff]">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does a balcony deep cleaning take?',
                a: 'A standard balcony usually takes 1.5 to 3 hours, depending on the size and the level of dirt or bird droppings.'
              },
              {
                q: 'Will water leak into my neighbors balcony?',
                a: 'Our team is trained to use controlled pressure washing and manual scrubbing techniques to minimize water runoff and prevent leakage.'
              },
              {
                q: 'Can you remove bird nest stains and smells?',
                a: 'Yes, we use professional enzymes and disinfectants that break down organic waste and neutralize unpleasant odors completely.'
              },
              {
                q: 'Do I need to move the balcony furniture?',
                a: 'Our team can move light furniture to clean underneath. However, we recommend removing small or fragile items before we arrive.'
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-[#fcfcfc] rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-[#091a33]">{faq.q}</span>
                  <div className="w-8 h-8 bg-[#007bff]/10 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#007bff] rotate-90" />
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
          <div className="bg-[#007bff] rounded-3xl p-8 md:p-12 text-center shadow-2xl text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Get Your Balcony Ready For Use!
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Don't let dust and pigeon mess ruin your view. Professional cleaning is just a click away.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Balcony Deep Cleaning service"
                className="inline-flex items-center gap-3 bg-white text-[#007bff] px-8 py-4 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all shadow-lg"
              >
                Book Your Cleaning
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
