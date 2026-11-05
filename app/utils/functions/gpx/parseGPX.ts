import simplify from "simplify-js"; // Réduit le nombre de points d'une ligne ou d'un tracé tout en conservant sa forme générale, afin d'améliorer les performances et de diminuer la quantité de données à traiter.

import { GpxPoint, SimplifiedPoint } from "../../constants/types/gpx";

// export type GpxPoint = {
//   lat: number;
//   lon: number;
//   ele: number;
//   time?: string;
//   dist: number;
// };

// type SimplifiedPoint = GpxPoint & {
//   x: number;
//   y: number;
// };

function haversine(p1: { lat: number; lon: number }, p2: { lat: number; lon: number }) {
  const R = 6371;
  const dLat = ((p2.lat - p1.lat) * Math.PI) / 180;
  const dLon = ((p2.lon - p1.lon) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((p1.lat * Math.PI) / 180) *
      Math.cos((p2.lat * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function parseGPX(gpxText: string): GpxPoint[] {
  const parser = new DOMParser();
  const xml = parser.parseFromString(gpxText, "text/xml");

  const pts = Array.from(xml.getElementsByTagName("trkpt"));

  const rawPoints: GpxPoint[] = pts.map((pt) => ({
    lat: parseFloat(pt.getAttribute("lat") || "0"),
    lon: parseFloat(pt.getAttribute("lon") || "0"),
    ele: parseFloat(pt.getElementsByTagName("ele")[0]?.textContent || "0"),
    time: pt.getElementsByTagName("time")[0]?.textContent,
    dist: 0,
  }));

  // 🔥 SIMPLIFICATION DIRECTE
  const simplified = simplify(
    rawPoints.map((p) => ({
      x: p.lat,
      y: p.lon,
      ...p,
    })),
    0.0001,
    true
  ) as SimplifiedPoint[];

  // 🔥 Reconversion propre sans .find()

  type RawPoint = Omit<GpxPoint, "dist">;

  const simplifiedPoints: RawPoint[] = simplified.map(({ x, y, ele, time }) => ({
    lat: x,
    lon: y,
    ele,
    time,
  }));

  // 🔥 Distance cumulée SUR les points simplifiés
  let total = 0;

  return simplifiedPoints.map((p, i): GpxPoint => {
    if (i > 0) {
      total += haversine(simplifiedPoints[i - 1], p);
    }

    return {
      ...p,
      dist: total,
    };
  });
}

// import simplify from "simplify-js";

// export type GpxPoint = {
//   lat: number;
//   lon: number;
//   ele: number;
//   time?: string;
//   dist: number;
// };

// type SimplifiedPoint = GpxPoint & {
//   x: number;
//   y: number;
// };

// function haversine(
//   p1: {
//     lat: number;
//     lon: number;
//   },
//   p2: {
//     lat: number;
//     lon: number;
//   }
// ) {
//   const R = 6371;

//   const dLat =
//     ((p2.lat - p1.lat) * Math.PI) / 180;

//   const dLon =
//     ((p2.lon - p1.lon) * Math.PI) / 180;

//   const a =
//     Math.sin(dLat / 2) ** 2 +
//     Math.cos((p1.lat * Math.PI) / 180) *
//       Math.cos((p2.lat * Math.PI) / 180) *
//       Math.sin(dLon / 2) ** 2;

//   return (
//     2 *
//     R *
//     Math.atan2(
//       Math.sqrt(a),
//       Math.sqrt(1 - a)
//     )
//   );
// }

// export default function parseGPX(
//   gpxText: string
// ): GpxPoint[] {
//   const parser = new DOMParser();

//   const xml = parser.parseFromString(
//     gpxText,
//     "text/xml"
//   );

//   const parserError =
//     xml.querySelector("parsererror");

//   if (parserError) {
//     console.error(
//       "Erreur XML dans le fichier GPX :",
//       parserError.textContent
//     );

//     return [];
//   }

//   const pts = Array.from(
//     xml.getElementsByTagName("trkpt")
//   );

//   if (pts.length === 0) {
//     console.warn(
//       "Aucun <trkpt> trouvé dans le fichier GPX."
//     );

//     return [];
//   }

//   const rawPoints: GpxPoint[] = pts
//     .map((pt) => {
//       const lat = parseFloat(
//         pt.getAttribute("lat") || ""
//       );

//       const lon = parseFloat(
//         pt.getAttribute("lon") || ""
//       );

//       const ele = parseFloat(
//         pt.getElementsByTagName("ele")[0]
//           ?.textContent || "0"
//       );

//       const time =
//         pt.getElementsByTagName("time")[0]
//           ?.textContent;

//       return {
//         lat,
//         lon,
//         ele: Number.isFinite(ele) ? ele : 0,
//         time,
//         dist: 0,
//       };
//     })
//     .filter(
//       (point) =>
//         Number.isFinite(point.lat) &&
//         Number.isFinite(point.lon)
//     );

//   if (rawPoints.length < 2) {
//     return rawPoints;
//   }

//   const simplified = simplify(
//     rawPoints.map((point) => ({
//       x: point.lat,
//       y: point.lon,
//       ...point,
//     })),
//     0.0001,
//     true
//   ) as SimplifiedPoint[];

//   type RawPoint = Omit<GpxPoint, "dist">;

//   const simplifiedPoints: RawPoint[] =
//     simplified.map(
//       ({
//         x,
//         y,
//         ele,
//         time,
//       }) => ({
//         lat: x,
//         lon: y,
//         ele,
//         time,
//       })
//     );

//   let total = 0;

//   return simplifiedPoints.map(
//     (point, index): GpxPoint => {
//       if (index > 0) {
//         total += haversine(
//           simplifiedPoints[index - 1],
//           point
//         );
//       }

//       return {
//         ...point,
//         dist: total,
//       };
//     }
//   );
// }
