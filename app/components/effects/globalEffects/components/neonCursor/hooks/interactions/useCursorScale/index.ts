// Agrandit le curseur au survol d'éléments interactifs
"use client";

import type { RefObject } from "react";
import { useEffect } from "react";
import gsap from "gsap";

interface UseCursorScaleProps {
  circleRef: RefObject<HTMLDivElement | null>;
  selector?: string;
  scale?: number;
  duration?: number;
}

export default function useCursorScale({
  circleRef,
  selector = "a, button, [data-cursor-scale]",
  scale = 2,
  duration = 0.25,
}: UseCursorScaleProps) {
  useEffect(() => {
    const circle = circleRef.current;

    if (!circle) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>(selector);

    const handleMouseEnter = () => {
      gsap.to(circle, {
        scale,
        duration,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(circle, {
        scale: 1,
        duration,
        ease: "power3.out",
        overwrite: true,
      });
    };

    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);

      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);

        element.removeEventListener("mouseleave", handleMouseLeave);
      });

      gsap.killTweensOf(circle);
    };
  }, [circleRef, selector, scale, duration]);
}
