"use client";

import { Area, TrekCard } from "@/app/utils/constants/data/treks/map/data";
import dynamic from "next/dynamic";
import { Dispatch, RefObject, SetStateAction } from "react";
import { LayerWithFeature } from "./leafletMap/hooks/useGeoJson";

export type MapContentProps = {
  cards: TrekCard[];
  rootRef: RefObject<HTMLDivElement | null>;
  isExpanded: boolean;
  currentIndex: number;
  selectedArea: Area | null;
  setSelectedArea: Dispatch<SetStateAction<Area | null>>;
  layersRef: RefObject<LayerWithFeature[]>;
};

const LeafletMap = dynamic(() => import("./leafletMap"), {
  ssr: false,
});

export default function MapCountryContent(props: MapContentProps) {
  return <LeafletMap {...props} />;
}
