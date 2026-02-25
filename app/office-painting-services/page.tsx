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
  Briefcase,
  ArrowRight,
  Phone,
  CheckCircle2,
  Paintbrush
} from 'lucide-react';

export default function OfficePaintingServicesPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Premium Commercial Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Top Office Painting Services In <span className="text-[#529e00]">Dubai</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
Our office painting services provide professional interior and exterior painting solutions. We use premium paints that ensure smooth, durable finishes. Proper surface preparation guarantees flawless results. Ideal for corporate offices, retail spaces, and commercial buildings. Fresh paint improves brand image and workspace atmosphere. We minimize disruption to business operations. Clean and precise workmanship is guaranteed. Upgrade your office environment with expert painters.              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Office Painting service"
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
                    <p className="text-sm font-black text-[#091a33]">Commercial Painters</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">5.0 Rating</p>
                    <p className="text-sm font-black text-[#091a33]">Business Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/office-painting-hero.jpg"
                  alt="Office Painting Dubai"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a33]/20 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#529e00] rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">500+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Offices Painted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task List Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#529e00] to-[#3d7700] rounded-[60px] p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#c5e899] to-[#a8d96e] rounded-[28px] border-8 border-white shadow-xl flex items-center justify-center z-10">
              <Paintbrush className="w-12 h-12 text-[#529e00]" />
            </div>
            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Office Painting Service Scope</h2>
              <p className="text-white/90 text-base font-medium">Professional Finishes Tailored to Your Business Environment</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  'Interior Wall Painting',
                  'Ceiling Painting & Repair',
                  'Feature Wall Design',
                  'Woodwork & Door Painting',
                  'Metal & Trim Painting',
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
                  'Surface Crack Repair',
                  'Wall Putty & Sanding',
                  'Furniture Protection',
                  'Eco-friendly Low VOC Paint',
                  'Post-Paint Deep Cleaning',
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
              What's Included In Our <span className="text-[#529e00]">Office Painting Services?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive commercial painting covers every detail to ensure a flawless and professional result
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Workspace Preparation',
                items: [
                  'Moving & covering furniture',
                  'Floor protection with sheets',
                  'Taping of glass & fixtures',
                  'Wall surface assessment',
                  'Removing old wall coverings',
                ]
              },
              {
                title: 'Surface Correction',
                items: [
                  'Filling holes and cracks',
                  'Skimming and sanding',
                  'Priming new surfaces',
                  'Damp-proofing treatment',
                  'Smoothing rough textures',
                ]
              },
              {
                title: 'Expert Application',
                items: [
                  'Multi-coat paint application',
                  'Precision edging and corners',
                  'Texture painting (optional)',
                  'Uniform color distribution',
                  'Quick-dry technology use',
                ]
              },
              {
                title: 'Detailed Areas',
                items: [
                  'Conference room focus',
                  'Reception area detailing',
                  'Executive office finishing',
                  'Door frames and skirtings',
                  'Window sill painting',
                ]
              },
              {
                title: 'Color Consultancy',
                items: [
                  'Corporate color matching',
                  'Modern palette suggestions',
                  'Accent wall planning',
                  'Light-enhancing finishes',
                  'Branding integration',
                ]
              },
              {
                title: 'Final Handover',
                items: [
                  'Painters tape removal',
                  'Furniture rearrangement',
                  'Thorough floor cleaning',
                  'Paint touch-up check',
                  'Manager walkthrough',
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
                Why Do You Need <span className="text-[#529e00]">Professional Office Painting</span> In Dubai?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Brand Image',
                    desc: 'A fresh, well-painted office leaves a lasting positive impression on clients and visitors.'
                  },
                  {
                    title: 'Employee Productivity',
                    desc: 'The right colors can significantly boost morale, energy levels, and efficiency in the workplace.'
                  },
                  {
                    title: 'Professional Finish',
                    desc: 'Professional painters ensure smooth walls and sharp lines that DIY or cheap labor cannot achieve.'
                  },
                  {
                    title: 'Maintenance & Durability',
                    desc: 'Quality paints protect your walls from the high traffic and humidity typical in Dubai commercial spaces.'
                  },
                  {
                    title: 'Minimal Disruption',
                    desc: 'Our experts work around your schedule, including weekends/after-hours, to minimize business downtime.'
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
                  src="/images/why-office-painting.jpg"
                  alt="Professional Office Painting"
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
        {/* Decorative Shapes */}
        <div className="absolute top-20 left-10 opacity-20">
          <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 10C40 30 20 60 20 90C20 110 35 130 60 130C85 130 100 110 100 90C100 60 80 30 60 10Z" fill="#529e00" opacity="0.3"/>
          </svg>
        </div>
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#529e00] font-bold text-sm uppercase tracking-widest mb-3">WHY CHOOSE DUBAI HOME CLEANING SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Benefits of Choosing Our <br />
              <span className="text-[#529e00]">Office Painting Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '👷',
                title: 'Skilled Commercial Painters',
                desc: 'Our team is trained in specific commercial requirements, ensuring high-speed and high-quality results.'
              },
              {
                icon: '🎨',
                title: 'Premium Quality Materials',
                desc: 'We use high-grade, durable paints from top brands that are easy to clean and maintain.'
              },
              {
                icon: '🤝',
                title: 'Timely Completion',
                desc: "We respect your business hours. We stick to deadlines to get your office back to work as soon as possible."
              },
              {
                icon: '💰',
                title: 'Transparent Pricing',
                desc: 'Get detailed quotes with no hidden costs. We provide the best value for your corporate investment.'
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
              Why Choose Us For <span className="text-[#529e00]">Office Painting</span> In Dubai?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Licensed & Insured',
                desc: 'We are a fully registered company in Dubai with comprehensive insurance for commercial projects.'
              },
              {
                icon: Star,
                title: 'Corporate Experience',
                desc: 'Over a decade of experience painting small startups to large multinational headquarters.'
              },
              {
                icon: Clock,
                title: 'Flexible Operations',
                desc: 'Available for weekend and overnight shifts to prevent any business interruption.'
              },
              {
                icon: CheckCircle2,
                title: 'Satisfaction Guaranteed',
                desc: 'We provide a warranty on our workmanship. If you see a flaw, we fix it immediately.'
              },
              {
                icon: Sparkles,
                title: 'Odorless Paints',
                desc: 'We use low-odor and non-toxic paints so your employees can breathe easy the next day.'
              },
              {
                icon: Briefcase,
                title: 'Professional Conduct',
                desc: 'Our team is uniformed, disciplined, and follows strict safety and security protocols.'
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
              Our Office Painting Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A systematic workflow designed for business environments
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Site Inspection', desc: 'Detailed wall assessment and measurement of the office space' },
              { step: '02', title: 'Protection', desc: 'Securely covering all office equipment, computers, and furniture' },
              { step: '03', title: 'Surface Prep', desc: 'Fixing cracks, sanding, and applying primer for a smooth base' },
              { step: '04', title: 'Painting & QC', desc: 'Professional coat application and final quality inspection' },
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
              Office Painting <span className="text-[#529e00]">FAQs</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Can you paint our office during non-working hours?',
                a: 'Absolutely! We offer flexible scheduling, including night shifts and weekends, to ensure zero disruption to your business operations.'
              },
              {
                q: 'Do you provide the paint or should we?',
                a: 'We usually provide high-quality paint as part of our package, but if you have a specific brand or already purchased paint, we can work with that too.'
              },
              {
                q: 'How long does it take to paint a standard office?',
                a: 'A medium-sized office typically takes 2-3 days. However, we can deploy larger teams to finish urgent projects faster.'
              },
              {
                q: 'Will there be a strong paint smell in the office?',
                a: 'We use low-VOC or zero-VOC eco-friendly paints that have minimal odor, allowing your staff to work comfortably shortly after the job is done.'
              },
              {
                q: 'Do you handle the cleanup after painting?',
                a: 'Yes, post-painting cleanup is included. We remove all tape, sheets, and debris, leaving your office ready for immediate use.'
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
              Ready To Upgrade Your Office?
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Book your professional office painting today and create a workspace your team will love
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Office Painting service"
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