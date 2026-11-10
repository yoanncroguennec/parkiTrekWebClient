"use client";

import { createRef, useMemo, useRef } from "react";
import { useTranslations } from "next-intl";

// UI

// HOOKS
import { useContent } from "./hooks/useContent";

// DATAS

// STYLES
import {
  ContentContainer,
  Grid,
  Card,
  IconCard,
  TitleCard,
  ValueCard,
  Title,
  Subtitle,
} from "./Content.styles";

// COMPONENTS
import { DonationGrowthChart, InspirationalQuote } from "@/app/components/ui";
import { data_SupportShowcase } from "./data/supportShowcase.data";

/* =========================================================
   TYPES
========================================================= */

interface ContentProps {
  isDesktop: boolean;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function Content({ isDesktop }: ContentProps) {
  const t = useTranslations("PaymentsDonationsPage.supportShowCase.hero");

  /* =======================================================
     CONTAINER REF
  ======================================================= */

  const container = useRef<HTMLDivElement>(null);

  /* =======================================================
     ELEMENT REFS
     
     Chaque élément possède maintenant son propre RefObject.
     
     On évite :
     
     refs.current[index] = element
     
     qui provoque l'erreur react-hooks/refs.
  ======================================================= */

  const cardsRef = useMemo(() => data_SupportShowcase.map(() => createRef<HTMLDivElement>()), []);

  const iconsRef = useMemo(() => data_SupportShowcase.map(() => createRef<HTMLDivElement>()), []);

  const titlesRef = useMemo(
    () => data_SupportShowcase.map(() => createRef<HTMLHeadingElement>()),
    []
  );

  const valuesRef = useMemo(
    () => data_SupportShowcase.map(() => createRef<HTMLParagraphElement>()),
    []
  );

  /* =======================================================
     GSAP / CONTENT HOOK
  ======================================================= */

  useContent({
    container,

    cardsRef,

    iconsRef,

    titlesRef,

    valuesRef,
  });

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <ContentContainer ref={container} spacing={5}>
      {/* =================================================
          TITLE
      ================================================= */}

      <Title component="h1">{t("title")}</Title>

      {/* =================================================
          SUBTITLE
      ================================================= */}

      <Subtitle component="h2">{t("subTitle")}</Subtitle>

      {/* =================================================
          CARDS
      ================================================= */}

      <Grid>
        {data_SupportShowcase.map(({ id, icon: Icon }, index) => (
          <Card key={id} ref={cardsRef[index]} spacing={2}>
            {/* =========================================
                  ICON
              ========================================= */}

            <IconCard ref={iconsRef[index]}>
              <Icon color="#FFF" size={isDesktop ? 40 : 25} />
            </IconCard>

            {/* =========================================
                  TITLE
              ========================================= */}

            <TitleCard component="h3" ref={titlesRef[index]}>
              {t(`data_SupportShowcase.${id}.title`)}
            </TitleCard>

            {/* =========================================
                  VALUE
              ========================================= */}

            <ValueCard
              component="p"
              ref={valuesRef[index]}
              data-value={t(`data_SupportShowcase.${id}.value`)}
            >
              0
            </ValueCard>

            {/* =========================================
                  CHART
              ========================================= */}

            <DonationGrowthChart />
          </Card>
        ))}
      </Grid>

      {/* =================================================
          MOBILE QUOTE
      ================================================= */}

      {!isDesktop && <InspirationalQuote />}
    </ContentContainer>
  );
}
