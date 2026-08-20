"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TerminalHeading } from "@/components/ui/TerminalHeading";
import { Projects } from "@/components/sections/Projects";
import { ArchitectureShowcase } from "@/components/sections/ArchitectureShowcase";
import { SystemsThinking } from "@/components/sections/SystemsThinking";
import { Bot, Database, Network, Zap, Cpu, Sparkles, Filter } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Header Banner */}
      <section className="space-y-4 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FFC2]/10 border border-[#00FFC2]/30 text-xs text-[#00FFC2] font-mono"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Production Infrastructure & Codebases</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
        >
          Projects & Architecture
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed"
        >
          Detailed deep dive into autonomous AI agents, vector search pipelines, high-throughput spatial query engines, and event-driven microservices.
        </motion.p>
      </section>

      {/* Featured Projects Grid */}
      <section>
        <Projects />
      </section>

      {/* Interactive System Pipeline */}
      <section className="border-t border-border/40 pt-12">
        <SystemsThinking />
      </section>

      {/* Architecture Visualizations */}
      <section className="border-t border-border/40 pt-12">
        <ArchitectureShowcase />
      </section>
    </div>
  );
}
