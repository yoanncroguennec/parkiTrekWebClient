// FitBounds : ajuste automatiquement la vue de la carte aux limites du GeoJSON.
// Définit également les limites de déplacement (maxBounds) pour empêcher de sortir de la zone.
"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

interface Props {
  data: GeoJSON.GeoJsonObject;
}

export default function FitBounds({ data }: Props) {
  const map = useMap();

  useEffect(() => {
    if (!data) return;

    const layer = L.geoJSON(data);
    const bounds = layer.getBounds();

    if (!bounds.isValid()) return;

    // Attend que le GeoJSON soit monté dans la carte
    const frame = requestAnimationFrame(() => {
      map.fitBounds(bounds, {
        padding: [50, 50],
        maxZoom: 8,
        animate: true,
      });

      // Limite le déplacement autour du GeoJSON
      map.setMaxBounds(bounds.pad(0.4));
    });

    return () => {
      cancelAnimationFrame(frame);

      // Réinitialise les limites avant le prochain GeoJSON
      map.setMaxBounds(undefined);
    };
  }, [data, map]);

  return null;
}
