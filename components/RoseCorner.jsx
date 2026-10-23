"use client";

const PALETTE = {
  light: {
    branch:    "#B8956A",
    leaf:      "#7A7A5C",
    petal:     "#6E1F2E",
    petalLine: "#4A1420",
    cup:       "#4A1420",
    hi:        "#E8C4C0",
  },
  dark: {
    branch:    "#FBF6F1",
    leaf:      "#9FAD80",
    petal:     "#E8C4C0",
    petalLine: "#D4A8A0",
    cup:       "#BF9090",
    hi:        "#FBF6F1",
  },
};

export default function RoseCorner({ className = "", tone = "light" }) {
  const c = PALETTE[tone] ?? PALETTE.light;

  return (
    <span className={`rose-corner ${className}`} aria-hidden="true">
      <span className="rose-corner__anim">
        <svg
          viewBox="0 0 110 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          {/* ── Crenguțe ──────────────────────────────────────────────── */}
          <g className="rose__branches">
            <path d="M7 10 Q32 7 62 9 Q84 10 106 13"
              stroke={c.branch} strokeWidth="0.85" strokeLinecap="round" opacity="0.72"/>
            <path d="M10 7 Q7 32 9 62 Q10 84 13 106"
              stroke={c.branch} strokeWidth="0.85" strokeLinecap="round" opacity="0.72"/>
            <path d="M18 9 Q21 15 26 22"
              stroke={c.branch} strokeWidth="0.6" strokeLinecap="round" opacity="0.55"/>
            <path d="M9 18 Q15 21 22 26"
              stroke={c.branch} strokeWidth="0.6" strokeLinecap="round" opacity="0.55"/>
            <path d="M57 9 Q58 14 56 20"
              stroke={c.branch} strokeWidth="0.5" strokeLinecap="round" opacity="0.42"/>
            <path d="M9 57 Q14 58 20 56"
              stroke={c.branch} strokeWidth="0.5" strokeLinecap="round" opacity="0.42"/>
          </g>

          {/* ── Frunze ────────────────────────────────────────────────── */}
          <path d="M21 21 Q13 13 15 7 Q22 14 21 21 Z"
            fill={c.leaf} fillOpacity="0.72"/>
          <path d="M19 20 Q13 14 15 8"
            stroke={c.leaf} strokeWidth="0.4" fill="none" strokeOpacity="0.45"/>

          <path d="M34 22 Q43 15 48 19 Q40 27 34 22 Z"
            fill={c.leaf} fillOpacity="0.65"/>
          <path d="M35 22 Q41 17 46 19"
            stroke={c.leaf} strokeWidth="0.4" fill="none" strokeOpacity="0.4"/>

          <path d="M22 34 Q15 43 19 48 Q27 40 22 34 Z"
            fill={c.leaf} fillOpacity="0.65"/>
          <path d="M22 35 Q17 41 19 46"
            stroke={c.leaf} strokeWidth="0.4" fill="none" strokeOpacity="0.4"/>

          <path d="M63 10 Q65 3 72 4 Q69 11 63 10 Z"
            fill={c.leaf} fillOpacity="0.7"/>
          <path d="M65 10 Q67 17 74 16 Q70 10 65 10 Z"
            fill={c.leaf} fillOpacity="0.58"/>

          <path d="M10 63 Q3 65 4 72 Q11 69 10 63 Z"
            fill={c.leaf} fillOpacity="0.7"/>
          <path d="M10 65 Q17 67 16 74 Q10 70 10 65 Z"
            fill={c.leaf} fillOpacity="0.58"/>

          {/* ── Trandafir pe jumătate deschis (centru: 17, 76) ────────── */}
          <ellipse cx="17" cy="70" rx="3" ry="6"
            fill={c.petal} fillOpacity="0.46"
            transform="rotate(10, 17, 76)"/>
          <ellipse cx="17" cy="70" rx="3" ry="5.5"
            fill={c.petal} fillOpacity="0.46"
            transform="rotate(100, 17, 76)"/>
          <ellipse cx="17" cy="70" rx="3.5" ry="6"
            fill={c.petal} fillOpacity="0.74"
            transform="rotate(185, 17, 76)"/>
          <ellipse cx="17" cy="70" rx="3" ry="5.5"
            fill={c.petal} fillOpacity="0.74"
            transform="rotate(275, 17, 76)"/>
          <circle cx="17" cy="76" r="4.2" fill={c.cup} fillOpacity="0.7"/>
          <ellipse cx="16.5" cy="75" rx="2" ry="1.7"
            fill={c.hi} fillOpacity="0.38"/>

          {/* ── Boboc (centru: 76, 17) ────────────────────────────────── */}
          <path d="M76 9 C79 10 81 15 81 20 C81 25 78 27 76 27 C74 27 71 25 71 20 C71 15 73 10 76 9 Z"
            fill={c.petal} fillOpacity="0.88" stroke={c.petalLine} strokeWidth="0.4" strokeOpacity="0.5"/>
          <path d="M76 9 L76 19"
            stroke={c.petalLine} strokeWidth="0.35" strokeOpacity="0.45" fill="none"/>
          <path d="M73 21 Q71 27 72 24 Z" fill={c.leaf} fillOpacity="0.68"/>
          <path d="M79 21 Q81 27 80 24 Z" fill={c.leaf} fillOpacity="0.68"/>
          <path d="M74 26 Q76 29 78 26"
            stroke={c.leaf} strokeWidth="0.8" fill="none" strokeOpacity="0.62"/>

          {/* ── Trandafir deschis principal (centru: 28, 28) ──────────── */}
          <ellipse cx="28" cy="19" rx="5.5" ry="9.5"
            fill={c.petal} fillOpacity="0.46"
            transform="rotate(0, 28, 28)"/>
          <ellipse cx="28" cy="19" rx="5" ry="9"
            fill={c.petal} fillOpacity="0.46"
            transform="rotate(71, 28, 28)"/>
          <ellipse cx="28" cy="19" rx="5.5" ry="9"
            fill={c.petal} fillOpacity="0.46"
            transform="rotate(143, 28, 28)"/>
          <ellipse cx="28" cy="19" rx="6" ry="10"
            fill={c.petal} fillOpacity="0.82" stroke={c.petalLine} strokeWidth="0.35" strokeOpacity="0.38"
            transform="rotate(218, 28, 28)"/>
          <ellipse cx="28" cy="19" rx="5.5" ry="9.5"
            fill={c.petal} fillOpacity="0.82" stroke={c.petalLine} strokeWidth="0.35" strokeOpacity="0.38"
            transform="rotate(289, 28, 28)"/>
          <ellipse cx="28" cy="19" rx="5.5" ry="9.5"
            fill="none" stroke={c.petalLine} strokeWidth="0.3" strokeOpacity="0.28"
            transform="rotate(0, 28, 28)"/>
          <ellipse cx="28" cy="28" rx="7" ry="6.5"
            fill={c.cup} fillOpacity="0.75"/>
          <ellipse cx="27.5" cy="26.5" rx="3.5" ry="3"
            fill={c.hi} fillOpacity="0.4"/>
          <circle cx="27" cy="27" r="0.8" fill={c.hi} fillOpacity="0.7"/>
          <circle cx="29" cy="26" r="0.7" fill={c.hi} fillOpacity="0.65"/>
          <circle cx="28" cy="28.5" r="0.7" fill={c.hi} fillOpacity="0.58"/>
          <path d="M25.5 26 Q28 23.5 30.5 26"
            stroke={c.hi} strokeWidth="0.65" fill="none" strokeOpacity="0.42"/>
          <path d="M22 20 Q23 17 26 18"
            stroke={c.hi} strokeWidth="0.6" fill="none" strokeOpacity="0.32"/>
        </svg>
      </span>
    </span>
  );
}
