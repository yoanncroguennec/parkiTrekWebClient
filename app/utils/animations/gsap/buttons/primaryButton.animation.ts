// GOOD
import gsap from "gsap";

export function animatePrimaryButtonHover(target: HTMLElement | null) {
  if (!target) return;

  gsap.to(target, {
    scale: 1.05,
    y: -3,
    duration: 0.3,
    ease: "power2.out",
    overwrite: "auto",
  });
}

export function animatePrimaryButtonLeave(target: HTMLElement | null) {
  if (!target) return;

  gsap.to(target, {
    scale: 1,
    y: 0,
    duration: 0.3,
    ease: "power2.out",
    overwrite: "auto",
  });
}
