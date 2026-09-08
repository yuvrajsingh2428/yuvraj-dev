"use client";

import Link from "next/link";
import { CONTACT_INFO } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black mt-14 py-8 px-4 sm:px-6 font-mono text-xs text-neutral-400">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Top Row: Info & Social Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          {/* Identity & Status */}
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2 text-white">
              <span className="text-neutral-500">yuvraj@dev:~$</span>
              <span className="font-bold text-sm">Yuvraj Singh</span>
              <span className="text-neutral-700">|</span>
              <span className="text-neutral-400 text-xs">Software Engineer @ Revolt Motors</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                <span>STATUS: READY</span>
              </span>
              <span>•</span>
              <span>LOC: IST (UTC+5:30)</span>
              <span>•</span>
              <span>REMOTE / HYBRID</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-800 bg-[#0a0a0a] px-2.5 py-1 text-neutral-300 hover:bg-white hover:text-black hover:border-white transition-all text-xs"
            >
              [github]
            </a>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-800 bg-[#0a0a0a] px-2.5 py-1 text-neutral-300 hover:bg-white hover:text-black hover:border-white transition-all text-xs"
            >
              [linkedin]
            </a>
            <a
              href={CONTACT_INFO.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-800 bg-[#0a0a0a] px-2.5 py-1 text-neutral-300 hover:bg-white hover:text-black hover:border-white transition-all text-xs"
            >
              [x.com]
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="border border-neutral-800 bg-[#0a0a0a] px-2.5 py-1 text-neutral-300 hover:bg-white hover:text-black hover:border-white transition-all text-xs"
            >
              [email]
            </a>
          </div>
        </div>

        {/* Bottom Row: Metadata & Copyright */}
        <div className="pt-4 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] text-neutral-600 gap-2">
          <span>© {new Date().getFullYear()} Yuvraj Singh. All systems operational.</span>
          <div className="flex items-center gap-3">
            <span>Next.js 16 • Monochrome CLI Shell</span>
            <span>git:(main)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
