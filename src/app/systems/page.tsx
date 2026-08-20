"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { Card3D } from "@/components/ui/Card3D";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  Layers,
  Server,
  Activity,
} from "lucide-react";

interface FlowNode {
  id: string;
  label: string;
  sublabel: string;
  tech: string;
  deepDive: string;
}

interface ArchitectureDiagram {
  id: string;
  title: string;
  badge: string;
  description: string;
  tradeoffNote: string;
  flow: FlowNode[];
}

const DIAGRAMS: ArchitectureDiagram[] = [
  {
    id: "rag-pipeline",
    title: "1. Poshible.ai — PDF Legal RAG Pipeline",
    badge: "90% Precision • 500+ daily queries",
    description: "Multi-stage vector ingestion and semantic retrieval pipeline serving 500+ daily queries at 95% response accuracy with strict schema validation.",
    tradeoffNote: "Self-hosted OpenSearch for vector embeddings instead of managed SaaS vector DBs, keeping infrastructure costs near zero while maintaining 90% retrieval precision.",
    flow: [
      { id: "pdf", label: "PDF Documents", sublabel: "100+ Legal Specs", tech: "AWS S3", deepDive: "Ingests 100+ POSH Act legal PDF compliance documents into AWS S3 buckets with automated chunking." },
      { id: "embed", label: "Vector Embeddings", sublabel: "Chunks & Indexing", tech: "OpenSearch", deepDive: "Converts text chunks into dense 1536-dimensional embeddings indexed inside OpenSearch cluster." },
      { id: "search", label: "Hybrid Vector Search", sublabel: "K-NN Retrieval", tech: "REST API", deepDive: "Executes K-NN vector search + keyword scoring, achieving 90% retrieval precision." },
      { id: "llm", label: "LLM Completion", sublabel: "POSH Act Q&A", tech: "OpenAI GPT-4o", deepDive: "Context-bounded prompt injection generating legally accurate Q&A responses." },
      { id: "validate", label: "Schema Validation", sublabel: "Zero API Loops", tech: "Zod Schema", deepDive: "Runtime Zod validation caps query limits and resolved infinite API loops (60% load reduction)." },
    ],
  },
  {
    id: "openforge-engine",
    title: "2. OpenForge ⚒️ — 5-Factor Issue Scorer & Dual AI Engine",
    badge: "9 Monorepo Packages • Local / Cloud Dual LLM",
    description: "Determines repository health signals, scores GitHub issues on a 5-factor scale (0-100), and routes AI inference seamlessly between offline Ollama and cloud OpenRouter.",
    tradeoffNote: "Pluggable provider abstraction allows zero-cost local development via Ollama (qwen3:8b) while supporting DeepSeek-V3 via OpenRouter in production.",
    flow: [
      { id: "graphql", label: "GitHub GraphQL", sublabel: "Issue & PR Data", tech: "GitHub API", deepDive: "Fetches issue metadata, labels, commit activity, and maintainer participation." },
      { id: "graph", label: "Knowledge Graph", sublabel: "Dependency Mapping", tech: "TypeScript", deepDive: "Maps module dependencies and architectural coupling across repository packages." },
      { id: "scorer", label: "5-Factor Scorer", sublabel: "0-100 Score Metric", tech: "Vitest Tested", deepDive: "Deterministic algorithm scoring Learning Impact, AI Relevance, Maintainer Friendliness & Merge Prob." },
      { id: "router", label: "Dual LLM Router", sublabel: "Provider Switcher", tech: "Ollama / OpenRouter", deepDive: "Switches dynamically between local zero-cost Ollama (qwen3:8b) and OpenRouter (deepseek-v3)." },
      { id: "roadmap", label: "AI Roadmap", sublabel: "Contribution Plan", tech: "Next.js 16", deepDive: "Generates step-by-step contribution guides, risk assessments, and file walkthroughs." },
    ],
  },
  {
    id: "jobhermes-agent",
    title: "3. JobHermes — Autonomous Agent Loop",
    badge: "Daily 9 AM IST • WAL-mode Storage",
    description: "Headless daemon agent running daily scheduled jobs to scrape career listings, evaluate 6-dimensional match relevance, and generate ATS-tailored resume packs.",
    tradeoffNote: "Enforced rate-limiting (3 concurrent requests, 1.5s delay) to ensure respectful scraping behavior without triggering bot blocks.",
    flow: [
      { id: "cron", label: "node-cron Schedule", sublabel: "9 AM IST Trigger", tech: "Daemon Loop", deepDive: "Fires daily CRON job at 9 AM IST with zero manual intervention required." },
      { id: "scraper", label: "TinyFetch Scraper", sublabel: "3 Concurrent Max", tech: "Playwright", deepDive: "HTTP client with retry logic, rate limiting (3 concurrent, 1.5s delay) to avoid anti-bot blocks." },
      { id: "scorer", label: "6-D Match Scorer", sublabel: "Weighted Ranking", tech: "GPT-4o API", deepDive: "Scores 6 dimensions: Skill (30), Title (20), Location (15), Experience (15), Salary (10), Prestige (10)." },
      { id: "storage", label: "WAL Storage", sublabel: "Local DB Persistence", tech: "SQLite WAL", deepDive: "High-concurrency SQLite WAL-mode database storing application logs and candidate scores." },
      { id: "reports", label: "HTML Pack", sublabel: "Tailored Resumes", tech: "Dark-Theme Report", deepDive: "Generates dark-themed HTML score charts and on-demand GPT-4o ATS-customized resumes." },
    ],
  },
  {
    id: "geospatial-routing",
    title: "4. Dealership Recommendation Engine — Geospatial Routing",
    badge: "70%+ Maps API Savings • Sub-second Latency",
    description: "Customer pin-code distance calculation engine with multi-tier Redis distance matrix caching and PostgreSQL geospatial spatial queries.",
    tradeoffNote: "Multi-tier caching prevents repeated expensive Google Maps distance matrix API calls for identical pin-code pairs.",
    flow: [
      { id: "pincode", label: "Customer Pin Code", sublabel: "Location Input", tech: "REST Request", deepDive: "Accepts customer postal code and retrieves spatial coordinates." },
      { id: "cache", label: "Redis Cache Layer", sublabel: "Distance Matrix Hit", tech: "Redis In-Memory", deepDive: "Checks in-memory Redis distance matrix; if hit, returns sub-millisecond distance." },
      { id: "spatial", label: "Spatial Queries", sublabel: "Geographic Radius", tech: "PostgreSQL", deepDive: "Performs PostGIS spatial queries to filter dealerships within radial distance." },
      { id: "fallback", label: "Google Maps API", sublabel: "Cache Miss Fallback", tech: "Google Distance API", deepDive: "On cache miss, queries Google Distance Matrix API and updates Redis cache." },
      { id: "match", label: "Matched Dealership", sublabel: "Sub-second Result", tech: "JSON API", deepDive: "Returns ranked dealership recommendations with exact distance and estimated drive times." },
    ],
  },
];

export default function SystemsPage() {
  const [selectedNodes, setSelectedNodes] = useState<{ [diagramId: string]: string }>({
    "rag-pipeline": "pdf",
    "openforge-engine": "graphql",
    "jobhermes-agent": "cron",
    "geospatial-routing": "pincode",
  });

  const handleStepClick = (diagramId: string, nodeId: string) => {
    setSelectedNodes((prev) => ({ ...prev, [diagramId]: nodeId }));
  };

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
          <span>Interactive 3D Visualizer</span>
        </motion.div>

        <TextReveal
          lines={["Interactive System Architecture Diagrams"]}
          lineClassName="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          delay={0.1}
        />

        <TextReveal
          lines={[
            "Click any node in the flow diagrams below to inspect technical implementation details,",
            "tradeoff rationales, and data movement specifications.",
          ]}
          lineClassName="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed"
          delay={0.25}
        />
      </section>

      {/* Diagrams Display with Interactive Nodes */}
      <section className="space-y-12">
        {DIAGRAMS.map((diag) => {
          const selectedNodeId = selectedNodes[diag.id] || diag.flow[0].id;
          const activeNodeData = diag.flow.find((n) => n.id === selectedNodeId) || diag.flow[0];

          return (
            <Card3D key={diag.id} maxTilt={4} className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                    {diag.title}
                  </h2>
                  <Badge
                    variant="outline"
                    className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-mono text-xs py-1"
                  >
                    {diag.badge}
                  </Badge>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {diag.description}
                </p>
              </div>

              {/* Interactive Flow Chain */}
              <div className="py-2 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-3 min-w-[700px]">
                  {diag.flow.map((node, nIdx) => {
                    const isLast = nIdx === diag.flow.length - 1;
                    const isSelected = selectedNodeId === node.id;

                    return (
                      <React.Fragment key={node.id}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleStepClick(diag.id, node.id)}
                          className={`flex flex-col items-center gap-1.5 p-3.5 rounded-xl border text-center transition-all duration-300 min-w-[140px] cursor-pointer ${
                            isSelected
                              ? "bg-emerald-500/15 border-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.35)]"
                              : "bg-slate-950/80 border-white/10 hover:border-emerald-500/40"
                          }`}
                        >
                          <span
                            className={`font-mono text-[10px] uppercase tracking-wider font-semibold ${
                              isSelected ? "text-emerald-300" : "text-emerald-400/70"
                            }`}
                          >
                            Step {nIdx + 1}
                          </span>
                          <span className="font-bold text-xs md:text-sm text-foreground">
                            {node.label}
                          </span>
                          <span className="font-mono text-[10px] text-slate-400">
                            {node.sublabel}
                          </span>
                          <Badge
                            variant="secondary"
                            className={`font-mono text-[10px] mt-1 ${
                              isSelected ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" : "bg-slate-800 text-slate-300"
                            }`}
                          >
                            {node.tech}
                          </Badge>
                        </motion.button>

                        {!isLast && (
                          <div className="flex items-center text-emerald-400 shrink-0">
                            <motion.div
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowRight className="w-5 h-5 text-emerald-400/80" />
                            </motion.div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Active Step Deep-Dive Box */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNodeData.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="p-4 md:p-5 rounded-xl bg-slate-950/90 border border-emerald-500/30 space-y-2"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    <Activity className="w-3.5 h-3.5" />
                    <span>[{activeNodeData.label} — Deep-Dive Specification]</span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-normal">
                    {activeNodeData.deepDive}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Engineering Tradeoff Note */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-white/5 text-xs md:text-sm text-slate-300 flex items-start gap-2.5 font-mono">
                <span className="text-emerald-400 font-bold shrink-0">[Tradeoff & Rationale]:</span>
                <span className="leading-relaxed">{diag.tradeoffNote}</span>
              </div>
            </Card3D>
          );
        })}
      </section>
    </div>
  );
}
