"use client";

import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface UseFadeInUpSequenceProps {
  refs: RefObject<Element | null>[];
  delay?: number;
  stagger?: number;
  enabled?: boolean;
}

export function useFadeInUpSequence({
  refs,
  delay = 0,
  stagger = 1,
  enabled = true,
}: UseFadeInUpSequenceProps) {
  useGSAP(() => {
    if (!enabled) return;

    const elements = refs
      .map((ref) => ref.current)
      .filter((element): element is Element => element !== null);

    if (!elements.length) return;

    gsap.from(elements, {
      y: (index) => (index === 0 ? 50 : 30),
      opacity: 0,
      duration: (index) => (index === 0 ? 1 : 0.8),
      delay,
      stagger,
      ease: "power3.out",
    });
  });
}
