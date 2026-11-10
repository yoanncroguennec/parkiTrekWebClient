"use client";

import { useRef } from "react";

// HOOKS
import { useMagneticPopTitle } from "@/app/hooks";

// STYLES
import { MagneticPopTitleText } from "./MagneticPopTitle.Styles";

/* =========================================================
   PROPS
   Configuration du titre magnétique
========================================================= */

interface MagneticPopTitleProps {
  // Texte du titre
  text: string;

  // Taille maximale du titre en pixels
  fontSize?: string;

  // Intensité de l'effet magnétique
  magneticStrength?: number;

  // Rayon d'activation de l'effet magnétique
  magneticRadius?: number;

  // Position de déclenchement de l'animation au scroll
  scrollStart?: string;

  // Position de fin de l'animation au scroll
  scrollEnd?: string;
}

/* =========================================================
   COMPONENT
   Titre animé avec effet magnétique GSAP
========================================================= */

export default function MagneticPopTitle({
  text,
  fontSize = "96px",

  magneticStrength = 0.3,
  magneticRadius = 160,

  scrollStart = "top 85%",
  scrollEnd = "top 35%",
}: MagneticPopTitleProps) {
  // ==========================================
  // REFERENCES
  // ==========================================

  const titleRef = useRef<HTMLHeadingElement>(null);

  // ==========================================
  // MAGNETIC POP ANIMATION
  // ==========================================

  useMagneticPopTitle({
    titleRef,
    text,
    magneticStrength,
    magneticRadius,
    scrollStart,
    scrollEnd,
  });

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <MagneticPopTitleText ref={titleRef} component="h1" $maxFontSize={fontSize}>
      {text.split("").map((char, index) => (
        <span key={`${char}-${index}`} className="magnetic-letter">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </MagneticPopTitleText>
  );
}
