"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRINCIPLES = [
  {
    num: "//01",
    title: "Systems over features.",
    body: "I optimise for the system that enables 10 features, not the feature itself. I built a job-matching engine that can swap LLM providers without changing a line of business logic.",
  },
  {
    num: "//02",
    title: "Observability is not optional.",
    body: "Shipping without metrics is guessing. I integrated OpenTelemetry tracing into our QR platform before launch day — because you can't fix what you can't see.",
  },
  {
    num: "//03",
    title: "APIs are contracts, not implementations.",
    body: "Consumers shouldn't care how it works internally. I designed our core APIs so the entire underlying infrastructure could be swapped without breaking a single client integration.",
  },
  {
    num: "//04",
    title: "Boring technology wins.",
    body: "Reach for Redis before a custom cache. Postgres before a NoSQL scramble. Battle-tested infrastructure is how you maintain uptime on systems that actually matter.",
  },
];

// ─── Animated separator line ─────────────────────────────────────────────────

function AnimatedDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-px w-full overflow-hidden">
      <div className="absolute inset-0 bg-border/20" />
      <div
        className="absolute inset-y-0 left-0 bg-border/60 transition-all ease-out"
        style={{
          width: active ? "100%" : "0%",
          transitionDuration: "0.8s",
        }}
      />
    </div>
  );
}

// ─── Single principle row ─────────────────────────────────────────────────────

function PrincipleRow({ item, index }: { item: typeof PRINCIPLES[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <AnimatedDivider />
      <div
        className="grid gap-6 md:gap-0 py-12"
        style={{ gridTemplateColumns: "20% 80%" }}
      >
        {/* Left: ghosted number */}
        <div className="flex items-start pt-1 select-none">
          <span
            className="font-mono font-bold leading-none tracking-tighter text-foreground/[0.07]"
            style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
          >
            {item.num}
          </span>
        </div>

        {/* Right: content */}
        <div className="space-y-3 pt-2">
          <h3
            className="text-foreground font-medium leading-snug"
            style={{ fontSize: 18 }}
          >
            {item.title}
          </h3>
          <p
            className="text-muted-foreground leading-relaxed"
            style={{ fontSize: 14, maxWidth: 520 }}
          >
            {item.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Animated heading words ───────────────────────────────────────────────────

function ManifestoHeading() {
  const words = "How I think about engineering".split(" ");

  return (
    <motion.h2
      className="text-3xl md:text-5xl font-bold tracking-tight text-foreground flex flex-wrap gap-x-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0.1 },
            visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function EngineeringMindset() {
  return (
    <section className="py-20 relative border-t border-border/20" id="mindset">
      <div className="space-y-16">
        {/* Section header */}
        <div className="space-y-5">
          <p
            className="text-muted-foreground/60 font-mono tracking-[0.15em] uppercase"
            style={{ fontSize: 11 }}
          >
            //00 PHILOSOPHY
          </p>
          <ManifestoHeading />
        </div>

        {/* Principles */}
        <div>
          {PRINCIPLES.map((item, i) => (
            <PrincipleRow key={item.num} item={item} index={i} />
          ))}
          {/* Final bottom divider */}
          <AnimatedDivider />
        </div>
      </div>
    </section>
  );
}
