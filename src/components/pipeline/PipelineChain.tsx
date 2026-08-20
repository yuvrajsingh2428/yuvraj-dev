"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Palette, Code2, Bot, ShieldCheck, Rocket, Layers } from "lucide-react";
import { PipelineNode, PipelineNodeData, NodeStatus } from "./PipelineNode";
import { PipelineConnector } from "./PipelineConnector";

export const LIFECYCLE_NODES: PipelineNodeData[] = [
  { id: "design", label: "Design", sublabel: "Architecture", specNote: "API contracts, REST endpoints & schema definitions", icon: Palette },
  { id: "build", label: "Build", sublabel: "Systems", specNote: "9-package Turborepo monorepo & Node.js services", icon: Code2 },
  { id: "ai", label: "AI", sublabel: "Agents & RAG", specNote: "Ollama local LLM + OpenRouter DeepSeek cloud engine", icon: Bot },
  { id: "test", label: "Test", sublabel: "SDET / Infra", specNote: "Playwright E2E suite, AJV schema contract testing", icon: ShieldCheck },
  { id: "ship", label: "Ship", sublabel: "Deployment", specNote: "GitHub Actions CI/CD & Vercel deployment", icon: Rocket },
  { id: "scale", label: "Scale", sublabel: "Observability", specNote: "Redis caching, SQLite WAL-mode & Allure reports", icon: Layers },
];

interface PipelineChainProps {
  nodes?: PipelineNodeData[];
  isVertical?: boolean;
  autoPlay?: boolean;
  className?: string;
  startDelayMs?: number;
}

export function PipelineChain({
  nodes = LIFECYCLE_NODES,
  isVertical = false,
  autoPlay = true,
  className = "",
  startDelayMs = 350,
}: PipelineChainProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodeStatuses, setNodeStatuses] = useState<NodeStatus[]>(
    nodes.map(() => "idle")
  );
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse Parallax Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 140, damping: 22 };
  const rotateX = useSpring(mouseY, springConfig);
  const rotateY = useSpring(mouseX, springConfig);

  useEffect(() => {
    if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
      setIsTouchDevice(true);
    }
  }, []);

  const triggerSequenceFrom = (startIndex: number) => {
    const pulseDuration = 400;
    nodes.forEach((_, idx) => {
      if (idx < startIndex) return;
      const delay = (idx - startIndex) * 220;

      setTimeout(() => {
        setNodeStatuses((prev) => {
          const next = [...prev];
          next[idx] = "pulsing";
          return next;
        });
      }, delay);

      setTimeout(() => {
        setNodeStatuses((prev) => {
          const next = [...prev];
          next[idx] = "active";
          return next;
        });
      }, delay + pulseDuration);
    });
  };

  useEffect(() => {
    if (!autoPlay) return;
    triggerSequenceFrom(0);
  }, [autoPlay, nodes]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || shouldReduceMotion || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(offsetX * 8);
    mouseY.set(-offsetY * 8);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const enable3D = !isTouchDevice && !shouldReduceMotion && !isVertical;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full flex justify-center items-center py-4 ${className}`}
      style={{
        perspective: enable3D ? "1000px" : "none",
      }}
    >
      <motion.div
        style={{
          rotateX: enable3D ? rotateX : 0,
          rotateY: enable3D ? rotateY : 0,
          transformStyle: enable3D ? "preserve-3d" : "flat",
        }}
        className={`relative w-full max-w-5xl flex ${
          isVertical ? "flex-col items-start gap-1" : "flex-row items-center justify-between gap-1 overflow-x-auto no-scrollbar py-6 px-2"
        }`}
      >
        {nodes.map((node, idx) => {
          const isLast = idx === nodes.length - 1;
          const status = nodeStatuses[idx] || "idle";
          const isNextActive = nodeStatuses[idx + 1] === "pulsing" || nodeStatuses[idx + 1] === "active";

          return (
            <React.Fragment key={node.id}>
              {/* Node Layer */}
              <div
                style={{
                  transform: enable3D ? "translateZ(0px)" : "none",
                  transformStyle: enable3D ? "preserve-3d" : "flat",
                }}
                className="shrink-0"
              >
                <PipelineNode
                  node={node}
                  index={idx}
                  status={status}
                  isVertical={isVertical}
                  onNodeClick={(i) => triggerSequenceFrom(i)}
                />
              </div>

              {/* Connecting Line Layer */}
              {!isLast && (
                <div
                  style={{
                    transform: enable3D ? "translateZ(-100px)" : "none",
                  }}
                  className={isVertical ? "w-full" : "flex-1 flex justify-center"}
                >
                  <PipelineConnector
                    active={isNextActive}
                    isVertical={isVertical}
                    delay={0}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </motion.div>
    </div>
  );
}
