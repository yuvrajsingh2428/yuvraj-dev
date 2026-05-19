# Finalizing High-Performance Portfolio Engineering

A premium, production-grade, Next.js 15 developer portfolio engineered specifically for a high-impact **Backend Engineer & AI Systems Developer**. Featuring a custom design system, physics-driven interaction layers, and rich visual architecture panels.

Live at: [yuvraj-dev.vercel.app](https://yuvraj-dev.vercel.app)

---

## ⚙️ Core Engineering Pillars & Interactivity

The frontend of this portfolio was built from the ground up to reflect the same level of care, telemetry, and robustness required for complex backend microservices.

### 1. Electric Vertical Experience Timeline (`src/components/sections/Experience.tsx`)
*   **Scroll-Driven Glow:** Replaced standard grids with a custom `ElectricTimeline` container. A **40px glowing gradient charge** (`transparent` → `#00FFC2` → `transparent`) travels along the timeline relative to scroll progress using Framer Motion `useScroll` and `useTransform`.
*   **Active company Dot Pulsing:** Dot markers automatically transition from default status to scale-glow state. The current active role (**Revolt Motors**) indicator runs an organic, breathing CSS pulse keyframe at all times.
*   **Revolt Motors (Dual SWE + SDET Track):** Stacks both the Backend SWE track and the Test Infrastructure track side-by-side on desktop, collapsing to an interactive mobile-tab layout.
*   **TLE Eliminators (Terminal Log panel):** Redesigned the competitive programming achievements as a monospaced terminal logs stream (`qa-log.sh`) styled with scanlines and stagger-typed log lines (`[PASS]`, `[LOAD]`, `[AUTO]`).

### 2. Physics-Driven "Skill Constellation" Graph (`src/components/sections/Skills.tsx`)
*   **Node Graph Architecture:** Replaces standard grid lists on desktop with a node-graph-inspired layout mapping critical skills around a central **Yuvraj** node.
*   **Dynamic Data Cables:** Solid SVG cables connect orbiting sub-clusters (Backend, Test Infra, AI & Tools) to the center, displaying animated **data-pulse particles** traveling along their SVG paths using `stroke-dashoffset`.
*   **Interactive Spring Badges:** Hovering over individual skill pills triggers a 1.1x spring enlargement, active border glow, and dynamically illuminates the connection wire back to the sub-cluster node.

### 3. Smooth Portal Preview System (`src/components/sections/Projects.tsx`)
*   **Zero-Clipping Portals:** Employs React `createPortal` to render project hover previews directly at the root of `document.body` to avoid container clipping from parent `overflow: hidden` contexts.
*   **RAF LERP Follower:** The preview panel tracks the mouse pointer smoothly using a LERP (Linear Interpolation) loop driven by `requestAnimationFrame` (`position += (target - position) * 0.1`) rather than heavy state re-renders.
*   **Custom Preview cards:** Hovering over *JobHermes* dynamically types out mock system logs in real-time. Hovering over *Poshible.ai* renders a mock JSON REST API response card with active syntax highlighting.

### 4. Typographic manifesto (`src/components/sections/EngineeringMindset.tsx`)
*   Inspired by high-end editorial structures like *hashgraphvc.com*.
*   Features a generous, high-contrast grid centered on typographic rows instead of cards or panels.
*   **Visual Highlights:** Monospace labels, huge ghosted numbers, scroll-triggered horizontal separators that draw themselves from `width: 0% ➔ 100%` using an optimized `IntersectionObserver`, and word-by-word scroll fade animations.

---

## 🛠️ The Tech Stack

*   **Framework:** Next.js 15 (App Router, static site rendering)
*   **Styling & UI:** Tailwind CSS v4, Lucide React, Tabler Icons (`react-icons/tb`)
*   **Animation Engine:** Framer Motion (Spring-based transforms, Scroll Layouts, AnimatePresence)
*   **Languages:** TypeScript, TSX, modern ESNext
*   **Deployment:** Vercel (CI/CD pipeline integrated on push)

---

## 🚀 Getting Started

### Installation

Clone the repository:
```bash
git clone https://github.com/yuvrajsingh2428/yuvraj-dev.git
cd yuvraj-dev
```

Install production and developer dependencies:
```bash
npm install
```

### Local Development

Launch the hot-reloading development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build & Compilation

Verify TypeScript typing, clean-code linting, and compile the optimized production bundle locally:
```bash
npm run build
```
The static compiler will create optimized HTML/CSS assets in the `.next/` directory ready for target deployments.
