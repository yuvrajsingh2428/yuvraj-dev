import { Navigation } from "@/components/layout/Navigation";
import { ElectricWire } from "@/components/ui/ElectricWire";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { EngineeringMindset } from "@/components/sections/EngineeringMindset";
import { ArchitectureShowcase } from "@/components/sections/ArchitectureShowcase";
import { SystemsThinking } from "@/components/sections/SystemsThinking";
import { Skills } from "@/components/sections/Skills";
import { WorkingWithMe } from "@/components/sections/WorkingWithMe";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ElectricWire />
      <Navigation />
      <main className="max-w-5xl mx-auto px-6 md:pl-20 w-full flex flex-col pt-10">
        <Hero />
        <Experience />
        <Projects />
        <SystemsThinking />
        <EngineeringMindset />
        <ArchitectureShowcase />
        <Skills />
        <WorkingWithMe />
        <Contact />
      </main>
    </>
  );
}
