"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { content } from "@/data/content";
import RoseCorner from "@/components/RoseCorner";

function RibbonBow() {
  return (
    <svg
      className="couple__bow-svg"
      width="120"
      height="72"
      viewBox="0 0 120 72"
      fill="none"
      aria-hidden="true"
    >
      {/* Stânga arc */}
      <path
        d="M58 36 C48 28 28 14 14 18 C6 20 6 30 14 34 C24 38 46 34 58 36 Z"
        fill="#6E1F2E"
        opacity="0.9"
      />
      <path
        d="M58 36 C48 44 28 56 14 52 C6 50 6 40 14 38 C24 34 46 38 58 36 Z"
        fill="#4A1420"
        opacity="0.7"
      />
      {/* Reflexe stânga */}
      <path
        d="M20 22 C28 18 40 18 50 24"
        stroke="#E8C4C0" strokeWidth="0.8" strokeOpacity="0.3" fill="none" strokeLinecap="round"
      />
      {/* Dreapta arc */}
      <path
        d="M62 36 C72 28 92 14 106 18 C114 20 114 30 106 34 C96 38 74 34 62 36 Z"
        fill="#6E1F2E"
        opacity="0.9"
      />
      <path
        d="M62 36 C72 44 92 56 106 52 C114 50 114 40 106 38 C96 34 74 38 62 36 Z"
        fill="#4A1420"
        opacity="0.7"
      />
      {/* Reflexe dreapta */}
      <path
        d="M100 22 C92 18 80 18 70 24"
        stroke="#E8C4C0" strokeWidth="0.8" strokeOpacity="0.3" fill="none" strokeLinecap="round"
      />
      {/* Nod central */}
      <ellipse cx="60" cy="36" rx="9" ry="7" fill="#6E1F2E" />
      <ellipse cx="60" cy="36" rx="6" ry="4.5" fill="#4A1420" opacity="0.6" />
      <ellipse cx="58" cy="34" rx="2.5" ry="1.5" fill="#E8C4C0" fillOpacity="0.25" />
      {/* Panglici jos */}
      <path
        d="M54 43 C50 52 46 60 42 68"
        stroke="#6E1F2E" strokeWidth="3.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M66 43 C70 52 74 60 78 68"
        stroke="#6E1F2E" strokeWidth="3.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M54 43 C50 52 46 60 42 68"
        stroke="#E8C4C0" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.3"
      />
      <path
        d="M66 43 C70 52 74 60 78 68"
        stroke="#E8C4C0" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.3"
      />
    </svg>
  );
}

function QuoteDivider() {
  return (
    <svg
      className="couple__quote-divider"
      width="180"
      height="28"
      viewBox="0 0 180 28"
      fill="none"
      aria-hidden="true"
    >
      <line x1="4" y1="14" x2="64" y2="14" stroke="currentColor" strokeWidth="0.5" opacity="0.45" />
      <path d="M68 14 Q74 8 80 10 Q76 14 68 14 Z" fill="currentColor" opacity="0.4" />
      <path d="M68 14 Q74 20 80 18 Q76 14 68 14 Z" fill="currentColor" opacity="0.28" />
      <circle cx="90" cy="14" r="4" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.6" />
      <circle cx="90" cy="14" r="1.4" fill="currentColor" opacity="0.6" />
      <path d="M112 14 Q106 8 100 10 Q104 14 112 14 Z" fill="currentColor" opacity="0.4" />
      <path d="M112 14 Q106 20 100 18 Q104 14 112 14 Z" fill="currentColor" opacity="0.28" />
      <line x1="116" y1="14" x2="176" y2="14" stroke="currentColor" strokeWidth="0.5" opacity="0.45" />
    </svg>
  );
}

export default function CoupleSection() {
  const sectionRef  = useRef(null);
  const outerRef    = useRef(null);
  const quoteRef    = useRef(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          outerRef.current?.classList.add("is-visible");
          quoteRef.current?.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="couple" ref={sectionRef}>
      <div className="couple__inner">

        {/* Ramă în straturi */}
        <div className="couple__frame-outer" ref={outerRef}>
          <RoseCorner className="rose-corner--tl couple__rose" />
          <RoseCorner className="rose-corner--br couple__rose" />

          {/* Fundă centrată pe marginea de sus */}
          <div className="couple__bow-wrap" aria-hidden="true">
            <div className="couple__bow-inner">
              <RibbonBow />
            </div>
          </div>

          {/* Passe-partout */}
          <div className="couple__frame-mat">
            {/* Poza cu colțare vintage */}
            <div className="couple__photo-wrap">
              <span className="couple__pc couple__pc--tl" aria-hidden="true" />
              <span className="couple__pc couple__pc--tr" aria-hidden="true" />
              <span className="couple__pc couple__pc--bl" aria-hidden="true" />
              <span className="couple__pc couple__pc--br" aria-hidden="true" />

              <div className="couple__frame">
                {imgError ? (
                  <div className="couple__placeholder">
                    <span>Poza cuplului</span>
                  </div>
                ) : (
                  <Image
                    src="/assets/IMGimpreuna.jpg"
                    alt="Poza cuplului"
                    fill
                    sizes="(max-width: 768px) 85vw, 440px"
                    style={{ objectFit: "cover" }}
                    onError={() => setImgError(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Citat + divider */}
        <div className="couple__quote-block" ref={quoteRef}>
          <p className="couple__quote">{content.citat}</p>
          <QuoteDivider />
        </div>

      </div>
    </section>
  );
}
