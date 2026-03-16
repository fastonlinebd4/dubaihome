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
  ArrowRight,
  Phone,
  CheckCircle2,
  Droplets,
  Waves
} from 'lucide-react';

export default function SwimmingPoolCleaningPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#529e00]/10 border border-[#529e00]/20 rounded-full">
                <Sparkles className="w-4 h-4 text-[#529e00]" />
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Expert Maintenance</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Top Swimming Pool <span className="text-[#529e00]">Cleaning</span> Services In Dubai
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Our <strong>swimming pool cleaning service</strong> maintains <strong>crystal-clear, hygienic water</strong> for safe swimming. We remove debris, algae, and bacteria from pool surfaces and filtration systems. Chemical levels are balanced to ensure safe water quality. Ideal for <Link href="/villa-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">villas</Link>, hotels, and residential communities. We inspect filters and pumps for optimal performance. Clean pools enhance property value and enjoyment. This service complements our <Link href="/water-tank-cleaning-services" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">water tank cleaning</Link> for total water hygiene. Enjoy a safe, refreshing swimming experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Swimming Pool Cleaning service"
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
                    <p className="text-sm font-black text-[#091a33]">Pool Technicians</p>
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
                  src="/images/swimming-pool-hero.jpg"
                  alt="Swimming Pool Cleaning Dubai"
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
                    <Waves className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">500+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Pools Maintained</p>
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
              <Droplets className="w-12 h-12 text-[#529e00]" />
            </div>
            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Pool Maintenance Task List</h2>
              <p className="text-white/90 text-base font-medium">We Ensure Crystal Clear Water for Your Health and Enjoyment</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Skimming Surface Debris', href: null },
                  { label: 'Wall & Floor Brushing', href: '/floor-deep-cleaning-services' },
                  { label: 'Vacuuming the Pool Floor', href: null },
                  { label: 'Cleaning Skimmer Baskets', href: null },
                  { label: 'Tile Line Cleaning', href: '/bathroom-deep-cleaning' },
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
                  { label: 'Water Chemistry Testing', href: null },
                  { label: 'Chemical Balancing (pH/Chlorine)', href: null },
                  { label: 'Filter Backwashing', href: null },
                  { label: 'Pump Basket Cleaning', href: null },
                  { label: 'Equipment Inspection', href: '/ac-duct-cleaning' },
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
              What's Included In Our Pool <span className="text-[#529e00]">Cleaning Services?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive maintenance solutions to keep your pool hygienic and equipment running efficiently
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Debris Removal',
                href: null,
                items: [
                  { label: 'Surface leaf skimming', href: null },
                  { label: 'Floor debris vacuuming', href: null },
                  { label: 'Bottom sediment removal', href: null },
                  { label: 'Stray object retrieval', href: null },
                  { label: 'Deck area sweeping', href: '/outside-deep-cleaning' },
                ]
              },
              {
                title: 'Chemical Balancing',
                href: null,
                items: [
                  { label: 'pH level adjustment', href: null },
                  { label: 'Chlorine level testing', href: null },
                  { label: 'Alkalinity stabilization', href: null },
                  { label: 'Shock treatment (if needed)', href: null },
                  { label: 'Algaecide application', href: null },
                ]
              },
              {
                title: 'System Maintenance',
                href: '/ac-duct-cleaning',
                items: [
                  { label: 'Filter cleaning & backwash', href: null },
                  { label: 'Pump strainer inspection', href: null },
                  { label: 'Skimmer basket emptying', href: null },
                  { label: 'Valve position checking', href: null },
                  { label: 'Leak detection walkthrough', href: null },
                ]
              },
              {
                title: 'Surface Detailing',
                href: '/bathroom-deep-cleaning',
                items: [
                  { label: 'Tile waterline scrubbing', href: null },
                  { label: 'Grout stain treatment', href: null },
                  { label: 'Ladder & handrail wiping', href: null },
                  { label: 'Pool light cleaning', href: null },
                  { label: 'Step & corner brushing', href: null },
                ]
              },
              {
                title: 'Water Clarity',
                href: '/water-tank-cleaning-services',
                items: [
                  { label: 'Cloudy water treatment', href: null },
                  { label: 'Flocculant application', href: null },
                  { label: 'Sand filter inspection', href: null },
                  { label: 'Water level topping', href: null },
                  { label: 'Total dissolved solids check', href: null },
                ]
              },
              {
                title: 'Safety Check',
                href: null,
                items: [
                  { label: 'Drain cover inspection', href: null },
                  { label: 'Gate & fence checking', href: null },
                  { label: 'Water temperature check', href: null },
                  { label: 'Lighting safety check', href: null },
                  { label: 'Monthly health report', href: null },
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

      {/* Why Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-6">
                Why Do You Need <span className="text-[#529e00]">Professional Pool Cleaning</span> In Dubai?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Dust & Sand Accumulation',
                    desc: 'Dubai\'s frequent sandstorms quickly contaminate pool water, requiring professional filtration and cleaning.',
                    href: '/villa-facade-cleaning-services',
                  },
                  {
                    title: 'Algae Prevention',
                    desc: 'Intense heat accelerates algae growth. Our chemical experts ensure your water stays blue and clear.',
                    href: null,
                  },
                  {
                    title: 'Skin & Eye Protection',
                    desc: 'Improper chemical balance causes irritation. We maintain perfect levels for a comfortable swim.',
                    href: null,
                  },
                  {
                    title: 'Equipment Longevity',
                    desc: 'Regular maintenance prevents expensive pump and filter failures caused by calcium buildup or debris.',
                    href: null,
                  },
                  {
                    title: 'Bacterial Control',
                    desc: 'We sanitize your water to eliminate harmful bacteria and pathogens, keeping your family safe.',
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
                  src="/images/why-pool-cleaning.jpg"
                  alt="Why Professional Pool Cleaning"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#fcfcfc] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#529e00] font-bold text-sm uppercase tracking-widest mb-3">TRUST DUBAI HOME CLEANING SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Benefits of Choosing Our Pool <br />
              <span className="text-[#529e00]">Maintenance Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🧪',
                title: 'Expert Chemical Handling',
                desc: 'Our technicians are trained in precise chemical dosing to ensure water safety without harsh smells.'
              },
              {
                icon: '⚙️',
                title: 'High-End Equipment',
                desc: 'We use professional-grade vacuums and testing kits for accuracy that home kits can\'t match.'
              },
              {
                icon: '📅',
                title: 'Reliable Schedules',
                desc: 'Whether it\'s weekly or bi-weekly, we arrive on time to keep your pool ready for any party.'
              },
              {
                icon: '💳',
                title: 'Transparent Pricing',
                desc: 'Affordable maintenance packages with no hidden costs for chemicals or basic labor.'
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Why Choose Us For <span className="text-[#529e00]">Pool Cleaning</span> In Dubai?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Health Department Standards',
                desc: 'We strictly follow Dubai Municipality guidelines for public and private pool hygiene.'
              },
              {
                icon: Star,
                title: 'Experienced Staff',
                desc: 'Technicians with years of experience in managing luxury villa pools and community centers.'
              },
              {
                icon: Clock,
                title: 'Emergency Callouts',
                desc: 'Green pool? Filter leak? We offer rapid response for urgent pool maintenance needs.'
              },
              {
                icon: CheckCircle2,
                title: 'Quality Guarantee',
                desc: 'If you\'re not satisfied with the water clarity, we\'ll re-treat the pool immediately.'
              },
              {
                icon: Sparkles,
                title: 'Premium Chemicals',
                desc: 'We use high-quality, international standard chemicals that are safer for swimmers.'
              },
              {
                icon: Waves,
                title: 'Complete Solutions',
                desc: 'From basic cleaning to complex pump repairs, we are your one-stop shop.'
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
              Our Pool Cleaning Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A systematic approach to ensuring your water is safe and inviting
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Water Analysis', desc: 'Detailed testing of pH, Chlorine, and Alkalinity levels' },
              { step: '02', title: 'Deep Cleaning', desc: 'Skimming, brushing, and vacuuming to remove all debris' },
              { step: '03', title: 'Filtration Care', desc: 'Backwashing and cleaning skimmers for optimal flow' },
              { step: '04', title: 'Final Balancing', desc: 'Adding necessary chemicals for long-lasting clarity' },
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
            <p className="text-gray-600 max-w-2xl mx-auto">We offer a wide range of professional cleaning solutions across Dubai.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: 'Mattress Cleaning Services', href: '/mattress-cleaning-services' },
              { label: 'Carpet Shampooing', href: '/carpet-shampooing' },
              { label: 'Curtain UV & Steam Machine', href: '/Curtain-uv-and-steam-machine' },
              { label: 'Steam Deep Cleaning', href: '/steam-deep-cleaning' },
              { label: 'Apartment Deep Cleaning', href: '/apartment-deep-cleaning' },
              { label: 'Villa Deep Cleaning', href: '/villa-deep-cleaning' },
              { label: 'Office Deep Cleaning', href: '/office-deep-cleaning' },
              { label: 'Bathroom Deep Cleaning', href: '/bathroom-deep-cleaning' },
              { label: 'AC Duct Cleaning', href: '/ac-duct-cleaning' },
              { label: 'Move In Move Out Cleaning', href: '/move-in-move-out-cleaning' },
              { label: 'Kitchen Deep Cleaning', href: '/kitchen-deep-cleaning' },
              { label: 'Balcony Deep Cleaning', href: '/balcony-deep-cleaning' },
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
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Frequently Asked <span className="text-[#529e00]">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'How often should I have my pool cleaned?',
                a: 'In Dubai\'s climate, we recommend a minimum of twice a week to maintain chemical balance and remove sand.'
              },
              {
                q: 'Can I swim immediately after cleaning?',
                a: 'Generally, you can swim 30-60 minutes after standard chemical balancing. For shock treatments, you may need to wait 24 hours.'
              },
              {
                q: 'Do you provide the pool chemicals?',
                a: 'Yes, our maintenance packages include all standard chemicals needed for regular balancing.'
              },
              {
                q: 'What happens if my pool turns green?',
                a: 'Contact us immediately. We offer specialized "Green to Clean" recovery services to restore your water safely.'
              },
              {
                q: 'Do you fix pool pumps and lights?',
                a: 'Yes, we provide minor repairs and equipment replacement services along with regular cleaning.'
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
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
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#e8c600] to-[#d4b600] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Is Your Pool Party Ready?
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Book your professional pool cleaning today and enjoy a safe, crystal-clear swim
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Swimming Pool Cleaning service"
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
