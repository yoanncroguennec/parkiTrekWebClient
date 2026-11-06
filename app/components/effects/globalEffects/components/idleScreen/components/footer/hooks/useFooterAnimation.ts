import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function useFooterAnimation() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const animation = gsap.to(elementRef.current, {
      opacity: 1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      animation.kill();
    };
  }, []);

  return elementRef;
}
