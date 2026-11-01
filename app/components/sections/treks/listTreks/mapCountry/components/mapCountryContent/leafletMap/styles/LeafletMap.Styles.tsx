import L from "leaflet";

export const defaultStyle: L.PathOptions = {
  fillColor: "#1E293B",
  color: "#ffffff",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6,
};

export const visitedStyle: L.PathOptions = {
  fillColor: "#22c55e",
  color: "#ffffff",
  weight: 2,
  opacity: 1,
  fillOpacity: 0.9,
};

export const hoverStyle: L.PathOptions = {
  fillColor: "#f97316",
  color: "#ffffff",
  weight: 4,
  opacity: 1,
  fillOpacity: 1,
};

export const selectedStyle: L.PathOptions = {
  fillColor: "#f97316",
  color: "#ffffff",
  weight: 4,
  opacity: 1,
  fillOpacity: 1,
};
