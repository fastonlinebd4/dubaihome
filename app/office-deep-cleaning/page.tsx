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

export default function OfficeDeepCleaningPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Professional Workspace</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Premium Office Deep Cleaning Services In <span className="text-[#529e00]">Dubai</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Maintain a <strong>spotless, hygienic, and professional workspace</strong> with our expert{' '}
                <strong>office deep cleaning services in Dubai</strong>. Over time, offices accumulate dust, bacteria, and hidden contaminants that regular cleaning cannot fully remove. Our trained cleaning specialists thoroughly sanitize{' '}
                <strong>workstations, meeting rooms, reception areas, restrooms, pantry spaces</strong>, and high-touch surfaces such as{' '}
                <strong>desks, keyboards, door handles, and switches</strong>. We use{' '}
                <strong>advanced equipment and eco-friendly disinfectants</strong> to ensure deep cleaning without disrupting daily operations.{' '}
                <Link href="/carpet-shampooing" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">Carpets</Link>,{' '}
                <Link href="/floor-deep-cleaning-services" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">floors</Link>,{' '}
                glass partitions, and office furniture are cleaned and restored to a fresh, polished condition. This service helps{' '}
                <strong>reduce the spread of germs</strong> and creates a healthier environment for employees and clients. Ideal for{' '}
                <strong>corporate offices, co-working spaces, and commercial buildings</strong> seeking high hygiene standards. Boost productivity, improve air quality, and leave a lasting professional impression with our reliable office deep cleaning solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Office Deep Cleaning service"
                  className="inline-flex items-center gap-3 bg-[#529e00] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#3d7700] transition-all shadow-lg hover:shadow-xl"
                >
                  Get Business Quote
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
                    <p className="text-sm font-black text-[#091a33]">Corporate Cleaners</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Top Rated</p>
                    <p className="text-sm font-black text-[#091a33]">B2B Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/office-cleaning-hero.jpg"
                  alt="Office Deep Cleaning Dubai"
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
                    <p className="text-xs font-bold text-gray-500 uppercase">Offices Cleaned</p>
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
              <Building2 className="w-12 h-12 text-[#529e00]" />
            </div>
            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Office Deep Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">Professional Standards for a Healthier Workplace</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Workstations & Desks', href: null },
                  { label: 'Reception & Waiting Areas', href: null },
                  { label: 'Conference Rooms', href: null },
                  { label: 'High-Touch Point Sanitization', href: null },
                  { label: 'IT Equipment Dusting', href: null },
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
                  { label: 'Industrial Carpet Vacuuming', href: '/carpet-shampooing' },
                  { label: 'Hard Floor Scrubbing', href: '/floor-deep-cleaning-services' },
                  { label: 'AC Vent Cleaning', href: '/ac-duct-cleaning' },
                  { label: 'Office Pantry Deep Clean', href: '/kitchen-deep-cleaning' },
                  { label: 'Window & Glass Partitioning', href: '/outside-window-cleaning' },
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
              What's Included In Our Office <span className="text-[#529e00]">Deep Cleaning?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a meticulous cleaning routine that covers every inch of your corporate space.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Workstation Sanitization',
                href: null,
                items: [
                  { label: 'Desktop & monitor dusting', href: null },
                  { label: 'Keyboard & mouse disinfection', href: null },
                  { label: 'Chair vacuuming & wiping', href: null },
                  { label: 'Under-desk cable cleaning', href: null },
                  { label: 'Phone system sanitization', href: null },
                ]
              },
              {
                title: 'Pantry & Breakroom',
                href: '/kitchen-deep-cleaning',
                items: [
                  { label: 'Cabinet interior & exterior', href: null },
                  { label: 'Microwave & fridge cleaning', href: null },
                  { label: 'Sink & countertop scrubbing', href: null },
                  { label: 'Trash bin disinfection', href: null },
                ]
              },
              {
                title: 'Meeting & Boardrooms',
                href: null,
                items: [
                  { label: 'Table surface polishing', href: null },
                  { label: 'Glass wall cleaning', href: null },
                  { label: 'Upholstery steam cleaning', href: '/steam-deep-cleaning' },
                  { label: 'Projector & screen dusting', href: null },
                  { label: 'Air vent vacuuming', href: '/ac-duct-cleaning' },
                ]
              },
              {
                title: 'Commercial Bathrooms',
                href: '/bathroom-deep-cleaning',
                items: [
                  { label: 'Stall & door sanitization', href: null },
                  { label: 'Urinal & toilet deep scrub', href: null },
                  { label: 'Mirror & fixture polishing', href: null },
                  { label: 'Tile grout cleaning', href: null },
                ]
              },
              {
                title: 'Flooring & Carpets',
                href: '/floor-deep-cleaning-services',
                items: [
                  { label: 'HEPA filter vacuuming', href: null },
                  { label: 'Stain spot treatment', href: null },
                  { label: 'Carpet shampooing', href: '/carpet-shampooing' },
                  { label: 'Corner & edge cleaning', href: null },
                ]
              },
              {
                title: 'General Facilities',
                href: null,
                items: [
                  { label: 'Light switch & handle sanitizing', href: null },
                  { label: 'Ceiling fan/AC grill dusting', href: '/ac-duct-cleaning' },
                  { label: 'Window track cleaning', href: '/outside-window-cleaning' },
                  { label: 'Reception desk polishing', href: null },
                  { label: 'Final quality walkthrough', href: null },
                ]
              },
              {
                title: 'Office Floor Deep Cleaning',
                href: '/floor-deep-cleaning-services',
                items: [
                  { label: 'Deep Cleaning of ceramic tiles, concrete tiles using a scrubbing machine, and wooden floors will be cleaned by vacuum & mopping. (Carpet dry vacuum)', href: null },
                  { label: 'Deep Cleaning of marble-type floors and stairs using a vacuum & mopping.', href: '/marble-polishing-services' },
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
                Why Does Your Workspace Need <span className="text-[#529e00]">Deep Cleaning?</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Employee Health & Wellbeing',
                    desc: 'Reduce sick leaves by eliminating bacteria and viruses from high-traffic office areas.',
                    href: null,
                  },
                  {
                    title: 'Boost Productivity',
                    desc: 'A clean, organized environment improves focus and employee morale significantly.',
                    href: null,
                  },
                  {
                    title: 'Professional Brand Image',
                    desc: 'Impress clients and visitors with a pristine office that reflects your business standards.',
                    href: null,
                  },
                  {
                    title: 'Protect Office Assets',
                    desc: 'Regular deep cleaning prevents dust buildup in electronics and extends the life of office furniture.',
                    href: null,
                  },
                  {
                    title: 'Improved Air Quality',
                    desc: 'Professional AC vent and carpet cleaning removes indoor pollutants for fresher breathing air.',
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
                  src="/images/why-office-cleaning.jpg"
                  alt="Professional Office Cleaning Benefits"
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
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#529e00] font-bold text-sm uppercase tracking-widest mb-3">CORPORATE EXCELLENCE</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Benefits of Choosing DUBAI HOME CLEANING SERVICES <br />
              <span className="text-[#529e00]">Office Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🏢',
                title: 'Corporate Experience',
                desc: 'We understand the specific needs of different industries, from tech firms to medical clinics.'
              },
              {
                icon: '⚡',
                title: 'Efficient & Discreet',
                desc: 'Our teams work swiftly with minimal disruption to your daily business operations.'
              },
              {
                icon: '🌿',
                title: 'Eco-Friendly Solutions',
                desc: 'We use non-toxic cleaning agents that are safe for the office environment and employees.'
              },
              {
                icon: '📅',
                title: 'Flexible Contracts',
                desc: 'One-time deep cleaning or customized periodic maintenance plans to suit your budget.'
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#529e00] to-[#3d7700] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our Office Cleaning Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A systematic approach designed for commercial spaces
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Site Inspection', desc: 'Detailed walkthrough to identify specific cleaning requirements' },
              { step: '02', title: 'Plan & Schedule', desc: 'Scheduling after-hours or weekend cleaning to avoid disruption' },
              { step: '03', title: 'Execution', desc: 'Our trained crew performs the deep clean using industrial equipment' },
              { step: '04', title: 'Quality Review', desc: 'Final audit with your office manager to ensure total satisfaction' },
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
              { label: 'Carpet Shampooing', href: '/carpet-shampooing' },
              { label: 'AC Duct Cleaning', href: '/ac-duct-cleaning' },
              { label: 'Steam Deep Cleaning', href: '/steam-deep-cleaning' },
              { label: 'Outside Window Cleaning', href: '/outside-window-cleaning' },
              { label: 'Post Construction Cleaning', href: '/post-construction-cleaning-in-dubai' },
              { label: 'Deep Cleaning of Warehouse', href: '/deep-cleaning-of-warehouse' },
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
              Office Cleaning <span className="text-[#529e00]">FAQs</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Can you clean after office hours or on weekends?',
                a: 'Absolutely. We offer flexible scheduling, including nights and weekends, to ensure no disruption to your work.'
              },
              {
                q: 'Do you provide your own cleaning supplies?',
                a: 'Yes, we provide all industrial-grade equipment and eco-friendly cleaning chemicals needed for the job.'
              },
              {
                q: 'Are your cleaners insured?',
                a: 'Yes, all our staff are fully insured and undergo rigorous background checks for your peace of mind.'
              },
              {
                q: 'How often should an office be deep cleaned?',
                a: 'For most offices in Dubai, we recommend a professional deep clean every 3 to 6 months.'
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
              Ready To Refresh Your Office?
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Get a customized quote for your office deep cleaning and provide your team with a healthier workplace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Office Deep Cleaning service"
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
