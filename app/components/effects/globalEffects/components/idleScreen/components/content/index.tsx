"use client";

import { useRef } from "react";
// HOOKS
import useContentAnimation from "./hooks/useContentAnimation";
// STYLES
import {
  Container,
  Logo,
  LogoContainer,
  Separator,
  Subtitle,
  SubtitleText,
  Title,
} from "./Content.Styles";

const altImg = "Logo Parkinson";
const srcImg =
  "/assets/imgs/components/effects/idleScreen/logo_redTulipParkinson.png";

export default function Content() {
  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const parkRef = useRef<HTMLElement>(null);
  const trekRef = useRef<HTMLElement>(null);

  // Hooks
  useContentAnimation({
    containerRef,
    parkRef,
    trekRef,
  });

  return (
    <Container ref={containerRef}>
      {/* PARKI */}
      <Title component="h1" ref={parkRef}>
        PARKI
      </Title>

      {/* Sous-titre */}
      <Subtitle>
        <Separator />

        <SubtitleText component="p">Chaque pas compte</SubtitleText>

        <Separator />
      </Subtitle>

      {/* Logo */}
      <LogoContainer>
        <Logo src={srcImg} alt={altImg} width={500} height={500} />
      </LogoContainer>

      {/* TREK */}
      <Title component="h1" ref={trekRef}>
        TREK
      </Title>
    </Container>
  );
}
