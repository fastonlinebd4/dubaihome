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
  Zap
} from 'lucide-react';

export default function CurtainUVSteamMachinePage() {
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
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-white via-[#fcfcfc] to-gray-50">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff3d00]/10 border border-[#ff3d00]/20 rounded-full">
                <Zap className="w-4 h-4 text-[#ff3d00]" />
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Advanced Technology</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Curtain UV Steam <span className="text-[#ff3d00]">Machine Service</span> In Dubai
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Restore freshness and hygiene to your curtains with our <strong>professional UV & steam curtain cleaning services in Dubai</strong>. Curtains easily trap <strong>dust, allergens, bacteria, and odors</strong> over time, affecting indoor air quality and overall comfort. Our <strong>advanced UV light technology</strong> helps eliminate harmful microorganisms, while <strong>high-temperature steam penetrates deep into fabric fibers</strong> for powerful sanitization. This <strong>chemical-free method is safe for delicate fabrics</strong>, making it ideal for <Link href="/apartment-deep-cleaning" className="text-[#ff3d00] underline underline-offset-2 hover:text-[#d43300] transition-colors font-bold">homes</Link>, <Link href="/office-deep-cleaning" className="text-[#ff3d00] underline underline-offset-2 hover:text-[#d43300] transition-colors font-bold">offices</Link>, hotels, and commercial spaces. We carefully treat different curtain materials <strong>without causing damage or shrinkage</strong>. Steam cleaning also <strong>removes stubborn stains and neutralizes unpleasant odors</strong> effectively. Regular curtain cleaning <strong>improves air circulation and reduces allergy triggers</strong>.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/971565429198?text=I need Curtain UV Steam Machine service" className="inline-flex items-center gap-3 bg-[#ff3d00] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#d43300] transition-all shadow-lg hover:shadow-xl">
                  Get Free Quote <ArrowRight className="w-5 h-5" />
                </a>
                <a href="tel:+971565429198" className="inline-flex items-center gap-3 bg-white text-[#091a33] px-8 py-4 rounded-xl font-bold text-sm border-2 border-gray-200 hover:border-[#ff3d00] transition-all">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#ff3d00]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#ff3d00]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Hospital</p>
                    <p className="text-sm font-black text-[#091a33]">Grade Clean</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">99.9%</p>
                    <p className="text-sm font-black text-[#091a33]">Sanitization</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/uv-steam-cleaning-hero.jpg" alt="Curtain UV Steam Machine Dubai" width={600} height={500} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a33]/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#ff3d00] rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">Pure Tech</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Steam Sterilized</p>
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
          <div className="relative bg-gradient-to-br from-[#091a33] to-[#1a3a5a] rounded-[60px] p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#ff3d00] to-[#b32b00] rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Curtain UV Steam Task List</h2>
              <p className="text-white/90 text-base font-medium">Technologically Advanced Sterilization Process</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-[32px] p-8 space-y-4 border border-white/10">
                {[
                  { label: 'Initial Dust Extraction', href: null },
                  { label: 'High-Temp Steam Penetration', href: '/steam-deep-cleaning' },
                  { label: 'Deep Fiber Sanitization', href: null },
                  { label: 'UV Light Bacteria Killing', href: null },
                  { label: 'Curtain Safe Spot Removal', href: null },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#ff3d00] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    {item.href ? (
                      <Link href={item.href} className="text-white font-bold text-base hover:text-[#ff3d00] underline underline-offset-2 transition-colors">{item.label}</Link>
                    ) : (
                      <p className="text-white font-bold text-base">{item.label}</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-[32px] p-8 space-y-4 border border-white/10">
                {[
                  { label: 'Mite & Allergen Removal', href: '/mattress-cleaning-services' },
                  { label: 'Deodorization Treatment', href: null },
                  { label: 'Moisture-Free Finishing', href: null },
                  { label: 'Fiber Texture Restoration', href: null },
                  { label: 'Post-Service Hygiene Audit', href: null },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#ff3d00] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    {item.href ? (
                      <Link href={item.href} className="text-white font-bold text-base hover:text-[#ff3d00] underline underline-offset-2 transition-colors">{item.label}</Link>
                    ) : (
                      <p className="text-white font-bold text-base">{item.label}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">Advanced <span className="text-[#ff3d00]">Service Scope</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Utilizing high-end UV and Steam technology to bring back the purity of your Curtain surfaces and fabrics.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'UV Sterilization', href: null, items: [{ label: 'UV-C light treatment', href: null }, { label: 'Killing bacteria/viruses', href: null }, { label: 'DNA-level pathogen destruction', href: null }, { label: 'Chemical-free sanitization', href: null }] },
              { title: 'Steam Deep Clean', href: '/steam-deep-cleaning', items: [{ label: '100°C+ dry steam injection', href: null }, { label: 'Breaking down tough oils', href: null }, { label: 'Opening fabric pores', href: null }, { label: 'Deep fiber extraction', href: null }] },
              { title: 'Fabric Protection', href: null, items: [{ label: 'Safe for natural Curtain', href: null }, { label: 'No shrinkage technology', href: null }, { label: 'Color fading protection', href: null }, { label: 'Softness preservation', href: null }] },
              { title: 'Dust Mite Control', href: '/mattress-cleaning-services', items: [{ label: 'Eliminating microscopic pests', href: null }, { label: 'Removal of egg larvae', href: null }, { label: 'Allergy relief solution', href: null }, { label: 'Sanitary barrier creation', href: null }] },
              { title: 'Curtain Polishing', href: null, items: [{ label: 'Surface lint removal', href: null }, { label: 'Gentle texture grooming', href: null }, { label: 'Restoring fabric luster', href: null }, { label: 'Machine-precise finishing', href: null }] },
              { title: 'Health Inspection', href: null, items: [{ label: 'Surface hygiene testing', href: null }, { label: 'Odor source identification', href: null }, { label: 'Final microbial check', href: null }, { label: 'Quality assurance report', href: null }] },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                {service.href ? (
                  <Link href={service.href}><h3 className="text-xl font-black text-[#091a33] mb-4 hover:text-[#ff3d00] transition-colors">{service.title}</h3></Link>
                ) : (
                  <h3 className="text-xl font-black text-[#091a33] mb-4">{service.title}</h3>
                )}
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ff3d00] flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600 font-medium">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-6">Why Use <span className="text-[#ff3d00]">UV & Steam</span> Machines?</h2>
              <div className="space-y-6">
                {[
                  { title: 'Ultimate Sanitization', desc: 'Standard cleaning only removes surface dirt. UV-C light kills germs at the source without harmful chemicals.', href: '/steam-deep-cleaning' },
                  { title: 'Deep Allergen Removal', desc: 'Hot steam penetrates deep into Curtain fibers, removing trapped pollen and dust mites that cause allergies.', href: '/mattress-cleaning-services' },
                  { title: 'Eco-Friendly Approach', desc: 'By using the power of heat and light, we reduce the need for harsh detergents, making it safe for your home.', href: null },
                  { title: 'Prevents Fabric Decay', desc: 'Micro-organisms can eat away at Curtain fibers. Sterilization extends the life of your furniture and fabrics.', href: '/sofa-shampooing' },
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#e8c600] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      {point.href ? (
                        <Link href={point.href}><h3 className="text-lg font-bold text-[#091a33] mb-2 hover:text-[#ff3d00] transition-colors">{point.title}</h3></Link>
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
                <Image src="/images/uv-machine-action.jpg" alt="UV Steam Machine Service" width={600} height={700} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">Advanced <span className="text-[#ff3d00]">Machinery Benefits</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌡️', title: '120°C Steam', desc: 'Powerful dry steam that kills germs instantly without soaking the fabric.' },
              { icon: '🛡️', title: 'UV-C Shield', desc: 'Medical-grade UV technology to sterilize and protect surfaces.' },
              { icon: '🌬️', title: 'Rapid Drying', desc: 'Our machines extract moisture instantly, leaving fabrics ready to use.' },
              { icon: '💎', title: 'Curtain Safe', desc: 'Specifically calibrated settings for natural and synthetic Curtain.' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all group border border-gray-100">
                <div className="w-16 h-16 bg-[#ff3d00]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-3xl">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#091a33] mb-3 leading-tight">{service.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">Explore Our Other <span className="text-[#ff3d00]">Cleaning Services</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer a wide range of professional cleaning solutions across Dubai.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: 'Steam Deep Cleaning', href: '/steam-deep-cleaning' },
              { label: 'Sofa Shampooing', href: '/sofa-shampooing' },
              { label: 'Mattress Cleaning Services', href: '/mattress-cleaning-services' },
              { label: 'Carpet Shampooing', href: '/carpet-shampooing' },
              { label: 'Apartment Deep Cleaning', href: '/apartment-deep-cleaning' },
              { label: 'Villa Deep Cleaning', href: '/villa-deep-cleaning' },
              { label: 'Office Deep Cleaning', href: '/office-deep-cleaning' },
              { label: 'Bathroom Deep Cleaning', href: '/bathroom-deep-cleaning' },
              { label: 'AC Duct Cleaning', href: '/ac-duct-cleaning' },
              { label: 'Move In Move Out Cleaning', href: '/move-in-move-out-cleaning' },
              { label: 'Balcony Deep Cleaning', href: '/balcony-deep-cleaning' },
              { label: 'Kitchen Deep Cleaning', href: '/kitchen-deep-cleaning' },
            ].map((service, idx) => (
              <Link key={idx} href={service.href} className="flex items-center gap-2 bg-[#fcfcfc] border border-gray-100 rounded-xl px-4 py-3 text-sm font-semibold text-[#091a33] hover:border-[#ff3d00] hover:text-[#ff3d00] hover:shadow-md transition-all group">
                <ArrowRight className="w-4 h-4 text-[#ff3d00] group-hover:translate-x-1 transition-transform flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">Machine Service <span className="text-[#ff3d00]">FAQs</span></h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Is UV light safe for all types of Curtain?', a: 'Yes, our UV-C machines are calibrated for domestic use and do not damage natural or synthetic Curtain fibers.' },
              { q: 'How long does the steam take to dry?', a: 'We use "Dry Steam" technology which contains very low moisture. Most surfaces are dry and ready for use within 15-30 minutes.' },
              { q: 'Does it remove old stains?', a: 'The heat from the steam is excellent at loosening old stains, though permanent dye damage cannot be reversed.' },
              { q: 'Can this service help with bed bugs?', a: 'Yes, the combination of high-temperature steam and UV light is highly effective at killing bed bugs and their eggs on contact.' },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-[#091a33]">{faq.q}</span>
                  <div className="w-8 h-8 bg-[#ff3d00]/10 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#ff3d00] rotate-90" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#ff3d00] rounded-3xl p-8 md:p-12 text-center shadow-2xl text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready for a Deeper, Healthier Clean?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">Book our Curtain UV Steam Machine service today and give your home the protection it deserves.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/971565429198?text=I need Curtain UV Steam Machine service" className="inline-flex items-center gap-3 bg-white text-[#ff3d00] px-8 py-4 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all shadow-lg">
                Book Machine Service <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+971565429198" className="inline-flex items-center gap-3 bg-[#091a33] text-white px-8 py-4 rounded-xl font-bold text-sm border-2 border-[#091a33] hover:bg-[#0a1f3d] transition-all">
                <Phone className="w-5 h-5" /> +971 56 542 9198
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
