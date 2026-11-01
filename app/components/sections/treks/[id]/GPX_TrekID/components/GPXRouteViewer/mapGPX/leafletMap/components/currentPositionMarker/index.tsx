"use client";

import { Marker } from "react-map-gl/maplibre";

import { MarkerDot } from "./CurrentPositionMarker.Styles";

type Props = {
  longitude: number;
  latitude: number;
};

export default function CurrentPositionMarker({ longitude, latitude }: Props) {
  return (
    <Marker longitude={longitude} latitude={latitude} anchor="center">
      <MarkerDot />
    </Marker>
  );
}
