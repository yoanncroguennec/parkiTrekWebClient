"use client";

import { useRef } from "react";
// SECTIONS
import { ExplorerScreen, HeroContent, HeroImage } from "@/app/components/sections/trek-dashboard";
// HOOKS
import { useExplorerScrollAnimation, useTrekJournalTransition } from "@/app/hooks";
// STYLES
import {
  ExplorerView,
  IntroContent,
  IntroLayout,
  IntroSection,
  IntroVisual,
} from "./TrekJournalClient.Styles";

export default function TrekJournalClient() {
  // HERO
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  // EXPLORER
  const explorerScreenRef = useRef<HTMLDivElement>(null);

  // SECTIONS
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const sportsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // CARDS
  const statCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dashboardCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sportsCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  /**
   * HERO → EXPLORER
   */
  const { handleExplore, handleBack } = useTrekJournalTransition({
    heroContentRef,
    heroImageRef,
    explorerScreenRef,
    headerRef,
    statCardRefs,
    dashboardCardRefs,
  });

  /**
   * SCROLL ANIMATIONS
   */
  useExplorerScrollAnimation({
    explorerScreenRef,
    statsRef,
    dashboardRef,
    sportsRef,
    timelineRef,
    sportsCardRefs,
    timelineItemRefs,
  });

  return (
    <IntroSection>
      <IntroLayout>
        <IntroContent ref={heroContentRef}>
          <HeroContent onExplore={handleExplore} />
        </IntroContent>

        <IntroVisual ref={heroImageRef}>
          <HeroImage />
        </IntroVisual>
      </IntroLayout>

      <ExplorerView ref={explorerScreenRef}>
        <ExplorerScreen
          onBack={handleBack}
          headerRef={headerRef}
          statsRef={statsRef}
          dashboardRef={dashboardRef}
          sportsRef={sportsRef}
          timelineRef={timelineRef}
          statCardRefs={statCardRefs}
          dashboardCardRefs={dashboardCardRefs}
          sportsCardRefs={sportsCardRefs}
          timelineItemRefs={timelineItemRefs}
        />
      </ExplorerView>
    </IntroSection>
  );
}
