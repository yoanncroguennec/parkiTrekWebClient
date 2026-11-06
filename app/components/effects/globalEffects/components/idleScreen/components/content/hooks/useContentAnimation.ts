"use client";

import type { RefObject } from "react";
import { useEffect } from "react";
import gsap from "gsap";

// Constants
const floatY = 15;
const rotateX = 3;
const rotateY = 4;
const duration = 10;

const pulseScale = 1.03;
const pulseOpacity = 0.7;
const pulseDuration = 4;

interface Props {
  containerRef: RefObject<HTMLDivElement | null>;
  parkRef: RefObject<HTMLElement | null>;
  trekRef: RefObject<HTMLElement | null>;
}

export default function useContentAnimation({
  containerRef,
  parkRef,
  trekRef,
}: Props) {
  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const context = gsap.context(() => {
      // Animation du conteneur
      gsap.to(container, {
        y: floatY,
        rotateX: rotateX,
        rotateY: rotateY,
        duration: duration / 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Animation des titres
      [parkRef, trekRef].forEach((ref) => {
        const element = ref.current;

        if (!element) {
          return;
        }

        gsap.fromTo(
          element,
          {
            scale: 1,
            opacity: pulseOpacity,
          },
          {
            scale: pulseScale,
            opacity: 1,
            duration: pulseDuration / 2,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
          },
        );
      });
    }, container);

    return () => {
      context.revert();
    };
  }, [containerRef, parkRef, trekRef]);
}
