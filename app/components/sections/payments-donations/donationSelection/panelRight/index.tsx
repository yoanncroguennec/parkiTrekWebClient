"use client";

import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import AwardInput from "../awardInput";
// import { Tooltip } from "@/app/components/common/ui";
// import CurvedPath from "@/app/components/common/ui/graphics/paths/curvedPath";
// import ClipPath from "@/app/components/common/ui/graphics/paths/clip-path";
import {
  Btn_DonationCard,
  // Btn_Video_BottomRight,
  DonationCard,
  DonationSelector,
  Header,
  Icon_DonationCard,
  Root,
  Root_DonationCards,
  Root_DonationTabs,
  RootCard_DonationSelection,
  Stack_DonationTabs,
  Typo_DonationTabs,
} from "./panelRight.Styles";
// DATAS
// ICONS

import ImpactSection from "../impactSection";
import FloatingStoryCTA from "../floatingStoryCTA";
// ICONS
import { FaHeart, FaSearch } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { TbLockCheck } from "react-icons/tb";
import { donationPlans } from "../../supportShowcase/components/content/data/supportShowcase.data";

export default function PanelRight() {
  const [selectedDonationType, setSelectedDonationType] = useState<number>(1);

  // RESPONSIVE
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  // const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Root>
      <RootCard_DonationSelection>
        {isExtraLargeScreen && (
          <Header>
            <Typography sx={{ textAlign: "center" }} variant="body2">
              CHAQUE GESTE
              <br />
              TRACE NOTRE CHEMIN
            </Typography>
            <FaHeart color="#F00" size={50} />
          </Header>
        )}

        <DonationSelector>
          {/* DONATION TABS */}
          <Root_DonationTabs>
            {donationPlans.map(({ id, label }) => (
              <Stack_DonationTabs
                key={id}
                donationId={id}
                onClick={() => setSelectedDonationType(id)}
                selectedDonationType={selectedDonationType}
              >
                <Typo_DonationTabs
                  donationId={id}
                  selectedDonationType={selectedDonationType}
                >
                  {label}
                </Typo_DonationTabs>
              </Stack_DonationTabs>
            ))}
          </Root_DonationTabs>

          {/* DONATION CARDS */}
          <Root_DonationCards>
            {donationPlans
              .find((item) => item.id === selectedDonationType)
              ?.values.map(({ id, icon: Icon, value, desc }) => (
                <DonationCard key={id}>
                  <Icon_DonationCard>
                    <Icon color="#1138e7" size={50} />
                  </Icon_DonationCard>

                  <Typography variant="h5">{value}€</Typography>

                  <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                    {desc}
                  </Typography>

                  <Btn_DonationCard variant="contained">
                    <Icon color="#1138e7" size={50} />
                  </Btn_DonationCard>
                </DonationCard>
              ))}
          </Root_DonationCards>
        </DonationSelector>

        <AwardInput
          placeholder="Montant personnalisé"
          iconStart={FaSearch}
          iconEnd={BsArrowRight}
        />
        <Typography sx={{}} variant="h6">
          Soutenez selon vos moyens
        </Typography>
        <Stack
          sx={{
            alignItems: "center",
            bottom: "15px",
            flexDirection: "row",
            gap: 1,
            justifyContent: "center",
            position: "absolute",
            right: "35px",
          }}
        >
          <TbLockCheck color="#24ea0a" size={30} />
          <Typography
            sx={{ color: "#24ea0a", fontWeight: "bold" }}
            variant="h6"
          >
            Paiement sécurisé (SSL)
          </Typography>
        </Stack>
      </RootCard_DonationSelection>

      {!isDesktop && <ImpactSection />}

      {isDesktop && <FloatingStoryCTA />}
    </Root>
  );
}
