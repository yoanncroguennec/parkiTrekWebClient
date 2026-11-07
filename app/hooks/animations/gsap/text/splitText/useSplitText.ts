"use client";

import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

interface UseSplitTextProps {
  ref: RefObject<HTMLElement | null>;
  enabled?: boolean;
}

export function useSplitText({ ref, enabled = true }: UseSplitTextProps) {
  useGSAP(
    () => {
      if (!enabled) return;

      const element = ref.current;

      if (!element) return;

      const split = new SplitType(element, {
        types: "chars",
      });

      gsap.from(split.chars, {
        yPercent: 120,
        opacity: 0,
        stagger: 0.03,
        duration: 1.4,
        ease: "power4.out",
      });

      return () => {
        split.revert();
      };
    },
    {
      dependencies: [enabled],
    },
  );
}
