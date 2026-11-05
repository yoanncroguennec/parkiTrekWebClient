"use client";

import { useEffect, useState } from "react";

import type { GpxPoint } from "@/app/utils/constants/types/gpx";
import { parseGPX } from "@/app/utils/functions/gpx/parseGPX";

type UseGPXLoaderResult = {
  points: GpxPoint[];
  loading: boolean;
  error: string | null;
};

export function useGPXLoader(file_GPX: string): UseGPXLoaderResult {
  const [points, setPoints] = useState<GpxPoint[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadGPX = async () => {
      try {
        setLoading(true);
        setError(null);
        setPoints([]);

        const response = await fetch(file_GPX, {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Impossible de charger le parcours (${response.status}).`);
        }

        const gpx = await response.text();

        if (!gpx.trim()) {
          throw new Error("Le fichier GPX est vide.");
        }

        const parsedPoints = parseGPX(gpx);

        if (!parsedPoints || parsedPoints.length === 0) {
          throw new Error("Aucun point GPS valide n'a été trouvé dans le parcours.");
        }

        setPoints(parsedPoints);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        console.error("Erreur chargement GPX :", error);

        setError(error instanceof Error ? error.message : "Impossible de charger le parcours.");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadGPX();

    return () => {
      controller.abort();
    };
  }, [file_GPX]);

  return {
    points,
    loading,
    error,
  };
}
