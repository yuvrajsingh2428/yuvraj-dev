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

export default function Home() {
  const { smoothedScrollYProgress } = useSmoothedScroll();

  // Smoothed scroll transitions for hero pipeline chain
  const heroScale = useTransform(smoothedScrollYProgress, [0, 0.25], [1, 0.88]);
  const heroOpacity = useTransform(smoothedScrollYProgress, [0, 0.25], [1, 0.15]);
  const heroY = useTransform(smoothedScrollYProgress, [0, 0.25], [0, -40]);

  return (
    <div className="flex flex-col gap-24 py-6 md:py-12">
      {/* ─── HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center gap-8 py-10 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        {/* Live Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available for Engineering Roles & Systems Consulting</span>
        </motion.div>

        {/* Hero Title & Subtitle with clip-path wipe animation */}
        <div className="space-y-4 max-w-4xl">
          <TextReveal
            lines={["Software Engineer"]}
            lineClassName="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground"
            delay={0.1}
          />
          <TextReveal
            lines={[
              "Building products end-to-end — from AI features to test",
              "automation that keeps them shipping safely.",
            ]}
            lineClassName="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed"
            delay={0.25}
          />
        </div>

        {/* 6-Node Lifecycle Chain (Design → Build → AI → Test → Ship → Scale) */}
        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
            y: heroY,
            willChange: "transform, opacity",
          }}
          className="w-full mt-4"
        >
          <PipelineChain startDelayMs={350} />
        </motion.div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="absolute bottom-2 flex flex-col items-center gap-2 text-slate-500 text-xs font-mono"
        >
          <span>scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-emerald-400/80" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── FEATURED PROJECTS PREVIEW ─────────────────────────────────── */}
      <section className="space-y-8 border-t border-border/40 pt-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Systems</span>
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
                "gap-2 border-emerald-500/30 hover:border-emerald-400 hover:text-emerald-400 font-mono text-xs",
            })}
          >
            View All Work & Open Source <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Project Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-xl border border-white/10 bg-slate-900/50 p-6 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-lg"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs text-emerald-400/80 uppercase tracking-wider block">
                  {project.categoryTag}
                </span>

                <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {project.bullets[0]}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.slice(0, 4).map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-slate-800/80 text-slate-300 border-slate-700 text-[10px] font-mono"
                    >
                      {t}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge
                      variant="secondary"
                      className="bg-slate-800/50 text-slate-400 text-[10px] font-mono"
                    >
                      +{project.tech.length - 4}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── QUICK CTA BANNER ────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl p-8 md:p-12 overflow-hidden border border-emerald-500/20 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/60"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              End-to-End Systems Engineering
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              From deterministic AI features to CI-integrated test frameworks, I build systems that hold up at scale.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 shrink-0 font-mono">
            <Link
              href="/about"
              className={buttonVariants({
                className:
                  "bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 h-11 px-6 text-xs shadow-[0_0_16px_rgba(16,185,129,0.3)]",
              })}
            >
              About & Contact
            </Link>
            <Link
              href="/work"
              className={buttonVariants({
                variant: "secondary",
                className: "h-11 px-6 text-xs bg-slate-800 text-slate-200 hover:bg-slate-700",
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
