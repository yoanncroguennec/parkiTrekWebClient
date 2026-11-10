export function getCircularPosition(angle: number, radius: number): [number, number, number] {
  return [Math.sin(angle) * radius, 0, Math.cos(angle) * radius];
}
