"use client";

export default function RoseWreath() {
  return (
    <svg
      className="wreath__svg"
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Inel principal (ramură) ──────────────────────────────────────── */}
      <path
        className="wreath__ring"
        d="M 210 54 C 278 51 346 88 378 152 C 410 216 403 290 362 337 C 321 382 255 400 190 392 C 125 384 68 347 46 286 C 23 224 33 155 72 109 C 111 64 158 56 210 54 Z"
        stroke="#B8956A" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.68"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1"
      />
      <path
        className="wreath__ring wreath__ring--2"
        d="M 210 60 C 274 57 340 93 370 156 C 400 218 393 290 353 335 C 313 378 248 396 183 388 C 118 380 63 344 42 284 C 20 223 32 156 70 113 C 109 69 156 62 210 60 Z"
        stroke="#B8956A" strokeWidth="0.65" strokeLinecap="round" fill="none" opacity="0.38"
        pathLength="1" strokeDasharray="1" strokeDashoffset="1"
      />

      {/* ── Frunze pe inel ──────────────────────────────────────────────── */}
      <g className="wreath__leaves">
        {/* sus */}
        <path d="M 183 56 Q 173 46 176 38 Q 184 46 183 56 Z" fill="#7A7A5C" fillOpacity="0.68"/>
        <path d="M 237 55 Q 250 47 254 39 Q 243 48 237 55 Z" fill="#7A7A5C" fillOpacity="0.62"/>
        {/* sus-dreapta */}
        <path d="M 296 70 Q 306 60 314 62 Q 304 72 296 70 Z" fill="#7A7A5C" fillOpacity="0.65"/>
        <path d="M 320 84 Q 332 78 338 84 Q 326 90 320 84 Z" fill="#7A7A5C" fillOpacity="0.6"/>
        {/* dreapta */}
        <path d="M 372 165 Q 382 157 390 161 Q 380 171 372 165 Z" fill="#7A7A5C" fillOpacity="0.62"/>
        <path d="M 380 203 Q 392 199 396 207 Q 384 209 380 203 Z" fill="#7A7A5C" fillOpacity="0.58"/>
        {/* jos-dreapta */}
        <path d="M 356 315 Q 366 309 372 315 Q 362 323 356 315 Z" fill="#7A7A5C" fillOpacity="0.62"/>
        <path d="M 328 354 Q 336 346 344 350 Q 334 358 328 354 Z" fill="#7A7A5C" fillOpacity="0.6"/>
        {/* jos */}
        <path d="M 246 391 Q 250 401 242 406 Q 238 396 246 391 Z" fill="#7A7A5C" fillOpacity="0.65"/>
        <path d="M 176 391 Q 170 401 162 398 Q 168 389 176 391 Z" fill="#7A7A5C" fillOpacity="0.62"/>
        {/* jos-stânga */}
        <path d="M 110 366 Q 100 374 94 370 Q 104 362 110 366 Z" fill="#7A7A5C" fillOpacity="0.68"/>
        <path d="M 80 340 Q 70 346 66 340 Q 76 334 80 340 Z" fill="#7A7A5C" fillOpacity="0.65"/>
        {/* stânga */}
        <path d="M 47 272 Q 37 266 35 258 Q 47 262 47 272 Z" fill="#7A7A5C" fillOpacity="0.6"/>
        <path d="M 44 230 Q 34 226 34 218 Q 44 222 44 230 Z" fill="#7A7A5C" fillOpacity="0.58"/>
        {/* sus-stânga */}
        <path d="M 72 122 Q 62 116 64 108 Q 74 114 72 122 Z" fill="#7A7A5C" fillOpacity="0.62"/>
        <path d="M 96 90 Q 88 82 92 74 Q 100 82 96 90 Z" fill="#7A7A5C" fillOpacity="0.65"/>
      </g>

      {/* ── Floricele mici + puncte aurii ───────────────────────────────── */}
      <g className="wreath__florets">
        <circle cx="136" cy="73" r="3.5" fill="#E8C4C0" fillOpacity="0.58"/>
        <circle cx="136" cy="73" r="1.2" fill="#B8956A" fillOpacity="0.5"/>
        <circle cx="390" cy="182" r="3.2" fill="#E8C4C0" fillOpacity="0.52"/>
        <circle cx="390" cy="182" r="1.1" fill="#B8956A" fillOpacity="0.48"/>
        <circle cx="294" cy="383" r="3.4" fill="#E8C4C0" fillOpacity="0.55"/>
        <circle cx="294" cy="383" r="1.2" fill="#B8956A" fillOpacity="0.5"/>
        <circle cx="40" cy="250" r="3" fill="#E8C4C0" fillOpacity="0.48"/>
        <circle cx="40" cy="250" r="1" fill="#B8956A" fillOpacity="0.44"/>
        {/* dots aurii */}
        <circle cx="158" cy="58" r="1.2" fill="#B8956A" fillOpacity="0.58"/>
        <circle cx="262" cy="58" r="1.2" fill="#B8956A" fillOpacity="0.52"/>
        <circle cx="376" cy="138" r="1.0" fill="#B8956A" fillOpacity="0.52"/>
        <circle cx="374" cy="278" r="1.0" fill="#B8956A" fillOpacity="0.48"/>
        <circle cx="268" cy="389" r="1.2" fill="#B8956A" fillOpacity="0.52"/>
        <circle cx="156" cy="389" r="1.2" fill="#B8956A" fillOpacity="0.52"/>
        <circle cx="46" cy="202" r="1.0" fill="#B8956A" fillOpacity="0.48"/>
        <circle cx="50" cy="302" r="1.0" fill="#B8956A" fillOpacity="0.48"/>
      </g>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* ── CLUSTER STÂNGA-JOS ──────────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <g className="wreath__cluster-bl">
        {/* ramuri offshoots */}
        <path d="M 88 316 Q 75 300 70 285" stroke="#B8956A" strokeWidth="0.75" strokeLinecap="round" opacity="0.55"/>
        <path d="M 75 302 Q 62 298 55 290" stroke="#B8956A" strokeWidth="0.5" strokeLinecap="round" opacity="0.4"/>
        <path d="M 92 330 Q 82 342 88 354" stroke="#B8956A" strokeWidth="0.6" strokeLinecap="round" opacity="0.45"/>
        {/* frunze cluster */}
        <path d="M 70 296 Q 58 287 60 278 Q 70 285 70 296 Z" fill="#7A7A5C" fillOpacity="0.7"/>
        <path d="M 94 338 Q 82 346 77 342 Q 88 333 94 338 Z" fill="#7A7A5C" fillOpacity="0.68"/>
        <path d="M 107 354 Q 99 364 93 362 Q 101 352 107 354 Z" fill="#7A7A5C" fillOpacity="0.62"/>
        <path d="M 61 322 Q 49 322 45 314 Q 57 312 61 322 Z" fill="#7A7A5C" fillOpacity="0.65"/>

        {/* Trandafir mare (centru 82, 310) */}
        <ellipse cx="82" cy="299" rx="6.5" ry="11" fill="#6E1F2E" fillOpacity="0.44" transform="rotate(0, 82, 310)"/>
        <ellipse cx="82" cy="299" rx="6"   ry="10.5" fill="#6E1F2E" fillOpacity="0.44" transform="rotate(72, 82, 310)"/>
        <ellipse cx="82" cy="299" rx="6.5" ry="10.5" fill="#6E1F2E" fillOpacity="0.44" transform="rotate(144, 82, 310)"/>
        <ellipse cx="82" cy="299" rx="7"   ry="11.5" fill="#6E1F2E" fillOpacity="0.8" stroke="#4A1420" strokeWidth="0.35" strokeOpacity="0.35" transform="rotate(216, 82, 310)"/>
        <ellipse cx="82" cy="299" rx="6.5" ry="11"   fill="#6E1F2E" fillOpacity="0.8" stroke="#4A1420" strokeWidth="0.35" strokeOpacity="0.35" transform="rotate(288, 82, 310)"/>
        <ellipse cx="82" cy="310" rx="8" ry="7.5" fill="#4A1420" fillOpacity="0.72"/>
        <ellipse cx="81" cy="308" rx="4"   ry="3.5" fill="#E8C4C0" fillOpacity="0.36"/>
        <circle cx="80"  cy="309" r="0.9" fill="#E8C4C0" fillOpacity="0.7"/>
        <circle cx="82.5" cy="308" r="0.8" fill="#E8C4C0" fillOpacity="0.64"/>

        {/* Trandafir mic (centru 56, 340) */}
        <ellipse cx="56" cy="332" rx="4.5" ry="7.5" fill="#6E1F2E" fillOpacity="0.42" transform="rotate(0, 56, 340)"/>
        <ellipse cx="56" cy="332" rx="4"   ry="7"   fill="#6E1F2E" fillOpacity="0.42" transform="rotate(72, 56, 340)"/>
        <ellipse cx="56" cy="332" rx="4.5" ry="7.5" fill="#6E1F2E" fillOpacity="0.76" stroke="#4A1420" strokeWidth="0.3" strokeOpacity="0.3" transform="rotate(145, 56, 340)"/>
        <ellipse cx="56" cy="332" rx="4"   ry="7"   fill="#6E1F2E" fillOpacity="0.76" transform="rotate(218, 56, 340)"/>
        <ellipse cx="56" cy="340" rx="5.5" ry="5" fill="#4A1420" fillOpacity="0.68"/>
        <ellipse cx="55.5" cy="338.5" rx="2.5" ry="2" fill="#E8C4C0" fillOpacity="0.32"/>

        {/* Boboc 1 (centru 105, 322) */}
        <path d="M 105 316 C 108 317 110 321 110 326 C 110 331 107 333 105 333 C 103 333 100 331 100 326 C 100 321 102 317 105 316 Z"
          fill="#6E1F2E" fillOpacity="0.85" stroke="#4A1420" strokeWidth="0.4" strokeOpacity="0.45"/>
        <path d="M 102 328 Q 100 334 101 331 Z" fill="#7A7A5C" fillOpacity="0.65"/>
        <path d="M 108 328 Q 110 334 109 331 Z" fill="#7A7A5C" fillOpacity="0.65"/>

        {/* Semi-deschis (centru 71, 348) */}
        <ellipse cx="71" cy="342" rx="3.5" ry="6"   fill="#6E1F2E" fillOpacity="0.44" transform="rotate(15, 71, 348)"/>
        <ellipse cx="71" cy="342" rx="3.5" ry="5.5" fill="#6E1F2E" fillOpacity="0.44" transform="rotate(105, 71, 348)"/>
        <ellipse cx="71" cy="342" rx="4"   ry="6.5" fill="#6E1F2E" fillOpacity="0.82" transform="rotate(190, 71, 348)"/>
        <ellipse cx="71" cy="348" rx="5" ry="4.5" fill="#4A1420" fillOpacity="0.65"/>
      </g>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* ── CLUSTER DREAPTA-SUS ─────────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <g className="wreath__cluster-tr">
        {/* ramuri offshoots */}
        <path d="M 332 90 Q 345 76 358 72" stroke="#B8956A" strokeWidth="0.75" strokeLinecap="round" opacity="0.55"/>
        <path d="M 345 78 Q 358 74 365 82" stroke="#B8956A" strokeWidth="0.5" strokeLinecap="round" opacity="0.4"/>
        <path d="M 328 78 Q 318 68 322 56" stroke="#B8956A" strokeWidth="0.6" strokeLinecap="round" opacity="0.45"/>
        {/* frunze cluster */}
        <path d="M 350 124 Q 362 115 364 106 Q 353 115 350 124 Z" fill="#7A7A5C" fillOpacity="0.7"/>
        <path d="M 326 82 Q 338 74 343 78 Q 331 87 326 82 Z" fill="#7A7A5C" fillOpacity="0.68"/>
        <path d="M 313 68 Q 321 58 327 60 Q 319 70 313 68 Z" fill="#7A7A5C" fillOpacity="0.62"/>
        <path d="M 359 108 Q 371 108 375 116 Q 363 116 359 108 Z" fill="#7A7A5C" fillOpacity="0.65"/>

        {/* Trandafir mare (centru 338, 110) */}
        <ellipse cx="338" cy="99" rx="6.5" ry="11" fill="#6E1F2E" fillOpacity="0.44" transform="rotate(0, 338, 110)"/>
        <ellipse cx="338" cy="99" rx="6"   ry="10.5" fill="#6E1F2E" fillOpacity="0.44" transform="rotate(72, 338, 110)"/>
        <ellipse cx="338" cy="99" rx="6.5" ry="10.5" fill="#6E1F2E" fillOpacity="0.44" transform="rotate(144, 338, 110)"/>
        <ellipse cx="338" cy="99" rx="7"   ry="11.5" fill="#6E1F2E" fillOpacity="0.8" stroke="#4A1420" strokeWidth="0.35" strokeOpacity="0.35" transform="rotate(216, 338, 110)"/>
        <ellipse cx="338" cy="99" rx="6.5" ry="11"   fill="#6E1F2E" fillOpacity="0.8" stroke="#4A1420" strokeWidth="0.35" strokeOpacity="0.35" transform="rotate(288, 338, 110)"/>
        <ellipse cx="338" cy="110" rx="8" ry="7.5" fill="#4A1420" fillOpacity="0.72"/>
        <ellipse cx="337" cy="108" rx="4"   ry="3.5" fill="#E8C4C0" fillOpacity="0.36"/>
        <circle cx="336"  cy="109" r="0.9" fill="#E8C4C0" fillOpacity="0.7"/>
        <circle cx="338.5" cy="108" r="0.8" fill="#E8C4C0" fillOpacity="0.64"/>

        {/* Trandafir mic (centru 364, 80) */}
        <ellipse cx="364" cy="72" rx="4.5" ry="7.5" fill="#6E1F2E" fillOpacity="0.42" transform="rotate(0, 364, 80)"/>
        <ellipse cx="364" cy="72" rx="4"   ry="7"   fill="#6E1F2E" fillOpacity="0.42" transform="rotate(72, 364, 80)"/>
        <ellipse cx="364" cy="72" rx="4.5" ry="7.5" fill="#6E1F2E" fillOpacity="0.76" stroke="#4A1420" strokeWidth="0.3" strokeOpacity="0.3" transform="rotate(145, 364, 80)"/>
        <ellipse cx="364" cy="72" rx="4"   ry="7"   fill="#6E1F2E" fillOpacity="0.76" transform="rotate(218, 364, 80)"/>
        <ellipse cx="364" cy="80" rx="5.5" ry="5" fill="#4A1420" fillOpacity="0.68"/>
        <ellipse cx="363.5" cy="78.5" rx="2.5" ry="2" fill="#E8C4C0" fillOpacity="0.32"/>

        {/* Boboc 1 (centru 315, 80) */}
        <path d="M 315 74 C 318 75 320 79 320 84 C 320 89 317 91 315 91 C 313 91 310 89 310 84 C 310 79 312 75 315 74 Z"
          fill="#6E1F2E" fillOpacity="0.85" stroke="#4A1420" strokeWidth="0.4" strokeOpacity="0.45"/>
        <path d="M 312 86 Q 310 92 311 89 Z" fill="#7A7A5C" fillOpacity="0.65"/>
        <path d="M 318 86 Q 320 92 319 89 Z" fill="#7A7A5C" fillOpacity="0.65"/>

        {/* Semi-deschis (centru 349, 64) */}
        <ellipse cx="349" cy="58" rx="3.5" ry="6"   fill="#6E1F2E" fillOpacity="0.44" transform="rotate(-15, 349, 64)"/>
        <ellipse cx="349" cy="58" rx="3.5" ry="5.5" fill="#6E1F2E" fillOpacity="0.44" transform="rotate(75, 349, 64)"/>
        <ellipse cx="349" cy="58" rx="4"   ry="6.5" fill="#6E1F2E" fillOpacity="0.82" transform="rotate(168, 349, 64)"/>
        <ellipse cx="349" cy="64" rx="5" ry="4.5" fill="#4A1420" fillOpacity="0.65"/>
      </g>
    </svg>
  );
}
