'use client';

import { Phone, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

export default function CTA() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="bg-gray-950 rounded-[28px] relative overflow-hidden p-8 lg:p-14 flex flex-col items-center text-center">

          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E8C600]/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 max-w-xl space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-white font-bold text-[8px] tracking-widest uppercase">Experience Perfection</span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Premium Deep Cleaning <br />
                <span className="text-primary">Services In Dubai</span>
              </h2>

              <p className="text-gray-400 text-sm md:text-base font-medium max-w-lg mx-auto leading-relaxed">
                Experience the magic of true professional cleaning. Book your specialized session today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild className="h-11 px-6 bg-white hover:bg-primary text-black hover:text-white font-bold rounded-full gap-2 shadow-lg w-full sm:w-auto text-[11px] uppercase transition-all group">
                <a href="tel:+971565429198" className="flex items-center gap-2">
                  <span>Call To Book</span>
                  <Phone className="w-3.5 h-3.5" />
                </a>
              </Button>

              <Button asChild className="h-11 px-6 bg-[#E8C600] text-black hover:bg-black hover:text-[#E8C600] font-bold rounded-full gap-2 shadow-lg w-full sm:w-auto text-[11px] uppercase transition-all">
                <a href="https://wa.me/971565429198" className="flex items-center gap-2">
                  <span>WhatsApp Us</span>
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>

            <p className="text-gray-600 font-bold uppercase tracking-widest text-[8px]">Available 24/7 across the UAE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
