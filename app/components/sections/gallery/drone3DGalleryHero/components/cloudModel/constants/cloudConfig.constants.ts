export interface CloudConfig {
  position: readonly [number, number, number];
  scale: number;
  speed: number;
}

export const CLOUD_CONFIGS: readonly CloudConfig[] = [
  {
    position: [-180, 60, 120],
    scale: 40,
    speed: 0.4,
  },
  {
    position: [-120, 40, 80],
    scale: 25,
    speed: 0.8,
  },
  {
    position: [-60, 20, 40],
    scale: 15,
    speed: 1.2,
  },
] as const;
