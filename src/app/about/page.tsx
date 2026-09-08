"use client";

import React from "react";
import {
  EXPERIENCE_TIMELINE,
  SKILL_STAGES,
  CONTACT_INFO,
} from "@/data/portfolio";

export default function AboutPage() {

  const PILLARS = [
    {
      code: "CAP_01",
      title: "Backend & Systems Infrastructure",
      org: "Revolt Motors",
      summary: "End-to-end platforms from schema design to production deployment.",
      highlights: [
        "Built ITSM ticketing platform & software license lifecycle management system",
        "Engineered dynamic QR marketing platform with Redis caching & connection pooling",
        "Configured CI-integrated validation pipelines with GitHub Actions to prevent regressions",
      ],
      tag: "SYSTEMS",
    },
    {
      code: "CAP_02",
      title: "AI Platforms & Legal RAG",
      org: "Poshible.ai",
      summary: "Domain-specific Retrieval-Augmented Generation with vector databases.",
      highlights: [
        "PDF vector pipeline with AWS S3 and OpenSearch vector embeddings",
        "90% retrieval precision across 100+ legal documents & 500+ daily queries",
        "Deterministic outputs with runtime schema validation and rate-limiting",
      ],
      tag: "AI / RAG",
    },
    {
      code: "CAP_03",
      title: "Test Automation & SDET",
      org: "Revolt & TLE-Eliminators",
      summary: "Full-lifecycle test automation frameworks built on Page Object Models.",
      highlights: [
        "Playwright + TypeScript framework covering 50+ workflows & 200+ API test cases",
        "Cut manual regression testing effort by 60% with automated CI gating",
        "Selenium + Java regression suites across 150+ flows with 95%+ stability",
      ],
      tag: "AUTOMATION",
    },
    {
      code: "CAP_04",
      title: "Upstream Open Source",
      org: "Microsoft & Apify",
      summary: "Hardening production tools and libraries used by global developers.",
      highlights: [
        "Contributed audit-trail capability (+243/−4) to Microsoft Agent Governance Toolkit",
        "Refactored internal request handling in Apify Crawlee scraping framework",
        "Added resilient async retry routines and unit tests in open-source tooling",
      ],
      tag: "OPEN_SOURCE",
    },
  ];

  const TENETS = [
    {
      code: "TENET_01",
      title: "Own Past 'It Works'",
      desc: "Code running in dev is step zero. Real engineering includes schema boundaries, observability, automated regression gates, and failure recovery.",
    },
    {
      code: "TENET_02",
      title: "Deterministic & Schema-Validated",
      desc: "Whether handling AI generation or distributed microservices, enforce strict runtime schema contracts (Zod / JSON Schema) to eliminate runtime surprises.",
    },
    {
      code: "TENET_03",
      title: "Automate Before Scaling",
      desc: "Manual testing doesn't scale. Investing in robust Playwright & API contract suites early enables fearlessly fast refactoring and 95%+ release confidence.",
    },
  ];

  return (
    <div className="space-y-10 font-mono text-neutral-300">
      
      {/* ─── HEADER BANNER & PHILOSOPHY HERO ──────────────────────────── */}
      <div className="border border-neutral-800 bg-[#0a0a0a] p-5 sm:p-7 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-900 pb-3">
          <div className="text-xs text-neutral-500">
            yuvraj@dev:~$ cat engineering_manifesto.md
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="text-[11px] text-neutral-400 font-bold">STATUS: SWE @ REVOLT MOTORS</span>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            I build systems end-to-end and own them past &apos;it works.&apos;
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl leading-relaxed">
            Backend Systems &amp; AI Platforms Engineer specializing in distributed architectures, high-precision Legal RAG pipelines, and automated Playwright test frameworks.
          </p>
        </div>

        {/* Quick telemetry badge strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="border border-neutral-800 bg-black p-3 space-y-0.5">
            <div className="text-[10px] text-neutral-500 uppercase">Primary Focus</div>
            <div className="text-white font-bold text-xs sm:text-sm">Backend &amp; AI Systems</div>
          </div>
          <div className="border border-neutral-800 bg-black p-3 space-y-0.5">
            <div className="text-[10px] text-neutral-500 uppercase">RAG Precision</div>
            <div className="text-white font-bold text-xs sm:text-sm">90% Vector Accuracy</div>
          </div>
          <div className="border border-neutral-800 bg-black p-3 space-y-0.5">
            <div className="text-[10px] text-neutral-500 uppercase">Regression Reduction</div>
            <div className="text-white font-bold text-xs sm:text-sm">-60% Manual Effort</div>
          </div>
          <div className="border border-neutral-800 bg-black p-3 space-y-0.5">
            <div className="text-[10px] text-neutral-500 uppercase">Upstream Impact</div>
            <div className="text-white font-bold text-xs sm:text-sm">Microsoft · Apify</div>
          </div>
        </div>
      </div>

      {/* ─── SECTION 1: FOUR ENGINEERING PILLARS (SCANNABLE BENTO) ──────── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
          <div className="text-white font-bold text-sm sm:text-base">
            $ cat ./core_capabilities/
          </div>
          <span className="text-xs text-neutral-500">[4 Core Focus Areas]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="border border-neutral-800 bg-[#0a0a0a] p-5 space-y-3 hover:border-neutral-600 transition-colors"
            >
              <div className="flex items-start justify-between gap-2 border-b border-neutral-900 pb-2.5">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-neutral-500 font-bold">[{pillar.code}]</span>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <div className="text-xs text-neutral-500">// {pillar.org}</div>
                </div>
                <span className="text-[10px] font-bold text-neutral-400 border border-neutral-800 px-2 py-0.5 bg-neutral-950">
                  {pillar.tag}
                </span>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                {pillar.summary}
              </p>

              <ul className="space-y-1.5 text-xs text-neutral-400 pt-1">
                {pillar.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-neutral-600 font-bold mt-0.5">&gt;</span>
                    <span className="text-neutral-300">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 2: ENGINEERING TENETS ─────────────────────────────── */}
      <section className="space-y-4">
        <div className="border-b border-neutral-800 pb-2.5">
          <div className="text-white font-bold text-sm sm:text-base">$ cat engineering_tenets.json</div>
          <div className="text-xs text-neutral-500 mt-0.5">Principles governing how I design, architect, and ship software</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TENETS.map((tenet) => (
            <div
              key={tenet.code}
              className="border border-neutral-800 bg-[#0a0a0a] p-4 sm:p-5 space-y-2 hover:border-neutral-600 transition-colors"
            >
              <div className="text-[10px] font-bold text-neutral-500">{tenet.code}</div>
              <h3 className="text-sm font-bold text-white">{tenet.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {tenet.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 3: CAREER TIMELINE (GIT LOG) ──────────────────────── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
          <div className="text-white font-bold text-sm sm:text-base">
            $ git log --career --stat
          </div>
          <span className="text-xs text-neutral-500">[Experience History]</span>
        </div>

        <div className="space-y-4">
          {EXPERIENCE_TIMELINE.map((exp) => (
            <div
              key={exp.company}
              className="border border-neutral-800 bg-[#0a0a0a] p-5 space-y-3 hover:border-neutral-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-neutral-900 pb-2">
                <div>
                  <span className="text-white font-bold text-base">{exp.company}</span>
                  <span className="text-neutral-400 text-xs sm:text-sm ml-2">// {exp.role}</span>
                </div>
                <span className="text-neutral-500 text-xs">{exp.period}</span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-neutral-500 font-bold mt-0.5">-&gt;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 4: TECHNICAL SKILLS MATRIX ────────────────────────── */}
      <section className="space-y-4">
        <div className="border-b border-neutral-800 pb-2.5">
          <div className="text-white font-bold text-sm sm:text-base">$ cat skills.json</div>
          <div className="text-xs text-neutral-500 mt-0.5">Core technical competencies and production tools</div>
        </div>

        <div className="space-y-3">
          {SKILL_STAGES.map((stage) => (
            <div
              key={stage.title}
              className="border border-neutral-800 bg-[#0a0a0a] p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs sm:text-sm"
            >
              <div className="font-bold text-white shrink-0">
                {stage.title}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {stage.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-neutral-800 bg-neutral-950 px-2.5 py-1 text-neutral-300 text-xs hover:border-neutral-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 5: CONTACT NODE ───────────────────────────────────── */}
      <section className="border border-neutral-800 bg-[#0a0a0a] p-6 sm:p-7 text-center space-y-4">
        <div className="space-y-1.5">
          <div className="text-xs text-neutral-500 font-semibold">[CONNECT]</div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">$ npx contact-yuvraj</h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
            Available for Systems Engineering, Backend Architecture, and Distributed AI Consulting.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
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
