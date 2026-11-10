export const CAROUSEL_IMAGES: readonly string[] = [
  "/assets/imgs/gallery/drone3DGalleryHero/scene/carouselImages/img_1.jpg",
  "/assets/imgs/gallery/drone3DGalleryHero/scene/carouselImages/img_2.jpg",
  "/assets/imgs/gallery/drone3DGalleryHero/scene/carouselImages/img_3.jpg",
  "/assets/imgs/gallery/drone3DGalleryHero/scene/carouselImages/img_4.jpg",
  "/assets/imgs/gallery/drone3DGalleryHero/scene/carouselImages/img_5.jpg",
  "/assets/imgs/gallery/drone3DGalleryHero/scene/carouselImages/img_6.jpg",
  "/assets/imgs/gallery/drone3DGalleryHero/scene/carouselImages/img_7.jpg",
  "/assets/imgs/gallery/drone3DGalleryHero/scene/carouselImages/img_8.jpg",
  "/assets/imgs/gallery/drone3DGalleryHero/scene/carouselImages/img_9.jpg",
  "/assets/imgs/gallery/drone3DGalleryHero/scene/carouselImages/img_10.jpg",
  "/assets/imgs/gallery/drone3DGalleryHero/scene/carouselImages/img_11.jpg",
  "/assets/imgs/gallery/drone3DGalleryHero/scene/carouselImages/img_12.jpg",
  "/assets/imgs/gallery/drone3DGalleryHero/scene/carouselImages/img_13.jpg",
  "/assets/imgs/gallery/drone3DGalleryHero/scene/carouselImages/img_14.jpg",
  "/assets/imgs/gallery/drone3DGalleryHero/scene/carouselImages/img_15.jpg",
] as const;

export const CAROUSEL_IMAGES_DESKTOP: readonly string[] = [
  ...CAROUSEL_IMAGES,
  ...CAROUSEL_IMAGES.slice(0, 7),
] as const;
