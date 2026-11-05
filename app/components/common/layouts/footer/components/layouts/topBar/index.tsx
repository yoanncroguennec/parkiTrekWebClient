import Image from "next/image";
import { Typography } from "@mui/material";

import { socialLinks } from "../../../data/footer.data";

import {
  TopBarContainer,
  LogoContainer,
  SocialContainer,
  SocialLinksContainer,
  SocialLink,
  Divider,
} from "./TopBar.Styles";

export default function TopBar() {
  return (
    <TopBarContainer>
      {/* LOGO + TEXTE */}
      <LogoContainer>
        <Image
          src="/assets/imgs/components/common/layouts/footer/logo_2.png"
          alt="Logo - Parki Trek"
          width={130}
          height={80}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />

        <Typography
          sx={{
            color: "#FFF",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
          variant="h6"
        >
          Parki trek
        </Typography>

        <Typography
          sx={{
            color: "#FFF",
            fontWeight: "bold",
          }}
          variant="h6"
        >
          Explorer ● Sensibiliser parkinson ● Agir
        </Typography>
      </LogoContainer>

      {/* RÉSEAUX + POSITION */}
      <SocialContainer>
        {/* SOCIAL */}
        <SocialLinksContainer>
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <SocialLink key={label} href={href} aria-label={label}>
              <Icon />
            </SocialLink>
          ))}
        </SocialLinksContainer>

        {/* COORDONNÉES */}
        <Typography
          sx={{
            color: "#FFF",
            fontWeight: "bold",
          }}
          variant="h6"
        >
          46.5131° N | 2.7515° W
        </Typography>

        <Divider />
      </SocialContainer>
    </TopBarContainer>
  );
}
