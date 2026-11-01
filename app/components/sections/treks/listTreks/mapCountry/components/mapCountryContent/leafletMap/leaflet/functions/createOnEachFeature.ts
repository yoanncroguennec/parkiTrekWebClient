// createOnEachFeature : configure les interactions de chaque zone GeoJSON de la carte.
// Gère notamment le clic, le survol, les tooltips et l’enregistrement des couches.
"use client";

import type { Dispatch, RefObject, SetStateAction } from "react";
import * as L from "leaflet";
// HOOKS
import type { ParkiFeature, LayerWithFeature } from "../../hooks/useGeoJson";
// DATAS
import type { Area } from "@/app/utils/constants/data/treks/map/data";
// STYLES
import {
  hoverStyle,
  selectedStyle,
  visitedStyle,
  defaultStyle,
} from "../../styles/LeafletMap.Styles";

interface CreateOnEachFeatureProps {
  country: string;
  selectedArea: Area | null;
  setSelectedArea: Dispatch<SetStateAction<Area | null>>;
  layersRef: RefObject<LayerWithFeature[]>;
}

export function createOnEachFeature({
  country,
  selectedArea,
  setSelectedArea,
  layersRef,
}: CreateOnEachFeatureProps) {
  return (feature: ParkiFeature, layer: L.Layer) => {
    const area = feature.properties?.parkiArea;

    if (layer instanceof L.Path) {
      const path = layer as LayerWithFeature;

      path.parkiFeature = feature;

      if (!layersRef.current.includes(path)) {
        layersRef.current.push(path);
      }
    }

    layer.on({
      click: () => {
        if (area) {
          setSelectedArea(area);
        }
      },

      mouseover: (e) => {
        const target = e.target as L.Path;

        target.setStyle({
          ...hoverStyle,
          opacity: 1,
          fillOpacity: 1,
        });

        target.bringToFront();

        target.bindTooltip(
          `
          <div class="parki-tooltip">
            <div class="parki-country">
              ${country}
            </div>

            <div class="parki-name">
              ${area?.name ?? "Zone inconnue"}
            </div>

            <div class="parki-desc">
              Cliquez pour plus de renseignements
            </div>
          </div>
          `,
          {
            sticky: true,
            direction: "top",
            opacity: 1,
            className: "parki-tooltip-wrapper",
          }
        );

        target.openTooltip();
      },

      mouseout: (e) => {
        const target = e.target as L.Path;

        target.closeTooltip();

        target.setStyle(
          selectedArea?.code === area?.code
            ? selectedStyle
            : area?.visited
              ? visitedStyle
              : defaultStyle
        );
      },
    });
  };
}
