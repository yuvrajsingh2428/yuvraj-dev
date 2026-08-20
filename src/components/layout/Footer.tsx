"use client";
import Link from "next/link";
import { TbBrandGithub, TbBrandLinkedin, TbFileCv, TbSend } from "react-icons/tb";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050505]/80 backdrop-blur-xl mt-24 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Status */}
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <Link href="/" className="flex items-center gap-2 text-foreground font-mono font-bold text-lg hover:text-[#00FFC2] transition-colors">
            <span className="w-6 h-6 rounded bg-primary/10 border border-primary/30 flex items-center justify-center text-xs text-primary">YS</span>
            <span>Yuvraj Singh</span>
          </Link>
          <p className="text-xs text-muted-foreground max-w-sm">
            Backend Systems, AI Platforms & Scalable Distributed Infrastructure.
          </p>
        </div>

        {/* Center: Quick Page Links */}
        <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">/home</Link>
          <Link href="/projects" className="hover:text-foreground transition-colors">/projects</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">/about</Link>
        </div>

        {/* Right: Social Icons & Timezone */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/yuvrajsingh2428"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary/40 hover:bg-secondary border border-border/50 text-muted-foreground hover:text-foreground transition-all"
              aria-label="GitHub"
            >
              <TbBrandGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/yuvrajsingh024/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary/40 hover:bg-secondary border border-border/50 text-muted-foreground hover:text-foreground transition-all"
              aria-label="LinkedIn"
            >
              <TbBrandLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=18ozkViRciZPbM-1pCSg03Kc7b2eVIoXO"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary/40 hover:bg-secondary border border-border/50 text-muted-foreground hover:text-foreground transition-all"
              aria-label="Resume"
            >
              <TbFileCv className="w-4 h-4" />
            </a>
            <a
              href="mailto:yuvrajsingh.connect@gmail.com"
              className="p-2 rounded-lg bg-secondary/40 hover:bg-secondary border border-border/50 text-muted-foreground hover:text-foreground transition-all"
              aria-label="Email"
            >
              <TbSend className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground/70">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>IST (UTC+5:30) · Open to Opportunities</span>
          </div>
        </div>

      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-white/[0.04] text-center text-[11px] font-mono text-muted-foreground/60">
        © {new Date().getFullYear()} Yuvraj Singh. Engineered with Next.js & Framer Motion.
      </div>
    </footer>
  );
}
