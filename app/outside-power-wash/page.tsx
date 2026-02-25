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
  Droplets,
  ArrowRight,
  Phone,
  CheckCircle2
} from 'lucide-react';

export default function OutsidePowerWashPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Professional Exterior Care</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Premium Outside Power Wash Services In <span className="text-[#529e00]">Dubai</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
Our high-pressure power washing service removes tough stains, oil marks, algae, and grime from driveways, pavements, and walls. Industrial-grade equipment ensures deep surface cleaning. Power washing restores original color and texture effectively. Ideal for residential and commercial outdoor areas. Regular washing prevents surface deterioration and slip hazards. We use controlled pressure to protect delicate surfaces. Fast, efficient, and long-lasting results guaranteed. Revive your outdoor areas with professional power washing.              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Outside Power Wash service"
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
                    <p className="text-xs font-bold text-gray-500 uppercase">Licensed</p>
                    <p className="text-sm font-black text-[#091a33]">Certified Technicians</p>
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
                  src="/images/power-wash-hero.jpg"
                  alt="Outside Power Wash Dubai"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a33]/20 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#529e00] rounded-full flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">2500+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Areas Washed</p>
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
              <h2 className="text-3xl md:text-4xl font-black mb-4">Power Wash Task List</h2>
              <p className="text-white/90 text-base font-medium">We Deliver Intense Pressure Cleaning for a Spotless Exterior</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  'Driveway & Pavement Washing',
                  'Exterior Wall Pressure Cleaning',
                  'Swimming Pool Deck Wash',
                  'Boundary Wall Cleaning',
                  'Roof & Tile Power Washing',
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
                  'Stain & Oil Spot Removal',
                  'Graffiti & Mold Removal',
                  'Parking Area Detailing',
                  'Outdoor Furniture Cleaning',
                  'Post-Wash Surface Drying',
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

      {/* What's Included Section */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              What's Included In Our <span className="text-[#529e00]">Outside Power Wash?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive power washing service covers every exterior surface with extreme precision
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Driveway Cleaning',
                items: [
                  'Concrete stain removal',
                  'Oil & grease degreasing',
                  'Pressure washing pavement',
                  'Interlock tile cleaning',
                  'Curbstone detailing',
                ]
              },
              {
                title: 'Wall Pressure Wash',
                items: [
                  'Dust and sand removal',
                  'Spider web clearing',
                  'Algae & mold treatment',
                  'Window exterior rinsing',
                  'Paint-safe pressure wash',
                ]
              },
              {
                title: 'Patio & Deck Care',
                items: [
                  'Wooden deck soft wash',
                  'Stone patio scrubbing',
                  'Outdoor rug cleaning',
                  'Grout line pressure clean',
                  'Anti-slip surface finish',
                ]
              },
              {
                title: 'Pool Area Washing',
                items: [
                  'Pool surrounding tiles',
                  'Chlorine stain removal',
                  'Sunbed area sanitization',
                  'Glass fence cleaning',
                  'Drain cover clearing',
                ]
              },
              {
                title: 'Roof & Awning',
                items: [
                  'Tile roof washing',
                  'Gutter debris removal',
                  'Canvas awning cleaning',
                  'Solar panel rinsing',
                  'Bird dropping removal',
                ]
              },
              {
                title: 'Garage & Parking',
                items: [
                  'Corner cobweb removal',
                  'Exposed pipe cleaning',
                  'Shaded area washing',
                  'Final water drainage',
                ]
              },
			    {
                title: 'Floor Deep Cleaning',
                items: [
                 'Deep Cleaning of vinyl floors, concrete tiles, ceramic tiles using a scrubbing machine and wooden floors will be cleane by vacuum mopping.',
				  'Deep Cleaning of marble-type floors and stairs using a vacuum and  mopping',
                ]
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
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

      {/* Why Do You Need Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-6">
                Why Do You Need <span className="text-[#529e00]">Outside Power Wash</span> In Dubai?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Combat Desert Dust',
                    desc: 'Dubai\'s sandstorms leave thick layers of dust that only high-pressure washing can effectively remove.'
                  },
                  {
                    title: 'Enhance Curb Appeal',
                    desc: 'A clean exterior significantly improves the look of your home or building, making it look brand new.'
                  },
                  {
                    title: 'Prevent Damage',
                    desc: 'Removing mold, salt, and grime prevents long-term erosion of your exterior paint and building materials.'
                  },
                  {
                    title: 'Sanitized Outdoor Living',
                    desc: 'Clean patios and pool decks create a healthier environment for your family to enjoy the outdoors.'
                  },
                  {
                    title: 'Pre-Painting Prep',
                    desc: 'Essential for removing old debris and ensuring new paint adheres perfectly to exterior walls.'
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
                  src="/images/why-power-wash.jpg"
                  alt="Why Outside Power Wash"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-[#fcfcfc] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#529e00] font-bold text-sm uppercase tracking-widest mb-3">WHY CHOOSE DUBAI HOME CLEANING SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Benefits of Our Professional <br />
              <span className="text-[#529e00]">Power Washing Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🛠️',
                title: 'High-Tech Equipment',
                desc: 'We use industrial-grade pressure washers with adjustable settings for various surfaces.'
              },
              {
                icon: '🌍',
                title: 'Water Efficient',
                desc: 'Our modern nozzles use less water while providing maximum cleaning power for eco-friendly results.'
              },
              {
                icon: '⭐',
                title: 'Instant Results',
                desc: "See the transformation immediately as years of grime vanish in minutes under our expert care."
              },
              {
                icon: '💸',
                title: 'Cost Effective',
                desc: 'Regular power washing saves money by extending the life of your exterior surfaces and paint.'
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Why Choose Us For <span className="text-[#529e00]">Outside Power Wash</span> In Dubai?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Safety First',
                desc: 'We follow strict safety protocols to protect your property and our workers during high-pressure cleaning.'
              },
              {
                icon: Star,
                title: 'Surface Expertise',
                desc: 'Our team knows exactly which pressure level is safe for stone, wood, concrete, or paint.'
              },
              {
                icon: Clock,
                title: 'Punctual Service',
                desc: 'We value your time and arrive on schedule to complete the washing efficiently.'
              },
              {
                icon: CheckCircle2,
                title: 'Deep Restoration',
                desc: 'We don\'t just rinse; we deep clean to restore the original color and texture of your surfaces.'
              },
              {
                icon: Sparkles,
                title: 'Eco-Friendly Chemicals',
                desc: 'Safe, biodegradable cleaning agents that won\'t harm your garden or pets.'
              },
              {
                icon: Droplets,
                title: 'Full Coverage',
                desc: 'From the roof to the driveway, we ensure every inch of your exterior is spotless.'
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
              Our Power Washing Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A systematic approach to outdoor restoration
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Surface Scan', desc: 'Identifying delicate areas and stubborn stains for the right treatment' },
              { step: '02', title: 'Pre-Treatment', desc: 'Applying eco-friendly solutions to break down oil, mold, and grease' },
              { step: '03', title: 'High-Pressure Wash', desc: 'Systematic cleaning using professional-grade power washers' },
              { step: '04', title: 'Quality Check', desc: 'Final walkthrough to ensure all surfaces are flawlessly clean' },
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
              Common <span className="text-[#529e00]">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Will high pressure damage my exterior paint?',
                a: 'Our technicians use adjustable pressure settings and "soft wash" techniques for painted surfaces to ensure a deep clean without any damage.'
              },
              {
                q: 'How often should I power wash my driveway?',
                a: 'In Dubai\'s dusty climate, we recommend a professional power wash every 6 months to maintain a fresh look.'
              },
              {
                q: 'Do you need access to a water connection?',
                a: 'Yes, we typically require access to an external water tap. However, we bring all our own hoses and specialized equipment.'
              },
              {
                q: 'Can you remove oil stains from the garage floor?',
                a: 'Yes, we use industrial degreasers combined with hot-water pressure washing to tackle even the most stubborn oil and grease spots.'
              },
              {
                q: 'Is power washing safe for my garden plants?',
                a: 'Absolutely. We use biodegradable, plant-safe cleaning solutions and take extra care to protect your landscaping during the process.'
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
              Ready For A Brighter Property?
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Book your professional outside power wash today and let your exterior shine like new
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Outside Power Wash service"
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