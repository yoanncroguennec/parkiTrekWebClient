// GOOD
"use client";

// STYLES
import {
  SponsorsCardContainer,
  SponsorsCardTitle,
  SponsorsList,
  SponsorItem,
  SponsorAvatar,
  SponsorName,
} from "./SponsorsCard.Styles";

type Props = {
  trekSponsors: string[];
};

export default function SponsorsCard({ trekSponsors }: Props) {
  return (
    <SponsorsCardContainer>
      <SponsorsCardTitle component="h2">Sponsors & partenaires</SponsorsCardTitle>

      <SponsorsList>
        {trekSponsors.map((sponsor) => (
          <SponsorItem key={sponsor}>
            <SponsorAvatar>{sponsor[0]}</SponsorAvatar>

            <SponsorName component="span">{sponsor}</SponsorName>
          </SponsorItem>
        ))}
      </SponsorsList>
    </SponsorsCardContainer>
  );
}
