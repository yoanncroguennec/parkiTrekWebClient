// GOOD
// DATAS
import { galleryImages } from "../../data/Gallery.data";
// STYLES
import {
  GalleryContainer,
  GalleryImageWrapper,
  GalleryImage,
  SeeMoreButton,
  SeeMoreText,
} from "./Gallery.Styles";

export default function Gallery() {
  const displayedImages = galleryImages.slice(0, 5);

  return (
    <GalleryContainer>
      {displayedImages.map((image) => (
        <GalleryImageWrapper key={image.id}>
          <GalleryImage src={image.src} alt="" fill sizes="(max-width: 768px) 33vw, 200px" />
        </GalleryImageWrapper>
      ))}
      {galleryImages.length > 5 && (
        <SeeMoreButton variant="outlined">
          <SeeMoreText component="span">Voir plus</SeeMoreText>
        </SeeMoreButton>
      )}
    </GalleryContainer>
  );
}
