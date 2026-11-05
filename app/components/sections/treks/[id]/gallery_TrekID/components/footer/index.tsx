import { FooterContainer, ProgressContainer, ProgressBar } from "./Footer.Styles";

interface FooterProps {
  progress: number;
}

export default function Footer({ progress }: FooterProps) {
  return (
    <FooterContainer>
      <ProgressContainer>
        <ProgressBar
          variant="determinate"
          value={Math.min(100, Math.max(0, progress))}
          aria-label="Progression dans la galerie"
          aria-valuetext={`${Math.round(progress)} %`}
        />
      </ProgressContainer>
    </FooterContainer>
  );
}
