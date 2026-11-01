"use client";

import { RefObject } from "react";
import gsap from "@/app/utils/libs/gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  contentRef: RefObject<HTMLDivElement | null>;
};

export function useMapHeaderContentAnimation({ contentRef }: Props) {
  useGSAP(
    () => {
      const q = gsap.utils.selector(contentRef);

      const tl = gsap.timeline();

      // =========================
      // TIMELINE D'ENTRÉE
      // =========================

      tl.from(q(".hero-content"), {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      tl.from(
        q(".hero-title"),
        {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.8"
      );

      return () => {
        tl.kill();
      };
    },
    {
      scope: contentRef,
    }
  );
}
