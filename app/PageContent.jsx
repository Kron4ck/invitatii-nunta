"use client";

import { useState } from "react";
import { useGuest } from "@/hooks/useGuest";
import HeroSection from "@/components/HeroSection";
import InvitationSection from "@/components/InvitationSection";
import CoupleSection from "@/components/CoupleSection";
import LocationSection from "@/components/LocationSection";
import ScheduleSection from "@/components/ScheduleSection";
import ThankYouSection from "@/components/ThankYouSection";
import CountdownSection from "@/components/CountdownSection";
import Ornament from "@/components/Ornament";

export default function PageContent() {
  const [isOpen, setIsOpen] = useState(false);
  const { salut, nume, forma } = useGuest();

  return (
    <>
      <Ornament variant="sprig" className="sprig sprig--left" />
      <Ornament variant="sprig" className="sprig sprig--right" />

      <HeroSection salut={salut} nume={nume} onOpen={() => setIsOpen(true)} />

      {isOpen && (
        <>
          <InvitationSection salut={salut} nume={nume} forma={forma} />
          <Ornament variant="divider" />
          <CoupleSection />
          <Ornament variant="divider" />
          <LocationSection />
          <Ornament variant="divider" />
          <ScheduleSection />
          <Ornament variant="divider" />
          <ThankYouSection forma={forma} nume={nume} />
          <Ornament variant="divider" />
          <CountdownSection />
        </>
      )}
    </>
  );
}
