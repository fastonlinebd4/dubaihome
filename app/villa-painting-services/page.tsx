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
  Paintbrush,
  ArrowRight,
  Phone,
  CheckCircle2,
  Palette
} from 'lucide-react';

export default function VillaPaintingPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Premium Finish</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Top Villa Painting Services In <span className="text-[#529e00]">Dubai</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Upgrade your home with our <strong>professional villa painting services</strong> in Dubai. We provide <strong>high-quality interior and exterior painting</strong> using <strong>premium, durable paints</strong>. Our <strong>skilled painters</strong> ensure smooth finishes, clean edges, and long-lasting protection. <strong>Proper surface preparation</strong> guarantees flawless results. Ideal for <Link href="/post-construction-cleaning-in-dubai" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">renovation</Link>, property upgrades, or new <Link href="/villa-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">villas</Link>. We protect furniture and floors during the process. <strong>Timely project completion</strong> with minimal disruption. Enhance your <strong>villa’s beauty and value</strong> with expert painting solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Villa Painting service"
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
                    <p className="text-sm font-black text-[#091a33]">Professional Painters</p>
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
                  src="/images/villa-painting-hero.jpg"
                  alt="Villa Painting Dubai"
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
                    <Paintbrush className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">850+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Projects Done</p>
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
              <Palette className="w-12 h-12 text-[#529e00]" />
            </div>
            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Villa Painting Task List</h2>
              <p className="text-white/90 text-base font-medium">Professional Preparation and Execution for a Long-Lasting Finish</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Surface Wall Cleaning', href: '/deep-cleaning' },
                  { label: 'Filling Cracks & Holes', href: null },
                  { label: 'Sanding & Leveling', href: null },
                  { label: 'Primer Application', href: null },
                  { label: 'Furniture Protection Covering', href: null },
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
                  { label: 'Interior Wall Painting', href: null },
                  { label: 'Exterior Villa Painting', href: '/villa-facade-cleaning-services' },
                  { label: 'Ceiling Painting', href: null },
                  { label: 'Door & Window Frame Painting', href: null },
                  { label: 'Final Quality Touch-ups', href: null },
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
              What's Included In Our Villa <span className="text-[#529e00]">Painting Services?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a end-to-end painting solution from color consultation to final cleanup
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Interior Painting',
                items: [
                  { label: 'Full room wall painting', href: null },
                  { label: 'Ceiling & moldings', href: null },
                  { label: 'Accent wall creation', href: null },
                  { label: 'Closet & pantry interior', href: null },
                  { label: 'Kitchen cabinet painting', href: '/kitchen-deep-cleaning' },
                ]
              },
              {
                title: 'Exterior Painting',
                href: '/villa-facade-cleaning-services',
                items: [
                  { label: 'Weatherproof facade coating', href: null },
                  { label: 'Boundary wall painting', href: null },
                  { label: 'Gate & fence refinishing', href: null },
                  { label: 'Roof & parapet painting', href: '/rooftop-cleaning-services' },
                  { label: 'Texture painting options', href: null },
                ]
              },
              {
                title: 'Surface Prep',
                items: [
                  { label: 'Old paint removal', href: null },
                  { label: 'Wall putty application', href: null },
                  { label: 'Damp-proof treatment', href: null },
                  { label: 'Primer/Sealer coating', href: null },
                  { label: 'Smoothing & sanding', href: null },
                ]
              },
              {
                title: 'Wood & Metal Work',
                items: [
                  { label: 'Door varnishing/polishing', href: null },
                  { label: 'Window frame painting', href: '/outside-window-cleaning' },
                  { label: 'Railing & grill painting', href: null },
                  { label: 'Pergola staining', href: null },
                  { label: 'Metal gate anti-rust coating', href: null },
                ]
              },
              {
                title: 'Protection & Safety',
                items: [
                  { label: 'Flooring masking', href: '/floor-deep-cleaning-services' },
                  { label: 'Furniture plastic covering', href: null },
                  { label: 'Switch/Socket taping', href: null },
                  { label: 'Non-toxic paint options', href: null },
                  { label: 'On-site safety measures', href: null },
                ]
              },
              {
                title: 'After-Service',
                items: [
                  { label: 'De-masking & tape removal', href: null },
                  { label: 'Floor cleaning & sweeping', href: null },
                  { label: 'Paint splash removal', href: null },
                  { label: 'Leftover paint handover', href: null },
                  { label: 'Final inspection walkthrough', href: null },
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
                Why Do You Need <span className="text-[#529e00]">Villa Painting</span> In Dubai?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Extreme Heat Protection',
                    desc: 'Dubai\'s harsh sun can fade exterior paint. We use UV-resistant paints to keep your villa looking new.',
                    href: '/villa-facade-cleaning-services',
                  },
                  {
                    title: 'Enhance Aesthetic Appeal',
                    desc: 'A fresh coat of paint instantly modernizes your home and reflects your personal style.',
                    href: null,
                  },
                  {
                    title: 'Increase Property Value',
                    desc: 'Freshly painted villas attract higher prices in Dubai\'s real estate market whether for sale or rent.',
                    href: '/villa-deep-cleaning',
                  },
                  {
                    title: 'Prevent Wall Decay',
                    desc: 'Proper painting seals walls against moisture and dust, preventing long-term structural issues.',
                    href: null,
                  },
                  {
                    title: 'Hygienic Environment',
                    desc: 'Modern paints contain anti-microbial properties that prevent mold growth in humid areas.',
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
                  src="/images/why-villa-painting.jpg"
                  alt="Why Villa Painting"
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
            <p className="text-[#529e00] font-bold text-sm uppercase tracking-widest mb-3">WHY CHOOSE DUBAI HOME CLEANING SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Benefits of Choosing Our <br />
              <span className="text-[#529e00]">Villa Painting Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🎨',
                title: 'Premium Quality Paints',
                desc: 'We use top brands like Jotun and National Paints to ensure durability and a rich finish.'
              },
              {
                icon: '👷',
                title: 'Professional Expertise',
                desc: 'Our painters are skilled in modern techniques like spraying, rolling, and decorative textures.'
              },
              {
                icon: '🧼',
                title: 'Neat & Clean Work',
                desc: "We ensure zero damage to your furniture and floors with complete masking and post-job cleaning."
              },
              {
                icon: '💰',
                title: 'Fair & Clear Pricing',
                desc: 'Get detailed quotes with no hidden costs. We provide premium service at competitive rates.'
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
              Consult on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Why Choose Us For <span className="text-[#529e00]">Villa Painting</span> In Dubai?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Full Warranty',
                desc: 'We provide a guarantee on our painting work against peeling or fading.'
              },
              {
                icon: Star,
                title: 'Attention to Detail',
                desc: 'Sharp edges and smooth finishes are our trademark in every project.'
              },
              {
                icon: Clock,
                title: 'On-Time Completion',
                desc: 'We respect your time and complete the painting within the agreed deadline.'
              },
              {
                icon: CheckCircle2,
                title: 'Color Consultation',
                desc: 'Free expert advice on color schemes that suit your villa\'s lighting and space.'
              },
              {
                icon: Sparkles,
                title: 'Eco-Friendly Paints',
                desc: 'Low VOC, odorless paints that are safe for your family and environment.'
              },
              {
                icon: Palette,
                title: 'Modern Equipment',
                desc: 'Using airless sprayers and laser levels for a perfectly uniform finish.'
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
              Our Villa Painting Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A systematic method to ensure a professional and lasting result
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Site Visit', desc: 'Evaluating wall condition and providing color options' },
              { step: '02', title: 'Preparation', desc: 'Covering furniture and repairing wall cracks/putty' },
              { step: '03', title: 'Execution', desc: 'Applying primer followed by multiple coats of premium paint' },
              { step: '04', title: 'Handover', desc: 'Final cleanup and inspection with the client' },
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
                q: 'How long does it take to paint a villa?',
                a: 'For a standard 3-4 bedroom interior, it takes 3-5 days. Exterior depends on the weather and size.'
              },
              {
                q: 'Do you provide the paint or do I?',
                a: 'We usually provide premium paint, but we can work with your provided paint as well.'
              },
              {
                q: 'Will my furniture be safe?',
                a: 'Yes, we use heavy-duty plastic sheets and masking tape to protect all your furniture and floors.'
              },
              {
                q: 'Do you fix wall dampness before painting?',
                a: 'Yes, we provide damp-proofing and repair services to ensure the paint doesn\'t peel off later.'
              },
              {
                q: 'Is there a smell after painting?',
                a: 'We use low-VOC eco-friendly paints that have minimal to no odor, making it safe to stay.'
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
              Ready To Give Your Villa A New Look?
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Get a professional finish with DUBAI HOME CLEANING SERVICES. Book your free villa painting consultation today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Villa Painting service"
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
