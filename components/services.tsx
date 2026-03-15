'use client';

import {
  Home,
  Building,
  Briefcase,
  Droplets,
  Wind,
  Hammer,
  Sofa,
  Paintbrush,
  Waves,
  ArrowRight,
  Layout,
  Sparkles,
  Sun
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

// Services data
const services = [
  {
    title: 'Apartment Deep Cleaning',
    description:
      'Experience premium Apartment Deep Cleaning Services in Dubai designed to leave your space spotless, fresh, and luxurious. Our trained professionals use advanced tools and high-quality solutions to deliver a deep clean that you can truly feel.',
    icon: Home,
    image: '/images/service_apartment.png',
    href: '/apartment-deep-cleaning'
  },
  {
    title: 'Villa Deep Cleaning',
    description:
      'We provide professional Villa Deep Cleaning Services in Dubai to ensure your home stays fresh, hygienic, and spotless. Our expert team delivers detailed cleaning for every corner, including rooms, kitchens, bathrooms, and outdoor areas with premium quality care.',
    icon: Building,
    image: '/images/service_villa.png',
    href: '/villa-deep-cleaning'
  },
  {
    title: 'Office Deep Cleaning',
    description:
      'Our Office Deep Cleaning Services in Dubai ensure a spotless, hygienic, and professional workspace. We use advanced equipment and high-quality cleaning solutions to deeply clean floors, workstations, restrooms, and common areas, creating a healthier environment for your team and clients.',
    icon: Briefcase,
    image: '/images/service_office.png',
    href: '/office-deep-cleaning'
  },
  {
    title: 'AC Duct Cleaning',
    description:
      'Our professional AC Duct Cleaning Services in Dubai improve indoor air quality by removing dust, allergens, and hidden contaminants from your air duct system. Using advanced equipment and safe cleaning methods, we ensure cleaner airflow, better cooling efficiency, and a healthier environment for your home or office.',
    icon: Wind,
    image: '/images/service_ac.png',
    href: '/ac-duct-cleaning'
  },
  {
    title: 'Villa Painting Services',
    description:
      'Our professional Villa Painting Services in Dubai deliver a smooth, elegant, and long-lasting finish for your home. We use high-quality paints and expert techniques to enhance your villa beauty, ensuring clean work, perfect detailing, and a premium look that adds real value to your property.',
    icon: Paintbrush,
    image: '/images/service_painting.png',
    href: '/villa-painting-services'
  },
  {
    title: 'Water Tank Cleaning',
    description:
      'Our professional Water Tank Cleaning Services in Dubai ensure safe, clean, and hygienic water for your home or office. We use advanced equipment and approved disinfecting methods to remove sludge, bacteria, and harmful contaminants, protecting your health and maintaining water quality at the highest standards.',
    icon: Droplets,
    image: '/images/service_tank.png',
    href: '/water-tank-cleaning-services'
  },
  {
    title: 'Post Construction Cleaning',
    description:
      'Our professional Post Construction Cleaning Services in Dubai remove dust, debris, paint marks, and construction waste to make your property move-in ready. We use advanced cleaning tools and expert techniques to deliver a spotless finish, ensuring your space looks fresh, clean, and perfectly maintained.',
    icon: Hammer,
    image: '/images/service_construction.png',
    href: '/post-construction-cleaning-in-dubai'
  },
  {
    title: 'Move In Out Cleaning',
    description:
      'Our professional Move In & Move Out Cleaning Services in Dubai ensure your property is perfectly clean and ready for the next step. Whether you are relocating or handing over the space, we provide deep and detailed cleaning to leave every corner spotless and refreshed.',
    icon: ArrowRight,
    image: '/images/service_moveinout.png',
    href: '/move-in-move-out-cleaning'
  },
  {
    title: 'Floor Deep Cleaning',
    description:
      'Our professional Floor Deep Cleaning Services in Dubai remove tough stains, dirt, and hidden bacteria to restore the shine and freshness of your floors. We use advanced cleaning equipment and safe solutions to deliver a spotless finish for tiles, marble, and all types of flooring.',
    icon: Layout,
    image: '/images/service_floor.png',
    href: '/floor-deep-cleaning-services'
  },
  {
    title: 'Mattress Cleaning Services',
    description:
      'Our professional Mattress Cleaning Services in Dubai remove dust mites, allergens, stains, and hidden bacteria to ensure a cleaner and healthier sleep environment. We use advanced deep-cleaning methods and safe solutions to refresh your mattress without damaging the fabric.',
    icon: Sparkles,
    image: '/images/service_mattress.png',
    href: '/mattress-cleaning-services'
  },
  {
    title: 'Balcony Deep Cleaning',
    description:
      'Our professional Balcony Deep Cleaning Services in Dubai remove dust, stains, and outdoor dirt to restore the fresh and neat look of your balcony. We use advanced cleaning equipment and safe solutions to ensure spotless floors, railings, and walls for a clean and relaxing outdoor space.',
    icon: Sun,
    image: '/images/service_balcony.png',
    href: '/balcony-deep-cleaning'
  },
  {
    title: 'Carpet Shampooing',
    description:
      'Our professional Carpet Shampooing Services in Dubai remove deep dirt, stubborn stains, dust, and unpleasant odors to restore your carpet fresh, clean, and vibrant look. Using advanced shampooing equipment and high-quality, fabric-safe solutions, we ensure deep sanitization without damaging the fibers. Our process eliminates allergens and bacteria while protecting the texture and color of your carpet.',
    icon: Sparkles,
    image: '/images/service_window.png',
    href: '/carpet-shampooing'
  },
  {
    title: 'Sofa Shampooing',
    description:
      'Our professional Sofa Shampooing Services in Dubai remove deep stains, dust, and bad odors to restore a fresh and clean look. We use safe, high-quality shampoo and advanced cleaning methods to ensure a hygienic and long-lasting finish without damaging the fabric.',
    icon: Sofa,
    image: '/images/service_sofa.png',
    href: '/sofa-and-carpet-shampooing'
  },
  {
    title: 'Outside Power Wash',
    description:
      'Our professional Outside Power Wash Services in Dubai remove stubborn dirt, dust, stains, mold, and algae from exterior surfaces to restore a clean and refreshed appearance. Using high-pressure washing equipment and safe cleaning techniques, we effectively clean driveways, walls, patios, and building exteriors.',
    icon: Waves,
    image: '/images/service_powerwash.png',
    href: '/outside-power-wash'
  },
  {
    title: 'Outside Window Cleaning',
    description:
      'Our professional Outside Window Cleaning Services in Dubai remove dust, water stains, and outdoor dirt to restore crystal-clear glass and a brighter exterior appearance. Using safe access methods and advanced cleaning tools, we ensure streak-free windows that enhance the overall look of your building.',
    icon: Sparkles,
    image: '/images/service_outside_window.png',
    href: '/outside-window-cleaning'
  },
  {
    title: 'Steam Deep Cleaning',
    description:
      'Our professional Steam Deep Cleaning Services in Dubai provide deep sanitization using high-temperature steam to eliminate germs, bacteria, allergens, and stubborn stains. This chemical-free cleaning method is ideal for kitchens, bathrooms, upholstery, and high-touch surfaces.',
    icon: Droplets,
    image: '/images/service_steam.png',
    href: '/steam-deep-cleaning'
  }
];

export default function Services() {
  const router = useRouter();

  return (
    <section id="services" className="py-12 md:py-20 bg-[#fafbfc] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute -top-24 -right-24 w-[320px] md:w-[520px] h-[320px] md:h-[520px] bg-primary/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-28 -left-28 w-[320px] md:w-[520px] h-[320px] md:h-[520px] bg-black/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16 space-y-3 md:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-100 rounded-full shadow-sm">
            <Waves className="w-3.5 h-3.5 text-primary" />
            <span className="text-gray-900 font-bold text-[9px] tracking-[0.2em] uppercase font-heading">
              Our Specialized Solutions
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-heading px-4">
            Cleaning Services <br />
            <span className="text-primary">Tailored To Your Needs</span>
          </h2>

          <p className="text-gray-500 text-xs md:text-[13px] font-medium leading-relaxed px-4">
            From luxury villas to corporate offices, we provide specialized deep cleaning
            <br className="hidden md:block" />
            treatments designed for the unique Dubai environment.
          </p>
        </div>

        {/* Cards Grid - Fixed for Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;

            return (
              <Link
                key={idx}
                href={service.href}
                className="group block rounded-[20px] md:rounded-[28px] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-primary/10"
              >
                {/* Image Section */}
                <div className="relative h-[160px] md:h-[190px] lg:h-[200px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    priority={idx < 4}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/0 to-black/25" />

                  {/* Book Button */}
                  <button
                    type="button"
                    className="absolute top-3 md:top-4 right-3 md:right-4 bg-white/85 hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-md border border-white/60 rounded-full px-2.5 md:px-3 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-gray-900"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      router.push('/get-quote');
                    }}
                  >
                    Book
                  </button>
                </div>

                {/* Content Section */}
                <div className="relative p-4 md:p-5">
                  <div className="pointer-events-none absolute -top-4 md:-top-6 left-4 md:left-5 right-4 md:right-5 h-8 md:h-12 rounded-[18px] md:rounded-[22px] bg-primary/5" />

                  <div className="relative rounded-[18px] md:rounded-[22px] border border-gray-100 bg-white p-3 md:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                    <div className="flex items-start gap-2.5 md:gap-3">
                      <div className="shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-primary/10 border border-primary/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm md:text-[15px] font-bold text-gray-900 font-heading leading-snug">
                          {service.title}
                        </h3>

                        <p className="mt-1.5 md:mt-2 text-gray-600 text-[11px] md:text-[12px] leading-relaxed font-medium text-justify line-clamp-3">
                          {service.description}
                        </p>

                        <div className="mt-2 md:mt-3 inline-flex items-center gap-1.5 md:gap-2 text-primary font-bold text-[11px] md:text-[12px]">
                          View Details
                          <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full h-11 md:h-12 px-8 md:px-10 border-gray-200 font-bold uppercase tracking-widest text-[9px] md:text-[10px] hover:bg-gray-50 transition-all"
          >
            <Link href="/get-quote">Request A Specialized Plan</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
