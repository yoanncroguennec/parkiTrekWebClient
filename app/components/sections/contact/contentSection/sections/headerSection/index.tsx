import type { RefObject } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
// STYLES
import { HeaderContainer, SubTitle, Title } from "./HeaderSection.Styles";

type HeaderSectionProps = {
  titleRef: RefObject<HTMLHeadingElement | null>;

  subtitleRef: RefObject<HTMLParagraphElement | null>;
};

export default function HeaderSection({ titleRef, subtitleRef }: HeaderSectionProps) {
  // RESPONSIVE
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <HeaderContainer>
      {isDesktop ? (
        <>
          <Title component="h1" ref={titleRef} gutterBottom>
            Là où les chemins se croisent
            <br />
            naissent les plus belles histoires.
          </Title>
          <SubTitle component="p" ref={subtitleRef} gutterBottom>
            Pour une collaboration, un partenariat ou un simple échange, nous serons ravis de vous
            lire et de construire ensemble de nouveaux horizons.
          </SubTitle>
        </>
      ) : (
        <>
          <Title component="h1" ref={titleRef} gutterBottom>
            Les chemins se croisent
            <br />
            les histoires commencent.
          </Title>
          <SubTitle component="p" ref={subtitleRef} gutterBottom>
            Pour une collaboration, un partenariat ou un simple échange, nous serons ravis de vous
            lire et d&apos;échanger avec vous.
          </SubTitle>
        </>
      )}
    </HeaderContainer>
  );
}
