"use client";

import React, { useState } from "react";
import Image from "next/image";

export function ProfilePortrait() {
  const [isColor, setIsColor] = useState(false);

  return (
    <div className="border border-neutral-800 bg-[#050505] p-2.5 sm:p-3 select-none group relative max-w-[240px] sm:max-w-[260px] mx-auto w-full">
      {/* Top terminal frame bar */}
      <div className="flex items-center justify-between text-[10px] text-neutral-500 border-b border-neutral-900 pb-1.5 mb-2 font-mono">
        <span className="text-neutral-400 font-bold">$ view yuvraj.png</span>
        <button
          onClick={() => setIsColor(!isColor)}
          className="text-neutral-500 hover:text-white transition-colors border border-neutral-800 px-1.5 py-0.2 bg-neutral-950 text-[9px]"
        >
          {isColor ? "[MONO]" : "[COLOR]"}
        </button>
      </div>

      {/* Portrait Image Frame */}
      <div className="relative w-full aspect-[3/4] max-h-[260px] sm:max-h-[290px] overflow-hidden bg-black flex items-center justify-center border border-neutral-900">
        <Image
          src="/yuvraj_nobg.jpg"
          alt="Yuvraj Singh - Backend Systems Engineer"
          fill
          priority
          sizes="(max-width: 768px) 240px, 260px"
          className={`object-cover object-top transition-all duration-300 ${
            isColor ? "grayscale-0 contrast-100" : "grayscale contrast-115 brightness-95"
          } group-hover:contrast-120`}
        />
        
        {/* Subtle monochrome scanlines overlay on hover */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.8)_50%)] bg-[length:100%_4px]" />
      </div>

      {/* Bottom meta tag */}
      <div className="flex items-center justify-between text-[9px] text-neutral-600 border-t border-neutral-900 pt-1.5 mt-2 font-mono">
        <span>PORTRAIT :: 24-BIT</span>
        <span className="text-neutral-500">ISOLATED</span>
      </div>
    </div>
  );
}
