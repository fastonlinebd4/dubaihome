'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Waves } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
    {
        question: "What is included in your deep cleaning service?",
        answer: "Our deep cleaning service includes detailed dusting, scrubbing, vacuuming, and mopping of all rooms. We thoroughly clean kitchen countertops, sinks, cabinet exteriors, and appliance surfaces. Bathrooms are fully sanitized, including toilets, sinks, tiles, and showers. This service is ideal for spaces that need a more intensive clean—just let us know your specific requirements!"
    },
    {
        question: "How much does it cost to clean my home?",
        answer: "Our pricing is customized based on the size and type of your property, ensuring a thorough and professional deep cleaning that meets your exact needs. To provide an accurate quote, please share details such as the number of rooms, total area, and any specific cleaning requirements. If possible, sharing a short video of your property can help us better understand the scope of work and offer the most precise estimate."
    },
    {
        question: "How long does a deep cleaning usually take?",
        answer: "The duration depends on the size and condition of the property. On average, it can take 5 to 6 hours. Larger or heavily soiled areas may take longer."
    },
    {
        question: "Do you bring your own cleaning supplies and equipment?",
        answer: "Yes, we bring all necessary cleaning materials and equipment, including eco-friendly products and professional tools to ensure the highest cleaning standards."
    },
    {
        question: "What if I need to cancel my appointment?",
        answer: "If you need to cancel or reschedule, please inform us at least 24 hours in advance via WhatsApp. For same-day cancellations, a 40% cancellation fee of the booking amount will apply to cover scheduling and team allocation costs."
    },
    {
        question: "Are your cleaners trained and verified?",
        answer: "Absolutely. All our cleaning professionals are fully trained, background-checked, and carefully vetted to ensure safety, reliability, and quality service."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full">
                        <HelpCircle className="w-3 h-3 text-primary" />
                        <span className="text-gray-900 font-bold text-[8px] tracking-widest uppercase">Common Questions</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-gray-500 text-xs font-medium leading-relaxed">
                        Everything you need to know about our specialized cleaning services.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={cn(
                                    "group rounded-[20px] transition-all duration-300 border overflow-hidden",
                                    isOpen
                                        ? "bg-gray-50 border-primary/20 shadow-sm"
                                        : "bg-white border-gray-100 hover:border-gray-200"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                                >
                                    <span className={cn(
                                        "text-sm font-bold transition-colors uppercase tracking-tight font-heading",
                                        isOpen ? "text-primary" : "text-gray-900"
                                    )}>
                                        {faq.question}
                                    </span>
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                                        isOpen ? "bg-primary text-white rotate-180" : "bg-gray-50 text-gray-400 group-hover:bg-gray-100"
                                    )}>
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>

                                <div
                                    className={cn(
                                        "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                                        isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <p className="text-gray-600 text-[13px] leading-relaxed font-medium border-t border-gray-100 pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center reveal">
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">Still have questions?</p>
                    <a
                        href="https://wa.me/971565429198"
                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-primary transition-all shadow-md group"
                    >
                        <span>Contact Support</span>
                        <Waves className="w-3.5 h-3.5 group-hover:animate-bounce" />
                    </a>
                </div>
            </div>
        </section>
    );
}
