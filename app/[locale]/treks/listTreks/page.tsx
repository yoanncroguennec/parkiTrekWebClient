// GOOD
"use client";

import { useRef, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
// LAYOUTS
import { ContainerApp } from "@/app/components/common/layouts";
// SECTIONS
import { MapCountry, MapCountryNavigation, MapCountryPagination } from "@/app/components/sections/treks/listTreks";
// DATAS
import { Area, cards } from "@/app/utils/constants/data/treks/map/data";
// STYLES
import { ListTreksPageContainer } from "./ListTreksPage.Styles";

export default function ListTreksPage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  const mapCountryProps = {
    cards,
    cardRef,
    isExpanded,
    setIsExpanded,
    currentIndex,
    selectedArea,
    setSelectedArea,
  };

  const mapCountry = <MapCountry {...mapCountryProps} />;

  const mapCountryPagination = (
      <MapCountryPagination
          cards={cards}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
      />
  );

  return (
    <ContainerApp displayNavbar={!isExpanded && !selectedArea} displayFooter={false}>
      <ListTreksPageContainer isExpanded={isExpanded}>
        <MapCountryNavigation
          cards={cards}
          cardRef={cardRef}
          currentIndex={currentIndex}
          isExpanded={isExpanded}
          setCurrentIndex={setCurrentIndex}
        >
          {isDesktop ? mapCountry : mapCountryPagination}
        </MapCountryNavigation>

        {isDesktop ? mapCountryPagination : mapCountry}
      </ListTreksPageContainer>
    </ContainerApp>
  );
}
