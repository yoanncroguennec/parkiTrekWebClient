"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";

interface UseSpotlightProps {
  containerRef: RefObject<HTMLElement | null>;
  spotlightRef: RefObject<HTMLDivElement | null>;
}

export function useSpotlight({ containerRef, spotlightRef }: UseSpotlightProps) {
  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const spotlight = spotlightRef.current;

      if (!spotlight) {
        return;
      }

      const rect = container.getBoundingClientRect();

      gsap.to(spotlight, {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef, spotlightRef]);
}
