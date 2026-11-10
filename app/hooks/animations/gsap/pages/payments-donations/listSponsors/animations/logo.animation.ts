import type { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createLogoAnimation(logosRef: RefObject<(HTMLImageElement | null)[]>) {
  const animations: gsap.core.Tween[] = [];

  logosRef.current.forEach((logo) => {
    if (!logo) return;

    const tween = gsap.fromTo(
      logo,
      {
        scale: 0.3,
        rotateY: 180,
        rotateZ: -30,
        filter: "blur(12px)",
        opacity: 0,
      },
      {
        scale: 1,
        rotateY: 0,
        rotateZ: 0,
        filter: "blur(0px)",
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: logo,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    animations.push(tween);
  });

  return () => {
    animations.forEach((animation) => {
      animation.scrollTrigger?.kill();
      animation.kill();
    });
  };
}
