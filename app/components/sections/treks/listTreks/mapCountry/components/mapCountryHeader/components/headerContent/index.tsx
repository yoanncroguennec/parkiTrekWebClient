"use client";

import { useRef } from "react";
// HOOKS
import { useMapHeaderContentAnimation } from "../../hooks/useMapHeaderContentAnimation";
// STYLES
import {
  BrandBadge,
  BrandBadgeIndicator,
  BrandBadgeText,
  CardContainer,
  Description,
  HeaderTop,
  Title,
} from "./HeaderContent.Styles";

type Props = {
  country: string;
};

export default function HeaderContent({ country }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  useMapHeaderContentAnimation({
    contentRef,
  });

  function formatCountry(country: string) {
    const firstLetter = country.trim().charAt(0).toLowerCase();

    return /^[aeiouy]/.test(firstLetter) ? `l'${country}` : `la ${country}`;
  }

  return (
    <CardContainer>
      <HeaderTop>
        <Title className="hero-title">
          Explorer
          <br />
          {formatCountry(country)}
        </Title>

        <BrandBadge>
          <BrandBadgeIndicator />
          <BrandBadgeText>PARKI TREK</BrandBadgeText>
        </BrandBadge>
      </HeaderTop>

      <Description>
        Découvrez chaque département traversé durant l&apos;aventure Parki Trek et suivez la
        progression du parcours.
      </Description>
    </CardContainer>
  );
}
