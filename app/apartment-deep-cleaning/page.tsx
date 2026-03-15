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
  CheckCircle2
} from 'lucide-react';

export default function ApartmentDeepCleaningPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Premium Cleaning</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Professional Apartment Deep Cleaning In <span className="text-[#529e00]">Dubai</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                <span className="font-extrabold">Dubai Home Cleaning Service</span> provides comprehensive{' '}
                <strong>apartment deep cleaning in Dubai</strong> designed to eliminate hidden dirt, bacteria, allergens, and stubborn stains from every corner of your home. Our trained professionals clean{' '}
                <strong>kitchens, bathrooms, bedrooms,{' '}
                <Link href="/balcony-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors">balconies</Link>,
                {' '}wardrobes, and appliances</strong> with precision and care. We use{' '}
                <strong>advanced cleaning equipment and eco-friendly disinfectants</strong> to ensure a safe and healthy environment. From{' '}
                <strong>tile scrubbing and grout cleaning</strong> to{' '}
                <strong>window washing and floor polishing</strong>, no detail is overlooked. This service is ideal for{' '}
                <Link href="/move-in-move-out-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">move-in, move-out</Link>,{' '}
                tenant handovers, or seasonal deep refresh. We focus on <strong>high-touch surfaces and hard-to-reach areas</strong> that regular cleaning often misses. Our goal is to restore freshness, hygiene, and comfort to your apartment. With reliable scheduling and affordable pricing, we guarantee satisfaction every time.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Apartment Deep Cleaning service"
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
                    <p className="text-xs font-bold text-gray-500 uppercase">Trusted by</p>
                    <p className="text-sm font-black text-[#091a33]">1000+ Tenants</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Top Rated</p>
                    <p className="text-sm font-black text-[#091a33]">Expert Cleaners</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/apartment-deep-cleaning-hero.jpg"
                  alt="Apartment Deep Cleaning Dubai"
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
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">100%</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Sanitized Result</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Cleaning Task Box */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#529e00] to-[#3d7700] rounded-[60px] p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            {/* Top Icon Badge */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#c5e899] to-[#a8d96e] rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Sparkles className="w-12 h-12 text-[#529e00]" />
            </div>

            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Apartment Deep Cleaning Checklist</h2>
              <p className="text-white/90 text-base font-medium">Every Corner Hand-Cleaned to Perfection</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Column 1 */}
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Kitchen Degreasing & Sanitization', href: '/kitchen-deep-cleaning' },
                  { label: 'Cabinet Interior & Exterior Cleaning', href: null },
                  { label: 'Window Track & Glass Polishing', href: '/outside-window-cleaning' },
                  { label: 'Tile Grout Scrubbing', href: null },
                  { label: 'Door Frame & Skirting Detailing', href: null },
                  { label: 'AC Vent Exterior Dusting', href: '/ac-duct-cleaning' },
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

              {/* Column 2 */}
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Full Bathroom Disinfection', href: '/bathroom-deep-cleaning' },
                  { label: 'Limescale Removal from Faucets', href: null },
                  { label: 'Balcony & Railing Cleaning', href: '/balcony-deep-cleaning' },
                  { label: 'Wall Dusting & Spot Removal', href: null },
                  { label: 'Floor Deep Scrubbing & Mopping', href: '/floor-deep-cleaning-services' },
                  { label: 'Light Switch & Socket Cleaning', href: null },
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
              Our 360° Apartment <span className="text-[#529e00]">Cleaning Scope</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detailed attention to every room. We don't just clean; we restore your home's original shine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Living & Bedrooms',
                href: null,
                items: [
                  { label: 'Ceiling fan & fixture cleaning', href: null },
                  { label: 'Wall dusting & cobweb removal', href: null },
                  { label: 'Window tracks & sills', href: '/outside-window-cleaning' },
                  { label: 'Skirting boards & door frames', href: null },
                  { label: 'Mirror & glass polishing', href: null },
                ]
              },
              {
                title: 'Kitchen Excellence',
                href: '/kitchen-deep-cleaning',
                items: [
                  { label: 'Heavy degreasing of stove/hood', href: null },
                  { label: 'Countertop & sink sanitization', href: null },
                  { label: 'Appliance exterior cleaning', href: null },
                  { label: 'Inside/outside cupboard wash', href: null },
                  { label: 'Tile backsplash scrubbing', href: null },
                ]
              },
              {
                title: 'Hygienic Bathrooms',
                href: '/bathroom-deep-cleaning',
                items: [
                  { label: 'Sanitizing toilet & shower', href: null },
                  { label: 'Removing limescale from taps', href: null },
                  { label: 'Tile & grout deep scrubbing', href: null },
                  { label: 'Mirror & glass cleaning', href: null },
                  { label: 'Exhaust fan dusting', href: null },
                  { label: 'Cabinet & shelf cleaning', href: null },
                ]
              },
              {
                title: 'Floor Deep Cleaning',
                href: '/floor-deep-cleaning-services',
                items: [
                  { label: 'Deep Cleaning of vinyl floors, concrete tiles, ceramic tiles using a scrubbing machine and wooden floors will be cleaned by vacuum mopping.', href: null },
                  { label: 'Deep Cleaning of marble-type floors and stairs using a vacuum and mopping', href: '/marble-polishing-services' },
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Premium Apartment <span className="text-[#529e00]">Cleaning Benefits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Secure & Verified',
                desc: 'All our cleaners are background-checked and fully insured for your peace of mind.',
                href: null,
              },
              {
                icon: Sparkles,
                title: 'German Equipment',
                desc: 'We use industrial-grade steam machines and floor scrubbers for the best results.',
                href: '/steam-deep-cleaning',
              },
              {
                icon: CheckCircle2,
                title: 'Eco-Friendly Chemicals',
                desc: 'DM-approved, non-toxic cleaning agents that are safe for your family and pets.',
                href: null,
              },
              {
                icon: Clock,
                title: 'Same Day Service',
                desc: 'Need an urgent move-in clean? We offer flexible scheduling and emergency bookings.',
                href: '/move-in-move-out-cleaning',
              },
              {
                icon: Star,
                title: 'Quality Guaranteed',
                desc: "Not satisfied? We'll come back and re-clean any area within 24 hours for free.",
                href: null,
              },
              {
                icon: Home,
                title: 'Move-in/out Ready',
                desc: 'Specialized deep cleaning to help you get your full security deposit back.',
                href: '/move-in-move-out-cleaning',
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
              { label: 'Office Deep Cleaning', href: '/office-deep-cleaning' },
              { label: 'Kitchen Deep Cleaning', href: '/kitchen-deep-cleaning' },
              { label: 'Bathroom Deep Cleaning', href: '/bathroom-deep-cleaning' },
              { label: 'Floor Deep Cleaning', href: '/floor-deep-cleaning-services' },
              { label: 'Move In Move Out Cleaning', href: '/move-in-move-out-cleaning' },
              { label: 'Balcony Deep Cleaning', href: '/balcony-deep-cleaning' },
              { label: 'AC Duct Cleaning', href: '/ac-duct-cleaning' },
              { label: 'Steam Deep Cleaning', href: '/steam-deep-cleaning' },
              { label: 'Outside Window Cleaning', href: '/outside-window-cleaning' },
              { label: 'Sofa Shampooing', href: '/sofa-shampooing' },
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
              Apartment Cleaning <span className="text-[#529e00]">FAQs</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is the difference between regular and deep cleaning?',
                a: 'Regular cleaning covers surface dusting and mopping. Deep cleaning includes degreasing the kitchen, scrubbing tile grout, cleaning inside cabinets, and sanitizing every corner.'
              },
              {
                q: 'Do I need to provide cleaning materials?',
                a: 'No. Our team comes fully equipped with heavy-duty machines and professional-grade cleaning solutions.'
              },
              {
                q: 'How long does a deep clean take?',
                a: 'A 1-bedroom apartment typically takes 4-5 hours, while a 3-bedroom can take 7-8 hours depending on the condition.'
              }
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
              Ready for a Spotless Apartment?
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Book your professional deep cleaning service today and enjoy a healthier, cleaner home.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Apartment Deep Cleaning service"
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
