"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TerminalHeading } from "@/components/ui/TerminalHeading";
import { Server, ShieldCheck, Bot } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CLUSTERS = [
  {
    id: "backend", label: "Backend Systems", color: "#00FFC2",
    // SVG coords (viewBox 900×600)
    cx: 170, cy: 140,
    // CSS absolute pos (% of container)
    nodePos: { left: "18.8%", top: "23.3%" },
    pills: [
      { label: "Node.js",        left: "0%",   top: "8%"  },
      { label: "TypeScript",     left: "0%",   top: "18%" },
      { label: "REST API Design",left: "0%",   top: "29%" },
      { label: "PostgreSQL",     left: "8%",   top: "4%"  },
      { label: "Redis",          left: "9%",   top: "37%" },
      { label: "Docker",         left: "0%",   top: "40%" },
      { label: "GitHub Actions", left: "10%",  top: "47%" },
      { label: "AWS S3",         left: "11%",  top: "13%" },
    ],
    duration: 2.8,
  },
  {
    id: "test", label: "Test Infra", color: "#F59E0B",
    cx: 730, cy: 140,
    nodePos: { left: "81.1%", top: "23.3%" },
    pills: [
      { label: "Playwright",     left: "75%",  top: "5%"  },
      { label: "Selenium",       left: "84%",  top: "10%" },
      { label: "Appium",         left: "90%",  top: "20%" },
      { label: "JMeter",         left: "87%",  top: "31%" },
      { label: "Postman",        left: "79%",  top: "37%" },
      { label: "Allure",         left: "74%",  top: "43%" },
      { label: "TestNG",         left: "91%",  top: "6%"  },
    ],
    duration: 3.2,
  },
  {
    id: "ai", label: "AI & Tools", color: "#A78BFA",
    cx: 450, cy: 490,
    nodePos: { left: "50%", top: "81.7%" },
    pills: [
      { label: "GPT-4o SDK",     left: "32%",  top: "89%" },
      { label: "OpenSearch",     left: "42%",  top: "94%" },
      { label: "Python",         left: "54%",  top: "94%" },
      { label: "RAG Design",     left: "63%",  top: "89%" },
      { label: "LangChain",      left: "26%",  top: "84%" },
      { label: "Prompt Eng",     left: "67%",  top: "84%" },
    ],
    duration: 2.4,
  },
];

const CX = 450, CY = 295; // center node in viewBox

function lineDist(x1: number, y1: number, x2: number, y2: number) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// ─── Constellation (desktop) ──────────────────────────────────────────────────

function SkillPill({ label, color, pos }: { label: string; color: string; pos: { left: string; top: string } }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ scale: hovered ? 1.1 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="absolute px-2.5 py-1 text-[10px] font-mono font-medium rounded-full border cursor-default whitespace-nowrap transition-colors duration-200"
      style={{
        left: pos.left,
        top: pos.top,
        borderColor: hovered ? color : "rgba(255,255,255,0.08)",
        color: hovered ? color : "rgba(255,255,255,0.5)",
        backgroundColor: hovered ? `${color}12` : "rgba(0,0,0,0.5)",
        boxShadow: hovered ? `0 0 12px ${color}40` : "none",
        zIndex: 10,
      }}
    >
      {label}
    </motion.span>
  );
}

function ConstellationView() {
  // Generate dynamic CSS for travelling dots
  const dotStyles = CLUSTERS.map(c => {
    const len = Math.ceil(lineDist(CX, CY, c.cx, c.cy));
    return `
      @keyframes dot-${c.id} { from { stroke-dashoffset: 0 } to { stroke-dashoffset: -${len + 8} } }
      .dot-${c.id} { stroke-dasharray: 7 ${len}; animation: dot-${c.id} ${c.duration}s linear infinite; }
    `;
  }).join("\n");

  return (
    <div
      className="relative w-full mx-auto select-none"
      style={{ height: 600, maxWidth: 900 }}
    >
      <style dangerouslySetInnerHTML={{ __html: dotStyles }} />

      {/* SVG connection lines */}
      <svg
        viewBox="0 0 900 600"
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      >
        {/* Rotating dashed border around center */}
        <circle cx={CX} cy={CY} r={36} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="5 5">
          <animateTransform attributeName="transform" type="rotate" from={`0 ${CX} ${CY}`} to={`360 ${CX} ${CY}`} dur="12s" repeatCount="indefinite" />
        </circle>

        {CLUSTERS.map(c => (
          <g key={c.id}>
            {/* Static faint line */}
            <line x1={CX} y1={CY} x2={c.cx} y2={c.cy} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            {/* Travelling dot */}
            <line
              x1={CX} y1={CY} x2={c.cx} y2={c.cy}
              stroke={c.color}
              strokeWidth="2"
              fill="none"
              className={`dot-${c.id}`}
              strokeLinecap="round"
            />
          </g>
        ))}
      </svg>

      {/* Center node */}
      <div
        className="absolute flex flex-col items-center justify-center rounded-full font-mono text-sm font-bold text-foreground border border-white/10 bg-background/80 backdrop-blur-sm"
        style={{ width: 70, height: 70, left: "50%", top: `${(CY / 600) * 100}%`, transform: "translate(-50%, -50%)", zIndex: 20 }}
      >
        <span className="text-[11px] text-muted-foreground">{"</>"}</span>
        <span className="text-[12px]">Yuvraj</span>
      </div>

      {/* Cluster nodes + pills */}
      {CLUSTERS.map(c => (
        <div key={c.id}>
          {/* Cluster node */}
          <div
            className="absolute flex items-center justify-center rounded-full font-mono text-[11px] font-bold px-3 py-1.5 border backdrop-blur-sm whitespace-nowrap"
            style={{
              left: c.nodePos.left,
              top: c.nodePos.top,
              transform: "translate(-50%, -50%)",
              borderColor: c.color,
              color: c.color,
              backgroundColor: `${c.color}10`,
              boxShadow: `0 0 16px ${c.color}30`,
              zIndex: 20,
            }}
          >
            {c.label}
          </div>
          {/* Skill pills */}
          {c.pills.map(p => (
            <SkillPill key={p.label} label={p.label} color={c.color} pos={{ left: p.left, top: p.top }} />
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Mobile grid (3-column pill grid) ─────────────────────────────────────────

const skillColumns = [
  {
    title: "Backend Systems",
    icon: <Server className="w-5 h-5 text-cyan-400" />,
    colorClass: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20",
    skills: [
      "Node.js", "Express.js", "TypeScript", "JavaScript",
      "REST API Design", "JWT + RBAC Auth",
      "MongoDB", "PostgreSQL", "SQLite", "Redis",
      "AWS S3", "OpenSearch", "Cloudinary",
      "GitHub Actions", "Docker", "CI/CD"
    ]
  },
  {
    title: "Test Infrastructure",
    icon: <ShieldCheck className="w-5 h-5 text-amber-500" />,
    colorClass: "bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20",
    skills: [
      "Playwright (TypeScript)", "Selenium WebDriver",
      "Appium (Android)", "JMeter", "Postman",
      "TestNG", "Allure Reporting", "POM Architecture",
      "API Validation", "Regression Strategy",
      "Performance Testing", "STLC", "SDLC"
    ]
  },
  {
    title: "AI & Tooling",
    icon: <Bot className="w-5 h-5 text-purple-400" />,
    colorClass: "bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20",
    skills: [
      "OpenAI GPT-4o SDK", "LangChain concepts",
      "Vector embeddings (OpenSearch)",
      "RAG pipeline design", "Prompt engineering",
      "Python", "SQL", "Java",
      "node-cron", "better-sqlite3", "cheerio"
    ]
  }
];

// ─── Export ───────────────────────────────────────────────────────────────────

export function Skills() {
  return (
    <section className="py-20 relative border-t border-border/30" id="skills">
      <div className="space-y-16">
        <TerminalHeading title="Technical Arsenal" subtitle="// Tools and technologies I use to build" />

        {/* Why both tracks matter */}
        <div className="mb-12 max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-8">Why both tracks matter</h3>
          <div className="grid md:grid-cols-2 gap-8 md:gap-0 relative">
            <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-border/40 -translate-x-1/2" />
            <div className="md:pr-12">
              <div className="flex items-center gap-3 mb-3">
                <Server className="w-5 h-5 text-cyan-400" />
                <h4 className="font-semibold text-foreground tracking-wide">I build the system</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                I design and ship backend systems — REST APIs, data pipelines, and internal platforms. At Revolt Motors I've built an ITSM platform, a QR campaign engine, and a license management system from scratch.
              </p>
            </div>
            <div className="md:hidden w-1/3 h-px bg-border/40 my-2" />
            <div className="md:pl-12">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <h4 className="font-semibold text-foreground tracking-wide">I make sure it holds</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                I also own the automation layer that keeps those systems production-stable. 200+ API tests, 150+ UI flows, Appium mobile coverage — all running in CI on every push.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center relative flex justify-center items-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/30" />
            </div>
            <div className="relative bg-background px-4">
              <p className="text-[13px] italic text-muted-foreground font-serif tracking-wide">
                "Most teams hire two people for this. I do both."
              </p>
            </div>
          </div>
        </div>

        {/* Desktop: Constellation */}
        <div className="hidden md:flex justify-center">
          <ConstellationView />
        </div>

        {/* Mobile: 3-column grid */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {skillColumns.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/20 border-border/50">
                <CardHeader className="pb-5">
                  <CardTitle className="text-sm font-mono uppercase tracking-wider flex items-center gap-3">
                    {column.icon}
                    <span className="text-foreground">{column.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2.5">
                    {column.skills.map(skill => (
                      <span key={skill} className={`px-3 py-1.5 text-xs font-mono font-medium rounded-full border transition-colors cursor-default ${column.colorClass}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
