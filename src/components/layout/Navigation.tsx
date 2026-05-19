"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react";

// ─── Custom Active Section Hook ───────────────────────────────────────────────

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -45% 0px", // Trigger when section occupies the sweet spot of viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return activeSection;
}

// ─── Main Navigation Redesign ──────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", id: "hero" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export function Navigation() {
  const [scrollY, setScrollY] = useState(0);
  const [showPill, setShowPill] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const activeSection = useActiveSection(["hero", "experience", "projects", "contact"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Delay animation only on first page load
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    const delay = hasLoaded ? 0 : 2200;
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  const isAtTop = scrollY < 20;
  const isScrolledFar = scrollY > 80;

  // Layout states mapped to dynamic CSS classes
  const headerHeightClass = isScrolledFar ? "h-[52px]" : "h-[64px]";
  const headerBgClass = isAtTop
    ? "bg-transparent border-transparent"
    : "bg-[#050505]/70 border-white/[0.06] backdrop-blur-[20px] backdrop-saturate-[180%]";
  const monogramScaleClass = isScrolledFar ? "scale-[0.9]" : "scale-100";
  const linkFontSizeClass = isScrolledFar ? "text-[12px]" : "text-[13px]";
  const linkOpacityClass = isAtTop ? "opacity-50 hover:opacity-100" : "opacity-100";

  const navContainerVariants: Variants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    }
  };

  const navItemVariants: Variants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <>
      <AnimatePresence>
        {shouldAnimate && (
          <motion.header
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
            className={`fixed top-0 left-0 right-0 z-50 flex items-center border-b transition-all duration-300 ease-in-out ${headerHeightClass} ${headerBgClass}`}
          >
            <div className="max-w-5xl mx-auto px-6 w-full flex items-center justify-between">
              
              {/* LEFT: YS Monogram Logo */}
              <motion.div variants={navItemVariants}>
                <a
                  href="#hero"
                  className={`flex items-center justify-center w-8 h-8 rounded-sm border border-white/15 bg-transparent text-white font-mono font-medium text-[13px] tracking-wider transition-all duration-300 hover:border-[#00FFC2] hover:text-[#00FFC2] ${monogramScaleClass}`}
                >
                  YS
                </a>
              </motion.div>

              {/* CENTER: Nav links (staggered & active scroll matched) */}
              <nav className="hidden md:flex items-center gap-8 font-medium font-mono">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.div key={link.id} variants={navItemVariants} className="relative py-1">
                      <a
                        href={`#${link.id}`}
                        className={`transition-all duration-300 tracking-wide hover:text-white/95 relative block ${linkFontSizeClass} ${linkOpacityClass} ${
                          isActive ? "text-white font-semibold" : "text-white/50"
                        }`}
                      >
                        {link.label}
                        
                        {/* Underline LayoutId Animation */}
                        {isActive && (
                          <motion.div
                            layoutId="activeUnderline"
                            className="absolute left-0 right-0 bottom-[-4px] h-[1px] bg-white"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </a>
                    </motion.div>
                  );
                })}
              </nav>

              {/* RIGHT: Actions */}
              <motion.div variants={navItemVariants} className="flex items-center gap-4">
                <AvailabilityPill show={showPill} onClose={() => setShowPill(false)} />

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] font-mono font-medium px-3.5 py-1.5 rounded-[6px] border border-white/20 bg-transparent text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-black hover:border-white shrink-0"
                >
                  Resume
                </a>
              </motion.div>

            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Upgraded Availability Pill Component ─────────────────────────────────────

function AvailabilityPill({ show, onClose }: { show: boolean; onClose: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);

  useEffect(() => {
    // Only animate attention shake on first visit session-wide
    if (typeof window !== "undefined" && !sessionStorage.getItem("pill_animated")) {
      const timer = setTimeout(() => {
        setShouldShake(true);
        sessionStorage.setItem("pill_animated", "true");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          50% { box-shadow: 0 0 0 5px rgba(34, 197, 94, 0); }
        }
        @keyframes attention-shake {
          0%, 100% { transform: scale(1) translateX(0); }
          25% { transform: scale(1) translateX(3px); }
          75% { transform: scale(1) translateX(-3px); }
        }
        .pulse-dot {
          animation: pulse-green 2s ease infinite;
        }
        .attention-shake {
          animation: attention-shake 0.4s ease-in-out;
        }
      `}} />

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onAnimationEnd={() => setShouldShake(false)}
            className={`group relative flex items-center gap-2 pl-3 pr-3 py-1.5 rounded-full border text-[11px] font-mono cursor-default overflow-visible shrink-0
                       border-green-500/20 bg-green-500/[0.06] transition-all duration-150 ease-out hover:border-green-500/50 hover:bg-green-500/10 hover:scale-[1.02]
                       ${shouldShake ? "attention-shake" : ""}`}
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500/60 pulse-dot"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            
            <span className="text-foreground flex items-center gap-1.5 whitespace-nowrap">
              Open to remote
              {/* Chevron Down SVG rotating 180deg when hovered/open */}
              <svg
                width="8"
                height="8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-muted-foreground/60 transition-transform duration-200 shrink-0 ${isHovered ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </span>

            <button
              onClick={onClose}
              className="inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-colors shrink-0 ml-1"
            >
              <X className="w-3 h-3" />
            </button>

            {/* Absolute Tooltip Container positioned below the pill */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-[calc(100%+10px)] right-0 sm:right-0 sm:left-auto left-0 z-[9999] bg-[#1a1a1a] border border-border/40 rounded-lg p-3 shadow-xl whitespace-nowrap min-w-max text-left pointer-events-none
                             before:content-[''] before:absolute before:top-[-6px] before:w-0 before:h-0 before:border-l-[6px] before:border-l-transparent before:border-r-[6px] before:border-r-transparent before:border-b-[6px] before:border-b-[#1a1a1a] sm:before:right-[16px] sm:before:left-auto before:left-[16px]"
                >
                  <span className="text-foreground font-medium text-[11.5px] block leading-tight">
                    Available for full-time · contract remote
                  </span>
                  <span className="text-muted-foreground/75 text-[10.5px] mt-1.5 block leading-none">
                    Timezone: IST (UTC+5:30)
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
