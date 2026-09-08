"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface PipelineConnectorProps {
  active: boolean;
  isVertical?: boolean;
  delay?: number;
}

export function PipelineConnector({
  active,
  isVertical = false,
  delay = 0,
}: PipelineConnectorProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={`relative flex items-center justify-center ${
        isVertical
          ? "w-0.5 h-10 md:h-14 my-1 mx-5 md:mx-6 bg-slate-800/60"
          : "h-0.5 flex-1 min-w-[28px] max-w-[80px] my-auto bg-slate-800/60"
      }`}
    >
      <motion.div
        initial={false}
        animate={
          shouldReduceMotion
            ? { opacity: active ? 1 : 0.2 }
            : isVertical
            ? { scaleY: active ? 1 : 0, opacity: active ? 1 : 0 }
            : { scaleX: active ? 1 : 0, opacity: active ? 1 : 0 }
        }
        transition={{
          duration: 0.35,
          delay: delay,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#8b5cf6] shadow-[0_0_12px_rgba(0,242,254,0.6)]"
        style={{
          transformOrigin: isVertical ? "top center" : "left center",
          willChange: "transform, opacity",
        }}
      />
    </div>
  );
}
