"use client";

import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface UseFadeInUpProps {
  ref: RefObject<Element | null>;
  y?: number;
  duration?: number;
  delay?: number;
  enabled?: boolean;
}

export function useFadeInUp({
  ref,
  y = 50,
  duration = 1,
  delay = 0,
  enabled = true,
}: UseFadeInUpProps) {
  useGSAP(() => {
    if (!enabled || !ref.current) return;

    gsap.from(ref.current, {
      y,
      opacity: 0,
      duration,
      delay,
      ease: "power3.out",
    });
  });
}
