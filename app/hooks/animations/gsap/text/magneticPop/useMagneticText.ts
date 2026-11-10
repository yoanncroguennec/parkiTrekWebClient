"use client";

import { RefObject, useLayoutEffect } from "react";

import gsap from "gsap";

interface UseMagneticTextProps {
  titleRef: RefObject<HTMLHeadingElement | null>;

  strength?: number;
  radius?: number;

  scaleAmount?: number;
  rotationAmount?: number;

  enabled?: boolean;
}

export default function useMagneticText({
  titleRef,

  strength = 0.3,
  radius = 160,

  scaleAmount = 0.04,
  rotationAmount = 0.025,

  enabled = true,
}: UseMagneticTextProps) {
  useLayoutEffect(() => {
    if (!enabled) return;

    const title = titleRef.current;

    if (!title) return;

    const letters = title.querySelectorAll<HTMLElement>(".magnetic-letter");

    if (!letters.length) return;

    const quickX: Array<ReturnType<typeof gsap.quickTo>> = [];

    const quickY: Array<ReturnType<typeof gsap.quickTo>> = [];

    const quickRotation: Array<ReturnType<typeof gsap.quickTo>> = [];

    const quickScale: Array<ReturnType<typeof gsap.quickTo>> = [];

    letters.forEach((letter) => {
      quickX.push(
        gsap.quickTo(letter, "x", {
          duration: 0.45,
          ease: "power3.out",
        })
      );

      quickY.push(
        gsap.quickTo(letter, "y", {
          duration: 0.45,
          ease: "power3.out",
        })
      );

      quickRotation.push(
        gsap.quickTo(letter, "rotation", {
          duration: 0.45,
          ease: "power3.out",
        })
      );

      quickScale.push(
        gsap.quickTo(letter, "scale", {
          duration: 0.45,
          ease: "power3.out",
        })
      );
    });

    const handleMouseMove = (event: MouseEvent) => {
      letters.forEach((letter, index) => {
        const rect = letter.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;

        const centerY = rect.top + rect.height / 2;

        const dx = event.clientX - centerX;

        const dy = event.clientY - centerY;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) {
          const intensity = 1 - distance / radius;

          const magneticStrength = intensity * strength;

          quickX[index](dx * magneticStrength);

          quickY[index](dy * magneticStrength);

          quickRotation[index](dx * intensity * rotationAmount);

          quickScale[index](1 + intensity * scaleAmount);
        } else {
          quickX[index](0);
          quickY[index](0);
          quickRotation[index](0);
          quickScale[index](1);
        }
      });
    };

    const handleMouseLeave = () => {
      letters.forEach((_, index) => {
        quickX[index](0);
        quickY[index](0);
        quickRotation[index](0);
        quickScale[index](1);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    title.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      title.removeEventListener("mouseleave", handleMouseLeave);

      letters.forEach((letter) => {
        gsap.killTweensOf(letter);
      });
    };
  }, [titleRef, strength, radius, scaleAmount, rotationAmount, enabled]);
}
