// Position et animation principale du curseur
// Déplacement du point et du cercle du curseur
"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";

interface UseCursorProps {
  dotRef: RefObject<HTMLDivElement | null>;
  circleRef: RefObject<HTMLDivElement | null>;
  circleEase?: number;
}

export default function useCursor({
  dotRef,
  circleRef,
  circleEase = 0.15,
}: UseCursorProps) {
  useEffect(() => {
    document.body.style.cursor = "none";

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const circle = {
      x: mouse.x,
      y: mouse.y,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const setDotX = gsap.quickSetter(dotRef.current, "x", "px");
    const setDotY = gsap.quickSetter(dotRef.current, "y", "px");

    const setCircleX = gsap.quickSetter(circleRef.current, "x", "px");
    const setCircleY = gsap.quickSetter(circleRef.current, "y", "px");

    const render = () => {
      // Point
      setDotX(mouse.x);
      setDotY(mouse.y);

      // Cercle avec inertie
      circle.x += (mouse.x - circle.x) * circleEase;
      circle.y += (mouse.y - circle.y) * circleEase;

      setCircleX(circle.x);
      setCircleY(circle.y);
    };

    gsap.ticker.add(render);

    return () => {
      document.body.style.cursor = "auto";

      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(render);
    };
  }, [dotRef, circleRef, circleEase]);
}
