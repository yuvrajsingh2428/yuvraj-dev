"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About & Contact", href: "/about" },
];

export function Navigation() {
  const [scrollY, setScrollY] = useState(0);
  const [showPill, setShowPill] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const isAtTop = scrollY < 20;
  const isScrolledFar = scrollY > 80;

  const headerHeightClass = isScrolledFar ? "h-[52px]" : "h-[64px]";
  const headerBgClass = isAtTop
    ? "bg-transparent border-transparent"
    : "bg-[#050505]/80 border-white/[0.08] backdrop-blur-[20px] backdrop-saturate-[180%]";
  const monogramScaleClass = isScrolledFar ? "scale-[0.9]" : "scale-100";
  const linkFontSizeClass = isScrolledFar ? "text-[12px]" : "text-[13px]";
  const linkOpacityClass = isAtTop ? "opacity-70 hover:opacity-100" : "opacity-100";

  const navContainerVariants: Variants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
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
              
              {/* LEFT: Monogram Logo */}
              <motion.div variants={navItemVariants}>
                <Link
                  href="/"
                  className={`flex items-center justify-center w-8 h-8 rounded-md border border-white/20 bg-background/50 text-white font-mono font-medium text-[13px] tracking-wider transition-all duration-300 hover:border-[#00FFC2] hover:text-[#00FFC2] hover:shadow-[0_0_12px_rgba(0,255,194,0.3)] ${monogramScaleClass}`}
                >
                  YS
                </Link>
              </motion.div>

              {/* CENTER: Multi-Page Route Links */}
              <nav className="flex items-center gap-6 sm:gap-8 font-medium font-mono">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                  return (
                    <motion.div key={link.href} variants={navItemVariants} className="relative py-1">
                      <Link
                        href={link.href}
                        className={`transition-all duration-300 tracking-wide relative block ${linkFontSizeClass} ${linkOpacityClass} ${
                          isActive ? "text-[#00FFC2] font-semibold" : "text-white/60 hover:text-white"
                        }`}
                      >
                        {link.label}
                        
                        {/* Active Underline */}
                        {isActive && (
                          <motion.div
                            layoutId="activeNavUnderline"
                            className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-[#00FFC2] shadow-[0_0_8px_#00FFC2]"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* RIGHT: Status & Resume */}
              <motion.div variants={navItemVariants} className="flex items-center gap-3 sm:gap-4">
                <AvailabilityPill show={showPill} onClose={() => setShowPill(false)} />

                <a
                  href="https://drive.google.com/uc?export=download&id=18ozkViRciZPbM-1pCSg03Kc7b2eVIoXO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex text-[12px] font-mono font-medium px-3.5 py-1.5 rounded-[6px] border border-white/20 bg-white/5 text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-black hover:border-white shrink-0"
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
