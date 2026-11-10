import type { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createInfoAnimation(infosRef: RefObject<(HTMLDivElement | null)[]>) {
  const animations: gsap.core.Tween[] = [];

  infosRef.current.forEach((info) => {
    if (!info) return;

    const tween = gsap.fromTo(
      info,
      {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
        scale: 0.85,
        rotateX: -40,
        transformPerspective: 1000,
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        rotateX: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: info,
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
