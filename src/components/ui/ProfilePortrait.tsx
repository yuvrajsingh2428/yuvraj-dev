"use client";

import React from "react";
import Image from "next/image";

export function ProfilePortrait() {
  return (
    <div className="border border-neutral-800 bg-[#050505] p-2 select-none group relative max-w-[200px] sm:max-w-[220px] mx-auto w-full">
      {/* Top terminal frame bar */}
      <div className="flex items-center justify-between text-[10px] text-neutral-500 border-b border-neutral-900 pb-1 mb-1.5 font-mono">
        <span className="text-neutral-400 font-bold">$ view profile.png</span>
        <span className="text-neutral-600 text-[9px]">img/24-bit</span>
      </div>

      {/* Portrait Image Frame */}
      <div className="relative w-full aspect-[4/5] max-h-[200px] sm:max-h-[220px] overflow-hidden bg-black flex items-center justify-center border border-neutral-900">
        <Image
          src="/yuvraj_nobg.jpg"
          alt="Yuvraj Singh - Backend Systems Engineer"
          fill
          priority
          sizes="(max-width: 768px) 200px, 220px"
          className="object-cover object-top transition-all duration-300 grayscale contrast-115 brightness-95 group-hover:contrast-120"
        />
        
        {/* Subtle monochrome scanlines overlay on hover */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.8)_50%)] bg-[length:100%_4px]" />
      </div>

      {/* Bottom meta tag */}
      <div className="flex items-center justify-between text-[9px] text-neutral-600 border-t border-neutral-900 pt-1 mt-1.5 font-mono">
        <span>PROFILE :: DEV</span>
        <span className="text-neutral-400 font-medium">YUVRAJ SINGH</span>
      </div>
    </div>
  );
}
