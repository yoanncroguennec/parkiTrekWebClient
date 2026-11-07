// GOOD
"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import Tilt from "react-parallax-tilt";

// UI
import { PrimaryButton } from "@/app/components/ui";

// COMMON
import { VideoMediaBackground } from "@/app/components/common/media";

// ANIMATIONS
import { LiquidImageTransition } from "@/app/components/common/animations";

// HOOK
import { usePaymentsDonationsHeroAnimation } from "./hooks/usePaymentsDonationsHeroAnimation";

// DATA
import { paymentsDonationsHeroMedia } from "./data/paymentsDonationsHero.data";

// STYLES
import {
  Content,
  Title,
  Description,
  Objective,
  AmountObjective,
  SubTitle,
} from "./PaymentsDonationsHero.Styles";

interface HeroPaymentsDonationsProps {
  animationReady: boolean;
}

export default function PaymentsDonationsHero({
  animationReady,
}: HeroPaymentsDonationsProps) {
  const t = useTranslations("PaymentsDonationsPage.hero");

  // RESPONSIVE
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // REFS
  const titleRef = useRef<HTMLHeadingElement>(null);

  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const counterRef = useRef<HTMLSpanElement>(null);

  const heroRef = useRef<HTMLDivElement>(null);

  const boxRef = useRef<HTMLDivElement>(null);

  const textDescriptionRef = useRef<HTMLParagraphElement>(null);

  const donateRef = useRef<HTMLButtonElement>(null);

  const supportRef = useRef<HTMLButtonElement>(null);

  // ANIMATIONS
  usePaymentsDonationsHeroAnimation({
    animationReady,
    isDesktop,
    titleRef,
    subtitleRef,
    counterRef,
    heroRef,
    boxRef,
    textDescriptionRef,
    donateRef,
    supportRef,
  });

  return (
    <VideoMediaBackground
      desktopVideo={paymentsDonationsHeroMedia.videos.desktop}
      mobileVideo={paymentsDonationsHeroMedia.videos.mobile}
      isDesktop={isDesktop}
      ref={heroRef}
      overlayBackground="
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.65) 100%
    )
  "
    >
      <Content>
        <Stack sx={{ background: "" }}>
          <Title gutterBottom ref={titleRef} component="h1">
            {t("title")}
          </Title>

          <SubTitle gutterBottom ref={subtitleRef} component="p">
            {t("subtitle")}
          </SubTitle>

          <Description gutterBottom ref={textDescriptionRef} component="p">
            {t("text")}
          </Description>

          <Objective gutterBottom>{t("title_Amount")}</Objective>

          <AmountObjective>
            <span ref={counterRef} /> €
          </AmountObjective>

          <PrimaryButton
            buttons={[
              {
                ref: donateRef,
                text: t("title_btn1"),
                variant: "contained",
                background: "linear-gradient(135deg, #06B6D4, #8B5CF6)",
              },
              {
                ref: supportRef,
                text: t("title_btn2"),
                variant: "outlined",
              },
            ]}
          />
        </Stack>

        {isDesktop && (
          <Stack sx={{ background: "" }} ref={boxRef}>
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1500}
            >
              <LiquidImageTransition
                displacementMap={
                  paymentsDonationsHeroMedia.images.displacementMap
                }
                height={300}
                image1={paymentsDonationsHeroMedia.images.transitionPrimary}
                image2={paymentsDonationsHeroMedia.images.transitionSecondary}
                intensity={150}
                speed={0.08}
                width={500}
              />
            </Tilt>
          </Stack>
        )}
      </Content>
    </VideoMediaBackground>
  );
}
