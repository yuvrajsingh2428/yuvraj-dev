import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ElectricWire } from "@/components/ui/ElectricWire";
import { PageLoader } from "@/components/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuvraj Singh | Backend Systems & AI Platforms Engineer",
  description: "Building scalable backend systems, AI-powered applications, and automation-driven infrastructure.",
};

import { SmoothScrollProvider } from "@/components/ui/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-background text-foreground font-sans flex flex-col selection:bg-primary/30">
        <PageLoader />
        <ElectricWire />
        <Navigation />
        <SmoothScrollProvider>
          <main className="max-w-5xl mx-auto px-6 w-full flex-1 pt-16 md:pt-20">
            {children}
          </main>
        </SmoothScrollProvider>
        <Footer />
      </body>
    </html>
  );
}
