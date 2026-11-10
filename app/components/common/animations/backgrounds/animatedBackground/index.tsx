"use client";

import { ReactNode, useRef } from "react";

import {
  Root,
  BackgroundLayer,
  BackgroundLayerAnimated,
  Content,
} from "./AnimatedBackground.Styles";
import { useAnimatedBackground } from "@/app/hooks";

interface AnimatedBackgroundProps {
  children: ReactNode;
}

export default function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useAnimatedBackground({
    backgroundRef,
  });

  return (
    <Root ref={backgroundRef}>
      {/* BACKGROUND 1 */}

      <BackgroundLayer />

      {/* BACKGROUND 2 */}

      <BackgroundLayerAnimated className="background-layer-2" />

      {/* CONTENT */}

      <Content>{children}</Content>
    </Root>
  );
}
