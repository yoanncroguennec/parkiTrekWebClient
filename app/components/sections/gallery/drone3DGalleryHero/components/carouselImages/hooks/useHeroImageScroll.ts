"use client";

import { useEffect } from "react";

import {
  DEFAULT_ROTATION_SPEED,
  SCROLL_ROTATION_SPEED,
  SCROLL_TIMEOUT,
} from "../constants/heroImage.constants";

import type { HeroImageScrollProps } from "../types/heroImage.types";

export default function useHeroImageScroll({ targetSpeed }: HeroImageScrollProps) {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (delta > 0) {
        targetSpeed.current = SCROLL_ROTATION_SPEED;
      } else if (delta < 0) {
        targetSpeed.current = -SCROLL_ROTATION_SPEED;
      }

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        targetSpeed.current = DEFAULT_ROTATION_SPEED;
      }, SCROLL_TIMEOUT);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [targetSpeed]);
}
