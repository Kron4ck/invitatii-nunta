import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin-ext"],
  weight: "400",
});

export const metadata = {
  metadataBase: new URL("https://invitatii-nunta-prcvrnl9a-kron2.vercel.app"),
  title: "Invitație de nuntă",
  description: "Vă invităm cu drag la nunta noastră",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={`${cormorant.variable} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}
