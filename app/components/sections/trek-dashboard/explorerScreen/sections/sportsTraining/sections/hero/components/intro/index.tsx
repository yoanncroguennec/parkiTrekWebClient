"use client";

import {
  HeroIntroContainer,
  IntroTitleHighlight,
  IntroDescription,
  HeroChips,
  HeroChip,
} from "./Intro.Styles";

interface Props {
  isDesktop: boolean;
}

export default function Intro({ isDesktop }: Props) {
  return (
    <HeroIntroContainer>
      <IntroTitleHighlight component="h5">
        Le mouvement
        <br />
        comme un allié
      </IntroTitleHighlight>

      {isDesktop ? (
        <IntroDescription component="p">
          Différentes disciplines pour rester actif,
          <br />
          réduire les symptômes de Parkinson
          <br />
          et se préparer ensemble pour Parki Trek.
        </IntroDescription>
      ) : (
        <IntroDescription component="p">
          Bouger pour rester actif,
          <br />
          Préparer Parki Trek.
          <br />
          Ensemble face à Parkinson
        </IntroDescription>
      )}

      <HeroChips>
        <HeroChip label="Ensemble face à Parkinson" variant="outlined" />

        <HeroChip label="Bouger" variant="outlined" />

        <HeroChip label="Se dépasser" variant="outlined" />
      </HeroChips>
    </HeroIntroContainer>
  );
}
