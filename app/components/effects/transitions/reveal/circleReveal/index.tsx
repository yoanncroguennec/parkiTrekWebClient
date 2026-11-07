// GOOD
"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

// HOOKS
import { useCircleReveal } from "@/app/hooks";

// STYLES
import {
  CircleRevealRoot,
  CircleRevealCircle,
  CircleRevealText,
  CircleRevealContent,
  CircleRevealOverlay,
} from "./CircleReveal.Styles";

interface CircleRevealProps {
  children: ReactNode;
  onRevealStart?: () => void;
  onRevealComplete?: () => void;
}

export default function CircleReveal({
  children,
  onRevealStart,
  onRevealComplete,
}: CircleRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const whiteRef = useRef<HTMLDivElement>(null);

  useCircleReveal({
    rootRef,
    circleRef,
    textRef,
    contentRef,
    whiteRef,
    onRevealStart,
    onRevealComplete,
  });

  return (
    <>
      <CircleRevealRoot ref={rootRef}>
        <CircleRevealCircle ref={circleRef}>
          <CircleRevealText ref={textRef} component="h1">
            Soutenir
          </CircleRevealText>
        </CircleRevealCircle>
      </CircleRevealRoot>

      <CircleRevealContent ref={contentRef}>{children}</CircleRevealContent>

      <CircleRevealOverlay ref={whiteRef} />
    </>
  );
}
