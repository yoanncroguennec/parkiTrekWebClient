// STYLES
import {
  FooterArrow,
  FooterLine,
  FooterText,
  TimelineFooterContainer,
} from "./TimelineFooter.Styles";

export default function TimelineFooter() {
  return (
    <TimelineFooterContainer>
      <FooterLine />
      <FooterText>
        L&apos;AVENTURE CONTINUE
        <br />
        GRÂCE À VOUS
      </FooterText>
      <FooterArrow>↓</FooterArrow>
    </TimelineFooterContainer>
  );
}
