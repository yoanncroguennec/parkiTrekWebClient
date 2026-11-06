"use client";

import { useGSAP } from "@gsap/react";
import { Box } from "@mui/material";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function WhiteFlash() {
  useGSAP(() => {
    // Action : Disparaît progressivement le flash blanc en diminuant son opacité jusqu'à 0 et le masque complètement avec display: none à la fin de l'animation
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
    <Box
      className="white-flash"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#FFF",
        pointerEvents: "none",
      }}
    />
  );
}
