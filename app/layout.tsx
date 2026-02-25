import React from "react";
import type { Metadata } from "next";
import { Parkinsans, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import LeftContact from "@/components/LeftContact";

const parkinsans = Parkinsans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Dubai Home Cleaning Services | Professional Deep Cleaning",
  description:
    "Professional deep cleaning services in Dubai. Villa, apartment & office cleaning with 5-star ratings. Eco-friendly solutions. Book your free consultation today!",
  keywords:
    "cleaning services Dubai, deep cleaning, villa cleaning, apartment cleaning, office cleaning, home cleaning Dubai",
  generator: "Dubai Home Cleaning Services",
  openGraph: {
    title: "Dubai Home Cleaning Services | Expert Deep Cleaning",
    description:
      "Transform your space with Dubai's most trusted cleaning experts. Professional, reliable, and affordable.",
    url: "https://dubaihomecleaningservices.com/",
    type: "website",
  },
  icons: {
    icon: [{ url: "/removed_bg_footer.png" }],
    apple: "/removed_bg_footer.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${parkinsans.variable} ${outfit.variable}`}>
      {/* ✅ FIX: Better overflow handling + proper mobile padding */}
      <body className="font-body antialiased pt-16 md:pt-20 lg:pt-24 overflow-x-hidden w-full">
        <div className="min-h-screen w-full">
          {children}
        </div>

        {/* Contact floating widget */}
        <LeftContact />

        <Analytics />
      </body>
    </html>
  );
}
