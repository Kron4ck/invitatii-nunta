"use client";

import { useEffect, useRef } from "react";
import { content } from "@/data/content";
import RoseBranch from "@/components/RoseBranch";

function Heart() {
  return (
    <svg className="ty__heart" width="22" height="20" viewBox="0 0 22 20" fill="none" aria-hidden="true">
      <path
        d="M11 18 C11 18 2 12.5 2 6.5 C2 3.46 4.46 1 7.5 1 C9.24 1 10.8 1.88 11 2.5 C11.2 1.88 12.76 1 14.5 1 C17.54 1 20 3.46 20 6.5 C20 12.5 11 18 11 18 Z"
        stroke="var(--auriu-cald)" strokeWidth="0.9" fill="none" opacity="0.85"
      />
      <path
        d="M11 16 C11 16 3.5 11.2 3.5 6.5 C3.5 4.29 5.29 2.5 7.5 2.5 C9.1 2.5 10.42 3.5 11 4.2 C11.58 3.5 12.9 2.5 14.5 2.5 C16.71 2.5 18.5 4.29 18.5 6.5 C18.5 11.2 11 16 11 16 Z"
        fill="var(--auriu-cald)" fillOpacity="0.18"
      />
    </svg>
  );
}

function TyDivider() {
  return (
    <svg className="ty__divider" width="160" height="22" viewBox="0 0 160 22" fill="none" aria-hidden="true">
      <line x1="4" y1="11" x2="58" y2="11" stroke="var(--auriu-cald)" strokeWidth="0.5" opacity="0.5"/>
      <path d="M62 11 Q67 6 72 8 Q69 11 62 11 Z" fill="var(--auriu-cald)" opacity="0.42"/>
      <path d="M62 11 Q67 16 72 14 Q69 11 62 11 Z" fill="var(--auriu-cald)" opacity="0.28"/>
      <circle cx="80" cy="11" r="3" stroke="var(--auriu-cald)" strokeWidth="0.55" fill="none" opacity="0.62"/>
      <circle cx="80" cy="11" r="1" fill="var(--auriu-cald)" opacity="0.62"/>
      <path d="M98 11 Q93 6 88 8 Q91 11 98 11 Z" fill="var(--auriu-cald)" opacity="0.42"/>
      <path d="M98 11 Q93 16 88 14 Q91 11 98 11 Z" fill="var(--auriu-cald)" opacity="0.28"/>
      <line x1="102" y1="11" x2="156" y2="11" stroke="var(--auriu-cald)" strokeWidth="0.5" opacity="0.5"/>
    </svg>
  );
}

export default function ThankYouSection({ forma = "voi", nume = "invitați" }) {
  const sectionRef = useRef(null);

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
      { threshold: 0.12 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const heading = forma === "tu" ? `Îți mulțumim, ${nume}!` : `Vă mulțumim, ${nume}!`;

  return (
    <section className="ty" ref={sectionRef}>
      <div className="ty__layout">

        {/* Ramura stânga */}
        <div className="ty__branch-wrap ty__branch-wrap--left">
          <RoseBranch tone="light" flip={false} className="ty__branch" />
        </div>

        {/* Text centru */}
        <div className="ty__text">
          <Heart />
          <h2 className="ty__heading">{heading}</h2>
          <p className="ty__message">{content.mesajDaruri}</p>
          <TyDivider />
          <p className="ty__signature">{content.semnatura}</p>
        </div>

        {/* Ramura dreapta */}
        <div className="ty__branch-wrap ty__branch-wrap--right">
          <RoseBranch tone="light" flip={true} className="ty__branch" />
        </div>

      </div>
    </section>
  );
}
