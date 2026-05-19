"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { TerminalSquare, Server, Cpu, GitBranch } from "lucide-react";
import { TbBrandGithub, TbBrandLinkedin, TbFileCv, TbSend } from "react-icons/tb";
import { HeroCanvas } from "@/components/ui/HeroCanvas";
import { MagneticButton } from "@/components/ui/MagneticButton";

const ROLES = ["Systems", "AI", "Platform"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative py-20" id="hero">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />
      
      {/* Animated network background */}
      <HeroCanvas />
      
      <div className="max-w-4xl space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 border border-border text-sm text-muted-foreground font-mono"
        >
          <TerminalSquare className="w-4 h-4" />
          <span>system_ready = true</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
        >
          Yuvraj Singh
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl font-mono font-medium text-foreground flex items-center flex-wrap"
        >
          Backend 
          <span className="inline-block relative overflow-hidden h-[1.2em] mx-3" style={{ minWidth: "160px" }}>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={roleIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute left-0 italic text-[#00FFC2]"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          Engineer
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="text-primary ml-1 font-bold inline-block"
          >
            _
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
        >
          I build the infra layer that makes AI products ship — from vector search pipelines to real-time fleet APIs handling 10k+ events/sec.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 pt-6"
        >
          <MagneticButton 
            href="https://drive.google.com/uc?export=download&id=18ozkViRciZPbM-1pCSg03Kc7b2eVIoXO" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={buttonVariants({ className: "bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 text-sm" })}
            icon={<TbFileCv className="w-4 h-4" />}
            label="Resume"
          />
          <MagneticButton 
            href="https://github.com/yuvrajsingh2428" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={buttonVariants({ variant: "secondary", className: "h-11 px-6 bg-secondary/50 hover:bg-secondary text-sm" })}
            icon={<TbBrandGithub className="w-4 h-4" />}
            label="GitHub"
          />
          <MagneticButton 
            href="https://www.linkedin.com/in/yuvrajsingh024/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={buttonVariants({ variant: "secondary", className: "h-11 px-6 bg-secondary/50 hover:bg-secondary text-sm" })}
            icon={<TbBrandLinkedin className="w-4 h-4" />}
            label="LinkedIn"
          />
          <MagneticButton 
            href="mailto:yuvrajsingh.connect@gmail.com" 
            className={buttonVariants({ variant: "outline", className: "h-11 px-6 border-border hover:bg-secondary/30 text-sm" })}
            icon={<TbSend className="w-4 h-4" />}
            label="Contact"
          />
        </motion.div>

        {/* Stat / Signal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-16">
          {[
            {
              icon: Server,
              label: "10k+ events/sec",
              desc: "Real-time fleet telemetry at Revolt Motors",
            },
            {
              icon: Cpu,
              label: "AI Pipelines",
              desc: "RAG · OpenSearch · LangChain in production",
            },
            {
              icon: GitBranch,
              label: "0→1 Builder",
              desc: "Shipped 4 products from scratch to live users",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="group relative p-[1px] rounded-2xl bg-border/40 hover:bg-gradient-to-r hover:from-cyan-500/60 hover:to-purple-500/60 transition-colors duration-500"
            >
              <div className="flex flex-col gap-3 p-5 rounded-2xl bg-background/60 backdrop-blur-xl h-full border border-transparent">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-foreground font-mono text-base">{stat.label}</div>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">{stat.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
