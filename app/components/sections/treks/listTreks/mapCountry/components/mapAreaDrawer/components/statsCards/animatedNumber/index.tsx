"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type AnimatedNumberProps = {
  value: number;
  duration?: number;
};

export default function AnimatedNumber({ value, duration = 2 }: AnimatedNumberProps) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!numberRef.current) return;

    const obj = { value: 0 };

    gsap.to(obj, {
      value,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent = Math.round(obj.value).toString();
        }
      },
    });
  }, [value, duration]);

  return <span ref={numberRef}>0</span>;
}
