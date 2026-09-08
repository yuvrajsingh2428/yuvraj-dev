"use client";

import React from "react";
import {
  BIO_TEXT,
  EXPERIENCE_TIMELINE,
  SKILL_STAGES,
  CONTACT_INFO,
} from "@/data/portfolio";

export default function AboutPage() {
  return (
    <div className="space-y-10 font-mono text-neutral-300">
      {/* Header Banner */}
      <div className="border border-neutral-800 bg-[#0a0a0a] p-4 sm:p-6 space-y-3">
        <div className="text-xs text-neutral-500">
          yuvraj@systems:~$ cat /etc/yuvraj/engineering_profile.md
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Engineering Philosophy & Background
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
          Full-stack background with deep focus on backend reliability, RAG platforms, automated testing frameworks, and scalable infrastructure.
        </p>
      </div>

      {/* Technical Bio Block */}
      <section className="border border-neutral-800 bg-[#0a0a0a] p-5 sm:p-6 space-y-3">
        <div className="text-xs text-neutral-500 font-bold border-b border-neutral-900 pb-2">
          [TECHNICAL_OVERVIEW]
        </div>
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed whitespace-pre-line">
          {BIO_TEXT}
        </p>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-4">
        <div className="border-b border-neutral-800 pb-2">
          <div className="text-white font-bold text-sm">$ journalctl -u career.service --all</div>
          <div className="text-xs text-neutral-500">Career progression and engineering milestones</div>
        </div>

        <div className="space-y-4">
          {EXPERIENCE_TIMELINE.map((exp) => (
            <div
              key={exp.company}
              className="border border-neutral-800 bg-[#0a0a0a] p-4 sm:p-5 space-y-3 hover:border-neutral-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-neutral-900 pb-2">
                <div>
                  <span className="text-white font-bold text-base">{exp.company}</span>
                  <span className="text-neutral-400 text-xs ml-2">// {exp.role}</span>
                </div>
                <span className="text-neutral-500 text-xs">{exp.period}</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-neutral-500 font-bold mt-0.5">&gt;</span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="space-y-4">
        <div className="border-b border-neutral-800 pb-2">
          <div className="text-white font-bold text-sm">$ sysctl -a --skills-matrix</div>
          <div className="text-xs text-neutral-500">5-stage technical competencies and technology stack</div>
        </div>

        <div className="space-y-3">
          {SKILL_STAGES.map((stage) => (
            <div
              key={stage.title}
              className="border border-neutral-800 bg-[#0a0a0a] p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"
            >
              <div className="font-bold text-white shrink-0">
                {stage.title}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {stage.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-neutral-400 text-[11px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Node */}
      <section className="border border-neutral-800 bg-[#0a0a0a] p-6 text-center space-y-4">
        <div className="space-y-1">
          <div className="text-xs text-neutral-500">[INITIALIZE CONNECTION]</div>
          <h2 className="text-xl font-bold text-white">$ ping yuvraj@systems.dev</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {CONTACT_INFO.badges.map((badge) => (
            <span
              key={badge}
              className="border border-neutral-800 bg-neutral-950 text-neutral-400 px-2.5 py-0.5 text-xs"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="border border-white bg-white text-black px-4 py-1.5 text-xs font-bold hover:bg-neutral-200 transition-all"
          >
            [email: {CONTACT_INFO.email}]
          </a>
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="border border-neutral-700 bg-neutral-900 text-neutral-200 px-4 py-1.5 text-xs hover:border-neutral-400 transition-all"
          >
            [github: yuvrajsingh2428]
          </a>
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-neutral-700 bg-neutral-900 text-neutral-200 px-4 py-1.5 text-xs hover:border-neutral-400 transition-all"
          >
            [linkedin: yuvrajsingh024]
          </a>
        </div>
      </section>
    </div>
  );
}
