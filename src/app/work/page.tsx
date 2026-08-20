"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS_DATA, OSS_CONTRIBUTIONS, ProjectItem, OssContribution } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/TextReveal";
import { Card3D } from "@/components/ui/Card3D";
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
} from "lucide-react";

function getProjectIcon(id: string) {
  switch (id) {
    case "poshible":
      return <Database className="w-5 h-5 text-emerald-400" />;
    case "playwright-framework":
      return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
    case "jobhermes":
      return <Bot className="w-5 h-5 text-emerald-400" />;
    default:
      return <Code2 className="w-5 h-5 text-emerald-400" />;
  }
}

function ProjectPipelineCard({ project, index }: { project: ProjectItem; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start group">
      {/* Node point circle */}
      <div className="relative flex flex-col items-center shrink-0 pt-1">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-900 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_16px_rgba(16,185,129,0.25)] group-hover:border-emerald-400 transition-colors"
        >
          {getProjectIcon(project.id)}
        </motion.div>
      </div>

      {/* Project Card Container with 3D Tilt & Cursor Spotlight Glow */}
      <motion.div
        initial={
          shouldReduceMotion
            ? { opacity: 0, y: 20 }
            : {
                clipPath: "inset(0 100% 0 0)",
                opacity: 0,
              }
        }
        whileInView={
          shouldReduceMotion
            ? { opacity: 1, y: 0 }
            : {
                clipPath: "inset(0 0% 0 0)",
                opacity: 1,
              }
        }
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{
          duration: 0.65,
          delay: 0.25,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex-1"
      >
        <Card3D maxTilt={6} className="space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="font-mono text-xs text-emerald-400/80 uppercase tracking-wider block mb-1">
                  {project.categoryTag}
                </span>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h2>
              </div>

              {/* Links / Placeholders */}
              <div className="flex items-center gap-2 font-mono text-xs">
                {project.repoUrl ? (
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                      className: "h-8 px-2.5 gap-1.5 border-white/10 hover:border-emerald-400 hover:text-emerald-400",
                    })}
                  >
                    <TbBrandGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </motion.a>
                ) : (
                  <span className="px-2.5 py-1 rounded bg-slate-800/80 text-amber-400/90 border border-amber-500/30 text-[11px] font-semibold">
                    [FILL IN: repo/live links]
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="bg-slate-800/90 text-slate-200 border-slate-700 font-mono text-xs px-2.5 py-1"
              >
                {t}
              </Badge>
            ))}
          </div>

          {/* Bullets List */}
          <ul className="space-y-2.5 text-xs md:text-sm text-slate-300">
            {project.bullets.map((bullet, bIdx) => (
              <li key={bIdx} className="flex items-start gap-2.5">
                <span className="text-emerald-400 mt-1 font-mono">▸</span>
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </Card3D>
      </motion.div>
    </div>
  );
}

function OssCard({ oss }: { oss: OssContribution }) {
  return (
    <Card3D maxTilt={5} className="!p-5 space-y-2.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <a
          href={oss.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm font-bold text-foreground hover:text-emerald-400 transition-colors flex items-center gap-1.5"
        >
          <TbGitPullRequest className="w-4 h-4 text-emerald-400" />
          <span>{oss.repo}</span>
        </a>

        {/* PR Link Placeholder */}
        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-800 text-amber-400/90 border border-amber-500/30 font-semibold">
          {oss.prLinkPlaceholder}
        </span>
      </div>

      <p className="text-xs md:text-sm text-slate-300 font-medium">
        {oss.whatYouDid}
      </p>

      <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
        <span className="text-emerald-400 font-bold">[Why It Mattered]:</span>
        <span>{oss.whyItMattered}</span>
      </div>
    </Card3D>
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
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 font-mono"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Engineering Projects & Open Source</span>
        </motion.div>

        <TextReveal
          lines={["Work & Systems Pipeline"]}
          lineClassName="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          delay={0.1}
        />

        <TextReveal
          lines={[
            "Full-lifecycle software engineering: AI RAG platforms, automated test frameworks,",
            "and autonomous agents presented together as production nodes.",
          ]}
          lineClassName="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed"
          delay={0.25}
        />
      </section>

      {/* ─── SECTION A: PROJECTS PIPELINE ──────────────────────────────── */}
      <section className="relative pt-4">
        {/* Continuous vertical line running down the pipeline */}
        <div className="absolute left-[19px] md:left-[23px] top-8 bottom-12 w-0.5 bg-slate-800 pointer-events-none" />

        {/* Animated Drawing Vertical Pipeline Overlay */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-[19px] md:left-[23px] top-8 bottom-12 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-600 shadow-[0_0_8px_rgba(16,185,129,0.6)] pointer-events-none"
          style={{ transformOrigin: "top center" }}
        />

        {/* Stack of Project Pipeline Cards */}
        <div className="space-y-12 md:space-y-16 relative">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectPipelineCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* ─── SECTION B: OPEN SOURCE CONTRIBUTIONS ──────────────────────── */}
      <section className="space-y-6 border-t border-border/40 pt-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <TbGitPullRequest className="w-4 h-4" />
            <span>Upstream Ecosystem</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Open Source Contributions
          </h2>
          <p className="text-xs md:text-sm text-slate-400 max-w-xl">
            Pull requests and contributions to developer tools, scraping frameworks, and governance SDKs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OSS_CONTRIBUTIONS.map((oss) => (
            <OssCard key={oss.id} oss={oss} />
          ))}
        </div>
      </section>
    </div>
  );
}
