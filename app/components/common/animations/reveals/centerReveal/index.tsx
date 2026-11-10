"use client";

import { useRef } from "react";
// HOOKS
import { useCenterReveal } from "@/app/hooks";
// STYLES
import {
  Counter,
  Panel,
  Root,
  TitleBottom,
  TitleTop,
} from "./CenterReveal.Styles";

interface CenterRevealProps {
  onComplete?: () => void;
}

export default function CenterReveal({ onComplete }: CenterRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const titleTopRef = useRef<HTMLHeadingElement>(null);
  const titleBottomRef = useRef<HTMLHeadingElement>(null);

  const counterRef = useRef<HTMLDivElement>(null);

  useCenterReveal({
    rootRef,
    topRef,
    bottomRef,
    titleTopRef,
    titleBottomRef,
    counterRef,
    onComplete,
  });

  return (
    <Root ref={rootRef}>
      <Panel ref={topRef} sx={{ top: 0 }} />
      <Panel ref={bottomRef} sx={{ bottom: 0 }} />

      <TitleTop ref={titleTopRef}>PARKI TREK</TitleTop>
      <TitleBottom ref={titleBottomRef}>PARKI TREK</TitleBottom>

      <Counter ref={counterRef}>00.0</Counter>
    </Root>
  );
}
