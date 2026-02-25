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
  CheckCircle2
} from 'lucide-react';

export default function VillaDeepCleaningPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Premium Service</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Top Villa Deep Cleaning Services In <span className="text-[#529e00]">Dubai</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
Our villa deep cleaning service in Dubai delivers a complete top-to-bottom sanitization solution tailored for luxury homes. We clean high ceilings, chandeliers, marble floors, kitchens, bathrooms, AC vents, glass panels, and outdoor spaces thoroughly. Using industrial-grade machines and safe cleaning solutions, we remove deep dust, stains, mold, and allergens. Every room is disinfected to ensure a healthier living environment for your family. This service is perfect for move-in, move-out, post-renovation, or seasonal cleaning. We pay attention to fine details including cabinet interiors, skirting, light fixtures, and upholstery. Our professional team works efficiently without disrupting your routine. Experience a sparkling clean villa with long-lasting freshness and guaranteed quality results.              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Villa Deep Cleaning service"
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
                    <p className="text-sm font-black text-[#091a33]">Professionals</p>
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
                  src="/images/villa-cleaning-hero.jpg"
                  alt="Villa Deep Cleaning Dubai"
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
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">1000+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Villas Cleaned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Cleaning Services Box */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#529e00] to-[#3d7700] rounded-[60px] p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            {/* Top Icon Badge */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#c5e899] to-[#a8d96e] rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Home className="w-12 h-12 text-[#529e00]" />
            </div>

            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Villa Deep Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">We Handle the Deep Cleaning That Protects Your Healthy Lifestyle</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Column 1 */}
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  'Living Areas & Bedrooms',
                  'Kitchen',
                  'Bathrooms',
                  'Windows Inside & Outside',
                  'Window Track & Frame Care',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-[#529e00] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    </div>
                    <p className="text-[#091a33] font-bold text-base">{item}</p>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  'Scrubbing floors',
                  'Mopping & vacuuming floors',
                  'Upholstery Dry Vaccuming',
                  'Garbage removal',
                  'Normal Spot and stain removal',
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
              What's Included In Our Villa <span className="text-[#529e00]">Deep Cleaning Services?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive villa deep cleaning covers every aspect of your home with meticulous attention to detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Living Room Deep Clean',
                items: [
                  'Sofa & upholstery vacuuming',
                  'TV unit & shelves dusting',
                  'Window tracks cleaning',
                  'Light fixture cleaning',
                ]
              },
              {
                title: 'Kitchen Sanitization',
                items: [
                  'Cabinet exterior wiping',
                  'Countertop deep cleaning',
                  'Appliance surface cleaning',
                  'Sink scrubbing & disinfection',
                ]
              },
              {
                title: 'Bedroom Detailing',
                items: [
                  'Wardrobe exterior cleaning',
                  'Bed frame wiping',
                  'Nightstand cleaning',
                  'Mirror & glass polishing',
                ]
              },
              {
                title: 'Bathroom Complete Care',
                items: [
                  'Toilet deep scrubbing',
                  'Shower & bathtub cleaning',
                  'Sink & faucet polishing',
                  'Tile & grout cleaning',
                  'Mirror shine treatment',
                ]
              },
              {
                title: 'Common Areas',
                items: [
                  'Hallway & corridor cleaning',
                  'Staircase wiping',
                  'Entrance area detailing',
                  'Balcony sweeping & mopping',
                  'Door & frame cleaning',
                ]
              },
              {
                title: 'Finishing Touches',
                items: [
                  'Baseboard wiping',
                  'Switch plate cleaning',
                  'Vent cover dusting',
                  'Ceiling fan cleaning',
                  'Final inspection',
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
                Why Do You Need <span className="text-[#529e00]">Villa Deep Cleaning</span> In Dubai?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Dubai\'s Harsh Climate',
                    desc: 'Desert dust and sand accumulate quickly, requiring professional deep cleaning to maintain a healthy living environment.'
                  },
                  {
                    title: 'Maintain Property Value',
                    desc: 'Regular deep cleaning preserves your villa\'s condition and protects your investment in Dubai\'s competitive real estate market.'
                  },
                  {
                    title: 'Health & Hygiene',
                    desc: 'Remove allergens, bacteria, and hidden contaminants that regular cleaning misses, ensuring your family\'s wellbeing.'
                  },
                  {
                    title: 'Time-Saving Solution',
                    desc: 'Let professionals handle the intensive cleaning while you focus on what matters most to you and your family.'
                  },
                  {
                    title: 'Post-Renovation Clean-up',
                    desc: 'Essential after any construction or renovation work to remove construction dust and debris completely.'
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
                  src="/images/why-villa-cleaning.jpg"
                  alt="Why Villa Deep Cleaning"
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
        {/* Decorative Leaf Shapes */}
        <div className="absolute top-20 left-10 opacity-20">
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 10C40 30 20 60 20 90C20 110 35 130 60 130C85 130 100 110 100 90C100 60 80 30 60 10Z" fill="#529e00" opacity="0.3"/>
            <path d="M60 10L60 130" stroke="#529e00" strokeWidth="2" opacity="0.4"/>
            <path d="M60 40C50 50 40 60 40 70" stroke="#529e00" strokeWidth="1.5" opacity="0.3"/>
            <path d="M60 60C70 70 80 80 80 90" stroke="#529e00" strokeWidth="1.5" opacity="0.3"/>
          </svg>
        </div>

        <div className="absolute top-40 right-20 opacity-20">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 5C35 20 15 45 15 70C15 90 28 110 50 110C72 110 85 90 85 70C85 45 65 20 50 5Z" fill="#529e00" opacity="0.3"/>
            <path d="M50 5L50 110" stroke="#529e00" strokeWidth="2" opacity="0.4"/>
          </svg>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#529e00] font-bold text-sm uppercase tracking-widest mb-3">WHY CHOOSE DUBAI HOME CLEANING SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Benefits of Choosing Dubai Home <br />
              <span className="text-[#529e00]">Cleaning Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '👥',
                title: 'Experienced & Professionals Team',
                desc: 'Our skilled team pays attention to every detail, ensuring your villa is cleaned to perfection.'
              },
              {
                icon: '🧴',
                title: 'Eco-Friendly & Advanced Equipment',
                desc: 'We prioritize safety with non-toxic, sustainable cleaning products that are safe for your family and pets. Using modern tools, we deliver efficient and effective cleaning, even in hard-to-reach areas.'
              },
              {
                icon: '🤝',
                title: '100% Satisfaction Guarantee',
                desc: "If you're not happy with your cleaning, we'll be back to fix the missed areas for free. Have to claim Before 24 hours."
              },
              {
                icon: '💰',
                title: 'Affordable Pricing',
                desc: 'We provide competitive rates for high-quality cleaning services, ensuring you get excellent value for your investment.'
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                {/* Icon */}
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
              Why Choose Us For <span className="text-[#529e00]">Villa Deep Cleaning</span> In Dubai?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Insured & Licensed',
                desc: 'Fully licensed cleaning company with comprehensive insurance coverage for your peace of mind.'
              },
              {
                icon: Star,
                title: 'Experienced Professionals',
                desc: 'Trained cleaning experts with years of experience in luxury villa cleaning services.'
              },
              {
                icon: Clock,
                title: 'Flexible Scheduling',
                desc: 'We work around your schedule with convenient booking options and punctual service.'
              },
              {
                icon: CheckCircle2,
                title: 'Quality Guarantee',
                desc: '100% satisfaction guaranteed. We re-clean for free if you\'re not completely satisfied.'
              },
              {
                icon: Sparkles,
                title: 'Eco-Friendly Products',
                desc: 'Safe, non-toxic cleaning solutions that are gentle on your family and the environment.'
              },
              {
                icon: Home,
                title: 'Modern Equipment',
                desc: 'Latest cleaning technology and equipment for superior results and efficiency.'
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
              Our Villa Cleaning Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A systematic approach ensuring thorough cleaning of every area
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Initial Assessment', desc: 'We inspect your villa and understand your specific requirements' },
              { step: '02', title: 'Preparation', desc: 'Our team arrives with all necessary equipment and eco-friendly products' },
              { step: '03', title: 'Deep Cleaning', desc: 'Systematic room-by-room cleaning following our comprehensive checklist' },
              { step: '04', title: 'Final Inspection', desc: 'Quality check and walkthrough to ensure your complete satisfaction' },
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
                q: 'How long does villa deep cleaning take?',
                a: 'Typically 6-8 hours for a 4-bedroom villa, depending on size and condition. We provide exact timing during initial assessment.'
              },
              {
                q: 'Do I need to be present during cleaning?',
                a: 'No, but we require access to your villa. Many clients provide keys and return to a spotless home.'
              },
              {
                q: 'What cleaning products do you use?',
                a: 'We use eco-friendly, non-toxic cleaning solutions that are safe for children, pets, and the environment.'
              },
              {
                q: 'Is your team background-checked?',
                a: 'Yes, all our cleaning professionals are thoroughly vetted, trained, and background-checked for your security.'
              },
              {
                q: 'Do you offer emergency or same-day service?',
                a: 'Yes, subject to availability. Contact us directly for urgent cleaning requirements.'
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
              Ready To Transform Your Villa?
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Book your professional villa deep cleaning today and experience the difference
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Villa Deep Cleaning service"
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