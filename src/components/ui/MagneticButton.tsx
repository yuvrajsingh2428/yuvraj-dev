"use client";
import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href: string;
  className?: string;
  icon: React.ReactNode;
  label: string;
  target?: string;
  rel?: string;
}

export function MagneticButton({ href, className, icon, label, target, rel }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  
  // Magnetic effect state
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });
  
  // Click portal effect state
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * 0.25);
    y.set((e.clientY - centerY) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsPressed(true);
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    const newRipple = {
      id: Date.now(),
      x: e.clientX - left,
      y: e.clientY - top
    };
    setRipples((prev) => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter(r => r.id !== newRipple.id));
    }, 500);
  };

  const handleMouseUp = () => setIsPressed(false);

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOut={handleMouseUp}
      style={{ x, y }}
      animate={{ scale: isPressed ? 1.08 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative overflow-hidden group flex items-center justify-center gap-2 rounded-md transition-colors",
        className
      )}
    >
      {/* Ripples */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 100,
            height: 100,
            x: "-50%",
            y: "-50%",
            background: "rgba(0,255,194,0.2)"
          }}
        />
      ))}
      
      {/* Icon & Label */}
      <span className="relative z-10 flex items-center gap-2">
        <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
          {icon}
        </span>
        <span className="transition-transform duration-300 delay-[40ms] ease-out group-hover:translate-x-1">
          {label}
        </span>
      </span>
    </motion.a>
  );
}
