import { useEffect, useRef, useState } from "react";

import type { MapRef } from "react-map-gl/maplibre";

import maplibregl from "maplibre-gl";
import type { GpxPoint } from "@/app/utils/constants/types/gpx";

import { satelliteStyle, simpleStyle } from "../mapStyles";

import type { MapMode } from "../components/mapControls/MapControls.Styles";

type Props = {
  points: GpxPoint[];
  currentIndex: number;
};

export function useMapLibre({ points, currentIndex }: Props) {
  const mapRef = useRef<MapRef>(null);

  const [mapMode, setMapMode] = useState<MapMode>("satellite");

  /*
   * Point courant
   */
  const current = points[Math.min(currentIndex, points.length - 1)];

  /*
   * Distance totale
   */
  const totalKm = points[points.length - 1]?.dist?.toFixed(1) ?? "0";

  /*
   * Progression
   */
  const progress =
    points.length > 1 ? (currentIndex / (points.length - 1)) * 100 : 0;

  /*
   * Style de carte
   */
  const mapStyle = mapMode === "simple" ? simpleStyle : satelliteStyle;

  /*
   * Ajustement initial
   */
  useEffect(() => {
    if (!mapRef.current || !points.length) {
      return;
    }

    const bounds = new maplibregl.LngLatBounds();

    points.forEach((point) => {
      bounds.extend([point.lon, point.lat]);
    });

    mapRef.current.fitBounds(bounds, {
      padding: 120,
      duration: 2500,
      maxZoom: 10,
    });
  }, [points]);

  /*
   * Déplacement vers le point courant
   */
  useEffect(() => {
    if (!mapRef.current || !current) {
      return;
    }

    mapRef.current.flyTo({
      center: [current.lon, current.lat],

      zoom: 7,

      duration: 1800,
    });
  }, [current]);

  return {
    mapRef,
    mapMode,
    setMapMode,
    current,
    totalKm,
    progress,
    mapStyle,
  };
}
