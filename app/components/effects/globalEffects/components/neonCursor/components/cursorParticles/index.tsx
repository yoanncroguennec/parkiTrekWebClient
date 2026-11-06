"use client";

import { useRef } from "react";
// HOOKS
import { useParticleSystem } from "../../hooks";

export default function CursorParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useParticleSystem({
    canvasRef,
  });

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 999997,
      }}
    />
  );
}
