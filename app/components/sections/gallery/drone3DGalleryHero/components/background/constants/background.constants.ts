export const BACKGROUND_TEXTURE =
  "/assets/imgs/gallery/drone3DGalleryHero/scene/background/bg_1.png";

/* -------------------------------------------------------------------------- */
/*                                  POSITION                                  */
/* -------------------------------------------------------------------------- */

export const BACKGROUND_POSITION = [0, 0, -200] as const;

/* -------------------------------------------------------------------------- */
/*                                    SIZE                                    */
/* -------------------------------------------------------------------------- */

export const BACKGROUND_SIZE = [600, 300] as const;

/* -------------------------------------------------------------------------- */
/*                                 ANIMATION                                  */
/* -------------------------------------------------------------------------- */

export const BACKGROUND_VISIBLE_DURATION = 2;

export const BACKGROUND_HIDDEN_DURATION = 0.5;

export const BACKGROUND_EASE = "power3.out";

export const BACKGROUND_ANIMATION = {
  visible: {
    opacity: 1,
    duration: 2,
  },

  hidden: {
    opacity: 0,
    duration: 0.5,
  },

  ease: "power3.out",
} as const;
