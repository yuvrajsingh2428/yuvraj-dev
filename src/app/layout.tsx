import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "yuvraj@systems:~ $ Yuvraj Singh — Backend Systems & AI Platforms Engineer",
  description: "Minimalist Terminal Portfolio: Backend systems, distributed architecture, AI RAG pipelines, and test automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistMono.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-black text-[#f5f5f5] font-mono flex flex-col selection:bg-white selection:text-black">
        <Navigation />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 w-full flex-1 pt-14 md:pt-16 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
