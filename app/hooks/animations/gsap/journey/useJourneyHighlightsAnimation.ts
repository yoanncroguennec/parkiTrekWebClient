"use client";

import type { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface JourneyHighlightsAnimationRefs {
  cardRefs: RefObject<HTMLDivElement | null>[];
}

interface UseJourneyHighlightsAnimationProps {
  refs: JourneyHighlightsAnimationRefs;
}

export function useJourneyHighlightsAnimation({ refs }: UseJourneyHighlightsAnimationProps) {
  const { cardRefs } = refs;

  useGSAP(() => {
    const cards = cardRefs
      .map((ref) => ref.current)
      .filter((element): element is HTMLDivElement => element !== null);

    if (!cards.length) return;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  });
}
