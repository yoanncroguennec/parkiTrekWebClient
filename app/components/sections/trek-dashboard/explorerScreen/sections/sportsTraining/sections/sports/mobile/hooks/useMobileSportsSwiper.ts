import { PointerEvent, useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
// HELPERS
import {
  canNavigate,
  getNextIndex,
  getSwipeDirection,
  getSwipeRotation,
  SWIPE_THRESHOLD,
  SwipeDirection,
} from "../helpers/swipe.helpers";

interface UseMobileSportsSwiperProps {
  currentIndex: number;
  totalItems: number;
  onChange: (index: number) => void;
}

export function useMobileSportsSwiper({
  currentIndex,
  totalItems,
  onChange,
}: UseMobileSportsSwiperProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const startX = useRef(0);
  const currentX = useRef(0);
  const dragging = useRef(false);

  /**
   * Reset card
   */
  const resetCard = useCallback(() => {
    if (!cardRef.current) return;

    gsap.set(cardRef.current, {
      x: 0,
      rotation: 0,
      opacity: 1,
    });
  }, []);

  /**
   * Navigate card
   */
  const navigateCard = useCallback(
    (direction: SwipeDirection) => {
      if (!cardRef.current) return;

      if (!canNavigate(currentIndex, totalItems, direction)) {
        return;
      }

      const directionX = direction === "next" ? 1 : -1;

      gsap.to(cardRef.current, {
        x: directionX * window.innerWidth * 1.3,

        rotation: directionX * 25,

        opacity: 0,

        duration: 0.4,

        ease: "power2.in",

        onComplete: () => {
          const nextIndex = getNextIndex(currentIndex, direction);

          onChange(nextIndex);

          requestAnimationFrame(() => {
            resetCard();
          });
        },
      });
    },
    [currentIndex, totalItems, onChange, resetCard],
  );

  /**
   * Pointer down
   */
  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;

      dragging.current = true;

      startX.current = event.clientX;
      currentX.current = event.clientX;

      cardRef.current.setPointerCapture(event.pointerId);

      gsap.killTweensOf(cardRef.current);
    },
    [],
  );

  /**
   * Pointer move
   */
  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (!dragging.current || !cardRef.current) {
        return;
      }

      currentX.current = event.clientX;

      const deltaX = currentX.current - startX.current;

      gsap.set(cardRef.current, {
        x: deltaX,
        rotation: getSwipeRotation(deltaX),
      });
    },
    [],
  );

  /**
   * Pointer up
   */
  const handlePointerUp = useCallback(() => {
    if (!dragging.current || !cardRef.current) {
      return;
    }

    dragging.current = false;

    const deltaX = currentX.current - startX.current;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      navigateCard(getSwipeDirection(deltaX));

      return;
    }

    gsap.to(cardRef.current, {
      x: 0,
      rotation: 0,
      duration: 0.35,
      ease: "elastic.out(1, 0.7)",
    });
  }, [navigateCard]);

  /**
   * Pointer cancel
   */
  const handlePointerCancel = useCallback(() => {
    if (!dragging.current || !cardRef.current) {
      return;
    }

    dragging.current = false;

    gsap.to(cardRef.current, {
      x: 0,
      rotation: 0,
      duration: 0.35,
      ease: "power3.out",
    });
  }, []);

  /**
   * Reset when card changes
   */
  useEffect(() => {
    resetCard();
  }, [currentIndex, resetCard]);

  return {
    cardRef,
    navigateCard,

    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerCancel,
  };
}
