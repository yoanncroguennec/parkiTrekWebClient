export interface FloatingLine {
  text: string;
  y: number;
}

export interface FloatingLayout {
  groupPosition: readonly [number, number, number];
  titleSize: number;
  exploreSize: number;
  buttonY: number;
  lines: readonly FloatingLine[];
}
