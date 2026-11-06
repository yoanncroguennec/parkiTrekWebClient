// Affiche un texte contextuel dans le curseur ("View", "Open"...)
"use client";

import type { RefObject } from "react";
import { useEffect } from "react";
import gsap from "gsap";

interface UseCursorTextProps {
  textRef: RefObject<HTMLSpanElement | null>;
  selector?: string;
  attribute?: string;
  duration?: number;
}

export default function useCursorText({
  textRef,
  selector = "[data-cursor-text]",
  attribute = "data-cursor-text",
  duration = 0.2,
}: UseCursorTextProps) {
  useEffect(() => {
    const text = textRef.current;

    if (!text) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>(selector);

    const handleMouseEnter = (event: MouseEvent) => {
      const element = event.currentTarget as HTMLElement;

      text.textContent = element.getAttribute(attribute) ?? "";

      gsap.to(text, {
        autoAlpha: 1,
        scale: 1,
        duration,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(text, {
        autoAlpha: 0,
        scale: 0.7,
        duration,
        ease: "power3.out",
        overwrite: true,
        onComplete: () => {
          text.textContent = "";
        },
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

      gsap.killTweensOf(text);

      text.textContent = "";
    };
  }, [textRef, selector, attribute, duration]);
}
