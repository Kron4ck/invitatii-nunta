import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime     = "nodejs";
export const alt         = "Invitație la nunta Georgel & Tatiana";
export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";

// Culori din paleta proiectului
const C = {
  hartie:    "#FBF6F1",
  bordo:     "#6E1F2E",
  bordoDark: "#4A1420",
  auriu:     "#B8956A",
  roz:       "#E8C4C0",
  leaf:      "#9FAD80",
};

export default function Image() {
  const font400 = readFileSync(join(process.cwd(), "public/fonts/cormorant-400.ttf"));
  const font600 = readFileSync(join(process.cwd(), "public/fonts/cormorant-600.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: C.hartie,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          position: "relative",
        }}
      >
        {/* Chenar exterior bordo */}
        <div style={{
          position: "absolute",
          top: "22px", bottom: "22px", left: "22px", right: "22px",
          border: `1.5px solid ${C.bordo}`,
          opacity: 0.2,
          display: "flex",
        }} />
        {/* Chenar interior auriu */}
        <div style={{
          position: "absolute",
          top: "30px", bottom: "30px", left: "30px", right: "30px",
          border: `0.75px solid ${C.auriu}`,
          opacity: 0.28,
          display: "flex",
        }} />

        {/* ── Coroană de trandafiri simplificată ── */}
        <svg width="380" height="110" viewBox="0 0 380 110" fill="none">
          {/* Ramura */}
          <path d="M 20,70 Q 95,50 190,58 Q 285,66 360,45"
            stroke={C.auriu} strokeWidth="1.2" strokeLinecap="round" opacity="0.55"/>

          {/* Frunze */}
          <path d="M 55,62 Q 45,50 48,40 Q 58,52 55,62 Z" fill={C.leaf} fillOpacity="0.65"/>
          <path d="M 130,55 Q 120,43 123,33 Q 133,45 130,55 Z" fill={C.leaf} fillOpacity="0.62"/>
          <path d="M 250,58 Q 258,46 264,36 Q 258,48 250,58 Z" fill={C.leaf} fillOpacity="0.62"/>
          <path d="M 325,50 Q 333,38 339,28 Q 333,40 325,50 Z" fill={C.leaf} fillOpacity="0.65"/>

          {/* Trandafir stânga (cx=78, cy=52) */}
          <ellipse cx="78" cy="40" rx="9" ry="16" fill={C.roz} fillOpacity="0.48" transform="rotate(0, 78,52)"/>
          <ellipse cx="78" cy="40" rx="8" ry="15" fill={C.roz} fillOpacity="0.48" transform="rotate(72, 78,52)"/>
          <ellipse cx="78" cy="40" rx="9" ry="16" fill={C.roz} fillOpacity="0.80" transform="rotate(144,78,52)"/>
          <ellipse cx="78" cy="40" rx="8" ry="15" fill={C.roz} fillOpacity="0.80" transform="rotate(216,78,52)"/>
          <ellipse cx="78" cy="40" rx="9" ry="16" fill={C.roz} fillOpacity="0.62" transform="rotate(288,78,52)"/>
          <circle cx="78" cy="52" r="10" fill="#BF9090" fillOpacity="0.82"/>
          <ellipse cx="77" cy="50" rx="5" ry="4" fill={C.hartie} fillOpacity="0.32"/>

          {/* Trandafir centru - mai mare (cx=190, cy=48) */}
          <ellipse cx="190" cy="34" rx="12" ry="21" fill={C.roz} fillOpacity="0.46" transform="rotate(0, 190,48)"/>
          <ellipse cx="190" cy="34" rx="11" ry="20" fill={C.roz} fillOpacity="0.46" transform="rotate(72, 190,48)"/>
          <ellipse cx="190" cy="34" rx="12" ry="21" fill={C.roz} fillOpacity="0.82" transform="rotate(144,190,48)"/>
          <ellipse cx="190" cy="34" rx="11" ry="20" fill={C.roz} fillOpacity="0.82" transform="rotate(216,190,48)"/>
          <ellipse cx="190" cy="34" rx="12" ry="21" fill={C.roz} fillOpacity="0.64" transform="rotate(288,190,48)"/>
          <circle cx="190" cy="48" r="13" fill="#BF9090" fillOpacity="0.80"/>
          <ellipse cx="189" cy="46" rx="6.5" ry="5.5" fill={C.hartie} fillOpacity="0.32"/>

          {/* Boboc stânga-sus */}
          <path d="M 138,32 C 141,34 143,40 143,45 C 143,50 141,52 138,52 C 135,52 133,50 133,45 C 133,40 135,34 138,32 Z"
            fill={C.roz} fillOpacity="0.78" stroke="#D4A8A0" strokeWidth="0.5"/>
          <path d="M 135,46 Q 133,52 134,49 Z" fill={C.leaf} fillOpacity="0.65"/>
          <path d="M 141,46 Q 143,52 142,49 Z" fill={C.leaf} fillOpacity="0.65"/>

          {/* Boboc dreapta-sus */}
          <path d="M 242,30 C 245,32 247,38 247,43 C 247,48 245,50 242,50 C 239,50 237,48 237,43 C 237,38 239,32 242,30 Z"
            fill={C.roz} fillOpacity="0.78" stroke="#D4A8A0" strokeWidth="0.5"/>
          <path d="M 239,44 Q 237,50 238,47 Z" fill={C.leaf} fillOpacity="0.65"/>
          <path d="M 245,44 Q 247,50 246,47 Z" fill={C.leaf} fillOpacity="0.65"/>

          {/* Trandafir dreapta (cx=302, cy=52) */}
          <ellipse cx="302" cy="40" rx="9" ry="16" fill={C.roz} fillOpacity="0.48" transform="rotate(0, 302,52)"/>
          <ellipse cx="302" cy="40" rx="8" ry="15" fill={C.roz} fillOpacity="0.48" transform="rotate(72, 302,52)"/>
          <ellipse cx="302" cy="40" rx="9" ry="16" fill={C.roz} fillOpacity="0.80" transform="rotate(144,302,52)"/>
          <ellipse cx="302" cy="40" rx="8" ry="15" fill={C.roz} fillOpacity="0.80" transform="rotate(216,302,52)"/>
          <ellipse cx="302" cy="40" rx="9" ry="16" fill={C.roz} fillOpacity="0.62" transform="rotate(288,302,52)"/>
          <circle cx="302" cy="52" r="10" fill="#BF9090" fillOpacity="0.82"/>
          <ellipse cx="301" cy="50" rx="5" ry="4" fill={C.hartie} fillOpacity="0.32"/>

          {/* Linie decorativă sub trandafiri */}
          <line x1="50" y1="80" x2="330" y2="80" stroke={C.auriu} strokeWidth="0.6" opacity="0.4"/>
          <circle cx="190" cy="80" r="2.5" fill={C.auriu} fillOpacity="0.45"/>
          <circle cx="140" cy="80" r="1.5" fill={C.auriu} fillOpacity="0.35"/>
          <circle cx="240" cy="80" r="1.5" fill={C.auriu} fillOpacity="0.35"/>
        </svg>

        {/* ── Numele mirilor ── */}
        <div style={{
          display: "flex",
          fontSize: "72px",
          fontWeight: 600,
          color: C.bordo,
          letterSpacing: "0.02em",
          marginTop: "6px",
          lineHeight: 1.1,
        }}>
          Georgel &amp; Tatiana
        </div>

        {/* ── Linie aurie ── */}
        <div style={{
          display: "flex",
          width: "240px",
          height: "1px",
          backgroundColor: C.auriu,
          opacity: 0.55,
          margin: "18px 0 16px",
        }} />

        {/* ── Data ── */}
        <div style={{
          display: "flex",
          fontSize: "30px",
          color: C.auriu,
          letterSpacing: "0.1em",
          fontWeight: 400,
        }}>
          12 DECEMBRIE 2026
        </div>

        {/* ── Subtitlu ── */}
        <div style={{
          display: "flex",
          fontSize: "20px",
          color: C.bordoDark,
          opacity: 0.55,
          marginTop: "16px",
          letterSpacing: "0.05em",
          fontStyle: "italic",
        }}>
          Vă invităm cu drag la nunta noastră
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant Garamond", data: font400, style: "normal", weight: 400 },
        { name: "Cormorant Garamond", data: font600, style: "normal", weight: 600 },
      ],
    }
  );
}
