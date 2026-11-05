"use client";

import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

// STYLES
import {
  FloatingDateCard,
  DateDay,
  DateMonth,
  Destination,
  ImageContainer,
  Title,
  TrekImageDateWrapper,
  CardContainer,
  Description,
  Information,
  InformationsWrapper,
} from "./NextTrekCard.Styles";
import { PrimaryButton } from "@/app/components/ui";

const bg_Hero = "/assets/imgs/trek-dashboard/img_2.jpg";

function handleSeeMore() {}

export default function NextTrekCard() {
  return (
    <CardContainer component="section">
      <Title component="h2" gutterBottom>
        Prochain Trek
      </Title>

      {/* =====================================================
          IMAGE + DATE
      ===================================================== */}
      <TrekImageDateWrapper>
        <ImageContainer>
          <Image
            src={bg_Hero}
            alt="Paysage de montagne Parki Trek"
            fill
            sizes="(max-width: 899px) 100vw, 500px"
            priority
          />
        </ImageContainer>

        {/* =================================================
            DATE FLOTTANTE
        ================================================= */}
        <FloatingDateCard>
          <DateDay component="span">18 - 19</DateDay>
          <DateMonth component="span">Mai</DateMonth>
        </FloatingDateCard>
      </TrekImageDateWrapper>

      {/* =====================================================
          INFORMATIONS
      ===================================================== */}
      <InformationsWrapper spacing={2}>
        <Information
          icon={
            <Image
              src="/assets/imgs/trek-dashboard/explorerScreen/nextTrekCard/iconBoot.png"
              alt=""
              width={24}
              height={24}
            />
          }
          label="150 km"
          variant="outlined"
        />
        <Information
          icon={
            <Image
              src="/assets/imgs/trek-dashboard/explorerScreen/nextTrekCard/iconSpeedometer.png"
              alt=""
              width={24}
              height={24}
            />
          }
          label="Moyenne"
          variant="outlined"
        />
      </InformationsWrapper>

      <Destination component="h3">
        Saint-Brieuc - Saint-Malo
        <br />
        (France)
      </Destination>

      <Description component="p">
        Un nouveau trek à travers les{" "}
        <strong>paysages sauvages de Bretagne</strong>, entre sentiers côtiers,
        vallées verdoyantes et panoramas ouverts sur l&apos;océan.{" "}
        <strong>150 km de marche</strong> au cœur d&apos;une nature préservée,
        entre effort, découverte et dépassement de soi.
      </Description>

      {/* =====================================================
          BOUTON
      ===================================================== */}

      <PrimaryButton
        buttons={[
          {
            endIcon: IoArrowForward,
            onClick: handleSeeMore,
            text: "Voir les détails",
            variant: "contained",
            background: "linear-gradient(135deg, #06B6D4, #8B5CF6)",
          },
        ]}
      />
    </CardContainer>
  );
}
