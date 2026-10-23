"use client";

const PALETTE = {
  light: {
    branch:    "#B8956A",
    leaf:      "#7A7A5C",
    petal:     "#6E1F2E",
    petalLine: "#4A1420",
    cup:       "#4A1420",
    hi:        "#E8C4C0",
    floret:    "#B8956A",
  },
  dark: {
    branch:    "#FBF6F1",
    leaf:      "#9FAD80",
    petal:     "#E8C4C0",
    petalLine: "#D4A8A0",
    cup:       "#BF9090",
    hi:        "#FBF6F1",
    floret:    "#E8C4C0",
  },
};

export default function RoseBranch({ tone = "light", flip = false, className = "" }) {
  const c = PALETTE[tone] ?? PALETTE.light;
  const stemLen = 1;

  return (
    <span
      className={`rb ${className}`}
      style={{ display: "block", transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
    >
      <span className="rb__sway" style={{ display: "block", transformOrigin: "50% 100%" }}>
        <svg
          viewBox="0 0 120 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          {/* ── Tulpina principală ──────────────────────────────────────── */}
          <path
            className="rb__stem"
            d="M 30,315 C 20,275 42,245 60,210 C 78,175 70,140 82,105 C 94,70 88,44 94,12"
            stroke={c.branch}
            strokeWidth="1.6"
            strokeLinecap="round"
            pathLength={stemLen}
            strokeDasharray={stemLen}
            strokeDashoffset={stemLen}
          />

          {/* ── Crenguțe laterale ─────────────────────────────────────── */}
          <path
            className="rb__stem"
            d="M 60,210 C 48,204 36,198 28,188"
            stroke={c.branch} strokeWidth="1.1" strokeLinecap="round"
            pathLength={stemLen} strokeDasharray={stemLen} strokeDashoffset={stemLen}
          />
          <path
            className="rb__stem"
            d="M 82,105 C 96,100 104,90 108,78"
            stroke={c.branch} strokeWidth="1.0" strokeLinecap="round"
            pathLength={stemLen} strokeDasharray={stemLen} strokeDashoffset={stemLen}
          />
          <path
            className="rb__stem"
            d="M 50,158 C 38,152 28,148 18,140"
            stroke={c.branch} strokeWidth="0.9" strokeLinecap="round"
            pathLength={stemLen} strokeDasharray={stemLen} strokeDashoffset={stemLen}
          />

          {/* ── Frunze ────────────────────────────────────────────────── */}
          {/* frunze mari pe tulpina principală */}
          <path className="rb__leaf" style={{ animationDelay: "0.4s" }}
            d="M 52,218 Q 38,210 34,196 Q 50,206 52,218 Z" fill={c.leaf} fillOpacity="0.78"/>
          <path className="rb__leaf" style={{ animationDelay: "0.55s" }}
            d="M 68,215 Q 82,207 80,192 Q 66,204 68,215 Z" fill={c.leaf} fillOpacity="0.68"/>

          <path className="rb__leaf" style={{ animationDelay: "0.65s" }}
            d="M 44,162 Q 30,154 28,140 Q 44,150 44,162 Z" fill={c.leaf} fillOpacity="0.78"/>
          <path className="rb__leaf" style={{ animationDelay: "0.75s" }}
            d="M 58,158 Q 72,150 74,136 Q 58,148 58,158 Z" fill={c.leaf} fillOpacity="0.68"/>

          <path className="rb__leaf" style={{ animationDelay: "0.85s" }}
            d="M 74,114 Q 60,106 60,92 Q 76,104 74,114 Z" fill={c.leaf} fillOpacity="0.78"/>
          <path className="rb__leaf" style={{ animationDelay: "0.95s" }}
            d="M 88,110 Q 102,102 104,88 Q 88,100 88,110 Z" fill={c.leaf} fillOpacity="0.68"/>

          <path className="rb__leaf" style={{ animationDelay: "1.05s" }}
            d="M 86,62 Q 72,54 72,40 Q 88,52 86,62 Z" fill={c.leaf} fillOpacity="0.72"/>
          <path className="rb__leaf" style={{ animationDelay: "1.12s" }}
            d="M 98,60 Q 112,52 112,38 Q 98,50 98,60 Z" fill={c.leaf} fillOpacity="0.60"/>

          {/* frunze pe crenguțe */}
          <path className="rb__leaf" style={{ animationDelay: "0.5s" }}
            d="M 32,192 Q 20,186 18,174 Q 32,182 32,192 Z" fill={c.leaf} fillOpacity="0.72"/>
          <path className="rb__leaf" style={{ animationDelay: "1.0s" }}
            d="M 106,84 Q 118,76 118,62 Q 104,74 106,84 Z" fill={c.leaf} fillOpacity="0.65"/>

          {/* ── Florete mici (3 puncte aurii) ─────────────────────────── */}
          <g className="rb__flower" style={{ animationDelay: "1.3s" }}>
            <circle cx="20" cy="140" r="2.8" fill={c.floret} fillOpacity="0.68"/>
            <circle cx="14" cy="136" r="1.8" fill={c.floret} fillOpacity="0.5"/>
            <circle cx="24" cy="134" r="1.5" fill={c.floret} fillOpacity="0.5"/>
          </g>
          <g className="rb__flower" style={{ animationDelay: "1.5s" }}>
            <circle cx="109" cy="78" r="2.6" fill={c.floret} fillOpacity="0.68"/>
            <circle cx="114" cy="74" r="1.6" fill={c.floret} fillOpacity="0.5"/>
            <circle cx="104" cy="74" r="1.5" fill={c.floret} fillOpacity="0.48"/>
          </g>

          {/* ── Boboc la vârf ─────────────────────────────────────────── */}
          <g className="rb__flower" style={{ animationDelay: "1.6s" }}>
            <path
              d="M 94,12 C 97,14 99,20 99,25 C 99,30 97,32 94,32 C 91,32 89,30 89,25 C 89,20 91,14 94,12 Z"
              fill={c.petal} fillOpacity="0.9"
              stroke={c.petalLine} strokeWidth="0.4" strokeOpacity="0.55"
            />
            <path d="M 94,12 L 94,24" stroke={c.petalLine} strokeWidth="0.3" strokeOpacity="0.4" fill="none"/>
            <path d="M 91,26 Q 89,32 90,29 Z" fill={c.leaf} fillOpacity="0.68"/>
            <path d="M 97,26 Q 99,32 98,29 Z" fill={c.leaf} fillOpacity="0.68"/>
          </g>

          {/* ── Boboc la mijloc-jos ────────────────────────────────────── */}
          <g className="rb__flower" style={{ animationDelay: "0.9s" }}>
            <path
              d="M 27,188 C 30,190 32,196 32,201 C 32,206 30,208 27,208 C 24,208 22,206 22,201 C 22,196 24,190 27,188 Z"
              fill={c.petal} fillOpacity="0.82"
              stroke={c.petalLine} strokeWidth="0.35" strokeOpacity="0.5"
            />
            <path d="M 27,188 L 27,200" stroke={c.petalLine} strokeWidth="0.3" strokeOpacity="0.38" fill="none"/>
            <path d="M 24,202 Q 22,208 23,205 Z" fill={c.leaf} fillOpacity="0.65"/>
            <path d="M 30,202 Q 32,208 31,205 Z" fill={c.leaf} fillOpacity="0.65"/>
          </g>

          {/* ── Trandafir semi-deschis (centru: 50,158) ───────────────── */}
          <g className="rb__flower" style={{ animationDelay: "0.7s" }}>
            <ellipse cx="50" cy="150" rx="4" ry="8"
              fill={c.petal} fillOpacity="0.50" transform="rotate(0, 50, 158)"/>
            <ellipse cx="50" cy="150" rx="3.5" ry="7.5"
              fill={c.petal} fillOpacity="0.50" transform="rotate(72, 50, 158)"/>
            <ellipse cx="50" cy="150" rx="4" ry="8"
              fill={c.petal} fillOpacity="0.78" transform="rotate(144, 50, 158)"/>
            <ellipse cx="50" cy="150" rx="3.5" ry="7.5"
              fill={c.petal} fillOpacity="0.78" transform="rotate(216, 50, 158)"/>
            <ellipse cx="50" cy="150" rx="4" ry="8"
              fill={c.petal} fillOpacity="0.62" transform="rotate(288, 50, 158)"/>
            <circle cx="50" cy="158" r="5.5" fill={c.cup} fillOpacity="0.8"/>
            <ellipse cx="49.5" cy="157" rx="2.5" ry="2"
              fill={c.hi} fillOpacity="0.42"/>
          </g>

          {/* ── Trandafir mare jos (centru: 30,230) ───────────────────── */}
          <g className="rb__flower" style={{ animationDelay: "0.3s" }}>
            <ellipse cx="30" cy="219" rx="6" ry="11"
              fill={c.petal} fillOpacity="0.45" transform="rotate(0, 30, 230)"/>
            <ellipse cx="30" cy="219" rx="5.5" ry="10.5"
              fill={c.petal} fillOpacity="0.45" transform="rotate(72, 30, 230)"/>
            <ellipse cx="30" cy="219" rx="6" ry="11"
              fill={c.petal} fillOpacity="0.80" stroke={c.petalLine} strokeWidth="0.35"
              transform="rotate(144, 30, 230)"/>
            <ellipse cx="30" cy="219" rx="5.5" ry="10"
              fill={c.petal} fillOpacity="0.80" stroke={c.petalLine} strokeWidth="0.35"
              transform="rotate(216, 30, 230)"/>
            <ellipse cx="30" cy="219" rx="6" ry="11"
              fill={c.petal} fillOpacity="0.62" transform="rotate(288, 30, 230)"/>
            <circle cx="30" cy="230" r="7.5" fill={c.cup} fillOpacity="0.82"/>
            <ellipse cx="29.5" cy="228.5" rx="3.8" ry="3.2"
              fill={c.hi} fillOpacity="0.42"/>
            <circle cx="29" cy="229" r="0.9" fill={c.hi} fillOpacity="0.72"/>
            <circle cx="31" cy="228" r="0.8" fill={c.hi} fillOpacity="0.65"/>
          </g>

          {/* ── Trandafir mare sus (centru: 92,68) ────────────────────── */}
          <g className="rb__flower" style={{ animationDelay: "1.1s" }}>
            <ellipse cx="92" cy="57" rx="5.5" ry="10"
              fill={c.petal} fillOpacity="0.46" transform="rotate(0, 92, 68)"/>
            <ellipse cx="92" cy="57" rx="5" ry="9.5"
              fill={c.petal} fillOpacity="0.46" transform="rotate(72, 92, 68)"/>
            <ellipse cx="92" cy="57" rx="5.5" ry="10"
              fill={c.petal} fillOpacity="0.80" stroke={c.petalLine} strokeWidth="0.35"
              transform="rotate(144, 92, 68)"/>
            <ellipse cx="92" cy="57" rx="5" ry="9.5"
              fill={c.petal} fillOpacity="0.80" stroke={c.petalLine} strokeWidth="0.35"
              transform="rotate(216, 92, 68)"/>
            <ellipse cx="92" cy="57" rx="5.5" ry="10"
              fill={c.petal} fillOpacity="0.62" transform="rotate(288, 92, 68)"/>
            <circle cx="92" cy="68" r="7" fill={c.cup} fillOpacity="0.80"/>
            <ellipse cx="91.5" cy="66.5" rx="3.5" ry="3"
              fill={c.hi} fillOpacity="0.40"/>
            <circle cx="91" cy="67" r="0.85" fill={c.hi} fillOpacity="0.70"/>
            <circle cx="93" cy="66" r="0.75" fill={c.hi} fillOpacity="0.62"/>
          </g>
        </svg>
      </span>
    </span>
  );
}
