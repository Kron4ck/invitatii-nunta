"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/data/content";

/* ──────────────────────────────────────────────────────────────────────────
   Iconițe ilustrative
   ────────────────────────────────────────────────────────────────────────── */

function RingsIcon() {
  return (
    <svg width="52" height="42" viewBox="0 0 52 42" fill="none" aria-hidden="true">
      {/* Inel stânga auriu */}
      <circle cx="17" cy="18" r="12" stroke="#B8956A" strokeWidth="1.3"/>
      <circle cx="17" cy="18" r="8.5" stroke="#B8956A" strokeWidth="0.4" strokeOpacity="0.38"/>
      {/* Inel dreapta auriu */}
      <circle cx="35" cy="18" r="12" stroke="#B8956A" strokeWidth="1.3"/>
      <circle cx="35" cy="18" r="8.5" stroke="#B8956A" strokeWidth="0.4" strokeOpacity="0.38"/>
      {/* Reflexe pe inele */}
      <path d="M 9 11 Q 12 8 17 8" stroke="#B8956A" strokeWidth="0.5" strokeOpacity="0.5" fill="none"/>
      <path d="M 27 11 Q 30 8 35 8" stroke="#B8956A" strokeWidth="0.5" strokeOpacity="0.5" fill="none"/>
      {/* Mic trandafir la joncțiune (centru 26, 26) */}
      <ellipse cx="26" cy="21" rx="2.8" ry="5" fill="#6E1F2E" fillOpacity="0.4" transform="rotate(0, 26, 26)"/>
      <ellipse cx="26" cy="21" rx="2.5" ry="4.5" fill="#6E1F2E" fillOpacity="0.4" transform="rotate(72, 26, 26)"/>
      <ellipse cx="26" cy="21" rx="2.8" ry="5" fill="#6E1F2E" fillOpacity="0.72" transform="rotate(144, 26, 26)"/>
      <ellipse cx="26" cy="21" rx="2.5" ry="4.5" fill="#6E1F2E" fillOpacity="0.72" transform="rotate(216, 26, 26)"/>
      <circle cx="26" cy="26" r="3.8" fill="#4A1420" fillOpacity="0.65"/>
      <ellipse cx="25.5" cy="25" rx="1.6" ry="1.3" fill="#E8C4C0" fillOpacity="0.35"/>
      {/* Frunze la bază */}
      <path d="M 18 36 Q 13 34 15 29 Q 19 33 18 36 Z" fill="#7A7A5C" fillOpacity="0.72"/>
      <path d="M 34 36 Q 39 34 37 29 Q 33 33 34 36 Z" fill="#7A7A5C" fillOpacity="0.72"/>
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="54" height="46" viewBox="0 0 54 46" fill="none" aria-hidden="true">
      {/* Corp bordo */}
      <rect x="4" y="14" width="46" height="28" rx="4"
        fill="#6E1F2E" fillOpacity="0.1" stroke="#4A1420" strokeWidth="0.95"/>
      {/* Bump sus */}
      <path d="M 19 14 L 19 8 L 27 8 L 29 14"
        stroke="#4A1420" strokeWidth="0.9" fill="#6E1F2E" fillOpacity="0.08"/>
      {/* Obiectiv roz-pudrat */}
      <circle cx="27" cy="28" r="11" fill="#E8C4C0" fillOpacity="0.22" stroke="#4A1420" strokeWidth="0.85"/>
      <circle cx="27" cy="28" r="7.5" fill="#E8C4C0" fillOpacity="0.28" stroke="#4A1420" strokeWidth="0.65"/>
      <circle cx="27" cy="28" r="4" fill="#E8C4C0" fillOpacity="0.45"/>
      <circle cx="24.5" cy="25.5" r="1.2" fill="#FBF6F1" fillOpacity="0.4"/>
      {/* Flash */}
      <rect x="38" y="18" width="6" height="4" rx="1.5"
        fill="#B8956A" fillOpacity="0.45" stroke="#4A1420" strokeWidth="0.55"/>
      {/* Floricică */}
      <circle cx="10" cy="34" r="3.5" fill="#E8C4C0" fillOpacity="0.62"/>
      <circle cx="10" cy="34" r="1.2" fill="#B8956A" fillOpacity="0.5"/>
      {/* Frunzuliță */}
      <path d="M 8 38 Q 3 36 5 32 Q 9 36 8 38 Z" fill="#7A7A5C" fillOpacity="0.68"/>
    </svg>
  );
}

function ChampagneIcon() {
  return (
    <svg width="52" height="56" viewBox="0 0 52 56" fill="none" aria-hidden="true">
      {/* Fluta stânga */}
      <path d="M 8 5 C 8 17 12 23 12 29 L 12 45" stroke="#4A1420" strokeWidth="0.95" strokeLinecap="round" fill="none"/>
      <path d="M 18 5 C 18 17 14 23 14 29"       stroke="#4A1420" strokeWidth="0.95" strokeLinecap="round" fill="none"/>
      <line x1="8" y1="45" x2="18" y2="45" stroke="#4A1420" strokeWidth="0.95" strokeLinecap="round"/>
      {/* Lichid auriu stânga */}
      <path d="M 9 10 C 9 18 12 22 12 27 L 17 10 Z" fill="#B8956A" fillOpacity="0.2"/>
      {/* Bule */}
      <circle cx="12" cy="17" r="0.9" fill="#B8956A" fillOpacity="0.55"/>
      <circle cx="13" cy="11" r="0.7" fill="#B8956A" fillOpacity="0.45"/>

      {/* Fluta dreapta */}
      <path d="M 34 5 C 34 17 38 23 38 29 L 38 45" stroke="#4A1420" strokeWidth="0.95" strokeLinecap="round" fill="none"/>
      <path d="M 44 5 C 44 17 40 23 40 29"        stroke="#4A1420" strokeWidth="0.95" strokeLinecap="round" fill="none"/>
      <line x1="34" y1="45" x2="44" y2="45" stroke="#4A1420" strokeWidth="0.95" strokeLinecap="round"/>
      {/* Lichid auriu dreapta */}
      <path d="M 35 10 C 35 18 38 22 38 27 L 43 10 Z" fill="#B8956A" fillOpacity="0.2"/>
      <circle cx="38" cy="17" r="0.9" fill="#B8956A" fillOpacity="0.55"/>
      <circle cx="39" cy="12" r="0.7" fill="#B8956A" fillOpacity="0.45"/>

      {/* Arc ciocnire */}
      <path d="M 18 5 Q 26 2 34 5" stroke="#B8956A" strokeWidth="0.6" fill="none" strokeOpacity="0.55"/>

      {/* Buchet frunze + floricică între pahare */}
      <path d="M 26 31 Q 19 25 21 18 Q 26 24 26 31 Z" fill="#7A7A5C" fillOpacity="0.7"/>
      <path d="M 26 31 Q 33 25 31 18 Q 26 24 26 31 Z" fill="#7A7A5C" fillOpacity="0.65"/>
      <circle cx="26" cy="17" r="3" fill="#E8C4C0" fillOpacity="0.6"/>
      <circle cx="26" cy="17" r="1.0" fill="#B8956A" fillOpacity="0.5"/>
    </svg>
  );
}

function CakeIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
      {/* Etaj 1 (sus) */}
      <rect x="17" y="15" width="18" height="9" rx="1.5"
        fill="#F5E6E2" stroke="#4A1420" strokeWidth="0.85"/>
      {/* Etaj 2 (mijloc) */}
      <rect x="11" y="24" width="30" height="10" rx="1.5"
        fill="#F5E6E2" stroke="#4A1420" strokeWidth="0.85"/>
      {/* Etaj 3 (bază) */}
      <rect x="5"  y="34" width="42" height="11" rx="1.5"
        fill="#F5E6E2" stroke="#4A1420" strokeWidth="0.85"/>
      {/* Decor ondulat etaje */}
      <path d="M 18 19 Q 21 16.5 24 19 Q 27 16.5 33 19" stroke="#6E1F2E" strokeWidth="0.65" fill="none"/>
      <path d="M 12 28 Q 16 25.5 20 28 Q 24 25.5 28 28 Q 32 25.5 36 28 Q 39 25.5 41 28" stroke="#6E1F2E" strokeWidth="0.65" fill="none"/>
      <path d="M 6 38 Q 11 35.5 16 38 Q 21 35.5 26 38 Q 31 35.5 36 38 Q 41 35.5 46 38" stroke="#6E1F2E" strokeWidth="0.6" fill="none"/>
      {/* Lumânare */}
      <line x1="26" y1="7" x2="26" y2="15" stroke="#B8956A" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M 26 4 Q 28.5 2 26 0 Q 23.5 2 26 4 Z" fill="#B8956A" fillOpacity="0.8" stroke="#4A1420" strokeWidth="0.35" strokeOpacity="0.4"/>
      {/* Mic trandafir pe etajul 1 (centru 26, 15) */}
      <ellipse cx="26" cy="11" rx="2.8" ry="4.5" fill="#6E1F2E" fillOpacity="0.4" transform="rotate(0, 26, 15)"/>
      <ellipse cx="26" cy="11" rx="2.5" ry="4"   fill="#6E1F2E" fillOpacity="0.4" transform="rotate(72, 26, 15)"/>
      <ellipse cx="26" cy="11" rx="2.8" ry="4.5" fill="#6E1F2E" fillOpacity="0.72" transform="rotate(144, 26, 15)"/>
      <ellipse cx="26" cy="11" rx="2.5" ry="4"   fill="#6E1F2E" fillOpacity="0.72" transform="rotate(216, 26, 15)"/>
      <ellipse cx="26" cy="15" rx="3.5" ry="3.2" fill="#4A1420" fillOpacity="0.65"/>
      <ellipse cx="25.8" cy="13.8" rx="1.4" ry="1.1" fill="#E8C4C0" fillOpacity="0.3"/>
      {/* Frunze la baze tort */}
      <path d="M 5 45 Q 0 43 2 38 Q 6 42 5 45 Z" fill="#7A7A5C" fillOpacity="0.65"/>
      <path d="M 47 45 Q 52 43 50 38 Q 46 42 47 45 Z" fill="#7A7A5C" fillOpacity="0.65"/>
    </svg>
  );
}

const ICONS = {
  rings:     <RingsIcon />,
  camera:    <CameraIcon />,
  champagne: <ChampagneIcon />,
  cake:      <CakeIcon />,
};

/* ──────────────────────────────────────────────────────────────────────────
   Elementele de titlu
   ────────────────────────────────────────────────────────────────────────── */

function TitleRose() {
  return (
    <svg width="48" height="44" viewBox="0 0 48 44" fill="none" aria-hidden="true">
      <ellipse cx="24" cy="14" rx="5" ry="9"   fill="#6E1F2E" fillOpacity="0.42" transform="rotate(0, 24, 23)"/>
      <ellipse cx="24" cy="14" rx="4.5" ry="8.5" fill="#6E1F2E" fillOpacity="0.42" transform="rotate(72, 24, 23)"/>
      <ellipse cx="24" cy="14" rx="5" ry="9"   fill="#6E1F2E" fillOpacity="0.42" transform="rotate(144, 24, 23)"/>
      <ellipse cx="24" cy="14" rx="5.5" ry="9.5" fill="#6E1F2E" fillOpacity="0.76" stroke="#4A1420" strokeWidth="0.35" strokeOpacity="0.35" transform="rotate(216, 24, 23)"/>
      <ellipse cx="24" cy="14" rx="5" ry="9"   fill="#6E1F2E" fillOpacity="0.76" stroke="#4A1420" strokeWidth="0.35" strokeOpacity="0.35" transform="rotate(288, 24, 23)"/>
      <ellipse cx="24" cy="23" rx="6.5" ry="6" fill="#4A1420" fillOpacity="0.72"/>
      <ellipse cx="23.5" cy="21.5" rx="3" ry="2.5" fill="#E8C4C0" fillOpacity="0.38"/>
      <circle cx="23" cy="22" r="0.8" fill="#E8C4C0" fillOpacity="0.7"/>
      <circle cx="25" cy="21" r="0.7" fill="#E8C4C0" fillOpacity="0.65"/>
      <path d="M 10 25 Q 4 23 6 17 Q 12 21 10 25 Z" fill="#7A7A5C" fillOpacity="0.7"/>
      <path d="M 38 25 Q 44 23 42 17 Q 36 21 38 25 Z" fill="#7A7A5C" fillOpacity="0.7"/>
      <line x1="24" y1="32" x2="24" y2="40" stroke="#B8956A" strokeWidth="0.8" opacity="0.55"/>
    </svg>
  );
}

function TitleDivider() {
  return (
    <svg width="200" height="24" viewBox="0 0 200 24" fill="none" aria-hidden="true">
      <line x1="2" y1="12" x2="72" y2="12" stroke="#B8956A" strokeWidth="0.5" opacity="0.5"/>
      <path d="M 76 12 Q 82 6 88 8 Q 84 12 76 12 Z"  fill="#B8956A" opacity="0.45"/>
      <path d="M 76 12 Q 82 18 88 16 Q 84 12 76 12 Z" fill="#B8956A" opacity="0.3"/>
      <circle cx="100" cy="12" r="4" stroke="#B8956A" strokeWidth="0.6" fill="none" opacity="0.65"/>
      <circle cx="100" cy="12" r="1.4" fill="#B8956A" opacity="0.65"/>
      <path d="M 124 12 Q 118 6 112 8 Q 116 12 124 12 Z"  fill="#B8956A" opacity="0.45"/>
      <path d="M 124 12 Q 118 18 112 16 Q 116 12 124 12 Z" fill="#B8956A" opacity="0.3"/>
      <line x1="112" y1="12" x2="198" y2="12" stroke="#B8956A" strokeWidth="0.5" opacity="0.5"/>
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Ramura SVG a timeline-ului
   ────────────────────────────────────────────────────────────────────────── */

function StemSVG({ height, n }) {
  if (!height || height < 60 || n === 0) return null;

  const W = 72;
  const cx = 36;
  const h = height;
  const DRAW_DUR = 2.2;   // durata animatiei de desenare (s)
  const DRAW_START = 0.5; // delay initial (s)

  // Pozitiile nodurilor (centrele evenimentelor)
  const nodeY = Array.from({ length: n }, (_, i) => h * (i + 0.5) / n);

  // Calea ondulata ce trece prin noduri
  const pts = [0, ...nodeY, h];
  const amp = 5.5;
  let stemD = `M ${cx},0`;
  for (let i = 1; i < pts.length; i++) {
    const y0 = pts[i - 1];
    const y1 = pts[i];
    const dy = y1 - y0;
    const s = i % 2 === 0 ? amp : -amp;
    stemD += ` C ${cx + s},${y0 + dy * 0.32} ${cx - s},${y1 - dy * 0.32} ${cx},${y1}`;
  }

  // Frunzele: la mijlocul fiecarui segment
  const leaves = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const ly = (pts[i] + pts[i + 1]) * 0.5;
    const side = i % 2 === 0 ? -1 : 1;
    const delay = DRAW_START + (ly / h) * DRAW_DUR;
    const lx   = cx + side * 16;
    const tipX = cx + side * 12;
    const lPath = `M ${cx},${ly} Q ${lx},${ly - 9} ${tipX},${ly - 17} Q ${cx + side * 3},${ly - 3} ${cx},${ly} Z`;
    const vPath = `M ${cx},${ly} Q ${lx - side * 2},${ly - 8} ${tipX},${ly - 16}`;
    leaves.push({ ly, delay, lPath, vPath });
  }

  return (
    <svg className="sch__stem-svg" viewBox={`0 0 ${W} ${h}`} fill="none" aria-hidden="true" overflow="visible">
      {/* Strat verde sub tulpina */}
      <path d={stemD} stroke="#7A7A5C" strokeWidth="0.55" strokeLinecap="round" fill="none" opacity="0.3"
        pathLength="1" className="sch__stem-path"/>

      {/* Tulpina aurie */}
      <path d={stemD} stroke="#B8956A" strokeWidth="1.25" strokeLinecap="round" fill="none" opacity="0.72"
        pathLength="1" className="sch__stem-path"/>

      {/* Frunze */}
      {leaves.map((lf, i) => (
        <g key={i}>
          <path d={lf.lPath} fill="#7A7A5C" fillOpacity="0.68"
            className="sch__leaf" style={{ animationDelay: `${lf.delay}s` }}/>
          <path d={lf.vPath} stroke="#7A7A5C" strokeWidth="0.38" fill="none" strokeOpacity="0.45"
            className="sch__leaf" style={{ animationDelay: `${lf.delay + 0.06}s` }}/>
        </g>
      ))}

      {/* Boboc sus */}
      <g className="sch__stem-top" style={{ animationDelay: `${DRAW_START}s` }}>
        <path d={`M ${cx},-4 C ${cx+3},-3 ${cx+6},1 ${cx+6},8 C ${cx+6},14 ${cx+3},16 ${cx},16 C ${cx-3},16 ${cx-6},14 ${cx-6},8 C ${cx-6},1 ${cx-3},-3 ${cx},-4 Z`}
          fill="#6E1F2E" fillOpacity="0.78" stroke="#4A1420" strokeWidth="0.4" strokeOpacity="0.4"/>
        <path d={`M ${cx},11 L ${cx},17`} stroke="#4A1420" strokeWidth="0.35" strokeOpacity="0.38" fill="none"/>
        <path d={`M ${cx - 5},12 Q ${cx - 3},18 ${cx - 4},16`} fill="#7A7A5C" fillOpacity="0.65"/>
        <path d={`M ${cx + 5},12 Q ${cx + 3},18 ${cx + 4},16`} fill="#7A7A5C" fillOpacity="0.65"/>
      </g>

      {/* Trandafir jos */}
      <g className="sch__stem-bottom" style={{ animationDelay: `${DRAW_START + DRAW_DUR * 0.86}s` }}>
        {[0, 72, 144, 216, 288].map((angle, pi) => {
          const strong = angle >= 144;
          return (
            <ellipse key={pi}
              cx={cx} cy={h - 14} rx={strong ? 5.5 : 5} ry={strong ? 10 : 9}
              fill="#6E1F2E" fillOpacity={strong ? 0.78 : 0.42}
              stroke={strong ? "#4A1420" : "none"} strokeWidth="0.35" strokeOpacity={strong ? 0.35 : 0}
              transform={`rotate(${angle}, ${cx}, ${h - 4})`}
            />
          );
        })}
        <ellipse cx={cx}     cy={h - 4}  rx="6.5" ry="6"   fill="#4A1420" fillOpacity="0.7"/>
        <ellipse cx={cx}     cy={h - 5.5} rx="3"   ry="2.5" fill="#E8C4C0" fillOpacity="0.33"/>
        <circle  cx={cx - 1} cy={h - 5}   r="0.85" fill="#E8C4C0" fillOpacity="0.66"/>
        <path d={`M ${cx - 2},${h - 1} Q ${cx - 14},${h + 2} ${cx - 11},${h + 9} Q ${cx - 3},${h + 3} ${cx - 2},${h - 1} Z`} fill="#7A7A5C" fillOpacity="0.68"/>
        <path d={`M ${cx + 2},${h - 1} Q ${cx + 14},${h + 2} ${cx + 11},${h + 9} Q ${cx + 3},${h + 3} ${cx + 2},${h - 1} Z`} fill="#7A7A5C" fillOpacity="0.68"/>
      </g>
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Componenta principală
   ────────────────────────────────────────────────────────────────────────── */

export default function ScheduleSection() {
  const sectionRef  = useRef(null);
  const timelineRef = useRef(null);
  const [stemHeight, setStemHeight] = useState(0);

  const DRAW_DUR   = 2.2;
  const DRAW_START = 0.5;
  const n = content.programul.length;

  // Masurare inaltime timeline pentru SVG tulpina
  useEffect(() => {
    const tl = timelineRef.current;
    if (!tl) return;
    const measure = () => setStemHeight(tl.getBoundingClientRect().height);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(tl);
    return () => ro.disconnect();
  }, []);

  // IntersectionObserver pentru animatii la scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sch" ref={sectionRef}>

      {/* ── Titlu ── */}
      <div className="sch__header">
        <TitleRose />
        <h2 className="sch__title">Programul zilei</h2>
        <TitleDivider />
      </div>

      {/* ── Timeline ── */}
      <div className="sch__timeline" ref={timelineRef}>
        <StemSVG height={stemHeight} n={n} />

        <ol className="sch__list">
          {content.programul.map((ev, i) => {
            // Fractia de drum cand ramura ajunge la nodul i
            const nodeFrac  = (i + 0.5) / n;
            const nodeDelay = DRAW_START + nodeFrac * DRAW_DUR;
            const textDelay = nodeDelay + 0.32;

            return (
              <li
                key={i}
                className={`sch__item sch__item--${i % 2 === 0 ? "even" : "odd"}`}
              >
                {/* Medalion */}
                <div
                  className="sch__medal"
                  style={{ animationDelay: `${nodeDelay}s` }}
                >
                  {ICONS[ev.icon]}
                </div>

                {/* Text */}
                <div
                  className="sch__text"
                  style={{ animationDelay: `${textDelay}s` }}
                >
                  <span className="sch__ora">{ev.ora}</span>
                  <span className="sch__titlu">{ev.titlu}</span>
                  {ev.descriere && (
                    <span className="sch__desc">{ev.descriere}</span>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

    </section>
  );
}
