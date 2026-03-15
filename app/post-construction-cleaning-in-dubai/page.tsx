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
  Construction
} from 'lucide-react';

export default function PostConstructionCleaningPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Specialized Cleaning</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Professional Post Construction Cleaning In <span className="text-[#529e00]">Dubai</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                After renovation or construction, properties are often left covered in{' '}
                <strong>dust, debris, and residue</strong>. Our{' '}
                <strong>post-construction cleaning service</strong> removes{' '}
                <strong>cement stains, paint splashes, adhesives, and fine particles</strong>. We carefully clean{' '}
                <Link href="/floor-deep-cleaning-services" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">floors</Link>,{' '}
                <Link href="/outside-window-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">windows</Link>,
                {' '}walls, and fixtures to prepare the space for immediate use.{' '}
                <strong>Industrial equipment ensures deep cleaning</strong> of stubborn construction dirt. This service is ideal for{' '}
                <strong>new buildings, renovated{' '}
                <Link href="/villa-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors">villas</Link>, and commercial spaces</strong>.
                {' '}We focus on <strong>safety and precision</strong> during the cleaning process. Your property will be <strong>spotless and move-in ready</strong>. Professional finishing touches guaranteed.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Post Construction Cleaning service"
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
                    <p className="text-sm font-black text-[#091a33]">Construction Experts</p>
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
                  src="/images/post-construction-hero.jpg"
                  alt="Post Construction Cleaning Dubai"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091a33]/20 to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#529e00] rounded-full flex items-center justify-center">
                    <Construction className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">500+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Projects Completed</p>
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
              <Construction className="w-12 h-12 text-[#529e00]" />
            </div>
            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Post-Construction Task List</h2>
              <p className="text-white/90 text-base font-medium">Detailed Cleaning to Make Your New Property Move-In Ready</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Fine Dust Removal (Walls & Ceilings)', href: null },
                  { label: 'Paint & Adhesive Spot Removal', href: null },
                  { label: 'Cabinet & Drawer Interior Cleaning', href: null },
                  { label: 'Window Track & Glass Detailing', href: '/outside-window-cleaning' },
                  { label: 'Light Fixture & Switch Cleaning', href: null },
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
                  { label: 'Deep Floor Scrubbing & Polishing', href: '/floor-deep-cleaning-services' },
                  { label: 'Bathroom Sanitization & De-scaling', href: '/bathroom-deep-cleaning' },
                  { label: 'Stainless Steel Polishing', href: null },
                  { label: 'Debris & Garbage Removal', href: null },
                  { label: 'Vent & AC Grill Dusting', href: '/ac-duct-cleaning' },
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

      {/* What's Included Section */}
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              What's Included In Our <span className="text-[#529e00]">Construction Cleaning?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We eliminate the industrial mess left behind by contractors, ensuring a safe and sparkling environment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Surface Restoration',
                href: null,
                items: [
                  { label: 'HEPA vacuuming for fine dust', href: null },
                  { label: 'Wall wiping & cobweb removal', href: null },
                  { label: 'Paint splatter removal', href: null },
                  { label: 'Baseboard & molding cleaning', href: null },
                  { label: 'Door frame & knob polishing', href: null },
                ]
              },
              {
                title: 'Kitchen & Cabinetry',
                href: '/kitchen-deep-cleaning',
                items: [
                  { label: 'Inside/outside cabinet cleaning', href: null },
                  { label: 'Countertop grout cleaning', href: null },
                  { label: 'Appliance sticker removal', href: null },
                  { label: 'Sink & faucet de-scaling', href: null },
                  { label: 'Pantry shelf dusting', href: null },
                ]
              },
              {
                title: 'Window Detailing',
                href: '/outside-window-cleaning',
                items: [
                  { label: 'Sticker & tape removal', href: null },
                  { label: 'Frame & track deep cleaning', href: null },
                  { label: 'Glass polishing (Interior/Exterior)', href: null },
                  { label: 'Sill wiping', href: null },
                  { label: 'Screen dusting', href: null },
                ]
              },
              {
                title: 'Bathroom Deep Clean',
                href: '/bathroom-deep-cleaning',
                items: [
                  { label: 'Post-construction tile scrub', href: null },
                  { label: 'Grout haze removal', href: null },
                  { label: 'Mirror & glass polishing', href: null },
                  { label: 'Fixture & chrome shining', href: null },
                  { label: 'Toilet & shower sanitization', href: null },
                ]
              },
              {
                title: 'Floor Care',
                href: '/floor-deep-cleaning-services',
                items: [
                  { label: 'Concrete dust extraction', href: null },
                  { label: 'Tile & grout deep cleaning', href: null },
                  { label: 'Marble/Stone polishing', href: '/marble-polishing-services' },
                  { label: 'Edge & corner detailing', href: null },
                ]
              },
              {
                title: 'Safety & Air Quality',
                href: null,
                items: [
                  { label: 'AC vent & filter cleaning', href: '/ac-duct-cleaning' },
                  { label: 'Small debris removal', href: null },
                  { label: 'Light bulb & fixture dusting', href: null },
                  { label: 'Threshold cleaning', href: null },
                  { label: 'Final fragrance treatment', href: null },
                ]
              },
              {
                title: 'Floor Deep Cleaning',
                href: '/floor-deep-cleaning-services',
                items: [
                  { label: 'Deep Cleaning of vinyl floors, concrete tiles, ceramic tiles using a scrubbing machine and wooden floors will be cleaned by vacuum mopping.', href: null },
                  { label: 'Deep Cleaning of marble-type floors and stairs using a vacuum and mopping', href: '/marble-polishing-services' },
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

      {/* Why Do You Need Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-6">
                Why Hire Experts For <span className="text-[#529e00]">Construction Cleaning</span>?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Fine Dust Hazard',
                    desc: 'Construction dust is microscopic and can cause respiratory issues. Professional HEPA filtration is required to remove it completely.',
                    href: null,
                  },
                  {
                    title: 'Specialized Tools',
                    desc: 'Regular vacuum cleaners cannot handle heavy dust. We use industrial-grade scrubbers and extractors for the job.',
                    href: '/steam-deep-cleaning',
                  },
                  {
                    title: 'Paint & Glue Removal',
                    desc: 'Removing paint drops or adhesive from floors and windows requires specific chemicals that won\'t damage your new surfaces.',
                    href: null,
                  },
                  {
                    title: 'Protect Your Warranty',
                    desc: 'Using the wrong cleaning methods on new fixtures can void warranties. Our team knows the safe techniques for all materials.',
                    href: null,
                  },
                  {
                    title: 'Save Time & Stress',
                    desc: 'Construction is tiring enough. Let us handle the massive cleanup so you can move in and relax immediately.',
                    href: '/move-in-move-out-cleaning',
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
                  src="/images/why-construction-cleaning.jpg"
                  alt="Why Post Construction Cleaning"
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
            <p className="text-[#529e00] font-bold text-sm uppercase tracking-widest mb-3">EXPERT CARE BY DUBAI HOME CLEANING SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Benefits of Our Specialized <br />
              <span className="text-[#529e00]">After-Build Cleaning</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '👷',
                title: 'Trained Project Team',
                desc: 'Our staff is specifically trained to work in active and post-build environments safely.'
              },
              {
                icon: '🏢',
                title: 'Industrial Equipment',
                desc: 'We use heavy-duty scrubbers and industrial vacuums to handle bulk dust and debris.'
              },
              {
                icon: '🛡️',
                title: 'Surface Safety',
                desc: "We ensure that chemicals used for paint/glue removal are safe for your specific flooring and walls."
              },
              {
                icon: '⚡',
                title: 'Quick Turnaround',
                desc: 'We work efficiently to ensure your residential or commercial space is ready for occupancy ASAP.'
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
              Why Choose DUBAI HOME CLEANING SERVICES For <span className="text-[#529e00]">After-Build Cleanup</span>?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Insured & Secure', desc: 'We are a fully licensed and insured cleaning company protecting your property investment.', href: null },
              { icon: Star, title: 'Attention to Detail', desc: 'We clean inside hinges, behind pipes, and in every corner where construction dust hides.', href: null },
              { icon: Clock, title: 'Flexible Timing', desc: 'We coordinate with your contractors to start as soon as they finish their work.', href: null },
              { icon: CheckCircle2, title: 'Move-In Guarantee', desc: 'We guarantee a space so clean you can start moving your furniture in immediately.', href: '/move-in-move-out-cleaning' },
              { icon: Sparkles, title: 'Eco-Friendly Options', desc: 'Safe cleaning agents that remove industrial mess without leaving toxic fumes behind.', href: null },
              { icon: Home, title: 'All-In-One Solution', desc: 'From floor polishing to window cleaning, we handle every part of the post-build process.', href: '/floor-deep-cleaning-services' },
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
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our 4-Step Cleanup Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              How we transform a messy construction site into a pristine home
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Rough Clean', desc: 'Removal of large debris and bulk dust from all surfaces' },
              { step: '02', title: 'Deep Detail', desc: 'Removing paint, glue, and fine dust from fixtures and floors' },
              { step: '03', title: 'Sanitization', desc: 'Deep cleaning bathrooms and kitchen for health and safety' },
              { step: '04', title: 'Final Touch', desc: 'Glass polishing and a final walk-through for perfection' },
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of professional cleaning solutions across Dubai.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: 'Move In Move Out Cleaning', href: '/move-in-move-out-cleaning' },
              { label: 'Villa Deep Cleaning', href: '/villa-deep-cleaning' },
              { label: 'Apartment Deep Cleaning', href: '/apartment-deep-cleaning' },
              { label: 'Office Deep Cleaning', href: '/office-deep-cleaning' },
              { label: 'Floor Deep Cleaning', href: '/floor-deep-cleaning-services' },
              { label: 'Marble Polishing Services', href: '/marble-polishing-services' },
              { label: 'Bathroom Deep Cleaning', href: '/bathroom-deep-cleaning' },
              { label: 'Kitchen Deep Cleaning', href: '/kitchen-deep-cleaning' },
              { label: 'AC Duct Cleaning', href: '/ac-duct-cleaning' },
              { label: 'Outside Window Cleaning', href: '/outside-window-cleaning' },
              { label: 'Steam Deep Cleaning', href: '/steam-deep-cleaning' },
              { label: 'Deep Cleaning of Warehouse', href: '/deep-cleaning-of-warehouse' },
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
              Common <span className="text-[#529e00]">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'When should I schedule the post-construction cleaning?',
                a: 'It is best to schedule once all construction, painting, and floor installations are 100% complete and contractors have removed their tools.'
              },
              {
                q: 'Can you remove paint stains from marble floors?',
                a: 'Yes, we use professional-grade scrapers and specialized stone-safe chemicals to remove paint and grout haze from marble and tiles.'
              },
              {
                q: 'How many cleaners will be sent?',
                a: 'The team size depends on the square footage of your property. Typically, we send a team of 3 to 6 specialists.'
              },
              {
                q: 'Do you remove construction debris?',
                a: 'We handle small cleanup debris. For large scale hauling (like bricks or timber), please let us know in advance to arrange a skip.'
              },
              {
                q: 'Is AC duct cleaning included?',
                a: 'We clean external vents and filters. Deep AC duct cleaning is an additional specialized service we also provide.'
              },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-[#fcfcfc] rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
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
      <section className="py-20 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#e8c600] to-[#d4b600] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-[#091a33] mb-4">
              Ready To Move Into Your Clean Space?
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Book your professional post-construction cleaning today and enjoy your brand new home or office.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Post Construction Cleaning service"
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
