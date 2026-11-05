"use client";

import type { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface TimelineAnimationRefs {
  titleRef: RefObject<HTMLElement | null>;
  lineRef: RefObject<HTMLDivElement | null>;
  itemRefs: RefObject<HTMLDivElement | null>[];
}

interface UseTimelineAnimationProps {
  refs: TimelineAnimationRefs;
}

export function useTimelineAnimation({ refs }: UseTimelineAnimationProps) {
  const { titleRef, lineRef, itemRefs } = refs;

  useGSAP(() => {
    const title = titleRef.current;
    const line = lineRef.current;

    const items = itemRefs
      .map((ref) => ref.current)
      .filter((element): element is HTMLDivElement => element !== null);

    if (!title || !line) {
      return;
    }

    const timeline = gsap.timeline();

    timeline.from(title, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    timeline.fromTo(
      line,
      {
        scaleY: 0,
        transformOrigin: "top center",
      },
      {
        scaleY: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.3"
    );

    if (items.length) {
      timeline.from(
        items,
        {
          x: -40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.7"
      );
    }
  });
}
