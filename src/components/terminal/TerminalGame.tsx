"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  PROJECTS_DATA,
  OSS_CONTRIBUTIONS,
  EXPERIENCE_TIMELINE,
  SKILL_STAGES,
  CONTACT_INFO,
  BIO_TEXT,
} from "@/data/portfolio";

interface HistoryItem {
  id: string;
  type: "command" | "response" | "system" | "project" | "systems" | "game";
  command?: string;
  content?: React.ReactNode;
}

const COMMAND_LIST = [
  { cmd: "help", desc: "Show available terminal commands" },
  { cmd: "ls", desc: "List portfolio directories and files" },
  { cmd: "whoami", desc: "Display developer bio & background" },
  { cmd: "projects", desc: "List all production systems & projects" },
  { cmd: "project <id>", desc: "Inspect a specific project (e.g. 'project openforge')" },
  { cmd: "systems", desc: "Inspect interactive system architecture pipelines" },
  { cmd: "experience", desc: "Display career timeline and employment history" },
  { cmd: "skills", desc: "Display full technical competency stack" },
  { cmd: "oss", desc: "List upstream open-source contributions" },
  { cmd: "contact", desc: "Show contact channels & social links" },
  { cmd: "resume", desc: "Download official PDF resume" },
  { cmd: "play", desc: "Start the Systems Architecture mini-game / quiz" },
  { cmd: "gui", desc: "Switch back to standard visual portfolio" },
  { cmd: "clear", desc: "Clear terminal screen" },
];

export function TerminalGame({ onExitToGui }: { onExitToGui: () => void }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [gameScore, setGameScore] = useState<number>(0);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize terminal on mount
  useEffect(() => {
    const welcomeId = Date.now().toString();
    setHistory([
      {
        id: welcomeId,
        type: "system",
        content: (
          <div className="space-y-3 border border-neutral-800 bg-[#050505] p-4 text-xs">
            <div className="text-white font-bold text-sm">
              🚀 YUVRAJ SINGH — INTERACTIVE TERMINAL SHELL v2.4.0
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Welcome to the gamified interactive developer terminal. Explore systems, run tests, inspect architecture pipelines, or launch developer challenges.
            </p>
            <div className="text-neutral-300">
              Type <span className="text-white font-bold bg-neutral-900 px-1 border border-neutral-700">help</span> to view all commands, or click any quick command chip below.
            </div>
          </div>
        ),
      },
    ]);
  }, []);

  // Auto-scroll to bottom on output update
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Keep input focused
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const executeCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    // Save to command history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(" ");
    const mainCmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ").toLowerCase();

    const cmdRecord: HistoryItem = {
      id: Math.random().toString(),
      type: "command",
      command: trimmed,
    };

    let responseItem: HistoryItem | null = null;

    switch (mainCmd) {
      case "help":
      case "?":
      case "-h":
      case "--help":
        responseItem = {
          id: Math.random().toString(),
          type: "response",
          content: (
            <div className="space-y-2 border-l-2 border-neutral-700 pl-3 py-1 text-xs">
              <div className="text-white font-bold">[AVAILABLE COMMANDS]</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pt-1">
                {COMMAND_LIST.map((c) => (
                  <div key={c.cmd} className="flex items-baseline gap-2">
                    <button
                      onClick={() => executeCommand(c.cmd.split(" ")[0])}
                      className="text-white font-bold hover:underline cursor-pointer text-left shrink-0"
                    >
                      {c.cmd.padEnd(14, " ")}
                    </button>
                    <span className="text-neutral-400 text-[11px]">// {c.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ),
        };
        break;

      case "ls":
      case "dir":
        responseItem = {
          id: Math.random().toString(),
          type: "response",
          content: (
            <div className="space-y-2 text-xs">
              <div className="text-neutral-500">Directory listing for ~/portfolio:</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                <button
                  onClick={() => executeCommand("projects")}
                  className="text-left text-neutral-300 hover:text-white font-bold"
                >
                  📁 projects/
                </button>
                <button
                  onClick={() => executeCommand("systems")}
                  className="text-left text-neutral-300 hover:text-white font-bold"
                >
                  📁 architecture/
                </button>
                <button
                  onClick={() => executeCommand("experience")}
                  className="text-left text-neutral-400 hover:text-white"
                >
                  📄 experience.log
                </button>
                <button
                  onClick={() => executeCommand("skills")}
                  className="text-left text-neutral-400 hover:text-white"
                >
                  📄 skills.json
                </button>
                <button
                  onClick={() => executeCommand("whoami")}
                  className="text-left text-neutral-400 hover:text-white"
                >
                  📄 bio.txt
                </button>
                <button
                  onClick={() => executeCommand("contact")}
                  className="text-left text-neutral-400 hover:text-white"
                >
                  ⚙️ contact.sh
                </button>
                <button
                  onClick={() => executeCommand("resume")}
                  className="text-left text-neutral-400 hover:text-white"
                >
                  📦 resume.pdf
                </button>
                <button
                  onClick={() => executeCommand("play")}
                  className="text-left text-white font-bold hover:underline"
                >
                  🎮 sys_quiz.exe
                </button>
              </div>
            </div>
          ),
        };
        break;

      case "whoami":
      case "bio":
      case "about":
      case "cat":
        if (arg === "bio.txt" || !arg || mainCmd === "whoami" || mainCmd === "bio" || mainCmd === "about") {
          responseItem = {
            id: Math.random().toString(),
            type: "response",
            content: (
              <div className="space-y-3 border border-neutral-800 bg-[#0a0a0a] p-4 text-xs sm:text-sm leading-relaxed">
                <div className="text-white font-bold text-base border-b border-neutral-900 pb-2">
                  Yuvraj Singh — Backend Systems & AI Platforms Engineer
                </div>
                <p className="text-neutral-300 whitespace-pre-line leading-relaxed">
                  {BIO_TEXT}
                </p>
                <div className="text-neutral-400 text-xs pt-2 border-t border-neutral-900 flex flex-wrap gap-4">
                  <span>Role: Software Engineer @ Revolt Motors</span>
                  <span>Location: IST (UTC+5:30)</span>
                  <span>Email: {CONTACT_INFO.email}</span>
                </div>
              </div>
            ),
          };
        } else if (arg === "skills.json") {
          executeCommand("skills");
          return;
        } else if (arg === "experience.log") {
          executeCommand("experience");
          return;
        } else if (arg === "contact.sh") {
          executeCommand("contact");
          return;
        } else if (arg === "resume.pdf") {
          executeCommand("resume");
          return;
        } else {
          responseItem = {
            id: Math.random().toString(),
            type: "response",
            content: <div className="text-neutral-400 text-xs">cat: {arg}: No such file. Try 'ls' to see files.</div>,
          };
        }
        break;

      case "projects":
      case "project":
        if (arg) {
          const match = PROJECTS_DATA.find(
            (p) => p.id.toLowerCase() === arg || p.title.toLowerCase().includes(arg)
          );
          if (match) {
            responseItem = {
              id: Math.random().toString(),
              type: "project",
              content: (
                <div className="border border-neutral-800 bg-[#0a0a0a] p-5 space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-start border-b border-neutral-900 pb-2">
                    <div>
                      <div className="text-[11px] text-neutral-500 uppercase font-semibold">{match.categoryTag}</div>
                      <div className="text-white font-bold text-base">{match.title}</div>
                    </div>
                    {match.repoUrl ? (
                      <a
                        href={match.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs text-white hover:bg-white hover:text-black"
                      >
                        [repo]
                      </a>
                    ) : (
                      <span className="text-[11px] text-neutral-500 border border-neutral-800 px-2 py-0.5">
                        [internal_prod]
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {match.tech.map((t) => (
                      <span key={t} className="border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-xs text-neutral-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2 text-neutral-300 pt-2 border-t border-neutral-900 leading-relaxed">
                    {match.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neutral-500 font-bold">&gt;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            };
          } else {
            responseItem = {
              id: Math.random().toString(),
              type: "response",
              content: (
                <div className="text-neutral-400 text-xs">
                  Project not found. Type <span className="text-white">projects</span> to view all valid names.
                </div>
              ),
            };
          }
        } else {
          responseItem = {
            id: Math.random().toString(),
            type: "response",
            content: (
              <div className="space-y-4">
                <div className="text-neutral-400 text-xs">
                  Found {PROJECTS_DATA.length} production systems. Click a project to inspect or type <span className="text-white font-bold">project &lt;id&gt;</span>:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {PROJECTS_DATA.map((proj, idx) => (
                    <button
                      key={proj.id}
                      onClick={() => executeCommand(`project ${proj.id}`)}
                      className="border border-neutral-800 bg-[#0a0a0a] p-4 text-left hover:border-neutral-500 transition-colors space-y-2 group cursor-pointer"
                    >
                      <div className="flex justify-between text-xs">
                        <span className="text-neutral-500 font-bold">[0{idx + 1}]</span>
                        <span className="text-neutral-400 text-[10px] uppercase">{proj.categoryTag}</span>
                      </div>
                      <div className="text-white font-bold text-sm group-hover:underline">
                        {proj.title}
                      </div>
                      <div className="flex flex-wrap gap-1 text-[10px] text-neutral-500">
                        {proj.tech.slice(0, 4).join(" · ")}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ),
          };
        }
        break;

      case "systems":
      case "arch":
      case "architecture":
        responseItem = {
          id: Math.random().toString(),
          type: "systems",
          content: (
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="text-neutral-400">
                System Architecture Diagrams &amp; Data Movement Specifications:
              </div>
              <div className="border border-neutral-800 bg-[#0a0a0a] p-4 space-y-3">
                <div className="text-white font-bold text-sm">1. POSHIBLE.AI — LEGAL RAG RETRIEVAL PIPELINE</div>
                <div className="p-3 bg-black border border-neutral-900 font-mono text-xs overflow-x-auto whitespace-pre">
                  [PDF Docs: S3] ──&gt; [1536d Chunks] ──&gt; [OpenSearch Vector Index] ──&gt; [Hybrid K-NN Search] ──&gt; [GPT-4o] ──&gt; [Zod Schema]
                </div>
                <div className="text-neutral-400 text-xs">
                  • Retrieval Precision: 90% across 100+ documents · Zero API loop bounds (-60% server load).
                </div>
              </div>
              <div className="border border-neutral-800 bg-[#0a0a0a] p-4 space-y-3">
                <div className="text-white font-bold text-sm">2. OPENFORGE — HYBRID DUAL-ENGINE AI ROUTER</div>
                <div className="p-3 bg-black border border-neutral-900 font-mono text-xs overflow-x-auto whitespace-pre">
                  [GitHub GraphQL] ──&gt; [Dependency Graph] ──&gt; [5-Factor Scorer 0-100] ──&gt; [Ollama (Local) / OpenRouter (Cloud)]
                </div>
                <div className="text-neutral-400 text-xs">
                  • 9 Monorepo domain packages · Pluggable provider abstraction for zero-cost dev and DeepSeek-V3 prod inference.
                </div>
              </div>
              <div className="border border-neutral-800 bg-[#0a0a0a] p-4 space-y-3">
                <div className="text-white font-bold text-sm">3. DEALERSHIP RECOMMENDATION — GEOSPATIAL CACHE</div>
                <div className="p-3 bg-black border border-neutral-900 font-mono text-xs overflow-x-auto whitespace-pre">
                  [Customer Pin Code] ──&gt; [Redis Distance Matrix Cache Hit?] ──(Miss)──&gt; [Google Maps API + PostgreSQL PostGIS]
                </div>
                <div className="text-neutral-400 text-xs">
                  • &gt;70% external Google Maps API savings · Sub-15ms cached response times.
                </div>
              </div>
            </div>
          ),
        };
        break;

      case "experience":
      case "exp":
      case "career":
        responseItem = {
          id: Math.random().toString(),
          type: "response",
          content: (
            <div className="space-y-4">
              <div className="text-white font-bold text-sm border-b border-neutral-900 pb-2">
                [CAREER PROGRESSION TIMELINE]
              </div>
              <div className="space-y-4">
                {EXPERIENCE_TIMELINE.map((e) => (
                  <div key={e.company} className="border border-neutral-800 bg-[#0a0a0a] p-4 space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between items-baseline border-b border-neutral-900 pb-1.5">
                      <div className="text-white font-bold">{e.company} <span className="text-neutral-400 text-xs font-normal">// {e.role}</span></div>
                      <span className="text-neutral-500 text-xs">{e.period}</span>
                    </div>
                    <ul className="space-y-1.5 text-neutral-300 leading-relaxed">
                      {e.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-neutral-500 font-bold">-&gt;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ),
        };
        break;

      case "skills":
      case "stack":
        responseItem = {
          id: Math.random().toString(),
          type: "response",
          content: (
            <div className="space-y-3">
              <div className="text-white font-bold text-sm border-b border-neutral-900 pb-2">
                [TECHNICAL COMPETENCIES MATRIX]
              </div>
              <div className="space-y-2">
                {SKILL_STAGES.map((st) => (
                  <div key={st.title} className="border border-neutral-800 bg-[#0a0a0a] p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <span className="text-white font-bold shrink-0">{st.title}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {st.skills.map((sk) => (
                        <span key={sk} className="border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-neutral-300 text-xs">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ),
        };
        break;

      case "oss":
        responseItem = {
          id: Math.random().toString(),
          type: "response",
          content: (
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="text-white font-bold border-b border-neutral-900 pb-2">
                [UPSTREAM OPEN SOURCE MERGED CONTRIBUTIONS]
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {OSS_CONTRIBUTIONS.map((oss) => (
                  <div key={oss.id} className="border border-neutral-800 bg-[#0a0a0a] p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <a href={oss.repoUrl} target="_blank" rel="noreferrer" className="text-white font-bold hover:underline">
                        {oss.repo}
                      </a>
                      <span className="text-[10px] text-neutral-400 border border-neutral-800 px-1.5 py-0.2 bg-neutral-950">
                        MERGED
                      </span>
                    </div>
                    <p className="text-neutral-300">{oss.whatYouDid}</p>
                    <div className="text-neutral-500 text-xs border-t border-neutral-900 pt-1">
                      [Impact]: {oss.whyItMattered}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ),
        };
        break;

      case "contact":
      case "ping":
        responseItem = {
          id: Math.random().toString(),
          type: "response",
          content: (
            <div className="border border-neutral-800 bg-[#0a0a0a] p-5 space-y-3 text-xs sm:text-sm">
              <div className="text-white font-bold text-base">[COMMUNICATION PROTOCOL]</div>
              <p className="text-neutral-300">
                Connect for full-time engineering roles, backend systems design, or AI consulting:
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="border border-white bg-white text-black px-3.5 py-1.5 font-bold hover:bg-neutral-200"
                >
                  ✉️ {CONTACT_INFO.email}
                </a>
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-neutral-700 bg-neutral-900 text-neutral-200 px-3.5 py-1.5 hover:border-neutral-400"
                >
                  GitHub: yuvrajsingh2428
                </a>
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-neutral-700 bg-neutral-900 text-neutral-200 px-3.5 py-1.5 hover:border-neutral-400"
                >
                  LinkedIn: yuvrajsingh024
                </a>
              </div>
            </div>
          ),
        };
        break;

      case "resume":
      case "curl":
        if (typeof window !== "undefined") {
          window.open("https://drive.google.com/uc?export=download&id=18ozkViRciZPbM-1pCSg03Kc7b2eVIoXO", "_blank");
        }
        responseItem = {
          id: Math.random().toString(),
          type: "response",
          content: <div className="text-white font-bold text-xs">Downloading official PDF resume from drive...</div>,
        };
        break;

      case "play":
      case "game":
      case "quiz":
        setActiveQuestion(0);
        responseItem = {
          id: Math.random().toString(),
          type: "game",
          content: (
            <div className="border border-white/20 bg-[#0a0a0a] p-5 space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                <span className="text-white font-bold">🎮 SYSTEMS ARCHITECTURE CHALLENGE</span>
                <span className="text-neutral-400">Score: {gameScore} pts</span>
              </div>
              <p className="text-neutral-200 font-bold">
                Q1: How did Yuvraj reduce external Google Maps API costs by &gt;70% in the Dealership Engine?
              </p>
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => {
                    setGameScore((s) => s + 10);
                    setHistory((prev) => [
                      ...prev,
                      {
                        id: Math.random().toString(),
                        type: "response",
                        content: (
                          <div className="text-white font-bold border-l-2 border-white pl-3 py-1">
                            ✓ Correct! (+10 pts) Multi-tier Redis in-memory distance matrix caching prevented repeated coordinate queries.
                          </div>
                        ),
                      },
                    ]);
                  }}
                  className="block w-full text-left p-2.5 border border-neutral-800 hover:border-white hover:bg-neutral-900 transition-colors"
                >
                  A) Multi-tier Redis distance matrix caching with spatial query pre-filtering
                </button>
                <button
                  onClick={() => {
                    setHistory((prev) => [
                      ...prev,
                      {
                        id: Math.random().toString(),
                        type: "response",
                        content: <div className="text-neutral-400 pl-3">✗ Incorrect. The optimization was built with Redis distance matrix caching.</div>,
                      },
                    ]);
                  }}
                  className="block w-full text-left p-2.5 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-colors"
                >
                  B) Hardcoding all pin-code distances into client-side cookies
                </button>
                <button
                  onClick={() => {
                    setHistory((prev) => [
                      ...prev,
                      {
                        id: Math.random().toString(),
                        type: "response",
                        content: <div className="text-neutral-400 pl-3">✗ Incorrect. Google Maps was preserved as a fallback behind Redis caching.</div>,
                      },
                    ]);
                  }}
                  className="block w-full text-left p-2.5 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-colors"
                >
                  C) Switching to unverified free map scraping
                </button>
              </div>
            </div>
          ),
        };
        break;

      case "gui":
      case "exit":
      case "portfolio":
        onExitToGui();
        return;

      case "clear":
      case "cls":
        setHistory([]);
        setInput("");
        return;

      default:
        responseItem = {
          id: Math.random().toString(),
          type: "response",
          content: (
            <div className="text-neutral-400 text-xs">
              Command not recognized: <span className="text-white font-mono">{trimmed}</span>. Type <button onClick={() => executeCommand("help")} className="text-white underline cursor-pointer font-bold">help</button> for the command directory.
            </div>
          ),
        };
    }

    setHistory((prev) => [...prev, cmdRecord, ...(responseItem ? [responseItem] : [])]);
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
      const match = COMMAND_LIST.find((c) => c.cmd.startsWith(current));
      if (match) {
        setInput(match.cmd.split(" ")[0]);
      }
    }
  };

  return (
    <div
      onClick={handleContainerClick}
      className="min-h-[85vh] flex flex-col justify-between border border-neutral-800 bg-black font-mono text-neutral-300 p-4 sm:p-6 select-text shadow-2xl relative"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4 text-xs select-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-600"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-800"></span>
          <span className="ml-2 text-white font-bold">TERMINAL REPL — GAMIFIED SHELL</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => executeCommand("help")}
            className="text-[11px] border border-neutral-800 px-2 py-0.5 hover:border-neutral-500 hover:text-white transition-colors bg-neutral-950"
          >
            [HELP]
          </button>
          <button
            onClick={onExitToGui}
            className="text-[11px] border border-white bg-white text-black px-2.5 py-0.5 font-bold hover:bg-neutral-200 transition-colors"
          >
            [EXIT TO GUI]
          </button>
        </div>
      </div>

      {/* Quick interactive command buttons */}
      <div className="flex flex-wrap items-center gap-1.5 pb-4 border-b border-neutral-900 text-xs">
        <span className="text-neutral-500 text-[11px] mr-1">QUICK CMDS:</span>
        {["help", "whoami", "projects", "systems", "experience", "skills", "oss", "contact", "play", "clear"].map(
          (cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2 py-0.5 border border-neutral-800 hover:border-neutral-400 text-neutral-400 hover:text-white transition-colors bg-neutral-950 text-[11px]"
            >
              ${cmd}
            </button>
          )
        )}
      </div>

      {/* Terminal History / Stream */}
      <div className="flex-1 space-y-4 py-4 overflow-y-auto max-h-[62vh]">
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            {item.type === "command" && (
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-neutral-500 font-bold">yuvraj@dev:~$</span>
                <span className="text-white font-bold">{item.command}</span>
              </div>
            )}
            {item.content && <div className="pt-1">{item.content}</div>}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Line */}
      <div className="pt-3 border-t border-neutral-800 flex items-center gap-2 text-xs sm:text-sm">
        <span className="text-neutral-500 font-bold shrink-0">yuvraj@dev:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          placeholder="Type 'help', 'projects', 'systems', 'play' or tab to complete..."
          className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-neutral-700 caret-white"
        />
        <button
          onClick={() => executeCommand(input)}
          className="border border-neutral-700 px-3 py-1 text-xs text-neutral-300 hover:text-white hover:border-neutral-400"
        >
          EXEC
        </button>
      </div>
    </div>
  );
}
