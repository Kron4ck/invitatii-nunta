// ─── Modifică doar valorile de mai jos ───────────────────────────────────────
const MIRE    = "Georgel";
const MIREASA = "Tatiana";
const DATA    = "12 decembrie 2026";
const ORA     = "17:00";

const INITIALA_MIRE    = "G";      // Georgel
const INITIALA_MIREASA = "T";      // Tatiana

const LOCAL      = "Sala de Nunți „Mayorall”";  // ex. "Restaurantul Eden"
const ADRESA     = "[ADRESĂ]";              // ex. "Str. Florilor 12, Cluj-Napoca"
const MAPS       = "https://maps.app.goo.gl/X4UtFF5kakZJVQbV8";  // ex. "https://maps.google.com/?q=..."
const EVENT_DATE = "2026-12-12T17:00:00";   // ISO 8601 — data și ora exactă a evenimentului
// ─────────────────────────────────────────────────────────────────────────────
// Programul zilei — editează ora și titlul; icon: "rings"|"camera"|"champagne"|"cake"

export const content = {
  mire:            MIRE,
  mireasa:         MIREASA,
  initialaMire:    INITIALA_MIRE,
  initialaMireasa: INITIALA_MIREASA,
  data:            DATA,
  ora:             ORA,

  invitatie: {
    tu:  `Cu mare bucurie te invităm să fii alături de noi în ziua nunții noastre, pe ${DATA}, la ora ${ORA}.`,
    voi: `Cu mare bucurie vă invităm să fiți alături de noi în ziua nunții noastre, pe ${DATA}, la ora ${ORA}.`,
  },

  semnatura: `Cu drag, ${MIRE} & ${MIREASA}`,

  locatie: {
    local:  LOCAL,
    adresa: ADRESA,
    maps:   MAPS,
  },

  programul: [
    { ora: "14:00",  titlu: "Cuvântarea de nuntă", icon: "rings",     descriere: "" },
    { ora: "17:00",  titlu: "Ședința foto",        icon: "camera",    descriere: "" },
    { ora: "19:00",  titlu: "Banchetul",           icon: "champagne", descriere: "" },
    { ora: "01:00",  titlu: "Tortul",              icon: "cake",      descriere: "" },
  ],

  mesajDaruri:
    "Florile se ofilesc, dar amintirile rămân.\n" +
    "De aceea, în loc de flori, ne-ar plăcea să primim un mic suvenir\n" +
    "care să ne amintească mereu de voi.",

  eventDate: EVENT_DATE,
};
