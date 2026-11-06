// Effet de fusion (mix-blend-mode)
// Modifie le mix-blend-mode du curseur selon les éléments survolés
"use client";

import { RefObject, useEffect } from "react";

interface UseCursorBlendProps {
  circleRef: RefObject<HTMLDivElement | null>;
  selector?: string;
  blendMode?: CSSStyleDeclaration["mixBlendMode"];
}

export default function useCursorBlend({
  circleRef,
  selector = "[data-cursor-blend]",
  blendMode = "difference",
}: UseCursorBlendProps) {
  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const elements = document.querySelectorAll<HTMLElement>(selector);

    const enter = () => {
      circle.style.mixBlendMode = blendMode;
    };

    const leave = () => {
      circle.style.mixBlendMode = "normal";
    };

    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [circleRef, selector, blendMode]);
}
