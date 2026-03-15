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
  Layout,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export default function OutsideWindowCleaningPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Professional Glass Care</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Top Outside Window Cleaning In <span className="text-[#529e00]">Dubai</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Our <strong>outside window cleaning service</strong> ensures{' '}
                <strong>crystal-clear, streak-free glass</strong> for residential and commercial buildings. We remove{' '}
                <strong>dust, water stains, sand residue, and environmental pollutants</strong>.{' '}
                <strong>Professional tools and safe techniques</strong> guarantee effective cleaning at heights.{' '}
                <strong>Clean windows enhance natural light</strong> and overall building appearance. Ideal for{' '}
                <Link href="/villa-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">villas</Link>,{' '}
                <Link href="/apartment-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">apartments</Link>,{' '}
                <Link href="/office-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">offices</Link>, and high-rise properties. We prioritize{' '}
                <strong>safety and precision</strong> during every project. Regular window cleaning{' '}
                <strong>maintains property value</strong>. Enjoy bright, spotless windows with professional results.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Outside Window Cleaning service"
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
                    <p className="text-xs font-bold text-gray-500 uppercase">Insured</p>
                    <p className="text-sm font-black text-[#091a33]">Safety First</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Spotless</p>
                    <p className="text-sm font-black text-[#091a33]">Finish Guarantee</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/window-cleaning-hero.jpg"
                  alt="Outside Window Cleaning Dubai"
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
                    <Layout className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">5000+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Windows Cleaned</p>
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
              <Layout className="w-12 h-12 text-[#529e00]" />
            </div>
            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Outside Window Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">Professional Care for Every Glass Surface of Your Property</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Exterior Glass Scrubbing', href: null },
                  { label: 'Water Spot & Stain Removal', href: null },
                  { label: 'Window Frame Deep Cleaning', href: null },
                  { label: 'Window Track & Sill Detailing', href: null },
                  { label: 'Fly Screen Mesh Cleaning', href: null },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#529e00] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <p className="text-[#091a33] font-bold text-base">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Skylight Cleaning', href: '/rooftop-cleaning-services' },
                  { label: 'Glass Balustrade Detailing', href: '/balcony-deep-cleaning' },
                  { label: 'Spider Web Removal', href: null },
                  { label: 'Streak-Free Squeegee Finish', href: null },
                  { label: 'Hard-to-Reach Area Access', href: null },
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
              Our Professional <span className="text-[#529e00]">Window Cleaning Scope</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We don't just wash glass; we provide a full restoration of your window's exterior appearance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Villa Exterior Windows',
                href: '/villa-facade-cleaning-services',
                items: [
                  { label: 'Ground & First-floor windows', href: null },
                  { label: 'Sliding glass doors', href: null },
                  { label: 'High-access glass panes', href: null },
                  { label: 'Entrance glass cleaning', href: null },
                  { label: 'Dust-repellent treatment', href: null },
                ]
              },
              {
                title: 'Frame & Track Detailing',
                href: null,
                items: [
                  { label: 'Aluminium frame wiping', href: null },
                  { label: 'Rubber seal inspection', href: null },
                  { label: 'Track sand & debris removal', href: null },
                  { label: 'Bottom sill scrubbing', href: null },
                  { label: 'Lock & handle cleaning', href: null },
                ]
              },
              {
                title: 'Screen & Mesh Care',
                href: null,
                items: [
                  { label: 'Mesh screen vacuuming', href: null },
                  { label: 'Washable screen rinsing', href: null },
                  { label: 'Frame slot cleaning', href: null },
                  { label: 'Re-installation of screens', href: null },
                  { label: 'Edge-to-edge dusting', href: null },
                ]
              },
              {
                title: 'Stain Management',
                href: null,
                items: [
                  { label: 'Hard water mark removal', href: null },
                  { label: 'Bird dropping cleaning', href: null },
                  { label: 'Paint speck removal', href: null },
                  { label: 'Sticky residue cleaning', href: null },
                  { label: 'Acid-free chemical use', href: null },
                ]
              },
              {
                title: 'Glass Balconies',
                href: '/balcony-deep-cleaning',
                items: [
                  { label: 'Balustrade glass washing', href: null },
                  { label: 'Handrail polishing', href: null },
                  { label: 'Corner detailing', href: null },
                  { label: 'Two-sided glass wipe', href: null },
                  { label: 'Safety check of panels', href: null },
                ]
              },
              {
                title: 'Specialty Glass',
                href: null,
                items: [
                  { label: 'Skylight deep washing', href: '/rooftop-cleaning-services' },
                  { label: 'Glass canopy cleaning', href: null },
                  { label: 'Decorative glass care', href: null },
                  { label: 'Conservatory roof wash', href: null },
                  { label: 'Solar panel dusting', href: null },
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
                Why Do You Need <span className="text-[#529e00]">Outside Window Cleaning</span>?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Combat Desert Dust',
                    desc: 'Dubai\'s sandstorms create a film on glass that can cause permanent scratching if not professionally removed.',
                    href: null,
                  },
                  {
                    title: 'Remove Water Spots',
                    desc: 'A/C drips and irrigation water leave mineral deposits that make glass look cloudy and dull.',
                    href: null,
                  },
                  {
                    title: 'Safety First',
                    desc: 'Our team uses professional ladders and safety gear to reach high windows that are dangerous for DIY cleaning.',
                    href: null,
                  },
                  {
                    title: 'Enhance Natural Light',
                    desc: 'Clean exterior windows allow 20% more natural light into your home, improving your indoor atmosphere.',
                    href: null,
                  },
                  {
                    title: 'Maintain Window Health',
                    desc: 'Regular cleaning prevents track clogging and seal degradation, saving you money on future repairs.',
                    href: '/villa-facade-cleaning-services',
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
                  src="/images/why-window-cleaning.jpg"
                  alt="Window Cleaning Importance"
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
              Our Window Cleaning Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A systematic method for a streak-free, crystal-clear result
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Dry Brushing', desc: 'Removing loose sand and spider webs from frames and tracks' },
              { step: '02', title: 'Deep Scrubbing', desc: 'Applying eco-friendly solution to break down stubborn stains' },
              { step: '03', title: 'Squeegee Wipe', desc: 'Professional blade wipe for a perfect, streak-free glass finish' },
              { step: '04', title: 'Detailing', desc: 'Microfiber polishing of edges and wiping down of all frames' },
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
              { label: 'Villa Facade Cleaning', href: '/villa-facade-cleaning-services' },
              { label: 'Outside Deep Cleaning', href: '/outside-deep-cleaning' },
              { label: 'Outside Power Wash', href: '/outside-power-wash' },
              { label: 'Rooftop Cleaning Services', href: '/rooftop-cleaning-services' },
              { label: 'Balcony Deep Cleaning', href: '/balcony-deep-cleaning' },
              { label: 'Villa Deep Cleaning', href: '/villa-deep-cleaning' },
              { label: 'Apartment Deep Cleaning', href: '/apartment-deep-cleaning' },
              { label: 'Office Deep Cleaning', href: '/office-deep-cleaning' },
              { label: 'Move In Move Out Cleaning', href: '/move-in-move-out-cleaning' },
              { label: 'Post Construction Cleaning', href: '/post-construction-cleaning-in-dubai' },
              { label: 'AC Duct Cleaning', href: '/ac-duct-cleaning' },
              { label: 'Steam Deep Cleaning', href: '/steam-deep-cleaning' },
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
              Window Cleaning <span className="text-[#529e00]">FAQs</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'How often should I clean my outside windows in Dubai?',
                a: 'Due to the sand and humidity, we recommend a professional deep clean every 2-3 months to maintain clarity and protect the glass.'
              },
              {
                q: 'Do you clean high-rise apartment windows?',
                a: 'We specialize in ground and first-floor villa windows. For high-rise buildings, we provide service if the windows are accessible from balconies.'
              },
              {
                q: 'What happens if it rains after my cleaning?',
                a: 'Rain in Dubai often carries dust. We monitor weather reports and recommend scheduling on clear days for lasting results.'
              },
              {
                q: 'Are your cleaning products safe for tinted windows?',
                a: 'Yes, we use ammonia-free, pH-neutral solutions that are 100% safe for all types of window tints and coatings.'
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
              Ready for a Brighter View?
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Book your professional outside window cleaning today and see the difference clarity makes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Outside Window Cleaning service"
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
