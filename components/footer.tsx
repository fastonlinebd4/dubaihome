'use client';

import { MapPin, Phone, Instagram, ShieldCheck, Heart, MessageCircle, Mail, QrCode, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const MastercardIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-auto">
    <circle cx="16" cy="24" r="14" fill="#EB001B" fillOpacity="0.8" />
    <circle cx="32" cy="24" r="14" fill="#F79E1B" fillOpacity="0.8" />
    <path d="M24 12.336A13.936 13.936 0 0129.432 24 13.936 13.936 0 0124 35.664 13.936 13.936 0 0118.568 24 13.936 13.936 0 0124 12.336z" fill="#FF5F00" />
  </svg>
);

export default function Footer() {
  const mapLink = "/review-us"; 
  const phoneNumber = "+971565429198";
  
  // URL helper to create direct slugs without '/services/'
  const createSlug = (label: string) => `/${label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`;

  const deepCleaningServices = [
    { label: 'Apartment Deep Cleaning', href: createSlug('Apartment Deep Cleaning') },
    { label: 'Villa Deep Cleaning', href: '/villa-deep-cleaning' },
    { label: 'Office Deep Cleaning', href: createSlug('Office Deep Cleaning') },
    { label: 'Floor Deep Cleaning Services', href: createSlug('Floor Deep Cleaning Services') },
    { label: 'Move In Move Out Cleaning', href: createSlug('Move In Move Out Cleaning') },
    { label: 'AC Duct Cleaning', href: createSlug('AC Duct Cleaning') },
    { label: 'Villa Facade Cleaning', href: createSlug('villa-facade-cleaning-services') },
    { label: 'Outside Deep Cleaning', href: createSlug('Outside Deep Cleaning') },
    { label: 'Outside Power Wash', href: createSlug('Outside Power Wash') },
    { label: 'Rooftop Cleaning Services', href: createSlug('Rooftop Cleaning Services') },
    { label: 'Outside Window Cleaning', href: createSlug('Outside Window Cleaning') },
    { label: 'Post Construction Cleaning', href: createSlug('post-construction-cleaning-in-dubai') },
    { label: 'Bathroom Deep Cleaning', href: createSlug('Bathroom Deep Cleaning') },
    { label: 'Steam Deep Cleaning', href: createSlug('Steam Deep Cleaning') },
    { label: 'Restaurant Deep Cleaning', href: createSlug('deep-cleaning-of-restaurant') },
    { label: 'Warehouse Deep Cleaning', href: createSlug('deep-cleaning-of-warehouse') },
    { label: 'Shops Deep Cleaning', href: createSlug('Shops Deep Cleaning') },
    { label: 'Kitchen Deep Cleaning', href: createSlug('Kitchen Deep Cleaning') },
    { label: 'Balcony Deep Cleaning', href: createSlug('Balcony Deep Cleaning') },
  ];

  const cleaningServices = [
    { label: 'Mattress Cleaning', href: createSlug('mattress-cleaning-services') },
    { label: 'Curtain UV & Steam', href: createSlug('Curtain-uv-and-steam-machine') },
    { label: 'Sofa Shampoo', href: createSlug('sofa-shampooing') },
	{ label: 'Carpet Shampoo', href: createSlug('carpet-shampooing') },
    { label: 'Water Tank Cleaning', href: createSlug('water-tank-cleaning-services') },
    { label: 'Swimming Pool Cleaning', href: createSlug('Swimming Pool Cleaning') },
    { label: 'Artificial Grass Cleaning', href: createSlug('Artificial Grass Cleaning') },
    { label: 'Marble Polishing', href: createSlug('Marble Polishing Services') },
  ];

  const paintingServices = [
    { label: 'Office Painting', href: createSlug('Office Painting Services') },
    { label: 'Villa Painting', href: createSlug('Villa Painting Services') },
    { label: 'Apartment Painting', href: createSlug('Apartment Painting') },
  ];

  return (
    <footer className="bg-gray-950 pt-16 pb-8 text-white border-t border-white/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/removed_bg_footer.png" 
                alt="Logo" 
                width={280} 
                height={120} 
                className="h-24 w-auto object-contain"
              />
            </Link>
            <h3 className="text-xl font-bold leading-tight">Serving Dubai With Excellence Since 2014.</h3>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#E8C600] text-[#E8C600]" />)}</div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">5.0 Average Google Rating</p>
            </div>
            <div className="pt-2">
              <a href={mapLink} target="_blank" className="flex items-center gap-4 bg-white/5 border border-white/10 p-3 rounded-2xl w-fit">
                <div className="bg-white p-1.5 rounded-xl"><Image src="/map-qr.png" alt="QR" width={60} height={60} /></div>
                <div><span className="text-[10px] font-black text-primary uppercase tracking-widest">Review Us</span><p className="text-[11px] text-gray-400">SCAN HERE</p></div>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* LEFT COLUMN: Deep Cleaning */}
            <div className="space-y-6">
              <h4 className="text-primary font-black text-[11px] uppercase tracking-[0.2em]">Deep Cleaning</h4>
              <ul className="space-y-3">
                {deepCleaningServices.map((link, i) => (
                  <li key={i}><Link href={link.href} className="text-white hover:text-primary font-bold text-[14px] transition-colors block">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* RIGHT COLUMN: Everything Else (Stacked) */}
            <div className="space-y-12">
              {/* Cleaning Services */}
              <div className="space-y-6">
                <h4 className="text-primary font-black text-[11px] uppercase tracking-[0.2em]">Cleaning Services</h4>
                <ul className="space-y-3">
                  {cleaningServices.map((link, i) => (
                    <li key={i}><Link href={link.href} className="text-white hover:text-primary font-bold text-[14px] transition-colors block">{link.label}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Dubai Painting */}
              <div className="space-y-6">
                <h4 className="text-primary font-black text-[11px] uppercase tracking-[0.2em]">Dubai Painting</h4>
                <ul className="space-y-3">
                  {paintingServices.map((link, i) => (
                    <li key={i}><Link href={link.href} className="text-white hover:text-primary font-extrabold text-[15px] transition-colors block tracking-tight">{link.label}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-6">
                <h4 className="text-gray-400 font-black text-[10px] uppercase tracking-[0.2em]">Company</h4>
                <ul className="space-y-2.5">
                  <li><Link href="/about-us" className="text-gray-400 hover:text-primary font-bold text-sm transition-colors">About Us</Link></li>
                  <li><Link href="/contact-us" className="text-gray-400 hover:text-primary font-bold text-sm transition-colors">Contact Us</Link></li>
                  <li><Link href="/get-quote" className="text-gray-400 hover:text-primary font-bold text-sm transition-colors">Get Quote</Link></li>
                  <li><Link href="/privacy-policy" className="text-gray-400 hover:text-primary font-bold text-sm transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-white/5 mb-8 bg-white/[0.02] px-6 rounded-3xl">
          <a href={`tel:${phoneNumber}`} className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><Phone size={20} /></div>
            <div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">Call Us</p>
              <p className="text-white font-black text-base transition-colors hover:text-primary">{phoneNumber}</p>
            </div>
          </a>
          <a href={`https://wa.me/${phoneNumber.replace('+', '')}`} target="_blank" className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><MessageCircle size={20} /></div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">WhatsApp</p>
              <p className="text-white font-black text-base transition-colors hover:text-primary">{phoneNumber}</p>
            </div>
          </a>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><Mail size={20} /></div>
            <div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">Email Support</p>
              <p className="text-white font-bold text-[14px]">info.dhclean@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-4 text-center lg:text-left">
          <div className="flex items-center gap-2"><MapPin className="text-primary" size={14} /><span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">United Arab Emirates Dubai</span></div>
          <div className="flex items-center gap-6 py-2 px-6 bg-white/5 rounded-full border border-white/10">
            <Image src="/visa.png" alt="Visa" width={35} height={15} /><MastercardIcon /><Image src="/google-pay.png" alt="GPay" width={35} height={15} />
          </div>
          <p className="text-gray-600 text-[9px] font-bold uppercase tracking-widest">© 2026 Dubai Home Cleaning Services</p>
        </div>
      </div>
    </footer>
  );
}
