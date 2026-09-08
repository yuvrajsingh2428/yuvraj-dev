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
    <div className="space-y-12 font-mono text-neutral-300">
      {/* Header Banner */}
      <div className="border border-neutral-800 bg-[#0a0a0a] p-5 sm:p-7 space-y-3.5">
        <div className="text-xs text-neutral-500">
          yuvraj@dev:~$ cat profile.md
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Engineering Philosophy & Background
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
          Full-stack background with deep focus on backend reliability, RAG platforms, automated testing frameworks, and scalable infrastructure.
        </p>
      </div>

      {/* Technical Bio Block */}
      <section className="border border-neutral-800 bg-[#0a0a0a] p-6 sm:p-7 space-y-4">
        <div className="text-xs text-neutral-500 font-bold border-b border-neutral-900 pb-2">
          [TECHNICAL_OVERVIEW]
        </div>
        <p className="text-sm sm:text-base text-neutral-200 leading-relaxed whitespace-pre-line">
          {BIO_TEXT}
        </p>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-5">
        <div className="border-b border-neutral-800 pb-3">
          <div className="text-white font-bold text-base">$ git log --career</div>
          <div className="text-xs text-neutral-500 mt-0.5">Career progression and engineering milestones</div>
        </div>

        <div className="space-y-5">
          {EXPERIENCE_TIMELINE.map((exp) => (
            <div
              key={exp.company}
              className="border border-neutral-800 bg-[#0a0a0a] p-5 sm:p-6 space-y-3.5 hover:border-neutral-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 border-b border-neutral-900 pb-2.5">
                <div>
                  <span className="text-white font-bold text-base sm:text-lg">{exp.company}</span>
                  <span className="text-neutral-400 text-xs sm:text-sm ml-2">// {exp.role}</span>
                </div>
                <span className="text-neutral-500 text-xs">{exp.period}</span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-neutral-500 font-bold mt-0.5">&gt;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="space-y-5">
        <div className="border-b border-neutral-800 pb-3">
          <div className="text-white font-bold text-base">$ cat skills.json</div>
          <div className="text-xs text-neutral-500 mt-0.5">Technical competencies and technology stack</div>
        </div>

        <div className="space-y-3.5">
          {SKILL_STAGES.map((stage) => (
            <div
              key={stage.title}
              className="border border-neutral-800 bg-[#0a0a0a] p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs sm:text-sm"
            >
              <div className="font-bold text-white shrink-0">
                {stage.title}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {stage.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-neutral-800 bg-neutral-950 px-2.5 py-1 text-neutral-300 text-xs"
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
      <section className="border border-neutral-800 bg-[#0a0a0a] p-7 text-center space-y-4">
        <div className="space-y-1.5">
          <div className="text-xs text-neutral-500 font-semibold">[CONNECT]</div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">$ npx contact-yuvraj</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {CONTACT_INFO.badges.map((badge) => (
            <span
              key={badge}
              className="border border-neutral-800 bg-neutral-950 text-neutral-300 px-3 py-1 text-xs"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="border border-white bg-white text-black px-4 py-2 text-xs font-bold hover:bg-neutral-200 transition-all"
          >
            [email: {CONTACT_INFO.email}]
          </a>
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="border border-neutral-700 bg-neutral-900 text-neutral-200 px-4 py-2 text-xs hover:border-neutral-400 transition-all"
          >
            [github: yuvrajsingh2428]
          </a>
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-neutral-700 bg-neutral-900 text-neutral-200 px-4 py-2 text-xs hover:border-neutral-400 transition-all"
          >
            [linkedin: yuvrajsingh024]
          </a>
          <a
            href={CONTACT_INFO.twitter}
            target="_blank"
            rel="noreferrer"
            className="border border-neutral-700 bg-neutral-900 text-neutral-200 px-4 py-2 text-xs hover:border-neutral-400 transition-all"
          >
            [x.com: itsyuvrajx]
          </a>
        </div>
      </section>
    </div>
  );
}
