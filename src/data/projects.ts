export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  challenge: string;
  tech: string[];
  details: string[];
  githubUrl?: string;
  liveUrl?: string;
  engineeringNote?: string;
  category: "ai" | "automation" | "engineering";
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "openforge",
    title: "OpenForge ⚒️ — AI Open-Source Intelligence Platform",
    oneLiner: "Monorepo developer platform with 5-factor issue scoring & hybrid AI mentorship (Ollama + OpenRouter)",
    challenge: "Contributing to open-source software has a steep learning curve. The challenge was building an intelligent platform that evaluates GitHub repositories, scores issues on a 5-factor scale, and provides hybrid local/cloud AI mentorship.",
    tech: ["TypeScript", "Next.js 16", "Turborepo", "Ollama", "OpenRouter", "GitHub GraphQL", "Playwright", "Vitest"],
    details: [
      "Monorepo Architecture: 9 domain packages + Next.js 16 App Router orchestrated via Turborepo & npm workspaces.",
      "Hybrid AI Engine: Pluggable dual layer supporting Ollama (qwen3:8b) for local zero-cost dev and OpenRouter (deepseek-v3) for cloud inference.",
      "5-Factor Deterministic Scorer: Ranks issues on 0–100 scale measuring Learning Impact, AI Relevance, Maintainer Friendliness, Impact & Merge Probability.",
      "Repository Intelligence: Maps module dependencies, architectural patterns, and project health signals.",
      "Validation & Quality: Enforced strict runtime environment validation via Zod & E2E suite via Playwright & Vitest."
    ],
    engineeringNote: "Built a pluggable provider abstraction switching seamlessly between Ollama for offline zero-cost dev and OpenRouter for cloud inference with structured Zod runtime schema validation.",
    githubUrl: "https://github.com/yuvrajsingh2428",
    category: "ai",
    featured: true,
  },
  {
    id: "jobhermes",
    title: "JobHermes — AI Job Hunting Agent",
    oneLiner: "Autonomous agent that scrapes, scores, and applies to jobs — runs daily at 9 AM IST",
    challenge: "Job hunting is unstructured noise. The challenge was building a system that could filter hundreds of listings down to ranked opportunities with zero manual effort daily.",
    tech: ["TypeScript", "Node.js", "GPT-4o", "SQLite", "node-cron", "Playwright"],
    details: [
      "Hermes Agent Orchestrator: TinyFetch scraper with HTTP retry, rate limiting (3 concurrent, 1.5s delay).",
      "GPT-4o Relevance Filter & Scorer: Multi-dimensional scoring across Skill match (30%), Title (20%), Location (15%), Experience (15%), Salary (10%), Prestige (10%).",
      "SQLite WAL-mode storage with dark-themed HTML report generator & score charts.",
      "On-demand GPT-4o resume tailoring and tone-controlled cover letter generator.",
      "node-cron scheduling for automated daily execution at 9 AM IST."
    ],
    engineeringNote: "Structured as a headless CLI & daemon agent that runs deterministically without manual intervention.",
    githubUrl: "https://github.com/yuvrajsingh2428",
    category: "automation",
    featured: true,
  },
  {
    id: "poshible",
    title: "Poshible.ai — POSH Act Q&A Platform",
    oneLiner: "AI-powered legal Q&A serving 500+ daily queries at 95% accuracy",
    challenge: "Building a RAG pipeline that stays accurate on domain-specific legal content (POSH Act) while maintaining zero-cost infrastructure and preventing API abuse.",
    tech: ["Node.js", "OpenAI", "AWS S3", "OpenSearch", "Google Auth", "REST APIs"],
    details: [
      "95% accuracy on 500+ queries/day via REST APIs → OpenAI embeddings & completion.",
      "PDF Vector Pipeline: Document upload → AWS S3 → OpenSearch vector embeddings → semantic retrieval (100+ docs, 90% precision).",
      "Subscription enforcement and rate limiting resolved infinite API loops, cutting load by 60%.",
      "Google OAuth caps reduced unauthorized access attempts by 85%."
    ],
    engineeringNote: "Used OpenSearch for vector storage instead of expensive managed services, keeping infrastructure costs near zero while maintaining high retrieval precision.",
    githubUrl: "https://github.com/yuvrajsingh2428",
    category: "ai",
    featured: true,
  },
  {
    id: "dealership-engine",
    title: "Dealership Recommendation Engine",
    oneLiner: "Geographic routing engine for dynamic dealership matching with sub-second response times",
    challenge: "Executing complex spatial distance calculations on the fly while maintaining sub-second API responses during peak booking flows.",
    tech: ["Google Maps API", "PostgreSQL", "Redis", "TypeScript", "Node.js"],
    details: [
      "Engineered customer pin-code-based geographic routing logic.",
      "Integrated Google Maps API for precise distance calculation and geospatial mapping.",
      "Optimized spatial queries using PostgreSQL geospatial extensions and Redis caching layers.",
      "Substantially reduced booking friction and improved conversion rates."
    ],
    engineeringNote: "Leveraged multi-tier Redis caching to cache distance matrices, reducing external map API costs by over 70%.",
    githubUrl: "https://github.com/yuvrajsingh2428",
    category: "engineering",
    featured: false,
  },
  {
    id: "qr-platform",
    title: "Dynamic QR Campaign Platform",
    oneLiner: "Fault-tolerant redirection engine & analytics backend handling high-volume campaign traffic",
    challenge: "Engineering a fault-tolerant redirection flow capable of surviving massive concurrent traffic spikes during live promotional events.",
    tech: ["Node.js", "MongoDB", "Express", "React", "Redis"],
    details: [
      "Built backend APIs for generating, managing, and tracking dynamic QR codes with dynamic destination routing.",
      "Implemented real-time click analytics and geo-location metrics for campaign performance monitoring.",
      "Designed fault-tolerant campaign workflows to handle traffic spikes smoothly without drop-offs."
    ],
    githubUrl: "https://github.com/yuvrajsingh2428",
    category: "engineering",
    featured: false,
  }
];
