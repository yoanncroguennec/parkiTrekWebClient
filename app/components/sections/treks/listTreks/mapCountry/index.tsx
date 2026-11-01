// GOOD
"use client";

import { Dispatch, RefObject, SetStateAction, useRef } from "react";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
// COMPONENTS
import { MapCountryAreaDrawer, MapCountryContent, MapCountryHeader } from "./components";
// DATAS
import { Area, TrekCard } from "@/app/utils/constants/data/treks/map/data";
// HOOKS
import { LayerWithFeature } from "./components/mapCountryContent/leafletMap/hooks/useGeoJson";
// STYLES
import { MapCountryContainer } from "./MapCountry.Styles";

export type Props = {
  cards: TrekCard[];
  cardRef: RefObject<HTMLDivElement | null>;
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  currentIndex: number;
  selectedArea: Area | null;
  setSelectedArea: Dispatch<SetStateAction<Area | null>>;
};

export default function MapCountry({
  cards,
  cardRef,
  isExpanded,
  setIsExpanded,
  currentIndex,
  selectedArea,
  setSelectedArea,
}: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const rootRef = useRef<HTMLDivElement>(null);

  const layersRef = useRef<LayerWithFeature[]>([]);

  return (
    <MapCountryContainer
      isExpanded={isExpanded}
      onClick={(e) => {
        if (!isDesktop) return;

        e.stopPropagation();

        if (!isExpanded) {
          setIsExpanded(true);
        }
      }}
      onDoubleClick={(e) => {
        if (!isDesktop) return;

        e.stopPropagation();

        if (isExpanded) {
          setIsExpanded(false);
        }
      }}
      ref={rootRef}
    >
      <Stack
        ref={cardRef}
        spacing={2}
        sx={{
          transformStyle: "preserve-3d",
          perspective: "2000px",
        }}
      >
        <MapCountryHeader
          country={cards[currentIndex].country}
          totalKm={cards[currentIndex].distanceTravelled}
          progressKm={70}
        />

        <MapCountryContent
          cards={cards}
          rootRef={rootRef}
          isExpanded={isExpanded}
          currentIndex={currentIndex}
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
          layersRef={layersRef}
        />

        <MapCountryAreaDrawer selectedArea={selectedArea} setSelectedArea={setSelectedArea} />
      </Stack>
    </MapCountryContainer>
  );
}
