import { RefObject, useEffect, useRef } from "react";
import gsap from "gsap";

// CONSTANTS
import { CAROUSEL_RADIUS, INITIAL_ROTATION, INITIAL_SPEED } from "../constants/carousel.constants";

export interface RotationState {
  speed: number;
  currentRotation: number;
}

export function useCarousel3D(
  wheelRef: RefObject<HTMLDivElement | null>,
  totalImages: number,
  radius = CAROUSEL_RADIUS,
  initialRotationX = INITIAL_ROTATION
): RefObject<RotationState> {
  const rotationState = useRef<RotationState>({
    speed: INITIAL_SPEED,
    currentRotation: 0,
  });

  useEffect(() => {
    const wheel = wheelRef.current;

    if (!wheel || totalImages === 0) return;

    const cards = wheel.querySelectorAll<HTMLDivElement>(".circular-carousel-card");

    cards.forEach((card, index) => {
      const angle = (360 / totalImages) * index;

      gsap.set(card, {
        rotationY: angle,
        transformOrigin: `50% 50% ${-radius}px`,
        z: radius,
      });
    });

    const update = () => {
      rotationState.current.currentRotation += rotationState.current.speed;

      gsap.set(wheel, {
        rotationY: rotationState.current.currentRotation,
        rotationX: initialRotationX,
      });
    };

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, [wheelRef, totalImages, radius, initialRotationX]);

  return rotationState;
}
