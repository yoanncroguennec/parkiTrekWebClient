"use client";

import type { RefObject } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import {
  DEFAULT_TRAIL_EASE,
  DEFAULT_TRAIL_POINTS,
} from "./constants/neonTrail.constant";
import type { TrailPoint } from "./types/neonTrail.types";

interface UseNeonTrailProps {
  pathRef: RefObject<SVGPathElement | null>;
  points?: number;
  ease?: number;
}

export default function useNeonTrail({
  pathRef,
  points = DEFAULT_TRAIL_POINTS,
  ease = DEFAULT_TRAIL_EASE,
}: UseNeonTrailProps) {
  useEffect(() => {
    const mouse: TrailPoint = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const trail: TrailPoint[] = Array.from({ length: points }, () => ({
      x: mouse.x,
      y: mouse.y,
    }));

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const render = () => {
      const firstPoint = trail[0];

      if (!firstPoint) {
        return;
      }

      firstPoint.x += (mouse.x - firstPoint.x) * ease;

      firstPoint.y += (mouse.y - firstPoint.y) * ease;

      for (let index = 1; index < trail.length; index++) {
        const current = trail[index];
        const previous = trail[index - 1];

        if (!current || !previous) {
          continue;
        }

        current.x += (previous.x - current.x) * ease;

        current.y += (previous.y - current.y) * ease;
      }

      let path = `M ${firstPoint.x} ${firstPoint.y}`;

      for (let index = 1; index < trail.length - 1; index++) {
        const current = trail[index];
        const next = trail[index + 1];

        if (!current || !next) {
          continue;
        }

        const centerX = (current.x + next.x) / 2;

        const centerY = (current.y + next.y) / 2;

        path += ` Q ${current.x} ${current.y}` + ` ${centerX} ${centerY}`;
      }

      pathRef.current?.setAttribute("d", path);
    };

    window.addEventListener("mousemove", handleMouseMove);

    gsap.ticker.add(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      gsap.ticker.remove(render);
    };
  }, [pathRef, points, ease]);
}
