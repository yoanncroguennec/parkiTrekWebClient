"use client";

import { useState } from "react";
// COMMON
import { ResourceStatus } from "@/app/components/common/feedback";
//
import MapGPX from "./mapGPX";
// HOOKS
import { useGPXLoader, useGPXPlayback } from "./hooks";

type Props = {
  file_GPX: string;
};

export default function GPXRouteViewer({ file_GPX }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1);

  // Loading GPX
  const { points, loading, error } = useGPXLoader(file_GPX);

  // Lecture automatique du parcours
  useGPXPlayback({
    pointCount: points.length,
    isPlaying,
    speed,
    setCurrentIndex,
  });

  function handleReset() {
    setIsPlaying(false);
    setCurrentIndex(0);
  }

  if (loading || error || !points.length) {
    return (
      <ResourceStatus
        loading={loading}
        error={error}
        empty={!points.length}
        loadingMessage="Chargement de la carte du parcours…"
        errorTitle="Impossible de charger le parcours"
        emptyTitle="Parcours introuvable"
        emptyMessage="Aucun point GPS n'a été trouvé pour ce parcours."
      />
    );
  }

  return (
    <MapGPX
      points={points}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      speed={speed}
      setSpeed={setSpeed}
      onReset={handleReset}
    />
  );
}
