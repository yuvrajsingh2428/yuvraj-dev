export interface ProjectItem {
  id: string;
  title: string;
  categoryTag: string;
  summary: string;
  tech: string[];
  bullets: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface OssContribution {
  id: string;
  repo: string;
  repoUrl: string;
  prUrl?: string;
  whatYouDid: string;
  whyItMattered: string;
  prLinkPlaceholder?: string;
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
    title: "OpenForge — AI OSS Intelligence Platform",
    categoryTag: "Monorepo & Hybrid AI",
    summary: "Monorepo platform with 5-factor deterministic issue scoring & hybrid AI mentorship (Ollama + OpenRouter).",
    tech: ["TypeScript", "Next.js 16", "Turborepo", "Ollama", "OpenRouter", "Playwright"],
    bullets: [
      "9 domain packages orchestrated via Turborepo & npm workspaces.",
      "Dual AI routing: Ollama (qwen3:8b) local dev & OpenRouter (deepseek-v3) prod.",
      "5-factor deterministic issue scoring (0–100) across merge probability & impact.",
    ],
    repoUrl: undefined,
    liveUrl: "https://openforge-dev.vercel.app/",
  },
  {
    id: "poshible",
    title: "Poshible.ai — AI Legal RAG Platform",
    categoryTag: "AI & Legal RAG",
    summary: "Domain-specific Legal RAG platform serving 500+ daily queries at 95% accuracy using AWS S3 & OpenSearch.",
    tech: ["Node.js", "OpenAI", "AWS S3", "OpenSearch", "Google OAuth", "REST APIs"],
    bullets: [
      "PDF ingestion with AWS S3 storage & OpenSearch vector embeddings (90% precision).",
      "Resolved circular API calls with query bounds, reducing server load by 60%.",
      "Google OAuth integration cutting unauthorized access attempts by 85%.",
    ],
    repoUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "playwright-framework",
    title: "playwright-ui-api-suite — SDET Framework",
    categoryTag: "SDET & Automation",
    summary: "Full-lifecycle Page Object Model test suite with 83+ UI/API tests and AJV schema contract validation in CI.",
    tech: ["Playwright", "TypeScript", "AJV Schema", "GitHub Actions", "POM Architecture"],
    bullets: [
      "83 automated tests covering UI flows & API contract validation in GitHub Actions CI.",
      "Strict Page Object Model (POM) isolating components for regression stability.",
    ],
    repoUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "jobhermes",
    title: "JobHermes — Autonomous Job Hunting Agent",
    categoryTag: "Autonomous Agent",
    summary: "Headless daemon agent that scrapes career boards, evaluates match relevance via GPT-4o, and runs on SQLite WAL.",
    tech: ["TypeScript", "Node.js", "GPT-4o", "SQLite (WAL)", "node-cron", "Playwright"],
    bullets: [
      "Automated scraping daemon with respectful rate limits (3 concurrent, 1.5s delay).",
      "6-factor weighted relevance scoring across skills, location, and compensation.",
      "On-demand GPT-4o resume tailoring and automated dark-themed HTML report generation.",
    ],
    repoUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "dealership-engine",
    title: "Dealership Recommendation Engine",
    categoryTag: "Systems & Infrastructure",
    summary: "Geospatial customer-to-dealership matching engine with multi-tier Redis distance matrix caching.",
    tech: ["Google Maps API", "PostgreSQL", "Redis", "TypeScript", "Node.js"],
    bullets: [
      "Engineered customer pin-code geographic routing with sub-second response times.",
      "Multi-tier Redis caching reduced Google Maps API requests and costs by over 70%.",
      "Optimized PostgreSQL spatial queries for high-volume booking traffic.",
    ],
    repoUrl: undefined,
    liveUrl: undefined,
  },
  {
    id: "qr-platform",
    title: "Dynamic QR Campaign Platform",
    categoryTag: "High-Volume Backend",
    summary: "Fault-tolerant dynamic QR redirection engine with live click telemetry analytics and Redis connection pooling.",
    tech: ["Node.js", "MongoDB", "Express", "React", "Redis"],
    bullets: [
      "High-throughput URL resolution and real-time click/geographic telemetry tracking.",
      "Engineered connection pooling and Redis caching to withstand surge event traffic.",
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
    prUrl: "https://github.com/microsoft/agent-governance-toolkit/pulls?q=is%3Apr+author%3Ayuvrajsingh2428",
    whatYouDid: "Contributed an audit-trail capability to the TypeScript SDK (+243/−4 diff).",
    whyItMattered: "Added verifiable traceability for AI agent actions in enterprise governance workflows.",
    prLinkPlaceholder: "microsoft/agent-governance-toolkit#pr",
  },
  {
    id: "apify-crawlee",
    repo: "apify/crawlee",
    repoUrl: "https://github.com/apify/crawlee",
    prUrl: "https://github.com/apify/crawlee/pulls?q=is%3Apr+author%3Ayuvrajsingh2428",
    whatYouDid: "Refactored BrowserCrawler internal request handling.",
    whyItMattered: "Improved execution structure and error handling in a widely used web scraping framework.",
    prLinkPlaceholder: "apify/crawlee#pr",
  },
  {
    id: "mljar-mercury",
    repo: "mljar/mercury",
    repoUrl: "https://github.com/mljar/mercury",
    prUrl: "https://github.com/mljar/mercury/pulls?q=is%3Apr+author%3Ayuvrajsingh2428",
    whatYouDid: "Built a customized theme for the authentication and login interface.",
    whyItMattered: "Enhanced visual hierarchy, responsiveness, and styling flexibility.",
    prLinkPlaceholder: "mljar/mercury#pr",
  },
  {
    id: "modsetter-surfsense",
    repo: "MODSetter/SurfSense",
    repoUrl: "https://github.com/MODSetter/SurfSense",
    prUrl: "https://github.com/MODSetter/SurfSense/pulls?q=is%3Apr+author%3Ayuvrajsingh2428",
    whatYouDid: "Added automated unit test coverage for async_retry logic.",
    whyItMattered: "Hardened reliability and resilience of asynchronous retry routines.",
    prLinkPlaceholder: "MODSetter/SurfSense#pr",
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
  twitter: "https://x.com/itsyuvrajx",
  badges: [
    "SWE @ Revolt Motors",
    "@agentrust-io",
    "OSS Contributor @microsoft @apify",
  ],
};
