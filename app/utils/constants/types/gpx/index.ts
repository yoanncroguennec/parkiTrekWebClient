export type GpxPoint = {
  lat: number;
  lon: number;
  ele: number;
  time?: string;
  dist: number;
};

export type SimplifiedPoint = GpxPoint & {
  x: number;
  y: number;
};
