"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function WhiteFlash() {
  useGSAP(() => {
    gsap.to(".white-flash", {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.1,
      onComplete: () => {
        gsap.set(".white-flash", {
          display: "none",
        });
      },
    });
  });

  return (
    <div
      className="white-flash"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#fff",
        pointerEvents: "none",
      }}
    />
  );
}
