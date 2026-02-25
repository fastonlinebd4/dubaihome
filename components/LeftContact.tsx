'use client';

import { Phone } from 'lucide-react';

export default function LeftContact() {
    const phoneNumber = "+971565429198";

    return (
        <div className="fixed bottom-6 left-4 z-[999]">
            <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2.5 bg-white text-black p-2 pr-4 rounded-2xl shadow-2xl border border-gray-100 hover:scale-105 transition-all group"
            >
                <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Phone size={18} fill="currentColor" />
                </div>
                
                <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">Call 24/7</span>
                    </div>
                    <span className="text-[12px] font-black text-gray-900 leading-none">
                        {phoneNumber}
                    </span>
                </div>
            </a>
        </div>
    );
}