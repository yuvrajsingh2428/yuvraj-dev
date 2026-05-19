import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

import { PageLoader } from "@/components/PageLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-background text-foreground font-sans flex flex-col selection:bg-primary/30">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
