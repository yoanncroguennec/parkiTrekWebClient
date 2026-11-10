"use client";

import { RefObject, useLayoutEffect } from "react";

import gsap from "gsap";

interface UseAnimatedBackgroundProps {
  backgroundRef: RefObject<HTMLDivElement | null>;
}

export default function useAnimatedBackground({ backgroundRef }: UseAnimatedBackgroundProps) {
  useLayoutEffect(() => {
    const background = backgroundRef.current;

    if (!background) return;

    const ctx = gsap.context(() => {
      gsap.to(".background-layer-2", {
        opacity: 1,

        duration: 8,

        ease: "power2.inOut",

        yoyo: true,

        repeat: -1,
      });
    }, background);

    return () => {
      ctx.revert();
    };
  }, [backgroundRef]);
}
