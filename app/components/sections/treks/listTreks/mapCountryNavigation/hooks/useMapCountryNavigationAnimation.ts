"use client";

import type { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface Props {
  cardRef: RefObject<HTMLDivElement | null>;
  currentIndex: number;
  cardsLength: number;
  isAnimating: boolean;
  setIsAnimating: (value: boolean) => void;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

export function useMapCountryNavigationAnimation({
  cardRef,
  cardsLength,
  isAnimating,
  setIsAnimating,
  setCurrentIndex,
}: Props) {
  function animateCard(direction: "next" | "prev") {
    if (isAnimating) return;

    const card = cardRef.current;

    if (!card) return;

    setIsAnimating(true);

    const exitX = direction === "next" ? -100 : 400;
    const enterX = direction === "next" ? 400 : -400;

    gsap.to(card, {
      x: exitX,
      opacity: 0,
      rotateY: direction === "next" ? -35 : 35,
      filter: "blur(8px)",
      duration: 0.45,
      ease: "power2.in",

      onComplete: () => {
        setCurrentIndex((prev) => {
          if (direction === "next") {
            return prev === cardsLength - 1 ? 0 : prev + 1;
          }

          return prev === 0 ? cardsLength - 1 : prev - 1;
        });

        gsap.set(card, {
          x: enterX,
          opacity: 0,
          rotateY: direction === "next" ? 35 : -35,
          filter: "blur(8px)",
          scale: 0.85,
        });

        gsap.to(card, {
          x: 0,
          opacity: 1,
          rotateY: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.75,
          ease: "power3.out",

          onComplete: () => {
            setIsAnimating(false);
          },
        });
      },
    });
  }

  const nextCard = () => animateCard("next");
  const prevCard = () => animateCard("prev");

  return {
    nextCard,
    prevCard,
  };
}
