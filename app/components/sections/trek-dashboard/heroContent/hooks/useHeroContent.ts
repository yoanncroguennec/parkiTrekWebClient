"use client";

import { RefObject, useEffect, useRef } from "react";
import gsap from "gsap";

interface UseHeroContentAnimationProps {
  logoRef: RefObject<HTMLImageElement | null>;
  brandInfoRef: RefObject<HTMLDivElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  descriptionRef: RefObject<HTMLParagraphElement | null>;
  signatureRef: RefObject<HTMLParagraphElement | null>;
  signatureLineRef: RefObject<HTMLDivElement | null>;
  exploreButtonRef: RefObject<HTMLButtonElement | null>;
}

export function useHeroContentAnimation({
  logoRef,
  brandInfoRef,
  titleRef,
  descriptionRef,
  signatureRef,
  signatureLineRef,
  exploreButtonRef,
}: UseHeroContentAnimationProps) {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const elements = [
      logoRef.current,
      brandInfoRef.current,
      titleRef.current,
      descriptionRef.current,
      signatureRef.current,
      signatureLineRef.current,
      exploreButtonRef.current,
    ];

    if (elements.some((element) => !element)) {
      return;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline();

      timelineRef.current = timeline;

      // État initial
      gsap.set(logoRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 20,
      });

      gsap.set(brandInfoRef.current, {
        opacity: 0,
        x: -15,
      });

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 35,
      });

      gsap.set(descriptionRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(signatureRef.current, {
        opacity: 0,
        y: 15,
        rotate: -5,
      });

      gsap.set(signatureLineRef.current, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "center",
      });

      gsap.set(exploreButtonRef.current, {
        opacity: 0,
        y: 20,
      });

      // =====================================================
      // INTRO ANIMATION
      // =====================================================

      timeline

        // Logo
        .to(logoRef.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })

        // Identité
        .to(
          brandInfoRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.45"
        )

        // Titre
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.2"
        )

        // Description
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
          },
          "-=0.5"
        )

        // Signature
        .to(
          signatureRef.current,
          {
            opacity: 1,
            y: 0,
            rotate: -2,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.35"
        )

        // Ligne
        .to(
          signatureLineRef.current,
          {
            opacity: 1,
            scaleX: 1,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.25"
        )

        // CTA
        .to(
          exploreButtonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "back.out(1.4)",
          },
          "-=0.15"
        );
    });

    return () => {
      timelineRef.current?.kill();
      timelineRef.current = null;

      context.revert();
    };
  }, [
    logoRef,
    brandInfoRef,
    titleRef,
    descriptionRef,
    signatureRef,
    signatureLineRef,
    exploreButtonRef,
  ]);
}
