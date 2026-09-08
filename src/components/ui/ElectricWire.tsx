"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ElectricWire() {
  const { scrollYProgress } = useScroll();
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Map the spring progress to a height percentage string
  const height = useTransform(springProgress, [0, 1], ["0%", "100%"]);

  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    // Emit a new particle every 2 seconds
    const interval = setInterval(() => {
      setParticles((prev) => [...prev, Date.now()]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Cleanup particles to prevent DOM bloat
  useEffect(() => {
    if (particles.length > 0) {
      const timeout = setTimeout(() => {
        setParticles((prev) => prev.slice(1));
      }, 2500); // 2s travel + 0.5s buffer
      return () => clearTimeout(timeout);
    }
  }, [particles]);

  return (
    <div className="fixed left-[40px] top-0 bottom-0 w-[2px] z-50 hidden md:block bg-border/20">
      {/* Reveal Container linked to Scroll */}
      <motion.div
        className="absolute top-0 left-0 w-full overflow-hidden"
        style={{ height }}
      >
        {/* Full Height Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#00f2fe] via-[#8b5cf6] to-[#00f2fe] shadow-[0_0_12px_rgba(0,242,254,0.4)]">
          
          {/* Traveling Particles */}
          {particles.map((id) => (
            <motion.div
              key={id}
              initial={{ top: "-60px" }}
              animate={{ top: "100vh" }}
              transition={{ duration: 2, ease: "linear" }}
              className="absolute left-1/2 -translate-x-1/2 w-[6px] h-[60px] flex flex-col items-center justify-end"
            >
              {/* Blur Trail */}
              <div className="w-[2px] h-[54px] bg-gradient-to-b from-transparent via-[#8b5cf6] to-[#00f2fe] opacity-90 blur-[1px]" />
              {/* Glowing Particle Dot */}
              <div className="w-[6px] h-[6px] rounded-full bg-[#00f2fe] shadow-[0_0_12px_#00f2fe] shrink-0" />
            </motion.div>
          ))}

        </div>
      </motion.div>
    </div>
  );
}
