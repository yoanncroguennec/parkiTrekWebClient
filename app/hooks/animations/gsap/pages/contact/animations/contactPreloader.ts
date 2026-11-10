import gsap from "gsap";

export function contactPreloader(
  timeline: gsap.core.Timeline,
  overlay: HTMLDivElement,
  bar: HTMLDivElement
) {
  timeline.to(bar, {
    scaleX: 1,
    duration: 1.5,
    ease: "glide",

    onComplete: () => {
      gsap.set(bar, {
        transformOrigin: "right",
      });
    },
  });

  timeline.to(bar, {
    scaleX: 0,
    duration: 1.25,
    ease: "hop",
  });

  timeline.to(
    overlay,
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      ease: "hop",
    },
    "<0.75"
  );
}
