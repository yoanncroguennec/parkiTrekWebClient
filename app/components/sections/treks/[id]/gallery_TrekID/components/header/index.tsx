"use client";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

import { photos } from "../../data";

import {
  HeaderContainer,
  HeaderTop,
  BrandGroup,
  BrandLogo,
  BrandName,
  BrandSubtitle,
  GalleryNavigation,
  ActiveNumber,
  CounterSeparator,
  TotalNumber,
  NavigationButtons,
  NavigationButtonSlot,
  NavigationButton,
  HeaderHero,
  HeadlineContainer,
  Headline,
  HeadlineHighlight,
  DescriptionPanel,
  DescriptionText,
} from "./Header.Styles";

interface HeaderProps {
  sectionRef: RefObject<HTMLElement | null>;
  activeIndex: number;
  progress: number;
}

export default function Header({
  sectionRef,
  activeIndex,
  progress,
}: HeaderProps) {
  const scrollToGalleryPosition = (position: "start" | "end") => {
    const section = sectionRef.current;

    if (!section) return;

    const trigger = ScrollTrigger.getAll().find(
      (item) => item.trigger === section,
    );

    if (!trigger) return;

    window.scrollTo({
      top: position === "start" ? trigger.start : trigger.end,
      behavior: "smooth",
    });
  };

  const showPrevious = progress > 0.5;
  const showNext = progress < 99.5;

  return (
    <HeaderContainer>
      {/* IDENTITÉ ET NAVIGATION */}
      <HeaderTop>
        <BrandGroup>
          <BrandLogo
            src="/assets/imgs/share/logoV1ParkiTrek.png"
            alt="Logo Parki Trek"
            width={150}
            height={100}
            priority
          />

          <BrandName>PARKI TREK /</BrandName>

          <BrandSubtitle>L&apos;AVENTURE CONTINUE</BrandSubtitle>
        </BrandGroup>

        {/* COMPTEUR ET BOUTONS */}
        <GalleryNavigation>
          <ActiveNumber component="span">
            {String(activeIndex + 1).padStart(2, "0")}
          </ActiveNumber>

          <CounterSeparator component="span">/</CounterSeparator>

          <TotalNumber component="span">
            {String(photos.length).padStart(2, "0")}
          </TotalNumber>

          <NavigationButtons>
            <NavigationButtonSlot>
              <NavigationButton
                aria-label="Revenir au début de la galerie"
                aria-hidden={!showPrevious}
                tabIndex={showPrevious ? 0 : -1}
                onClick={() => scrollToGalleryPosition("start")}
                className={showPrevious ? "is-visible" : "is-hidden"}
              >
                <FiArrowLeft size={18} />
              </NavigationButton>
            </NavigationButtonSlot>

            <NavigationButtonSlot>
              <NavigationButton
                aria-label="Aller à la dernière photo"
                aria-hidden={!showNext}
                tabIndex={showNext ? 0 : -1}
                onClick={() => scrollToGalleryPosition("end")}
                className={showNext ? "is-visible" : "is-hidden"}
              >
                <FiArrowRight size={18} />
              </NavigationButton>
            </NavigationButtonSlot>
          </NavigationButtons>
        </GalleryNavigation>
      </HeaderTop>

      {/* TITRE ET DESCRIPTION */}
      <HeaderHero>
        <HeadlineContainer>
          <Headline component="h1">
            Chaque pas
            <br />
            <HeadlineHighlight>compte.</HeadlineHighlight>
          </Headline>
        </HeadlineContainer>

        <DescriptionPanel>
          <DescriptionText>
            Avancer, découvrir, se dépasser.
            <br />
            Chaque randonnée est une occasion
            <br />
            de sensibiliser à la maladie de Parkinson.
          </DescriptionText>
        </DescriptionPanel>
      </HeaderHero>
    </HeaderContainer>
  );
}