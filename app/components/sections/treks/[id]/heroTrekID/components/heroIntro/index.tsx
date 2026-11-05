"use client"

// GOOD
// import CircleCTA from "@/app/components/common/cta/circleCTA";
// UI
import { PrimaryButton } from "@/app/components/ui";
// DATAS
import { Area } from "@/app/utils/constants/data/treks/map/data";
// ICONS
import { LiaMountainSolid } from "@/app/utils/constants/icons";
// STYLES
import {
  HeroIntroRoot,
  HeroDescription,
  HeroActions,
  HeroQuote,
  HeroQuoteText,
  VideoCTA,
} from "./HeroIntro.Styles";

type Props = {
  selectedArea: Area;
};

export default function HeroIntro({ selectedArea }: Props) {
  return (
    <HeroIntroRoot>
      <HeroDescription className="hero-item">
        De <strong>Saint-Brieuc</strong> à <strong>Morlaix</strong>, un trek de{" "}
        <strong>{selectedArea.km ?? 0} kilomètres</strong> pour montrer
        qu&apos;il est possible d&apos;avancer malgré la maladie de Parkinson.
        <br />
        <br />
        Chaque pas raconte une histoire. Chaque kilomètre porte un message
        d&apos;espoir.
        <br />
        <br />
        {selectedArea.km ?? 0} kilomètres à travers paysages sauvages, côtes
        emblématiques et patrimoine breton. Une étape entre terre et mer, défi
        et émerveillement.
      </HeroDescription>

      <HeroActions>
        <PrimaryButton
          buttons={[
            {
              icon: LiaMountainSolid,
              text: "Découvrir l'aventure",
              variant: "contained",
              background: "linear-gradient(90deg, #22c55e, #84cc16)",
              boxShadow: "0 15px 35px rgba(34,197,94,.35)",
              backgroundHover: "linear-gradient(90deg, #22c55e, #84cc16)",
            },
            {
              background: "rgba(255,255,255,.08)",
              backdropFilter: "blur(20px)",
              border: "2px solid rgba(255,255,255,.9)",
              text: "Soutenir Parki Trek",
              variant: "outlined",
              backgroundHover: "rgba(255,255,255,.14)",
            },
          ]}
        />

        <VideoCTA>
          {/* <CircleCTA
            title="Voir la vidéo"
            subtitle="Youtube"
            href="/support"
            backgroundType="video"
            radius={300}
            strokeWidth={2}
            videoSrc="/assets/videos/Summiting the Matterhorn with an FPV Drone.mp4"
          /> */}
        </VideoCTA>
      </HeroActions>

      <HeroQuote>
        <HeroQuoteText>
          « La maladie accompagne le voyage, mais elle ne décide jamais de la
          destination. »
        </HeroQuoteText>
      </HeroQuote>
    </HeroIntroRoot>
  );
}
