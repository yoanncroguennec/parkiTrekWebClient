import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";

export function useCategoryChipAnimation(containerRef: RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const chips = gsap.utils.toArray<HTMLElement>("[data-category-chip]", container);

    if (!chips.length) return;

    const context = gsap.context(() => {
      gsap.set(chips, {
        autoAlpha: 0,
      });

      const timeline = gsap.timeline({
        repeat: -1,
      });

      chips.forEach((chip) => {
        timeline
          .to(chip, {
            autoAlpha: 1,
            duration: 0.7,
            ease: "power2.out",
          })
          .to(chip, {
            autoAlpha: 0,
            duration: 0.7,
            ease: "power2.in",
            delay: 10,
          });
      });
    }, container);

    return () => context.revert();
  }, [containerRef]);
}
