"use client";

import { useState } from "react";
import { content } from "@/data/content";
import RoseCorner from "@/components/RoseCorner";
import RoseWreath from "@/components/RoseWreath";

/* ── Divider mic în interior coroanei ─────────────────────────────────── */
function WreathDivider() {
  return (
    <svg width="80" height="16" viewBox="0 0 80 16" fill="none" aria-hidden="true" style={{ color: "var(--auriu-cald)" }}>
      <line x1="0" y1="8" x2="28" y2="8" stroke="currentColor" strokeWidth="0.6" opacity="0.55"/>
      <circle cx="40" cy="8" r="2.8" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.7"/>
      <circle cx="40" cy="8" r="1" fill="currentColor" opacity="0.7"/>
      <line x1="52" y1="8" x2="80" y2="8" stroke="currentColor" strokeWidth="0.6" opacity="0.55"/>
    </svg>
  );
}

/* ── Divider copertă ──────────────────────────────────────────────────── */
function CoverDivider() {
  return (
    <svg width="140" height="16" viewBox="0 0 140 16" fill="none" aria-hidden="true">
      <line x1="0" y1="8" x2="52" y2="8" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5"/>
      <circle cx="70" cy="8" r="4" stroke="currentColor" strokeWidth="0.7" fill="none" strokeOpacity="0.7"/>
      <circle cx="70" cy="8" r="1.3" fill="currentColor" fillOpacity="0.7"/>
      <line x1="88" y1="8" x2="140" y2="8" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5"/>
    </svg>
  );
}

/* ── Ghirlandă colț (atârnă din sus) ─────────────────────────────────── */
function CornerGarland({ className }) {
  return (
    <svg className={`hero__garland ${className}`} viewBox="0 0 260 220" fill="none" aria-hidden="true">
      {/* Ramură principală */}
      <path d="M 0 0 C 40 22 82 62 115 106 C 145 146 165 180 172 215"
        stroke="#B8956A" strokeWidth="1.1" strokeLinecap="round" opacity="0.62"/>
      {/* Sub-ramuri */}
      <path d="M 56 54 Q 40 62 33 76" stroke="#B8956A" strokeWidth="0.7" strokeLinecap="round" opacity="0.48"/>
      <path d="M 98 92 Q 80 102 73 118" stroke="#B8956A" strokeWidth="0.65" strokeLinecap="round" opacity="0.44"/>
      <path d="M 136 132 Q 122 144 116 160" stroke="#B8956A" strokeWidth="0.55" strokeLinecap="round" opacity="0.4"/>
      {/* Frunze */}
      <path d="M 26 26 Q 16 16 18 8 Q 26 16 26 26 Z" fill="#7A7A5C" fillOpacity="0.68"/>
      <path d="M 50 48 Q 60 40 66 44 Q 56 53 50 48 Z" fill="#7A7A5C" fillOpacity="0.65"/>
      <path d="M 35 66 Q 23 70 21 62 Q 33 59 35 66 Z" fill="#7A7A5C" fillOpacity="0.62"/>
      <path d="M 86 86 Q 78 76 82 68 Q 90 76 86 86 Z" fill="#7A7A5C" fillOpacity="0.68"/>
      <path d="M 100 100 Q 112 94 116 100 Q 104 106 100 100 Z" fill="#7A7A5C" fillOpacity="0.62"/>
      <path d="M 72 112 Q 60 116 58 108 Q 70 105 72 112 Z" fill="#7A7A5C" fillOpacity="0.6"/>
      <path d="M 124 142 Q 114 150 110 144 Q 120 138 124 142 Z" fill="#7A7A5C" fillOpacity="0.65"/>
      <path d="M 142 160 Q 150 152 156 156 Q 146 164 142 160 Z" fill="#7A7A5C" fillOpacity="0.6"/>
      <path d="M 116 154 Q 104 160 102 152 Q 114 150 116 154 Z" fill="#7A7A5C" fillOpacity="0.58"/>
      {/* Trandafir mic */}
      <ellipse cx="117" cy="114" rx="4.5" ry="7.5" fill="#6E1F2E" fillOpacity="0.38" transform="rotate(0, 117, 122)"/>
      <ellipse cx="117" cy="114" rx="4"   ry="7"   fill="#6E1F2E" fillOpacity="0.38" transform="rotate(72, 117, 122)"/>
      <ellipse cx="117" cy="114" rx="4.5" ry="7.5" fill="#6E1F2E" fillOpacity="0.72" transform="rotate(145, 117, 122)"/>
      <ellipse cx="117" cy="114" rx="4"   ry="7"   fill="#6E1F2E" fillOpacity="0.72" transform="rotate(218, 117, 122)"/>
      <ellipse cx="117" cy="122" rx="5.5" ry="5" fill="#4A1420" fillOpacity="0.62"/>
      <ellipse cx="116.5" cy="120.5" rx="2.5" ry="2" fill="#E8C4C0" fillOpacity="0.3"/>
      {/* Boboc jos */}
      <path d="M 152 172 C 155 173 157 177 157 182 C 157 187 154 189 152 189 C 150 189 147 187 147 182 C 147 177 149 173 152 172 Z"
        fill="#6E1F2E" fillOpacity="0.8" stroke="#4A1420" strokeWidth="0.35" strokeOpacity="0.4"/>
      <path d="M 149 184 Q 147 190 148 187 Z" fill="#7A7A5C" fillOpacity="0.6"/>
      <path d="M 155 184 Q 157 190 156 187 Z" fill="#7A7A5C" fillOpacity="0.6"/>
      {/* Floricică + dots */}
      <circle cx="70" cy="90" r="3" fill="#E8C4C0" fillOpacity="0.52"/>
      <circle cx="70" cy="90" r="1" fill="#B8956A" fillOpacity="0.48"/>
      <circle cx="42" cy="42" r="1.1" fill="#B8956A" fillOpacity="0.52"/>
      <circle cx="78" cy="76" r="1.0" fill="#B8956A" fillOpacity="0.48"/>
      <circle cx="140" cy="150" r="1.1" fill="#B8956A" fillOpacity="0.48"/>
    </svg>
  );
}

/* ── Petale căzătoare ─────────────────────────────────────────────────── */
const PETALS = [
  { left: "7%",  delay: "0s",    dur: "8s"  },
  { left: "19%", delay: "1.3s",  dur: "9.5s"},
  { left: "33%", delay: "0.6s",  dur: "7.5s"},
  { left: "48%", delay: "2.2s",  dur: "10s" },
  { left: "61%", delay: "0.9s",  dur: "8.5s"},
  { left: "74%", delay: "1.7s",  dur: "9s"  },
  { left: "87%", delay: "0.4s",  dur: "7s"  },
  { left: "14%", delay: "3.1s",  dur: "9.5s"},
  { left: "44%", delay: "2.6s",  dur: "8s"  },
  { left: "69%", delay: "1.1s",  dur: "10s" },
];

function FallingPetals() {
  return (
    <div className="hero__petals" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="hero__petal"
          style={{ left: p.left, animationDelay: p.delay, animationDuration: p.dur }}
        />
      ))}
    </div>
  );
}

/* ── Săgeată scroll ───────────────────────────────────────────────────── */
function ScrollArrow() {
  return (
    <svg className="hero__scroll-arrow" width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden="true">
      <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M 2 10 L 7 16 L 12 10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

/* ── Componenta principală ────────────────────────────────────────────── */
export default function HeroSection({ salut, nume, onOpen }) {
  const [isFading, setIsFading] = useState(false);
  const [coverGone, setCoverGone] = useState(false);

  // derive short date "12 · 12 · 2026" from eventDate
  const [year, month, day] = content.eventDate.split("T")[0].split("-");
  const dateShort = `${day} · ${month} · ${year}`;

  function handleOpen() {
    setIsFading(true);
    onOpen();
    setTimeout(() => setCoverGone(true), 1300);
  }

  return (
    <section className="hero">

      {/* ── Stratul ilustrat — apare după click ──────────────────────── */}
      <div className={`hero__reveal${isFading ? " hero__reveal--visible" : ""}`}>

        <CornerGarland className="hero__garland--tl" />
        <CornerGarland className="hero__garland--tr" />

        <div className="hero__illus">
          <RoseWreath />
          <div className="hero__wreath-text">
            <p className="hero__we-marry">Ne căsătorim</p>
            <p className="hero__groom-name">{content.mire}</p>
            <p className="hero__amp">{"&"}</p>
            <p className="hero__bride-name">{content.mireasa}</p>
            <WreathDivider />
            <p className="hero__date-elegant">{dateShort}</p>
          </div>
        </div>

        <div className="hero__scroll" aria-label="Derulează în jos">
          <span className="hero__scroll-text">derulează în jos</span>
          <ScrollArrow />
        </div>

        <FallingPetals />
      </div>

      {/* ── Coperta — fade-out cu blur la click ──────────────────────── */}
      {!coverGone && (
        <div className={`hero__cover${isFading ? " hero__cover--fading" : ""}`}>
          <div className="hero__frame">
            <RoseCorner className="rose-corner--tl" />
            <RoseCorner className="rose-corner--tr" />
            <RoseCorner className="rose-corner--br" />
            <RoseCorner className="rose-corner--bl" />

            <div className="hero__cover-inner">
              <div className="hero__monogram hero__anim--1">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true">
                  <circle cx="35" cy="35" r="32" stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.55"/>
                  <circle cx="35" cy="35" r="27" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.35"/>
                </svg>
                <span className="hero__initials">
                  {`${content.initialaMire}&${content.initialaMireasa}`}
                </span>
              </div>

              <p className="hero__label hero__anim--2">Invitație pentru</p>
              <h1 className="hero__name hero__anim--3">{salut} {nume}</h1>

              <div className="hero__date-wrap hero__anim--4">
                <CoverDivider />
                <p className="hero__cover-date">{content.data}</p>
              </div>

              <div className="hero__btn-wrap hero__anim--5">
                <button
                  className="hero__btn"
                  onClick={handleOpen}
                  aria-label="Deschide invitația"
                >
                  Deschide
                </button>
                <p className="hero__hint">apasă pentru a deschide invitația</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
