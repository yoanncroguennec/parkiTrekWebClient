"use client";

import type { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface UseStatsCardsAnimationProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

export function useStatsCardsAnimation({ containerRef }: UseStatsCardsAnimationProps) {
  useGSAP(
    () => {
      gsap.fromTo(
        ".stat-card",
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        }
      );
    },
    {
      scope: containerRef,
    }
  );
}
