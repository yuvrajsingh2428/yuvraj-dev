"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS_DATA, OSS_CONTRIBUTIONS } from "@/data/portfolio";

export default function WorkPage() {
  const [filter, setFilter] = useState<string>("ALL");

  const categories = [
    "ALL",
    "AI & Legal RAG",
    "Monorepo & Hybrid AI",
    "SDET & Automation",
    "Autonomous Agent",
    "Systems & Infrastructure",
    "High-Volume Backend",
  ];

  const filteredProjects = filter === "ALL" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.categoryTag.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="space-y-12 font-mono text-neutral-300">
      {/* Header Banner - Clean open terminal layout without enclosing box */}
      <div className="space-y-2 border-b border-neutral-800 pb-4">
        <div className="text-xs text-neutral-500">
          yuvraj@dev:~$ cat production_work.md
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Production Systems &amp; Engineered Work
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
          Full-lifecycle software engineering implementations across RAG pipelines, autonomous agents,
          deterministic scoring algorithms, and distributed microservices.
        </p>
      </div>

      {/* Category Filter Selector */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="text-neutral-500 mr-1 text-xs">$ filter --tag=</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 transition-colors border text-xs ${
              filter === cat
                ? "bg-white text-black border-white font-bold"
                : "bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="border border-neutral-800 bg-[#0a0a0a] p-5 space-y-3.5 hover:border-neutral-600 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              {/* Header row */}
              <div className="flex items-center justify-between gap-2 border-b border-neutral-900 pb-2.5">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="text-neutral-400 font-bold">[{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]</span>
                  <span>|</span>
                  <span className="text-neutral-300 uppercase font-semibold text-[10px]">{project.categoryTag}</span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-white bg-white text-black px-2.5 py-0.5 text-xs font-bold hover:bg-neutral-200 transition-all"
                    >
                      [demo -&gt;]
                    </a>
                  )}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-neutral-700 bg-neutral-900 px-2.5 py-0.5 text-xs text-neutral-200 hover:bg-white hover:text-black hover:border-white transition-all"
                    >
                      [repo]
                    </a>
                  ) : (
                    !project.liveUrl && (
                      <span className="border border-neutral-800 px-2 py-0.5 text-[10px] text-neutral-500 bg-neutral-950">
                        [prod]
                      </span>
                    )
                  )}
                </div>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {project.title}
              </h2>

              <p className="text-xs text-neutral-300 leading-relaxed">
                {project.summary}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1 text-xs pt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-[11px] text-neutral-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Bullet Points */}
            <ul className="space-y-1.5 text-xs text-neutral-400 pt-2.5 border-t border-neutral-900 leading-relaxed">
              {project.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2">
                  <span className="text-neutral-600 font-bold mt-0.5">&gt;</span>
                  <span className="text-neutral-300">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Open Source Contributions Section */}
      <div className="border-t border-neutral-800 pt-10 space-y-6">
        <div className="space-y-1.5">
          <div className="text-xs text-neutral-500">yuvraj@dev:~$ gh pr list --state=merged</div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Upstream Open Source Contributions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OSS_CONTRIBUTIONS.map((oss) => (
            <div
              key={oss.id}
              className="border border-neutral-800 bg-[#0a0a0a] p-5 space-y-3 text-xs sm:text-sm hover:border-neutral-600 transition-colors leading-relaxed"
            >
              <div className="flex items-center justify-between gap-2">
                <a
                  href={oss.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-white hover:underline text-sm truncate"
                >
                  {oss.repo}
                </a>
                <div className="flex items-center gap-2 shrink-0">
                  {oss.prUrl && (
                    <a
                      href={oss.prUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-white bg-white text-black px-2.5 py-0.5 text-xs font-bold hover:bg-neutral-200 transition-all"
                    >
                      [view pr -&gt;]
                    </a>
                  )}
                  <span className="text-[10px] text-neutral-400 border border-neutral-800 px-2 py-0.5 bg-neutral-950">
                    MERGED
                  </span>
                </div>
              </div>
              <p className="text-neutral-300">{oss.whatYouDid}</p>
              <div className="text-xs text-neutral-400 pt-2 border-t border-neutral-900">
                <span className="text-neutral-300 font-semibold">[Impact]:</span> {oss.whyItMattered}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
