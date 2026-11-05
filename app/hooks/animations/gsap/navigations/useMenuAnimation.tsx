"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/app/utils/libs/gsap";

export function useMenuAnimation(
  rootRef: RefObject<HTMLDivElement | null>,
  open: boolean,
) {
  useGSAP(() => {
    if (!rootRef.current) return;

    if (open) {
      gsap.set(rootRef.current, {
        pointerEvents: "auto",
      });

      gsap.to(rootRef.current, {
        clipPath: "circle(150% at 100% 0%)",
        duration: 1,
        ease: "power4.inOut",
      });

      gsap.fromTo(
        ".menu-link",
        {
          y: 120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          delay: 0.3,
          duration: 1,
          ease: "power4.out",
        },
      );
    } else {
      gsap.to(rootRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      });

      gsap.set(rootRef.current, {
        pointerEvents: "none",
        delay: 0.8,
      });
    }
  }, [open]);
}
