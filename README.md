# Yuvraj Singh — Systems & AI Platforms Engineer Portfolio

[![Live Production Site](https://img.shields.io/badge/Production%20Deployment-yuvrajsingh--dev.vercel.app-white?style=for-the-badge&logo=vercel&logoColor=black)](https://yuvrajsingh-dev.vercel.app/)
[![Next.js 16](https://img.shields.io/badge/Framework-Next.js%2016%20(Turbopack)-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript%205-white?style=for-the-badge&logo=typescript&logoColor=black)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-black?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

> **Live Portfolio:** [https://yuvrajsingh-dev.vercel.app/](https://yuvrajsingh-dev.vercel.app/)

A high-performance, developer-first portfolio designed for a **Backend Systems & AI Platforms Engineer**. Built with a pure monochrome terminal design system, an interactive virtual Unix shell emulator, runtime pipeline architecture visualizers, and zero bloat.

---

## 🖥️ Live Application & Architecture

- **Production URL:** [https://yuvrajsingh-dev.vercel.app/](https://yuvrajsingh-dev.vercel.app/)
- **Core Focus:** Backend Systems, Legal RAG Pipelines, Autonomous Agents, Test Automation Infrastructure (SDET), and Upstream Open-Source Hardening.

---

## 📐 System Highlights & Features

### 1. Dual-Boot Interface: GUI & Interactive Terminal Shell
- **Terminal Shell Mode (`cli`):** Full-screen downward-flowing interactive pseudo-terminal environment featuring:
  - Virtual Unix filesystem (`~`, `/work`, `/systems`, `/about`, `/core_capabilities`, `/oss`)
  - Built-in command interpreter: `help`, `ls`, `cd`, `cat`, `grep`, `pwd`, `clear`, `contact`, `gui`, `exit`
  - Up/Down arrow command history navigation, Tab-completion, and clickable inline file quick-actions
- **Monochrome Web GUI Mode (`gui`):** Minimalist, high-density dashboard engineered for rapid scanning without unnecessary visual noise.

### 2. Interactive System Architecture Visualizer (`/systems`)
- **Pipeline Flow Inspector:** Visualizes real-time data movement, components, and protocol handoffs across 4 production architectures:
  1. **Poshible.ai:** Legal RAG vector retrieval pipeline (AWS S3 -> OpenSearch -> OpenAI GPT-4o -> Zod validation).
  2. **OpenForge:** 5-factor issue scorer and dual AI inference engine (GitHub GraphQL -> Ollama / OpenRouter DeepSeek).
  3. **JobHermes:** Autonomous headless job discovery agent (Rate-limited scraping -> GPT-4o scoring -> SQLite WAL -> node-cron).
  4. **Geospatial Proximity Router:** Dealership search routing (Redis cache -> PostGIS radial queries -> Google Distance Matrix API fallback).
- **Deep-Dive Drawer:** Clickable node states exposing runtime tech stacks, throughput metrics, and engineering tradeoffs.

### 3. Production Work & Open-Source Engineering (`/work`)
- **Engineered Systems:** Deep technical overviews of full-lifecycle implementations including challenges, architectural designs, and production metric impacts.
- **Upstream Open-Source Hardening:** Highlights verified contributions to enterprise repositories including **Microsoft Agent Governance Toolkit** (audit trail capability) and **Apify Crawlee** (asynchronous scraping internals).

### 4. Engineering Manifesto & Technical Matrix (`/about`)
- **Philosophy:** Core principles governing software architecture (*Own Past "It Works"*, *Deterministic & Schema-Validated*, *Automate Before Scaling*).
- **Competency Matrix (`skills.json`):** Categorized matrix spanning Languages, Systems & Infrastructure, AI/ML Tooling, and Test Automation.
- **Git Career Log:** Chronological engineering timeline at **Revolt Motors** (Software Engineer) and **TLE-Eliminators** (Problem Setter & Tester).

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router, Turbopack, React 19) |
| **Language** | TypeScript 5 (Strict Mode) |
| **Styling** | Tailwind CSS v4 (Pure Monochrome Dark Palette: `#000000`, `#0a0a0a`, `#ffffff`) |
| **Animations** | Framer Motion (Boot Selector transitions & modal choreography) |
| **Icons** | Lucide React |
| **Deployment** | Vercel (Automated CI/CD Git integration) |

---

## 📁 Repository Structure

```
react-portfolio-yuvraj/
├── public/                     # Static media assets & profile imagery
│   ├── profile.jpg
│   └── yuvraj_nobg.jpg
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/page.tsx      # Engineering manifesto, tenets & skills matrix
│   │   ├── projects/page.tsx   # Projects route alias
│   │   ├── systems/page.tsx    # Interactive 4-pipeline architecture visualizer
│   │   ├── work/page.tsx       # Production systems & open-source contributions
│   │   ├── globals.css         # Global Tailwind CSS tokens
│   │   ├── layout.tsx          # Root layout with persistent header & footer
│   │   └── page.tsx            # Home page (Terminal Shell / GUI boot view)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx      # Monochrome terminal status footer
│   │   │   └── Navigation.tsx  # Header navigation & prompt indicator
│   │   ├── terminal/
│   │   │   ├── BootSelector.tsx# Mode switch modal (GUI / CLI)
│   │   │   └── TerminalGame.tsx# Interactive virtual shell emulator
│   │   └── ui/
│   │       └── ProfilePortrait.tsx # Monochrome profile portrait frame
│   ├── data/
│   │   └── portfolio.ts        # Centralized single source of truth for portfolio data
│   └── lib/
│       └── utils.ts            # UI utility functions
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler configuration
└── README.md                   # Project documentation
```

---

## ⚡ Getting Started Locally

### Prerequisites
- Node.js 18.18.0 or higher
- npm (or pnpm / yarn)

### 1. Clone the repository
```bash
git clone https://github.com/yuvrajsingh2428/yuvraj-dev.git
cd yuvraj-dev
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 📬 Contact & Connect

- **Live URL:** [https://yuvrajsingh-dev.vercel.app/](https://yuvrajsingh-dev.vercel.app/)
- **Email:** [yuvrajsingh2428@gmail.com](mailto:yuvrajsingh2428@gmail.com)
- **GitHub:** [@yuvrajsingh2428](https://github.com/yuvrajsingh2428)
- **LinkedIn:** [yuvrajsingh024](https://www.linkedin.com/in/yuvrajsingh024/)
- **X / Twitter:** [@itsyuvrajx](https://x.com/itsyuvrajx)
