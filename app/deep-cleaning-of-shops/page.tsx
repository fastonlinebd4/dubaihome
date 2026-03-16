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
  Store,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ShoppingBag
} from 'lucide-react';

export default function ShopDeepCleaningPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Retail Specialist</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Top Shop Deep Cleaning Services In <span className="text-[#529e00]">Dubai</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Make your <strong>retail space shine and attract more customers</strong>. Dubai Home Cleaning Services provides{' '}
                <strong>professional deep cleaning for shops, boutiques, and showrooms</strong> using commercial-grade equipment. We thoroughly clean{' '}
                <strong>display areas, floors, trial rooms, glass entrances, storage areas, and high-touch surfaces</strong> to create a{' '}
                <strong>spotless, hygienic, and welcoming environment</strong> for your customers and staff. Our{' '}
                <strong>eco-friendly, non-toxic cleaning solutions</strong> are safe for all inventory types. This service is ideal for{' '}
                <Link href="/office-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">commercial spaces</Link>,
                {' '}retail outlets, and{' '}
                <Link href="/deep-cleaning-of-restaurant" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">F&B establishments</Link>.
                {' '}We work around your schedule to ensure <strong>zero business disruption</strong>.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Shop Deep Cleaning service"
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
                    <p className="text-xs font-bold text-gray-500 uppercase">Reliable</p>
                    <p className="text-sm font-black text-[#091a33]">Business Partner</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">5.0 Rating</p>
                    <p className="text-sm font-black text-[#091a33]">Retail Clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/shop-cleaning-hero.jpg"
                  alt="Shop Deep Cleaning Dubai"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a33]/20 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#529e00] rounded-full flex items-center justify-center">
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">500+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Shops Cleaned</p>
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
              <ShoppingBag className="w-12 h-12 text-[#529e00]" />
            </div>

            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Shop Deep Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">Creating a Spick-and-Span Environment for Your Customers</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Display Area & Shelves', href: null },
                  { label: 'Cash Counter Sanitization', href: null },
                  { label: 'Trial Room Deep Cleaning', href: null },
                  { label: 'Glass Entrance & Windows', href: '/outside-window-cleaning' },
                  { label: 'Storage Area Organization', href: null },
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
                  { label: 'Commercial Floor Scrubbing', href: '/floor-deep-cleaning-services' },
                  { label: 'Ceiling & Wall Dusting', href: null },
                  { label: 'AC Vent & Grill Cleaning', href: '/ac-duct-cleaning' },
                  { label: 'Signage & Logo Polishing', href: null },
                  { label: 'Disinfection of High-Touch Points', href: null },
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

      {/* What's Included */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              What's Included In Our Shop <span className="text-[#529e00]">Deep Cleaning?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We cover every square inch of your retail space to ensure a premium shopping experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Showroom Detailing',
                href: null,
                items: [
                  { label: 'Mannequin & stand dusting', href: null },
                  { label: 'Rack & hanger sanitization', href: null },
                  { label: 'Mirror streak-free polishing', href: null },
                  { label: 'Spotlight & fixture cleaning', href: null },
                  { label: 'Display glass treatment', href: null },
                ]
              },
              {
                title: 'Floor Care',
                href: '/floor-deep-cleaning-services',
                items: [
                  { label: 'Tile grout deep cleaning', href: null },
                  { label: 'Marble polishing (if any)', href: '/marble-polishing-services' },
                  { label: 'Carpet vacuuming/shampoo', href: '/carpet-shampooing' },
                  { label: 'Baseboard deep wiping', href: null },
                ]
              },
              {
                title: 'Customer Zones',
                href: null,
                items: [
                  { label: 'Trial room curtain/door wash', href: '/Curtain-uv-and-steam-machine' },
                  { label: 'Seating area sanitization', href: '/sofa-shampooing' },
                  { label: 'Waiting lounge cleaning', href: null },
                  { label: 'Magazine rack dusting', href: null },
                  { label: 'Entrance mat cleaning', href: null },
                ]
              },
              {
                title: 'Back Office & Storage',
                href: '/office-deep-cleaning',
                items: [
                  { label: 'Inventory shelf dusting', href: null },
                  { label: 'Office desk cleaning', href: null },
                  { label: 'Computer & POS sanitization', href: null },
                  { label: 'Staff pantry cleaning', href: '/kitchen-deep-cleaning' },
                  { label: 'File cabinet wiping', href: null },
                ]
              },
              {
                title: 'Hygiene & Washroom',
                href: '/bathroom-deep-cleaning',
                items: [
                  { label: 'Commercial toilet scrubbing', href: null },
                  { label: 'Sink & faucet polishing', href: null },
                  { label: 'Exhaust fan cleaning', href: '/ac-duct-cleaning' },
                  { label: 'Soap/Tissue holder refill', href: null },
                ]
              },
              {
                title: 'Final Touches',
                href: null,
                items: [
                  { label: 'Exterior signage wash', href: null },
                  { label: 'Window frame detailing', href: '/outside-window-cleaning' },
                  { label: 'Odor removal treatment', href: null },
                  { label: 'Trash removal & bin wash', href: null },
                  { label: 'Quality supervisor check', href: null },
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

      {/* Why Shop Cleaning Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-6">
                Why Invest In <span className="text-[#529e00]">Shop Deep Cleaning?</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Customer Attraction',
                    desc: 'A spotless shop creates an inviting atmosphere that encourages customers to stay longer and buy more.',
                    href: null,
                  },
                  {
                    title: 'Brand Reputation',
                    desc: 'Cleanliness reflects your brand values. A dusty shop can drive away premium customers.',
                    href: null,
                  },
                  {
                    title: 'Employee Productivity',
                    desc: 'A clean and organized work environment boosts staff morale and helps them focus on sales.',
                    href: '/office-deep-cleaning',
                  },
                  {
                    title: 'Inventory Protection',
                    desc: 'Regular deep cleaning prevents dust build-up on your products, keeping your inventory in "new" condition.',
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
                  src="/images/shop-cleaning-benefits.jpg"
                  alt="Shop Deep Cleaning Importance"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#529e00] to-[#3d7700] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Our Professional Workflow</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Tailored cleaning schedules to avoid business interruption</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Survey', desc: 'Detailed walkthrough of the shop layout and specific cleaning needs' },
              { step: '02', title: 'Scheduling', desc: 'Setting up cleaning hours (usually after-hours) to not affect sales' },
              { step: '03', title: 'Deep Wash', desc: 'Intensive cleaning using professional grade non-toxic solutions' },
              { step: '04', title: 'Inspection', desc: 'Final walkthrough with the manager to ensure 100% satisfaction' },
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
              { label: 'Office Deep Cleaning', href: '/office-deep-cleaning' },
              { label: 'Deep Cleaning of Restaurant', href: '/deep-cleaning-of-restaurant' },
              { label: 'Deep Cleaning of Warehouse', href: '/deep-cleaning-of-warehouse' },
              { label: 'Floor Deep Cleaning', href: '/floor-deep-cleaning-services' },
              { label: 'Marble Polishing Services', href: '/marble-polishing-services' },
              { label: 'Carpet Shampooing', href: '/carpet-shampooing' },
              { label: 'Sofa Shampooing', href: '/sofa-shampooing' },
              { label: 'AC Duct Cleaning', href: '/ac-duct-cleaning' },
              { label: 'Bathroom Deep Cleaning', href: '/bathroom-deep-cleaning' },
              { label: 'Outside Window Cleaning', href: '/outside-window-cleaning' },
              { label: 'Steam Deep Cleaning', href: '/steam-deep-cleaning' },
              { label: 'Post Construction Cleaning', href: '/post-construction-cleaning-in-dubai' },
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
              Retail Cleaning <span className="text-[#529e00]">FAQs</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Can you clean my shop after closing hours?',
                a: 'Yes, we provide flexible scheduling including night shifts and early morning sessions so your business operations are never disturbed.'
              },
              {
                q: 'Do you handle specialized flooring like marble or wood?',
                a: 'Absolutely. We use material-specific cleaning agents and equipment to ensure your floors are cleaned and protected.'
              },
              {
                q: 'Is it safe for luxury apparel or electronics?',
                a: 'Our team is trained to handle sensitive retail environments. we use dust-free vacuuming and eco-friendly products that are safe for all inventory types.'
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
              Get Your Shop Ready For Customers
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Book a professional deep cleaning for your retail space today.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Shop Deep Cleaning quote"
                className="inline-flex items-center gap-3 bg-[#091a33] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#0a1f3d] transition-all shadow-lg"
              >
                Request Free Quote
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
