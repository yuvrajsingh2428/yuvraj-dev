"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";

// ─── Preview content definitions ─────────────────────────────────────────────

const TERMINAL_LINES = [
  { t: "[09:00]", msg: "Hermes agent started", color: "#00FFC2" },
  { t: "[09:01]", msg: "Scanning 12 companies...", color: "#a3a3a3" },
  { t: "[09:03]", msg: "47 jobs found, scoring...", color: "#a3a3a3" },
  { t: "[09:04]", msg: "8 jobs above threshold (60+)", color: "#00FFC2" },
];

function TerminalPreview() {
  const [visibleLines, setVisibleLines] = useState(0);
  useEffect(() => {
    setVisibleLines(0);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= TERMINAL_LINES.length) clearInterval(id);
    }, 220);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ fontFamily: "monospace", fontSize: 11 }}>
      <div style={{ color: "#555", marginBottom: 8, fontSize: 10, borderBottom: "1px solid #1a1a1a", paddingBottom: 6 }}>
        jobhermes / scan-log
      </div>
      {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
        <div key={i} style={{ marginBottom: 4, display: "flex", gap: 8 }}>
          <span style={{ color: "#444", flexShrink: 0 }}>{line.t}</span>
          <span style={{ color: line.color }}>{line.msg}</span>
        </div>
      ))}
      {visibleLines < TERMINAL_LINES.length && (
        <span style={{ color: "#00FFC2", animation: "blink 0.8s step-end infinite" }}>▊</span>
      )}
    </div>
  );
}

function ApiPreview() {
  return (
    <div style={{ fontFamily: "monospace", fontSize: 11 }}>
      <div style={{ color: "#555", marginBottom: 8, fontSize: 10, borderBottom: "1px solid #1a1a1a", paddingBottom: 6 }}>
        GET /api/query → 200 OK
      </div>
      <div style={{ color: "#888", marginBottom: 6 }}>{"{"}</div>
      {[
        { key: "status",         val: "200",   valColor: "#00FFC2" },
        { key: "accuracy",       val: '"95%"', valColor: "#A78BFA" },
        { key: "queries_today",  val: "512",   valColor: "#F59E0B" },
        { key: "model",          val: '"gpt-4o"', valColor: "#60a5fa" },
      ].map(({ key, val, valColor }) => (
        <div key={key} style={{ marginBottom: 3, paddingLeft: 16 }}>
          <span style={{ color: "#60a5fa" }}>"{key}"</span>
          <span style={{ color: "#888" }}>: </span>
          <span style={{ color: valColor }}>{val}</span>
        </div>
      ))}
      <div style={{ color: "#888" }}>{"}"}</div>
    </div>
  );
}

function GenericPreview({ title }: { title: string }) {
  return (
    <div style={{ fontFamily: "monospace", fontSize: 11 }}>
      <div style={{ color: "#555", marginBottom: 8, fontSize: 10, borderBottom: "1px solid #1a1a1a", paddingBottom: 6 }}>
        project / overview
      </div>
      <div style={{ color: "#a3a3a3", lineHeight: 1.6 }}>
        {title}<br />
        <span style={{ color: "#444" }}>→ backend · production-ready</span>
      </div>
    </div>
  );
}

function getPreviewContent(title: string) {
  if (title.includes("JobHermes")) return <TerminalPreview />;
  if (title.includes("Poshible"))  return <ApiPreview />;
  return <GenericPreview title={title} />;
}

// ─── Portal panel ─────────────────────────────────────────────────────────────

interface FloatingPreviewProps {
  title: string;
  visible: boolean;
  anchorX: number; // current raw mouse X
  anchorY: number; // current raw mouse Y
}

export function FloatingPreview({ title, visible, anchorX, anchorY }: FloatingPreviewProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: anchorX, y: anchorY });
  const target = useRef({ x: anchorX, y: anchorY });
  const rafRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Update target on mouse move
  useEffect(() => {
    target.current = { x: anchorX + 20, y: anchorY - 20 };
  }, [anchorX, anchorY]);

  // RAF lerp loop
  useEffect(() => {
    if (!visible) { cancelAnimationFrame(rafRef.current); return; }

    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.1;
      pos.current.y += (target.current.y - pos.current.y) * 0.1;

      if (panelRef.current) {
        panelRef.current.style.left = `${pos.current.x}px`;
        panelRef.current.style.top  = `${pos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    // Snap to cursor immediately on show to avoid flying from 0,0
    pos.current = { x: target.current.x, y: target.current.y };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [visible]);

  if (!mounted) return null;

  const panel = (
    <>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
      <div
        ref={panelRef}
        style={{
          position: "fixed",
          width: 280,
          minHeight: 180,
          backgroundColor: "#0a0a0a",
          border: "0.5px solid #222",
          borderRadius: 8,
          padding: 12,
          pointerEvents: "none",
          zIndex: 9998,
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.9)",
          transition: visible
            ? "opacity 0.15s ease, transform 0.15s ease"
            : "opacity 0.1s ease, transform 0.1s ease",
          boxShadow: "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
        }}
      >
        {getPreviewContent(title)}
      </div>
    </>
  );

  return createPortal(panel, document.body);
}

// ─── Hook for project cards ───────────────────────────────────────────────────

export function useProjectPreview() {
  const [state, setState] = useState({ visible: false, x: 0, y: 0 });

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    setState(s => ({ ...s, x: e.clientX, y: e.clientY }));
  }, []);

  const onMouseEnter = useCallback(() => {
    setState(s => ({ ...s, visible: true }));
  }, []);

  const onMouseLeave = useCallback(() => {
    setState(s => ({ ...s, visible: false }));
  }, []);

  return { visible: state.visible, x: state.x, y: state.y, onMouseMove, onMouseEnter, onMouseLeave };
}
