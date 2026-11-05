"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useFooterScroll() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const whitePanelRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    const whitePanel = whitePanelRef.current;

    if (!footer || !whitePanel) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        whitePanel,
        {
          y: "100vh",
        },
        {
          y: "0vh",
          ease: "none",
          scrollTrigger: {
            trigger: footer,
            start: "35vh top",
            end: "85vh top",
            scrub: 1.5,
          },
        },
      );
    }, footer);

    return () => {
      ctx.revert();
    };
  }, []);

  return {
    footerRef,
    whitePanelRef,
  };
}
