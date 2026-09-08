"use client";

import React from "react";
import Link from "next/link";
import { motion, useTransform } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { PipelineChain } from "@/components/pipeline/PipelineChain";
import { useSmoothedScroll } from "@/components/ui/SmoothScroll";
import { PROJECTS_DATA } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

import { SystemsCockpit } from "@/components/ui/SystemsCockpit";

export default function Home() {
  const { smoothedScrollYProgress } = useSmoothedScroll();

  // Smoothed scroll transitions for hero pipeline chain
  const heroScale = useTransform(smoothedScrollYProgress, [0, 0.25], [1, 0.94]);
  const heroOpacity = useTransform(smoothedScrollYProgress, [0, 0.25], [1, 0.2]);
  const heroY = useTransform(smoothedScrollYProgress, [0, 0.25], [0, -30]);

  return (
    <div className="flex flex-col gap-24 py-6 md:py-12">
      {/* ─── HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center gap-8 py-8 overflow-hidden">
        {/* Ambient background aurora glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-500/20 via-indigo-600/15 to-purple-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Live Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs shadow-[0_0_20px_rgba(0,242,254,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#00f2fe]" />
          </span>
          <span>Available for Systems Engineering & AI Consulting</span>
        </motion.div>

        {/* Hero Title & Subtitle */}
        <div className="space-y-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            <span className="text-white block">Backend Systems &</span>
            <span className="bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,242,254,0.35)]">
              AI Platforms Engineer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-normal"
          >
            High-performance backend systems, autonomous AI agents & scalable cloud infrastructure.
          </motion.p>

          {/* Quick Scannable Highlights (No long paragraphs) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-xs text-slate-400"
          >
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-cyan-300">
              ⚡ Sub-second Latency
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-violet-300">
              🧠 Dual-Engine AI Routing
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-emerald-300">
              🛡️ Schema-Validated APIs
            </span>
          </motion.div>
        </div>

        {/* 6-Node Lifecycle Chain */}
        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
            y: heroY,
            willChange: "transform, opacity",
          }}
          className="w-full mt-2"
        >
          <PipelineChain startDelayMs={350} />
        </motion.div>

        {/* Interactive Systems Cockpit HUD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-full mt-4"
        >
          <SystemsCockpit />
        </motion.div>
      </section>

      {/* ─── PRODUCTION WORK STREAM (SEAMLESS FLUID FLOW - NO BOXY CARDS) ─── */}
      <section className="space-y-10 border-t border-white/[0.08] pt-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f2fe] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#00f2fe]" />
              <span>Production Systems Stream</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Production Work & Automation
            </h2>
          </div>
          <Link
            href="/work"
            className={buttonVariants({
              variant: "outline",
              className:
                "gap-2 border-cyan-500/30 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 font-mono text-xs text-slate-200 transition-all shadow-[0_0_12px_rgba(0,242,254,0.1)]",
            })}
          >
            View All Work & Open Source <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Seamless Fluid Architecture Stream (No Clunky Cards) */}
        <div className="relative divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {PROJECTS_DATA.map((project, idx) => {
            const shortSummaries: Record<string, { desc: string; metric: string }> = {
              openforge: {
                desc: "GitHub issue scoring engine with deterministic 5-factor ranking and local/cloud dual AI routing.",
                metric: "9 Monorepo Packages",
              },
              poshible: {
                desc: "Legal RAG pipeline with OpenSearch vector search and runtime Zod contract validation.",
                metric: "95% Precision • 500+ Daily Queries",
              },
              "playwright-framework": {
                desc: "High-concurrency E2E test automation framework with AJV schema validation in CI/CD.",
                metric: "83 Automated Tests",
              },
              jobhermes: {
                desc: "Scheduled daemon agent with multi-dimensional candidate evaluation and SQLite WAL persistence.",
                metric: "Autonomous 9 AM IST Loop",
              },
            };

            const info = shortSummaries[project.id] || {
              desc: project.bullets[0] || "",
              metric: "Production System",
            };

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group relative py-6 px-4 -mx-4 rounded-2xl transition-all duration-300 hover:bg-white/[0.03] hover:backdrop-blur-sm"
              >
                {/* Subtle hover gradient indicator line */}
                <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b from-[#00f2fe] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#00f2fe]" />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                  {/* Left: Index + Meta + Title + Desc */}
                  <div className="space-y-2 max-w-2xl pl-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs text-cyan-400/80 font-semibold tracking-wider">
                        0{idx + 1} //
                      </span>
                      <span className="font-mono text-[11px] text-cyan-300 font-medium px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                        {info.metric}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">
                        · {project.categoryTag}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-[#00f2fe] transition-colors duration-200">
                      {project.title}
                    </h3>

                    {/* Single punchy line instead of long paragraph */}
                    <p className="text-xs md:text-sm text-slate-300 font-normal">
                      {info.desc}
                    </p>
                  </div>

                  {/* Right: Tech Stack Pills & Direct Seamless Link */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:shrink-0 pl-2 lg:pl-0">
                    <div className="flex flex-wrap gap-1.5 max-w-xs">
                      {project.tech.slice(0, 3).map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="bg-white/[0.04] text-slate-300 border-white/[0.08] text-[10px] font-mono group-hover:border-cyan-500/30 transition-colors"
                        >
                          {t}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-white/[0.02] text-slate-500 text-[10px] font-mono border-white/[0.04]"
                        >
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    <Link
                      href="/work"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-300 group-hover:text-cyan-200 group-hover:translate-x-1.5 transition-all duration-200 shrink-0"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 text-[#00f2fe]" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── FLUID AURORA CTA SECTION (SEAMLESS PORTAL) ─────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative py-10 px-8 md:px-12 rounded-3xl overflow-hidden border border-white/[0.08] bg-gradient-to-r from-cyan-950/20 via-[#0a0f26]/40 to-purple-950/20 backdrop-blur-xl shadow-2xl"
      >
        {/* Atmospheric ambient radiant blooms */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              Ready to Build High-Performance Systems?
            </h3>
            <p className="text-slate-300 text-xs md:text-sm">
              Open for full-time backend engineering roles, AI platform consulting, and distributed systems architecture.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 shrink-0 font-mono">
            <Link
              href="/about"
              className={buttonVariants({
                className:
                  "bg-gradient-to-r from-[#00f2fe] to-[#38bdf8] text-[#070913] font-semibold hover:brightness-110 h-10 px-6 text-xs rounded-xl shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all",
              })}
            >
              Get in Touch
            </Link>
            <Link
              href="/work"
              className={buttonVariants({
                variant: "secondary",
                className:
                  "h-10 px-5 text-xs bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 border border-white/[0.1] rounded-xl hover:border-cyan-500/40 transition-all",
              })}
            >
              View Work
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
