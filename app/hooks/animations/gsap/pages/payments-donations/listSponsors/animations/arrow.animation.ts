import type { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createArrowAnimation(arrowsRef: RefObject<(HTMLDivElement | null)[]>) {
  const animations: gsap.core.Tween[] = [];

  arrowsRef.current.forEach((arrow) => {
    if (!arrow) return;

    const tween = gsap.fromTo(
      arrow,
      {
        rotate: -180,
        scale: 0,
        opacity: 0,
      },
      {
        rotate: 0,
        scale: 1,
        opacity: 1,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: arrow,
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
