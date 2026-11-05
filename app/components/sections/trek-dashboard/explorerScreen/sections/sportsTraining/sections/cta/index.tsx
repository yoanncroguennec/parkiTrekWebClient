import { Divider, Stack, Typography } from "@mui/material";
// DATAS
import { trainingBenefits } from "./data/trainingBenefits";
// ICONS
import { BsArrowRight } from "react-icons/bs";
// STYLES
import {
  CTASection,
  CTATitle,
  CTAItem,
  CTAIcon,
  CTAJoin,
  JoinButton,
  BrushBackground,
  JoinText,
  Arrow,
  HeroSlogan,
  Slogan,
  SloganLine,
  CTAItems,
} from "./CTA.Styles";

export default function CTA() {
  return (
    <>
      <CTASection>
        <CTATitle>
          <Typography
            variant="h6"
            sx={{
              fontSize: "22px",
              fontWeight: "bold",
              letterSpacing: "1px",
              lineHeight: 1.05,
            }}
          >
            Se préparer aujourd&apos;hui
            <br />
            pour aller{" "}
            <Typography
              component="span"
              sx={{
                color: "green",
                fontSize: "inherit",
                fontWeight: "inherit",
                letterSpacing: "inherit",
              }}
            >
              plus loin demain
            </Typography>
          </Typography>

          <Divider />
        </CTATitle>

        <CTAItems itemCount={trainingBenefits.length}>
          {trainingBenefits.map(({ id, icon: Icon, color, text }) => (
            <CTAItem key={id}>
              <CTAIcon iconColor={color}>
                <Icon size={35} />
              </CTAIcon>

              <Typography
                variant="body1"
                sx={{
                  whiteSpace: "pre-line",
                }}
              >
                {text}
              </Typography>
            </CTAItem>
          ))}
        </CTAItems>

        <CTAJoin>
          <JoinButton>
            <BrushBackground viewBox="0 0 500 100" preserveAspectRatio="none">
              <path
                d="
        M12 42
        C25 30, 45 28, 70 27
        C160 20, 300 18, 465 28
        C482 29, 492 38, 486 50
        C480 62, 490 69, 475 73
        C370 84, 210 82, 70 78
        C42 77, 18 80, 9 68
        C2 59, 4 50, 12 42
        Z
      "
                fill="#32A852"
              />

              {/* petites irrégularités du pinceau */}
              <path
                d="M8 47 C25 40, 45 40, 75 38"
                fill="none"
                stroke="#32A852"
                strokeWidth="8"
                strokeLinecap="round"
              />

              <path
                d="M15 70 C50 77, 90 73, 120 75"
                fill="none"
                stroke="#32A852"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </BrushBackground>

            <JoinText>Rejoignez le mouvement</JoinText>
            <Arrow>
              <BsArrowRight color="#FFF" size={35} />
            </Arrow>
          </JoinButton>

          {/* SLOGAN */}
          <HeroSlogan>
            <Slogan>Ensemble contre Parkinson</Slogan>

            <SloganLine viewBox="0 0 200 25">
              <path
                d="M2 17 C45 5, 105 3, 198 8"
                fill="none"
                stroke="#2fff13"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </SloganLine>
          </HeroSlogan>
        </CTAJoin>
      </CTASection>

      <Stack
        sx={{
          backgroundImage: `url("/assets/imgs/trek-dashboard/explorerScreen/sportsTraingSessions/plantDecoration_1.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderBottomLeftRadius: "25px",
          borderBottomRightRadius: "25px",
          height: "400px",
          width: "100%",
        }}
      ></Stack>
    </>
  );
}
