"use client";

import { useCallback, useLayoutEffect, useRef } from "react";

import gsap from "gsap";

type UseMainMenuMobileAnimationProps = {
  open: boolean;
  onCloseComplete: () => void;
};

export function useMainMenuMobileAnimation({
  open,
  onCloseComplete,
}: UseMainMenuMobileAnimationProps) {
  // =====================================================
  // REFS
  // =====================================================

  const rootRef = useRef<HTMLDivElement>(null);

  const backgroundRef = useRef<HTMLDivElement>(null);

  const shadowRef = useRef<HTMLDivElement>(null);

  const closeRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef<gsap.core.Timeline | null>(null);

  // =====================================================
  // OPEN
  // =====================================================

  useLayoutEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      animationRef.current?.kill();

      // =================================================
      // INITIAL STATE
      // =================================================

      gsap.set(backgroundRef.current, {
        opacity: 0,
      });

      gsap.set(shadowRef.current, {
        opacity: 0,
      });

      gsap.set(closeRef.current, {
        opacity: 0,
        scale: 0,
        rotation: -180,
      });

      // =================================================
      // OPEN TIMELINE
      // =================================================

      const timeline = gsap.timeline();

      animationRef.current = timeline;

      // =================================================
      // 1 — BACKGROUND
      // =================================================

      timeline.to(backgroundRef.current, {
        opacity: 1,

        duration: 0.5,

        ease: "power2.out",
      });

      // =================================================
      // 2 — SHADOW
      // =================================================

      timeline.to(
        shadowRef.current,
        {
          opacity: 1,

          duration: 0.4,

          ease: "power2.out",
        },
        "-=0.2",
      );

      // =================================================
      // 3 — CLOSE BUTTON
      // =================================================

      timeline.to(
        closeRef.current,
        {
          opacity: 1,

          scale: 1,

          rotation: 0,

          duration: 0.55,

          ease: "back.out(2)",
        },
        "-=0.15",
      );
    }, rootRef);

    return () => {
      ctx.revert();

      animationRef.current?.kill();
    };
  }, [open]);

  // =====================================================
  // CLOSE
  // =====================================================

  const closeMenu = useCallback(() => {
    if (!rootRef.current) {
      onCloseComplete();
      return;
    }

    animationRef.current?.kill();

    const timeline = gsap.timeline({
      onComplete: onCloseComplete,
    });

    animationRef.current = timeline;

    // =================================================
    // 1 — CLOSE BUTTON
    // =================================================

    timeline.to(closeRef.current, {
      opacity: 0,

      scale: 0,

      rotation: 90,

      duration: 0.25,

      ease: "power2.in",
    });

    // =================================================
    // 2 — SHADOW
    // =================================================

    timeline.to(
      shadowRef.current,
      {
        opacity: 0,

        duration: 0.3,

        ease: "power2.in",
      },
      "-=0.1",
    );

    // =================================================
    // 3 — BACKGROUND
    // =================================================

    timeline.to(
      backgroundRef.current,
      {
        opacity: 0,

        duration: 0.5,

        ease: "power2.in",
      },
      "-=0.15",
    );

    return timeline;
  }, [onCloseComplete]);

  // =====================================================
  // HOVER ENTER
  // =====================================================

  const handleCloseEnter = useCallback(() => {
    if (!closeRef.current) {
      return;
    }

    gsap.to(closeRef.current, {
      scale: 1.15,

      rotation: 90,

      duration: 0.25,

      ease: "power2.out",
    });
  }, []);

  // =====================================================
  // HOVER LEAVE
  // =====================================================

  const handleCloseLeave = useCallback(() => {
    if (!closeRef.current) {
      return;
    }

    gsap.to(closeRef.current, {
      scale: 1,

      rotation: 0,

      duration: 0.25,

      ease: "power2.out",
    });
  }, []);

  // =====================================================
  // MOUSE DOWN
  // =====================================================

  const handleCloseDown = useCallback(() => {
    if (!closeRef.current) {
      return;
    }

    gsap.to(closeRef.current, {
      scale: 0.9,

      rotation: 180,

      duration: 0.15,

      ease: "power2.out",
    });
  }, []);

  // =====================================================
  // CLEANUP
  // =====================================================

  useLayoutEffect(() => {
    return () => {
      animationRef.current?.kill();

      gsap.killTweensOf(closeRef.current);
    };
  }, []);

  // =====================================================
  // RETURN
  // =====================================================

  return {
    rootRef,

    backgroundRef,

    shadowRef,

    closeRef,

    closeMenu,

    handleCloseEnter,

    handleCloseLeave,

    handleCloseDown,
  };
}
