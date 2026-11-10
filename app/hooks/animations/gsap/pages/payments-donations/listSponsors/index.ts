"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

// ANIMATIONS
import { createArrowAnimation } from "./animations/arrow.animation";
import { createInfoAnimation } from "./animations/info.animation";
import { createLogoAnimation } from "./animations/logo.animation";
import { createMarqueeAnimation } from "./animations/marquee.animation";
import { createTitleAnimation } from "./animations/title.animation";

// ==========================================
// PROPS
// ==========================================

export interface SponsorAnimationRefs {
  rowsRef: RefObject<(HTMLDivElement | null)[]>;
  pausedRows: RefObject<boolean[]>;

  titlesRef: RefObject<(HTMLElement | null)[]>;
  infosRef: RefObject<(HTMLDivElement | null)[]>;
  arrowsRef: RefObject<(HTMLDivElement | null)[]>;
  logosRef: RefObject<(HTMLImageElement | null)[]>;
}

// ==========================================
// HOOK
// ==========================================

export function useSponsorAnimations({
  rowsRef,
  pausedRows,
  titlesRef,
  infosRef,
  arrowsRef,
  logosRef,
}: SponsorAnimationRefs) {
  useEffect(() => {
    // MARQUEE : une animation par ligne
    const destroyMarquees = rowsRef.current
      .map((row, index) => {
        if (!row) return null;

        const direction: 1 | -1 = index % 2 === 0 ? -1 : 1;

        return createMarqueeAnimation(row, () => pausedRows.current[index] ?? false, direction);
      })
      .filter((destroy): destroy is () => void => destroy !== null);

    // TITLES
    const destroyTitle = createTitleAnimation(titlesRef);

    // INFORMATIONS
    const destroyInfo = createInfoAnimation(infosRef);

    // FLÈCHES
    const destroyArrow = createArrowAnimation(arrowsRef);

    // LOGOS
    const destroyLogo = createLogoAnimation(logosRef);

    // CLEANUP
    return () => {
      destroyMarquees.forEach((destroy) => destroy());
      destroyTitle();
      destroyInfo();
      destroyArrow();
      destroyLogo();
    };
  }, [rowsRef, pausedRows, titlesRef, infosRef, arrowsRef, logosRef]);
}
