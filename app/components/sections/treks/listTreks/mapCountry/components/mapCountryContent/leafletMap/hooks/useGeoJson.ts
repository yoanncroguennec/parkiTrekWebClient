"use client";

import { useEffect, useState } from "react";
import type { Feature, FeatureCollection, GeoJsonProperties } from "geojson";
import * as L from "leaflet";

import type { Area, TrekCard } from "@/app/utils/constants/data/treks/map/data";
// import { trace } from "console";

export interface LayerWithFeature extends L.Path {
  parkiFeature?: ParkiFeature;
}

type ParkiProperties = GeoJsonProperties & {
  parkiArea?: Area;
};

export type ParkiFeature = Feature<GeoJSON.Geometry, ParkiProperties>;

export function useGeoJson(cards: TrekCard[], currentIndex: number) {
  const [geojson, setGeojson] = useState<FeatureCollection | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;

    async function loadGeoJson() {
      if (!cancelled) {
        setLoading(true);
        setGeojson(null);
      }

      try {
        const areas = cards[currentIndex].areas;

        if (!areas.length) {
          if (!cancelled) {
            setGeojson({
              type: "FeatureCollection",
              features: [],
            });
            setLoading(false);
          }
          return;
        }

        const collections = await Promise.all(
          areas.map(async (area) => {
            const res = await fetch(area.geojson);

            if (!res.ok) {
              throw new Error(`Erreur ${res.status}: ${area.geojson}`);
            }

            return {
              area,
              geojson: await res.json(),
            };
          })
        );

        const features: ParkiFeature[] = collections.flatMap(({ area, geojson }) => {
          switch (geojson.type) {
            case "FeatureCollection":
              return geojson.features.map(
                (feature: Feature) =>
                  ({
                    ...feature,
                    properties: {
                      ...feature.properties,
                      parkiArea: area,
                    },
                  }) as ParkiFeature
              );

            case "Feature":
              return [
                {
                  ...geojson,
                  properties: {
                    ...geojson.properties,
                    parkiArea: area,
                  },
                } as ParkiFeature,
              ];

            default:
              return [];
          }
        });

        if (cancelled) return;

        console.log("Chargement :", cards[currentIndex].country);

        setGeojson({
          type: "FeatureCollection",
          features,
        });
      } catch (error) {
        if (!cancelled) {
          console.error(error);
          setGeojson(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadGeoJson();

    return () => {
      cancelled = true;
    };
  }, [cards, currentIndex]);

  return {
    geojson,
    loading,
  };
}
