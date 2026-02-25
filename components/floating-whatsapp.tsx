'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function FloatingWhatsApp() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) setShow(true);
            else setShow(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={cn(
            "fixed bottom-6 right-4 z-[60] transition-all duration-700 transform",
            show ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-90 pointer-events-none"
        )}>
            <a
                href="https://wa.me/971565429198?text=Hello, I am interested for Deep cleaning services."
                className="group relative flex items-center bg-white rounded-2xl p-2 pr-5 shadow-2xl border border-gray-100 transition-all hover:-translate-y-1 active:scale-95 overflow-hidden"
                target="_blank"
            >
                <div className="relative w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0 border border-gray-50">
                    <Image
                        src="/icons8-whatsapp (1).gif"
                        alt="WhatsApp"
                        width={28}
                        height={28}
                        className="z-10 w-7 h-7 object-contain"
                        unoptimized
                    />
                </div>

                <div className="ml-3 flex flex-col justify-center">
                    <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                        <span className="text-[8px] uppercase font-black text-gray-400 tracking-widest">WhatsApp</span>
                    </div>
                    {/* ডেস্কটপে বড় লেখা, মোবাইলে মিডিয়াম সাইজ লেখা */}
                    <span className="text-[12px] font-bold text-gray-900 leading-none block">
                        <span className="hidden md:inline">Get A Free Quote</span>
                        <span className="md:hidden inline">WhatsApp Us</span>
                    </span>
                </div>
            </a>
        </div>
    );
}