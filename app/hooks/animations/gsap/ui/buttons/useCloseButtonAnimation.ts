"use client";

import type { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface UseCloseButtonAnimationProps {
  closeRef: RefObject<HTMLButtonElement | null>;
}

export function useCloseButtonAnimation({ closeRef }: UseCloseButtonAnimationProps) {
  useGSAP(
    () => {
      const button = closeRef.current;

      if (!button) return;

      const handleMouseEnter = () => {
        gsap.to(button, {
          scale: 1.15,
          rotation: 90,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      const handleMouseDown = () => {
        gsap.to(button, {
          scale: 0.9,
          rotation: 180,
          duration: 0.15,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const handleMouseUp = () => {
        gsap.to(button, {
          scale: 1.15,
          rotation: 90,
          duration: 0.25,
          ease: "back.out(2)",
          overwrite: "auto",
        });
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
      button.addEventListener("mousedown", handleMouseDown);
      button.addEventListener("mouseup", handleMouseUp);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
        button.removeEventListener("mousedown", handleMouseDown);
        button.removeEventListener("mouseup", handleMouseUp);
      };
    },
    { scope: closeRef }
  );
}
