// useCarouselScroll : accélération/inversion de la rotation lors du défilement.
"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { DEFAULT_SPEED, SCROLL_SPEED } from "../constants/carousel.constants";

export interface RotationState {
  speed: number;
  currentRotation: number;
}

export function useCarouselScroll(
  rotationState: RefObject<RotationState>,
  scrollSpeed = SCROLL_SPEED,
  defaultSpeed = DEFAULT_SPEED,
): void {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!rotationState.current) return;

      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      lastScrollY = currentScrollY;

      if (delta === 0) return;

      gsap.to(rotationState.current, {
        speed: delta > 0 ? scrollSpeed : -scrollSpeed,
        duration: 0.25,
        overwrite: true,
      });

      gsap.to(rotationState.current, {
        speed: defaultSpeed,
        duration: 1,
        delay: 0.15,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [rotationState, scrollSpeed, defaultSpeed]);
}
