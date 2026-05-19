"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TerminalHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function TerminalHeading({ title, subtitle, className = "" }: TerminalHeadingProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [cursorBlinks, setCursorBlinks] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    
    setIsTyping(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= title.length) {
        setDisplayedText(title.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [title, hasStarted]);

  useEffect(() => {
    if (hasStarted && !isTyping) {
      const interval = setInterval(() => {
        setCursorBlinks((prev) => prev + 1);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [hasStarted, isTyping]);

  const showCursor = isTyping || (cursorBlinks < 6 && cursorBlinks % 2 === 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      onViewportEnter={() => setHasStarted(true)}
      className={`mb-12 ${className}`}
    >
      <div className="relative inline-block">
        {/* Scanline effect */}
        <motion.div 
          className="absolute left-0 right-0 h-[2px] bg-[#00FFC2]/80 shadow-[0_0_10px_#00FFC2] z-10 pointer-events-none"
          initial={{ top: "-10px", opacity: 0 }}
          animate={hasStarted ? { top: "110%", opacity: [0, 1, 1, 0] } : {}}
          transition={{ duration: 1.2, ease: "linear" }}
        />
        
        <h2 
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground pr-4"
          style={isTyping ? { textShadow: "0 0 20px rgba(0, 255, 194, 0.4)" } : {}}
        >
          {displayedText}
          <span 
            className="absolute bottom-[0.1em] right-0 w-[0.4em] h-[0.9em] bg-[#00FFC2]"
            style={{ opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }}
          />
        </h2>
      </div>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={!isTyping && cursorBlinks > 0 ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground mt-3 font-mono text-sm max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
