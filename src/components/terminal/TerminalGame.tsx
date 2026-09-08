"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  PROJECTS_DATA,
  OSS_CONTRIBUTIONS,
  EXPERIENCE_TIMELINE,
  SKILL_STAGES,
  CONTACT_INFO,
  BIO_TEXT,
} from "@/data/portfolio";

interface HistoryEntry {
  id: string;
  cwd: string;
  command: string;
  output: React.ReactNode;
}

export function TerminalGame({ onExitToGui }: { onExitToGui: () => void }) {
  const [cwd, setCwd] = useState<string>("~");
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Stiff terminal setup: lock body scroll and jump to top instantly
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    setHistory([
      {
        id: "init",
        cwd: "~",
        command: "init --session",
        output: (
          <div className="text-neutral-400 text-xs pb-1 space-y-1">
            <div className="text-white font-bold">
              Yuvraj Singh — Developer Terminal Workspace [v2.4.0]
            </div>
            <div>
              Type <span className="text-white font-bold underline">ls</span> to browse contents, <span className="text-white font-bold underline">help</span> for commands, or <span className="text-white font-bold underline">exit</span> for visual portfolio.
            </div>
          </div>
        ),
      },
    ]);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  // Auto-scroll log stream as commands execute
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  // Grep search helper across portfolio content
  const performGrep = (query: string): React.ReactNode => {
    if (!query) {
      return <div className="text-neutral-500 text-xs">Usage: grep &lt;keyword&gt; (e.g. grep redis, grep python, grep rag)</div>;
    }

    const q = query.toLowerCase();
    const results: { file: string; line: string }[] = [];

    // Search in bio
    BIO_TEXT.split("\n").forEach((line) => {
      if (line.toLowerCase().includes(q)) {
        results.push({ file: "bio.txt", line: line.trim() });
      }
    });

    // Search in projects
    PROJECTS_DATA.forEach((p) => {
      if (p.title.toLowerCase().includes(q) || p.tech.some((t) => t.toLowerCase().includes(q))) {
        results.push({ file: `projects/${p.id}.md`, line: `[${p.title}] Tech: ${p.tech.join(", ")}` });
      }
      p.bullets.forEach((b) => {
        if (b.toLowerCase().includes(q)) {
          results.push({ file: `projects/${p.id}.md`, line: b });
        }
      });
    });

    // Search in experience
    EXPERIENCE_TIMELINE.forEach((e) => {
      if (e.company.toLowerCase().includes(q) || e.role.toLowerCase().includes(q)) {
        results.push({ file: "experience.md", line: `${e.company} (${e.role}, ${e.period})` });
      }
      e.bullets.forEach((b) => {
        if (b.toLowerCase().includes(q)) {
          results.push({ file: "experience.md", line: b });
        }
      });
    });

    // Search in skills
    SKILL_STAGES.forEach((s) => {
      s.skills.forEach((sk) => {
        if (sk.toLowerCase().includes(q)) {
          results.push({ file: "skills.json", line: `Category: ${s.title} -> ${sk}` });
        }
      });
    });

    if (results.length === 0) {
      return <div className="text-neutral-500 text-xs">grep: '{query}': No matching lines found in portfolio files.</div>;
    }

    return (
      <div className="space-y-1 text-xs">
        <div className="text-neutral-400 font-bold border-b border-neutral-900 pb-1">
          grep: Found {results.length} occurrences for '{query}':
        </div>
        {results.map((r, i) => (
          <div key={i} className="flex items-start gap-2 leading-relaxed">
            <span className="text-neutral-500 font-semibold shrink-0">{r.file}:</span>
            <span className="text-neutral-300">{r.line}</span>
          </div>
        ))}
      </div>
    );
  };

  const executeCommand = (cmdText: string) => {
    const raw = cmdText.trim();
    if (!raw) return;

    setCommandHistory((prev) => [...prev, raw]);
    setHistoryIndex(-1);

    const parts = raw.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ").trim();

    let output: React.ReactNode = null;
    let nextCwd = cwd;

    switch (cmd) {
      case "help":
      case "?":
      case "-h":
      case "--help":
        output = (
          <div className="space-y-2.5 text-xs">
            <div className="text-white font-bold border-b border-neutral-800 pb-1">
              [SHELL COMMAND DIRECTORY]
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 leading-relaxed">
              <div>
                <span className="text-white font-bold">ls / dir</span>
                <span className="text-neutral-400 text-[11px]"> : List directory contents &amp; files</span>
              </div>
              <div>
                <span className="text-white font-bold">cd &lt;dir&gt;</span>
                <span className="text-neutral-400 text-[11px]"> : Change directory (e.g. `cd projects`, `cd ..`)</span>
              </div>
              <div>
                <span className="text-white font-bold">cat &lt;file&gt;</span>
                <span className="text-neutral-400 text-[11px]"> : View file content (e.g. `cat bio.txt`)</span>
              </div>
              <div>
                <span className="text-white font-bold">grep &lt;term&gt;</span>
                <span className="text-neutral-400 text-[11px]"> : Search portfolio content (e.g. `grep redis`)</span>
              </div>
              <div>
                <span className="text-white font-bold">tree</span>
                <span className="text-neutral-400 text-[11px]"> : Display full portfolio hierarchy tree</span>
              </div>
              <div>
                <span className="text-white font-bold">pwd</span>
                <span className="text-neutral-400 text-[11px]"> : Print current working directory</span>
              </div>
              <div>
                <span className="text-white font-bold">whoami</span>
                <span className="text-neutral-400 text-[11px]"> : Display developer profile summary</span>
              </div>
              <div>
                <span className="text-white font-bold">play</span>
                <span className="text-neutral-400 text-[11px]"> : Launch systems architecture challenge quiz</span>
              </div>
              <div>
                <span className="text-white font-bold">clear / cls</span>
                <span className="text-neutral-400 text-[11px]"> : Clear terminal screen</span>
              </div>
              <div>
                <span className="text-white font-bold">exit / gui</span>
                <span className="text-neutral-400 text-[11px]"> : Return to standard visual portfolio</span>
              </div>
            </div>
          </div>
        );
        break;

      case "pwd":
        output = <div className="text-neutral-300 text-xs">/home/yuvraj{cwd === "~" ? "" : cwd.replace("~", "")}</div>;
        break;

      case "tree":
        output = (
          <pre className="text-neutral-300 text-xs font-mono leading-relaxed whitespace-pre">
{`.
├── projects/
│   ├── openforge.md
│   ├── poshible-rag.md
│   ├── playwright-suite.md
│   ├── jobhermes-agent.md
│   ├── dealership-engine.md
│   └── qr-campaign-platform.md
├── systems/
│   ├── 01-poshible-rag-pipeline.arch
│   ├── 02-openforge-dual-router.arch
│   ├── 03-jobhermes-agent-loop.arch
│   └── 04-geospatial-routing.arch
├── experience.md
├── skills.json
├── bio.txt
├── oss_contributions.md
├── contact.sh
├── resume.pdf
└── quiz.exe`}
          </pre>
        );
        break;

      case "cd":
        if (!arg || arg === "~" || arg === "/") {
          nextCwd = "~";
          setCwd("~");
        } else if (arg === ".." || arg === "../") {
          nextCwd = "~";
          setCwd("~");
        } else if (arg === "projects" || arg === "./projects" || arg === "projects/") {
          nextCwd = "~/projects";
          setCwd("~/projects");
        } else if (arg === "systems" || arg === "./systems" || arg === "systems/") {
          nextCwd = "~/systems";
          setCwd("~/systems");
        } else {
          output = <div className="text-neutral-400 text-xs">cd: no such directory: {arg}. Try 'ls' to see directories.</div>;
        }
        break;

      case "ls":
      case "dir":
        if (cwd === "~/projects" || arg === "projects" || arg === "projects/") {
          output = (
            <div className="space-y-2 text-xs">
              <div className="text-neutral-500 font-semibold border-b border-neutral-900 pb-1">
                Contents of ~/projects: (use `cat &lt;file&gt;` to read)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {PROJECTS_DATA.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => executeCommand(`cat projects/${p.id}.md`)}
                    className="flex items-center justify-between text-left p-2 border border-neutral-800 hover:border-neutral-500 bg-neutral-950 transition-colors cursor-pointer"
                  >
                    <span className="text-white font-bold">📄 {p.id}.md</span>
                    <span className="text-[10px] text-neutral-400 uppercase">{p.categoryTag}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        } else if (cwd === "~/systems" || arg === "systems" || arg === "systems/") {
          output = (
            <div className="space-y-2 text-xs">
              <div className="text-neutral-500 font-semibold border-b border-neutral-900 pb-1">
                Contents of ~/systems: (use `cat &lt;file&gt;` to inspect architecture flow)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => executeCommand("cat systems/01-poshible-rag-pipeline.arch")}
                  className="p-2 border border-neutral-800 hover:border-neutral-500 text-left bg-neutral-950 cursor-pointer"
                >
                  <span className="text-white font-bold">⚙️ 01-poshible-rag-pipeline.arch</span>
                </button>
                <button
                  onClick={() => executeCommand("cat systems/02-openforge-dual-router.arch")}
                  className="p-2 border border-neutral-800 hover:border-neutral-500 text-left bg-neutral-950 cursor-pointer"
                >
                  <span className="text-white font-bold">⚙️ 02-openforge-dual-router.arch</span>
                </button>
                <button
                  onClick={() => executeCommand("cat systems/03-jobhermes-agent-loop.arch")}
                  className="p-2 border border-neutral-800 hover:border-neutral-500 text-left bg-neutral-950 cursor-pointer"
                >
                  <span className="text-white font-bold">⚙️ 03-jobhermes-agent-loop.arch</span>
                </button>
                <button
                  onClick={() => executeCommand("cat systems/04-geospatial-routing.arch")}
                  className="p-2 border border-neutral-800 hover:border-neutral-500 text-left bg-neutral-950 cursor-pointer"
                >
                  <span className="text-white font-bold">⚙️ 04-geospatial-routing.arch</span>
                </button>
              </div>
            </div>
          );
        } else {
          output = (
            <div className="space-y-2 text-xs">
              <div className="text-neutral-500 font-semibold border-b border-neutral-900 pb-1">
                PORTFOLIO TABLE OF CONTENTS [~]:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <button
                  onClick={() => executeCommand("cd projects")}
                  className="p-2.5 border border-neutral-800 bg-neutral-950 hover:border-neutral-500 text-left transition-colors space-y-1 cursor-pointer"
                >
                  <div className="text-white font-bold">📁 projects/</div>
                  <div className="text-[11px] text-neutral-400">6 production systems (cd projects | ls projects)</div>
                </button>

                <button
                  onClick={() => executeCommand("cd systems")}
                  className="p-2.5 border border-neutral-800 bg-neutral-950 hover:border-neutral-500 text-left transition-colors space-y-1 cursor-pointer"
                >
                  <div className="text-white font-bold">📁 systems/</div>
                  <div className="text-[11px] text-neutral-400">4 architecture pipelines (cd systems | ls systems)</div>
                </button>

                <button
                  onClick={() => executeCommand("cat experience.md")}
                  className="p-2.5 border border-neutral-800 bg-neutral-950 hover:border-neutral-500 text-left transition-colors space-y-1 cursor-pointer"
                >
                  <div className="text-white font-bold">📄 experience.md</div>
                  <div className="text-[11px] text-neutral-400">Career progression (cat experience.md)</div>
                </button>

                <button
                  onClick={() => executeCommand("cat skills.json")}
                  className="p-2.5 border border-neutral-800 bg-neutral-950 hover:border-neutral-500 text-left transition-colors space-y-1 cursor-pointer"
                >
                  <div className="text-white font-bold">📄 skills.json</div>
                  <div className="text-[11px] text-neutral-400">5-stage competency matrix (cat skills.json)</div>
                </button>

                <button
                  onClick={() => executeCommand("cat bio.txt")}
                  className="p-2.5 border border-neutral-800 bg-neutral-950 hover:border-neutral-500 text-left transition-colors space-y-1 cursor-pointer"
                >
                  <div className="text-white font-bold">📄 bio.txt</div>
                  <div className="text-[11px] text-neutral-400">Developer background (cat bio.txt | whoami)</div>
                </button>

                <button
                  onClick={() => executeCommand("cat contact.sh")}
                  className="p-2.5 border border-neutral-800 bg-neutral-950 hover:border-neutral-500 text-left transition-colors space-y-1 cursor-pointer"
                >
                  <div className="text-white font-bold">⚙️ contact.sh</div>
                  <div className="text-[11px] text-neutral-400">Email &amp; LinkedIn (cat contact.sh | ./contact.sh)</div>
                </button>

                <button
                  onClick={() => executeCommand("cat resume.pdf")}
                  className="p-2.5 border border-neutral-800 bg-neutral-950 hover:border-neutral-500 text-left transition-colors space-y-1 cursor-pointer"
                >
                  <div className="text-white font-bold">📦 resume.pdf</div>
                  <div className="text-[11px] text-neutral-400">Official PDF resume download</div>
                </button>

                <button
                  onClick={() => executeCommand("play")}
                  className="p-2.5 border border-neutral-700 bg-neutral-950 hover:border-white text-left transition-colors space-y-1 cursor-pointer"
                >
                  <div className="text-white font-bold">🎮 quiz.exe</div>
                  <div className="text-[11px] text-neutral-300">Systems architecture challenge game</div>
                </button>
              </div>
            </div>
          );
        }
        break;

      case "grep":
      case "search":
      case "find":
        const cleanQuery = parts
          .slice(1)
          .filter((p) => !p.startsWith("-"))
          .join(" ");
        output = performGrep(cleanQuery);
        break;

      case "cat":
      case "view":
      case "open":
      case "read":
        const target = arg.toLowerCase().replace(/^\.\//, "");
        
        if (target === "bio.txt" || target === "bio") {
          output = (
            <div className="border border-neutral-800 bg-[#0a0a0a] p-4 space-y-3 text-xs sm:text-sm leading-relaxed">
              <div className="text-white font-bold text-base border-b border-neutral-900 pb-2">
                Yuvraj Singh — Engineering Philosophy &amp; Background
              </div>
              <p className="text-neutral-200 whitespace-pre-line leading-relaxed">
                {BIO_TEXT}
              </p>
            </div>
          );
        } else if (target === "experience.md" || target === "experience" || target === "exp") {
          output = (
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="text-white font-bold border-b border-neutral-900 pb-1">
                CAREER PROGRESSION TIMELINE
              </div>
              {EXPERIENCE_TIMELINE.map((e) => (
                <div key={e.company} className="border border-neutral-800 bg-[#0a0a0a] p-4 space-y-2">
                  <div className="flex justify-between items-baseline border-b border-neutral-900 pb-1.5">
                    <span className="text-white font-bold text-sm">{e.company} <span className="text-neutral-400 text-xs font-normal">// {e.role}</span></span>
                    <span className="text-neutral-500 text-xs">{e.period}</span>
                  </div>
                  <ul className="space-y-1.5 text-neutral-300 leading-relaxed">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neutral-500 font-bold">&gt;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          );
        } else if (target === "skills.json" || target === "skills" || target === "stack") {
          output = (
            <div className="space-y-3 text-xs">
              <div className="text-white font-bold border-b border-neutral-900 pb-1">
                TECHNICAL COMPETENCY MATRIX
              </div>
              {SKILL_STAGES.map((st) => (
                <div key={st.title} className="border border-neutral-800 bg-[#0a0a0a] p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-white font-bold">{st.title}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {st.skills.map((sk) => (
                      <span key={sk} className="border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-neutral-300">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        } else if (target === "oss_contributions.md" || target === "oss") {
          output = (
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="text-white font-bold border-b border-neutral-900 pb-1">
                UPSTREAM OPEN SOURCE CONTRIBUTIONS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {OSS_CONTRIBUTIONS.map((oss) => (
                  <div key={oss.id} className="border border-neutral-800 bg-[#0a0a0a] p-4 space-y-2">
                    <div className="flex justify-between items-center gap-2">
                      <a href={oss.repoUrl} target="_blank" rel="noreferrer" className="text-white font-bold hover:underline truncate">
                        {oss.repo}
                      </a>
                      <div className="flex items-center gap-2 shrink-0">
                        {oss.prUrl && (
                          <a
                            href={oss.prUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="border border-white bg-white text-black px-2 py-0.5 text-xs font-bold hover:bg-neutral-200"
                          >
                            [view pr -&gt;]
                          </a>
                        )}
                        <span className="text-[10px] text-neutral-400 border border-neutral-800 px-1.5 py-0.5 bg-neutral-950">
                          MERGED
                        </span>
                      </div>
                    </div>
                    <p className="text-neutral-300">{oss.whatYouDid}</p>
                    <div className="text-neutral-500 text-xs border-t border-neutral-900 pt-1">
                      [Impact]: {oss.whyItMattered}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        } else if (target === "contact.sh" || target === "contact") {
          output = (
            <div className="border border-neutral-800 bg-[#0a0a0a] p-5 space-y-3 text-xs sm:text-sm">
              <div className="text-white font-bold text-base">[CONTACT PROTOCOL]</div>
              <p className="text-neutral-300">Available for Systems Engineering, Backend Architecture &amp; AI Consulting:</p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <a href={`mailto:${CONTACT_INFO.email}`} className="border border-white bg-white text-black px-3.5 py-1.5 font-bold hover:bg-neutral-200">
                  ✉️ {CONTACT_INFO.email}
                </a>
                <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="border border-neutral-700 bg-neutral-900 text-neutral-200 px-3.5 py-1.5 hover:border-neutral-400">
                  GitHub: yuvrajsingh2428
                </a>
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="border border-neutral-700 bg-neutral-900 text-neutral-200 px-3.5 py-1.5 hover:border-neutral-400">
                  LinkedIn: yuvrajsingh024
                </a>
                <a href={CONTACT_INFO.twitter} target="_blank" rel="noreferrer" className="border border-neutral-700 bg-neutral-900 text-neutral-200 px-3.5 py-1.5 hover:border-neutral-400">
                  X / Twitter: itsyuvrajx
                </a>
              </div>
            </div>
          );
        } else if (target === "resume.pdf" || target === "resume") {
          if (typeof window !== "undefined") {
            window.open("https://drive.google.com/uc?export=download&id=18ozkViRciZPbM-1pCSg03Kc7b2eVIoXO", "_blank");
          }
          output = <div className="text-white font-bold text-xs">Opening resume download link...</div>;
        } else {
          // Check if it's a project
          const cleanProjectKey = target.replace(/^projects\//, "").replace(/\.md$/, "");
          const matchProj = PROJECTS_DATA.find((p) => p.id === cleanProjectKey || p.id.includes(cleanProjectKey));

          if (matchProj) {
            output = (
              <div className="border border-neutral-800 bg-[#0a0a0a] p-5 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-start border-b border-neutral-900 pb-2">
                  <div>
                    <div className="text-[11px] text-neutral-500 uppercase font-semibold">{matchProj.categoryTag}</div>
                    <div className="text-white font-bold text-base">{matchProj.title}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {matchProj.liveUrl && (
                      <a
                        href={matchProj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-white bg-white text-black px-2.5 py-0.5 text-xs font-bold hover:bg-neutral-200"
                      >
                        [live demo -&gt;]
                      </a>
                    )}
                    {matchProj.repoUrl ? (
                      <a
                        href={matchProj.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-neutral-700 bg-neutral-900 px-3 py-0.5 text-xs text-white hover:bg-white hover:text-black"
                      >
                        [repo]
                      </a>
                    ) : (
                      !matchProj.liveUrl && (
                        <span className="text-[11px] text-neutral-500 border border-neutral-800 px-2 py-0.5">
                          [internal_prod]
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {matchProj.tech.map((t) => (
                    <span key={t} className="border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-xs text-neutral-400">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 text-neutral-300 pt-2 border-t border-neutral-900 leading-relaxed">
                  {matchProj.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neutral-500 font-bold">&gt;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          } else if (target.includes("poshible") || target.includes("01")) {
            output = (
              <div className="border border-neutral-800 bg-[#0a0a0a] p-4 space-y-2 text-xs sm:text-sm">
                <div className="text-white font-bold">1. POSHIBLE.AI — LEGAL RAG RETRIEVAL PIPELINE</div>
                <pre className="p-3 bg-black border border-neutral-900 font-mono text-xs overflow-x-auto whitespace-pre">
[PDF Docs: AWS S3] ──&gt; [1536d Chunks] ──&gt; [OpenSearch Cluster] ──&gt; [Hybrid K-NN Search] ──&gt; [GPT-4o] ──&gt; [Zod Schema]
                </pre>
                <div className="text-neutral-400 text-xs">
                  • 90% retrieval precision across 100+ legal documents · Resolved circular API loops (-60% server load).
                </div>
              </div>
            );
          } else if (target.includes("openforge") || target.includes("02")) {
            output = (
              <div className="border border-neutral-800 bg-[#0a0a0a] p-4 space-y-2 text-xs sm:text-sm">
                <div className="text-white font-bold">2. OPENFORGE — HYBRID DUAL-ENGINE AI ROUTER</div>
                <pre className="p-3 bg-black border border-neutral-900 font-mono text-xs overflow-x-auto whitespace-pre">
[GitHub GraphQL] ──&gt; [Knowledge Graph] ──&gt; [5-Factor Scorer 0-100] ──&gt; [Ollama (Local) / OpenRouter (Cloud)]
                </pre>
                <div className="text-neutral-400 text-xs">
                  • Pluggable provider abstraction for zero-cost dev and DeepSeek-V3 cloud production inference.
                </div>
              </div>
            );
          } else {
            output = <div className="text-neutral-400 text-xs">cat: {target}: File not found. Type 'ls' to see all available files.</div>;
          }
        }
        break;

      case "./contact.sh":
        output = (
          <div className="border border-neutral-800 bg-[#0a0a0a] p-4 space-y-2 text-xs sm:text-sm">
            <div className="text-white font-bold">Executing ./contact.sh:</div>
            <div>Email: <a href={`mailto:${CONTACT_INFO.email}`} className="text-white underline">{CONTACT_INFO.email}</a></div>
            <div>GitHub: <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="text-white underline">{CONTACT_INFO.github}</a></div>
            <div>LinkedIn: <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="text-white underline">{CONTACT_INFO.linkedin}</a></div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="border border-neutral-800 bg-[#0a0a0a] p-4 space-y-2 text-xs sm:text-sm">
            <div className="text-white font-bold text-base">Yuvraj Singh</div>
            <div className="text-neutral-300">Backend Systems &amp; AI Platforms Engineer · Revolt Motors</div>
            <p className="text-neutral-400 text-xs leading-relaxed pt-1">
              Building scalable backend systems, Legal RAG platforms, and automation test infrastructure.
            </p>
          </div>
        );
        break;

      case "play":
      case "./quiz.exe":
      case "quiz":
      case "game":
        output = (
          <div className="border border-white/20 bg-[#0a0a0a] p-5 space-y-3.5 text-xs sm:text-sm">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
              <span className="text-white font-bold">🎮 SYSTEMS ARCHITECTURE CHALLENGE</span>
              <span className="text-neutral-400 text-xs">[CHALLENGE MODE]</span>
            </div>
            <p className="text-neutral-200 font-bold">
              Q: How did Yuvraj reduce external Google Maps API costs by &gt;70% in the Dealership Engine?
            </p>
            <div className="space-y-2 pt-1">
              <button
                onClick={() => executeCommand("answer A")}
                className="block w-full text-left p-2.5 border border-neutral-800 hover:border-white hover:bg-neutral-900 transition-colors cursor-pointer"
              >
                A) Multi-tier Redis distance matrix caching with PostgreSQL spatial queries
              </button>
              <button
                onClick={() => executeCommand("answer B")}
                className="block w-full text-left p-2.5 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-colors cursor-pointer"
              >
                B) Client-side localStorage coordinate storage
              </button>
              <button
                onClick={() => executeCommand("answer C")}
                className="block w-full text-left p-2.5 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-colors cursor-pointer"
              >
                C) Unlimited un-cached API calls
              </button>
            </div>
          </div>
        );
        break;

      case "answer":
        if (arg.toUpperCase() === "A") {
          output = (
            <div className="border-l-2 border-white pl-3 py-1 text-xs text-white font-bold">
              ✓ Correct! Multi-tier Redis in-memory distance matrix caching prevented repeat Google Maps API hits.
            </div>
          );
        } else {
          output = (
            <div className="border-l-2 border-neutral-600 pl-3 py-1 text-xs text-neutral-400">
              ✗ Incorrect. The optimization was achieved via Redis distance matrix caching.
            </div>
          );
        }
        break;

      case "clear":
      case "cls":
        setHistory([]);
        setInput("");
        return;

      case "exit":
      case "quit":
      case "gui":
      case "portfolio":
        onExitToGui();
        return;

      default:
        output = (
          <div className="text-neutral-400 text-xs">
            zsh: command not found: <span className="text-white font-mono">{raw}</span>. Type <button onClick={() => executeCommand("help")} className="text-white underline font-bold cursor-pointer">help</button> or <button onClick={() => executeCommand("ls")} className="text-white underline font-bold cursor-pointer">ls</button>.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        cwd,
        command: raw,
        output,
      },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
      setHistoryIndex(nextIndex);
      setInput(commandHistory[commandHistory.length - 1 - nextIndex] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex] || "");
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = input.toLowerCase().trim();
      if (!current) return;
      const candidates = ["ls", "cd", "cat", "grep", "tree", "whoami", "pwd", "play", "clear", "exit", "bio.txt", "skills.json", "experience.md", "contact.sh", "resume.pdf"];
      const match = candidates.find((c) => c.startsWith(current));
      if (match) {
        setInput(match);
      }
    }
  };

  return (
    <div
      onClick={handleContainerClick}
      className="fixed inset-0 z-[999] bg-black text-neutral-300 font-mono p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden select-text"
    >
      {/* Top clean terminal title bar */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3 text-xs select-none shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-600"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-800"></span>
          <span className="ml-2 text-white font-bold">yuvraj@dev: {cwd}</span>
        </div>

        <button
          onClick={onExitToGui}
          className="text-xs border border-neutral-700 px-3 py-1 text-neutral-300 hover:text-white hover:border-white transition-colors bg-neutral-950 cursor-pointer"
        >
          [exit to portfolio]
        </button>
      </div>

      {/* Terminal History Log Stream with Inline Active Input Prompt */}
      <div className="flex-1 overflow-y-auto space-y-4 text-xs sm:text-sm pr-2 my-1 scrollbar-thin">
        {history.map((entry) => (
          <div key={entry.id} className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-neutral-500 font-bold">yuvraj@dev:{entry.cwd}$</span>
              <span className="text-white font-bold">{entry.command}</span>
            </div>
            {entry.output && <div className="pl-0 pt-0.5">{entry.output}</div>}
          </div>
        ))}

        {/* Active Input Prompt directly below last command output */}
        <div className="pt-1 flex items-center gap-2 text-xs sm:text-sm">
          <span className="text-neutral-500 font-bold shrink-0">yuvraj@dev:{cwd}$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-neutral-700 caret-white"
          />
        </div>

        <div ref={bottomRef} className="h-4" />
      </div>
    </div>
  );
}
