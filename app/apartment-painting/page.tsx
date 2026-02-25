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
  Paintbrush // Added for relevance, but using original icon set structure
} from 'lucide-react';

export default function ApartmentPaintingPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Premium Painting</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Professional Apartment Painting Services In <span className="text-[#529e00]">Dubai</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
Our apartment painting service delivers clean, modern finishes tailored to your style. We prepare walls properly to ensure long-lasting results. Premium paints provide smooth coverage and vibrant color. Ideal for tenants, landlords, and homeowners. We protect furniture and flooring during the painting process. Timely completion ensures convenience. Fresh paint enhances property value and appeal. Transform your apartment with professional painting solutions.              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Apartment Painting service"
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
                  src="/images/apartment-painting-hero.jpg"
                  alt="Apartment Painting Dubai"
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
                    <p className="text-2xl font-black text-[#091a33]">2500+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Projects Done</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Painting Services Box */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#529e00] to-[#3d7700] rounded-[60px] p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            {/* Top Icon Badge */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#c5e899] to-[#a8d96e] rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Sparkles className="w-12 h-12 text-[#529e00]" />
            </div>

            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Apartment Painting Checklist</h2>
              <p className="text-white/90 text-base font-medium">Precision and Quality in Every Stroke of the Brush</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Column 1 */}
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  'Full Wall Painting',
                  'Ceiling Painting',
                  'Door & Window Frame Painting',
                  'Surface Preparation & Sanding',
                  'Crack & Hole Filling',
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
                  'Primer Application',
                  'Double Coat Painting',
                  'Edge Trimming & Detailing',
                  'Furniture Protection Covering',
                  'Post-Paint Cleanup',
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
              What's Included In Our Apartment <span className="text-[#529e00]">Painting Services?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a complete end-to-end painting solution, ensuring your home looks brand new with minimal hassle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Interior Wall Painting',
                items: [
                  'High-quality emulsion paint',
                  'Smooth finish application',
                  'Consistent color matching',
                  'Two-coat coverage',
                  'Accent wall specialists',
                ]
              },
              {
                title: 'Surface Preparation',
                items: [
                  'Removing old paint/wallpaper',
                  'Scraping and leveling',
                  'Filling plaster cracks',
                  'Wall sanding for smoothness',
                  'Damp-proof treatment',
                ]
              },
              {
                title: 'Protective Measures',
                items: [
                  'Furniture masking with plastic',
                  'Floor protection sheets',
                  'Switchboard taping',
                  'Door handle wrapping',
                  'Curtain/blind protection',
                ]
              },
              {
                title: 'Wood & Metal Work',
                items: [
                  'Door and frame polishing',
                  'Window grill painting',
                  'Cabinet exterior painting',
                  'Radiator/Vent painting',
                  'Gloss or Matte finishes',
                ]
              },
              {
                title: 'Ceiling & Trims',
                items: [
                  'Ceiling whitening/painting',
                  'Baseboard & skirting painting',
                  'Crown molding detailing',
                  'Corner bead perfection',
                  'Uniform texture application',
                ]
              },
              {
                title: 'Finishing & Cleanup',
                items: [
                  'Tape removal & touch-ups',
                  'Paint splatter removal',
                  'Dust-free floor sweeping',
                  'Furniture rearrangement',
                  'Final quality walkthrough',
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
                Why Do You Need <span className="text-[#529e00]">Professional Painting</span> In Dubai?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Enhance Aesthetic Appeal',
                    desc: 'A fresh coat of paint can completely transform the mood and look of your apartment instantly.'
                  },
                  {
                    title: 'Increase Rental Value',
                    desc: 'In Dubai\'s fast-moving market, a freshly painted apartment attracts better tenants and higher rent.'
                  },
                  {
                    title: 'Surface Protection',
                    desc: 'High-quality paint protects walls from humidity, dust, and daily wear and tear.'
                  },
                  {
                    title: 'Mood & Environment',
                    desc: 'The right colors can make small apartments feel larger and create a more relaxing home atmosphere.'
                  },
                  {
                    title: 'Cost-Effective Upgrade',
                    desc: 'Painting is the most affordable way to renovate your home without major construction work.'
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
                  src="/images/why-apartment-painting.jpg"
                  alt="Professional Apartment Painting"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services / Benefits */}
      <section className="py-20 bg-[#fcfcfc] relative overflow-hidden">
        {/* Decorative Leaf Shapes */}
        <div className="absolute top-20 left-10 opacity-20">
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 10C40 30 20 60 20 90C20 110 35 130 60 130C85 130 100 110 100 90C100 60 80 30 60 10Z" fill="#529e00" opacity="0.3"/>
            <path d="M60 10L60 130" stroke="#529e00" strokeWidth="2" opacity="0.4"/>
          </svg>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#529e00] font-bold text-sm uppercase tracking-widest mb-3">WHY CHOOSE DUBAI HOME CLEANING SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Benefits of Choosing Our <br />
              <span className="text-[#529e00]">Apartment Painting</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '👷',
                title: 'Expert Painters',
                desc: 'Our painters are highly skilled in various techniques to ensure a professional, clean finish.'
              },
              {
                icon: '🎨',
                title: 'Premium Paints',
                desc: 'We use top-tier brands like Jotun and Benjamin Moore for long-lasting color and durability.'
              },
              {
                icon: '🧼',
                title: 'Clean Working',
                desc: "We ensure no paint drops on your floors or furniture. We clean up everything after the job."
              },
              {
                icon: '⏱️',
                title: 'On-Time Delivery',
                desc: 'We respect your time and complete the painting projects within the agreed deadline.'
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
              Why Choose Us For <span className="text-[#529e00]">Apartment Painting</span> In Dubai?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Insured Services',
                desc: 'Work with confidence knowing we are a fully insured and licensed painting contractor.'
              },
              {
                icon: Star,
                title: 'Quality Craftsmanship',
                desc: 'Attention to detail is our priority, ensuring perfect corners and smooth finishes.'
              },
              {
                icon: Clock,
                title: 'Fast Turnaround',
                desc: 'Efficient workflow that gets your apartment painted and ready to live in quickly.'
              },
              {
                icon: CheckCircle2,
                title: 'Color Consultation',
                desc: 'Not sure about colors? We help you choose the best shades for your apartment.'
              },
              {
                icon: Sparkles,
                title: 'Eco-Friendly Paints',
                desc: 'Low-VOC and odorless paint options available for a healthier home environment.'
              },
              {
                icon: Home,
                title: 'Affordable Rates',
                desc: 'Competitive pricing without compromising on material quality or workmanship.'
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
              Our Painting Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A systematic approach to ensuring a mess-free and perfect painting job
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Site Inspection', desc: 'We assess wall conditions and take measurements for an accurate quote' },
              { step: '02', title: 'Masking & Covering', desc: 'Covering floors and furniture to protect them from paint splatters' },
              { step: '03', title: 'Painting Phase', desc: 'Expert application of primer and paint coats for a vibrant finish' },
              { step: '04', title: 'Cleanup & Handover', desc: 'Post-painting cleaning and final inspection for a flawless handover' },
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
                q: 'How long does it take to paint a studio apartment?',
                a: 'A studio apartment typically takes 1-2 days, depending on the wall condition and current paint color.'
              },
              {
                q: 'Do you provide the paint or should I?',
                a: 'We can provide high-quality paints from top brands, or we can use the paint you have already purchased.'
              },
              {
                q: 'Will you move and protect my furniture?',
                a: 'Yes, our team will move furniture to the center of the room and cover everything with plastic sheets.'
              },
              {
                q: 'Do you offer low-odor/Eco-friendly paints?',
                a: 'Yes, we offer low-VOC paints which are odorless and safe to sleep in the same day.'
              },
              {
                q: 'Is a deposit required before starting?',
                a: 'We provide a detailed estimate. Small jobs usually don\'t require a deposit, while larger projects may.'
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
              Ready To Refresh Your Apartment?
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Book your professional apartment painting today and give your home the vibrant look it deserves
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Apartment Painting service"
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