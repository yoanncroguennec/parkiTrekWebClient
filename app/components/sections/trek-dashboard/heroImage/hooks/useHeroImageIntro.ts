"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";

interface UseHeroImageIntroAnimationProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

export function useHeroImageIntroAnimation({ containerRef }: UseHeroImageIntroAnimationProps) {
  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        container,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.4,
          ease: "power2.out",
        }
      );
    }, container);

    return () => {
      context.revert();
    };
  }, [containerRef]);
}
