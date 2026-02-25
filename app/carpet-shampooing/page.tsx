'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
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

export default function CarpetShampooingPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">
                  Deep Carpet Care
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Top Carpet <span className="text-[#529e00]">Shampooing</span> Services Dubai
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Restore the freshness and cleanliness of your carpets with our professional carpet shampooing services in Dubai. We deep clean carpets and rugs to remove embedded dirt, stubborn stains, food spills, pet hair, and unpleasant odors. Our powerful injection-extraction machines penetrate deep into carpet fibers without damaging texture or color. We eliminate allergens, bacteria, and dust mites to improve indoor air quality—ideal for homes with children or allergy-sensitive family members. From wall-to-wall carpets to decorative rugs and high-traffic areas, we clean with precision and care. Quick-drying methods reduce waiting time so your carpets are ready to use faster. Enjoy visibly brighter, softer, and long-lasting freshness in every room.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Carpet Shampooing service"
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
                    <p className="text-sm font-black text-[#091a33]">Carpet Technicians</p>
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
                  src="/images/carpet-hero.jpg"
                  alt="Carpet Shampooing Dubai"
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
                    <p className="text-xs font-bold text-gray-500 uppercase">Carpets Cleaned</p>
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
              <h2 className="text-3xl md:text-4xl font-black mb-4">Carpet Shampooing Task List</h2>
              <p className="text-white/90 text-base font-medium">
                Professional Injection-Extraction Method for Flawless Results
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  'Wall-to-Wall Carpet Shampooing',
                  'Area Rug Deep Cleaning',
                  'Stain & Spot Treatment',
                  'Pet Hair Removal',
                  'Odor Neutralization',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#529e00] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <p className="text-[#091a33] font-bold text-base">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  'Deep Fiber Extraction',
                  'High-Traffic Area Focus',
                  'Allergen Removal',
                  'Steam Sanitization',
                  'Quick Dry Technology',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#529e00] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <p className="text-[#091a33] font-bold text-base">{item}</p>
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
              Our Professional <span className="text-[#529e00]">Carpet Cleaning Scope</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use industrial-grade shampooing machines to penetrate deep into carpet fibers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Carpet Deep Clean',
                items: [
                  'Carpet assessment',
                  'Dry vacuuming (Dusting)',
                  'Shampoo injection',
                  'Mechanical scrubbing',
                  'Dirt extraction',
                ]
              },
              {
                title: 'Rug Cleaning',
                items: [
                  'Area rug shampooing',
                  'Rug fringe cleaning',
                  'Gentle fiber care',
                  'Deep dirt removal',
                  'Fabric fluffing',
                ]
              },
              {
                title: 'High-Traffic Areas',
                items: [
                  'Entryway focus',
                  'Hallway deep clean',
                  'Stair carpet care',
                  'Extra agitation',
                  'Fiber lifting',
                ]
              },
              {
                title: 'Stain Treatment',
                items: [
                  'Coffee & tea spots',
                  'Ink & oil removal',
                  'Food stain treatment',
                  'Old stain lifting',
                  'Color protection',
                ]
              },
              {
                title: 'Allergen Removal',
                items: [
                  'Dust mite extraction',
                  'Pet dander removal',
                  'Deodorizing rinse',
                  'Sanitizing treatment',
                  'Improved air quality',
                ]
              },
              {
                title: 'Final Touches',
                items: [
                  'Deodorizing spray',
                  'Carpet grooming',
                  'Drying fan setup',
                  'Color revival',
                  'Quality check',
                ]
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-black text-[#091a33] mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#529e00] flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600 font-medium">{item}</span>
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
                Importance of <span className="text-[#529e00]">Regular Carpet Shampooing</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Eliminate Indoor Allergens',
                    desc: 'Carpets trap dust mites and pollen. Our deep shampooing removes these triggers for better respiratory health.'
                  },
                  {
                    title: 'Prolong Carpet Life',
                    desc: 'Gritty dirt acts like sandpaper on fibers. Regular cleaning prevents wear and keeps colors vibrant.'
                  },
                  {
                    title: 'Professional Odor Removal',
                    desc: 'Cooking smells and pet odors can linger in carpet fibers. We neutralize odors at the source rather than masking them.'
                  },
                  {
                    title: 'Stain Prevention',
                    desc: 'Treating spots early prevents them from becoming permanent marks that ruin your carpet’s look.'
                  },
                  {
                    title: 'Improves Air Quality',
                    desc: 'Clean carpets mean less airborne dust, creating a significantly fresher atmosphere inside your Dubai home.'
                  },
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#e8c600] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#091a33] mb-2">{point.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/why-carpet.jpg"
                  alt="Importance of Carpet Shampooing"
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
              <span className="text-[#529e00]">Carpet Care Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🧼',
                title: 'Fiber-Safe Solutions',
                desc: 'We use carpet-safe shampoos that are tough on dirt but gentle on delicate fibers and colors.'
              },
              {
                icon: '⚡',
                title: 'High-Power Extraction',
                desc: 'Our machines extract most moisture, helping carpets dry faster and reducing the risk of lingering damp smell.'
              },
              {
                icon: '🌿',
                title: 'Pet & Child Safe',
                desc: "All our cleaning agents are non-toxic and eco-friendly, keeping your family safe from harsh chemicals."
              },
              {
                icon: '💎',
                title: 'Color Restoration',
                desc: 'Deep cleaning removes the grey layer of dust, restoring the original brightness of your carpets.'
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
              href="https://wa.me/971565429198?text=I need Carpet Shampooing service"
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
              Why Choose Us For <span className="text-[#529e00]">Carpet Cleaning</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Fully Insured',
                desc: 'Peace of mind with a licensed company that treats your carpets with professional care.'
              },
              {
                icon: Star,
                title: 'Stain Experts',
                desc: 'Our technicians are trained to remove common stains using safe, carpet-friendly methods.'
              },
              {
                icon: Clock,
                title: 'On-Time Service',
                desc: 'We value your time. Punctual arrival and efficient cleaning processes guaranteed.'
              },
              {
                icon: CheckCircle2,
                title: 'Freshness Guaranteed',
                desc: '100% satisfaction. If you are not happy with the result, we will re-clean it for free.'
              },
              {
                icon: Sparkles,
                title: 'Steam Option',
                desc: 'Optional high-temperature steam sanitization for deeper hygiene and germ reduction.'
              },
              {
                icon: Home,
                title: 'At-Home Convenience',
                desc: 'We bring our industrial equipment to your doorstep for a hassle-free experience.'
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
            <h2 className="text-3xl md:text-4xl font-black mb-4">Our 4-Step Carpet Shampooing Process</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              How we ensure your carpets look fresh, clean, and revived again
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Inspection', desc: 'Checking carpet type, condition, and stain areas' },
              { step: '02', title: 'Pre-Treatment', desc: 'Applying carpet-safe shampoo and targeted stain treatment' },
              { step: '03', title: 'Deep Scrubbing', desc: 'Agitating embedded dirt using specialized carpet brushes' },
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
                q: 'How long does it take for the carpet to dry?',
                a: 'Typically, it takes 3 to 6 hours depending on carpet thickness, ventilation, and humidity. We use high-power extraction to reduce drying time.'
              },
              {
                q: 'Can you remove old stains from carpets?',
                a: 'We have a high success rate with common stains like coffee, ink, and pet accidents. Very old or chemically set stains may not be removable 100%.'
              },
              {
                q: 'Are the cleaning chemicals safe for kids and pets?',
                a: 'Yes. We use biodegradable and non-toxic shampoos that leave no harmful residue behind.'
              },
              {
                q: 'Do I need to move furniture before shampooing?',
                a: 'Our team can move light furniture. For heavy items, we clean around them or follow your instructions.'
              },
              {
                q: 'Is carpet shampooing better than dry cleaning?',
                a: 'Shampooing with extraction is one of the most effective methods to remove deep-seated dirt, allergens, and odors compared to surface dry cleaning.'
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
              Refresh Your Home Today!
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Get your carpets professionally deep cleaned by Dubai's top-rated professionals.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Carpet Shampooing service"
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
