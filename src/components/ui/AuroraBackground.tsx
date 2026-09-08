"use client";

import React from "react";
import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] select-none">
      {/* Deep Obsidian Navy Base */}
      <div className="absolute inset-0 bg-[#070913]" />

      {/* Dynamic Luminous Cyber Aurora Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.45, 0.7, 0.45],
          x: ["-5%", "10%", "-5%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-5%] left-[20%] w-[750px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/25 via-blue-600/20 to-violet-600/25 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.4, 0.65, 0.4],
          x: ["5%", "-8%", "5%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] right-[10%] w-[650px] h-[550px] rounded-full bg-gradient-to-tr from-violet-600/25 via-purple-700/20 to-cyan-400/20 blur-[130px]"
      />

      {/* Cyber Grid with Radial Spotlight Mask */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 242, 254, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 85%)",
        }}
      />
    </div>
  );
}
