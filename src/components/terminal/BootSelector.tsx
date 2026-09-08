"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BootSelectorProps {
  isOpen: boolean;
  onSelectMode: (mode: "gui" | "cli") => void;
  onClose: () => void;
}

export function BootSelector({ isOpen, onSelectMode, onClose }: BootSelectorProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "1") {
        onSelectMode("gui");
      } else if (e.key === "2") {
        onSelectMode("cli");
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onSelectMode, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-mono select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-full max-w-lg border border-neutral-700 bg-[#080808] p-6 sm:p-8 space-y-6 shadow-2xl relative"
        >
          {/* Top header bar */}
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-800"></span>
              <span className="ml-2 text-white font-bold">SYSTEM BOOT MANAGER</span>
            </div>
            <span className="text-[10px] text-neutral-500">v2.4.0</span>
          </div>

          {/* Welcome Message */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Welcome to Yuvraj Singh's Workspace
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              How would you like to explore the portfolio today?
            </p>
          </div>

          {/* 2 Big Action Choices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {/* Option 1: Direct Portfolio */}
            <button
              onClick={() => onSelectMode("gui")}
              className="p-4 border border-neutral-800 bg-neutral-950 hover:border-white hover:bg-neutral-900 transition-all text-left space-y-2 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-bold group-hover:text-white">[KEY: 1]</span>
                <span className="text-[10px] text-neutral-400">STANDARD</span>
              </div>
              <div className="text-sm font-bold text-white group-hover:underline">
                Enter Portfolio
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Direct access to visual projects, metrics, and architecture.
              </p>
            </button>

            {/* Option 2: Wanna Play / CLI Game */}
            <button
              onClick={() => onSelectMode("cli")}
              className="p-4 border border-white bg-neutral-950 hover:bg-white hover:text-black transition-all text-left space-y-2 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-400 group-hover:text-black">[KEY: 2]</span>
                <span className="text-[10px] text-neutral-400 group-hover:text-black">GAMIFIED</span>
              </div>
              <div className="text-sm font-bold text-white group-hover:text-black group-hover:underline">
                [CLI] Wanna Play?
              </div>
              <p className="text-xs text-neutral-400 group-hover:text-neutral-800 leading-relaxed">
                Launch interactive CLI shell with commands, quests &amp; live REPL.
              </p>
            </button>
          </div>

          {/* Footer note */}
          <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-3 border-t border-neutral-900">
            <span>Press <kbd className="px-1.5 py-0.5 border border-neutral-800 bg-neutral-900 text-neutral-300">1</kbd> or <kbd className="px-1.5 py-0.5 border border-neutral-800 bg-neutral-900 text-neutral-300">2</kbd> on your keyboard</span>
            <button
              onClick={() => onSelectMode("gui")}
              className="text-neutral-400 hover:text-white underline cursor-pointer"
            >
              Skip
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
