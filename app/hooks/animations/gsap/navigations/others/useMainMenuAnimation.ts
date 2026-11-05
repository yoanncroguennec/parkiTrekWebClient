
"use client";

import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


export const MAIN_MENU_THUMBNAIL = {
  width: 270,
  height: 350,
};

interface MenuModal {
  active: boolean;
  index: number;
}

interface UseMainMenuAnimationProps {
  containerRef: RefObject<HTMLDivElement | null>;
  thumbnailRef: RefObject<HTMLDivElement | null>;
  sliderRef: RefObject<HTMLDivElement | null>;
  isDesktop: boolean;
  modal: MenuModal;
  itemCount: number;
}

export function useMainMenuAnimation({
  containerRef,
  thumbnailRef,
  sliderRef,
  isDesktop,
  modal,
  itemCount,
}: UseMainMenuAnimationProps) {

  // =========================================
  // CURSOR FOLLOW
  // =========================================

  useGSAP(
    () => {
      const container = containerRef.current;
      const thumbnail = thumbnailRef.current;
      const slider = sliderRef.current;

      if (!isDesktop || !container || !thumbnail || !slider) {
        return;
      }

      gsap.set(thumbnail, {
        scale: 0,
        xPercent: -50,
        yPercent: -50,
        force3D: true,
      });

      gsap.set(slider, { y: 0 });

      const xTo = gsap.quickTo(thumbnail, "x", {
        duration: 0.5,
        ease: "power3.out",
      });

      const yTo = gsap.quickTo(thumbnail, "y", {
        duration: 0.5,
        ease: "power3.out",
      });

      let hasPosition = false;

      const handleMouseMove = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (!hasPosition) {
          gsap.set(thumbnail, { x, y });
          hasPosition = true;
        } else {
          xTo(x);
          yTo(y);
        }
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    {
      dependencies: [isDesktop],
      scope: containerRef,
      revertOnUpdate: true,
    }
  );

  // =========================================
  // THUMBNAIL + SLIDER
  // =========================================

  useGSAP(
    () => {
      const thumbnail = thumbnailRef.current;
      const slider = sliderRef.current;

      if (!isDesktop || !thumbnail || !slider) return;

      if (modal.active) {
        gsap.to(thumbnail, {
          scale: 1,
          opacity: 1,
          visibility: "visible",
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(slider, {
          y: -modal.index * MAIN_MENU_THUMBNAIL.height,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      } else {
        gsap.to(thumbnail, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          overwrite: "auto",
          onComplete: () => {
            gsap.set(thumbnail, {
              visibility: "hidden",
            });
          },
        });
      }
    },
    {
      dependencies: [
        isDesktop,
        modal.active,
        modal.index,
        itemCount,
      ],
      scope: containerRef,
      revertOnUpdate: true,
    }
  );
}
