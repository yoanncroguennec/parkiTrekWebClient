// Anime le curseur lors des clics (compression, rebond...)
"use client";

import type { RefObject } from "react";
import { useEffect } from "react";
import gsap from "gsap";

interface UseCursorClickProps {
  dotRef: RefObject<HTMLDivElement | null>;
  circleRef: RefObject<HTMLDivElement | null>;
}

export default function useCursorClick({ dotRef, circleRef }: UseCursorClickProps) {
  useEffect(() => {
    const dot = dotRef.current;
    const circle = circleRef.current;

    if (!dot || !circle) {
      return;
    }

    const handlePointerDown = () => {
      gsap.to(circle, {
        scale: 0.7,
        duration: 0.12,
        overwrite: true,
      });

      gsap.to(dot, {
        scale: 1.5,
        duration: 0.12,
        overwrite: true,
      });
    };

    const handlePointerUp = () => {
      gsap.to(circle, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });

      gsap.to(dot, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("pointerdown", handlePointerDown);

    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);

      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [dotRef, circleRef]);
}
