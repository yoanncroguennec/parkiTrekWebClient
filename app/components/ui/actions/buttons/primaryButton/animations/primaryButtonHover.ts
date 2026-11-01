// GOOD
import gsap from "gsap";

export function animatePrimaryButtonHover(target: EventTarget | null) {
  gsap.to(target, {
    scale: 1.05,
    y: -3,
    duration: 0.3,
    ease: "power2.out",
  });
}

export function animatePrimaryButtonLeave(target: EventTarget | null) {
  gsap.to(target, {
    scale: 1,
    y: 0,
    duration: 0.3,
    ease: "power2.out",
  });
}
