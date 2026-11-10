"use client";

import { RefObject, useLayoutEffect } from "react";

import gsap from "gsap";

interface UseTextTiltProps {
  titleRef: RefObject<HTMLHeadingElement | null>;

  strength?: number;

  enabled?: boolean;
}

export default function useTextTilt({
  titleRef,

  strength = 4,

  enabled = true,
}: UseTextTiltProps) {
  useLayoutEffect(() => {
    if (!enabled) return;

    const title = titleRef.current;

    if (!title) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = title.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;

      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(title, {
        rotateY: x * strength,
        rotateX: -y * strength,

        duration: 0.8,

        ease: "power3.out",

        overwrite: true,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(title, {
        rotateX: 0,
        rotateY: 0,

        duration: 1,

        ease: "elastic.out(1, 0.4)",

        overwrite: true,
      });
    };

    title.addEventListener("mousemove", handleMouseMove);

    title.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      title.removeEventListener("mousemove", handleMouseMove);

      title.removeEventListener("mouseleave", handleMouseLeave);

      gsap.killTweensOf(title);
    };
  }, [titleRef, strength, enabled]);
}
