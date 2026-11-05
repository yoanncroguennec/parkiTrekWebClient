"use client";

import { useMediaQuery, useTheme } from "@mui/material";
// COMPONENTS
import { Intro, Slogan, Quote, Benefits } from "./components";
// STYLES
import { HeroSection, HeroContent, TitleHeroSection } from "./Hero.Styles";

export default function Hero() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <HeroSection>
      <TitleHeroSection component="h2">Mes entraînements</TitleHeroSection>

      <HeroContent>
        <Intro isDesktop={isDesktop} />

        <Slogan />

        <Quote isDesktop={isDesktop} />
      </HeroContent>

      <Benefits />
    </HeroSection>
  );
}
