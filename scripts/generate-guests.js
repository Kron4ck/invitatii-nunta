// Usage: npm run guests
// Reads data/guests.csv, preserves existing codes in data/guests.js,
// generates new codes for new guests, writes guests.js + data/links.csv

const fs     = require("fs");
const path   = require("path");
const crypto = require("crypto");

// ── Configurare ──────────────────────────────────────────────────────────────
const BASE_URL = "https://invitatii-nunta-prcvrnl9a-kron2.vercel.app";

const CHARSET = "23456789abcdefghijkmnpqrstuvwxyz"; // fără 0/o și 1/l

const ROOT      = path.join(__dirname, "..");
const CSV_IN    = path.join(ROOT, "data", "guests.csv");
const GUESTS_JS = path.join(ROOT, "data", "guests.js");
const LINKS_CSV = path.join(ROOT, "data", "links.csv");

// ── Elimină BOM UTF-8 (apare când fișierul e salvat din Excel) ───────────────
function stripBOM(str) {
  return str.charCodeAt(0) === 0xFEFF ? str.slice(1) : str;
}

// ── Detectează separatorul (Excel românesc folosește ";") ────────────────────
function detectSeparator(content) {
  const firstLine = content.split("\n")[0];
  const semicolons = (firstLine.match(/;/g) || []).length;
  const commas     = (firstLine.match(/,/g) || []).length;
  if (semicolons > commas) {
    console.log("  ℹ Separator detectat: ; (Excel cu setări românești)");
    return ";";
  }
  return ",";
}

// ── Parser CSV (suportă virgule/punct-virgulă în câmpul nume) ────────────────
function parseCSV(raw) {
  const content = stripBOM(raw);
  const sep = detectSeparator(content);

  const lines = content
    .split("\n")
    .map((l) => l.replace(/\r$/, "").trim())
    .filter(Boolean);

  if (lines.length < 2) {
    console.error("✗ guests.csv e gol sau lipsește headerul.");
    process.exit(1);
  }

  const rows = [];
  let warnings = 0;

  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(sep);
    const salut = parts[0].trim();
    const forma = parts[parts.length - 1].trim();
    const nume  = parts.slice(1, -1).join(sep).trim();

    if (!nume) {
      console.warn(`  ⚠  Rândul ${i + 1}: câmpul "nume" e gol → "${lines[i]}"`);
      warnings++;
    }
    if (!salut) {
      console.warn(`  ⚠  Rândul ${i + 1}: câmpul "salut" e gol → "${lines[i]}"`);
      warnings++;
    }

    rows.push({ salut, nume, forma });
  }

  if (warnings > 0) {
    console.warn(`  ⚠  ${warnings} avertisment(e) — verifică guests.csv înainte de a trimite linkuri.\n`);
  }

  return rows;
}

// ── Citire guests.js existent (pentru a păstra codurile vechi) ───────────────
function readExistingGuests() {
  try {
    const src = fs.readFileSync(GUESTS_JS, "utf8");
    const existing = {};
    // Suportă atât "nome" cât și "nome" (compatibilitate cu versiuni vechi)
    const re =
      /"([a-z0-9]+)":\s*\{\s*salut:\s*"([^"]*)",\s*n[ou]me:\s*"([^"]*)",\s*forma:\s*"([^"]*)"/g;
    let m;
    while ((m = re.exec(src))) {
      existing[m[1]] = { salut: m[2], nume: m[3], forma: m[4] };
    }
    return existing;
  } catch {
    return {};
  }
}

// ── Generator cod unic 4 caractere ───────────────────────────────────────────
function genCode(usedCodes) {
  let code;
  do {
    const bytes = crypto.randomBytes(4);
    code = Array.from(bytes)
      .map((b) => CHARSET[b % CHARSET.length])
      .join("");
  } while (usedCodes.has(code));
  return code;
}

// ── Main ─────────────────────────────────────────────────────────────────────
if (!fs.existsSync(CSV_IN)) {
  console.error(`✗ Lipsește ${CSV_IN}`);
  process.exit(1);
}

const rows     = parseCSV(fs.readFileSync(CSV_IN, "utf8"));
const existing = readExistingGuests();

// Map invers: "salut|nome|forma" → cod existent
const reverseMap = {};
for (const [code, g] of Object.entries(existing)) {
  reverseMap[`${g.salut}|${g.nume}|${g.forma}`] = code;
}

const usedCodes = new Set(Object.keys(existing));
const newGuests = {};
let preserved = 0;
let created   = 0;

for (const row of rows) {
  const key  = `${row.salut}|${row.nume}|${row.forma}`;
  let   code = reverseMap[key];
  if (code) {
    preserved++;
  } else {
    code = genCode(usedCodes);
    usedCodes.add(code);
    created++;
  }
  newGuests[code] = row;
}

// ── Scrie guests.js ──────────────────────────────────────────────────────────
const jsLines = Object.entries(newGuests).map(([code, g]) => {
  return `  "${code}": { salut: "${g.salut}", nume: "${g.nume}", forma: "${g.forma}" },`;
});

fs.writeFileSync(
  GUESTS_JS,
  `export const guests = {\n${jsLines.join("\n")}\n};\n`,
  "utf8"
);

// ── Scrie links.csv ──────────────────────────────────────────────────────────
const csvLines = ['"nume","link"'];
for (const [code, g] of Object.entries(newGuests)) {
  csvLines.push(`"${g.nume}","${BASE_URL}/?i=${code}"`);
}
fs.writeFileSync(LINKS_CSV, csvLines.join("\n") + "\n", "utf8");

// ── Raport final ─────────────────────────────────────────────────────────────
console.log(`\n✓ ${rows.length} invitați procesați`);
console.log(`  ${preserved} coduri păstrate, ${created} coduri noi`);
console.log(`✓ data/guests.js actualizat`);
console.log(`✓ data/links.csv generat`);
console.log(`\nLinkuri generate:\n`);
for (const [code, g] of Object.entries(newGuests)) {
  console.log(`  ${g.nume.padEnd(28)} ${BASE_URL}/?i=${code}`);
}
console.log();
