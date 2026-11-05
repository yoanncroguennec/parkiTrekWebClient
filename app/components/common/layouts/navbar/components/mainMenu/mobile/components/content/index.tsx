// GOOD
"use client";

import Image from "next/image";
import { useLayoutEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
// UI
import { BlobCard, LivePlatform } from "@/app/components/ui";
// DATA
import { dataMainMenu } from "../../../data/MainMenu.data";
// HOOKS
import { useMainMenuMobileContentAnimation } from "../../../../../../../../../hooks/animations/gsap/navigations/useMainMenuMobileContentAnimation";
// STYLES
import {
  PaperStyles,
  Logo,
  HeaderContent,
  MenuLinkWrapper,
  LiveCardWrapper,
  Dot,
  Live,
  Header,
  Title,
  SubTitle,
  Decoration,
  MenuLinkTitle,
  LogoImage,
  DecorationImage,
} from "./MainMenuMobileContent.Styles";

// Imgs
const logoParkiTrek = "/assets/imgs/share/logoParki_1.png";
const bgImgCellularDecoration = "/assets/imgs/menu/desktop/bgImgCellularDecoration.png";

export default function Content() {
  const t = useTranslations("Menu");

  // =====================================================
  // GSAP
  // =====================================================

  const {
    paperRef,
    logoRef,
    titleRef,
    liveCardRef,
    liveDotRef,
    decorRef,

    addLinkRef,

    closeContent,
  } = useMainMenuMobileContentAnimation();

  // =====================================================
  // CLOSE CONTENT REQUEST
  // =====================================================

  useLayoutEffect(() => {
    const handleStartClose = () => {
      const timeline = closeContent();

      timeline.eventCallback("onComplete", () => {
        window.dispatchEvent(new CustomEvent("main-menu-mobile-close"));
      });
    };

    window.addEventListener(
      "main-menu-mobile-start-content-close",
      handleStartClose,
    );

    return () => {
      window.removeEventListener(
        "main-menu-mobile-start-content-close",
        handleStartClose,
      );
    };
  }, [closeContent]);

  // =====================================================
  // CLOSE FROM LINK
  // =====================================================

  const handleCloseContent = () => {
    const timeline = closeContent();

    timeline.eventCallback("onComplete", () => {
      window.dispatchEvent(new CustomEvent("main-menu-mobile-close"));
    });
  };

  return (
    <PaperStyles ref={paperRef}>
      <Header>
<Logo ref={logoRef}>
  <LogoImage
    alt="Logo du projet Parki Trek"
    height={250}
    src={logoParkiTrek}
    width={250}
  />
</Logo>
        <HeaderContent ref={titleRef}>
          <Title variant="h6">PARKI TREK</Title>

          <SubTitle variant="body2">Trek • Combat Parkinson</SubTitle>
        </HeaderContent>
      </Header>

      {/* =================================================
          MENU LINKS
      ================================================= */}

      {dataMainMenu.map((menuItem) => (
        <MenuLinkWrapper key={menuItem.id} ref={addLinkRef}>
          <Link href={menuItem.url} onClick={handleCloseContent}>
            <MenuLinkTitle variant="h6">
              {t(`${menuItem.id}.title`)}
            </MenuLinkTitle>{" "}
          </Link>
        </MenuLinkWrapper>
      ))}

      {/* =================================================
          LIVE CARD
      ================================================= */}

      <BlobCard
        formatting={4}
        background="
          linear-gradient(
            135deg,
            rgba(30,39,34,.92) 0%,
            rgba(53,67,59,.82) 30%,
            rgba(81,96,86,.72) 70%,
            rgba(122,138,127,.60) 100%
          )
        "
        ref={liveCardRef}
        sx={{
          bottom: 120,
          position: "absolute",
        }}
      >
        <LiveCardWrapper>
          <Dot ref={liveDotRef} />

          <Live>En live sur</Live>
        </LiveCardWrapper>

        <LivePlatform />
      </BlobCard>

<Decoration ref={decorRef}>
  <DecorationImage
    alt="Image de décoration du menu de navigation"
    height={250}
    src={bgImgCellularDecoration}
    width={300}
  />
</Decoration>
    </PaperStyles>
  );
}
