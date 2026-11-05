"use client";

import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Map, { NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
//
import {
  CurrentPositionMarker,
  GPXRouteLayer,
  MapControls,
  MapInfoOverlay,
  MapLegend,
  MapOverlay,
} from "./components";
// TYPES
import type { GPXViewerProps } from "../types/gpxViewer";
// HOOKS
import { useMapLibre } from "./hooks/useMapLibre";
// STYLES
import { MapContainer, MapGlow } from "./MapLibreMap.Styles";

export default function MapLibreMap(props: GPXViewerProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const {
    points,
    currentIndex,
    setCurrentIndex,
    isPlaying,
    setIsPlaying,
    speed,
    setSpeed,
    onReset,
  } = props;

  const [infoOpen, setInfoOpen] = useState<boolean>(false);

  const { mapRef, mapMode, setMapMode, current, totalKm, progress, mapStyle } = useMapLibre({
    points,
    currentIndex,
  });

  if (!current) {
    return null;
  }

  return (
    <MapContainer>
      <MapGlow />

      <MapOverlay
        totalKm={totalKm}
        pointCount={points.length}
        progress={progress}
        mapMode={mapMode}
        setMapMode={setMapMode}
      />

      <MapLegend infoOpen={infoOpen} onInfoToggle={() => setInfoOpen((value) => !value)} />

      <MapInfoOverlay
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        points={points}
        totalKm={totalKm}
        pointCount={points.length}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        speed={speed}
        setSpeed={setSpeed}
        onReset={onReset}
      />

      {isDesktop && <MapControls mapMode={mapMode} onChange={setMapMode} />}
      <Map
        ref={mapRef}
        attributionControl={false}
        mapStyle={mapStyle}
        minZoom={2}
        maxZoom={18}
        scrollZoom={isDesktop}
        touchZoomRotate={true}
        initialViewState={{
          longitude: current.lon,
          latitude: current.lat,
          zoom: 7,
        }}
      >
        {false && <NavigationControl position="bottom-right" />}

        <GPXRouteLayer points={points} />

        <CurrentPositionMarker longitude={current.lon} latitude={current.lat} />
      </Map>
    </MapContainer>
  );
}
