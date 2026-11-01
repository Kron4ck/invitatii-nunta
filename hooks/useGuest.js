import { guests } from "@/data/guests";

const FALLBACK = { salut: "Dragi", nume: "invitați", forma: "voi" };

function resolveForma(guest) {
  if (guest.forma) return guest.forma;
  return guest.salut === "Dragă" ? "tu" : "voi";
}

export function getGuest(code) {
  const guest = (!code || !guests[code]) ? FALLBACK : guests[code];
  return { ...guest, forma: resolveForma(guest) };
}
