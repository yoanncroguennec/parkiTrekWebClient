"use client";

import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface UseSlideInRotateProps {
  ref: RefObject<HTMLElement | null>;
  enabled?: boolean;
  endX?: number;
  endY?: number;
  duration?: number;
  fromRotation?: number;
  toRotation?: number;
}

export function useSlideInRotate({
  ref,
  enabled = true,
  endX = 200,
  endY = 0,
  duration = 2.5,
  fromRotation = -180,
  toRotation = 0,
}: UseSlideInRotateProps) {
  useGSAP(
    () => {
      if (!enabled) return;

      const element = ref.current;

      if (!element) return;

      gsap.fromTo(
        element,
        {
          x: window.innerWidth + element.offsetWidth,
          y: 0,
          opacity: 0,
          rotation: fromRotation,
        },
        {
          x: endX,
          y: endY,
          opacity: 1,
          rotation: toRotation,
          duration,
          ease: "power3.out",
        }
      );
    },
    {
      dependencies: [enabled],
    }
  );
}
