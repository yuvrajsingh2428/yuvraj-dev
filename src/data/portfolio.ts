export interface ProjectItem {
  id: string;
  title: string;
  categoryTag: string;
  tech: string[];
  bullets: string[];
  repoUrl?: string; // FILL IN placeholder if undefined
  liveUrl?: string; // FILL IN placeholder if undefined
}

export interface OssContribution {
  id: string;
  repo: string;
  repoUrl: string;
  whatYouDid: string;
  whyItMattered: string;
  prLinkPlaceholder: string; // e.g. "[PR link: FILL IN]"
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface SkillStage {
  title: string;
  skills: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "openforge",
    title: "OpenForge ⚒️ — AI Open-Source Intelligence Platform",
    categoryTag: "Monorepo & Hybrid AI",
    tech: ["TypeScript", "Next.js 16", "Turborepo", "Ollama", "OpenRouter", "GitHub GraphQL", "Vitest", "Playwright"],
    bullets: [
      "Monorepo Architecture: 9 domain packages + Next.js 16 App Router orchestrated via Turborepo & npm workspaces.",
      "Hybrid AI Engine: Pluggable dual layer supporting Ollama (qwen3:8b) for local zero-cost dev and OpenRouter (deepseek-v3) for cloud inference.",
      "5-Factor Deterministic Scorer: Ranks issues on 0–100 scale measuring Learning Impact, AI Relevance, Maintainer Friendliness, Impact & Merge Probability.",
      "Validation & Quality: Enforced strict runtime environment validation via Zod & E2E suite via Playwright & Vitest.",
    ],
    repoUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "poshible",
    title: "Poshible.ai — AI / Legal RAG",
    categoryTag: "AI & Legal RAG",
    tech: ["Node.js", "OpenAI", "AWS S3", "OpenSearch", "Google Auth", "REST APIs"],
    bullets: [
      "Developed RESTful APIs for a POSH Act Q&A platform integrating OpenAI models, achieving 95% response accuracy across 500+ daily queries.",
      "Built a PDF processing service using AWS S3 for storage and OpenSearch for vector embeddings, processing 100+ documents at 90% retrieval precision.",
      "Implemented subscription management APIs enforcing query limits, resolving infinite API-call loops and reducing server load by 60%.",
      "Designed Google Auth for secure access, cutting unauthorized access attempts by 85%.",
    ],
    repoUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "playwright-framework",
    title: "playwright-ui-api-suite — Test Automation Framework",
    categoryTag: "SDET & Automation",
    tech: ["Playwright", "TypeScript", "AJV", "GitHub Actions"],
    bullets: [
      "83 tests covering UI and API layers with AJV schema contract validation, running in GitHub Actions CI.",
      "Built on Page Object Model architecture for maintainability at scale.",
    ],
    repoUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "jobhermes",
    title: "JobHermes — Automation Agent",
    categoryTag: "Autonomous Agent",
    tech: ["TypeScript", "Node.js", "GPT-4o", "SQLite", "node-cron", "Playwright"],
    bullets: [
      "Autonomous agent that scrapes, scores, and applies to job listings daily on schedule.",
      "Rate-limited scraper (3 concurrent, 1.5s delay); GPT-4o scoring across 6 weighted dimensions (skill match, title, location, experience, salary, prestige).",
      "SQLite WAL-mode storage, HTML report generation, on-demand GPT-4o resume tailoring.",
    ],
    repoUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "dealership-engine",
    title: "Dealership Recommendation Engine — Geospatial Routing",
    categoryTag: "Systems & Infrastructure",
    tech: ["Google Maps API", "PostgreSQL", "Redis", "TypeScript", "Node.js"],
    bullets: [
      "Engineered customer pin-code-based geographic routing logic for dynamic dealership matching.",
      "Integrated Google Maps API for precise distance calculation and geospatial mapping.",
      "Optimized spatial queries using PostgreSQL geospatial extensions and Redis caching layers, cutting external map API costs by over 70%.",
    ],
    repoUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "qr-platform",
    title: "Dynamic QR Campaign Platform — Fault-Tolerant Engine",
    categoryTag: "High-Volume Backend",
    tech: ["Node.js", "MongoDB", "Express", "React", "Redis"],
    bullets: [
      "Built backend APIs for generating, managing, and tracking dynamic QR codes with dynamic destination routing.",
      "Implemented real-time click analytics and geo-location metrics for campaign performance monitoring.",
      "Designed fault-tolerant campaign workflows to handle live event traffic spikes smoothly without drop-offs.",
    ],
    repoUrl: undefined,
    liveUrl: undefined,
  },
];

export const OSS_CONTRIBUTIONS: OssContribution[] = [
  {
    id: "microsoft-agent-gov",
    repo: "microsoft/agent-governance-toolkit",
    repoUrl: "https://github.com/microsoft/agent-governance-toolkit",
    whatYouDid: "Contributed an audit-trail capability to the TypeScript SDK (+243/−4 diff).",
    whyItMattered: "Added traceability for agent actions in governance workflows.",
    prLinkPlaceholder: "[PR link: FILL IN]",
  },
  {
    id: "apify-crawlee",
    repo: "apify/crawlee",
    repoUrl: "https://github.com/apify/crawlee",
    whatYouDid: "Refactored BrowserCrawler internals.",
    whyItMattered: "Improved code structure in a widely-used web scraping framework.",
    prLinkPlaceholder: "[PR link: FILL IN]",
  },
  {
    id: "mljar-mercury",
    repo: "mljar/mercury",
    repoUrl: "https://github.com/mljar/mercury",
    whatYouDid: "Built a custom theme for the login view.",
    whyItMattered: "Enhanced UI visual hierarchy and styling flexibility.",
    prLinkPlaceholder: "[PR link: FILL IN]",
  },
  {
    id: "modsetter-surfsense",
    repo: "MODSetter/SurfSense",
    repoUrl: "https://github.com/MODSetter/SurfSense",
    whatYouDid: "Added unit test coverage for async_retry.",
    whyItMattered: "Hardened reliability of asynchronous retry logic.",
    prLinkPlaceholder: "[PR link: FILL IN]",
  },
];

export const BIO_TEXT = `I build systems end-to-end and own them past 'it works.' At Revolt Motors, that's meant designing backend platforms from schema to deployment — an ITSM ticketing system, a license lifecycle manager, a QR campaign platform — and wiring CI-integrated validation pipelines with GitHub Actions so releases don't regress silently. On the automation side, I architected a Playwright + TypeScript framework using the Page Object Model that now covers 50+ workflows and 200+ API test cases, cutting manual regression effort by 60%. On the AI side, I designed a RAG pipeline for Poshible.ai — S3 storage, OpenSearch vector embeddings, 90% retrieval precision across 500+ daily queries — with deterministic, schema-validated outputs rather than best-effort prompting. I contribute to open source (Microsoft, Apify) when I hit real bugs in tools I use. I care more about whether a system holds up at scale and under failure than whether a demo looks good once.`;

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    company: "Revolt Motors",
    role: "Software Engineer",
    period: "Jun 2025 – Present",
    bullets: [
      "Built ITSM ticketing platform, software license lifecycle system, QR-based marketing campaign platform.",
      "Architected Playwright + TypeScript automation framework (POM) covering 50+ workflows and 200+ API tests, reducing manual regression effort by 60%.",
      "Owned Selenium + Java regression suite (150+ UI flows, 95%+ CI stability).",
      "Configured Allure reporting, cutting bug triage time by 40%.",
      "Built Appium Android automation with 85%+ critical path coverage.",
    ],
  },
  {
    company: "TLE-Eliminators",
    role: "QA Intern",
    period: "Jan – Jun 2025",
    bullets: [
      "Built Playwright + TypeScript regression suite, reducing escaped defects by 20%.",
      "Ran JMeter load/performance tests, flagging 3 critical bottlenecks pre-release.",
      "Designed Postman API test collections across 100+ endpoints.",
    ],
  },
  {
    company: "Gopratle",
    role: "Software Engineer Intern",
    period: "Aug – Dec 2024",
    bullets: [
      "Designed RESTful APIs (Node.js/Express) serving 100+ monthly users.",
      "Implemented JWT + RBAC auth across 100% of endpoints.",
      "Built media upload pipeline (Multer + Cloudinary, 500+ files/month).",
    ],
  },
];

export const SKILL_STAGES: SkillStage[] = [
  {
    title: "1. Languages & Frameworks",
    skills: ["TypeScript", "JavaScript (ES6+)", "Node.js", "Python", "Java", "React", "Next.js (App Router)"],
  },
  {
    title: "2. Systems & Architecture",
    skills: ["REST API Design", "PostgreSQL", "MongoDB", "SQLite (WAL-mode)", "Redis Caching", "Docker", "Microservices"],
  },
  {
    title: "3. AI & LLM Engineering",
    skills: ["OpenAI/GPT-4o APIs", "OpenSearch Vector DB", "RAG Pipeline Design", "Prompt Engineering"],
  },
  {
    title: "4. Testing & Automation",
    skills: ["Playwright", "Selenium WebDriver", "Appium", "JMeter", "Postman", "TestNG", "CI/CD Pipeline Automation"],
  },
  {
    title: "5. Tools & Platforms",
    skills: ["GitHub Actions", "Git", "Docker", "AWS (S3)", "Vercel", "Allure Reporting", "Jira"],
  },
];

export const CONTACT_INFO = {
  email: "yuvrajsingh.connect@gmail.com",
  linkedin: "https://linkedin.com/in/yuvrajsingh024",
  github: "https://github.com/yuvrajsingh2428",
  badges: [
    "SWE @ Revolt Motors",
    "@agentrust-io",
    "OSS Contributor @microsoft @apify",
  ],
};
