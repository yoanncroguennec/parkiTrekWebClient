"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
// COMPONENTS
import { Content, MediaDesktop, MediaCellular } from "./components";
// CTA
// QUOTES
// STYLES
import {
  SupportShowcaseContainer,
  MobileWrapper,
  MobileBackground,
  MobileContent,
  ContentContainer,
  Media,
} from "./SupportShowcase.Styles";
import { InspirationalQuote } from "@/app/components/ui";
import CircleCTA from "@/app/components/common/circleCTA";

export default function SupportShowcase() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const t = useTranslations("PaymentsDonationsPage.supportShowCase.circleCTA");

  return (
    <SupportShowcaseContainer spacing={isDesktop ? 8 : 0}>
      {!isDesktop && (
        <MobileWrapper>
          <MobileBackground>
            <MediaCellular />
          </MobileBackground>

          <MobileContent>
            <Content isDesktop={false} />
          </MobileContent>

          <CircleCTA
            title={t("title")}
            subtitle={t("subtitle")}
            label={t("label")}
            href="/support"
            x={500}
            y={590}
          />
        </MobileWrapper>
      )}

      {isDesktop && (
        <Media>
          <MediaDesktop />

          <ContentContainer>
            <Content isDesktop />
          </ContentContainer>

          <InspirationalQuote />
        </Media>
      )}
    </SupportShowcaseContainer>
  );
}
