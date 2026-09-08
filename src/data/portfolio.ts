export interface ProjectItem {
  id: string;
  title: string;
  categoryTag: string;
  tech: string[];
  bullets: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface OssContribution {
  id: string;
  repo: string;
  repoUrl: string;
  whatYouDid: string;
  whyItMattered: string;
  prLinkPlaceholder: string;
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
    title: "OpenForge — AI Open-Source Intelligence Platform",
    categoryTag: "Monorepo & Hybrid AI",
    tech: ["TypeScript", "Next.js 16", "Turborepo", "Ollama", "OpenRouter", "GitHub GraphQL", "Vitest", "Playwright"],
    bullets: [
      "Monorepo Architecture: Built 9 domain packages with Next.js 16 App Router orchestrated via Turborepo & npm workspaces.",
      "Hybrid AI Routing: Pluggable dual layer supporting Ollama (qwen3:8b) for local zero-cost dev and OpenRouter (deepseek-v3) for production inference.",
      "5-Factor Deterministic Scorer: Ranks GitHub issues (0–100 scale) across Learning Impact, AI Relevance, Maintainer Friendliness, Impact & Merge Probability.",
      "Reliability & Testing: Enforced strict runtime environment validation with Zod and end-to-end testing via Playwright & Vitest.",
    ],
    repoUrl: undefined,
    liveUrl: "https://openforge-dev.vercel.app/",
  },
  {
    id: "poshible",
    title: "Poshible.ai — AI Legal RAG Platform",
    categoryTag: "AI & Legal RAG",
    tech: ["Node.js", "OpenAI", "AWS S3", "OpenSearch", "Google Auth", "REST APIs"],
    bullets: [
      "RESTful API Platform: Developed backend APIs for POSH Act legal compliance Q&A, achieving 95% response accuracy across 500+ daily queries.",
      "Document Ingestion Pipeline: Built PDF processing service with AWS S3 storage and OpenSearch vector embeddings (90% retrieval precision across 100+ legal documents).",
      "Rate Limiting & Stability: Implemented subscription management APIs enforcing query bounds, resolving circular API calls and reducing server load by 60%.",
      "Authentication & Security: Integrated Google OAuth to secure access points, reducing unauthorized access attempts by 85%.",
    ],
    repoUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "playwright-framework",
    title: "playwright-ui-api-suite — Test Automation Framework",
    categoryTag: "SDET & Automation",
    tech: ["Playwright", "TypeScript", "AJV", "GitHub Actions", "Page Object Model"],
    bullets: [
      "Automated Test Coverage: 83 tests covering UI and API layers with AJV JSON Schema contract validation running on GitHub Actions CI.",
      "Maintainable Architecture: Designed around the Page Object Model (POM) to isolate component changes and ensure long-term regression stability.",
    ],
    repoUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "jobhermes",
    title: "JobHermes — Autonomous Job Intelligence Agent",
    categoryTag: "Autonomous Agent",
    tech: ["TypeScript", "Node.js", "GPT-4o", "SQLite (WAL)", "node-cron", "Playwright"],
    bullets: [
      "Automated Intelligence Loop: Headless daemon agent running daily scheduled jobs to scrape career portals and evaluate listing relevance.",
      "Rate-Limited Scraping: Enforced respectful request limits (3 concurrent, 1.5s delay) to ensure uninterrupted data collection.",
      "6-Factor Match Scorer: Weighted evaluation across skill match, title, location, experience, salary, and company prestige using GPT-4o.",
      "Local Persistence: SQLite in WAL-mode for high concurrency, automated HTML report generation, and on-demand resume tailoring.",
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
      "Geographic Routing Logic: Engineered pin-code-based geographic routing logic for customer-to-dealership matching.",
      "High-Performance Caching: Implemented multi-tier Redis distance matrix caching, reducing external Google Maps API requests and costs by over 70%.",
      "Spatial Query Optimization: Utilized PostgreSQL spatial queries to ensure sub-second response times under peak query loads.",
    ],
    repoUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "qr-platform",
    title: "Dynamic QR Campaign Platform — High-Volume Engine",
    categoryTag: "High-Volume Backend",
    tech: ["Node.js", "MongoDB", "Express", "React", "Redis"],
    bullets: [
      "Dynamic Redirection Engine: Built backend APIs for generating, managing, and resolving dynamic QR codes with live routing targets.",
      "Real-Time Analytics: Tracked click telemetry, geographic metrics, and device statistics for real-time campaign performance.",
      "Fault-Tolerant Architecture: Handled high-concurrency event traffic surges smoothly with Redis caching and connection pooling.",
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
    whyItMattered: "Added verifiable traceability for AI agent actions in enterprise governance workflows.",
    prLinkPlaceholder: "[PR link: FILL IN]",
  },
  {
    id: "apify-crawlee",
    repo: "apify/crawlee",
    repoUrl: "https://github.com/apify/crawlee",
    whatYouDid: "Refactored BrowserCrawler internal request handling.",
    whyItMattered: "Improved execution structure and error handling in a widely used web scraping framework.",
    prLinkPlaceholder: "[PR link: FILL IN]",
  },
  {
    id: "mljar-mercury",
    repo: "mljar/mercury",
    repoUrl: "https://github.com/mljar/mercury",
    whatYouDid: "Built a customized theme for the authentication and login interface.",
    whyItMattered: "Enhanced visual hierarchy, responsiveness, and styling flexibility.",
    prLinkPlaceholder: "[PR link: FILL IN]",
  },
  {
    id: "modsetter-surfsense",
    repo: "MODSetter/SurfSense",
    repoUrl: "https://github.com/MODSetter/SurfSense",
    whatYouDid: "Added automated unit test coverage for async_retry logic.",
    whyItMattered: "Hardened reliability and resilience of asynchronous retry routines.",
    prLinkPlaceholder: "[PR link: FILL IN]",
  },
];

export const BIO_TEXT = `I build systems end-to-end and own them past 'it works.'

At Revolt Motors, that has meant designing backend platforms from schema to deployment — an ITSM ticketing system, a software license lifecycle manager, and a dynamic QR campaign platform — while wiring CI-integrated validation pipelines with GitHub Actions so releases do not regress.

On the automation side, I architected a Playwright + TypeScript framework using the Page Object Model covering 50+ workflows and 200+ API test cases, cutting manual regression effort by 60%.

On the AI side, I engineered a Legal RAG pipeline for Poshible.ai using AWS S3 for document storage and OpenSearch for vector embeddings, achieving 90% retrieval precision across 500+ daily queries with deterministic, schema-validated outputs.

I actively contribute upstream to open source (Microsoft, Apify) when encountering real bugs in production tools.`;

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    company: "Revolt Motors",
    role: "Software Engineer",
    period: "Jun 2025 – Present",
    bullets: [
      "Built ITSM ticketing platform, software license lifecycle system, and QR-based marketing campaign infrastructure.",
      "Architected Playwright + TypeScript automation framework (POM) covering 50+ workflows and 200+ API tests, reducing manual regression effort by 60%.",
      "Maintained Selenium + Java regression suite across 150+ UI flows with 95%+ CI stability.",
      "Configured Allure test reporting, cutting bug triage time by 40%.",
      "Built Appium Android automation with 85%+ critical path coverage.",
    ],
  },
  {
    company: "TLE-Eliminators",
    role: "QA Intern",
    period: "Jan – Jun 2025",
    bullets: [
      "Built Playwright + TypeScript regression suite, reducing escaped defects by 20%.",
      "Executed JMeter load and performance tests, identifying and resolving 3 critical bottlenecks prior to release.",
      "Designed Postman API test collections covering 100+ endpoints with automated assertion checks.",
    ],
  },
  {
    company: "Gopratle",
    role: "Software Engineer Intern",
    period: "Aug – Dec 2024",
    bullets: [
      "Designed and maintained RESTful APIs (Node.js/Express) serving active production workloads.",
      "Implemented JWT and Role-Based Access Control (RBAC) authentication across 100% of endpoints.",
      "Built media processing and upload pipeline using Multer and Cloudinary handling 500+ files monthly.",
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
    skills: ["OpenAI / GPT-4o APIs", "OpenSearch Vector DB", "RAG Pipeline Design", "Prompt Engineering"],
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
