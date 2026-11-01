"use client";

import type { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface UseJournalButtonAnimationProps {
  buttonRef: RefObject<HTMLButtonElement | null>;
}

export function useJournalButtonAnimation({ buttonRef }: UseJournalButtonAnimationProps) {
  useGSAP(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const button = event.currentTarget as HTMLButtonElement;

      const rect = button.getBoundingClientRect();

      const x = event.clientX - rect.left - rect.width / 2;

      const y = event.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = (event: MouseEvent) => {
      const button = event.currentTarget as HTMLButtonElement;

      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1,0.4)",
      });
    };

    const button = buttonRef.current;

    if (!button) return;

    button.addEventListener("mousemove", handleMouseMove);

    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);

      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  });
}
