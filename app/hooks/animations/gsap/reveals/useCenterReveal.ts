import { RefObject, useEffect } from "react";
import gsap from "gsap";

interface UseCenterRevealProps {
  rootRef: RefObject<HTMLDivElement | null>;
  topRef: RefObject<HTMLDivElement | null>;
  bottomRef: RefObject<HTMLDivElement | null>;
  titleTopRef: RefObject<HTMLHeadingElement | null>;
  titleBottomRef: RefObject<HTMLHeadingElement | null>;
  onComplete?: () => void;
  counterRef: RefObject<HTMLDivElement | null>;
}

export function useCenterReveal({
  rootRef,
  topRef,
  bottomRef,
  titleTopRef,
  titleBottomRef,
  onComplete,
  counterRef,
}: UseCenterRevealProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const counter = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";

        gsap.set(rootRef.current, {
          pointerEvents: "none",
        });

        onComplete?.();
      },
    });

    // Counter
    tl.to(counter, {
      value: 0.5,
      duration: 0.5,
      ease: "none",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = `00.${Math.floor(
            counter.value * 10,
          )}`;
        }
      },
    });

    // Panels
    tl.to(
      topRef.current,
      {
        yPercent: -100,
        duration: 1.8,
        ease: "expo.inOut",
      },
      0,
    );

    tl.to(
      bottomRef.current,
      {
        yPercent: 100,
        duration: 1.8,
        ease: "expo.inOut",
      },
      0,
    );

    // Text
    tl.to(
      titleTopRef.current,
      {
        y: -40,
        opacity: 0,
        duration: 1.6,
        ease: "power4.out",
      },
      0,
    );

    tl.to(
      titleBottomRef.current,
      {
        y: 40,
        opacity: 0,
        duration: 1.6,
        ease: "power4.out",
      },
      0,
    );

    // Preloader
    tl.to(
      rootRef.current,
      {
        autoAlpha: 0,
        duration: 0.4,
      },
      "-=0.3",
    );

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      tl.kill();
    };
  }, [
    rootRef,
    topRef,
    bottomRef,
    titleTopRef,
    titleBottomRef,
    onComplete,
    counterRef,
  ]);
}
