'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Phone, ChevronDown, ChevronRight, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { navData } from './nav-data';
import { cn } from '@/lib/utils';

interface HeaderProps {
  isScrolled: boolean;
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <div className={cn("relative flex items-center justify-center", className)}>
    <Image
      src="/icons8-whatsapp-48.png"
      alt="WhatsApp"
      width={24}
      height={24}
      className="w-full h-full object-contain"
    />
  </div>
)

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-xl py-0" : "bg-transparent py-2 md:py-4"
    )}>
      <div className={cn(
        "max-w-[1300px] mx-auto bg-white transition-all duration-300 flex items-center justify-between",
        isScrolled ? "h-16 md:h-20 px-6 sm:px-8 border-b" : "rounded-full h-16 md:h-20 px-4 md:px-6 shadow-[0_4px_25px_rgba(0,0,0,0.1)] border border-gray-100 mx-2 md:mx-auto"
      )}>

        {/* Logo and Styled Company Name Section */}
        <Link href="/" className="relative flex-shrink-0 flex items-center gap-3 md:gap-4 group">
          {/* লোগো কন্টেইনার বড় করা হয়েছে */}
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gray-100 shadow-md flex items-center justify-center bg-white group-hover:border-primary transition-all duration-500">
            <Image
              src="/logo.jpeg"
              alt="Dubai Home Cleaning Services"
              width={80} 
              height={80}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              priority
            />
          </div>
          
          <div className="flex flex-col -space-y-1 md:-space-y-2">
            <span className="text-[16px] md:text-[22px] font-black italic text-primary uppercase tracking-tighter drop-shadow-sm">
              Dubai Home
            </span>
            <span className="text-[10px] md:text-[12px] font-bold text-gray-900 uppercase tracking-[0.25em] opacity-80">
              Cleaning Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:block">
          <NavigationMenu delayDuration={0} skipDelayDuration={0}>
            <NavigationMenuList className="gap-0">
              {navData.map((item) => {
                const isHome = item.label === 'HOME';
                return (
                  <NavigationMenuItem key={item.label}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger
                          className="bg-transparent text-[11px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-gray-50 rounded-full h-auto"
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[700px] p-6 grid grid-cols-4 gap-6 bg-white rounded-[24px] shadow-2xl border border-gray-100">
                            <div className="col-span-1 bg-gray-50 rounded-xl p-5">
                              <Sparkles className="w-5 h-5 text-primary mb-3" />
                              <h3 className="text-gray-900 font-bold text-sm mb-1">Top Rated</h3>
                              <p className="text-gray-500 text-[9px] font-semibold uppercase tracking-wider">Expert Cleaning</p>
                            </div>
                            <div className="col-span-3 grid grid-cols-2 gap-x-4 gap-y-1">
                              {item.submenu.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  className="group flex items-center gap-2 py-2 hover:bg-gray-50 px-3 rounded-lg transition-all"
                                >
                                  <ChevronRight className="w-3 h-3 text-gray-300 group-hover:text-primary" />
                                  <span className="text-[12px] font-bold text-gray-600 group-hover:text-gray-900 uppercase">{sub.label}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "h-auto py-2 px-4 bg-transparent text-[11px] font-bold uppercase tracking-widest rounded-full transition-all",
                            isHome ? "text-primary bg-primary/5" : "text-gray-900 hover:bg-gray-50"
                          )}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden xl:flex items-center gap-4">
          <a
            href="tel:+971565429198"
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 hover:text-primary transition-all shadow-sm hover:shadow-md"
          >
            <Phone className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/971565429198"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 bg-[#E8C600] text-black font-bold text-[11px] px-6 h-11 rounded-full transition-all duration-300 uppercase tracking-widest shadow-md hover:shadow-xl hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <WhatsAppIcon className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            <span className="relative z-10">WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="xl:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 text-gray-900 rounded-full hover:bg-gray-100">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] p-0 bg-white shadow-2xl border-none">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b flex items-center justify-between bg-gray-50/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex items-center justify-center bg-white">
                      <Image
                        src="/logo.jpeg"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[16px] font-black italic text-primary uppercase">Dubai Home</span>
                      <span className="text-[9px] font-bold text-gray-900 uppercase tracking-wider">Cleaning Services</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {navData.map((item) => (
                    <div key={item.label} className="border-b border-gray-50 pb-3 last:border-0">
                      {item.submenu ? (
                        <details className="group">
                          <summary className="flex items-center justify-between list-none cursor-pointer">
                            <span className="text-lg font-bold text-gray-900 uppercase">{item.label}</span>
                            <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
                          </summary>
                          <div className="mt-4 pl-4 space-y-3 border-l-2 border-primary/20">
                            {item.submenu.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-[12px] font-bold text-gray-500 hover:text-primary uppercase tracking-wide"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "block text-lg font-bold uppercase",
                            item.label === 'HOME' ? "text-primary" : "text-gray-900"
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="p-6 bg-gray-50 gap-3 flex flex-col">
                  <a href="tel:+971565429198" className="flex items-center justify-center gap-3 bg-white h-12 rounded-xl border border-gray-200 font-bold text-sm shadow-sm active:scale-95 transition-transform">
                    <Phone className="w-4 h-4 text-primary" />
                    Call Us Now
                  </a>
                  <a href="https://wa.me/971565429198" className="flex items-center justify-center gap-3 bg-[#E8C600] h-12 rounded-xl text-black font-bold text-sm uppercase shadow-md active:scale-95 transition-transform">
                    <WhatsAppIcon className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}