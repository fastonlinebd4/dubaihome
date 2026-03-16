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
  Wind,
  Waves
} from 'lucide-react';

export default function MattressCleaningPage() {
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
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Hygiene Service</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Top Mattress Deep Cleaning In <span className="text-blue-600">Dubai</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Our <strong>mattress cleaning service</strong> eliminates{' '}
                <strong>dust mites, allergens, bacteria, and stains</strong> that accumulate over time. We use{' '}
                <strong>steam and extraction methods</strong> for deep sanitization. This service{' '}
                <strong>improves sleep quality and indoor air hygiene</strong>. Ideal for{' '}
                <Link href="/apartment-deep-cleaning" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors font-bold">homes</Link>,{' '}
                hotels, and furnished apartments. We target{' '}
                <strong>odor-causing bacteria and hidden contamination</strong>.{' '}
                <strong>Eco-friendly solutions</strong> ensure fabric protection. Regular cleaning{' '}
                <strong>extends mattress lifespan</strong>. Enjoy a cleaner, healthier sleeping environment. This service pairs perfectly with{' '}
                <Link href="/sofa-shampooing" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors font-bold">sofa shampooing</Link>{' '}and{' '}
                <Link href="/steam-deep-cleaning" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors font-bold">steam deep cleaning</Link>.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Mattress Deep Cleaning service"
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
                    <p className="text-xs font-bold text-gray-500 uppercase">Sanitized</p>
                    <p className="text-sm font-black text-[#091a33]">100% Germ Free</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">5.0 Rating</p>
                    <p className="text-sm font-black text-[#091a33]">Sleep Quality</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mattress-cleaning-hero.jpg"
                  alt="Mattress Deep Cleaning Dubai"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a33]/20 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Wind className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">Fresh</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Odor Removal</p>
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
              <Waves className="w-12 h-12 text-white" />
            </div>

            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Mattress Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">Deep Sanitization for Your Family's Health</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'HEPA UV Vacuuming', href: null },
                  { label: 'Steam Disinfection', href: '/steam-deep-cleaning' },
                  { label: 'Stain Pre-treatment', href: null },
                  { label: 'Shampooing & Scrubbing', href: '/sofa-shampooing' },
                  { label: 'Bacteria Elimination', href: null },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    {item.href ? (
                      <Link href={item.href} className="text-[#091a33] font-bold text-base hover:text-blue-600 underline underline-offset-2 transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <p className="text-[#091a33] font-bold text-base">{item.label}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Dust Mite Removal', href: null },
                  { label: 'Odor Neutralization', href: null },
                  { label: 'Fungi & Mold Treatment', href: null },
                  { label: 'Extraction of Dirt', href: null },
                  { label: 'Fabric Refreshing', href: '/Curtain-uv-and-steam-machine' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    {item.href ? (
                      <Link href={item.href} className="text-[#091a33] font-bold text-base hover:text-blue-600 underline underline-offset-2 transition-colors">
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
              Our Mattress <span className="text-blue-600">Deep Cleaning Scope</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go beyond the surface to ensure your sleeping environment is medically clean and allergen-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Dust Mite Removal',
                href: null,
                items: [
                  { label: 'Powerful HEPA vacuuming', href: null },
                  { label: 'Micro-dust extraction', href: null },
                  { label: 'Allergen elimination', href: null },
                  { label: 'Anti-dust mite spray', href: null },
                ]
              },
              {
                title: 'Stain Treatment',
                href: null,
                items: [
                  { label: 'Sweat stain removal', href: null },
                  { label: 'Spill & spot cleaning', href: null },
                  { label: 'Eco-friendly shampoo', href: null },
                  { label: 'Safe fabric chemicals', href: null },
                ]
              },
              {
                title: 'Sanitization',
                href: '/steam-deep-cleaning',
                items: [
                  { label: 'High-temp steam kill', href: '/steam-deep-cleaning' },
                  { label: 'Bacteria disinfection', href: null },
                  { label: 'UV-C light treatment', href: null },
                  { label: 'Germ protection', href: null },
                ]
              },
              {
                title: 'Odor Control',
                href: null,
                items: [
                  { label: 'Urine smell removal', href: null },
                  { label: 'Dampness treatment', href: null },
                  { label: 'Fresh scent finish', href: null },
                  { label: 'Deodorizing spray', href: null },
                ]
              },
              {
                title: 'Dual-Side Clean',
                href: null,
                items: [
                  { label: 'Front side deep wash', href: null },
                  { label: 'Back side sanitization', href: null },
                  { label: 'Border & edge cleaning', href: null },
                  { label: 'Surface refreshing', href: null },
                ]
              },
              {
                title: 'Health Protection',
                href: null,
                items: [
                  { label: 'Non-toxic products', href: null },
                  { label: 'Safe for infants', href: null },
                  { label: 'Asthma-friendly care', href: '/ac-duct-cleaning' },
                  { label: 'Final quality check', href: null },
                ]
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                {service.href ? (
                  <Link href={service.href}>
                    <h3 className="text-xl font-black text-[#091a33] mb-4 hover:text-blue-600 transition-colors">{service.title}</h3>
                  </Link>
                ) : (
                  <h3 className="text-xl font-black text-[#091a33] mb-4">{service.title}</h3>
                )}
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                      {item.href ? (
                        <Link href={item.href} className="text-sm text-blue-600 font-semibold underline underline-offset-2 hover:text-blue-800 transition-colors">
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
                Why Do You Need <span className="text-blue-600">Mattress Deep Cleaning?</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Eliminate Dust Mites',
                    desc: 'Millions of dust mites live in your mattress. Professional cleaning is the only way to remove them completely.',
                    href: null,
                  },
                  {
                    title: 'Prevent Allergies',
                    desc: 'Reduce symptoms of asthma, eczema, and sneezing by removing allergens trapped inside the fabric.',
                    href: '/ac-duct-cleaning',
                  },
                  {
                    title: 'Better Sleep Quality',
                    desc: 'A clean, fresh-smelling mattress leads to deeper sleep and improved overall health.',
                    href: null,
                  },
                  {
                    title: 'Remove Hard Stains',
                    desc: 'Sweat, spills, and body oils create unhygienic stains that require professional extraction.',
                    href: null,
                  },
                  {
                    title: 'Safe for Kids & Pets',
                    desc: 'We use 100% eco-friendly and non-toxic solutions to ensure your family sleeps in a safe environment.',
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
                          <h3 className="text-lg font-bold text-[#091a33] mb-2 hover:text-blue-600 transition-colors">{point.title}</h3>
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
                  src="/images/why-mattress-cleaning.jpg"
                  alt="Why Mattress Deep Cleaning"
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
            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">ELITE CARE</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              DUBAI HOME CLEANING SERVICES <br />
              <span className="text-blue-600">Mattress Care Benefits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🦠',
                title: '99% Germ Kill',
                desc: 'Our steam and UV-C technology eliminates almost all bacteria and viruses from your bed.'
              },
              {
                icon: '🌿',
                title: 'Eco-Friendly',
                desc: 'We use chemical-free steam and organic shampoos that are 100% safe for skin contact.'
              },
              {
                icon: '🛡️',
                title: 'Pro Equipment',
                desc: 'High-power extraction machines that reach deep into the foam to pull out hidden dirt.'
              },
              {
                icon: '💰',
                title: 'Best Value',
                desc: 'Affordable rates for premium sanitization, extending the life of your expensive mattress.'
              },
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our Mattress Cleaning Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Systematic deep cleaning for total hygiene
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Inspection', desc: 'Analyzing stains and fabric type for the right treatment' },
              { step: '02', title: 'UV Vacuuming', desc: 'Powerful suction to remove mites and surface dust' },
              { step: '03', title: 'Deep Wash', desc: 'Steam and shampoo treatment for deep-seated dirt' },
              { step: '04', title: 'Final Sanitizing', desc: 'Application of protective spray and fresh scent' },
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
              Explore Our Other <span className="text-blue-600">Cleaning Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of professional cleaning solutions across Dubai.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: 'Sofa Shampooing', href: '/sofa-shampooing' },
              { label: 'Carpet Shampooing', href: '/carpet-shampooing' },
              { label: 'Curtain UV & Steam Machine', href: '/Curtain-uv-and-steam-machine' },
              { label: 'Steam Deep Cleaning', href: '/steam-deep-cleaning' },
              { label: 'Apartment Deep Cleaning', href: '/apartment-deep-cleaning' },
              { label: 'Villa Deep Cleaning', href: '/villa-deep-cleaning' },
              { label: 'AC Duct Cleaning', href: '/ac-duct-cleaning' },
              { label: 'Bathroom Deep Cleaning', href: '/bathroom-deep-cleaning' },
              { label: 'Balcony Deep Cleaning', href: '/balcony-deep-cleaning' },
              { label: 'Move In Move Out Cleaning', href: '/move-in-move-out-cleaning' },
              { label: 'Post Construction Cleaning', href: '/post-construction-cleaning-in-dubai' },
              { label: 'Water Tank Cleaning', href: '/water-tank-cleaning-services' },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold text-[#091a33] hover:border-blue-600 hover:text-blue-600 hover:shadow-md transition-all group"
              >
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform flex-shrink-0" />
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
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does mattress cleaning take?',
                a: 'It usually takes 30-60 minutes per mattress depending on the size and level of staining.'
              },
              {
                q: 'How soon can I use the mattress after cleaning?',
                a: 'If we use steam/shampoo, it may need 4-6 hours to dry completely. We use air movers to speed up the process.'
              },
              {
                q: 'Can you remove old urine stains?',
                a: 'We can significantly lighten old stains and completely remove the odor. Results depend on the fabric type.'
              },
              {
                q: 'Is the cleaning safe for babies?',
                a: 'Yes, we use 100% organic and non-toxic products that are perfectly safe for infants and sensitive skin.'
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-[#fcfcfc] rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-[#091a33]">{faq.q}</span>
                  <div className="w-8 h-8 bg-blue-600/10 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ArrowRight className="w-4 h-4 text-blue-600 rotate-90" />
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
              Wake Up Refreshed & Healthy!
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Don't let dust mites share your bed. Book your professional mattress sanitization now.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Mattress Deep Cleaning service"
                className="inline-flex items-center gap-3 bg-[#091a33] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#0a1f3d] transition-all shadow-lg"
              >
                Book Your Clean Now
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
