"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import { PiMouseSimpleBold } from "@/app/utils/constants/icons";

import {
  Container,
  InstructionContainer,
  InstructionText,
  MouseIcon,
  PrimaryText,
  SecondaryText,
} from "./Footer.Styles";

import useFooterAnimation from "./hooks/useFooterAnimation";

export default function Footer() {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const mouseRef = useFooterAnimation();

  return (
    <Container>
      <PrimaryText>RANDONNÉE - SOLIDARITÉ - ESPOIR</PrimaryText>

      <SecondaryText>CONTRE LA MALADIE DE PARKINSON</SecondaryText>

      <InstructionContainer ref={mouseRef}>
        {isDesktop && (
          <MouseIcon>
            <PiMouseSimpleBold size={25} />
          </MouseIcon>
        )}

        <InstructionText>
          BOUGER {isDesktop ? "LA SOURIS" : "L'ÉCRAN"} POUR CONTINUER
        </InstructionText>
      </InstructionContainer>
    </Container>
  );
}
