// LAYOUTS
import { SplitLayout } from "@/app/components/common/layouts";
// DATAS
import { Area } from "@/app/utils/constants/data/treks/map/data";
// COMPONENTS
import { BackgroundImage } from "@/app/components/common/medias";
// COMPONENTS
import { HeroHeader, HeroIntro, HeroStats, SpiralHero } from "./components";

const backgroundImage = "/assets/imgs/treks/id/heroTrekID/img2.jpg"

type Props = {
  selectedArea: Area;
};

export default function HeroTrekIDSection({ selectedArea }: Props) {
  return (
    <BackgroundImage src={backgroundImage} alt="Parki Trek" priority>
      <HeroHeader selectedArea={selectedArea} />

      
            {/* Contenu */}
            <SplitLayout
              left={<HeroIntro selectedArea={selectedArea} />}
              right={<SpiralHero />}
              maxWidth="xl"
              mobilePosition="background"
              mobileOverlay
              mobileOverlayColor="rgba(0,0,0,.6)"
              mobileOverlayPaddingVertical={40}
              mobileOverlayPaddingHorizontal={24}
              mobileOverlayBorderRadius={20}
            />
      
            <HeroStats selectedArea={selectedArea} />
      {/* <HeroContent selectedArea={selectedArea} /> */}
    </BackgroundImage>
  );
}
