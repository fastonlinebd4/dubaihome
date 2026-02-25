'use client';

import { ShieldCheck, Users2, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image Side */}
          <div className="relative group mx-auto lg:mx-0 max-w-[420px] w-full">
            <div className="relative z-10 aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl border-4 border-white ring-1 ring-gray-100">
              <Image
                src="/images/hero.png"
                alt="Dubai Home Cleaning Services Team at Work"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Small Detail Image - Adjusted to be less aggressive */}
            <div className="absolute -bottom-6 -right-6 w-32 h-44 rounded-[24px] overflow-hidden shadow-xl border-4 border-white hidden md:block animate-float animation-delay-500 z-20">
              <Image
                src="/images/about_team.png"
                alt="Specialized Cleaning"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Experience Badge - Adjusted position */}
            <div className="absolute top-8 -left-6 bg-white p-4 md:p-5 rounded-[24px] shadow-lg border border-gray-50 flex flex-col items-center justify-center animate-pulse-soft z-20">
              <span className="text-xl md:text-2xl font-black text-primary leading-none">10+</span>
              <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-gray-400 text-center mt-1.5">
                Years of<br />Expertise
              </span>
            </div>

            {/* Decorative Dot Grid */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:12px_12px] opacity-40 z-0" />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-primary font-bold text-[8px] tracking-widest uppercase font-heading">
                  Since 2014 in Dubai
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight font-heading">
                Committed to Delivering <br />
                <span className="text-primary">Exceptional Cleanliness</span>
              </h2>

              <p className="text-gray-600 text-[13px] md:text-sm font-medium leading-relaxed max-w-xl">
                At Dubai Home Cleaning Services, we believe that a clean environment is the foundation of a happy and healthy life. Our specialized team brings a decade of experience to every villa, apartment, and office we serve across Dubai.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Expert Team', desc: 'Seasoned professionals with field experience.', icon: Users2, color: 'bg-primary' },
                { title: 'Secure & Vetted', desc: 'Staff members are background-checked.', icon: ShieldCheck, color: 'bg-accent' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 p-4 bg-gray-50/50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm", item.color)}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-gray-900 font-heading tracking-tight">{item.title}</h4>
                    <p className="text-gray-500 text-[10px] leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 py-1">
              {['Eco-Friendly Cleaning Products', '24/7 Dedicated Support', '100% Satisfaction Guarantee'].map((text, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-[12px] font-bold text-gray-700">{text}</span>
                </div>
              ))}
            </div>

            <div className="pt-5 flex flex-wrap items-center gap-5 border-t border-gray-100">
              <Button
                asChild
                className="h-11 px-6 bg-gray-900 hover:bg-primary text-white font-bold rounded-full text-[10px] uppercase tracking-widest transition-all group shadow-md"
              >
                <Link href="/about-us" className="flex items-center gap-2.5">
                  <span>Explore Our Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              {/* ✅ Happy Clients clickable -> /review-us */}
              <Link href="/review-us" className="flex items-center gap-3 cursor-pointer group hover:opacity-90 transition">
                <div className="flex -space-x-2.5">
                  {[
                    { label: 'AS', color: 'bg-blue-100 text-blue-600' },
                    { label: 'MK', color: 'bg-green-100 text-green-600' },
                    { label: 'RZ', color: 'bg-purple-100 text-purple-600' }
                  ].map((client, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-sm",
                        client.color
                      )}
                    >
                      {client.label}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-gray-900 text-xs leading-none group-hover:text-primary transition-colors">
                    5000+
                  </span>
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1 group-hover:text-primary transition-colors">
                    Happy Clients
                  </span>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
