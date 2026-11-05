// GOOD
"use client";

import { useRef } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
// SHAPES
import { HeroShape_TrekDashboard } from "@/app/components/common/shapes";
// HOOKS
import { useHeroImageIntroAnimation } from "./hooks/useHeroImageIntro";
// STYLES
import { ImageContainer, HeroBackgroundImage } from "./HeroImage.styles";

const bg_HeroDesktop = "/assets/imgs/trek-dashboard/heroImage/imgDestop_1.jpg";

const bg_HeroCellular =
  "/assets/imgs/trek-dashboard/heroImage/imgCellular_1.jpg";

export default function HeroImage() {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const containerRef = useRef<HTMLDivElement>(null);

  useHeroImageIntroAnimation({
    containerRef,
  });

  return (
    <ImageContainer ref={containerRef}>
      <HeroBackgroundImage
        src={isDesktop ? bg_HeroDesktop : bg_HeroCellular}
        alt="Paysage de montagne Parki Trek"
        fill
        priority
        quality={100}
        sizes="(min-width: 900px) 50vw, 100vw"
      />

      <HeroShape_TrekDashboard />
    </ImageContainer>
  );
}
