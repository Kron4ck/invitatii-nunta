// Usage: npm run guests
// Reads data/guests.csv, preserves existing codes in data/guests.js,
// generates new codes for new guests, writes guests.js + data/links.csv

const fs     = require("fs");
const path   = require("path");
const crypto = require("crypto");

// ── Configurare ──────────────────────────────────────────────────────────────
const BASE_URL = "https://georgel-tatiana.vercel.app";

const CHARSET = "23456789abcdefghijkmnpqrstuvwxyz"; // fără 0/o și 1/l

const ROOT      = path.join(__dirname, "..");
const CSV_IN    = path.join(ROOT, "data", "guests.csv");
const GUESTS_JS = path.join(ROOT, "data", "guests.js");
const LINKS_CSV = path.join(ROOT, "data", "links.csv");

// ── Citire guests.js existent (pentru a păstra codurile vechi) ───────────────
function readExistingGuests() {
  try {
    const src = fs.readFileSync(GUESTS_JS, "utf8");
    const existing = {};
    // Extrage: "cod": { salut: "X", nome: "Y", forma: "Z" }
    const re =
      /"([a-z0-9]+)":\s*\{\s*salut:\s*"([^"]*)",\s*nome:\s*"([^"]*)",\s*forma:\s*"([^"]*)"/g;
    let m;
    while ((m = re.exec(src))) {
      existing[m[1]] = { salut: m[2], nome: m[3], forma: m[4] };
    }
    return existing;
  } catch {
    return {};
  }
}

// ── Parser CSV simplu (suportă virgule în câmpul nome) ───────────────────────
function parseCSV(content) {
  const lines = content
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length < 2) return [];

  return lines.slice(1).map((line) => {
    const parts = line.split(",");
    const salut = parts[0].trim();
    const forma = parts[parts.length - 1].trim();
    const nome  = parts.slice(1, -1).join(",").trim();
    return { salut, nome, forma };
  });
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
  reverseMap[`${g.salut}|${g.nome}|${g.forma}`] = code;
}

const usedCodes = new Set(Object.keys(existing));
const newGuests = {};
let preserved = 0;
let created   = 0;

for (const row of rows) {
  const key  = `${row.salut}|${row.nome}|${row.forma}`;
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
  return `  "${code}": { salut: "${g.salut}", nome: "${g.nome}", forma: "${g.forma}" },`;
});

fs.writeFileSync(
  GUESTS_JS,
  `export const guests = {\n${jsLines.join("\n")}\n};\n`,
  "utf8"
);

// ── Scrie links.csv ──────────────────────────────────────────────────────────
const csvLines = ['"nome","link"'];
for (const [code, g] of Object.entries(newGuests)) {
  csvLines.push(`"${g.nome}","${BASE_URL}/?i=${code}"`);
}
fs.writeFileSync(LINKS_CSV, csvLines.join("\n") + "\n", "utf8");

console.log(`\n✓ ${rows.length} invitați procesați`);
console.log(`  ${preserved} coduri păstrate, ${created} coduri noi`);
console.log(`✓ data/guests.js actualizat`);
console.log(`✓ data/links.csv generat`);
console.log(`\nLinkuri generate:\n`);
for (const [code, g] of Object.entries(newGuests)) {
  console.log(`  ${g.nome.padEnd(28)} ${BASE_URL}/?i=${code}`);
}
console.log();
