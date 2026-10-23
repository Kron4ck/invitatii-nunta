"use client";

import { useEffect, useRef } from "react";
import { content } from "@/data/content";
import RoseCorner from "@/components/RoseCorner";

/* ── Pin de hartă cu trandafir la bază ───────────────────────────────── */
function MapPin() {
  return (
    <svg className="loc__icon" width="34" height="46" viewBox="0 0 34 46" fill="none" aria-hidden="true">
      {/* Corp pin */}
      <path
        d="M17 2C10.37 2 5 7.37 5 14c0 9.5 12 28 12 28s12-18.5 12-28C29 7.37 23.63 2 17 2z"
        stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.75"
      />
      {/* Cerc interior */}
      <circle cx="17" cy="14" r="4.5" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.65"/>
      <circle cx="17" cy="14" r="1.4" fill="currentColor" opacity="0.65"/>
      {/* Trandafir mic la baza pinului */}
      <ellipse cx="17" cy="36" rx="3.2" ry="5.2" fill="currentColor" fillOpacity="0.32" transform="rotate(0, 17, 41)"/>
      <ellipse cx="17" cy="36" rx="3" ry="4.8" fill="currentColor" fillOpacity="0.32" transform="rotate(72, 17, 41)"/>
      <ellipse cx="17" cy="36" rx="3.2" ry="5.2" fill="currentColor" fillOpacity="0.62" transform="rotate(144, 17, 41)"/>
      <ellipse cx="17" cy="36" rx="3" ry="4.8" fill="currentColor" fillOpacity="0.62" transform="rotate(216, 17, 41)"/>
      <ellipse cx="17" cy="41" rx="4" ry="3.5" fill="currentColor" fillOpacity="0.52"/>
      <ellipse cx="16.8" cy="39.8" rx="1.8" ry="1.4" fill="currentColor" fillOpacity="0.22"/>
      {/* Frunzulițe */}
      <path d="M 11 41 Q 8 39 9 36 Q 13 39 11 41 Z" fill="#9FAD80" fillOpacity="0.72"/>
      <path d="M 23 41 Q 26 39 25 36 Q 21 39 23 41 Z" fill="#9FAD80" fillOpacity="0.72"/>
    </svg>
  );
}

/* ── Divider floral ───────────────────────────────────────────────────── */
function LocDivider() {
  return (
    <svg
      className="loc__divider"
      width="140" height="22"
      viewBox="0 0 140 22"
      fill="none"
      aria-hidden="true"
    >
      <line x1="4" y1="11" x2="50" y2="11" stroke="currentColor" strokeWidth="0.5" opacity="0.55"/>
      <path d="M54 11 Q59 6 64 8 Q61 11 54 11 Z" fill="currentColor" opacity="0.45"/>
      <path d="M54 11 Q59 16 64 14 Q61 11 54 11 Z" fill="currentColor" opacity="0.3"/>
      <circle cx="70" cy="11" r="3.2" stroke="currentColor" strokeWidth="0.55" fill="none" opacity="0.65"/>
      <circle cx="70" cy="11" r="1.1" fill="currentColor" opacity="0.65"/>
      <path d="M86 11 Q81 6 76 8 Q79 11 86 11 Z" fill="currentColor" opacity="0.45"/>
      <path d="M86 11 Q81 16 76 14 Q79 11 86 11 Z" fill="currentColor" opacity="0.3"/>
      <line x1="90" y1="11" x2="136" y2="11" stroke="currentColor" strokeWidth="0.5" opacity="0.55"/>
    </svg>
  );
}

/* ── Iconiță pin mic pentru buton ─────────────────────────────────────── */
function BtnPin() {
  return (
    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" aria-hidden="true">
      <path d="M6 1C3.24 1 1 3.24 1 6c0 3.9 5 9 5 9s5-5.1 5-9C11 3.24 8.76 1 6 1z"
        stroke="currentColor" strokeWidth="0.9" fill="none"/>
      <circle cx="6" cy="6" r="1.5" fill="currentColor"/>
    </svg>
  );
}

/* ── Marginea ondulată SVG (sus + jos) ───────────────────────────────── */
const WAVE_PATH_TOP =
  "M0,30 Q30,5 60,30 Q90,55 120,30 Q150,5 180,30 Q210,55 240,30 Q270,5 300,30 Q330,55 360,30 Q390,5 420,30 Q450,55 480,30 Q510,5 540,30 Q570,55 600,30 Q630,5 660,30 Q690,55 720,30 Q750,5 780,30 Q810,55 840,30 Q870,5 900,30 Q930,55 960,30 Q990,5 1020,30 Q1050,55 1080,30 Q1110,5 1140,30 Q1170,55 1200,30 Q1230,5 1260,30 Q1290,55 1320,30 Q1350,5 1380,30 Q1410,55 1440,30 L1440,0 L0,0 Z";

const WAVE_PATH_BOTTOM =
  "M0,30 Q30,55 60,30 Q90,5 120,30 Q150,55 180,30 Q210,5 240,30 Q270,55 300,30 Q330,5 360,30 Q390,55 420,30 Q450,5 480,30 Q510,55 540,30 Q570,5 600,30 Q630,55 660,30 Q690,5 720,30 Q750,55 780,30 Q810,5 840,30 Q870,55 900,30 Q930,5 960,30 Q990,55 1020,30 Q1050,5 1080,30 Q1110,55 1140,30 Q1170,5 1200,30 Q1230,55 1260,30 Q1290,5 1320,30 Q1350,55 1380,30 Q1410,5 1440,30 L1440,60 L0,60 Z";

function WaveEdge({ bottom = false }) {
  return (
    <svg
      className={`loc__wave loc__wave--${bottom ? "bottom" : "top"}`}
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={bottom ? WAVE_PATH_BOTTOM : WAVE_PATH_TOP} fill="var(--hartie)"/>
    </svg>
  );
}

/* ── Petale statice pe fundal ─────────────────────────────────────────── */
function BgPetals() {
  return (
    <div className="loc__petals" aria-hidden="true">
      <span className="loc__petal loc__petal--1"/>
      <span className="loc__petal loc__petal--2"/>
      <span className="loc__petal loc__petal--3"/>
      <span className="loc__petal loc__petal--4"/>
      <span className="loc__petal loc__petal--5"/>
      <span className="loc__petal loc__petal--6"/>
    </div>
  );
}

/* ── Componenta principală ────────────────────────────────────────────── */
export default function LocationSection() {
  const sectionRef = useRef(null);
  const cardRef    = useRef(null);
  const textRef    = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current?.classList.add("is-visible");
          textRef.current?.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="loc" ref={sectionRef}>
      <WaveEdge />
      <BgPetals />

      <div className="loc__card" ref={cardRef}>
        <RoseCorner className="rose-corner--tl loc__rose" tone="dark" />
        <RoseCorner className="rose-corner--tr loc__rose" tone="dark" />
        <RoseCorner className="rose-corner--bl loc__rose" tone="dark" />
        <RoseCorner className="rose-corner--br loc__rose" tone="dark" />

        <div className="loc__content" ref={textRef}>
          <p className="loc__title">Locația</p>
          <MapPin />
          <p className="loc__intro">Vă așteptăm la:</p>
          <p className="loc__local">{content.locatie.local}</p>
          <p className="loc__adresa">{content.locatie.adresa}</p>
          <LocDivider />
          <a
            className="loc__btn"
            href={content.locatie.maps}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Deschide traseul în Google Maps"
          >
            <BtnPin />
            Vezi traseul
          </a>
        </div>
      </div>

      <WaveEdge bottom />
    </section>
  );
}
