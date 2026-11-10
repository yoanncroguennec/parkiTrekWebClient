// GOOD
import { useMediaQuery, useTheme } from "@mui/material";
// DATAS
import { trainingBenefits } from "./data/trainingBenefits.data";
// STYLES
import {
  Marquee,
  MarqueeTrack,
  MarqueeItem,
  TrainingMarqueeIcon,
} from "./AutoScrollingText.Styles";

export default function AutoScrollingText() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Marquee>
      <MarqueeTrack>
        {[...trainingBenefits, ...trainingBenefits, ...trainingBenefits].map(
          ({ id, icon: Icon, color, text }, index) => (
            <MarqueeItem key={`${id}-${index}`}>
              <TrainingMarqueeIcon sx={{ color }}>
                <Icon size={isDesktop ? 28 : 24} />
              </TrainingMarqueeIcon>

              {text.replace("\n", " ")}

              <TrainingMarqueeIcon sx={{ color }}>
                <Icon size={isDesktop ? 28 : 24} />
              </TrainingMarqueeIcon>
            </MarqueeItem>
          )
        )}
      </MarqueeTrack>
    </Marquee>
  );
}
