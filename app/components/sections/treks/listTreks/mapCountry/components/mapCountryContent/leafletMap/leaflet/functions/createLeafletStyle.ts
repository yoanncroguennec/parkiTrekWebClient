// createLeafletStyle : détermine l’apparence de chaque zone GeoJSON.
// Applique le style selon son état : sélectionnée, visitée ou par défaut.
"use client";

import * as L from "leaflet";
// DATAS
import type { Area } from "@/app/utils/constants/data/treks/map/data";
// HOOKS
import type { ParkiFeature } from "../../hooks/useGeoJson";
// STYLES
import { defaultStyle, selectedStyle, visitedStyle } from "../../styles/LeafletMap.Styles";

export function createLeafletStyle(selectedArea?: Area | null) {
  return (feature?: ParkiFeature): L.PathOptions => {
    if (!feature) {
      return {};
    }

    const area = feature.properties?.parkiArea;

    if (selectedArea?.code === area?.code) {
      return selectedStyle;
    }

    if (area?.visited) {
      return visitedStyle;
    }

    return defaultStyle;
  };
}
