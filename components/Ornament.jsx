"use client";

import { useEffect, useRef } from "react";

/* ── SVG-uri ─────────────────────────────────────────────────────────────── */

function CornerSVG() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      {/* Ramură principală: curbă de la colț stânga-jos spre dreapta-sus */}
      <path
        d="M 4 52 Q 4 4 52 4"
        stroke="currentColor" strokeWidth="0.9" fill="none"
        strokeOpacity="0.55"
      />
      {/* Frunza 1 */}
      <path
        d="M 12 40 Q 5 32 14 28 Q 16 36 12 40 Z"
        fill="currentColor" fillOpacity="0.4"
      />
      {/* Frunza 2 */}
      <path
        d="M 26 24 Q 19 16 28 13 Q 30 21 26 24 Z"
        fill="currentColor" fillOpacity="0.35"
      />
      {/* Floricică la vârf */}
      <circle cx="48" cy="8" r="4"
        stroke="currentColor" strokeWidth="0.75" fill="none" strokeOpacity="0.65" />
      <circle cx="48" cy="8" r="1.5"
        fill="currentColor" fillOpacity="0.6" />
    </svg>
  );
}

function DividerSVG() {
  return (
    <svg width="260" height="28" viewBox="0 0 260 28" fill="none" aria-hidden="true">
      {/* Linii — animate cu stroke-dashoffset */}
      <path className="orn-draw"
        d="M 0 14 L 100 14"
        stroke="currentColor" strokeWidth="0.6" pathLength="1"
      />
      <path className="orn-draw"
        d="M 160 14 L 260 14"
        stroke="currentColor" strokeWidth="0.6" pathLength="1"
      />
      {/* Cerc central — animat */}
      <circle className="orn-draw"
        cx="130" cy="14" r="5.5"
        stroke="currentColor" strokeWidth="0.8" fill="none" pathLength="1"
      />
      {/* Elemente fade-in */}
      <path className="orn-fade"
        d="M 104 14 Q 110 7 117 10 Q 113 14 104 14 Z"
        fill="currentColor" fillOpacity="0.45"
      />
      <path className="orn-fade"
        d="M 156 14 Q 150 7 143 10 Q 147 14 156 14 Z"
        fill="currentColor" fillOpacity="0.45"
      />
      <circle className="orn-fade"
        cx="130" cy="14" r="2"
        fill="currentColor" fillOpacity="0.65"
      />
    </svg>
  );
}

function SprigSVG() {
  return (
    <svg width="22" height="88" viewBox="0 0 22 88" fill="none" aria-hidden="true">
      {/* Tulpină */}
      <line x1="11" y1="86" x2="11" y2="6"
        stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeOpacity="0.45"
      />
      {/* Perechi de frunze (3 perechi) */}
      <path d="M11 70 Q3 63 2 54 Q10 62 11 70 Z"
        fill="currentColor" fillOpacity="0.3" />
      <path d="M11 70 Q19 63 20 54 Q12 62 11 70 Z"
        fill="currentColor" fillOpacity="0.25" />
      <path d="M11 52 Q3 45 2 36 Q10 44 11 52 Z"
        fill="currentColor" fillOpacity="0.3" />
      <path d="M11 52 Q19 45 20 36 Q12 44 11 52 Z"
        fill="currentColor" fillOpacity="0.25" />
      <path d="M11 34 Q3 27 2 18 Q10 26 11 34 Z"
        fill="currentColor" fillOpacity="0.28" />
      <path d="M11 34 Q19 27 20 18 Q12 26 11 34 Z"
        fill="currentColor" fillOpacity="0.22" />
      {/* Mugure la vârf */}
      <ellipse cx="11" cy="10" rx="3" ry="6"
        stroke="currentColor" strokeWidth="0.7" fill="none" strokeOpacity="0.5"
      />
      <circle cx="11" cy="7" r="1.2"
        fill="currentColor" fillOpacity="0.45"
      />
    </svg>
  );
}

/* ── Componenta ──────────────────────────────────────────────────────────── */

export default function Ornament({ variant = "divider", className = "", style }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base = `ornament ornament--${variant}${className ? ` ${className}` : ""}`;

  if (variant === "corner")  return <span ref={ref} className={base} style={style} aria-hidden="true"><CornerSVG /></span>;
  if (variant === "sprig")   return <span ref={ref} className={base} style={style} aria-hidden="true"><SprigSVG /></span>;
  /* divider */
  return (
    <div ref={ref} className={base} style={style} aria-hidden="true">
      <DividerSVG />
    </div>
  );
}
