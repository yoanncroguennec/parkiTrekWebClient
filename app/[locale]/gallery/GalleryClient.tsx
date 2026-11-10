"use client";

import { CenterReveal } from "@/app/components/common/animations";
import { ContainerApp } from "@/app/components/common/layouts";
import {
  Drone3DGalleryHeroSection,
} from "@/app/components/sections/gallery";

const sections = [
  <Drone3DGalleryHeroSection key="drone" />,
];

export default function GalleryClient() {
  return (
    <>
    <CenterReveal />
      <ContainerApp>{sections}</ContainerApp>
    </>
  );
}
