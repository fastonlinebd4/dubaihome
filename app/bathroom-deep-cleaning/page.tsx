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
  Mail,
  MapPin,
  CheckCircle2,
  Droplets // Bathroom cleaning এর জন্য পরিবর্তন করা হয়েছে
} from 'lucide-react';

export default function BathroomDeepCleaningPage() {
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
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-white via-[#fcfcfc] to-blue-50">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full">
                <Droplets className="w-4 h-4 text-blue-600" />
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Hygiene First</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Premium Bathroom Deep Cleaning In <span className="text-blue-600">Dubai</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
Our bathroom deep cleaning service in Dubai eliminates stubborn limescale, soap scum, mold, and bacteria buildup from every surface. We thoroughly scrub tiles, grout lines, bathtubs, showers, sinks, mirrors, and toilet areas using powerful yet eco-friendly disinfectants. Hard water stains and mineral deposits are carefully removed to restore shine and hygiene. We focus on hidden corners and drainage areas where germs often accumulate. This service improves cleanliness, removes unpleasant odors, and enhances overall bathroom appearance. Ideal for villas, apartments, hotels, and commercial properties. Our team ensures complete sanitization for a healthier space. Experience a sparkling, fresh, and germ-free bathroom.              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Bathroom Deep Cleaning service"
                  className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="tel:+971565429198"
                  className="inline-flex items-center gap-3 bg-white text-[#091a33] px-8 py-4 rounded-xl font-bold text-sm border-2 border-gray-200 hover:border-blue-600 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-600/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Sanitized</p>
                    <p className="text-sm font-black text-[#091a33]">100% Germ-Free</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Quality</p>
                    <p className="text-sm font-black text-[#091a33]">Professional Tools</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/bathroom-cleaning-hero.jpg"
                  alt="Bathroom Deep Cleaning Dubai"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a33]/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">Shiny</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Stain Removal</p>
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
          <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-[60px] p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            {/* Top Icon Badge */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-blue-300 to-blue-500 rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Droplets className="w-12 h-12 text-white" />
            </div>

            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Bathroom Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">Deep Scrubbing & Disinfection for a Healthy Bathroom</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Column 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-[32px] p-8 space-y-4">
                {[
                  'Limescale & Hard Water Removal',
                  'Grout Cleaning & Whitening',
                  'Floor & Wall Tile Scrubbing',
                  'Toilet Bowl Disinfection',
                  'Mirror & Glass Polishing',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <p className="text-[#091a33] font-bold text-base">{item}</p>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-[32px] p-8 space-y-4">
                {[
                  'Bathtub & Shower Sanitization',
                  'Sink & Faucet Polishing',
                  'Drain Cleaning & Deodorizing',
                  'Cabinet Cleaning (Exterior)',
                  'Exhaust Fan & Vent Cleaning',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
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
              Our Professional <span className="text-blue-600">Cleaning Scope</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We cover every corner of your bathroom to provide a deep, medical-grade clean that lasts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Floor & Tiles',
                items: [
                  'Power scrubbing of tiles',
                  'Removal of soap scum',
                  'Grout stain treatment',
                  'Antibacterial mopping',
                ]
              },
              {
                title: 'Fixtures & Fittings',
                items: [
                  'Faucet & Tap descaling',
                  'Stainless steel polishing',
                  'Showerhead deep clean',
                  'Towel rail cleaning',
                ]
              },
              {
                title: 'Sanitization',
                items: [
                  'Full toilet disinfection',
                  'Rim and base cleaning',
                  'Seat sanitization',
                  'Eco-friendly germ killer',
                ]
              },
              {
                title: 'Glass & Mirrors',
                items: [
                  'Water mark removal',
                  'Streak-free polishing',
                  'Shower screen cleaning',
                  'Frame wiping',
                ]
              },
              {
                title: 'Odor Control',
                items: [
                  'Drainage deodorizing',
                  'Ventilation cleaning',
                  'Fresh scent application',
                  'Mold & mildew removal',
                ]
              },
              {
                title: 'Full Inspection',
                items: [
                  'Checking all surfaces',
                  'Final spot treatment',
                  'Cabinet wiping',
                  'Customer approval',
                ]
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <h3 className="text-xl font-black text-[#091a33] mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
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
                Why Choose Professional <span className="text-blue-600">Deep Cleaning?</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Eliminate Bacteria',
                    desc: 'Bathrooms are breeding grounds for germs. Our medical-grade disinfectants kill 99.9% of bacteria.'
                  },
                  {
                    title: 'Remove Limescale',
                    desc: 'Dubai\'s water can leave hard white deposits on taps and glass. We remove them without damaging the surfaces.'
                  },
                  {
                    title: 'Mold Prevention',
                    desc: 'High humidity causes mold in grout. We treat and remove mold to keep your air quality healthy.'
                  },
                  {
                    title: 'Saves Time & Effort',
                    desc: 'Deep cleaning is exhausting. Let our pros handle the heavy scrubbing while you relax.'
                  },
                  {
                    title: 'Longer Fixture Life',
                    desc: 'Regular descaling prevents corrosion and keeps your expensive bathroom fittings looking new for years.'
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
                  src="/images/why-bathroom-cleaning.jpg"
                  alt="Why Professional Bathroom Cleaning"
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
        {/* Decorative Water Shapes */}
        <div className="absolute top-20 left-10 opacity-20">
          <Droplets className="w-32 h-32 text-blue-600" />
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">ELITE SERVICE</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              The DUBAI HOME CLEANING SERVICES <br />
              <span className="text-blue-600">Hygiene Advantage</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🧪',
                title: 'Bio-Safe Chemicals',
                desc: 'We use non-toxic, eco-friendly cleaners that are safe for your family and pets.'
              },
              {
                icon: '✨',
                title: 'Detailed Scrubbing',
                desc: 'No corner is left untouched, from the exhaust fan to the drain trap.'
              },
              {
                icon: '🛡️',
                title: 'Surface Protection',
                desc: 'Our methods are tough on stains but gentle on your tiles and marble.'
              },
              {
                icon: '⏱️',
                title: 'Time Efficient',
                desc: 'Fast and reliable service that fits into your busy Dubai lifestyle.'
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
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
              className="inline-flex items-center gap-2 bg-white text-[#091a33] px-8 py-4 rounded-full font-bold text-sm border-2 border-gray-200 hover:border-blue-600 hover:bg-gray-50 transition-all shadow-md"
            >
              Book Deep Cleaning Now
            </a>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Expert <span className="text-blue-600">Bathroom Care</span> In Dubai
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Vetted Staff',
                desc: 'Background-checked and professionally trained cleaning technicians.'
              },
              {
                icon: Star,
                title: 'Premium Tools',
                desc: 'Industrial steam cleaners and power scrubbers for superior results.'
              },
              {
                icon: Clock,
                title: 'Same Day Service',
                desc: 'Need it urgently? We offer flexible scheduling for your convenience.'
              },
              {
                icon: CheckCircle2,
                title: 'Satisfaction Guaranteed',
                desc: 'If you are not happy with the cleaning, we will make it right.'
              },
              {
                icon: Sparkles,
                title: 'Anti-Bacterial Wash',
                desc: 'Focused on killing hidden germs in areas you cannot see.'
              },
              {
                icon: Home,
                title: 'Residential & Commercial',
                desc: 'Cleaning bathrooms for villas, apartments, and office buildings.'
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-blue-600" />
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

      {/* FAQ Section */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How long does a bathroom deep clean take?',
                a: 'A standard full bathroom deep cleaning usually takes between 1.5 to 2.5 hours, depending on the size and current condition.'
              },
              {
                q: 'Do you provide the cleaning materials?',
                a: 'Yes, our team comes fully equipped with all necessary chemicals, scrubbers, and tools required for a professional deep clean.'
              },
              {
                q: 'Can you remove old hard water stains from glass?',
                a: 'Yes, we use specialized descaling agents that effectively dissolve hard water marks without scratching the glass.'
              },
              {
                q: 'Is the cleaning safe for my kids?',
                a: 'Absolutely. We use hospital-grade yet eco-friendly disinfectants that are non-toxic and safe for all family members.'
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-[#091a33]">{faq.q}</span>
                  <div className="w-8 h-8 bg-blue-600/10 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ArrowRight className="w-4 h-4 text-blue-600 rotate-90" />
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
              Ready for a Sparkling Clean Bathroom?
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Book your professional bathroom deep cleaning today and experience the ultimate hygiene and shine.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Bathroom Deep Cleaning service"
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