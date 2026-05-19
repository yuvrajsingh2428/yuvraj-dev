"use client";
import { motion, type Variants } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function Contact() {
  const heading = "Let's build something that scales.";
  const words = heading.split(" ");
  
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <section className="py-32 relative border-t border-border/50 bg-secondary/10 overflow-hidden" id="contact">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,194,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        
        {/* Animated Heading */}
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 flex flex-wrap justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.08 }}
        >
          {words.map((word, i) => (
            <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Open to backend engineering, AI infra, and platform roles at product-first companies. <br className="hidden md:block" />
          <span className="text-foreground font-medium mt-2 inline-block">Remote · Full-time · Contract.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
        >
          <a 
            href="mailto:yuvrajsingh.connect@gmail.com" 
            className={buttonVariants({ size: "lg", className: "w-full sm:w-auto h-14 px-8 text-base font-semibold group shadow-[0_0_20px_rgba(0,255,194,0.15)] hover:shadow-[0_0_25px_rgba(0,255,194,0.3)] transition-all" })}
          >
            Send me a message
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="https://drive.google.com/uc?export=download&id=18ozkViRciZPbM-1pCSg03Kc7b2eVIoXO" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto h-14 px-8 text-base font-medium border-border/50 hover:bg-secondary/30" })}
          >
            <FileText className="w-5 h-5 mr-2" />
            View my resume
          </a>
        </motion.div>

        {/* Response Time Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6"
        >
          <p className="text-sm font-mono text-muted-foreground inline-flex items-center gap-2 bg-secondary/20 px-4 py-1.5 rounded-full border border-border/30">
            <span className="text-amber-400">⚡</span> Usually reply within 24 hours
          </p>
        </motion.div>

        {/* Social Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex flex-wrap gap-4 pt-16 mt-16 border-t border-border/30 w-full justify-center"
        >
          <a href="https://github.com/yuvrajsingh2428" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-secondary/10 border border-border/30 hover:border-[#00FFC2]/40 hover:bg-[#00FFC2]/5 hover:shadow-[0_0_15px_rgba(0,255,194,0.1)] transition-all group">
            <FaGithub className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-sm font-mono font-medium text-muted-foreground group-hover:text-foreground transition-colors">yuvrajsingh2428</span>
          </a>
          
          <a href="https://www.linkedin.com/in/yuvrajsingh024/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-secondary/10 border border-border/30 hover:border-[#00FFC2]/40 hover:bg-[#00FFC2]/5 hover:shadow-[0_0_15px_rgba(0,255,194,0.1)] transition-all group">
            <FaLinkedin className="w-5 h-5 text-muted-foreground group-hover:text-[#0077b5] transition-colors" />
            <span className="text-sm font-mono font-medium text-muted-foreground group-hover:text-foreground transition-colors">yuvrajsingh024</span>
          </a>

          <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-secondary/10 border border-border/30 hover:border-[#00FFC2]/40 hover:bg-[#00FFC2]/5 hover:shadow-[0_0_15px_rgba(0,255,194,0.1)] transition-all group">
            <FaXTwitter className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-sm font-mono font-medium text-muted-foreground group-hover:text-foreground transition-colors">@itsyuvrajx</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
