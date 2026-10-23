import { Suspense } from "react";
import PageContent from "./PageContent";
import { guests } from "@/data/guests";
import { content } from "@/data/content";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const code  = params?.i;
  const guest = code && guests[code] ? guests[code] : null;

  const names = `${content.mire} & ${content.mireasa}`;
  const desc  = `${names} · ${content.data}`;

  if (!guest) {
    return {
      title: `Invitație la nunta ${names}`,
      description: desc,
      openGraph: { title: `Invitație la nunta ${names}`, description: desc },
    };
  }

  const verbInvit = guest.forma === "tu" ? "te invităm" : "vă invităm";
  const title = `${guest.salut} ${guest.nume}, ${verbInvit} la nunta noastră`;

  return {
    title,
    description: desc,
    openGraph: { title, description: desc },
  };
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageContent />
    </Suspense>
  );
}
