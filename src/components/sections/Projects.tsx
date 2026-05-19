"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TerminalHeading } from "@/components/ui/TerminalHeading";
import { Database, Zap, Network, Code2, Bot, ArrowRight } from "lucide-react";
import { FloatingPreview, useProjectPreview } from "@/components/ui/FloatingPreview";

const HighlightChip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded-md bg-gradient-to-r from-amber-500/10 to-cyan-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-mono text-[0.85em] font-bold shadow-[0_0_8px_rgba(245,158,11,0.15)] whitespace-nowrap">
    {children}
  </span>
);

const projects = [
  {
    title: "JobHermes — AI Job Hunting Agent",
    challenge: "The challenge: Job hunting is unstructured noise. The challenge was building a system that could filter hundreds of listings down to ranked opportunities with zero manual effort daily.",
    icon: <Bot className="w-5 h-5 text-primary" />,
    tech: ["TypeScript", "Node.js", "GPT-4o", "SQLite", "node-cron", "Playwright"],
    oneLiner: "Autonomous agent that scrapes, scores, and applies to jobs — runs daily at 9 AM IST",
    details: [
      "Hermes Agent (orchestrator)",
      "→ TinyFetch scraper (HTTP client, retry + rate limiting, 3 concurrent, 1.5s delay)",
      "→ GPT-4o relevance filter (pre-storage check)",
      "→ Multi-dimensional scorer (6 dimensions): Skill match 30pts · Title 20pts · Location 15pts · Experience 15pts · Salary 10pts · Prestige 10pts",
      "→ SQLite WAL-mode storage",
      "→ HTML report generator (dark-themed, score charts, AI-written summaries)",
      "→ On demand: GPT-4o resume tailoring + tone-controlled cover letters",
      "→ node-cron: daily 9 AM IST via CRON_SCHEDULE",
      "",
      "Scale:",
      "• Scrapes configured company careers pages",
      "• Scores 0–100, filters below threshold (default 60)",
      "• Generates ATS-optimized HTML resumes per job",
      "• Cover letter tones: professional / enthusiastic / concise",
      "• Full application pack = resume + CL + DB update"
    ],
    hasArchitecture: false,
    pipelineNodes: ["Scraper","GPT Filter","Scorer","SQLite","Report","Resume/CL"],
  },
  {
    title: "Poshible.ai — POSH Act Q&A Platform",
    challenge: "The challenge: Building a RAG pipeline that stays accurate on domain-specific legal content (POSH Act) — and handles abuse via subscription enforcement.",
    icon: <Database className="w-5 h-5 text-primary" />,
    tech: ["Node.js", "OpenAI", "AWS S3", "OpenSearch", "Google Auth", "REST APIs"],
    oneLiner: "AI-powered legal Q&A serving 500+ daily queries at 95% accuracy",
    details: [
      <><HighlightChip>95% accuracy</HighlightChip> on <HighlightChip>500+ queries/day</HighlightChip> via REST APIs → OpenAI models</>,
      <>PDF Processing: upload → AWS S3 → OpenSearch embeddings → retrieval (<HighlightChip>100+ docs</HighlightChip>, <HighlightChip>90% precision</HighlightChip>)</>,
      <>Subscription enforcement resolved infinite API loop → <HighlightChip>60% load reduction</HighlightChip></>,
      <>Google OAuth caps reduced unauthorized access by <HighlightChip>85%</HighlightChip></>,
    ],
    hasArchitecture: true,
    engineeringNote: "Used OpenSearch for vector storage instead of a managed service — kept infra costs near zero while maintaining 90% retrieval precision at this query volume.",
  },
  {
    title: "Dealership Recommendation Engine",
    challenge: "The challenge: Executing complex spatial distance calculations on the fly while maintaining sub-second API responses.",
    icon: <Network className="w-5 h-5 text-primary" />,
    tech: ["Google Maps API", "PostgreSQL", "Redis", "TypeScript"],
    details: [
      "Engineered customer pin-code-based geographic routing logic.",
      "Integrated Google Maps API for accurate distance calculations and mapping.",
      "Optimized spatial queries using PostgreSQL and caching layers with Redis.",
      "Dramatically improved the end-user booking flow."
    ],
    hasArchitecture: true,
  },
  {
    title: "Dynamic QR Campaign Platform",
    challenge: "The challenge: Engineering a fault-tolerant redirection flow capable of surviving massive traffic spikes from live events.",
    icon: <Zap className="w-5 h-5 text-primary" />,
    tech: ["Node.js", "MongoDB", "Analytics", "React"],
    details: [
      "Built backend APIs for generating, managing, and tracking dynamic QR codes.",
      "Implemented real-time analytics for campaign performance monitoring.",
      "Designed fault-tolerant campaign workflows to handle traffic spikes."
    ],
    hasArchitecture: false,
  },
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const preview = useProjectPreview();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(((e.clientX - centerX) / (rect.width / 2)) * 8);
    y.set(((e.clientY - centerY) / (rect.height / 2)) * 8);
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    setMousePosition({ x: (posX / rect.width) * 100, y: (posY / rect.height) * 100 });
    preview.onMouseMove(e);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    preview.onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    preview.onMouseLeave();
  };

  return (
    <>
      <FloatingPreview
        title={project.title}
        visible={preview.visible}
        anchorX={preview.x}
        anchorY={preview.y}
      />
      <motion.div
        ref={cardRef}
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          layout: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.5, delay: index * 0.1 },
          y: { duration: 0.5, delay: index * 0.1 }
        }}
        whileHover="hover"
        whileTap={{ scale: 1.02 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        className="relative h-full p-[1px] rounded-xl overflow-hidden group/card"
      >
        {/* Default Border */}
        <div className="absolute inset-0 bg-border/50 z-0 transition-opacity duration-300" style={{ opacity: isHovered ? 0 : 1 }} />

        {/* Glow Border Overlay */}
        <div
          className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,255,194,0.6) 0%, transparent 60%)`
          }}
        />

        {/* Inner Card Background */}
        <div className="absolute inset-[1px] bg-background z-0 rounded-xl" />

        {/* Card Content */}
        <motion.div layout className="h-full group relative z-10 flex flex-col bg-card/40 rounded-xl">
          <Card className="h-full flex flex-col bg-transparent border-transparent shadow-none overflow-hidden rounded-xl">
            <CardHeader>
              <motion.div layout className="mb-4 p-2.5 w-max rounded-lg bg-secondary/50 border border-border/50 group-hover:text-cyan-400 transition-colors">
                {project.icon}
              </motion.div>
              <motion.div layout>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </motion.div>
              <motion.div layout className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech: string) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary/30 font-mono text-[10px]">
                    {tech}
                  </Badge>
                ))}
              </motion.div>
              {project.oneLiner && (
                <motion.div layout className="pt-3">
                  <p className="text-[13px] font-medium text-muted-foreground/80 leading-relaxed">{project.oneLiner}</p>
                </motion.div>
              )}
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-end space-y-0 relative z-10">
              <motion.div
                layout
                variants={{
                  hover: { opacity: 1, height: "auto", marginTop: 16, marginBottom: 24 },
                  initial: { opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }
                }}
                initial="initial"
                className="overflow-hidden"
              >
                <p className="text-sm italic text-muted-foreground border-l-2 border-primary/50 pl-3">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div layout>
                <Dialog>
                  <DialogTrigger render={<Button variant="outline" className="w-full gap-2 border-border/50 hover:bg-secondary/50" />}>
                    <Code2 className="w-4 h-4" />
                    View Deep Dive
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-background border-border">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 pt-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold font-mono text-primary uppercase tracking-wider">Architecture Details</h4>
                        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                          {project.details.map((detail: React.ReactNode, i: number) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </div>

                      {project.engineeringNote && (
                        <div className="mt-6 p-5 rounded-xl bg-primary/5 border border-primary/20">
                          <h5 className="text-sm font-semibold font-mono text-primary mb-2 flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            Key Engineering Decision
                          </h5>
                          <p className="text-[15px] text-foreground/90 italic leading-relaxed">
                            "{project.engineeringNote}"
                          </p>
                        </div>
                      )}

                      {project.pipelineNodes && (
                        <div className="space-y-3 pt-4 border-t border-border/50">
                          <h5 className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Pipeline Flow</h5>
                          <div className="flex flex-wrap items-center gap-2">
                            {project.pipelineNodes.map((node: string, i: number, arr: string[]) => (
                              <div key={node} className="flex items-center gap-2">
                                <div className={`px-3 py-1.5 text-xs font-mono rounded-lg border ${i === arr.length - 1 ? "border-cyan-500/50 text-primary font-bold shadow-[0_0_12px_rgba(0,255,194,0.12)]" : "border-cyan-500/30 text-foreground"} bg-background`}>
                                  {node}
                                </div>
                                {i < arr.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-primary/40 shrink-0" />}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.hasArchitecture && !project.pipelineNodes && (
                        <div className="p-4 rounded-lg bg-secondary/20 border border-border/50 flex items-center justify-center min-h-[120px]">
                          <p className="text-sm font-mono text-muted-foreground">
                            Interactive diagram available in Architecture Showcase section below.
                          </p>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </>
  );
}

export function Projects() {
  return (
    <section className="py-20" id="projects">
      <div className="space-y-12">
        <TerminalHeading title="Featured Engineering" subtitle="// Core systems and platforms built" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
