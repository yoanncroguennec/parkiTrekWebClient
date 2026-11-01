"use client";

import type { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface UseProgressRingAnimationProps {
  ringRef: RefObject<HTMLDivElement | null>;
  value: number;
  onProgressChange: (value: number) => void;
}

export function useProgressRingAnimation({
  ringRef,
  value,
  onProgressChange,
}: UseProgressRingAnimationProps) {
  useGSAP(
    () => {
      const progress = {
        value: 0,
      };

      gsap.fromTo(
        progress,
        {
          value: 0,
        },
        {
          value,
          duration: 2,
          ease: "power3.out",
          onUpdate: () => {
            onProgressChange(Math.round(progress.value));
          },
        }
      );

      gsap.fromTo(
        ringRef.current,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
        }
      );
    },
    {
      dependencies: [value],
    }
  );
}
