'use client';

import { Calculator, Sparkles, Heart, MousePointer2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Process() {
  const steps = [
    {
      title: 'Free Quote',
      description: 'Tell us about your home and choose the date you want in seconds.',
      icon: Calculator,
      number: '01',
      color: 'from-primary/20 to-primary/5'
    },
    {
      title: 'Expert Clean',
      description: 'Our seasoned team of full-time experts will transform your space.',
      icon: Sparkles,
      number: '02',
      color: 'from-accent/20 to-accent/5'
    },
    {
      title: 'Relax & Enjoy',
      description: 'Sit back and enjoy how amazing your home or business looks now.',
      icon: Heart,
      number: '03',
      color: 'from-primary/20 to-primary/5'
    }
  ];

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden text-white">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
            <MousePointer2 className="w-4 h-4 text-primary" />
            <span className="text-white font-bold text-[10px] tracking-[0.2em] uppercase font-heading">The Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-heading">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed">
            We have simplified our process into three easy steps to ensure you get the best cleaning experience without any hassle.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative group flex flex-col items-center text-center z-10">

              {/* Step Number Badge */}
              <div className="absolute -top-6 -right-2 text-6xl font-black text-white/5 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none font-heading">
                {step.number}
              </div>

              {/* Icon Container with Glow */}
              <div className="relative mb-8">
                <div className={cn("absolute inset-0 bg-gradient-to-br rounded-[30px] blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500", step.color)} />
                <div className="relative w-24 h-24 bg-white/5 border border-white/10 rounded-[30px] flex items-center justify-center backdrop-blur-sm group-hover:border-primary/50 group-hover:-translate-y-2 transition-all duration-500">
                  <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Step Number Inside */}
                <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-black text-xs shadow-lg font-heading">
                  {step.number}
                </div>
              </div>

              <div className="space-y-3 max-w-[280px]">
                <h4 className="text-xl font-bold text-white uppercase tracking-tight font-heading group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium">{step.description}</p>
              </div>

              {/* Arrow Indicator (Mobile/Tablet) */}
              {idx < steps.length - 1 && (
                <div className="lg:hidden my-8 w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Ready to experience the magic?</p>
          <a
            href="#quote"
            className="inline-flex items-center gap-3 bg-primary text-black px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_10px_30px_-10px_rgba(60,162,0,0.5)] active:scale-95"
          >
            Book My Clean Now
          </a>
        </div>
      </div>
    </section>
  );
}
