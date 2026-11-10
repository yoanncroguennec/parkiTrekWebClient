// GOOD
"use client";

import type { RefObject } from "react";
// STYLES
import { PreloaderBar, PreloaderOverlay } from "./ContactPreloader.Styles";

type ContactPreloaderProps = {
  overlayRef: RefObject<HTMLDivElement | null>;
  barRef: RefObject<HTMLDivElement | null>;
};

export default function ContactPreloader({ overlayRef, barRef }: ContactPreloaderProps) {
  return (
    <PreloaderOverlay ref={overlayRef}>
      <PreloaderBar ref={barRef} />
    </PreloaderOverlay>
  );
}
