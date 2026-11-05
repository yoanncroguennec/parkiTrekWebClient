// STYLES
import {
  HeaderDescription,
  HeaderEyebrow,
  HeaderTitle,
  TimelineHeaderContainer,
} from "./TimelineHeader.Styles";

export default function TimelineHeader() {
  return (
    <TimelineHeaderContainer>
      <HeaderEyebrow>
        <span />
        Un mois
      </HeaderEyebrow>

      <HeaderTitle>
        Une histoire
        <br />
        d&apos; <em>émotions.</em>
      </HeaderTitle>

      <HeaderDescription>
        A travers un chemin se dessine une histoire remplie d&apos;aventure
        <br />
        accompagnée de la maladie de parkinson
      </HeaderDescription>
    </TimelineHeaderContainer>
  );
}
