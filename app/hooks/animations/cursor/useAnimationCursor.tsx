"use client";

import { RefObject, useEffect, useRef } from "react";

export function useAnimationCursor(containerRef: RefObject<HTMLDivElement | null>) {
  const rafRef = useRef<number | null>(null);

  const pointerRef = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const el = containerRef.current;

    if (!el) return;

    let width = el.offsetWidth;
    let height = el.offsetHeight;

    pointerRef.current.x = width / 2;
    pointerRef.current.y = height / 2;

    const resizeObserver = new ResizeObserver(() => {
      width = el.offsetWidth;
      height = el.offsetHeight;
    });

    resizeObserver.observe(el);

    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();

      pointerRef.current.x = e.clientX - rect.left;
      pointerRef.current.y = e.clientY - rect.top;
    };

    window.addEventListener("pointermove", handlePointerMove);

    let smoothX = width / 2;
    let smoothY = height / 2;

    const loop = () => {
      smoothX += (pointerRef.current.x - smoothX) * 0.12;
      smoothY += (pointerRef.current.y - smoothY) * 0.12;

      if (width > 0 && height > 0) {
        el.style.setProperty("--halo-x", `${(smoothX / width) * 100}%`);
        el.style.setProperty("--halo-y", `${(smoothY / height) * 100}%`);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener("pointermove", handlePointerMove);

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [containerRef]);
}
