import type { FloatingLayout } from "../types/floatingText.types";

/* -------------------------------------------------------------------------- */
/*                             FLOATING ANIMATION                             */
/* -------------------------------------------------------------------------- */

export const BASE_Y = 6.5;

export const FLOAT_SPEED = 0.8;
export const FLOAT_AMPLITUDE = 0.15;

export const ROTATION_SPEED = 0.35;
export const ROTATION_AMPLITUDE = 0.015;

/* -------------------------------------------------------------------------- */
/*                                   ROUTES                                   */
/* -------------------------------------------------------------------------- */

export const GALLERY_ROUTE = (locale: string) => `/${locale}/gallery/gallery-selection`;

/* -------------------------------------------------------------------------- */
/*                                   LAYOUTS                                  */
/* -------------------------------------------------------------------------- */

export const DESKTOP_LAYOUT: FloatingLayout = {
  groupPosition: [-23, BASE_Y, 0],
  titleSize: 1.8,
  exploreSize: 4,
  buttonY: -2.3,
  lines: [
    {
      text: "Des paysages",
      y: 2,
    },
    {
      text: "Des souvenirs",
      y: 0,
    },
  ],
};

export const MOBILE_LAYOUT: FloatingLayout = {
  groupPosition: [-5, BASE_Y, 0],
  titleSize: 1,
  exploreSize: 2,
  buttonY: -1,
  lines: [
    {
      text: "Des paysages",
      y: 2,
    },
    {
      text: "Des souvenirs",
      y: 0.5,
    },
  ],
};
