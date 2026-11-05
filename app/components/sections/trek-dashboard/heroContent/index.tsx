// GOOD
"use client";

import { useRef } from "react";
// HOOKS
import { useHeroContentAnimation } from "./hooks/useHeroContent";
// STYLES
import {
  ContentSection,
  ContentWrapper,
  Brand,
  BrandInfo,
  BrandName,
  BrandTagline,
  Title,
  Description,
  Signature,
  SignatureLine,
  ExploreButton,
  LogoImage,
} from "./HeroContent.styles";

const img_Logo = "/assets/imgs/share/logoParki_1.png";

interface HeroContentProps {
  onExplore: () => void;
}

export default function HeroContent({ onExplore }: HeroContentProps) {
  const logoRef = useRef<HTMLImageElement>(null);
  const brandInfoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const signatureRef = useRef<HTMLParagraphElement>(null);
  const signatureLineRef = useRef<HTMLDivElement>(null);
  const exploreButtonRef = useRef<HTMLButtonElement>(null);

  useHeroContentAnimation({
    logoRef,
    brandInfoRef,
    titleRef,
    descriptionRef,
    signatureRef,
    signatureLineRef,
    exploreButtonRef,
  });

  return (
    <ContentSection>
      <ContentWrapper>
        <Brand spacing={1.5}>
          <LogoImage
            ref={logoRef}
            src={img_Logo}
            alt="Logo Parki Trek"
            width={120}
            height={120}
            priority
          />

          <BrandInfo ref={brandInfoRef} spacing={0.3}>
            <BrandName>PARKI TREK</BrandName>

            <BrandTagline>Trek · Combat Parkinson</BrandTagline>
          </BrandInfo>
        </Brand>

        <Title ref={titleRef} component="h1">
          Mon journal de bord
        </Title>

        <Description ref={descriptionRef} component="p">
          Mon espace personnel pour suivre mes aventures,
          <br />
          mes ressentis et chaque victoire du quotidien.
        </Description>

        <Signature ref={signatureRef} component="p">
          Chaque pas compte.
        </Signature>

        <SignatureLine ref={signatureLineRef} />

        <ExploreButton
          ref={exploreButtonRef}
          variant="contained"
          onClick={onExplore}
        >
          Explorer
        </ExploreButton>
      </ContentWrapper>
    </ContentSection>
  );
}
