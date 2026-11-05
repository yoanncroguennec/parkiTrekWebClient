"use client";

import { RefObject, useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseExplorerScrollAnimationProps {
  explorerScreenRef: RefObject<HTMLDivElement | null>;

  statsRef: RefObject<HTMLDivElement | null>;
  dashboardRef: RefObject<HTMLDivElement | null>;

  sportsRef: RefObject<HTMLDivElement | null>;
  timelineRef: RefObject<HTMLDivElement | null>;

  sportsCardRefs: RefObject<(HTMLDivElement | null)[]>;
  timelineItemRefs: RefObject<(HTMLDivElement | null)[]>;
}

export function useExplorerScrollAnimation({
  explorerScreenRef,
  statsRef,
  dashboardRef,
  sportsRef,
  timelineRef,
  sportsCardRefs,
  timelineItemRefs,
}: UseExplorerScrollAnimationProps) {
  useLayoutEffect(() => {
    const explorer = explorerScreenRef.current;

    if (!explorer) return;

    const ctx = gsap.context(() => {
      /**
       * SPORTS SECTION
       */
      const sports = sportsRef.current;

      if (sports) {
        gsap.fromTo(
          sports,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            immediateRender: false,

            scrollTrigger: {
              trigger: sports,
              start: "top 85%",
              end: "top 55%",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      }

      /**
       * SPORTS CARDS
       */
      const sportsCards = sportsCardRefs.current.filter(
        (element): element is HTMLDivElement => element !== null,
      );

      if (sportsCards.length > 0) {
        gsap.fromTo(
          sportsCards,
          {
            opacity: 0,
            y: 50,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            immediateRender: false,

            scrollTrigger: {
              trigger: sportsCards[0],
              start: "top 85%",
              end: "top 55%",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      }

      /**
       * TIMELINE SECTION
       */
      const timeline = timelineRef.current;

      if (timeline) {
        gsap.fromTo(
          timeline,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            immediateRender: false,

            scrollTrigger: {
              trigger: timeline,
              start: "top 85%",
              end: "top 55%",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      }

      /**
       * TIMELINE ITEMS
       */
      const timelineItems = timelineItemRefs.current.filter(
        (element): element is HTMLDivElement => element !== null,
      );

      if (timelineItems.length > 0) {
        gsap.fromTo(
          timelineItems,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.15,
            immediateRender: false,

            scrollTrigger: {
              trigger: timelineItems[0],
              start: "top 85%",
              end: "top 55%",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      }

      /**
       * Refresh après création des ScrollTriggers
       */
      ScrollTrigger.refresh();
    }, explorer);

    return () => {
      ctx.revert();
    };
  }, [
    explorerScreenRef,
    statsRef,
    dashboardRef,
    sportsRef,
    timelineRef,
    sportsCardRefs,
    timelineItemRefs,
  ]);
}
