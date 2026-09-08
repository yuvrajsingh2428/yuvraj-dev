"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  PROJECTS_DATA,
  OSS_CONTRIBUTIONS,
  EXPERIENCE_TIMELINE,
  SKILL_STAGES,
  CONTACT_INFO,
  BIO_TEXT,
} from "@/data/portfolio";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";

export default function Home() {
  const [cliInput, setCliInput] = useState("");
  const [cliOutput, setCliOutput] = useState<string[]>([]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = cliInput.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    switch (cmd) {
      case "help":
        response = "Available commands: help, bio, projects, systems, exp, skills, contact, resume, clear";
        break;
      case "bio":
      case "about":
        response = BIO_TEXT;
        break;
      case "whoami":
        response = "Yuvraj Singh — Backend Systems & AI Platforms Engineer @ Revolt Motors";
        break;
      case "projects":
      case "ls":
        response = PROJECTS_DATA.map((p, i) => `[${i + 1}] ${p.title} (${p.tech.slice(0, 3).join(", ")})`).join("\n");
        break;
      case "systems":
      case "arch":
        response = "Systems: 1. Poshible RAG (OpenSearch+S3) | 2. OpenForge (Dual LLM) | 3. JobHermes (Cron+SQLite) | 4. Dealership Engine (Redis+Postgres)";
        break;
      case "exp":
      case "experience":
        response = EXPERIENCE_TIMELINE.map(e => `${e.company} (${e.role}, ${e.period})`).join("\n");
        break;
      case "skills":
      case "stack":
        response = SKILL_STAGES.map(s => `${s.title}: ${s.skills.join(", ")}`).join("\n");
        break;
      case "contact":
        response = `Email: ${CONTACT_INFO.email} | GitHub: ${CONTACT_INFO.github} | LinkedIn: ${CONTACT_INFO.linkedin}`;
        break;
      case "resume":
        if (typeof window !== "undefined") {
          window.open("https://drive.google.com/uc?export=download&id=18ozkViRciZPbM-1pCSg03Kc7b2eVIoXO", "_blank");
        }
        response = "Opening resume download link...";
        break;
      case "clear":
      case "cls":
        setCliOutput([]);
        setCliInput("");
        return;
      default:
        response = `zsh: command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setCliOutput(prev => [...prev, `yuvraj@dev:~$ ${cmd}`, response]);
    setCliInput("");
  };

  return (
    <div className="space-y-12 font-mono text-neutral-300">
      
      {/* ─── TERMINAL HERO WINDOW ───────────────────────────────────────── */}
      <section className="border border-neutral-800 bg-[#0a0a0a]">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800 bg-[#121212] text-xs text-neutral-400 select-none">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-neutral-600"></span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-neutral-800"></span>
            <span className="ml-2 text-neutral-300 font-bold">Terminal — zsh</span>
          </div>
          <div className="text-[11px] text-neutral-500 hidden sm:block">
            git:(main)
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: CLI Spec & Telemetry */}
            <div className="lg:col-span-8 space-y-5">
              {/* CLI Prompt Line 1 */}
              <div className="space-y-1">
                <div className="text-neutral-500 flex items-center gap-2 text-xs">
                  <span className="text-white font-bold">yuvraj@dev:~$</span>
                  <span>whoami</span>
                </div>
                <div className="pl-3 text-white font-bold text-lg sm:text-xl">
                  Yuvraj Singh
                </div>
                <div className="pl-3 text-neutral-400 text-xs sm:text-sm">
                  Backend Systems & AI Platforms Engineer · Revolt Motors
                </div>
              </div>

              {/* CLI Prompt Line 2: Tech Stack */}
              <div className="space-y-2">
                <div className="text-neutral-500 flex items-center gap-2 text-xs">
                  <span className="text-white font-bold">yuvraj@dev:~$</span>
                  <span>cat tech_stack.json</span>
                </div>
                <div className="pl-3 grid grid-cols-1 gap-1.5 text-xs text-neutral-300 border-l border-neutral-800 ml-1 py-1">
                  <div><span className="text-neutral-500">• Systems:</span> Distributed Backends, RAG Architectures, Microservices</div>
                  <div><span className="text-neutral-500">• Languages:</span> TypeScript, Node.js, Python, Java, SQL</div>
                  <div><span className="text-neutral-500">• Databases:</span> PostgreSQL, Redis, OpenSearch Vector DB, SQLite WAL</div>
                  <div><span className="text-neutral-500">• Testing & QA:</span> Playwright (POM), Selenium, GitHub Actions CI/CD</div>
                </div>
              </div>

              {/* Quick Metrics Matrix */}
              <div className="border border-neutral-800 bg-black p-3 space-y-1 text-xs">
                <div className="text-neutral-400 font-bold border-b border-neutral-900 pb-1 mb-2">
                  [SYSTEM_METRICS]
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
                  <div>
                    <div className="text-[10px] text-neutral-500">QUERY PRECISION</div>
                    <div className="text-white font-bold">90% RAG ACC</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500">TEST SUITE</div>
                    <div className="text-white font-bold">83+ E2E/API</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500">SERVER LOAD</div>
                    <div className="text-white font-bold">-60% OPTIMIZED</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500">LATENCY PROFILE</div>
                    <div className="text-white font-bold">&lt;15ms p99</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-900">
                <Link
                  href="/work"
                  className="border border-white bg-white text-black px-3 py-1 text-xs font-bold hover:bg-neutral-200 transition-colors"
                >
                  $ view_projects
                </Link>
                <Link
                  href="/systems"
                  className="border border-neutral-700 bg-neutral-900 text-white px-3 py-1 text-xs hover:border-neutral-400 transition-colors"
                >
                  $ view_architecture
                </Link>
                <a
                  href="https://drive.google.com/uc?export=download&id=18ozkViRciZPbM-1pCSg03Kc7b2eVIoXO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-neutral-700 bg-neutral-900 text-neutral-300 px-3 py-1 text-xs hover:border-neutral-400 transition-colors"
                >
                  $ curl -O resume.pdf
                </a>
              </div>
            </div>

            {/* Right Column: Profile Portrait */}
            <div className="lg:col-span-4 flex flex-col justify-center items-center">
              <ProfilePortrait />
            </div>

          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE CLI REPL TERMINAL ──────────────────────────────── */}
      <section className="border border-neutral-800 bg-black p-4 space-y-3">
        <div className="flex items-center justify-between text-xs text-neutral-500 border-b border-neutral-900 pb-2">
          <span>[INTERACTIVE TERMINAL REPL]</span>
          <span className="text-[10px]">Type commands or click quick helpers</span>
        </div>

        {/* Quick helper buttons */}
        <div className="flex flex-wrap gap-1.5 text-[11px]">
          {["help", "bio", "projects", "systems", "exp", "skills", "contact", "resume", "clear"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                setCliInput(cmd);
              }}
              className="px-2 py-0.5 border border-neutral-800 hover:border-neutral-500 text-neutral-400 hover:text-white transition-colors bg-neutral-950"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Cli Output stream */}
        {cliOutput.length > 0 && (
          <div className="space-y-2 max-h-48 overflow-y-auto border border-neutral-900 p-2 text-xs bg-[#050505]">
            {cliOutput.map((line, idx) => (
              <div
                key={idx}
                className={line.startsWith("yuvraj@dev") ? "text-white font-bold" : "text-neutral-400 whitespace-pre-line"}
              >
                {line}
              </div>
            ))}
          </div>
        )}

        {/* Cli input line */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 text-xs">
          <span className="text-white font-bold shrink-0">yuvraj@dev:~$</span>
          <input
            type="text"
            value={cliInput}
            onChange={(e) => setCliInput(e.target.value)}
            placeholder="Type 'help', 'bio', 'projects', 'contact'..."
            className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-neutral-700"
          />
          <button type="submit" className="border border-neutral-700 px-2 py-0.5 text-[10px] text-neutral-400 hover:text-white">
            RUN
          </button>
        </form>
      </section>

      {/* ─── SECTION 1: PRODUCTION WORK & PROJECTS ──────────────────────── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-sm">$ ls -la ./projects/</span>
            <span className="text-xs text-neutral-500">({PROJECTS_DATA.length} systems)</span>
          </div>
          <Link href="/work" className="text-xs text-neutral-400 hover:text-white">
            [view full specs -&gt;]
          </Link>
        </div>

        <div className="space-y-4">
          {PROJECTS_DATA.map((proj, idx) => (
            <div
              key={proj.id}
              className="border border-neutral-800 bg-[#0a0a0a] p-4 sm:p-5 space-y-3 hover:border-neutral-600 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                    <span>DIR_0{idx + 1}</span>
                    <span>|</span>
                    <span className="text-neutral-400 uppercase font-bold">{proj.categoryTag}</span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {proj.title}
                  </h3>
                </div>

                {proj.repoUrl ? (
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="self-start sm:self-auto border border-neutral-700 px-2.5 py-1 text-xs text-neutral-300 hover:bg-white hover:text-black hover:border-white transition-all"
                  >
                    [git clone]
                  </a>
                ) : (
                  <span className="self-start sm:self-auto border border-neutral-800 px-2 py-0.5 text-[11px] text-neutral-500">
                    [production_system]
                  </span>
                )}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 text-[11px]">
                {proj.tech.map((t) => (
                  <span key={t} className="border border-neutral-800 bg-neutral-900/60 px-2 py-0.5 text-neutral-400">
                    {t}
                  </span>
                ))}
              </div>

              {/* Bullet Points */}
              <ul className="space-y-1.5 text-xs text-neutral-300 pt-2 border-t border-neutral-900">
                {proj.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-neutral-500 font-bold">&gt;</span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 2: OPEN SOURCE CONTRIBUTIONS ───────────────────────── */}
      <section className="space-y-4">
        <div className="border-b border-neutral-800 pb-2">
          <div className="text-white font-bold text-sm">$ git log --upstream-contributions</div>
          <div className="text-xs text-neutral-500">Upstream pull requests merged into public repositories</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {OSS_CONTRIBUTIONS.map((oss) => (
            <div
              key={oss.id}
              className="border border-neutral-800 bg-[#0a0a0a] p-4 space-y-2 hover:border-neutral-600 transition-colors text-xs"
            >
              <div className="flex items-center justify-between">
                <a
                  href={oss.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-white hover:underline"
                >
                  {oss.repo}
                </a>
                <span className="text-[10px] text-neutral-400 border border-neutral-800 px-1.5 py-0.2 bg-neutral-950">
                  MERGED
                </span>
              </div>
              <p className="text-neutral-300">{oss.whatYouDid}</p>
              <div className="text-[11px] text-neutral-500 pt-1 border-t border-neutral-900">
                <span className="text-neutral-400">[Impact]:</span> {oss.whyItMattered}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 3: CAREER LOGS ─────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="border-b border-neutral-800 pb-2">
          <div className="text-white font-bold text-sm">$ git log --career</div>
          <div className="text-xs text-neutral-500">Professional experience and engineering timeline</div>
        </div>

        <div className="space-y-4">
          {EXPERIENCE_TIMELINE.map((exp) => (
            <div key={exp.company} className="border border-neutral-800 bg-[#0a0a0a] p-4 space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="text-white font-bold text-sm">{exp.company}</span>
                  <span className="text-neutral-500 text-xs ml-2">// {exp.role}</span>
                </div>
                <span className="text-neutral-500 text-xs">{exp.period}</span>
              </div>

              <ul className="space-y-1.5 text-xs text-neutral-300">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-neutral-500 font-bold">-&gt;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 4: CONTACT NODE ────────────────────────────────────── */}
      <section className="border border-neutral-800 bg-[#0a0a0a] p-6 text-center space-y-4">
        <div className="space-y-1">
          <div className="text-neutral-500 text-xs">[CONNECT]</div>
          <h2 className="text-xl font-bold text-white">$ npx contact-yuvraj</h2>
          <p className="text-xs text-neutral-400 max-w-lg mx-auto">
            Available for Systems Engineering, Backend Architecture, and Distributed AI Consulting.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="border border-white bg-white text-black px-4 py-1.5 text-xs font-bold hover:bg-neutral-200 transition-all"
          >
            [mail: {CONTACT_INFO.email}]
          </a>
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="border border-neutral-700 bg-neutral-900 text-neutral-200 px-4 py-1.5 text-xs hover:border-neutral-400 transition-all"
          >
            [github.com/yuvrajsingh2428]
          </a>
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-neutral-700 bg-neutral-900 text-neutral-200 px-4 py-1.5 text-xs hover:border-neutral-400 transition-all"
          >
            [linkedin/in/yuvrajsingh024]
          </a>
        </div>
      </section>

    </div>
  );
}
