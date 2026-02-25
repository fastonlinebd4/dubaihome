'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import AboutSection from '@/components/about-section';
import Services from '@/components/services';
import WhyChooseUs from '@/components/why-choose-us';
import Process from '@/components/process';
import QuoteSection from '@/components/quote-section';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import CTA from '@/components/cta';
import Footer from '@/components/footer';
import FloatingWhatsApp from '@/components/floating-whatsapp';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Improved Reveal Animation Script
    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white w-full">
      <Header isScrolled={isScrolled} />

      <div className="w-full">
        <div className="reveal active">
          <Hero />
        </div>

        <div className="reveal">
          <AboutSection />
        </div>

        <div className="reveal">
          <Services />
        </div>

        <div className="reveal">
          <WhyChooseUs />
        </div>

        <div className="reveal">
          <Process />
        </div>

        <div className="reveal">
          <Testimonials />
        </div>

        <div className="reveal">
          <QuoteSection />
        </div>

        <div className="reveal">
          <FAQ />
        </div>

        <div className="reveal">
          <CTA />
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
