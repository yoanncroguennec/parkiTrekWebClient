// useCarouselMouse : inclinaison du carrousel en fonction de la position de la souris.
"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
// CONSTANTS
import {
  INITIAL_ROTATION,
  MOUSE_DURATION,
  MOUSE_ROTATION_X,
  MOUSE_ROTATION_Z,
} from "../constants/carousel.constants";

export function useCarouselMouse(
  wheelRef: RefObject<HTMLDivElement | null>,
  initialRotationX = INITIAL_ROTATION,
  rotationXIntensity = MOUSE_ROTATION_X,
  rotationZIntensity = MOUSE_ROTATION_Z,
): void {
  useEffect(() => {
    const wheel = wheelRef.current;

    if (!wheel) return;

    const handleMouseMove = (event: MouseEvent) => {
      const normalizedX = (event.clientX / window.innerWidth - 0.5) * 2;
      const normalizedY = (event.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(wheel, {
        rotationX: initialRotationX + normalizedY * rotationXIntensity,
        rotationZ: normalizedX * rotationZIntensity,
        duration: MOUSE_DURATION,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [wheelRef, initialRotationX, rotationXIntensity, rotationZIntensity]);
}
