"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
}

export function Card3D({
  children,
  className = "",
  maxTilt = 8,
  glowColor = "rgba(16, 185, 129, 0.15)",
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Mouse position inside card for spotlight glow (% 0-100)
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });

  // Motion values for 3D tilt
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(rotateXRaw, springConfig);
  const rotateY = useSpring(rotateYRaw, springConfig);

  useEffect(() => {
    if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
      setIsTouch(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || shouldReduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-maxTilt to +maxTilt)
    const rY = ((mouseX - width / 2) / (width / 2)) * maxTilt;
    const rX = -((mouseY - height / 2) / (height / 2)) * maxTilt;

    rotateXRaw.set(rX);
    rotateYRaw.set(rY);

    // Spotlight cursor position %
    setSpotlightPos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    if (isTouch || shouldReduceMotion) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isTouch || shouldReduceMotion) return;
    setIsHovered(false);
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  };

  const enable3D = !isTouch && !shouldReduceMotion;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group transition-all duration-300"
      style={{
        perspective: enable3D ? "1000px" : "none",
      }}
    >
      <motion.div
        style={{
          rotateX: enable3D ? rotateX : 0,
          rotateY: enable3D ? rotateY : 0,
          transformStyle: enable3D ? "preserve-3d" : "flat",
          willChange: "transform",
        }}
        animate={enable3D && isHovered ? { scale: 1.02 } : { scale: 1 }}
        transition={{ duration: 0.25 }}
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 md:p-8 backdrop-blur-md shadow-xl transition-colors duration-300 ${
          isHovered ? "border-emerald-500/40 shadow-2xl shadow-emerald-500/10" : ""
        } ${className}`}
      >
        {/* Dynamic Cursor Spotlight Radial Glow */}
        {enable3D && (
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(400px circle at ${spotlightPos.x}% ${spotlightPos.y}%, ${glowColor}, transparent 80%)`,
            }}
          />
        )}

        {/* Content with 3D Depth Layer */}
        <div
          style={{
            transform: enable3D && isHovered ? "translateZ(20px)" : "translateZ(0px)",
            transition: "transform 0.25s ease-out",
          }}
          className="relative z-10"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
