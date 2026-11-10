"use client";

import type { RefObject } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface UseCounterAnimationProps {
  ref: RefObject<HTMLSpanElement | null>;
  end: number;
  duration?: number;
  enabled?: boolean;
}

export function useCounterAnimation({
  ref,
  end,
  duration = 2.5,
  enabled = true,
}: UseCounterAnimationProps) {
  useGSAP(
    () => {
      if (!enabled) return;

      const element = ref.current;

      if (!element) return;

      gsap.fromTo(
        element,
        {
          innerText: 0,
        },
        {
          innerText: end,
          duration,
          snap: {
            innerText: 1,
          },
          ease: "power2.out",
        }
      );
    },
    {
      dependencies: [enabled],
    }
  );
}
