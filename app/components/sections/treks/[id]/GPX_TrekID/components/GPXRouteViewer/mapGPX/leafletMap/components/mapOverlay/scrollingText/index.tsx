"use client";

import { useRef } from "react";
import {
  ScrollingTextContent,
  ScrollingTextWrapper,
} from "./ScrollingText.Styles";
import { useScrollingText } from "./hooks/useScrollingText";

type Props = {
  text: string;
  pause?: number;
  duration?: number;
};

export default function ScrollingText({
  text,
  pause = 2,
  duration = 5,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  useScrollingText({
    containerRef,
    contentRef,
    pause,
    duration,
  });

  return (
    <ScrollingTextWrapper ref={containerRef}>
      <ScrollingTextContent ref={contentRef}>{text}</ScrollingTextContent>
    </ScrollingTextWrapper>
  );
}
