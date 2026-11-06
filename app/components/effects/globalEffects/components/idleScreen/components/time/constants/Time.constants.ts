export const TIME_CONFIG = {
  position: {
    top: 40,
    right: 40,
  },

  animation: {
    floatY: 8,
    duration: 10,
  },

  pulse: {
    minOpacity: 0.7,
    maxOpacity: 1,
    duration: 4,
  },

  colors: {
    primary: "#8BC34A",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    shadow: "0 20px 80px rgba(0, 0, 0, 0.35)",
  },

  card: {
    padding: "20px",
    borderRadius: "20px",
    backdropFilter: "blur(40px)",
    minWidth: "180px",
  },

  separator: {
    width: "25%",
    height: "2px",
    margin: "5px auto",
  },

  icons: {
    size: 25,
  },
} as const;

export const TIME_DATA = {
  steps: "12 548 PAS",
  location: "SAINT-BRIEUC",
  latitude: "48.514° N",
  longitude: "2.765° W",
} as const;
