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
  UtensilsCrossed,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export default function RestaurantDeepCleaningPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Hygiene Excellence</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Top Restaurant Deep Cleaning In <span className="text-[#529e00]">Dubai</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Maintain <strong>strict hygiene standards</strong> with our professional{' '}
                <strong>restaurant deep cleaning services in Dubai</strong>. We thoroughly clean{' '}
                <strong>commercial kitchens, dining areas, grease traps, exhaust systems, storage rooms, and food preparation surfaces</strong>. Our team removes{' '}
                <strong>grease buildup, bacteria, and food residue</strong> that can compromise safety compliance. We use{' '}
                <strong>food-safe disinfectants and industrial equipment</strong> for maximum efficiency. This service helps meet{' '}
                <strong>Dubai Municipality hygiene requirements</strong>. Clean restaurants create better customer impressions and safer environments for staff. We work during{' '}
                <strong>flexible hours to avoid business disruption</strong>. Ensure a <strong>spotless and inspection-ready restaurant</strong> with our expert cleaning solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Restaurant Deep Cleaning service"
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
                    <p className="text-xs font-bold text-gray-500 uppercase">Municipality</p>
                    <p className="text-sm font-black text-[#091a33]">Compliant</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Grade A</p>
                    <p className="text-sm font-black text-[#091a33]">Hygiene Standards</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/restaurant-cleaning-hero.jpg"
                  alt="Restaurant Deep Cleaning Dubai"
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
                    <UtensilsCrossed className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">500+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Outlets Cleaned</p>
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
              <UtensilsCrossed className="w-12 h-12 text-[#529e00]" />
            </div>
            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Restaurant Deep Cleaning Checklist</h2>
              <p className="text-white/90 text-base font-medium">Professional Sanitization for Kitchens, Dining Areas, and Storage</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Column 1 */}
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Kitchen Hood & Duct Cleaning', href: '/ac-duct-cleaning' },
                  { label: 'Cooking Range Degreasing', href: '/kitchen-deep-cleaning' },
                  { label: 'Deep Fryer & Oven Cleaning', href: null },
                  { label: 'Chiller & Freezer Sanitization', href: null },
                  { label: 'Food Prep Table Disinfection', href: null },
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
                  { label: 'Dining Area Floor Scrubbing', href: '/floor-deep-cleaning-services' },
                  { label: 'Wall & Ceiling Degreasing', href: null },
                  { label: 'Furniture & Booth Cleaning', href: '/sofa-shampooing' },
                  { label: 'Kitchen Drain & Trap Cleaning', href: null },
                  { label: 'Exhaust Fan Deep Clean', href: '/ac-duct-cleaning' },
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
              Our Professional <span className="text-[#529e00]">Restaurant Cleaning Scope</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We cover every inch of your establishment to ensure a safe, grease-free, and healthy environment for your staff and customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Commercial Kitchen',
                href: '/kitchen-deep-cleaning',
                items: [
                  { label: 'Heavy-duty stove degreasing', href: null },
                  { label: 'Stainless steel polishing', href: null },
                  { label: 'Wall tiles & grout scrubbing', href: null },
                  { label: 'Exhaust filter cleaning', href: '/ac-duct-cleaning' },
                  { label: 'Sink & faucet disinfection', href: null },
                ]
              },
              {
                title: 'Dining & Front House',
                href: null,
                items: [
                  { label: 'Table & chair sanitization', href: null },
                  { label: 'Glass & window polishing', href: '/outside-window-cleaning' },
                  { label: 'Light fixture dusting', href: null },
                  { label: 'Entrance area detailing', href: null },
                ]
              },
              {
                title: 'Storage & Cold Rooms',
                href: null,
                items: [
                  { label: 'Shelving unit cleaning', href: null },
                  { label: 'Walk-in chiller scrubbing', href: null },
                  { label: 'Dry store organization', href: null },
                  { label: 'Condenser coil dusting', href: '/ac-duct-cleaning' },
                ]
              },
              {
                title: 'Washroom Hygiene',
                href: '/bathroom-deep-cleaning',
                items: [
                  { label: 'Toilet & Urinal deep clean', href: null },
                  { label: 'Mirror & glass treatment', href: null },
                  { label: 'Odor control & freshness', href: null },
                  { label: 'Dispenser sanitization', href: null },
                ]
              },
              {
                title: 'Grease Management',
                href: null,
                items: [
                  { label: 'Grease trap surface clean', href: null },
                  { label: 'Back-of-house wall wash', href: null },
                  { label: 'High-level shelf dusting', href: null },
                  { label: 'Equipment base cleaning', href: null },
                ]
              },
              {
                title: 'Final Touches',
                href: null,
                items: [
                  { label: 'Door handle sanitization', href: null },
                  { label: 'AC vent cover cleaning', href: '/ac-duct-cleaning' },
                  { label: 'Trash bin disinfection', href: null },
                  { label: 'Pest-entry point check', href: null },
                  { label: 'Supervisor walkthrough', href: null },
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

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-6">
                Why Focus on <span className="text-[#529e00]">Restaurant Deep Cleaning</span>?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Food Safety Compliance',
                    desc: 'Stay ahead of Dubai Municipality inspections with cleaning that meets international HACCP standards.',
                    href: null,
                  },
                  {
                    title: 'Fire Risk Prevention',
                    desc: 'Removing grease buildup from hoods and ducts significantly reduces the risk of kitchen fires.',
                    href: '/ac-duct-cleaning',
                  },
                  {
                    title: 'Customer Trust',
                    desc: 'A spotless dining area and a clean-smelling kitchen enhance your brand reputation and guest loyalty.',
                    href: null,
                  },
                  {
                    title: 'Equipment Longevity',
                    desc: 'Regular deep cleaning prevents machinery from overheating and breaking down due to grease accumulation.',
                    href: '/kitchen-deep-cleaning',
                  },
                  {
                    title: 'Healthy Staff Environment',
                    desc: 'A clean kitchen reduces slips, falls, and respiratory issues, keeping your team motivated and safe.',
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
                  src="/images/why-restaurant-cleaning.jpg"
                  alt="Restaurant Deep Cleaning Benefits"
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
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our Systematic Approach
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Specially designed to work around your business hours with minimal disruption
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Site Inspection', desc: 'Detailed audit of kitchen grease levels and high-traffic areas' },
              { step: '02', title: 'Preparation', desc: 'Covering sensitive electronics and prep surfaces for safety' },
              { step: '03', title: 'Intensive Wash', desc: 'Industrial-grade degreasing and high-temperature steam cleaning' },
              { step: '04', title: 'Post-Audit', desc: 'ATP testing and final check to ensure municipal compliance' },
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
              { label: 'Kitchen Deep Cleaning', href: '/kitchen-deep-cleaning' },
              { label: 'AC Duct Cleaning', href: '/ac-duct-cleaning' },
              { label: 'Floor Deep Cleaning', href: '/floor-deep-cleaning-services' },
              { label: 'Bathroom Deep Cleaning', href: '/bathroom-deep-cleaning' },
              { label: 'Steam Deep Cleaning', href: '/steam-deep-cleaning' },
              { label: 'Deep Cleaning of Warehouse', href: '/deep-cleaning-of-warehouse' },
              { label: 'Deep Cleaning of Shops', href: '/deep-cleaning-of-shops' },
              { label: 'Office Deep Cleaning', href: '/office-deep-cleaning' },
              { label: 'Outside Window Cleaning', href: '/outside-window-cleaning' },
              { label: 'Marble Polishing Services', href: '/marble-polishing-services' },
              { label: 'Post Construction Cleaning', href: '/post-construction-cleaning-in-dubai' },
              { label: 'Water Tank Cleaning', href: '/water-tank-cleaning-services' },
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
              Restaurant Cleaning <span className="text-[#529e00]">FAQs</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Can you clean during our closing hours?',
                a: 'Yes, we offer 24/7 scheduling. Most restaurants prefer night shifts (e.g., 12 AM to 6 AM) so they are ready for business the next day.'
              },
              {
                q: 'Do you provide municipality-approved certificates?',
                a: 'We provide detailed reports and checklists that help you demonstrate hygiene compliance during official inspections.'
              },
              {
                q: 'What chemicals do you use in the kitchen?',
                a: 'We use food-safe, industrial-strength degreasers that are effective yet non-toxic after rinsing, ensuring no contamination.'
              },
              {
                q: 'How long does a full restaurant deep clean take?',
                a: 'Depending on size, it usually takes 6-10 hours. Large commercial kitchens may require multiple shifts.'
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
              Is Your Kitchen Ready For Inspection?
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Book your professional restaurant deep cleaning today and maintain a Grade-A hygiene standard.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Restaurant Deep Cleaning service"
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
