"use client";

import { useEffect, useRef } from "react";
import { content } from "@/data/content";

function FloralOrnament() {
  return (
    <svg
      className="gift__floral"
      width="60"
      height="56"
      viewBox="0 0 60 56"
      fill="none"
      aria-hidden="true"
    >
      {/* Petale */}
      <ellipse cx="30" cy="11" rx="2.5" ry="5.5"
        stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.65" />
      <ellipse cx="30" cy="31" rx="2.5" ry="5.5"
        stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.55" />
      <ellipse cx="20" cy="21" rx="5.5" ry="2.5"
        stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.6" />
      <ellipse cx="40" cy="21" rx="5.5" ry="2.5"
        stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.6" />
      {/* Petale diagonale */}
      <ellipse cx="23" cy="14" rx="2.5" ry="5.5"
        stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.45"
        transform="rotate(-45 23 14)" />
      <ellipse cx="37" cy="14" rx="2.5" ry="5.5"
        stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.45"
        transform="rotate(45 37 14)" />
      {/* Centru */}
      <circle cx="30" cy="21" r="4"
        stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.8" />
      <circle cx="30" cy="21" r="1.5"
        fill="currentColor" opacity="0.65" />
      {/* Tulpină */}
      <line x1="30" y1="36" x2="30" y2="55"
        stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />
      {/* Frunze */}
      <path d="M30 46 Q23 42 21 35 Q27 39 30 46 Z"
        fill="currentColor" opacity="0.35" />
      <path d="M30 46 Q37 42 39 35 Q33 39 30 46 Z"
        fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export default function GiftMessageSection() {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="gift fade-up" ref={ref}>
      <FloralOrnament />
      <p className="gift__text">{content.mesajDaruri}</p>
      <div className="gift__line" aria-hidden="true" />
    </section>
  );
}
