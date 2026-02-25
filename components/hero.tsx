'use client';

import { Menu, Star, Check, Phone } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <div className={cn("relative flex items-center justify-center", className)}>
    <Image
      src="/icons8-whatsapp-48.png"
      alt="WhatsApp"
      width={24}
      height={24}
      className="w-full h-full object-contain"
      unoptimized
    />
  </div>
)

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path d="M16 8.18c0-.66-.05-1.14-.17-1.64H8.16v3h4.5c-.09.74-.58 1.85-1.67 2.6l-1.68 1.48 2.43 1.84c1.55-1.38 2.44-3.43 2.44-5.87z" fill="#4285F4" /><path d="M8.16 16c2.2 0 4.06-.71 5.41-1.94l-2.61-2.02c-.73.49-1.66.78-2.8.78-2.16 0-3.99-1.4-4.65-3.33l-2.58 2.01C2.21 14.2 4.97 16 8.16 16z" fill="#34A853" /><path d="M3.51 9.49c-.17-.5-.26-1.03-.26-1.58s.09-1.08.26-1.58L.93 4.29C.36 5.4.05 6.67.05 8c0 1.33.31 2.6.87 3.71l2.59-2.22z" fill="#FBBC05" /><path d="M8.16 3.09c1.53 0 2.57.65 3.16 1.19l2.3-2.2C12.21.79 10.37 0 8.16 0 4.97 0 2.21 1.8 0 4.29l2.58 2.01c.66-1.93 2.49-3.33 4.65-3.33z" fill="#EB4335" /></svg>
);

export default function Hero() {
  return (
    <section className="relative pt-24 pb-6 lg:pt-36 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto relative h-[450px] lg:h-[550px] w-full bg-[#f4f2ef] rounded-[40px] overflow-hidden shadow-2xl">

        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero_new.png"
            alt="Expert Cleaner"
            fill
            className="object-cover object-center lg:object-[center_20%]"
            priority
          />
          {/* Subtle Black Overlay for better contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Glassy Effect Card */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-12 lg:left-20 z-10 w-[92%] max-w-[480px] bg-white/40 backdrop-blur-xl rounded-[32px] p-6 md:p-8 shadow-2xl border border-white/30 animate-fade-in-up">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 leading-[1.2] mb-3 text-center lg:text-left drop-shadow-sm">
            Expert Deep Cleaning Services in Dubai
          </h1>

          <p className="text-gray-600 text-sm md:text-base font-body mb-6 text-center lg:text-left">
            Deep Cleaning Services for Villas, Apartments, Offices, and More..
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
            <a
              href="tel:+971565429198"
              className="inline-flex items-center justify-center gap-2 bg-[#f0fdf4] border border-[#a6eeb5] hover:bg-[#dcfce7] text-gray-900 px-6 py-2.5 rounded-full transition-all group shadow-sm flex-1 lg:flex-none"
            >
              <Phone className="w-4 h-4 text-gray-700 font-normal" />
              <span className="font-bold text-sm">Call to Book Now</span>
            </a>

            <a
              href="https://wa.me/971565429198"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#E8C600] hover:bg-[#000] hover:text-[#E8C600] text-black px-6 py-2.5 rounded-full transition-all shadow-md font-bold text-sm flex-1 lg:flex-none"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {['Professional', 'Friendly', 'Convenient'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#3CA200] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white stroke-[4]" />
                </div>
                <span className="font-bold text-gray-900 text-xs">{item}</span>
              </div>
            ))}
          </div>

          <div className="absolute -top-10 -right-8 z-[-1] hidden md:block animate-float">
            <Image
              src="/images/environment.png"
              width={100}
              height={80}
              alt="Leaf"
              className="w-20 h-auto opacity-100 rotate-12"
            />
          </div>
        </div>

        {/* ✅ Review Card now clickable -> /review-us */}
        <Link
          href="/review-us"
          className="absolute bottom-6 right-6 z-20 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-3 md:p-4 hidden md:flex items-center gap-3 animate-fade-in-left border border-white/50 cursor-pointer hover:scale-[1.02] active:scale-[0.99] transition-transform"
        >
          <div className="bg-white p-1 rounded-full shadow-sm shrink-0">
            <GoogleIcon />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-gray-900 text-base">5.0</span>
              <div className="flex gap-0.5">
                <span className="font-bold text-blue-500 text-lg">G</span>
              </div>
            </div>
            <div className="text-[10px] text-gray-500 font-medium whitespace-nowrap">189 Reviews</div>
          </div>
          <div className="flex -space-x-2.5 overflow-hidden ml-1">
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">JD</div>
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-green-100 flex items-center justify-center text-[10px] font-bold text-green-600">AK</div>
          </div>
        </Link>

      </div>
    </section>
  );
}
