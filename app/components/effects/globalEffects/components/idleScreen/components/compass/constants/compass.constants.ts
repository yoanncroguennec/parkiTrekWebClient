export const COMPASS_CONFIG = {
  size: 400,
  center: 200,
  radius: 175,

  tickCount: 72,
  majorTickInterval: 9,

  majorTickLength: 16,
  minorTickLength: 8,

  axisOffset: 20,

  directions: [
    {
      key: "north",
      label: "N",
      x: 200,
      y: 75,
    },
    {
      key: "south",
      label: "S",
      x: 200,
      y: 350,
    },
    {
      key: "west",
      label: "W",
      x: 75,
      y: 215,
    },
    {
      key: "east",
      label: "E",
      x: 325,
      y: 215,
    },
  ],

  needle: {
    north: "200,90 220,180 200,200 180,180",
    south: "200,310 220,220 200,200 180,220",
  },

  centerDotRadius: 4,

  colors: {
    circle: "rgba(255,255,255,0.15)",
    tick: "rgba(255,255,255,0.25)",
    axis: "rgba(255,255,255,0.08)",
    direction: "#bfc2b4",
    northNeedle: "#c8cabd",
    southNeedle: "#171717",
    center: "#777",
  },

  typography: {
    fontSize: 48,
    fontWeight: 600,
    fontFamily: "sans-serif",
  },
} as const;

export const COMPASS_DIRECTIONS = [
  {
    key: "north",
    label: "N",
  },
  {
    key: "south",
    label: "S",
  },
  {
    key: "west",
    label: "W",
  },
  {
    key: "east",
    label: "E",
  },
] as const;

export const round = (value: number, precision = 6) =>
  Number(value.toFixed(precision));
