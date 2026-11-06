import * as THREE from "three";

// -----------------------------------------------------------------------------
// Trail
// -----------------------------------------------------------------------------

export const TRAIL_CONFIG = {
  tubularSegments: 300,
  radius: 0.04,
  radialSegments: 24,

  color: "#8BC34A",
  emissiveIntensity: 5,

  markerRadius: 0.14,
  markerSegments: 32,

  haloRadius: 0.28,
  haloOpacity: 0.25,

  labelMarkerRadius: 0.12,
  labelMarkerSegments: 32,

  labelLineLength: 0.8,
  labelLineHeight: 0.2,
} as const;

// -----------------------------------------------------------------------------
// Label
// -----------------------------------------------------------------------------

export const TRAIL_LABEL_COLOR = "#8BC34A";

export const TRAIL_LABEL_TEXT = {
  city: {
    position: [1, 0.35, 0],
    fontSize: 0.35,
  },

  distance: {
    position: [1, -0.05, 0],
    fontSize: 0.18,
  },

  time: {
    position: [1, -0.35, 0],
    fontSize: 0.18,
  },
} as const;

// -----------------------------------------------------------------------------
// Curve
// -----------------------------------------------------------------------------

export const trailCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-2, -6, 0),
  new THREE.Vector3(-3, -4, -2),
  new THREE.Vector3(-1, -2, -5),
  new THREE.Vector3(-2, 1, -8),
  new THREE.Vector3(1, 3, -11),
  new THREE.Vector3(-1, 6, -15),
]);

// -----------------------------------------------------------------------------
// Labels data
// -----------------------------------------------------------------------------

export interface TrailLabel {
  city: string;
  distance: string;
  time: string;
  progress: number;
  point: THREE.Vector3;
}

export const labels: TrailLabel[] = [
  {
    city: "Paris",
    distance: "200 km",
    time: "16h00",
    progress: 0.15,
    point: trailCurve.getPoint(0.15),
  },

  {
    city: "Orléans",
    distance: "120 km",
    time: "12h30",
    progress: 0.35,
    point: trailCurve.getPoint(0.35),
  },

  {
    city: "Tours",
    distance: "85 km",
    time: "09h15",
    progress: 0.6,
    point: trailCurve.getPoint(0.6),
  },

  {
    city: "Poitiers",
    distance: "50 km",
    time: "06h45",
    progress: 0.85,
    point: trailCurve.getPoint(0.85),
  },
];
