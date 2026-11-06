"use client";

import { useRef } from "react";
// COMPONENTS
import { CursorParticles, CursorTrail } from "./components";
// HOOKS
import {
  useCursor,
  useCursorState,
  useCursorBlend,
  useCursorClick,
  useCursorScale,
  useCursorText,
  useMagneticCursor,
} from "./hooks";
// STYLES
import { CursorWrapper, Dot, Circle, CursorText } from "./CustomCursor.styles";

export default function NeonCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const cursor = useCursorState();

  useCursor({ dotRef, circleRef });
  useMagneticCursor();

  useCursorScale({ circleRef });
  useCursorText({ textRef });
  useCursorBlend({ circleRef });

  useCursorClick({
    dotRef,
    circleRef,
  });

  return (
    <CursorWrapper>
      <CursorParticles />
      <CursorTrail />

      <Dot ref={dotRef} />

      <Circle
        ref={circleRef}
        data-hover={cursor.hover}
        data-pressed={cursor.pressed}
        data-dragging={cursor.dragging}
      >
        <CursorText ref={textRef}>{cursor.text}</CursorText>
      </Circle>
    </CursorWrapper>
  );
}
