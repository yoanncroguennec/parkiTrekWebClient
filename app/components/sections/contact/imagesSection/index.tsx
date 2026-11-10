"use client";

import Image from "next/image";
// DATAS
import { contactImages } from "./data/imagesContact.data";
// TYPES
import { RegisterIntroImage } from "../types/contactSection.types";
// STYLES
import { IntroImage } from "./ImagesSection.Styles";

type ImagesSectionProps = {
  registerIntroImage: RegisterIntroImage;
};

export default function ImagesSection({ registerIntroImage }: ImagesSectionProps) {
  return (
    <>
      {contactImages.map((src, index) => (
        <IntroImage
          key={index}
          ref={(element: HTMLDivElement | null) => {
            registerIntroImage(index, element);
          }}
        >
          <Image
            src={src}
            alt="Randonneurs marchant sur un sentier de montagne"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </IntroImage>
      ))}
    </>
  );
}
