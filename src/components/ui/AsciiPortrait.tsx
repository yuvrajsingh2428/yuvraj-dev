"use client";

import React, { useState } from "react";

const ASCII_ART = `           ,##,,eew,
         ,############C
       a##############@##
     7####^\`^"7W7"^@####
     @#@b\`         ^@#@^
      ##^,,,,   ,,,,^#^
    ,,@######"######=
      .' '555"\` '5555b|
      T"@  ,,," ,mg,@,*
         %p||\`~~'.#\`
          ^Wp   ,#T
          :b''@@b^}
        ,^      \`b 3-
  .<\`   'p   ^v   #   b   *,
 {       }   #"GpGb   [
 C       3 * @######Nl         \`
            ^@##b     ($      !`;

export function AsciiPortrait() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ASCII_ART);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-neutral-800 bg-[#050505] p-3 sm:p-4 select-none group relative">
      {/* Top terminal label */}
      <div className="flex items-center justify-between text-[10px] text-neutral-500 border-b border-neutral-900 pb-1.5 mb-2 font-mono">
        <span className="text-neutral-400 font-bold">$ cat yuvraj.ascii</span>
        <button
          onClick={handleCopy}
          className="text-neutral-600 hover:text-white transition-colors"
          title="Copy ASCII Art"
        >
          {copied ? "[COPIED]" : "[COPY]"}
        </button>
      </div>

      {/* ASCII Output Frame */}
      <pre className="font-mono text-[10px] sm:text-[11px] md:text-[12px] leading-[1.12] text-neutral-200 group-hover:text-white transition-colors overflow-x-auto whitespace-pre tracking-normal text-center py-1">
        {ASCII_ART}
      </pre>

      {/* Bottom meta tag */}
      <div className="flex items-center justify-between text-[9px] text-neutral-600 border-t border-neutral-900 pt-1.5 mt-2 font-mono">
        <span>RAW_ASCII :: 17x32</span>
        <span className="text-neutral-500">RENDER: MONO</span>
      </div>
    </div>
  );
}
