"use client";
import React from "react";
import { motion } from "framer-motion";
import { TerminalHeading } from "@/components/ui/TerminalHeading";

const SystemNode = ({ title, tooltip, index }: { title: string; tooltip: string; index: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.2 }}
    className="group relative flex items-center justify-center px-4 py-3 rounded-lg border border-[#00FFC2] bg-background shadow-[0_0_15px_rgba(0,255,194,0.1)] hover:shadow-[0_0_25px_rgba(0,255,194,0.3)] transition-all duration-300 w-full lg:w-32 z-10"
  >
    <span className="font-mono text-xs sm:text-sm text-white font-bold whitespace-nowrap">{title}</span>
    
    {/* Tooltip */}
    <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-max max-w-[200px] p-2 rounded bg-card border border-border text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 text-center shadow-xl">
      {tooltip}
      {/* Tooltip triangle */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-card border-b border-r border-border rotate-45" />
    </div>
  </motion.div>
);

const ConnectionLine = ({ index }: { index: number }) => {
  const drawDelay = 0.2 + index * 0.2;
  return (
    <>
      {/* Desktop Line */}
      <div className="hidden lg:flex w-12 h-10 relative items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <motion.line 
            x1="0" y1="50%" x2="100%" y2="50%" 
            stroke="#00FFC2" strokeWidth="2" strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: drawDelay, ease: "easeInOut" }}
          />
        </svg>
        {/* Travelling dot */}
        <motion.div
          className="w-1.5 h-1.5 bg-white shadow-[0_0_8px_#00FFC2] rounded-full absolute top-1/2 -translate-y-1/2"
          animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: drawDelay + 0.5 }}
        />
      </div>

      {/* Mobile Line */}
      <div className="lg:hidden w-10 h-8 relative flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <motion.line 
            x1="50%" y1="0" x2="50%" y2="100%" 
            stroke="#00FFC2" strokeWidth="2" strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: drawDelay, ease: "easeInOut" }}
          />
        </svg>
        {/* Travelling dot */}
        <motion.div
          className="w-1.5 h-1.5 bg-white shadow-[0_0_8px_#00FFC2] rounded-full absolute left-1/2 -translate-x-1/2"
          animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: drawDelay + 0.5 }}
        />
      </div>
    </>
  );
};

export function SystemsThinking() {
  const nodes = [
    { title: "Client", tooltip: "Web or mobile client initiating the PDF upload and Q&A requests." },
    { title: "API Gateway", tooltip: "Node.js proxy handling auth, validation & rate limits." },
    { title: "Queue", tooltip: "BullMQ / Redis for asynchronous job buffering." },
    { title: "Worker", tooltip: "Serverless function extracting & chunking document text." },
    { title: "Vector DB", tooltip: "OpenSearch storing 1536-dimensional semantic embeddings." },
    { title: "LLM", tooltip: "OpenAI GPT-4o synthesizing the final answer from retrieved context." },
  ];

  return (
    <section className="py-20 relative border-t border-border/30" id="systems-thinking">
      <div className="space-y-16">
        <TerminalHeading title="How I Think About Systems" subtitle="// High-throughput, asynchronous pipeline design" />

        <div className="p-8 md:p-12 rounded-2xl bg-black/50 border border-border/50 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,194,0.05)_0%,transparent_100%)] pointer-events-none" />
          
          <h3 className="text-xl font-mono text-white mb-10 text-center md:text-left border-l-2 border-[#00FFC2] pl-3">
            PDF Q&A Semantic Pipeline
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto relative z-10 gap-2 lg:gap-0">
            {nodes.map((node, index) => (
              <React.Fragment key={node.title}>
                <SystemNode title={node.title} tooltip={node.tooltip} index={index} />
                {index < nodes.length - 1 && <ConnectionLine index={index} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
