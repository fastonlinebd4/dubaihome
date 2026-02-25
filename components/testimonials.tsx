'use client';

import { Star, MessageCircle, Quote, ShieldCheck, PenLine, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M16 8.18c0-.66-.05-1.14-.17-1.64H8.16v3h4.5c-.09.74-.58 1.85-1.67 2.6l-1.68 1.48 2.43 1.84c1.55-1.38 2.44-3.43 2.44-5.87z" fill="#4285F4" />
    <path d="M8.16 16c2.2 0 4.06-.71 5.41-1.94l-2.61-2.02c-.73.49-1.66.78-2.8.78-2.16 0-3.99-1.4-4.65-3.33l-2.58 2.01C2.21 14.2 4.97 16 8.16 16z" fill="#34A853" />
    <path d="M3.51 9.49c-.17-.5-.26-1.03-.26-1.58s.09-1.08.26-1.58L.93 4.29C.36 5.4.05 6.67.05 8c0 1.33.31 2.6.87 3.71l2.59-2.22z" fill="#FBBC05" />
    <path d="M8.16 3.09c1.53 0 2.57.65 3.16 1.19l2.3-2.2C12.21.79 10.37 0 8.16 0 4.97 0 2.21 1.8 0 4.29l2.58 2.01c.66-1.93 2.49-3.33 4.65-3.33z" fill="#EB4335" />
  </svg>
);

const testimonials = [
  {
    name: 'Shivdeep Sharma',
    role: 'Resident',
    text: 'Today our building had window glass cleaning done. The team did the work very clean and in a proper way.',
    image: 'https://alrukam.ae/wp-content/uploads/2025/06/pexels-shkrabaanthony-7345413.jpg'
  },
  {
    name: 'Daniel Pilmore',
    role: 'Homeowner',
    text: 'Good job. Arrived on time and worked professionally.',
    image: 'https://alrukam.ae/wp-content/uploads/2025/06/pexels-tima-miroshnichenko-6196237.jpg'
  },
  {
    name: 'Almira Cruz',
    role: 'BAT DWC LLC',
    text: "Great work! Thank you for your patience! Especially Bilal's team!",
    image: 'https://alrukam.ae/wp-content/uploads/2025/06/pexels-shkrabaanthony-7345413.jpg'
  },
  {
    name: 'Porsha K',
    role: 'Verified Client',
    text: "I'm happy with the deep cleaning service. The team did an excellent job and were very punctual.",
    image: 'https://alrukam.ae/wp-content/uploads/2025/06/pexels-tima-miroshnichenko-6195130.jpg'
  }
];

export default function Testimonials() {
  const mapLink = "/review-us";

  return (
    <section id="reviews" className="py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Soft Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-gray-900 font-bold text-[10px] tracking-[0.2em] uppercase">
                Verified Reviews
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight font-heading">
              What People Say <br />
              <span className="text-primary">About Our Quality</span>
            </h2>
          </div>

          {/* ✅ Now routes to /review-us */}
          <Link
            href={mapLink}
            className="flex flex-col gap-3 lg:items-end group p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={20} className="fill-[#FABB05] text-[#FABB05]" />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="scale-125"><GoogleIcon /></div>
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                5.0 Star Rating
              </p>
            </div>
          </Link>
        </div>

        {/* --- Testimonials Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {testimonials.map((t, idx) => (
            <div key={idx} className="relative group">
              {/* ✅ Full card clickable -> /review-us */}
              <Link href={mapLink} className="absolute inset-0 z-30" aria-label="Go to reviews" />
              <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col relative z-20">
                <Quote className="w-10 h-10 text-primary/10 mb-4" />
                <p className="text-gray-600 text-[14px] leading-relaxed mb-8 flex-1 font-medium">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center font-bold text-primary text-sm border-2 border-white shadow-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-gray-900 text-[13px] truncate">{t.name}</h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- PROFESSIONAL GOOGLE REVIEW CTA --- */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-white border border-gray-200 rounded-[48px] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden relative">
            {/* Background Google G Decoration */}
            <div className="absolute -right-10 -bottom-10 opacity-[0.03] scale-[3] pointer-events-none">
              <GoogleIcon />
            </div>

            <div className="flex flex-col items-center text-center space-y-10 relative z-10">
              {/* Google Branding Header */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl border border-gray-50 flex items-center justify-center mb-2">
                  <div className="scale-[2.5]"><GoogleIcon /></div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                    Rate us on Google
                  </h3>
                  <div className="flex items-center justify-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} size={24} className="fill-[#FABB05] text-[#FABB05]" />
                    ))}
                    <span className="ml-2 text-gray-900 font-bold">5.0</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-500 text-lg font-medium max-w-lg">
                Are you happy with our cleaning service? Your 1-minute review helps us maintain our 5-star standard in Dubai!
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                {/* ✅ Now routes to /review-us */}
                <Link
                  href={mapLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#4285F4] text-white px-10 py-5 rounded-2xl font-bold text-sm shadow-xl shadow-blue-500/20 hover:bg-[#3367d6] hover:scale-105 transition-all duration-300"
                >
                  <PenLine size={18} />
                  WRITE A REVIEW
                </Link>

                {/* ✅ Now routes to /review-us */}
                <Link
                  href={mapLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-50 text-gray-600 px-10 py-5 rounded-2xl font-bold text-sm border border-gray-200 hover:bg-white transition-all"
                >
                  SEE ALL REVIEWS
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-4 border-t border-gray-100 w-full">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-500 font-bold" />
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Instant Post
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-500 font-bold" />
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Public Profile
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-500 font-bold" />
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Verified Business
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative floating elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

      </div>
    </section>
  );
}
