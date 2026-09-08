"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { id: "01", label: "~/home", href: "/" },
  { id: "02", label: "~/work", href: "/work" },
  { id: "03", label: "~/systems", href: "/systems" },
  { id: "04", label: "~/about", href: "/about" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800 font-mono text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
        {/* Left: Terminal Host Prompt */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-white hover:text-neutral-400 transition-colors font-bold"
          >
            <span className="text-neutral-500">yuvraj@box:</span>
            <span>~$</span>
          </Link>
          <span className="hidden sm:inline-block text-[10px] text-neutral-600 border border-neutral-800 px-1.5 py-0.2">
            pts/0
          </span>
        </div>

        {/* Center: Routes */}
        <nav className="flex items-center gap-2 sm:gap-4">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-150 px-2 py-1 text-[11px] sm:text-xs ${
                  isActive
                    ? "bg-white text-black font-bold"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                }`}
              >
                <span className="opacity-50 mr-1 hidden sm:inline">{link.id}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Quick CLI actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://drive.google.com/uc?export=download&id=18ozkViRciZPbM-1pCSg03Kc7b2eVIoXO"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-neutral-700 bg-neutral-900 hover:bg-white hover:text-black hover:border-white text-neutral-300 text-[11px] px-2.5 py-0.5 transition-all hidden xs:inline-block"
          >
            [resume]
          </a>
          <span className="inline-flex items-center gap-1 text-[10px] text-neutral-400 border border-neutral-800 px-1.5 py-0.5">
            <span className="w-1.5 h-1.5 bg-neutral-200"></span>
            <span className="hidden md:inline">online</span>
          </span>
        </div>
      </div>
    </header>
  );
}
