"use client";

import type { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface HeaderAnimationRefs {
  headerRef: RefObject<HTMLDivElement | null>;
  imageRef: RefObject<HTMLImageElement | null>;
  subtitleRef: RefObject<HTMLElement | null>;
  titleRef: RefObject<HTMLElement | null>;
  badgeRef: RefObject<HTMLElement | null>;
  closeRef: RefObject<HTMLButtonElement | null>;
}

interface UseHeaderAnimationProps {
  refs: HeaderAnimationRefs;
  departmentName?: string;
}

export function useHeaderAnimation({ refs, departmentName }: UseHeaderAnimationProps) {
  const { headerRef, imageRef, subtitleRef, titleRef, badgeRef, closeRef } = refs;

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline.fromTo(
        imageRef.current,
        {
          scale: 1.15,
        },
        {
          scale: 1,
          duration: 2,
          ease: "power3.out",
        }
      );

      timeline.from(
        subtitleRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        "-=1.5"
      );

      timeline.from(
        titleRef.current,
        {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.6"
      );

      timeline.from(
        badgeRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      );

      timeline.from(
        closeRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(2)",
        },
        "-=0.3"
      );

      gsap.to(imageRef.current, {
        scale: 1.03,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    {
      scope: headerRef,
      dependencies: [departmentName],
    }
  );
}
