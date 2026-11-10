import {
  HeaderContainer,
  HeaderOverlay,
  HeaderTitle,
  HeaderBadge,
  HeaderBadgeSvg,
} from "./Header.Styles";

import { C } from "../../data/calendar.data";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderOverlay>
        <HeaderTitle component="h1">
          Les rendez-vous
          <br />
          qui font avancer
          <br />
          L&apos;aventure.
        </HeaderTitle>

        {/* Badge circulaire */}
        <HeaderBadge>
          <HeaderBadgeSvg viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="42" fill="none" stroke={C.greenDark} strokeDasharray="2 5" />

            <path
              d="M22 68 L39 52 L50 60 L75 30"
              fill="none"
              stroke={C.greenDark}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle cx="75" cy="30" r="5" fill={C.green} stroke={C.greenDark} strokeWidth="1.5" />

            <circle cx="22" cy="68" r="3" fill={C.dark} />
          </HeaderBadgeSvg>
        </HeaderBadge>
      </HeaderOverlay>
    </HeaderContainer>
  );
}
