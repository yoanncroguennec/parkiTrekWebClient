export const formats = {
  1: {
    borderRadius: "100% 100% 60% 60% / 70% 70% 100% 100%",
    boxShadow: "0 25px 60px rgba(0,0,0,.35)",
  },

  2: {
    borderRadius: "72% 28% 65% 35% / 42% 62% 38% 58%",
    boxShadow: "0 30px 70px rgba(0,0,0,.30)",
  },

  3: {
    borderRadius: "100% 35% 100% 35% / 65% 35% 65% 35%",
    boxShadow: "0 24px 60px rgba(0,0,0,.28)",
  },

  4: {
    borderRadius: "38% 62% 42% 58% / 63% 35% 65% 37%",
    boxShadow: `
      inset 0 1px 0 rgba(255,255,255,.08),
      0 20px 45px rgba(0,0,0,.35)
    `,
  },

  5: {
    borderRadius: "58% 42% 68% 32% / 32% 63% 37% 68%",
    transform: "rotate(-2deg)",
    boxShadow: `
      0 25px 55px rgba(0,0,0,.35),
      inset 0 2px 2px rgba(255,255,255,.08)
    `,
  },
} as const;
