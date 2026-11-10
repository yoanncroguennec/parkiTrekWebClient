"use client";

import type { RefObject } from "react";

import { useCounterAnimation, useFadeInUp, useSlideInRotate, useSplitText } from "@/app/hooks";

interface UsePaymentsDonationsHeroAnimationProps {
  animationReady: boolean;
  isDesktop: boolean;

  titleRef: RefObject<HTMLHeadingElement | null>;
  subtitleRef: RefObject<HTMLParagraphElement | null>;
  counterRef: RefObject<HTMLSpanElement | null>;
  heroRef: RefObject<HTMLDivElement | null>;
  boxRef: RefObject<HTMLDivElement | null>;
  textDescriptionRef: RefObject<HTMLParagraphElement | null>;
  donateRef: RefObject<HTMLButtonElement | null>;
  supportRef: RefObject<HTMLButtonElement | null>;
}

export function usePaymentsDonationsHeroAnimation({
  animationReady,
  isDesktop,
  titleRef,
  subtitleRef,
  counterRef,
  // heroRef,
  boxRef,
  textDescriptionRef,
  donateRef,
  supportRef,
}: UsePaymentsDonationsHeroAnimationProps) {
  useSplitText({
    ref: titleRef,
    enabled: animationReady,
  });

  useSplitText({
    ref: subtitleRef,
    enabled: animationReady,
  });

  useCounterAnimation({
    ref: counterRef,
    end: 150000,
    enabled: animationReady,
  });

  useSlideInRotate({
    ref: boxRef,
    endX: 100,
    enabled: animationReady && isDesktop,
  });

  useFadeInUp({
    ref: textDescriptionRef,
    y: 50,
    duration: 1,
    delay: 1,
    enabled: animationReady,
  });

  useFadeInUp({
    ref: donateRef,
    y: 50,
    duration: 1,
    delay: 1,
    enabled: animationReady,
  });

  useFadeInUp({
    ref: supportRef,
    y: 50,
    duration: 1,
    delay: 1,
    enabled: animationReady,
  });
}
