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
  TreePine,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export default function OutsideDeepCleaningPage() {
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
                <span className="text-[#091a33] font-bold text-[10px] tracking-widest uppercase">Exterior Specialist</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#091a33] leading-[1.1] tracking-tight">
                Premium Outside Deep Cleaning In <span className="text-[#529e00]">Dubai</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                <strong>Dubai Home Cleaning Services</strong> provides professional{' '}
                <strong>outside deep cleaning services in Dubai</strong> to restore the cleanliness and appearance of your property's exterior areas. Outdoor spaces often accumulate{' '}
                <strong>dust, sand, stains, algae, and environmental residue</strong> due to Dubai's climate. Our expert team thoroughly cleans{' '}
                <strong>driveways, patios, garden areas, boundary walls, parking spaces, and exterior surfaces</strong> using advanced equipment and safe cleaning solutions. We remove{' '}
                <strong>stubborn dirt buildup, bird droppings, oil stains, and debris</strong> that regular washing cannot eliminate. Special attention is given to{' '}
                <strong>corners, drainage areas, and high-traffic outdoor zones</strong>. This service enhances curb appeal and maintains property value for{' '}
                <Link href="/villa-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">villas</Link>,{' '}
                <Link href="/apartment-deep-cleaning" className="text-[#529e00] underline underline-offset-2 hover:text-[#3d7700] transition-colors font-bold">apartments</Link>, and commercial buildings. Regular outside deep cleaning also{' '}
                <strong>prevents long-term surface damage</strong>. Trust Dubai Home Cleaning Services to deliver{' '}
                <strong>spotless, refreshed, and professionally maintained outdoor spaces</strong> with guaranteed quality results.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/971565429198?text=I need Outside Deep Cleaning service"
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
                    <p className="text-xs font-bold text-gray-500 uppercase">Certified</p>
                    <p className="text-sm font-black text-[#091a33]">Technicians</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e8c600]/10 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#e8c600]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">5-Star Rated</p>
                    <p className="text-sm font-black text-[#091a33]">Exterior Care</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/outside-cleaning-hero.jpg"
                  alt="Outside Deep Cleaning Dubai"
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
                    <TreePine className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#091a33]">1200+</p>
                    <p className="text-xs font-bold text-gray-500 uppercase">Exterior Projects</p>
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
              <TreePine className="w-12 h-12 text-[#529e00]" />
            </div>
            <div className="text-center mb-10 mt-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Outside Deep Cleaning Task List</h2>
              <p className="text-white/90 text-base font-medium">Professional Exterior Maintenance for a Pristine Look</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Column 1 */}
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Façade & Wall Washing', href: '/villa-facade-cleaning-services' },
                  { label: 'Interlock & Driveway Pressure Wash', href: '/outside-power-wash' },
                  { label: 'Outdoor Patio & Deck Scrubbing', href: null },
                  { label: 'Exterior Window Glass Cleaning', href: '/outside-window-cleaning' },
                  { label: 'Balcony & Terrace Deep Clean', href: '/balcony-deep-cleaning' },
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
              {/* Column 2 */}
              <div className="bg-gradient-to-br from-[#e8f5d8] to-[#d4eab8] rounded-[32px] p-8 space-y-4">
                {[
                  { label: 'Boundary Wall Cleaning', href: null },
                  { label: 'Parking Area Wash', href: null },
                  { label: 'Swimming Pool Deck Detailing', href: '/swimming-pool-cleaning' },
                  { label: 'Removal of Sand & Desert Dust', href: null },
                  { label: 'Exterior Light & Fixture Cleaning', href: null },
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
              What's Included In Our Outside <span className="text-[#529e00]">Deep Cleaning?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive service ensures every corner of your property's exterior looks brand new.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'High-Pressure Washing',
                href: '/outside-power-wash',
                items: [
                  { label: 'Removing deep-seated dirt', href: null },
                  { label: 'Interlock & tile cleaning', href: null },
                  { label: 'Driveway oil stain removal', href: null },
                  { label: 'Moss & algae treatment', href: null },
                  { label: 'Brickwork restoration', href: null },
                ]
              },
              {
                title: 'Outdoor Living Spaces',
                href: null,
                items: [
                  { label: 'Gazebo & Pergola dusting', href: null },
                  { label: 'Outdoor furniture cleaning', href: null },
                  { label: 'Barbecue area degreasing', href: null },
                  { label: 'Decorative stone cleaning', href: '/marble-polishing-services' },
                ]
              },
              {
                title: 'Wall & Façade Care',
                href: '/villa-facade-cleaning-services',
                items: [
                  { label: 'Dust removal from walls', href: null },
                  { label: 'Spider web removal', href: null },
                  { label: 'Paint-safe exterior wash', href: null },
                  { label: 'Balcony railing polishing', href: '/balcony-deep-cleaning' },
                  { label: 'Cladding deep cleaning', href: null },
                ]
              },
              {
                title: 'Glass & Window Detailing',
                href: '/outside-window-cleaning',
                items: [
                  { label: 'Exterior pane cleaning', href: null },
                  { label: 'Sill & frame wiping', href: null },
                  { label: 'Screen mesh vacuuming', href: null },
                  { label: 'Glass canopy washing', href: null },
                  { label: 'Streak-free finishing', href: null },
                ]
              },
              {
                title: 'Parking & Perimeter',
                href: null,
                items: [
                  { label: 'Gate & fence wiping', href: null },
                  { label: 'Entrance way detailing', href: null },
                  { label: 'Boundary wall pressure wash', href: null },
                  { label: 'Pathway sweeping & wash', href: null },
                ]
              },
              {
                title: 'Final Touches',
                href: null,
                items: [
                  { label: 'Outdoor fixture wiping', href: null },
                  { label: 'Drain cover cleaning', href: null },
                  { label: 'Staircase pressure wash', href: null },
                  { label: 'Debris & sand removal', href: null },
                  { label: 'Final quality inspection', href: null },
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
                Why Invest In <span className="text-[#529e00]">Outside Deep Cleaning</span> In Dubai?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Extreme Sand & Dust',
                    desc: 'Dubai\'s sandstorms leave thick layers of dust that damage paint and surfaces if not cleaned professionally.',
                    href: null,
                  },
                  {
                    title: 'Enhance First Impressions',
                    desc: 'A clean exterior significantly increases the aesthetic value and curb appeal of your property.',
                    href: '/villa-facade-cleaning-services',
                  },
                  {
                    title: 'Surface Longevity',
                    desc: 'Removing salt and pollutants prevents the erosion of tiles, interlock, and exterior wall paint.',
                    href: null,
                  },
                  {
                    title: 'Healthier Outdoor Life',
                    desc: 'Enjoy your garden and patio without the worry of allergens, pests, or accumulated desert grime.',
                    href: null,
                  },
                  {
                    title: 'Pre-Event Preparation',
                    desc: 'The perfect way to prepare your home for garden parties, family gatherings, or outdoor events.',
                    href: null,
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
                  src="/images/why-outside-cleaning.jpg"
                  alt="Outdoor Deep Cleaning Benefits"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#529e00] to-[#3d7700] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our Exterior Cleaning Process
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Advanced pressure washing and detailing for all outdoor surfaces
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Site Inspection', desc: 'Assessing surface types and identifying heavy-duty stain areas' },
              { step: '02', title: 'Prep & Shield', desc: 'Protecting plants and delicate outdoor electronics before wash' },
              { step: '03', title: 'Pressure Wash', desc: 'High-pressure deep cleaning of all floors, walls, and glass' },
              { step: '04', title: 'Final Rinse', desc: 'Rinsing down and final detailing to ensure a sparkling finish' },
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
              { label: 'Villa Facade Cleaning', href: '/villa-facade-cleaning-services' },
              { label: 'Outside Power Wash', href: '/outside-power-wash' },
              { label: 'Outside Window Cleaning', href: '/outside-window-cleaning' },
              { label: 'Rooftop Cleaning Services', href: '/rooftop-cleaning-services' },
              { label: 'Balcony Deep Cleaning', href: '/balcony-deep-cleaning' },
              { label: 'Swimming Pool Cleaning', href: '/swimming-pool-cleaning' },
              { label: 'Artificial Grass Cleaning', href: '/artificial-grass-cleaning' },
              { label: 'Marble Polishing Services', href: '/marble-polishing-services' },
              { label: 'Villa Deep Cleaning', href: '/villa-deep-cleaning' },
              { label: 'Post Construction Cleaning', href: '/post-construction-cleaning-in-dubai' },
              { label: 'Floor Deep Cleaning', href: '/floor-deep-cleaning-services' },
              { label: 'Apartment Deep Cleaning', href: '/apartment-deep-cleaning' },
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
              Exterior Cleaning <span className="text-[#529e00]">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Will high-pressure wash damage my wall paint?',
                a: 'Our technicians adjust the pressure levels based on the surface material (paint, stone, or tile) to ensure a safe yet effective clean.'
              },
              {
                q: 'How long does the outside deep cleaning take?',
                a: 'Depending on the property size, it usually takes 4-7 hours to thoroughly clean the entire exterior perimeter.'
              },
              {
                q: 'Do you clean swimming pools?',
                a: 'We focus on the swimming pool deck, surrounding tiles, and furniture. For pool water filtration, we recommend specialized pool maintenance.'
              },
              {
                q: 'Do I need to provide water access?',
                a: 'Yes, we typically require access to an external water connection point to run our pressure washing equipment.'
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
              Is Your Property Ready For A Makeover?
            </h2>
            <p className="text-[#091a33]/70 mb-8 max-w-2xl mx-auto">
              Book our professional outside deep cleaning today and let your home shine from the outside in.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/971565429198?text=I need Outside Deep Cleaning service"
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
