"use client";

import { useEffect, useRef } from "react";
import { content } from "@/data/content";
import RoseCorner from "@/components/RoseCorner";

/* ── Sigiliu de ceară ─────────────────────────────────────────────────────── */
function WaxSeal() {
  return (
    <svg
      className="letter__seal-svg"
      width="80" height="80"
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      {/* Corp ceară — formă neregulată */}
      <path
        d="M40 5 C54 4 67 14 73 26 C79 38 77 54 68 65 C59 76 43 80 28 76 C13 72 4 59 4 45 C4 30 14 14 40 5 Z"
        fill="#6E1F2E"
      />
      {/* Reflexe roz-pudrat (lumini pe suprafața cerii) */}
      <path
        d="M22 14 C26 10 33 9 38 11 C34 14 26 16 22 14 Z"
        fill="#E8C4C0" fillOpacity="0.22"
      />
      <path
        d="M36 6 C38 5 41 5 43 7 C41 8 38 8 36 6 Z"
        fill="#E8C4C0" fillOpacity="0.18"
      />
      <path
        d="M68 32 C70 38 71 46 69 54"
        stroke="#E8C4C0" strokeWidth="1.8" fill="none" strokeOpacity="0.09" strokeLinecap="round"
      />
      {/* Inițiale gravate */}
      <text
        x="40" y="43"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="20"
        fill="#E8C4C0"
        fillOpacity="0.86"
        style={{ fontFamily: "var(--font-script), cursive" }}
      >
        {`${content.initialaMire}&${content.initialaMireasa}`}
      </text>
      {/* Contur gravat fin */}
      <path
        d="M40 5 C54 4 67 14 73 26 C79 38 77 54 68 65 C59 76 43 80 28 76 C13 72 4 59 4 45 C4 30 14 14 40 5 Z"
        stroke="#4A1420" strokeWidth="0.8" fill="none" strokeOpacity="0.38"
      />
    </svg>
  );
}

/* ── Divider floral ───────────────────────────────────────────────────────── */
function FloralDivider() {
  return (
    <svg
      className="letter__divider"
      width="160" height="24"
      viewBox="0 0 160 24"
      fill="none"
      aria-hidden="true"
    >
      <line x1="4" y1="12" x2="56" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <path d="M60 12 Q65 7 70 9 Q67 12 60 12 Z" fill="currentColor" opacity="0.45" />
      <path d="M60 12 Q65 17 70 15 Q67 12 60 12 Z" fill="currentColor" opacity="0.3" />
      <circle cx="80" cy="12" r="3.5" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.7" />
      <circle cx="80" cy="12" r="1.2" fill="currentColor" opacity="0.7" />
      <path d="M100 12 Q95 7 90 9 Q93 12 100 12 Z" fill="currentColor" opacity="0.45" />
      <path d="M100 12 Q95 17 90 15 Q93 12 100 12 Z" fill="currentColor" opacity="0.3" />
      <line x1="104" y1="12" x2="156" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}


/* ── Componenta principală ───────────────────────────────────────────────── */
export default function InvitationSection({ salut, nume, forma }) {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="letter" ref={ref}>
      <div className="letter__wrap">
        {/* Sigiliu centrat pe marginea de sus */}
        <div className="letter__seal-wrap">
          <div className="letter__seal-inner">
            <WaxSeal />
          </div>
        </div>

        {/* Foaia scrisorii */}
        <div className="letter__card">
          <RoseCorner className="rose-corner--tl letter__rose" />
          <RoseCorner className="rose-corner--br letter__rose" />

          {/* Textură hârtie extra */}
          <div className="letter__texture" aria-hidden="true" />

          <div className="letter__inner">
            <h2 className="letter__greeting">{salut} {nume},</h2>

            <div className="letter__body">
              <p className="letter__text">{content.invitatie[forma]}</p>
              <FloralDivider />
              <p className="letter__signature">{content.semnatura}</p>
            </div>

            <p className="letter__date">{content.data}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
