"use client";
import { motion } from "framer-motion";
import { EngineeringMindset } from "@/components/sections/EngineeringMindset";
import { Skills } from "@/components/sections/Skills";
import { WorkingWithMe } from "@/components/sections/WorkingWithMe";
import { Contact } from "@/components/sections/Contact";
import { Sparkles, TerminalSquare, HeartHandshake, Mail } from "lucide-react";

export default function AboutPage() {
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
          <span>Backend Systems & Infrastructure Engineer</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
        >
          About & Engineering Philosophy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed"
        >
          Building reliable distributed systems, vector search pipelines, and automated developer tooling with focus on latency, observability, and clean API design.
        </motion.p>
      </section>

      {/* Engineering Philosophy */}
      <section>
        <EngineeringMindset />
      </section>

      {/* Skills Matrix */}
      <section className="border-t border-border/40 pt-12">
        <Skills />
      </section>

      {/* Working With Me */}
      <section className="border-t border-border/40 pt-12">
        <WorkingWithMe />
      </section>

      {/* Contact Section */}
      <section className="border-t border-border/40 pt-12">
        <Contact />
      </section>
    </div>
  );
}
