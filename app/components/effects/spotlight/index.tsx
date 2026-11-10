// GOOD
"use client";

import { useRef } from "react";
// HOOKS
import { useSpotlight } from "./hooks/useSpotlight";
// STYLES
import { SpotlightContainer } from "./Spotlight.Styles";

interface SpotlightProps {
  containerRef: React.RefObject<HTMLElement | null>;
  size?: number;
  blur?: number;
}

export default function Spotlight({ containerRef, size = 450, blur = 80 }: SpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useSpotlight({
    containerRef,
    spotlightRef,
  });

  return <SpotlightContainer ref={spotlightRef} $size={size} $blur={blur} />;
}
