import { Typography } from "@mui/material";
import { photos } from "../../data";
import { FiArrowUpRight } from "react-icons/fi";
import type { RefObject } from "react";

import {
  ContentTrack,
  PhotoCard,
  GalleryImage,
  ImageOverlay,
  PhotoHeader,
  PhotoCategory,
  PhotoNumber,
  PhotoContent,
  PhotoTextContent,
  PhotoDescription,
  PhotoTitle,
  GalleryArrow,
} from "./Content.Styles";

interface ContentProps {
  trackRef: RefObject<HTMLDivElement | null>;
}

export default function Content({ trackRef }: ContentProps) {
  return (
    // "trackRef" (Référence) & "<div>" (Élément HTML) : Déplace horizontalement toutes les cartes."
    <ContentTrack ref={trackRef}>
      {photos.map((photo, index) => (
        <PhotoCard component="article" key={photo.src}>
          {/* IMAGE */}
          <GalleryImage
            className="gallery-image"
            src={photo.src}
            alt={photo.title}
            fill
            loading="lazy"
            priority={index === 0}
            // (max-width: 899px)	Si l'écran fait au maximum 899 px
            // Mobile, écran de 390 px : 82vw = 319,8 px. => Image occupe 82 % de la largeur de l'écran
            // Ordinateur, écran de 1440 px : 68vw = 979,2 px => Image occupe 68 % de la largeur de l'écran
            sizes="(max-width: 899px) 82vw, 68vw"
          />

          {/* DÉGRADÉ */}
          <ImageOverlay />

          {/* CATÉGORIE ET NUMÉRO */}
          <PhotoHeader>
            <PhotoCategory>
              <Typography
                component="span"
                sx={{ color: "#FFFFFF" }}
              >
                {photo.category}
              </Typography>
            </PhotoCategory>

            <PhotoNumber component="span">
              {photo.number}
            </PhotoNumber>
          </PhotoHeader>

          {/* CONTENU */}
          <PhotoContent>
            <PhotoTextContent>
              <PhotoDescription>{photo.description}</PhotoDescription>
              <PhotoTitle component="h3">{photo.title}</PhotoTitle>
            </PhotoTextContent>

            <GalleryArrow
              className="gallery-arrow"
              aria-label={`Explorer : ${photo.title}`}
            >
              <FiArrowUpRight size={22} />
            </GalleryArrow>
          </PhotoContent>
        </PhotoCard>
      ))}
    </ContentTrack>
  );
}