'use client';

import React, { useState, useEffect } from 'react';
import { Star, Send, Loader2, CheckCircle2, Phone, ArrowLeft, Award, Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// ─── Google Reviews Component ───────────────────────────────────────────────
function GoogleReviewsSection() {
  const [googleData, setGoogleData] = useState<{
    rating: number;
    total: number;
    reviews: any[];
  } | null>(null);
  const [gLoading, setGLoading] = useState(true);

  useEffect(() => {
    fetch('/api/google-reviews')
      .then(r => r.json())
      .then(d => { setGoogleData(d); setGLoading(false); })
      .catch(() => setGLoading(false));
  }, []);

  const GoogleIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  if (gLoading) return (
    <div className="flex justify-center py-16">
      <Loader2 className="animate-spin text-gray-300" size={32} />
    </div>
  );

  if (!googleData || !googleData.reviews?.length) return null;

  return (
    <div className="space-y-6 mt-16">
      {/* Section Header */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-lg border border-gray-100 shadow-sm">
            <GoogleIcon />
          </div>
          <div>
            <h3 className="font-black text-gray-900 uppercase text-[11px] tracking-widest">Google Reviews</h3>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[10px] font-bold text-gray-400">
                {googleData.rating} ★ · {googleData.total?.toLocaleString()} reviews
              </span>
            </div>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/place/Dubai+Home+Cleaning+Services/@25.0756584,55.227488,15z/data=!4m6!3m5!1s0x8bb6fca105162787:0xeff838091c2396d6!8m2!3d25.0760224!4d55.227488!16s%2Fg%2F11z24cvl4h"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] font-black text-blue-500 bg-blue-50 px-3 py-1.5 rounded-full ring-1 ring-blue-100 hover:bg-blue-100 transition-colors uppercase tracking-widest"
        >
          View All
        </a>
      </div>

      {/* Overall Rating Banner */}
      <div className="bg-white rounded-[35px] border border-gray-100 shadow-sm p-8 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <GoogleIcon />
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Overall Rating</span>
        </div>
        <div className="text-5xl font-black text-gray-900">{googleData.rating}</div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < Math.round(googleData.rating)
                ? 'fill-[#FFD700] text-[#FFD700]'
                : 'text-gray-100'}
            />
          ))}
        </div>
        <p className="text-[11px] text-gray-400 font-medium">
          Based on {googleData.total?.toLocaleString()} Google reviews
        </p>
      </div>

      {/* Individual Review Cards */}
      <div className="grid gap-6">
        {googleData.reviews.map((r: any, i: number) => (
          <div
            key={i}
            className="bg-white p-8 rounded-[35px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 relative group overflow-hidden"
          >
            {/* Background quote watermark */}
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
              <Quote size={80} className="text-black" />
            </div>

            {/* Reviewer info row */}
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center gap-4">
                {r.profile_photo_url ? (
                  <img
                    src={r.profile_photo_url}
                    alt={r.author_name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-2xl object-cover border border-gray-100"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.style.display = 'none';
                      const sib = t.nextElementSibling as HTMLElement;
                      if (sib) sib.style.display = 'flex';
                    }}
                  />
                ) : null}
                {/* Fallback avatar */}
                <div
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 items-center justify-center text-sm font-black text-gray-900 border border-gray-200"
                  style={{ display: r.profile_photo_url ? 'none' : 'flex' }}
                >
                  {r.author_name?.charAt(0)?.toUpperCase()}
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-[13px] tracking-tight">{r.author_name}</h4>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={10}
                        className={idx < r.rating ? 'fill-[#FFD700] text-[#FFD700]' : 'text-gray-100'}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Google badge + time */}
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg">
                  <GoogleIcon />
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tight">Google</span>
                </div>
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">
                  {r.relative_time_description}
                </span>
              </div>
            </div>

            {/* Review text */}
            {r.text ? (
              <p className="text-gray-600 text-[14px] leading-relaxed font-medium relative z-10">
                "{r.text}"
              </p>
            ) : (
              <p className="text-gray-300 text-[13px] italic">No written review.</p>
            )}
          </div>
        ))}
      </div>

      {/* View More on Google CTA */}
      <a
        href="https://www.google.com/maps/place/Dubai+Home+Cleaning+Services/@25.0756584,55.227488,15z/data=!4m6!3m5!1s0x8bb6fca105162787:0xeff838091c2396d6!8m2!3d25.0760224!4d55.227488!16s%2Fg%2F11z24cvl4h"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-5 rounded-[24px] bg-white border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all font-black text-[11px] uppercase tracking-widest text-gray-600 hover:text-blue-600"
      >
        <GoogleIcon />
        See all {googleData.total?.toLocaleString()} reviews on Google
      </a>
    </div>
  );
}

// ─── Main Review Page ────────────────────────────────────────────────────────
export default function ReviewPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState<any[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      if (Array.isArray(data)) setReviews(data);
    } catch (e) { console.error(e); }
  };

  useEffect(() => { fetchReviews(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return alert("Please select a rating!");

    setLoading(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, rating, comment }),
      });

      if (res.ok) {
        setSubmitted(true);
        setName(''); setComment(''); setRating(0);
        fetchReviews();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (e) { alert("Something went wrong. Please try again."); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Top Brand Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="group flex items-center gap-2 text-gray-500 hover:text-black transition-colors">
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                <ArrowLeft size={16} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:block">Home</span>
            </Link>

            <Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform">
              <div className="w-10 h-10 border-2 border-primary/20 rounded-full overflow-hidden p-0.5">
                <Image src="/logo.jpeg" alt="Logo" width={40} height={40} className="rounded-full object-cover" />
              </div>
              <div>
                <h2 className="text-[12px] font-black text-gray-900 leading-none uppercase italic">Dubai Home</h2>
                <p className="text-[8px] font-bold text-primary uppercase tracking-[0.2em]">Cleaning Services</p>
              </div>
            </Link>
          </div>

          <a href="tel:+971565429198" className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-primary hover:text-black transition-all duration-300">
            <Phone size={14} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Call Support</span>
          </a>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 py-10">

        {/* Success Alert */}
        {submitted && (
          <div className="bg-black text-white p-5 rounded-[24px] mb-8 flex items-center gap-4 animate-in slide-in-from-top-4 duration-500 shadow-2xl">
            <div className="bg-primary p-2 rounded-full">
              <CheckCircle2 size={20} className="text-black" />
            </div>
            <div>
              <p className="font-bold text-sm">Thank You!</p>
              <p className="text-[10px] text-gray-400">Your feedback helps us grow and serve you better.</p>
            </div>
          </div>
        )}

        {/* Review Input Section */}
        <div className="relative group mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-transparent rounded-[40px] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-4">
                Share Experience
              </span>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">How was your service?</h1>
              <p className="text-gray-400 text-[11px] font-medium uppercase tracking-widest">It only takes a minute</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Star Rating */}
              <div className="flex justify-center gap-4 py-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onMouseEnter={() => setHover(s)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(s)}
                    className="relative transition-all duration-300 transform active:scale-75"
                  >
                    <Star
                      size={48}
                      className={`${s <= (hover || rating) ? 'fill-[#FFD700] text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] scale-110' : 'text-gray-100'} transition-all duration-300`}
                    />
                    {s <= (hover || rating) && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-ping" />
                    )}
                  </button>
                ))}
              </div>

              <div className="space-y-5 pt-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  className="w-full p-5 bg-gray-50 border-2 border-transparent rounded-[24px] outline-none focus:border-primary/30 focus:bg-white transition-all font-bold text-gray-800 text-sm placeholder:text-gray-300"
                />
                <textarea
                  placeholder="Tell us what you liked about our service..."
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  required
                  className="w-full p-6 bg-gray-50 border-2 border-transparent rounded-[24px] outline-none focus:border-primary/30 focus:bg-white transition-all font-medium text-gray-700 text-sm h-40 resize-none placeholder:text-gray-300"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group w-full bg-primary text-black p-5 rounded-[24px] font-black text-xs uppercase tracking-[0.25em] shadow-2xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 transition-all flex justify-center items-center gap-3 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                {loading ? "Posting..." : "Post Review Now"}
              </button>
            </form>
          </div>
        </div>

        {/* Site Reviews Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-900 rounded-lg">
                <Award size={16} className="text-primary" />
              </div>
              <h3 className="font-black text-gray-900 uppercase text-[11px] tracking-widest">Happy Customers</h3>
            </div>
            <span className="bg-primary/10 text-primary text-[9px] font-black px-3 py-1.5 rounded-full ring-1 ring-primary/20">
              {reviews.length} FEEDBACKS
            </span>
          </div>

          <div className="grid gap-6">
            {reviews.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-[40px] border border-dashed border-gray-200">
                <p className="text-gray-300 text-sm font-medium italic">Be the first to share your experience!</p>
              </div>
            ) : (
              reviews.map((r, i) => (
                <div key={i} className="bg-white p-8 rounded-[35px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <Quote size={80} className="text-black" />
                  </div>

                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-sm font-black text-gray-900 border border-gray-200">
                        {r.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-black text-gray-900 text-[13px] tracking-tight">{r.name}</h4>
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} size={10} className={`${idx < r.rating ? 'fill-[#FFD700] text-[#FFD700]' : 'text-gray-100'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md uppercase tracking-tighter">
                      {new Date(r.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <p className="text-gray-600 text-[14px] leading-relaxed font-medium relative z-10">
                    "{r.comment}"
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ── Google Reviews Section ── */}
        <GoogleReviewsSection />

        {/* Modern Call CTA */}
        <div className="mt-24 group relative">
          <div className="absolute inset-0 bg-primary blur-3xl opacity-10 group-hover:opacity-20 transition-opacity rounded-full" />
          <div className="relative bg-gray-900 text-white p-10 rounded-[45px] text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10">
              <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">Professional Service</p>
              <h3 className="text-2xl font-black mb-8 leading-tight">
                Ready to experience <br/><span className="text-primary italic">Top-Tier</span> cleaning?
              </h3>
              <a
                href="tel:+971565429198"
                className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-[20px] font-black text-xs uppercase tracking-widest hover:bg-primary transition-all hover:scale-105 active:scale-95 shadow-2xl"
              >
                <Phone size={18} />
                Book via Phone
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
