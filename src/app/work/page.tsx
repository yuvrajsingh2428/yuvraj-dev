"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA, OSS_CONTRIBUTIONS, ProjectItem, OssContribution } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/TextReveal";
import {
  TbBrandGithub,
  TbGitPullRequest,
} from "react-icons/tb";
import {
  Bot,
  Database,
  ShieldCheck,
  Sparkles,
  Code2,
  ChevronDown,
  ArrowUpRight,
  Cpu,
} from "lucide-react";

function getProjectIcon(id: string) {
  switch (id) {
    case "poshible":
      return <Database className="w-5 h-5 text-[#00f2fe]" />;
    case "playwright-framework":
      return <ShieldCheck className="w-5 h-5 text-[#00f2fe]" />;
    case "jobhermes":
      return <Bot className="w-5 h-5 text-[#00f2fe]" />;
    default:
      return <Code2 className="w-5 h-5 text-[#00f2fe]" />;
  }
}

function ProjectStreamItem({ project, index }: { project: ProjectItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start group">
      {/* Node point circle */}
      <div className="relative flex flex-col items-center shrink-0 pt-1">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative z-10 w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[#0a0d1d] border border-cyan-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(0,242,254,0.3)] group-hover:border-cyan-300 group-hover:shadow-[0_0_24px_rgba(0,242,254,0.5)] transition-all"
        >
          {getProjectIcon(project.id)}
        </motion.div>
      </div>

      {/* Seamless Fluid Architecture Ribbon (No Boxy Card) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex-1 w-full"
      >
        <div className="relative py-6 px-6 md:px-8 rounded-2xl bg-white/[0.025] hover:bg-white/[0.045] border border-white/[0.07] hover:border-cyan-500/30 backdrop-blur-md transition-all duration-300 shadow-xl space-y-5">
          {/* Subtle Left Aurora Glow Bar */}
          <div className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full bg-gradient-to-b from-[#00f2fe] via-[#8b5cf6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="font-mono text-xs text-cyan-400 font-semibold tracking-wider">
                  0{index + 1} //
                </span>
                <span className="font-mono text-[11px] text-violet-300 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20">
                  {project.categoryTag}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-[#00f2fe] transition-colors">
                {project.title}
              </h2>
            </div>

            {/* Actions: GitHub link or Live Specs */}
            <div className="flex items-center gap-3 font-mono text-xs">
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all shadow-[0_0_12px_rgba(0,242,254,0.15)]"
                >
                  <TbBrandGithub className="w-4 h-4" />
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-400 border border-white/[0.08] text-[11px]">
                  Internal Production System
                </span>
              )}

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-white/[0.05] transition-colors"
                aria-label="Toggle details"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>

          {/* Tech Stack Stream */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="bg-white/[0.03] text-slate-300 border-white/[0.07] font-mono text-[11px] px-2.5 py-0.5 hover:border-cyan-500/40 transition-colors"
              >
                {t}
              </Badge>
            ))}
          </div>

          {/* Expandable Architecture Highlights */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="pt-2 border-t border-white/[0.05]"
              >
                <ul className="space-y-2.5 text-xs md:text-sm text-slate-300">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="text-[#00f2fe] mt-1 font-mono text-xs">▸</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

function OssStreamItem({ oss }: { oss: OssContribution }) {
  return (
    <div className="relative p-5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.045] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-200 space-y-2.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <a
          href={oss.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm font-bold text-foreground hover:text-[#00f2fe] transition-colors flex items-center gap-2"
        >
          <TbGitPullRequest className="w-4 h-4 text-[#00f2fe]" />
          <span>{oss.repo}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 hover:text-cyan-300" />
        </a>

        <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
          Merged Upstream
        </span>
      </div>

      <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
        {oss.whatYouDid}
      </p>

      <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5 pt-1">
        <span className="text-violet-400 font-semibold">[Impact]:</span>
        <span className="text-slate-300">{oss.whyItMattered}</span>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="py-8 md:py-12 space-y-16">
      {/* Header Banner */}
      <section className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 font-mono shadow-[0_0_16px_rgba(0,242,254,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#00f2fe]" />
          <span>Engineering Systems & Open Source</span>
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-white">Production Work & </span>
          <span className="bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,242,254,0.3)]">
            Systems Pipeline
          </span>
        </h1>

        <p className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
          Full-lifecycle software engineering: AI RAG platforms, automated test frameworks,
          and autonomous agents presented together as production nodes.
        </p>
      </section>

      {/* ─── SECTION A: PROJECTS PIPELINE (SEAMLESS STREAM) ─────────────── */}
      <section className="relative pt-4">
        {/* Continuous vertical line running down the pipeline */}
        <div className="absolute left-[21px] md:left-[23px] top-8 bottom-12 w-0.5 bg-white/[0.08] pointer-events-none" />

        {/* Animated Drawing Vertical Pipeline Overlay */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-[21px] md:left-[23px] top-8 bottom-12 w-0.5 bg-gradient-to-b from-[#00f2fe] via-[#8b5cf6] to-[#00f2fe] shadow-[0_0_12px_rgba(0,242,254,0.5)] pointer-events-none"
          style={{ transformOrigin: "top center" }}
        />

        {/* Stack of Project Pipeline Items (Card-Free Ribbons) */}
        <div className="space-y-10 md:space-y-12 relative">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectStreamItem key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* ─── SECTION B: OPEN SOURCE CONTRIBUTIONS ──────────────────────── */}
      <section className="space-y-6 border-t border-white/[0.08] pt-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f2fe] uppercase tracking-wider">
            <TbGitPullRequest className="w-4 h-4 text-[#00f2fe]" />
            <span>Upstream Ecosystem</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Open Source Contributions
          </h2>
          <p className="text-xs md:text-sm text-slate-400 max-w-xl">
            Pull requests and contributions to developer tools, scraping frameworks, and governance SDKs.
          </p>
        </div>

        {/* Telemetry Stream (No Clunky Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OSS_CONTRIBUTIONS.map((oss) => (
            <OssStreamItem key={oss.id} oss={oss} />
          ))}
        </div>
      </section>
    </div>
  );
}
