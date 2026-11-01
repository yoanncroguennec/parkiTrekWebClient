export function getSlopeColor(slope: number) {
  if (slope > 15) return "#8B0000"; // rouge foncé
  if (slope > 10) return "#ff0000"; // rouge
  if (slope > 5) return "#ff9900"; // orange
  if (slope > 2) return "#ffff00"; // jaune
  if (slope > -2) return "#00ff00"; // vert
  if (slope > -5) return "#00c8ff"; // bleu clair
  return "#0000ff"; // bleu foncé
}
