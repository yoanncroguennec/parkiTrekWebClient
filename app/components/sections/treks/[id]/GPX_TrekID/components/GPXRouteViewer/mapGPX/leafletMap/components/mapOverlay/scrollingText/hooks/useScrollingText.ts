import { useLayoutEffect } from "react";
import gsap from "gsap";

type UseScrollingTextProps = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  pause?: number;
  duration?: number;
};

export function useScrollingText({
  containerRef,
  contentRef,
  pause = 2,
  duration = 5,
}: UseScrollingTextProps) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) {
      return;
    }

    let timeline: gsap.core.Timeline | null = null;

    const createAnimation = () => {
      const containerWidth = container.offsetWidth;
      const contentWidth = content.offsetWidth;

      if (!containerWidth || !contentWidth) {
        return;
      }

      timeline?.kill();

      gsap.set(content, {
        x: containerWidth,
      });

      timeline = gsap.timeline({
        repeat: -1,
      });

      timeline
        // Entrée depuis la droite
        .to(content, {
          x: 0,
          duration,
          ease: "power2.out",
        })

        // Pause
        .to(content, {
          duration: pause,
        })

        // Sortie vers la gauche
        .to(content, {
          x: -contentWidth,
          duration,
          ease: "power2.inOut",
        })

        // Pause
        .to(content, {
          duration: pause,
        })

        // Retour instantané à droite
        .set(content, {
          x: containerWidth,
        });
    };

    createAnimation();

    const resizeObserver = new ResizeObserver(() => {
      createAnimation();
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      timeline?.kill();
      gsap.killTweensOf(content);
    };
  }, [containerRef, contentRef, pause, duration]);
}
