"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TextRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  staggerMs?: number;
}

export function TextReveal({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  staggerMs = 60,
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {lines.map((line, idx) => {
        const lineDelay = delay + (idx * staggerMs) / 1000;

        if (shouldReduceMotion) {
          return (
            <span key={idx} className={lineClassName}>
              {line}
            </span>
          );
        }

        return (
          <span key={idx} className="block overflow-hidden py-0.5">
            <motion.span
              initial={{
                clipPath: "inset(100% 0% 0% 0%)",
                y: "20%",
                opacity: 0,
              }}
              animate={{
                clipPath: "inset(0% 0% 0% 0%)",
                y: "0%",
                opacity: 1,
              }}
              transition={{
                duration: 0.55,
                delay: lineDelay,
                ease: [0.215, 0.61, 0.355, 1], // Smooth architectural wipe cubic-bezier
              }}
              className={`block ${lineClassName}`}
              style={{ willChange: "clip-path, transform, opacity" }}
            >
              {line}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}
