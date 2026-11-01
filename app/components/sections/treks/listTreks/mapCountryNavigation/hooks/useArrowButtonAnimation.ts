"use client";

import type { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Props {
  buttonRef: RefObject<HTMLButtonElement | null>;
  direction: "left" | "right";
}

export function useArrowButtonAnimation({ buttonRef, direction }: Props) {
  useGSAP(
    () => {
      const button = buttonRef.current;

      if (!button) {
        return;
      }

      const tween = gsap.to(button, {
        x: direction === "left" ? -12 : 12,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      return () => {
        tween.kill();
      };
    },
    {
      scope: buttonRef,
      dependencies: [direction],
    }
  );

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(event.currentTarget, {
      scale: 1.15,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(event.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
  };
}
