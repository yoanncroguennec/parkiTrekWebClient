"use client";

import { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface UseBackgroundImageScrollProps {
  rootRef: RefObject<HTMLDivElement | null>;
  imageRef: RefObject<HTMLImageElement | null>;
  overlayRef: RefObject<HTMLDivElement | null>;
  gradientRef: RefObject<HTMLDivElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
}

export function useBackgroundImageScroll({
  rootRef,
  imageRef,
  overlayRef,
  gradientRef,
  contentRef,
}: UseBackgroundImageScrollProps) {
  useGSAP(
    () => {
      if (!rootRef.current) return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "+=1400",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        // IMAGE
        tl.to(
          imageRef.current,
          {
            yPercent: 12,
            scale: 1.12,
            ease: "none",
          },
          0
        );

        // OVERLAY
        tl.to(
          overlayRef.current,
          {
            opacity: 0.9,
            ease: "none",
          },
          0
        );

        // GRADIENT BAS
        tl.to(
          gradientRef.current,
          {
            yPercent: -18,
            scaleY: 1.15,
            ease: "none",
          },
          0
        );

        // CONTENT
        tl.to(
          contentRef.current,
          {
            y: -90,
            ease: "none",
          },
          0
        );

        // LÉGER EFFET DE PROFONDEUR
        tl.to(
          contentRef.current,
          {
            opacity: 0.82,
            scale: 0.97,
            ease: "none",
          },
          0
        );
      }, rootRef);

      return () => ctx.revert();
    },
    {
      scope: rootRef,
    }
  );
}
