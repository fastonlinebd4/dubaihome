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
  CheckCircle2
} from 'lucide-react';

export default function MoveInMoveOutCleaningPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Professional Moving Care</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Premium Move-In & Move-Out <span className="text-[#529e00]">Cleaning Dubai</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                <strong>Dubai Home Cleaning Services</strong> offers professional{' '}
                <strong>move in move out cleaning services in Dubai</strong> to ensure your property is spotless, sanitized, and inspection-ready. Whether you are relocating, handing over keys, or preparing a property for new tenants, our expert team provides a <strong>complete top-to-bottom deep clean</strong>. We thoroughly clean{' '}
                <Link href="/kitchen-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">kitchens</Link>,{' '}
                <Link href="/bathroom-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">bathrooms</Link>,
                {' '}wardrobes, cabinets, appliances,{' '}
                <Link href="/floor-deep-cleaning-services" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">floors</Link>,{' '}
                <Link href="/outside-window-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">windows</Link>,
                {' '}and high-touch surfaces to remove dirt, stains, and hidden bacteria. Special attention is given to areas often missed during regular cleaning, including{' '}
                <strong>grout lines, skirting, light fixtures, and ventilation covers</strong>. Our <strong>eco-friendly cleaning solutions</strong> are safe for families and pets while delivering powerful results. This service helps <strong>tenants secure full deposit returns</strong> and allows landlords to present properties in perfect condition. We work efficiently and on schedule to support your moving timeline. Trust Dubai Home Cleaning Services for a <strong>smooth, stress-free move with guaranteed professional cleaning results</strong>.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Move-In/Move-Out Cleaning service"
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
                    <p className="text-xs font-bold text-gray-500 uppercase">Expert</p>
                    <p className="text-sm font-black text-[#091a33]">Move-In Cleaners</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Quality</p>
                    <p className="text-sm font-black text-[#091a33]">Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/move-in-cleaning-hero.jpg"
                  alt="Move In Move Out Cleaning Dubai"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a33]/20 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#529e00] rounded-full flex items-center justify-center">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">2000+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Homes Handed Over</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#529e00] to-[#3d7700] rounded-[60px] p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#c5e899] to-[#a8d96e] rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Sparkles className="w-12 h-12 text-[#529e00]" />
            </div>
            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Move-In/Out Cleaning Checklist</h2>
              <p className="text-white/90 text-base font-medium">Thorough sanitation for your new beginning or final handover</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Deep cleaning of empty cabinets', href: null },
                  { label: 'Wall spot cleaning & dusting', href: null },
                  { label: 'Window tracks & balcony cleaning', href: '/outside-window-cleaning' },
                  { label: 'Floor scrubbing & machine polishing', href: '/floor-deep-cleaning-services' },
                  { label: 'Sanitizing light switches & handles', href: null },
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
                  { label: 'Kitchen appliance deep cleaning', href: '/kitchen-deep-cleaning' },
                  { label: 'Bathroom tile grout scrubbing', href: '/bathroom-deep-cleaning' },
                  { label: 'AC Vent dusting & cleaning', href: '/ac-duct-cleaning' },
                  { label: 'Removal of previous tenant dust', href: null },
                  { label: 'Full home disinfection', href: null },
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

      {/* Services Included */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Comprehensive <span className="text-[#529e00]">Move-In/Out Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We ensure the property is in top-notch condition for the next chapter of your life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Move-In Ready Kitchen',
                href: '/kitchen-deep-cleaning',
                items: [
                  { label: 'Inside/outside cabinet cleaning', href: null },
                  { label: 'Deep cleaning of ovens & hobs', href: null },
                  { label: 'Exhaust fan degreasing', href: null },
                  { label: 'Sink and tap sanitization', href: null },
                  { label: 'Countertop & backsplash cleaning', href: null },
                ]
              },
              {
                title: 'Sanitized Bathrooms',
                href: '/bathroom-deep-cleaning',
                items: [
                  { label: 'Full wall tile scrubbing', href: null },
                  { label: 'Sanitary ware disinfection', href: null },
                  { label: 'Shower glass scale removal', href: null },
                  { label: 'Exhaust fan & vent cleaning', href: '/ac-duct-cleaning' },
                  { label: 'Mirror & cabinet detailing', href: null },
                ]
              },
              {
                title: 'Living & Bedroom Care',
                href: null,
                items: [
                  { label: 'Wardrobe interior cleaning', href: null },
                  { label: 'Floor machine scrubbing', href: '/floor-deep-cleaning-services' },
                  { label: 'Wall dusting & cobweb removal', href: null },
                  { label: 'Baseboard & door wiping', href: null },
                  { label: 'Window & track detailing', href: '/outside-window-cleaning' },
                ]
              },
              {
                title: 'Move-Out Handover',
                href: null,
                items: [
                  { label: 'Complete dust removal', href: null },
                  { label: 'Grease & stain treatment', href: null },
                  { label: 'Balcony & patio wash', href: '/balcony-deep-cleaning' },
                  { label: 'Storage room cleaning', href: null },
                  { label: 'Trash & debris removal', href: null },
                ]
              },
              {
                title: 'Exterior & Windows',
                href: '/outside-window-cleaning',
                items: [
                  { label: 'Glass polishing inside/out', href: null },
                  { label: 'Window frame deep cleaning', href: null },
                  { label: 'Balcony railing wiping', href: '/balcony-deep-cleaning' },
                  { label: 'Main entrance detailing', href: null },
                  { label: 'Exterior light fixtures', href: null },
                ]
              },
              {
                title: 'Hygienic Finishing',
                href: null,
                items: [
                  { label: 'Air freshening treatment', href: null },
                  { label: 'Final quality walkthrough', href: null },
                  { label: 'Disinfection of high-touch areas', href: null },
                  { label: 'Ready-for-occupancy check', href: null },
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

      {/* Why Need Move Cleaning */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-6">
                Why Professional <span className="text-[#529e00]">Move-In/Out Cleaning?</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Security Deposit Refund',
                    desc: 'A professionally cleaned home ensures you get your full security deposit back from the landlord.',
                    href: null,
                  },
                  {
                    title: 'Fresh Start in New Home',
                    desc: 'Move into a space that is not just "surface clean" but deep-sanitized and free from previous occupants\' germs.',
                    href: null,
                  },
                  {
                    title: 'Saves Time & Energy',
                    desc: 'Moving is exhausting. Let our professional team handle the heavy scrubbing while you manage the logistics.',
                    href: null,
                  },
                  {
                    title: 'Healthier Environment',
                    desc: 'We eliminate deep-seated dust, allergens, and bacteria that often hide in empty properties.',
                    href: null,
                  },
                  {
                    title: 'Professional Equipment',
                    desc: 'We use industrial scrubbers and high-grade chemicals that provide results a regular mop cannot achieve.',
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
                  src="/images/move-out-cleaning.jpg"
                  alt="Move Out Cleaning Services"
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
        <div className="absolute top-20 left-10 opacity-20">
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 10C40 30 20 60 20 90C20 110 35 130 60 130C85 130 100 110 100 90C100 60 80 30 60 10Z" fill="#529e00" opacity="0.3"/>
          </svg>
        </div>
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#529e00] font-bold text-sm uppercase tracking-widest mb-3">YOUR TRUSTED PARTNER</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Benefits of Booking Our <br />
              <span className="text-[#529e00]">Moving Cleaning Experts</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '👷',
                title: 'Specialized Moving Team',
                desc: 'Our cleaners are experts in "empty home" detailing, focusing on cabinets and corners.'
              },
              {
                icon: '🧼',
                title: 'Sanitization & Hygiene',
                desc: 'We use medical-grade disinfectants to ensure the property is 100% safe for your family.'
              },
              {
                icon: '🕙',
                title: 'Same-Day Service',
                desc: "Urgent move? We offer flexible slots to match your moving truck schedule perfectly."
              },
              {
                icon: '⭐',
                title: 'Handover Guarantee',
                desc: 'We ensure the house is in the exact condition required for a smooth handover or move-in.'
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
              Book Moving Cleaning
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#529e00] to-[#3d7700] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our Step-by-Step Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              How we prepare your home for its next occupant
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Schedule & Scope', desc: 'Book your slot and tell us the property size' },
              { step: '02', title: 'Deep Scrubbing', desc: 'Our team cleans every inch of the empty property' },
              { step: '03', title: 'Sanitization', desc: 'Full disinfection of kitchen and bathrooms' },
              { step: '04', title: 'Quality Handover', desc: 'Final check to ensure it meets handover standards' },
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
              { label: 'Kitchen Deep Cleaning', href: '/kitchen-deep-cleaning' },
              { label: 'Bathroom Deep Cleaning', href: '/bathroom-deep-cleaning' },
              { label: 'Floor Deep Cleaning', href: '/floor-deep-cleaning-services' },
              { label: 'Balcony Deep Cleaning', href: '/balcony-deep-cleaning' },
              { label: 'AC Duct Cleaning', href: '/ac-duct-cleaning' },
              { label: 'Steam Deep Cleaning', href: '/steam-deep-cleaning' },
              { label: 'Outside Window Cleaning', href: '/outside-window-cleaning' },
              { label: 'Marble Polishing Services', href: '/marble-polishing-services' },
              { label: 'Villa Deep Cleaning', href: '/villa-deep-cleaning' },
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
              Move-In/Out Cleaning <span className="text-[#529e00]">FAQs</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'What is the difference between regular and move-in cleaning?',
                a: 'Move-in cleaning is more intensive and focuses on areas like the inside of cabinets, deep scrubbing of empty floors, and sanitizing the entire property for a new start.'
              },
              {
                q: 'Do you provide cleaning materials?',
                a: 'Yes, our team comes fully equipped with professional machines and cleaning agents.'
              },
              {
                q: 'Should the property be empty?',
                a: 'Yes, for the best results, the property should be empty of furniture and personal belongings.'
              },
              {
                q: 'How long before moving should I book?',
                a: 'We recommend booking 2-3 days in advance, but we also accommodate same-day requests when possible.'
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
              Making Your Move Stress-Free
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Get your moving cleaning done by Dubai's top-rated professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Move-In/Out Cleaning quote"
                className="inline-flex items-center gap-3 bg-[#091a33] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#0a1f3d] transition-all shadow-lg"
              >
                Get Move Quote Now
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
