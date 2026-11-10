"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function useIdleAnimation(idle: boolean, initialVisible = false) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const grainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    const halo = haloRef.current;
    const grain = grainRef.current;

    if (!overlay || !halo || !grain) {
      return;
    }

    gsap.killTweensOf([overlay, halo, grain]);

    // --------------------------------------------------
    // État initial
    // --------------------------------------------------

    if (!initialVisible && !idle) {
      gsap.set(overlay, {
        autoAlpha: 0,
      });

      gsap.set(halo, {
        autoAlpha: 0,
        scale: 1,
      });

      gsap.set(grain, {
        autoAlpha: 0,
      });

      return;
    }

    // --------------------------------------------------
    // IDLE → afficher l'écran
    // --------------------------------------------------

    if (idle) {
      gsap.set(overlay, {
        autoAlpha: 0,
      });

      gsap.set(halo, {
        scale: 1,
        autoAlpha: 0.1,
      });

      gsap.set(grain, {
        autoAlpha: 0.02,
      });

      gsap.to(overlay, {
        autoAlpha: 1,
        duration: 1.2,
        ease: "power2.inOut",
      });

      gsap.to(halo, {
        scale: 1.4,
        autoAlpha: 0.35,
        duration: 6,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(grain, {
        autoAlpha: 0.06,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      return;
    }

    // --------------------------------------------------
    // ACTIVITÉ → masquer l'écran
    // --------------------------------------------------

    gsap.to(overlay, {
      autoAlpha: 0,
      duration: 0.6,
      ease: "power2.inOut",
    });

    gsap.to(halo, {
      autoAlpha: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(grain, {
      autoAlpha: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  }, [idle, initialVisible]);

  return {
    overlayRef,
    haloRef,
    grainRef,
  };
}
