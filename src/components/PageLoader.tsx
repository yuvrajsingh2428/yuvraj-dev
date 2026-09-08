"use client";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Skip if already loaded in this session
    if (sessionStorage.getItem("hasLoaded")) {
      setShow(false);
      document.documentElement.setAttribute("data-loader", "done");
      return;
    }
    
    document.documentElement.setAttribute("data-loader", "loading");

    // Unmount at 2.2s when all animations are finished
    const hideTimer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("hasLoaded", "true");
      document.documentElement.setAttribute("data-loader", "done");
    }, 2200);

    return () => clearTimeout(hideTimer);
  }, []);

  if (!show) return null;

  const name = "YUVRAJ SINGH".split("");

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-none"
      style={{
        backgroundColor: "#070913",
        animation: "fadeOutOverlay 0.4s ease-out 1.8s forwards",
      }}
    >
      <div 
        className="flex text-white font-mono font-bold uppercase" 
        style={{ fontSize: "clamp(24px, 6vw, 72px)", letterSpacing: "0.3em" }}
      >
        {name.map((char, i) => (
          <span
            key={i}
            className="opacity-0"
            style={{
              animation: `fadeInChar 0.1s ease-out ${0.2 + (i * 0.03)}s forwards`,
              whiteSpace: char === " " ? "pre" : "normal"
            }}
          >
            {char}
          </span>
        ))}
      </div>

      <div
        className="mt-6 bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#8b5cf6] shadow-[0_0_12px_#00f2fe]"
        style={{ height: "2px", width: 0, animation: "expandLine 0.4s ease-out 0.6s forwards" }}
      />

      <div
        className="mt-6 text-cyan-300/80 font-mono uppercase opacity-0 tracking-widest text-[11px]"
        style={{ letterSpacing: "0.25em", animation: "fadeInText 0.4s ease-out 1.2s forwards" }}
      >
        BACKEND ENGINEER · AI SYSTEMS
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInChar { to { opacity: 1; } }
        @keyframes expandLine { to { width: 180px; } }
        @keyframes fadeInText { to { opacity: 1; } }
        @keyframes fadeOutOverlay { to { opacity: 0; visibility: hidden; } }
        
        html[data-loader="loading"] body > main > section { opacity: 0 !important; }
        html[data-loader="done"] body > main > section { opacity: 1 !important; transition: opacity 0.8s ease-out; }
      `}} />
    </div>
  );
}
