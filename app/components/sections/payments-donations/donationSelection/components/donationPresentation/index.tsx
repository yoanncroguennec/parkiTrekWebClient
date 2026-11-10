"use client";

// UI
import { CurvedLine } from "@/app/components/ui";

// STYLES
import {
  DonationPresentationContainer,
  PanelTitleContainer,
  PanelEyebrow,
  PanelTitleUnderline,
  PanelMainTitle,
  PanelMainTitleText,
  PanelMainTitleAccent,
  PanelDescription,
  PanelCurvedLineContainer,
} from "./DonationPresentation.Styles";

export default function DonationPresentation() {
  return (
    <DonationPresentationContainer>
      <PanelTitleContainer>
        <PanelEyebrow>Soutenir l&apos;aventure</PanelEyebrow>

        <PanelTitleUnderline />

        <PanelMainTitle>
          <PanelMainTitleText component="h2">Faire un</PanelMainTitleText>

          <PanelMainTitleAccent component="span">don</PanelMainTitleAccent>
        </PanelMainTitle>
      </PanelTitleContainer>

      <PanelDescription component="p">
        Chaque contribution participe à la réussite de Parki Trek et à la sensibilisation autour de
        la maladie de Parkinson.
      </PanelDescription>

      <PanelCurvedLineContainer>
        <CurvedLine />
      </PanelCurvedLineContainer>
    </DonationPresentationContainer>
  );
}
