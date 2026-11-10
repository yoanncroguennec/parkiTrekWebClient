import type { RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export function createTitleAnimation(titlesRef: RefObject<(HTMLElement | null)[]>) {
  const splits: SplitType[] = [];
  const animations: gsap.core.Tween[] = [];

  titlesRef.current.forEach((title) => {
    if (!title) return;

    const split = new SplitType(title, {
      types: "chars",
    });

    splits.push(split);

    gsap.set(split.chars, {
      fontWeight: 200,
      opacity: 0.3,
      scale: 0.85,
      y: 15,
      transformOrigin: "50% 50%",
    });

    const tween = gsap.to(split.chars, {
      fontWeight: 900,
      opacity: 1,
      scale: 1,
      y: 0,
      stagger: {
        each: 0.04,
        from: "start",
      },
      ease: "power2.out",
      scrollTrigger: {
        trigger: title,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });

    animations.push(tween);
  });

  return () => {
    animations.forEach((animation) => {
      animation.scrollTrigger?.kill();
      animation.kill();
    });

    splits.forEach((split) => split.revert());
  };
}
