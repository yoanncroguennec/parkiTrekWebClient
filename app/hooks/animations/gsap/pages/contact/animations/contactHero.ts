import gsap from "gsap";

export function contactHero(timeline: gsap.core.Timeline, introImages: HTMLDivElement[]) {
  const introImgScale = 0.2;
  const introImgGap = 40;

  const introImgRotations = [-15, 5, -7.5, 10, -2.5];

  const introImgScaledWidth = window.innerWidth * introImgScale;

  const introImgRowWidth = introImgScaledWidth * 5 + introImgGap * 4;

  const introImgCenteredX = (window.innerWidth - introImgRowWidth) / 2;

  const introImgOffScreenX = introImgCenteredX - window.innerWidth * 1.3;

  /*
   * INITIALISATION
   */
  introImages.forEach((img, i) => {
    const centeredX =
      introImgCenteredX +
      i * (introImgScaledWidth + introImgGap) +
      introImgScaledWidth / 2 -
      window.innerWidth / 2;

    const offScreenX =
      introImgOffScreenX +
      i * (introImgScaledWidth + introImgGap) +
      introImgScaledWidth / 2 -
      window.innerWidth / 2;

    gsap.set(img, {
      scale: introImgScale,
      x: offScreenX,
      rotation: introImgRotations[i],
      borderRadius: "2.5rem",
      transformOrigin: "center center",
    });

    img.dataset.centeredX = `${centeredX}`;
  });

  /*
   * ARRIVÉE DES IMAGES
   */
  introImages.forEach((img) => {
    timeline.to(
      img,
      {
        x: parseFloat(img.dataset.centeredX || "0"),
        duration: 1.5,
        ease: "glide",
      },
      "<0.025"
    );
  });

  /*
   * SORTIE GAUCHE
   */
  timeline.to(
    [introImages[0], introImages[1]],
    {
      x: "-100vw",
      duration: 1.5,
      ease: "glide",
    },
    "spread"
  );

  /*
   * SORTIE DROITE
   */
  timeline.to(
    [introImages[3], introImages[4]],
    {
      x: "100vw",
      duration: 1.5,
      ease: "glide",
    },
    "spread"
  );

  /*
   * IMAGE CENTRALE
   */
  timeline.to(
    introImages[2],
    {
      scale: 1,
      x: 0,
      rotation: 0,
      borderRadius: 0,
      duration: 1.5,
      ease: "glide",
    },
    "spread"
  );
}
