import { useMemo } from "react";

import type { FeatureCollection, LineString } from "geojson";

import type { GpxPoint } from "@/app/utils/constants/types/gpx";

import { getSlopeColor } from "@/app/utils/functions/gpx/get";

export function useGPXRoute(points: GpxPoint[]) {
  return useMemo<FeatureCollection<LineString>>(() => {
    if (points.length < 2) {
      return {
        type: "FeatureCollection",
        features: [],
      };
    }

    return {
      type: "FeatureCollection",

      features: points.slice(0, -1).map((point, index) => {
        const nextPoint = points[index + 1];

        const distanceMeters = (nextPoint.dist - point.dist) * 1000;

        const elevation = (nextPoint.ele ?? 0) - (point.ele ?? 0);

        const slope = distanceMeters > 0 ? (elevation / distanceMeters) * 100 : 0;

        return {
          type: "Feature",

          properties: {
            slope,
            color: getSlopeColor(slope),
          },

          geometry: {
            type: "LineString",

            coordinates: [
              [point.lon, point.lat],
              [nextPoint.lon, nextPoint.lat],
            ],
          },
        };
      }),
    };
  }, [points]);
}
