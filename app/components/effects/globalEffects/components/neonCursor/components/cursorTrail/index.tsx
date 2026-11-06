"use client";

import { useRef } from "react";
// HOOKS
import { useNeonTrail } from "../../hooks";
import NeonTrailDefs from "./defs/NeonTrailDefs";

export default function CursorTrail() {
  const pathRef = useRef<SVGPathElement>(null);

  useNeonTrail({
    pathRef,
  });

  return (
    <svg
      aria-hidden="true"
      width="100%"
      height="100%"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 999998,
      }}
    >
      <NeonTrailDefs />

      <path
        ref={pathRef}
        fill="none"
        stroke="url(#neonGradient)"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#neonGlow)"
      />
    </svg>
  );
}
