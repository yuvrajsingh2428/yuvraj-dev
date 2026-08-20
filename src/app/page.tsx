"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { ArrowRight, Sparkles, Cpu, Layers } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <Hero />

      {/* Flagship Projects Section Preview */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/40 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00FFC2] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Work</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Featured Systems & AI Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className={buttonVariants({ variant: "outline", className: "gap-2 border-white/20 hover:border-[#00FFC2] hover:text-[#00FFC2] font-mono text-xs" })}
          >
            Explore All Projects & Architecture <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <Projects />
      </section>

      {/* Experience Timeline */}
      <section className="space-y-8">
        <Experience />
      </section>

      {/* Quick CTA Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl p-8 md:p-12 overflow-hidden border border-white/10 bg-gradient-to-br from-secondary/40 via-background to-secondary/20"
      >
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-[#00FFC2]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Ready to scale backend infrastructure or AI pipelines?
            </h3>
            <p className="text-muted-foreground text-sm max-w-xl">
              I'm open for full-time engineering roles, backend systems architecture, and consulting opportunities.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 shrink-0 font-mono">
            <Link
              href="/about"
              className={buttonVariants({ className: "bg-[#00FFC2] text-black font-semibold hover:bg-[#00FFC2]/90 h-11 px-6 text-xs" })}
            >
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className={buttonVariants({ variant: "secondary", className: "h-11 px-6 text-xs" })}
            >
              View System Architecture
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
