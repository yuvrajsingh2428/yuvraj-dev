"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TerminalHeading } from "@/components/ui/TerminalHeading";

const HighlightChip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded-md bg-gradient-to-r from-amber-500/10 to-cyan-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-mono text-[0.85em] font-bold shadow-[0_0_8px_rgba(245,158,11,0.15)] whitespace-nowrap">
    {children}
  </span>
);

const tracks = [
  {
    id: "swe",
    label: "⚙ Backend Engineering",
    badge: <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">SWE</span>,
    bullets: [
      <>Built ITSM ticket management platform for operational issue tracking across internal teams</>,
      <>Developed QR-based marketing campaign platform for generating and managing campaign-specific QR codes across digital channels</>,
      <>Built software license management system tracking asset expiry and automating license lifecycle</>,
      <>Backend services using Node.js + TypeScript with GitHub Actions CI pipelines</>
    ]
  },
  {
    id: "sdet",
    label: "🧪 Test Infrastructure",
    badge: <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">SDET</span>,
    bullets: [
      <>Architected Playwright + TypeScript POM framework automating <HighlightChip>50+</HighlightChip> critical workflows and <HighlightChip>200+</HighlightChip> API test cases — <HighlightChip>60%</HighlightChip> reduction in manual regression</>,
      <>Owned Selenium + Java regression suite (<HighlightChip>150+</HighlightChip> UI flows) with <HighlightChip>95%+</HighlightChip> CI stability via GitHub Actions</>,
      <>Built Appium Android automation covering booking, OTP login, document uploads — <HighlightChip>85%</HighlightChip> critical path coverage</>,
      <>Reduced bug triage time <HighlightChip>40%</HighlightChip> with Allure reporting: failure screenshots, trend dashboards, test categorization</>
    ]
  }
];

function RevoltCard() {
  const [activeTab, setActiveTab] = useState<"swe" | "sdet" | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 md:pl-0 md:flex-1"
    >
      <div className="relative">
        {/* Animated red left border */}
        <motion.div
          ref={borderRef}
          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full origin-top z-10"
          style={{ backgroundColor: "#D32F2F" }}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <Card className="bg-card/40 border-border/50 backdrop-blur-sm hover:bg-card/60 transition-colors pl-4 overflow-hidden">
          <CardHeader className="pb-3">
            {/* Company header */}
            <div className="flex justify-between items-start gap-3 flex-wrap">
              <div>
                <div className="flex items-center gap-2">
                  {/* Lightning bolt SVG */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#D32F2F" className="shrink-0">
                    <path d="M13 1L4.5 13.5H11L10 23L20.5 10H14L13 1Z" />
                  </svg>
                  <span
                    className="font-mono font-semibold tracking-widest text-foreground"
                    style={{ fontVariant: "small-caps", fontSize: "15px" }}
                  >
                    Revolt Motors
                  </span>
                </div>
                <p className="text-[12px] text-muted-foreground mt-0.5 ml-6">
                  Electric Vehicle Company · India's first AI-enabled EV
                </p>
              </div>

              {/* Active date chip with pulsing dot */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-background/60 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Jun 2025 – Present
              </div>
            </div>

            {/* Tab controls (mobile: exclusive tabs; desktop: both visible by default) */}
            <div className="flex gap-2 mt-4 md:hidden">
              {tracks.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(activeTab === t.id as "swe" | "sdet" ? null : t.id as "swe" | "sdet")}
                  className={`flex-1 px-3 py-1.5 text-[11px] font-mono rounded-md border transition-all ${
                    activeTab === t.id
                      ? t.id === "swe"
                        ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                        : "bg-amber-500/10 border-amber-500/30 text-amber-500"
                      : "border-border/40 text-muted-foreground hover:border-border"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Desktop: both tracks always visible */}
            <div className="hidden md:block space-y-6">
              {tracks.map((track, idx) => (
                <div key={track.id} className="space-y-3 relative">
                  {idx > 0 && <div className="absolute -top-3 left-0 right-0 h-px bg-border/40" />}
                  <div className="flex items-center gap-2">
                    <h4 className="text-[14px] font-semibold text-foreground tracking-tight">{track.label}</h4>
                    {track.badge}
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside marker:text-border">
                    {track.bullets.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        <span className="relative -left-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile: tabbed view */}
            <div className="md:hidden">
              {tracks
                .filter((t) => activeTab === null || t.id === activeTab)
                .map((track, idx) => (
                  <div key={track.id} className={`space-y-3 ${idx > 0 ? "mt-4 pt-4 border-t border-border/40" : ""}`}>
                    <div className="flex items-center gap-2">
                      <h4 className="text-[14px] font-semibold text-foreground">{track.label}</h4>
                      {track.badge}
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside marker:text-border">
                      {track.bullets.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          <span className="relative -left-2">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Node.js", "TypeScript", "Playwright", "GitHub Actions", "CI/CD", "System Design"].map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-[10px] uppercase tracking-wider font-mono rounded-md bg-secondary/50 text-secondary-foreground border border-border/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

// ─── Other experiences ───────────────────────────────────────────────────────

type OtherExp = {
  company: string;
  role: string;
  duration: string;
  description: React.ReactNode[];
  skills: string[];
};

// ─── TLE Eliminators Card ────────────────────────────────────────────────────

const tleLogs = [
  { tag: "PASS", text: "Playwright suite → 20% defect reduction across release cycles" },
  { tag: "LOAD", text: "JMeter: 3 critical bottlenecks caught pre-release under load" },
  { tag: "AUTO", text: "Slack bug reports → 30% reduction in manual QA communication" },
  { tag: "PASS", text: "100+ endpoint coverage, documented via Postman collections" },
];

function TerminalLogLine({ tag, text, delay }: { tag: string; text: string; delay: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(t);
    }
  }, [isInView, delay]);

  return (
    <div
      ref={ref}
      className="font-mono transition-all duration-300"
      style={{ fontSize: "12.5px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(6px)" }}
    >
      <span className="font-bold mr-2" style={{ color: "#F59E0B" }}>[{tag}]</span>
      <span className="text-foreground/80">{text}</span>
    </div>
  );
}

function TLECard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative pl-8 md:pl-0 md:flex-1"
    >
      <div className="relative">
        {/* Animated amber left border */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full origin-top z-10"
          style={{ backgroundColor: "#F59E0B" }}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <Card className="bg-card/40 border-border/50 backdrop-blur-sm hover:bg-card/60 transition-colors pl-4 overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start gap-3 flex-wrap">
              <div>
                <div className="flex items-center gap-2">
                  {/* Stopwatch SVG */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <circle cx="12" cy="13" r="8" />
                    <path d="M12 9v4l2 2" />
                    <path d="M9 3h6" />
                    <path d="M12 3v2" />
                  </svg>
                  <span className="font-mono font-semibold tracking-widest text-foreground" style={{ fontVariant: "small-caps", fontSize: "15px" }}>
                    TLE Eliminators
                  </span>
                </div>
                <p className="text-[12px] text-muted-foreground mt-0.5 ml-6">
                  Competitive Programming Platform · Ed-tech
                </p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-background/60 text-xs font-mono text-muted-foreground">
                Jan 2025 – Jun 2025
              </div>
            </div>
            <p className="text-sm font-medium text-amber-500/80 mt-2 ml-6">QA Engineer Intern</p>
          </CardHeader>

          <CardContent className="space-y-5">
            {/* Terminal log block with scanline */}
            <div
              className="relative rounded-lg p-4 bg-background/60 border border-border/40 space-y-2.5 overflow-hidden"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.015) 1px, rgba(255,255,255,0.015) 2px)",
                backgroundSize: "100% 2px"
              }}
            >
              {/* Terminal top bar */}
              <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-border/30">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                <span className="ml-2 text-[10px] font-mono text-muted-foreground/50">qa-log.sh</span>
              </div>
              {tleLogs.map((log, i) => (
                <TerminalLogLine key={i} tag={log.tag} text={log.text} delay={i * 120} />
              ))}
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
              {["Playwright", "JMeter", "Postman", "Selenium", "Slack API", "GitHub Actions"].map((skill) => (
                <span key={skill} className="px-2 py-1 text-[10px] uppercase tracking-wider font-mono rounded-md bg-amber-500/5 text-amber-500/70 border border-amber-500/15">
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

const otherExperiences: OtherExp[] = [
  {
    company: "Gopratle",
    role: "Backend Developer",
    duration: "Previous",
    description: [
      <>Built highly secure REST APIs with robust JWT authentication → enforced strict role-based access control.</>,
      <>Engineered efficient media upload pipeline → handled large files and asynchronous processing with <HighlightChip>zero</HighlightChip> data loss.</>,
      <>Integrated scalable transactional email systems → ensured critical user communications were delivered instantly.</>
    ],
    skills: ["REST APIs", "JWT", "Media Pipelines", "Email Systems", "Security"],
  },
];

function OtherExpCard({ exp, index }: { exp: OtherExp; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative"
    >
      <Card className="bg-card/40 border-border/50 backdrop-blur-sm h-full hover:bg-card/60 transition-colors">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start gap-4 flex-col sm:flex-row sm:items-center">
            <div>
              <p className="text-xl font-semibold text-foreground">{exp.role}</p>
              <p className="text-primary font-medium mt-1 text-sm">{exp.company}</p>
            </div>
            <Badge variant="outline" className="text-xs font-mono bg-background/50">{exp.duration}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside marker:text-border">
            {exp.description.map((item, i) => (
              <li key={i} className="leading-relaxed">
                <span className="relative -left-2">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-[10px] uppercase tracking-wider font-mono rounded-md bg-secondary/50 text-secondary-foreground border border-border/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── Timeline Dot ────────────────────────────────────────────────────────────

function TimelineDot({ isCurrentRole = false, color = "#00FFC2" }: { isCurrentRole?: boolean; color?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });

  return (
    <div ref={ref} className="relative flex items-center justify-center w-5 h-5 shrink-0 mt-5">
      {/* Pulse ring for current role */}
      {isCurrentRole && (
        <motion.div
          className="absolute rounded-full"
          style={{ width: 20, height: 20, border: `1.5px solid ${color}`, opacity: 0.4 }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      )}
      <motion.div
        className="rounded-full z-10"
        style={{ backgroundColor: isCurrentRole ? "#D32F2F" : "transparent", borderColor: isInView ? color : "#333" }}
        animate={isInView
          ? { width: 12, height: 12, borderWidth: 2, boxShadow: `0 0 0 4px rgba(0,255,194,0.15)` }
          : { width: 8, height: 8, borderWidth: 1.5, boxShadow: "0 0 0 0px rgba(0,255,194,0)" }
        }
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        initial={{ width: 8, height: 8, borderWidth: 1.5 }}
      />
    </div>
  );
}

// ─── Electric Timeline Wrapper ────────────────────────────────────────────────

function ElectricTimeline({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(800);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"]
  });

  // Measure line height after mount
  useEffect(() => {
    const update = () => {
      if (lineRef.current) setLineHeight(lineRef.current.offsetHeight);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const chargeY = useTransform(scrollYProgress, [0, 1], [0, Math.max(0, lineHeight - 40)]);

  return (
    <div ref={sectionRef} className="relative mt-8">
      {/* Static background line */}
      <div
        ref={lineRef}
        className="absolute left-[9px] top-0 bottom-0 w-[2px] rounded-full"
        style={{ backgroundColor: "#1a1a1a" }}
      />

      {/* Glowing charge segment */}
      <motion.div
        className="absolute left-[9px] w-[2px] h-[40px] rounded-full pointer-events-none z-10"
        style={{
          top: chargeY,
          background: "linear-gradient(to bottom, transparent, #00FFC2, transparent)",
          boxShadow: "0 0 8px #00FFC2, 0 0 20px rgba(0,255,194,0.3)"
        }}
      />

      {/* Entries */}
      <div className="space-y-8 pl-10">
        {children}
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export function Experience() {
  return (
    <section className="py-20 relative" id="experience">
      <div className="space-y-12">
        <TerminalHeading title="Experience" subtitle="// Professional timeline & impact" />

        <ElectricTimeline>
          {/* Revolt Motors */}
          <div className="flex items-start gap-4">
            <TimelineDot isCurrentRole color="#D32F2F" />
            <div className="flex-1 min-w-0">
              <RevoltCard />
            </div>
          </div>

          {/* TLE Eliminators */}
          <div className="flex items-start gap-4">
            <TimelineDot color="#F59E0B" />
            <div className="flex-1 min-w-0">
              <TLECard />
            </div>
          </div>

          {/* Other entries */}
          {otherExperiences.map((exp, i) => (
            <div key={exp.company} className="flex items-start gap-4">
              <TimelineDot />
              <div className="flex-1 min-w-0">
                <OtherExpCard exp={exp} index={i} />
              </div>
            </div>
          ))}
        </ElectricTimeline>
      </div>
    </section>
  );
}
