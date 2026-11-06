// Attire les éléments vers le curseur (effet magnétique)
"use client";

import { useEffect } from "react";
import gsap from "gsap";

interface UseMagneticCursorProps {
  selector?: string;
  strength?: number;
  duration?: number;
}

export default function useMagneticCursor({
  selector = "[data-magnetic]",
  strength = 0.35,
  duration = 0.3,
}: UseMagneticCursorProps = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    const handleMouseMove = (event: MouseEvent) => {
      const element = event.currentTarget as HTMLElement;

      const rect = element.getBoundingClientRect();

      const x = event.clientX - rect.left - rect.width / 2;

      const y = event.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const handleMouseLeave = (event: MouseEvent) => {
      const element = event.currentTarget as HTMLElement;

      gsap.to(element, {
        x: 0,
        y: 0,
        duration,
        ease: "power3.out",
        overwrite: true,
      });
    };

    elements.forEach((element) => {
      element.addEventListener("mousemove", handleMouseMove);

      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mousemove", handleMouseMove);

        element.removeEventListener("mouseleave", handleMouseLeave);

        gsap.killTweensOf(element);
      });
    };
  }, [selector, strength, duration]);
}
