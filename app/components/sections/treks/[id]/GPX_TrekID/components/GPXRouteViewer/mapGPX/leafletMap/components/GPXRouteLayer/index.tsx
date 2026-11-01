"use client";

import { Layer, Source } from "react-map-gl/maplibre";

import type { GpxPoint } from "@/app/utils/constants/types/gpx";

import { useGPXRoute } from "./hooks/useGPXRoute";

import { routeGlowLayer, routeMainLayer } from "./GPXRouteLayer.Styles";

type Props = {
  points: GpxPoint[];
};

export default function GPXRouteLayer({ points }: Props) {
  const routeSegments = useGPXRoute(points);

  return (
    <Source id="route" type="geojson" data={routeSegments}>
      <Layer {...routeGlowLayer} />

      <Layer {...routeMainLayer} />
    </Source>
  );
}
