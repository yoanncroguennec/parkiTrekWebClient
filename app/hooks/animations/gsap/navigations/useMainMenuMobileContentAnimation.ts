"use client";

import { useCallback, useLayoutEffect, useRef } from "react";

import gsap from "gsap";

export function useMainMenuMobileContentAnimation() {
  // =====================================================
  // REFS
  // =====================================================

  const paperRef = useRef<HTMLDivElement>(null);

  const logoRef = useRef<HTMLDivElement>(null);

  const titleRef = useRef<HTMLDivElement>(null);

  const linksRef = useRef<HTMLDivElement[]>([]);

  const liveCardRef = useRef<HTMLDivElement>(null);

  const liveDotRef = useRef<HTMLDivElement>(null);

  const decorRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef<gsap.core.Timeline | null>(null);

  // =====================================================
  // LINK REFS
  // =====================================================

  const addLinkRef = (element: HTMLDivElement | null) => {
    if (element && !linksRef.current.includes(element)) {
      linksRef.current.push(element);
    }
  };

  // =====================================================
  // OPEN ANIMATION
  // =====================================================

  useLayoutEffect(() => {
    const paper = paperRef.current;

    const logo = logoRef.current;

    const title = titleRef.current;

    const links = linksRef.current;

    const liveCard = liveCardRef.current;

    const liveDot = liveDotRef.current;

    const decor = decorRef.current;

    if (!paper) {
      return;
    }

    const ctx = gsap.context(() => {
      animationRef.current?.kill();

      // =================================================
      // INITIAL STATES
      // =================================================

      gsap.set(paper, {
        x: -120,
        opacity: 0,
        scale: 0.96,
      });

      gsap.set(logo, {
        opacity: 0,
        scale: 0.5,
        rotation: -20,
      });

      gsap.set(title, {
        opacity: 0,
        y: 20,
      });

      gsap.set(links, {
        opacity: 0,
        x: -40,
        y: 10,
      });

      gsap.set(liveCard, {
        opacity: 0,
        y: 60,
        scale: 0.8,
        rotation: -4,
      });

      gsap.set(decor, {
        opacity: 0,
        y: 80,
        x: -30,
        scale: 0.8,
        rotation: -8,
      });

      // =================================================
      // OPEN TIMELINE
      // =================================================

      const timeline = gsap.timeline();

      animationRef.current = timeline;

      // =================================================
      // 1 — PANEL
      // =================================================

      timeline.to(paper, {
        x: 0,
        opacity: 1,
        scale: 1,

        duration: 0.7,

        ease: "power4.out",
      });

      // =================================================
      // 2 — LOGO
      // =================================================

      timeline.to(
        logo,
        {
          opacity: 1,
          scale: 1,
          rotation: 0,

          duration: 0.5,

          ease: "back.out(2)",
        },
        "-=0.35",
      );

      // =================================================
      // 3 — TITLE
      // =================================================

      timeline.to(
        title,
        {
          opacity: 1,
          y: 0,

          duration: 0.5,

          ease: "power3.out",
        },
        "-=0.3",
      );

      // =================================================
      // 4 — LINKS
      // =================================================

      timeline.to(
        links,
        {
          opacity: 1,
          x: 0,
          y: 0,

          duration: 0.55,

          stagger: {
            each: 0.1,
            from: "start",
          },

          ease: "power3.out",
        },
        "-=0.2",
      );

      // =================================================
      // 5 — LIVE CARD
      // =================================================

      timeline.to(
        liveCard,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,

          duration: 0.65,

          ease: "back.out(1.5)",
        },
        "-=0.15",
      );

      // =================================================
      // 6 — DECOR
      // =================================================

      timeline.to(
        decor,
        {
          opacity: 1,

          y: 0,
          x: 0,

          scale: 1,
          rotation: 0,

          duration: 0.7,

          ease: "power3.out",
        },
        "-=0.25",
      );

      // =================================================
      // LIVE DOT
      // =================================================

      if (liveDot) {
        gsap.to(liveDot, {
          scale: 1.25,
          opacity: 0.7,

          duration: 0.8,

          repeat: -1,
          yoyo: true,

          ease: "sine.inOut",
        });
      }
    }, paper);

    return () => {
      ctx.revert();

      animationRef.current?.kill();
    };
  }, []);

  // =====================================================
  // CLOSE ANIMATION
  // =====================================================

  const closeContent = useCallback(() => {
    const paper = paperRef.current;

    const logo = logoRef.current;

    const title = titleRef.current;

    const links = linksRef.current;

    const liveCard = liveCardRef.current;

    const liveDot = liveDotRef.current;

    const decor = decorRef.current;

    // =================================================
    // STOP PREVIOUS ANIMATION
    // =================================================

    animationRef.current?.kill();

    if (liveDot) {
      gsap.killTweensOf(liveDot);
    }

    // =================================================
    // CLOSE TIMELINE
    // =================================================

    const timeline = gsap.timeline();

    animationRef.current = timeline;

    // =================================================
    // 1 — DECOR
    // =================================================

    timeline.to(decor, {
      opacity: 0,

      y: 80,
      x: -30,

      scale: 0.8,
      rotation: -8,

      duration: 0.5,

      ease: "power3.in",
    });

    // =================================================
    // 2 — LIVE CARD
    // =================================================

    timeline.to(
      liveCard,
      {
        opacity: 0,

        y: 60,

        scale: 0.8,

        rotation: -4,

        duration: 0.45,

        ease: "power3.in",
      },
      "-=0.25",
    );

    // =================================================
    // 3 — LINKS
    // =================================================

    timeline.to(
      links,
      {
        opacity: 0,

        x: -40,
        y: 10,

        duration: 0.4,

        stagger: {
          each: 0.08,
          from: "end",
        },

        ease: "power3.in",
      },
      "-=0.2",
    );

    // =================================================
    // 4 — TITLE
    // =================================================

    timeline.to(
      title,
      {
        opacity: 0,
        y: 20,

        duration: 0.35,

        ease: "power3.in",
      },
      "-=0.2",
    );

    // =================================================
    // 5 — LOGO
    // =================================================

    timeline.to(
      logo,
      {
        opacity: 0,

        scale: 0.5,

        rotation: -20,

        duration: 0.4,

        ease: "power3.in",
      },
      "-=0.2",
    );

    // =================================================
    // 6 — PANEL
    // =================================================

    timeline.to(
      paper,
      {
        x: -120,

        opacity: 0,

        scale: 0.96,

        duration: 0.6,

        ease: "power4.in",
      },
      "-=0.15",
    );

    return timeline;
  }, []);

  // =====================================================
  // RETURN
  // =====================================================

  return {
    paperRef,
    logoRef,
    titleRef,
    linksRef,

    liveCardRef,
    liveDotRef,

    decorRef,

    addLinkRef,

    closeContent,
  };
}
