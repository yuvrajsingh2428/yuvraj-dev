"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  BIO_TEXT,
  EXPERIENCE_TIMELINE,
  SKILL_STAGES,
  CONTACT_INFO,
} from "@/data/portfolio";
import {
  Code2,
  Cpu,
  Bot,
  ShieldCheck,
  Wrench,
  Sparkles,
  Briefcase,
  TerminalSquare,
} from "lucide-react";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

const STAGE_ICONS = [Code2, Cpu, Bot, ShieldCheck, Wrench];

export default function AboutPage() {
  return (
    <div className="py-8 md:py-12 space-y-16">
      {/* ─── HEADER BANNER ────────────────────────────────────────────── */}
      <section className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 font-mono shadow-[0_0_16px_rgba(0,242,254,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#00f2fe]" />
          <span>About & Engineering Background</span>
        </motion.div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-white">Engineering Philosophy & </span>
          <span className="bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,242,254,0.3)]">
            Background
          </span>
        </h1>
      </section>

      {/* ─── TECHNICAL-DEPTH BIO SECTION (SEAMLESS GLASS RIBBON) ────────── */}
      <section className="rounded-3xl border border-white/[0.08] bg-white/[0.025] hover:bg-white/[0.04] p-6 md:p-8 space-y-4 backdrop-blur-xl shadow-2xl transition-all duration-300">
        <div className="flex items-center gap-2 text-[#00f2fe] font-mono text-xs uppercase tracking-wider">
          <TerminalSquare className="w-4 h-4 text-[#00f2fe]" />
          <span>Technical Background</span>
        </div>

        <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal whitespace-pre-line">
          {BIO_TEXT}
        </p>
      </section>

      {/* ─── EXPERIENCE TIMELINE (REVERSE CHRONOLOGICAL CONTINUOUS RAIL) ── */}
      <section className="space-y-8 border-t border-white/[0.08] pt-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f2fe] uppercase tracking-wider">
            <Briefcase className="w-4 h-4 text-[#00f2fe]" />
            <span>Career History</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Experience Timeline
          </h2>
        </div>

        <div className="relative border-l border-white/[0.1] ml-3 md:ml-4 pl-6 md:pl-8 space-y-10">
          {EXPERIENCE_TIMELINE.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative space-y-3 group"
            >
              {/* Pulsing cyber node dot */}
              <div className="absolute -left-[31px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#070913] border-2 border-[#00f2fe] group-hover:bg-[#00f2fe] transition-colors shadow-[0_0_12px_rgba(0,242,254,0.6)]" />

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg md:text-xl font-bold text-foreground">
                  {exp.company}{" "}
                  <span className="text-sm font-normal text-cyan-400 font-mono">
                    · {exp.role}
                  </span>
                </h3>
                <span className="font-mono text-xs text-slate-400">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2.5 text-xs md:text-sm text-slate-300">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-[#00f2fe] mt-1 font-mono">▸</span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── SKILLS MATRIX (SEAMLESS FLUID RIBBONS) ────────────────────── */}
      <section className="space-y-8 border-t border-white/[0.08] pt-12">
        <div className="space-y-2">
          <span className="font-mono text-xs text-[#00f2fe] uppercase tracking-wider block font-semibold">
            Competency Stack
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            5-Stage Skills Matrix
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {SKILL_STAGES.map((stage, idx) => {
            const StageIcon = STAGE_ICONS[idx] || Code2;
            return (
              <div
                key={stage.title}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-200"
              >
                {/* Stage Header & Dot */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00f2fe] shadow-[0_0_10px_#00f2fe]" />
                  <StageIcon className="w-4 h-4 text-violet-400" />
                  <h3 className="font-mono text-sm md:text-base font-semibold text-foreground">
                    {stage.title}
                  </h3>
                </div>

                {/* Skill Badges List */}
                <div className="flex flex-wrap gap-2">
                  {stage.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-white/[0.04] text-slate-300 border-white/[0.08] hover:border-cyan-500/40 font-mono text-xs transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── FINAL PIPELINE CONTACT NODE (SEAMLESS FLUID PORTAL) ────────── */}
      <section className="border-t border-white/[0.08] pt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-r from-cyan-950/25 via-[#0c1022]/60 to-purple-950/25 p-8 md:p-12 text-center space-y-8 shadow-2xl overflow-hidden backdrop-blur-xl"
        >
          {/* Glowing aurora node point visual at top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#00f2fe] border-4 border-[#070913] shadow-[0_0_24px_rgba(0,242,254,0.9)]" />

          <div className="space-y-3 max-w-xl mx-auto pt-2">
            <span className="font-mono text-xs text-[#00f2fe] uppercase tracking-widest block font-bold">
              Final Pipeline Node • Connect
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Let's Build Systems Together
            </h2>

            {/* Status Badges */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {CONTACT_INFO.badges.map((badge) => (
                <Badge
                  key={badge}
                  variant="outline"
                  className="bg-cyan-500/10 text-cyan-300 border-cyan-500/30 font-mono text-xs py-1"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 font-mono">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className={buttonVariants({
                className:
                  "bg-gradient-to-r from-[#00f2fe] to-[#38bdf8] text-[#070913] font-semibold hover:brightness-110 h-11 px-6 text-xs gap-2 rounded-xl shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all",
              })}
            >
              <TbMail className="w-4 h-4" />
              <span>{CONTACT_INFO.email}</span>
            </a>

            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "outline",
                className:
                  "h-11 px-6 text-xs gap-2 border-white/15 bg-white/[0.04] text-slate-200 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-xl transition-all",
              })}
            >
              <TbBrandGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "outline",
                className:
                  "h-11 px-6 text-xs gap-2 border-white/15 bg-white/[0.04] text-slate-200 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-xl transition-all",
              })}
            >
              <TbBrandLinkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
