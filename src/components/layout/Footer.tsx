"use client";

import Link from "next/link";
import { CONTACT_INFO } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black mt-16 py-8 px-4 sm:px-6 font-mono text-xs text-neutral-400">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left: Terminal status & identity */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-white">
            <span className="text-neutral-500">dev:</span>
            <span className="font-bold">yuvraj-singh</span>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400">Software Engineer</span>
          </div>
          <p className="text-[11px] text-neutral-500">
            Backend Systems • Legal RAG Platforms • Distributed Infra • Automation
          </p>
        </div>

        {/* Center: System Status */}
        <div className="flex flex-wrap items-center gap-4 text-[11px]">
          <span className="text-neutral-500">[STATUS: READY]</span>
          <span className="text-neutral-500">[LOC: IST (UTC+5:30)]</span>
          <span className="text-neutral-500">[OPEN TO REMOTE]</span>
        </div>

        {/* Right: Quick CLI Links */}
        <div className="flex items-center gap-2.5 text-xs">
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white border border-neutral-800 px-2 py-0.5 hover:border-neutral-500 transition-colors"
          >
            [github]
          </a>
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white border border-neutral-800 px-2 py-0.5 hover:border-neutral-500 transition-colors"
          >
            [linkedin]
          </a>
          <a
            href={CONTACT_INFO.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white border border-neutral-800 px-2 py-0.5 hover:border-neutral-500 transition-colors"
          >
            [x / twitter]
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-neutral-400 hover:text-white border border-neutral-800 px-2 py-0.5 hover:border-neutral-500 transition-colors"
          >
            [email]
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-6 pt-4 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center text-[10px] text-neutral-600 gap-2">
        <span>© {new Date().getFullYear()} Yuvraj Singh. All systems operational.</span>
        <span>Built with Next.js • Pure Monochrome Terminal Interface</span>
      </div>
    </footer>
  );
}
