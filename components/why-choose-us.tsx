'use client';

import { DollarSign, Package, ShieldCheck, UserCheck, Zap, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Transparent Pricing',
      description: 'Get instant, honest pricing and free custom quotes directly through our website.',
      icon: DollarSign,
      color: 'bg-[#E8C600]',
      highlight: 'bg-[#E8C600]/10'
    },
    {
      title: 'Full Equipment',
      description: 'Our team arrives fully equipped with professional-grade supplies and tools.',
      icon: Package,
      color: 'bg-primary',
      highlight: 'bg-primary/10'
    },
    {
      title: '100% Guaranteed',
      description: 'Not satisfied? We’ll return and re-clean your space at no additional cost.',
      icon: ShieldCheck,
      color: 'bg-primary',
      highlight: 'bg-primary/10'
    },
    {
      title: 'Trustworthy Staff',
      description: 'Every staff member is background-checked and professionally trained.',
      icon: UserCheck,
      color: 'bg-[#E8C600]',
      highlight: 'bg-[#E8C600]/10'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-gray-900 font-bold text-[9px] tracking-[0.2em] uppercase font-heading">The Difference</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-heading">
            Why Our Clients <br />
            <span className="text-primary">Continuously Choose Us</span>
          </h2>
          <p className="text-gray-500 text-[13px] md:text-sm font-medium leading-relaxed">
            Experience the peace of mind that comes with hiring Dubai's most reliable 5-star cleaning experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-8 rounded-[40px] transition-all duration-500 border border-gray-100/10 hover:border-primary/20 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] flex flex-col items-center text-center"
            >
              {/* Animated Background Decoration */}
              <div className={cn("absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500", feature.highlight)} />

              <div className="relative mb-8">
                <div className={cn("w-16 h-16 rounded-[24px] flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110", feature.color)}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
              </div>

              <div className="relative z-10 space-y-3">
                <h4 className="text-lg font-bold text-gray-900 font-heading tracking-tight">{feature.title}</h4>
                <p className="text-gray-500 text-[12px] font-medium leading-relaxed">{feature.description}</p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-6 w-8 h-[2px] bg-gray-200 group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
