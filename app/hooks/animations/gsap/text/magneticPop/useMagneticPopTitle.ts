"use client";

import { RefObject } from "react";

import useTextReveal from "./useTextReveal";
import useMagneticText from "./useMagneticText";
import useTextTilt from "./useTextTilt";

interface UseMagneticPopTitleProps {
  titleRef: RefObject<HTMLHeadingElement | null>;

  text: string;

  magneticStrength?: number;
  magneticRadius?: number;

  scrollStart?: string;
  scrollEnd?: string;

  enableReveal?: boolean;
  enableMagnetic?: boolean;
  enableTilt?: boolean;
}

export default function useMagneticPopTitle({
  titleRef,

  // text,

  magneticStrength = 0.3,
  magneticRadius = 160,

  scrollStart = "top 85%",
  scrollEnd = "top 35%",

  enableReveal = true,
  enableMagnetic = true,
  enableTilt = true,
}: UseMagneticPopTitleProps) {
  useTextReveal({
    titleRef,

    start: scrollStart,
    end: scrollEnd,

    enabled: enableReveal,
  });

  useMagneticText({
    titleRef,

    strength: magneticStrength,
    radius: magneticRadius,

    enabled: enableMagnetic,
  });

  useTextTilt({
    titleRef,

    enabled: enableTilt,
  });
}
