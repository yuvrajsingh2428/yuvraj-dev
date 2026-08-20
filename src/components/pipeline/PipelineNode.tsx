"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export type NodeStatus = "idle" | "pulsing" | "active";

export interface PipelineNodeData {
  id: string;
  label: string;
  sublabel?: string;
  specNote?: string;
  icon?: LucideIcon;
  status?: NodeStatus;
}

interface PipelineNodeProps {
  node: PipelineNodeData;
  index: number;
  status: NodeStatus;
  isVertical?: boolean;
  onNodeClick?: (index: number) => void;
}

export function PipelineNode({
  node,
  index,
  status,
  isVertical = false,
  onNodeClick,
}: PipelineNodeProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = node.icon;
  const [isHovered, setIsHovered] = useState(false);

  const isActive = status === "active" || status === "pulsing";
  const isPulsing = status === "pulsing";

  return (
    <div
      onClick={() => onNodeClick?.(index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex ${
        isVertical ? "flex-row items-center gap-4" : "flex-col items-center gap-3"
      } group select-none cursor-pointer`}
    >
      {/* Node Circle element */}
      <motion.div
        initial={false}
        animate={
          shouldReduceMotion
            ? { scale: 1 }
            : isPulsing
            ? { scale: [1, 1.25, 1] }
            : isHovered
            ? { scale: 1.12 }
            : { scale: 1 }
        }
        transition={
          isPulsing
            ? {
                duration: 0.4,
                ease: [0.34, 1.56, 0.64, 1], // Overshoot cubic-bezier
              }
            : { duration: 0.25, type: "spring", stiffness: 200 }
        }
        className={`relative z-10 flex items-center justify-center rounded-xl border transition-colors duration-300 ${
          isVertical ? "w-10 h-10 md:w-12 md:h-12" : "w-11 h-11 md:w-14 md:h-14"
        }`}
        style={{
          backgroundColor: isActive || isHovered ? "rgba(16, 185, 129, 0.15)" : "rgba(59, 130, 246, 0.08)",
          borderColor: isActive || isHovered ? "rgba(16, 185, 129, 0.7)" : "rgba(59, 130, 246, 0.3)",
          boxShadow: isActive || isHovered
            ? "0 0 20px rgba(16, 185, 129, 0.45), inset 0 0 10px rgba(16, 185, 129, 0.25)"
            : "0 0 8px rgba(59, 130, 246, 0.15)",
        }}
      >
        {/* Subtle Ambient Breathing Glow for Active Green Nodes */}
        {isActive && !shouldReduceMotion && (
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-xl bg-emerald-500/25 blur-md pointer-events-none"
          />
        )}

        {Icon && (
          <Icon
            className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${
              isActive || isHovered ? "text-emerald-400" : "text-blue-400"
            }`}
          />
        )}
      </motion.div>

      {/* Label layer */}
      <div className={`flex flex-col ${isVertical ? "text-left" : "text-center"}`}>
        <span
          className={`font-mono text-xs md:text-sm font-semibold tracking-wide transition-colors duration-300 ${
            isActive || isHovered ? "text-emerald-300 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "text-slate-400"
          }`}
        >
          {node.label}
        </span>
        {node.sublabel && (
          <span className="font-mono text-[10px] text-slate-500 mt-0.5">
            {node.sublabel}
          </span>
        )}
      </div>

      {/* Interactive Tooltip on Hover */}
      {isHovered && node.specNote && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4 }}
          className="absolute bottom-full mb-3 z-30 w-48 p-2.5 rounded-lg border border-emerald-500/40 bg-slate-950/90 backdrop-blur-md text-[11px] font-mono text-slate-200 text-center shadow-xl pointer-events-none"
        >
          <span className="text-emerald-400 font-bold block mb-0.5">[{node.label} Node Spec]</span>
          <span>{node.specNote}</span>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950" />
        </motion.div>
      )}
    </div>
  );
}
