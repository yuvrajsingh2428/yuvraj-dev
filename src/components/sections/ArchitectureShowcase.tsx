"use client";
import { motion } from "framer-motion";
import { Server, Database, Cloud, FileText, MapPin, User, ArrowRight } from "lucide-react";
import { TerminalHeading } from "@/components/ui/TerminalHeading";

const FlowArrow = ({ delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0.2, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse", delay }}
    className="flex items-center justify-center text-primary/50 mx-2"
  >
    <ArrowRight className="w-5 h-5" />
  </motion.div>
);

const NodeCard = ({ icon: Icon, title, desc, delay = 0 }: { icon: any, title: string, desc: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center p-4 bg-secondary/20 border border-border/50 rounded-xl min-w-[120px] shadow-sm backdrop-blur-sm"
  >
    <Icon className="w-6 h-6 text-primary mb-2" />
    <span className="text-sm font-semibold text-foreground">{title}</span>
    <span className="text-[10px] text-muted-foreground mt-1 text-center font-mono">{desc}</span>
  </motion.div>
);

export function ArchitectureShowcase() {
  return (
    <section className="py-20" id="architecture">
      <div className="space-y-16">
        <TerminalHeading title="System Architecture" subtitle="// Interactive data flow visualizations" />

        {/* Poshible.ai Flow */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">Poshible.ai Document Q&A Pipeline</h3>
          <div className="relative p-8 rounded-2xl border border-border/50 bg-card/20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 relative z-10">
              <NodeCard icon={FileText} title="PDF Input" desc="User uploads PDF" delay={0.1} />
              <FlowArrow delay={0.2} />
              <NodeCard icon={Server} title="Node.js API" desc="Chunking & Parsing" delay={0.3} />
              <div className="flex flex-col items-center justify-center gap-2">
                <FlowArrow delay={0.4} />
                <span className="text-[9px] font-mono text-muted-foreground uppercase">Embeddings</span>
              </div>
              <NodeCard icon={Cloud} title="OpenAI" desc="Vector Generation" delay={0.5} />
              <FlowArrow delay={0.6} />
              <NodeCard icon={Database} title="OpenSearch" desc="Semantic Search" delay={0.7} />
            </div>
          </div>
        </div>

        {/* Dealership Flow */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground border-b border-border/50 pb-2">Dealership Recommendation Workflow</h3>
          <div className="relative p-8 rounded-2xl border border-border/50 bg-card/20 overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 relative z-10">
              <NodeCard icon={User} title="Client" desc="Provides Pincode" delay={0.1} />
              <FlowArrow delay={0.2} />
              <NodeCard icon={Server} title="Express.js" desc="Request Handler" delay={0.3} />
              <div className="flex flex-col items-center justify-center gap-2">
                <FlowArrow delay={0.4} />
                <span className="text-[9px] font-mono text-muted-foreground uppercase">Geolocation API</span>
              </div>
              <NodeCard icon={MapPin} title="Google Maps" desc="Coord Retrieval" delay={0.5} />
              <div className="flex flex-col items-center justify-center gap-2">
                 <FlowArrow delay={0.6} />
                 <span className="text-[9px] font-mono text-muted-foreground uppercase">Spatial Query</span>
              </div>
              <NodeCard icon={Database} title="PostGIS/Redis" desc="Nearest Match" delay={0.7} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
