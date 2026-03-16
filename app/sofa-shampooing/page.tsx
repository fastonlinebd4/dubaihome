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
  CheckCircle2,
  Waves
} from 'lucide-react';

export default function SofaShampooingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Deep Upholstery Care</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Top Sofa <span className="text-[#529e00]">Shampooing</span> Services Dubai
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Restore the comfort and freshness of your furniture with our{' '}
                <strong>professional sofa shampooing services in Dubai</strong>. We deep clean fabric and upholstery to remove{' '}
                <strong>stubborn stains, dust, sweat residue, food spills, and unpleasant odors</strong>. Our team uses{' '}
                <strong>powerful extraction machines and fabric-safe shampoos</strong> that lift embedded dirt without damaging color or texture. We also target{' '}
                <strong>allergens and dust mites</strong> to improve indoor air quality, making your home healthier — especially for kids and allergy-sensitive family members. From{' '}
                <strong>sectional sofas, armchairs, cushions, and dining chairs</strong>, we clean with detailed attention.{' '}
                <Link href="/Curtain-uv-and-steam-machine" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">Delicate fabrics receive special care</Link>{' '}
                with the right technique and moisture control. <strong>Quick-drying methods</strong> reduce waiting time, so your sofa feels fresh and usable sooner. Enjoy a visibly cleaner sofa with a soft, renewed finish and <strong>long-lasting freshness</strong>.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Sofa Shampooing service"
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
                    <p className="text-sm font-black text-[#091a33]">Upholstery Technicians</p>
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
                  src="/images/sofa-carpet-hero.jpg"
                  alt="Sofa Shampooing Dubai"
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
                    <p className="text-2xl font-black text-[#091a33]">5000+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Sofas Cleaned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Box */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#529e00] to-[#3d7700] rounded-[60px] p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#c5e899] to-[#a8d96e] rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Waves className="w-12 h-12 text-[#529e00]" />
            </div>

            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Sofa Shampooing Task List</h2>
              <p className="text-white/90 text-base font-medium">Professional Injection-Extraction Method for Flawless Results</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Sofa & Couch Shampooing', href: null },
                  { label: 'Armchair & Recliner Cleaning', href: null },
                  { label: 'Cushion Deep Cleaning', href: null },
                  { label: 'Ottoman & Stool Cleaning', href: null },
                  { label: 'Dining Chair Shampooing', href: null },
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
                  { label: 'Stain & Spot Treatment', href: null },
                  { label: 'Odor Neutralization', href: null },
                  { label: 'Fabric Steam Cleaning (Optional)', href: '/steam-deep-cleaning' },
                  { label: 'Dust Mite & Allergen Removal', href: '/mattress-cleaning-services' },
                  { label: 'Quick Drying Treatment', href: null },
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
              Our Professional <span className="text-[#529e00]">Sofa Cleaning Scope</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use industrial-grade extraction machines to penetrate deep into upholstery fibers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Sofa Shampooing',
                href: null,
                items: [
                  { label: 'Fabric assessment', href: null },
                  { label: 'Dry vacuuming (Dusting)', href: null },
                  { label: 'Shampoo injection', href: null },
                  { label: 'Mechanical scrubbing', href: null },
                  { label: 'Dirt extraction', href: null },
                ]
              },
              {
                title: 'Cushion Cleaning',
                href: null,
                items: [
                  { label: 'Seat cushion cleaning', href: null },
                  { label: 'Back cushion shampooing', href: null },
                  { label: 'Corner detailing', href: null },
                  { label: 'Hidden dust removal', href: null },
                  { label: 'Fabric grooming', href: null },
                ]
              },
              {
                title: 'Stain Treatment',
                href: null,
                items: [
                  { label: 'Coffee & tea spots', href: null },
                  { label: 'Ink & oil removal', href: null },
                  { label: 'Food stain treatment', href: null },
                  { label: 'Old stain lifting', href: null },
                  { label: 'Color protection', href: null },
                ]
              },
              {
                title: 'Odor Removal',
                href: null,
                items: [
                  { label: 'Pet odor neutralization', href: null },
                  { label: 'Smoke smell reduction', href: null },
                  { label: 'Deodorizing rinse', href: null },
                  { label: 'Source-level treatment', href: null },
                  { label: 'Fresh finish', href: null },
                ]
              },
              {
                title: 'Dining Chairs',
                href: null,
                items: [
                  { label: 'Dining chair shampoo', href: null },
                  { label: 'Velvet chair care', href: null },
                  { label: 'Armrest cleaning', href: null },
                  { label: 'Upholstery sanitizing', href: null },
                  { label: 'Fabric softening', href: null },
                ]
              },
              {
                title: 'Final Touches',
                href: null,
                items: [
                  { label: 'Deodorizing spray', href: null },
                  { label: 'Fabric conditioning', href: null },
                  { label: 'Drying fan setup', href: null },
                  { label: 'Color revival', href: null },
                  { label: 'Quality check', href: null },
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
                      <span className="text-sm text-gray-600 font-medium">{item.label}</span>
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
                Importance of <span className="text-[#529e00]">Regular Sofa Shampooing</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Remove Hidden Allergens',
                    desc: 'Sofas trap dust mites and pollen. Deep shampooing removes these triggers for better respiratory health.',
                    href: '/mattress-cleaning-services',
                  },
                  {
                    title: 'Prolong Sofa Life',
                    desc: 'Gritty dirt damages fabric fibers. Regular cleaning prevents wear and keeps colors vibrant.',
                    href: null,
                  },
                  {
                    title: 'Professional Odor Removal',
                    desc: 'Cooking smells and pet odors linger in upholstery. We neutralize odors at the source rather than masking them.',
                    href: null,
                  },
                  {
                    title: 'Stain Prevention',
                    desc: 'Treating spots early prevents them from becoming permanent marks that ruin your sofa\'s look.',
                    href: null,
                  },
                  {
                    title: 'Improves Indoor Freshness',
                    desc: 'Clean upholstery means less airborne dust and a noticeably fresher living room environment.',
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
                  src="/images/why-shampooing.jpg"
                  alt="Importance of Sofa Shampooing"
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
            <p className="text-[#529e00] font-bold text-sm uppercase tracking-widest mb-3">TRUST THE EXPERTS</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Benefits of DUBAI HOME CLEANING SERVICES <br />
              <span className="text-[#529e00]">Sofa Shampooing</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛋️', title: 'Upholstery-Safe Solutions', desc: 'We use fabric-safe shampoos that are tough on dirt but gentle on delicate fibers and colors.' },
              { icon: '⚡', title: 'High-Power Extraction', desc: 'Our machines remove deep dirt and extract moisture, helping your sofa dry faster and stay fresher.' },
              { icon: '🌿', title: 'Pet & Child Safe', desc: "All our cleaning agents are non-toxic and eco-friendly, safe for families and pets." },
              { icon: '💎', title: 'Fresh Look & Feel', desc: 'Deep cleaning restores softness, removes dullness, and brings back a clean, renewed finish.' },
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
              href="https://wa.me/971565429198?text=I need Sofa Shampooing service"
              className="inline-flex items-center gap-2 bg-white text-[#091a33] px-8 py-4 rounded-full font-bold text-sm border-2 border-gray-200 hover:border-[#529e00] hover:bg-gray-50 transition-all shadow-md"
            >
              Book On WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Why Choose Us For <span className="text-[#529e00]">Sofa Cleaning</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Fully Insured', desc: 'Peace of mind with a licensed company that treats your furniture with professional care.', href: null },
              { icon: Star, title: 'Stain Experts', desc: 'Our technicians are trained to remove common stains using safe, fabric-friendly methods.', href: null },
              { icon: Clock, title: 'On-Time Service', desc: 'We value your time. Punctual arrival and efficient cleaning processes guaranteed.', href: null },
              { icon: CheckCircle2, title: 'Freshness Guaranteed', desc: '100% satisfaction. If you are not happy, we will re-clean it for free.', href: null },
              { icon: Sparkles, title: 'Steam Option', desc: 'Optional high-temperature steam sanitization for deeper hygiene and germ reduction.', href: '/steam-deep-cleaning' },
              { icon: Home, title: 'At-Home Convenience', desc: 'We bring our industrial equipment to your doorstep for a hassle-free experience.', href: '/apartment-deep-cleaning' },
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
            <h2 className="text-3xl md:text-4xl font-black mb-4">Our 4-Step Sofa Shampooing Process</h2>
            <p className="text-white/80 max-w-2xl mx-auto">How we ensure your sofa looks fresh, clean, and renewed again</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Inspection', desc: 'Checking fabric type, condition, and stain areas' },
              { step: '02', title: 'Pre-Treatment', desc: 'Applying fabric-safe shampoo and targeted stain treatment' },
              { step: '03', title: 'Deep Scrubbing', desc: 'Agitating embedded dirt using upholstery brushes' },
              { step: '04', title: 'Extraction', desc: 'Extracting dirt and moisture for a deeper clean and faster dry' },
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
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Frequently Asked <span className="text-[#529e00]">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'How long does it take for the sofa to dry?', a: 'Typically, it takes 3 to 5 hours depending on the fabric and ventilation. We use high-power extraction to minimize drying time.' },
              { q: 'Can you remove all types of stains?', a: 'We have a high success rate with most stains like coffee, ink, and pet accidents. However, very old or set-in stains may not be 100% removable.' },
              { q: 'Are the cleaning solutions safe for kids and pets?', a: 'Absolutely. We use biodegradable and non-toxic shampoos that leave no harmful residue behind.' },
              { q: 'Do I need to move the sofa before cleaning?', a: 'Our team will handle moving light furniture. For heavy items, we clean around them or follow your instructions.' },
              { q: 'Do you clean cushions and dining chairs too?', a: 'Yes. We clean sofa cushions, armchairs, ottomans, and dining chairs as part of our upholstery shampooing options.' },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-[#fcfcfc] rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-[#091a33]">{faq.q}</span>
                  <div className="w-8 h-8 bg-[#529e00]/10 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#529e00] rotate-90" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#e8c600] to-[#d4b600] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">Refresh Your Home Today!</h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">Get your sofa professionally deep cleaned by Dubai's top-rated professionals.</p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Sofa Shampooing service"
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
