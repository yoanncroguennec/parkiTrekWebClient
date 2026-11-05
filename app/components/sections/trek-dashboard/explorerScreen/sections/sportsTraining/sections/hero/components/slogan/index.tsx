import { HeroSloganContainer, SloganStyles, SloganLine } from "./Slogan.Styles";

export default function Slogan() {
  return (
    <HeroSloganContainer>
      <SloganStyles component="h3">
        Plus qu&apos;un trek,
        <br />
        un élan de vie !
      </SloganStyles>

      <SloganLine viewBox="0 0 200 25">
        <path
          d="M2 17 C45 5, 105 3, 198 8"
          fill="none"
          stroke="#2fff13"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </SloganLine>
    </HeroSloganContainer>
  );
}
