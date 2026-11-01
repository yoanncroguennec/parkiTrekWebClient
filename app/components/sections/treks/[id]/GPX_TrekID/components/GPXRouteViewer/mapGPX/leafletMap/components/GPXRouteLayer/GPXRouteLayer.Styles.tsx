import type { LayerProps } from "react-map-gl/maplibre";

export const routeGlowLayer: LayerProps = {
  id: "route-glow",

  type: "line",

  paint: {
    "line-color": ["get", "color"],

    "line-width": 12,

    "line-opacity": 0.25,

    "line-blur": 4,
  },
};

export const routeMainLayer: LayerProps = {
  id: "route-main",

  type: "line",

  layout: {
    "line-cap": "round",

    "line-join": "round",
  },

  paint: {
    "line-color": ["get", "color"],

    "line-width": 5,
  },
};
