"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TerminalHeading } from "@/components/ui/TerminalHeading";
import { MessageCircle, Clock, GitPullRequest } from "lucide-react";

const workStyles = [
  {
    title: "Async-first communicator",
    description: "I document decisions in writing, over-communicate blockers early, and ship working demos instead of long status updates.",
    icon: <MessageCircle className="w-6 h-6 text-primary" />
  },
  {
    title: "IST timezone, flexible overlap",
    description: "Based in India (UTC+5:30). I regularly overlap with EU morning (10am–2pm IST) and US evening. I default to deep work blocks, not infinite standups.",
    icon: <Clock className="w-6 h-6 text-primary" />
  },
  {
    title: "PR-driven, test-first mindset",
    description: "Small, reviewable PRs with clear descriptions. I treat code review as knowledge transfer, not gatekeeping.",
    icon: <GitPullRequest className="w-6 h-6 text-primary" />
  }
];

export function WorkingWithMe() {
  return (
    <section className="py-20 relative border-t border-border/30" id="working-with-me">
      <div className="space-y-12">
        <TerminalHeading title="Working With Me" subtitle="// Honest expectations for remote teams" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workStyles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/20 border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="mb-4 p-3 bg-secondary/20 w-max rounded-lg border border-border/30 group-hover:border-primary/30 transition-colors">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
