"use client";

import { RefObject, useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseTextRevealProps {
  titleRef: RefObject<HTMLHeadingElement | null>;

  start?: string;
  end?: string;

  stagger?: number;

  y?: number;
  scale?: number;
  rotateX?: number;
  rotation?: number;
  blur?: number;

  enabled?: boolean;
}

export default function useTextReveal({
  titleRef,

  start = "top 85%",
  end = "top 35%",

  stagger = 0.06,

  y = 60,
  scale = 0.65,
  rotateX = -45,
  rotation = -6,
  blur = 8,

  enabled = true,
}: UseTextRevealProps) {
  useLayoutEffect(() => {
    if (!enabled) return;

    const title = titleRef.current;

    if (!title) return;

    const letters = title.querySelectorAll<HTMLElement>(".magnetic-letter");

    if (!letters.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        letters,
        {
          opacity: 0,
          y,
          scale,
          rotateX,
          rotation,
          filter: `blur(${blur}px)`,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          rotation: 0,
          filter: "blur(0px)",

          ease: "none",

          stagger: {
            each: stagger,
          },

          scrollTrigger: {
            trigger: title,

            start,
            end,

            scrub: 1,

            invalidateOnRefresh: true,
          },
        }
      );
    }, title);

    return () => {
      ctx.revert();
    };
  }, [titleRef, start, end, stagger, y, scale, rotateX, rotation, blur, enabled]);
}
