"use client";

import { useEffect } from "react";
import { defaultStyle, selectedStyle, visitedStyle } from "../styles/LeafletMap.Styles";

import type { Area } from "@/app/utils/constants/data/treks/map/data";
import type { LayerWithFeature } from "./useLayerAnimation";

export function useSelectedAreaStyle(
  selectedArea: Area | null,
  layersRef: React.RefObject<LayerWithFeature[]>
) {
  useEffect(() => {
    layersRef.current.forEach((layer) => {
      const area = layer.parkiFeature?.properties?.parkiArea;

      if (!area) {
        return;
      }

      const style =
        selectedArea?.code === area.code
          ? selectedStyle
          : area.visited
            ? visitedStyle
            : defaultStyle;

      layer.setStyle(style);
    });
  }, [selectedArea, layersRef]);
}
