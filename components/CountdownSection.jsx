"use client";

import { useEffect, useRef, useState } from "react";
import { content } from "@/data/content";
import RoseBranch from "@/components/RoseBranch";

function pad(n) {
  return String(n).padStart(2, "0");
}

const UNITS = [
  { key: "zile",    label: "ZILE"    },
  { key: "ore",     label: "ORE"     },
  { key: "minute",  label: "MINUTE"  },
  { key: "secunde", label: "SECUNDE" },
];

// ── Wave festonată (hartie) ──────────────────────────────────────────────────
const WAVE_PATH =
  "M0,30 Q30,5 60,30 Q90,55 120,30 Q150,5 180,30 Q210,55 240,30 Q270,5 300,30 Q330,55 360,30 Q390,5 420,30 Q450,55 480,30 Q510,5 540,30 Q570,55 600,30 Q630,5 660,30 Q690,55 720,30 Q750,5 780,30 Q810,55 840,30 Q870,5 900,30 Q930,55 960,30 Q990,5 1020,30 Q1050,55 1080,30 Q1110,5 1140,30 Q1170,55 1200,30 Q1230,5 1260,30 Q1290,55 1320,30 Q1350,5 1380,30 Q1410,55 1440,30 L1440,0 L0,0 Z";

function WaveTop() {
  return (
    <svg className="cdwn__wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
      <path d={WAVE_PATH} fill="var(--hartie)" />
    </svg>
  );
}

// ── Petale fundal ────────────────────────────────────────────────────────────
function BgPetals() {
  return (
    <div className="cdwn__petals" aria-hidden="true">
      <span className="cdwn__petal cdwn__petal--1" />
      <span className="cdwn__petal cdwn__petal--2" />
      <span className="cdwn__petal cdwn__petal--3" />
      <span className="cdwn__petal cdwn__petal--4" />
      <span className="cdwn__petal cdwn__petal--5" />
      <span className="cdwn__petal cdwn__petal--6" />
      <span className="cdwn__petal cdwn__petal--7" />
      <span className="cdwn__petal cdwn__petal--8" />
    </div>
  );
}

// ── Divider floral ───────────────────────────────────────────────────────────
function CdwnDivider() {
  return (
    <svg className="cdwn__divider" width="180" height="22" viewBox="0 0 180 22" fill="none" aria-hidden="true">
      <line x1="4"   y1="11" x2="68"  y2="11" stroke="var(--auriu-cald)" strokeWidth="0.5" opacity="0.55"/>
      <path d="M72 11 Q77 6 82 8 Q79 11 72 11 Z"   fill="var(--auriu-cald)" opacity="0.45"/>
      <path d="M72 11 Q77 16 82 14 Q79 11 72 11 Z"  fill="var(--auriu-cald)" opacity="0.30"/>
      <circle cx="90" cy="11" r="3" stroke="var(--auriu-cald)" strokeWidth="0.55" fill="none" opacity="0.65"/>
      <circle cx="90" cy="11" r="1" fill="var(--auriu-cald)" opacity="0.65"/>
      <path d="M108 11 Q103 6 98 8 Q101 11 108 11 Z"  fill="var(--auriu-cald)" opacity="0.45"/>
      <path d="M108 11 Q103 16 98 14 Q101 11 108 11 Z" fill="var(--auriu-cald)" opacity="0.30"/>
      <line x1="112" y1="11" x2="176" y2="11" stroke="var(--auriu-cald)" strokeWidth="0.5" opacity="0.55"/>
    </svg>
  );
}

// ── Trandafir separator ──────────────────────────────────────────────────────
function SepRose({ pulse = false }) {
  return (
    <svg
      className={`cdwn__sep${pulse ? " cdwn__sep--pulse" : ""}`}
      width="20" height="20" viewBox="0 0 20 20" fill="none"
      aria-hidden="true"
    >
      <ellipse cx="10" cy="6" rx="2.8" ry="5.2" fill="var(--roz-pudrat)" fillOpacity="0.50" transform="rotate(0,   10,10)"/>
      <ellipse cx="10" cy="6" rx="2.6" ry="4.9" fill="var(--roz-pudrat)" fillOpacity="0.50" transform="rotate(72,  10,10)"/>
      <ellipse cx="10" cy="6" rx="2.8" ry="5.2" fill="var(--roz-pudrat)" fillOpacity="0.82" transform="rotate(144, 10,10)"/>
      <ellipse cx="10" cy="6" rx="2.6" ry="4.9" fill="var(--roz-pudrat)" fillOpacity="0.82" transform="rotate(216, 10,10)"/>
      <ellipse cx="10" cy="6" rx="2.8" ry="5.2" fill="var(--roz-pudrat)" fillOpacity="0.65" transform="rotate(288, 10,10)"/>
      <circle cx="10" cy="10" r="3.6" fill="var(--roz-pudrat)" fillOpacity="0.52"/>
      <path d="M 4.5 13.5 Q 1.5 11 3 8 Q 6.5 11.5 4.5 13.5 Z"  fill="#9FAD80" fillOpacity="0.55"/>
      <path d="M 15.5 13.5 Q 18.5 11 17 8 Q 13.5 11.5 15.5 13.5 Z" fill="#9FAD80" fillOpacity="0.55"/>
    </svg>
  );
}

// ── Număr animat ─────────────────────────────────────────────────────────────
function AnimatedNum({ value }) {
  const [shown, setShown] = useState(value);
  const [cls, setCls]     = useState("");

  useEffect(() => {
    if (value === shown) return;
    setCls("cdwn__num--out");
    const t1 = setTimeout(() => { setShown(value); setCls("cdwn__num--in"); }, 110);
    const t2 = setTimeout(() => setCls(""), 270);
    return () => { clearTimeout(t1); clearTimeout(t2); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span className={`cdwn__num ${cls}`}>{shown}</span>;
}

// ── Componentă principală ────────────────────────────────────────────────────
export default function CountdownSection() {
  const sectionRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("is-visible"); observer.disconnect(); }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function tick() {
      const diff = new Date(content.eventDate) - Date.now();
      if (diff <= 0) { setTimeLeft("passed"); return; }
      setTimeLeft({
        zile:    Math.floor(diff / 86_400_000),
        ore:     Math.floor((diff % 86_400_000) / 3_600_000),
        minute:  Math.floor((diff % 3_600_000)  / 60_000),
        secunde: Math.floor((diff % 60_000)      / 1_000),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const isPassed  = timeLeft === "passed";
  const isLoading = timeLeft === null;

  return (
    <section className="cdwn" ref={sectionRef}>
      <WaveTop />
      <BgPetals />

      {/* Ramuri decorative colțuri — doar desktop */}
      <div className="cdwn__corner cdwn__corner--left" aria-hidden="true">
        <div className="cdwn__branch-rotator">
          <RoseBranch tone="dark" />
        </div>
      </div>
      <div className="cdwn__corner cdwn__corner--right" aria-hidden="true">
        <div className="cdwn__branch-rotator">
          <RoseBranch tone="dark" flip />
        </div>
      </div>

      <div className="cdwn__inner">
        <h2 className="cdwn__title">Ne vedem peste...</h2>
        <CdwnDivider />

        {isPassed ? (
          <p className="cdwn__passed">Ziua cea mare a sosit!</p>
        ) : (
          <div className="cdwn__row" aria-live="polite" aria-atomic="true">
            {UNITS.flatMap(({ key, label }, i) => {
              const group = (
                <div
                  key={key}
                  className="cdwn__group"
                  style={{ animationDelay: `${0.4 + i * 0.15}s` }}
                >
                  <AnimatedNum value={isLoading ? "--" : pad(timeLeft[key])} />
                  <span className="cdwn__label">{label}</span>
                </div>
              );
              if (i < 3) {
                return [group, (
                  <div
                    key={`sep-${i}`}
                    className="cdwn__sep-wrap"
                    style={{ animationDelay: `${0.88 + i * 0.12}s` }}
                  >
                    <SepRose pulse={i === 2} />
                  </div>
                )];
              }
              return [group];
            })}
          </div>
        )}
      </div>
    </section>
  );
}
