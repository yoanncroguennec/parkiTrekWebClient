"use client";

import type { RefObject } from "react";
import { useEffect } from "react";
import gsap from "gsap";

import { TIME_CONFIG } from "../constants/Time.constants";

interface Props {
  containerRef: RefObject<HTMLDivElement | null>;
  pulseRefs: RefObject<HTMLDivElement[]>;
}

export default function useTimeAnimation({ containerRef, pulseRefs }: Props) {
  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const context = gsap.context(() => {
      // Flottement
      gsap.to(container, {
        y: TIME_CONFIG.animation.floatY,
        duration: TIME_CONFIG.animation.duration / 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Pulsation
      pulseRefs.current.forEach((element) => {
        if (!element) {
          return;
        }

        gsap.to(element, {
          keyframes: {
            opacity: [
              TIME_CONFIG.pulse.minOpacity,
              TIME_CONFIG.pulse.maxOpacity,
              TIME_CONFIG.pulse.minOpacity,
            ],
          },
          duration: TIME_CONFIG.pulse.duration,
          ease: "sine.inOut",
          repeat: -1,
        });
      });
    }, container);

    return () => {
      context.revert();
    };
  }, [containerRef, pulseRefs]);
}
