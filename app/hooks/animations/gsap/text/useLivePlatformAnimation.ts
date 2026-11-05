"use client";

import { RefObject, useEffect } from "react";

import { gsap } from "gsap";

import { livePlatforms } from "../../../../components/ui/live/livePlatform/data";

export function useLivePlatformAnimation(platformNameRef: RefObject<HTMLSpanElement | null>) {
  useEffect(() => {
    const platformElement = platformNameRef.current;

    if (!platformElement) return;

    let platformIndex = 0;

    // =====================================================
    // INITIAL PLATFORM
    // =====================================================

    platformElement.textContent = livePlatforms[platformIndex];

    // =====================================================
    // TIMELINE
    // =====================================================

    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 5,
    });

    // =====================================================
    // EXIT
    // =====================================================

    timeline.to(platformElement, {
      y: -20,
      opacity: 0,
      filter: "blur(8px)",

      duration: 0.45,

      ease: "power3.in",

      onComplete: () => {
        platformIndex = (platformIndex + 1) % livePlatforms.length;

        platformElement.textContent = livePlatforms[platformIndex];
      },
    });

    // =====================================================
    // ENTER
    // =====================================================

    timeline.fromTo(
      platformElement,
      {
        y: 20,
        opacity: 0,
        filter: "blur(8px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",

        duration: 0.6,

        ease: "power4.out",
      }
    );

    // =====================================================
    // CLEANUP
    // =====================================================

    return () => {
      timeline.kill();
    };
  }, [platformNameRef]);
}
