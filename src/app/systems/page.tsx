"use client";

import React, { useState } from "react";

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
      { id: "pdf", label: "PDF Ingestion", sublabel: "100+ Legal Specs", tech: "AWS S3", deepDive: "Ingests 100+ POSH Act legal PDF compliance documents into AWS S3 buckets with automated chunking." },
      { id: "embed", label: "Vector Embeddings", sublabel: "Chunks & Indexing", tech: "OpenSearch", deepDive: "Converts text chunks into dense 1536-dimensional embeddings indexed inside OpenSearch cluster." },
      { id: "search", label: "Hybrid Vector Search", sublabel: "K-NN Retrieval", tech: "REST API", deepDive: "Executes K-NN vector search + keyword scoring, achieving 90% retrieval precision." },
      { id: "llm", label: "LLM Completion", sublabel: "POSH Act Q&A", tech: "OpenAI GPT-4o", deepDive: "Context-bounded prompt injection generating legally accurate Q&A responses." },
      { id: "validate", label: "Schema Validation", sublabel: "Zero API Loops", tech: "Zod Schema", deepDive: "Runtime Zod validation caps query limits and resolved infinite API loops (60% load reduction)." },
    ],
  },
  {
    id: "openforge-engine",
    title: "2. OpenForge — 5-Factor Issue Scorer & Dual AI Engine",
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
      { id: "reports", label: "HTML Pack", sublabel: "Tailored Resumes", tech: "CLI Report", deepDive: "Generates dark-themed HTML score charts and on-demand GPT-4o ATS-customized resumes." },
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
    <div className="space-y-12 font-mono text-neutral-300">
      {/* Header Banner */}
      <div className="border border-neutral-800 bg-[#0a0a0a] p-5 sm:p-7 space-y-3.5">
        <div className="text-xs text-neutral-500">
          yuvraj@dev:~$ node inspect_systems.js
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Interactive System Architecture Pipelines
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
          Select any pipeline node below to inspect data movement specifications, runtime tech stacks,
          and engineering tradeoff rationales.
        </p>
      </div>

      {/* Diagrams */}
      <div className="space-y-8">
        {DIAGRAMS.map((diag) => {
          const selectedNodeId = selectedNodes[diag.id] || diag.flow[0].id;
          const activeNodeData = diag.flow.find((n) => n.id === selectedNodeId) || diag.flow[0];

          return (
            <div
              key={diag.id}
              className="border border-neutral-800 bg-[#0a0a0a] p-6 sm:p-7 space-y-5 hover:border-neutral-700 transition-colors"
            >
              {/* Diagram Title & Badge */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2.5 border-b border-neutral-900 pb-3.5">
                <div className="space-y-1">
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {diag.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {diag.description}
                  </p>
                </div>
                <span className="self-start sm:self-auto border border-neutral-800 bg-neutral-950 px-2.5 py-1 text-xs text-neutral-400">
                  {diag.badge}
                </span>
              </div>

              {/* Step Chain Selector */}
              <div className="overflow-x-auto pb-2">
                <div className="flex items-center gap-2.5 min-w-max">
                  {diag.flow.map((node, nIdx) => {
                    const isLast = nIdx === diag.flow.length - 1;
                    const isSelected = selectedNodeId === node.id;

                    return (
                      <React.Fragment key={node.id}>
                        <button
                          onClick={() => handleStepClick(diag.id, node.id)}
                          className={`p-3.5 text-left border transition-all text-xs min-w-[155px] ${
                            isSelected
                              ? "bg-white text-black border-white font-bold"
                              : "bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white"
                          }`}
                        >
                          <div className="text-[10px] opacity-60">STEP 0{nIdx + 1}</div>
                          <div className="font-bold text-xs mt-0.5">{node.label}</div>
                          <div className="text-[10px] opacity-80 mt-0.5">{node.tech}</div>
                        </button>

                        {!isLast && (
                          <span className="text-neutral-600 text-xs px-1">
                            ---&gt;
                          </span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Active Step Details Terminal Box */}
              <div className="border border-neutral-800 bg-black p-4 sm:p-5 space-y-2 text-xs">
                <div className="flex items-center justify-between text-xs border-b border-neutral-900 pb-2">
                  <span className="text-white font-bold">
                    [NODE SPEC]: {activeNodeData.label} ({activeNodeData.tech})
                  </span>
                  <span className="text-neutral-500 text-[11px]">{activeNodeData.sublabel}</span>
                </div>
                <p className="text-neutral-200 leading-relaxed text-xs sm:text-sm pt-1">
                  {activeNodeData.deepDive}
                </p>
              </div>

              {/* Tradeoff Rationale Note */}
              <div className="border-l-2 border-neutral-700 pl-3.5 py-1 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                <span className="text-white font-bold">[Tradeoff & Rationale]:</span>{" "}
                {diag.tradeoffNote}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
