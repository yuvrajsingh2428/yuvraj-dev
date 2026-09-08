"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Activity,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Server,
  Database,
  ShieldCheck,
  Play,
  RotateCcw,
} from "lucide-react";
import { Badge } from "./badge";

export function SystemsCockpit() {
  const [activeTab, setActiveTab] = useState<"architecture" | "telemetry" | "terminal">("architecture");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "[SYSTEM] OpenForge engine initialized in monorepo root",
    "[RAG] Connecting OpenSearch vector index (dim=1536)... OK",
    "[AI] Dual LLM router: Provider switched to local Ollama (qwen3:8b)",
    "[CACHE] Redis pin-code distance matrix loaded (hits: 94.2%)",
    "[DAEMON] JobHermes autonomous agent: WAL-mode verified (3 active cron tasks)",
    "Ready. Click 'Run Engine Pipeline' to trigger live synthetic trace.",
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const [packetStep, setPacketStep] = useState(0);

  // Simulated live metrics
  const [metrics, setMetrics] = useState({
    p99: 14.2,
    qps: 468,
    cacheHit: 94.6,
    activeNodes: 6,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        p99: +(12 + Math.random() * 4).toFixed(1),
        qps: Math.floor(450 + Math.random() * 40),
        cacheHit: +(93.8 + Math.random() * 1.5).toFixed(1),
        activeNodes: 6,
      }));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const triggerLiveRun = () => {
    if (isRunning) return;
    setIsRunning(true);
    setPacketStep(1);

    const steps = [
      "⚡ [01/04] Ingesting legal PDF chunk → generating 1536-dim vector embedding",
      "🔍 [02/04] K-NN Hybrid Search query executed across OpenSearch index (11.8ms)",
      "🤖 [03/04] DeepSeek inference routed via OpenRouter (prompt token validation: PASS)",
      "✅ [04/04] Runtime Zod schema validated → 0 infinite loops. Response emitted in 184ms",
    ];

    steps.forEach((log, index) => {
      setTimeout(() => {
        setPacketStep(index + 2);
        setTerminalOutput((prev) => [...prev.slice(-7), log]);
        if (index === steps.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 600);
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-4">
      {/* Outer Shell with glowing neon border */}
      <div className="relative rounded-3xl p-1 bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-purple-500/30 shadow-[0_0_35px_rgba(0,242,254,0.15)]">
        <div className="relative rounded-[22px] bg-[#090d1f]/95 backdrop-blur-2xl border border-white/[0.08] overflow-hidden">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.07] bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/70 border border-rose-400/40" />
              <span className="w-3 h-3 rounded-full bg-amber-500/70 border border-amber-400/40" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/70 border border-emerald-400/40" />
              <span className="ml-3 font-mono text-xs text-slate-400 font-medium">
                engine.platform.telemetry
              </span>
            </div>

            {/* Interactive Mode Tabs */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/[0.06] font-mono text-xs">
              <button
                onClick={() => setActiveTab("architecture")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
                  activeTab === "architecture"
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-[#00f2fe] border border-cyan-500/40 font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Live Pipeline</span>
              </button>

              <button
                onClick={() => setActiveTab("telemetry")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
                  activeTab === "telemetry"
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-[#00f2fe] border border-cyan-500/40 font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Telemetry</span>
              </button>

              <button
                onClick={() => setActiveTab("terminal")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
                  activeTab === "terminal"
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-[#00f2fe] border border-cyan-500/40 font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Console</span>
              </button>
            </div>
          </div>

          {/* Tab Content Area */}
          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {activeTab === "architecture" && (
                <motion.div
                  key="arch"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-white flex items-center gap-2">
                        <span>Autonomous Data & AI Flow Simulation</span>
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f2fe]" />
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 font-mono">
                        Vector search + Dual-LLM routing + Schema validation in action
                      </p>
                    </div>

                    <button
                      onClick={triggerLiveRun}
                      disabled={isRunning}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-200 font-mono text-xs font-semibold hover:text-white shadow-[0_0_16px_rgba(0,242,254,0.2)] transition-all disabled:opacity-50 cursor-pointer shrink-0"
                    >
                      <Play className="w-3.5 h-3.5 text-[#00f2fe]" />
                      <span>{isRunning ? "Running Pipeline..." : "Run Engine Pipeline"}</span>
                    </button>
                  </div>

                  {/* Flow Stages */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { title: "Ingest", sub: "PDF Chunker", metric: "100+ Docs", icon: Database },
                      { title: "Vectorize", sub: "OpenSearch", metric: "1536-dim", icon: Cpu },
                      { title: "LLM Inference", sub: "DeepSeek / Ollama", metric: "Local/Cloud", icon: Server },
                      { title: "Contract Validation", sub: "Zod Schema", metric: "0 API Loops", icon: ShieldCheck },
                    ].map((step, idx) => {
                      const Icon = step.icon;
                      const isHighlighted = isRunning && packetStep === idx + 1;
                      return (
                        <div
                          key={step.title}
                          className={`relative p-4 rounded-2xl border transition-all duration-300 ${
                            isHighlighted
                              ? "bg-cyan-500/20 border-cyan-400 shadow-[0_0_24px_rgba(0,242,254,0.4)] scale-[1.03]"
                              : "bg-white/[0.025] border-white/[0.08]"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono text-[10px] text-cyan-400/80 font-bold">
                              PHASE 0{idx + 1}
                            </span>
                            <Icon className={`w-4 h-4 ${isHighlighted ? "text-[#00f2fe]" : "text-slate-400"}`} />
                          </div>
                          <div className="font-bold text-sm text-white">{step.title}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{step.sub}</div>
                          <div className="mt-3 pt-2 border-t border-white/[0.06] font-mono text-[11px] text-cyan-300/80">
                            {step.metric}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Mini Execution Log Stream */}
                  <div className="bg-black/60 rounded-xl p-3.5 border border-white/[0.06] font-mono text-xs text-slate-300 flex items-center justify-between">
                    <div className="flex items-center gap-2 truncate pr-2">
                      <Zap className="w-3.5 h-3.5 text-[#00f2fe] shrink-0" />
                      <span className="truncate">{terminalOutput[terminalOutput.length - 1]}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 shrink-0">status: OK</span>
                  </div>
                </motion.div>
              )}

              {activeTab === "telemetry" && (
                <motion.div
                  key="telem"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                      <span className="text-xs font-mono text-slate-400">p99 Latency</span>
                      <div className="text-2xl font-extrabold text-[#00f2fe] font-mono">
                        {metrics.p99}ms
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono">● Low jitter</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                      <span className="text-xs font-mono text-slate-400">Throughput</span>
                      <div className="text-2xl font-extrabold text-violet-400 font-mono">
                        {metrics.qps} qps
                      </div>
                      <span className="text-[10px] text-cyan-400 font-mono">● Auto-scaled</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                      <span className="text-xs font-mono text-slate-400">Cache Hit Rate</span>
                      <div className="text-2xl font-extrabold text-cyan-300 font-mono">
                        {metrics.cacheHit}%
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">Redis L1 + L2</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                      <span className="text-xs font-mono text-slate-400">Node Cluster</span>
                      <div className="text-2xl font-extrabold text-white font-mono">
                        {metrics.activeNodes} / 6
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono">● 100% Healthy</span>
                    </div>
                  </div>

                  {/* Architecture Telemetry Bars */}
                  <div className="space-y-3 p-4 rounded-2xl bg-black/40 border border-white/[0.06] font-mono text-xs">
                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>OpenSearch Vector Hybrid Retrieval Precision</span>
                        <span className="text-[#00f2fe]">90.4%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-[90%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Google Maps Distance API Savings (Redis Distance Matrix)</span>
                        <span className="text-violet-400">72.8%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full w-[73%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>JobHermes Concurrency Protection (3 max, 1.5s delay)</span>
                        <span className="text-emerald-400">100% (Zero Bot Bans)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[100%]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "terminal" && (
                <motion.div
                  key="term"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl bg-black/75 border border-white/[0.08] p-4 font-mono text-xs text-slate-300 space-y-2 h-56 overflow-y-auto no-scrollbar"
                >
                  <div className="text-cyan-400 font-semibold pb-2 border-b border-white/[0.08] flex items-center justify-between">
                    <span>yuvraj@systems-cluster:~$ ./telemetry-stream</span>
                    <button
                      onClick={() => setTerminalOutput(["Logs flushed. Ready."])}
                      className="text-[10px] text-slate-500 hover:text-slate-300 flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>clear</span>
                    </button>
                  </div>
                  {terminalOutput.map((line, i) => (
                    <div key={i} className="leading-relaxed">
                      <span className="text-slate-500 mr-2">&gt;</span>
                      <span className={line.startsWith("✅") ? "text-emerald-400" : line.startsWith("⚡") ? "text-[#00f2fe]" : "text-slate-300"}>
                        {line}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center gap-1 text-[#00f2fe] pt-1">
                    <span>&gt;</span>
                    <span className="w-2 h-4 bg-cyan-400 animate-pulse" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
