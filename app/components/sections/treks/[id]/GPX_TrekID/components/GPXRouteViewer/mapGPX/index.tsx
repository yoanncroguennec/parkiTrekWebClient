"use client";

import { ComponentType, useEffect, useState } from "react";
import type { GPXViewerProps } from "./types/gpxViewer";
import { ResourceStatus } from "@/app/components/common/feedback";

export default function MapGPX(props: GPXViewerProps) {
  const [LeafletMap, setLeafletMap] =
    useState<ComponentType<GPXViewerProps> | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    import("./leafletMap")
      .then((module) => {
        if (!mounted) {
          return;
        }

        setLeafletMap(() => module.default);
      })
      .catch((error) => {
        console.error("Erreur chargement de la carte :", error);

        if (mounted) {
          setError(
            "Une erreur est survenue lors du chargement de la carte du parcours.",
          );
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (error || !LeafletMap) {
    return (
      <ResourceStatus
        loading={!LeafletMap && !error}
        error={error}
        empty={false}
        loadingMessage="Initialisation de la carte…"
        errorTitle="Impossible de charger la carte"
      />
    );
  }

  return <LeafletMap {...props} />;
}
