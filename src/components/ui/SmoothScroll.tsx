"use client";

import React, { createContext, useContext } from "react";
import { useScroll, useSpring, MotionValue } from "framer-motion";

interface SmoothScrollContextType {
  scrollYProgress: MotionValue<number>;
  smoothedScrollYProgress: MotionValue<number>;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const smoothedScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <SmoothScrollContext.Provider value={{ scrollYProgress, smoothedScrollYProgress }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothedScroll() {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    // Fallback if rendered outside provider
    const { scrollYProgress } = useScroll();
    const smoothedScrollYProgress = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });
    return { scrollYProgress, smoothedScrollYProgress };
  }
  return context;
}
