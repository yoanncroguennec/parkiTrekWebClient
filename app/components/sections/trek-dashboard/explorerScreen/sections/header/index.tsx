"use client";

import { RefObject } from "react";

import { useMediaQuery, useTheme } from "@mui/material";
// ICONS
import { IoArrowBack } from "@/app/utils/constants/icons";
// STYLES
import { BackButton, HeaderContainer, HeaderTitle } from "./HeaderSection.Styles";

interface Props {
  onBack: () => void;
  headerRef: RefObject<HTMLDivElement | null>;
}

export default function HeaderSection({ onBack, headerRef }: Props) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <HeaderContainer ref={headerRef}>
      <BackButton onClick={onBack} variant="outlined">
        <IoArrowBack color="#71966C" size={28} />
      </BackButton>

      {isDesktop ? (
        <HeaderTitle>
          Bienvenue dans mon
          <br />
          journal de bord
        </HeaderTitle>
      ) : (
        <HeaderTitle>
          Mon carnet
          <br />
          de bord
        </HeaderTitle>
      )}
    </HeaderContainer>
  );
}
