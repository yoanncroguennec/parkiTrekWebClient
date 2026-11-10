"use client";

import { RefObject, useCallback, useEffect, useRef } from "react";

import gsap from "gsap";

/* =========================================================
   TYPES
========================================================= */

type ElementRefs = {
  current: (HTMLDivElement | null)[];
};

interface UseTrekJournalTransitionProps {
  heroContentRef: RefObject<HTMLDivElement | null>;
  heroImageRef: RefObject<HTMLDivElement | null>;
  explorerScreenRef: RefObject<HTMLDivElement | null>;

  headerRef: RefObject<HTMLDivElement | null>;

  statCardRefs: ElementRefs;
  dashboardCardRefs: ElementRefs;
}

interface UseTrekJournalTransitionReturn {
  handleExplore: () => void;
  handleBack: () => void;
}

/* =========================================================
   HOOK
========================================================= */

export function useTrekJournalTransition({
  heroContentRef,
  heroImageRef,
  explorerScreenRef,
  headerRef,
  statCardRefs,
  dashboardCardRefs,
}: UseTrekJournalTransitionProps): UseTrekJournalTransitionReturn {
  const isAnimatingRef = useRef(false);

  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  /* =======================================================
     HELPERS
  ======================================================= */

  const getStatCards = useCallback(() => {
    return statCardRefs.current.filter((element): element is HTMLDivElement => element !== null);
  }, [statCardRefs]);

  const getDashboardCards = useCallback(() => {
    return dashboardCardRefs.current.filter(
      (element): element is HTMLDivElement => element !== null
    );
  }, [dashboardCardRefs]);

  const killCurrentTimeline = useCallback(() => {
    timelineRef.current?.kill();
    timelineRef.current = null;
  }, []);

  /* =======================================================
     HERO → EXPLORER
  ======================================================= */

  const handleExplore = useCallback(() => {
    const heroContent = heroContentRef.current;
    const heroImage = heroImageRef.current;
    const explorerScreen = explorerScreenRef.current;
    const header = headerRef.current;

    const statCards = getStatCards();
    const dashboardCards = getDashboardCards();

    /* -------------------------------------------------------
       Vérification
    ------------------------------------------------------- */

    if (isAnimatingRef.current || !heroContent || !heroImage || !explorerScreen || !header) {
      return;
    }

    isAnimatingRef.current = true;

    killCurrentTimeline();

    /* -------------------------------------------------------
       États initiaux
    ------------------------------------------------------- */

    gsap.set(header, {
      opacity: 0,
      y: -40,
    });

    gsap.set(statCards, {
      opacity: 0,
      y: 40,
      scale: 0.95,
    });

    gsap.set(dashboardCards, {
      opacity: 0,
      y: 50,
      scale: 0.96,
    });

    /* -------------------------------------------------------
       Timeline
    ------------------------------------------------------- */

    const timeline = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });

    timelineRef.current = timeline;

    /* -------------------------------------------------------
       Explorer
    ------------------------------------------------------- */

    timeline.set(explorerScreen, {
      pointerEvents: "auto",
    });

    /* -------------------------------------------------------
       Hero content
    ------------------------------------------------------- */

    timeline.to(
      heroContent,
      {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      },
      0
    );

    /* -------------------------------------------------------
       Hero image
    ------------------------------------------------------- */

    timeline.to(
      heroImage,
      {
        xPercent: 200,
        duration: 1.2,
        ease: "power3.inOut",
      },
      0
    );

    /* -------------------------------------------------------
       Explorer
    ------------------------------------------------------- */

    timeline.to(
      explorerScreen,
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      0.3
    );

    /* -------------------------------------------------------
       Header
    ------------------------------------------------------- */

    timeline.to(
      header,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      0.8
    );

    /* -------------------------------------------------------
       Stats
    ------------------------------------------------------- */

    timeline.to(
      statCards,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
      },
      1.05
    );

    /* -------------------------------------------------------
       Dashboard
    ------------------------------------------------------- */

    timeline.to(
      dashboardCards,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.18,
      },
      1.8
    );
  }, [
    heroContentRef,
    heroImageRef,
    explorerScreenRef,
    headerRef,
    getStatCards,
    getDashboardCards,
    killCurrentTimeline,
  ]);

  /* =======================================================
     EXPLORER → HERO
  ======================================================= */

  const handleBack = useCallback(() => {
    const heroContent = heroContentRef.current;
    const heroImage = heroImageRef.current;
    const explorerScreen = explorerScreenRef.current;
    const header = headerRef.current;

    const statCards = getStatCards();
    const dashboardCards = getDashboardCards();

    /* -------------------------------------------------------
       Vérification
    ------------------------------------------------------- */

    if (isAnimatingRef.current || !heroContent || !heroImage || !explorerScreen || !header) {
      return;
    }

    isAnimatingRef.current = true;

    killCurrentTimeline();

    /* -------------------------------------------------------
       Timeline
    ------------------------------------------------------- */

    const timeline = gsap.timeline({
      onComplete: () => {
        gsap.set(explorerScreen, {
          pointerEvents: "none",
        });

        isAnimatingRef.current = false;
      },
    });

    timelineRef.current = timeline;

    /* -------------------------------------------------------
       Dashboard
    ------------------------------------------------------- */

    timeline.to(
      dashboardCards,
      {
        opacity: 0,
        y: 50,
        scale: 0.96,
        duration: 0.5,
        ease: "power2.in",
        stagger: 0.08,
      },
      0
    );

    /* -------------------------------------------------------
       Stats
    ------------------------------------------------------- */

    timeline.to(
      statCards,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.4,
        ease: "power2.in",
        stagger: 0.08,
      },
      0.15
    );

    /* -------------------------------------------------------
       Header
    ------------------------------------------------------- */

    timeline.to(
      header,
      {
        opacity: 0,
        y: -40,
        duration: 0.5,
        ease: "power2.in",
      },
      0
    );

    /* -------------------------------------------------------
       Explorer
    ------------------------------------------------------- */

    timeline.to(
      explorerScreen,
      {
        opacity: 0,
        duration: 0.7,
        ease: "power2.inOut",
      },
      0.2
    );

    /* -------------------------------------------------------
       Hero image
    ------------------------------------------------------- */

    timeline.to(
      heroImage,
      {
        xPercent: 0,
        duration: 1.2,
        ease: "power3.inOut",
      },
      0.1
    );

    /* -------------------------------------------------------
       Hero content
    ------------------------------------------------------- */

    timeline.to(
      heroContent,
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      0.3
    );
  }, [
    heroContentRef,
    heroImageRef,
    explorerScreenRef,
    headerRef,
    getStatCards,
    getDashboardCards,
    killCurrentTimeline,
  ]);

  /* =======================================================
     CLEANUP
  ======================================================= */

  useEffect(() => {
    return () => {
      killCurrentTimeline();
    };
  }, [killCurrentTimeline]);

  /* =======================================================
     RETURN
  ======================================================= */

  return {
    handleExplore,
    handleBack,
  };
}
