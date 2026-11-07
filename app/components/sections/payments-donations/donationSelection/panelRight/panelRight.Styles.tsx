import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Stack,
  StackProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";

type Stack_DonationTabs_Props = {
  donationId: number;
  selectedDonationType: number;
};

type Typo_DonationTabs_Props = {
  donationId: number;
  selectedDonationType: number;
};

export const Root = styled(Stack)<StackProps>(() => ({
  alignItems: "center",
  flexDirection: "column",
  // minHeight: "100vh",
  justifyContent: "center",
  position: "relative",
  // width: "50%",
}));

export const RootCard_DonationSelection = styled(Box)<BoxProps>(
  ({ theme }) => ({
    alignItems: "center",
    background:
      "linear-gradient(135deg, rgba(255,255,255,.55), rgba(255,255,255,.18))",
    backdropFilter: "blur(30px) saturate(180%)",
    border: "1px solid rgba(255,255,255,.35)",
    borderRadius: "32px",
    boxShadow: `
                0 30px 60px rgba(15,23,42,.15),
                inset 0 1px 1px rgba(255,255,255,.75),
                inset 0 -1px 1px rgba(255,255,255,.1)
                `,
    display: "flex",
    flexDirection: "column",
    // gap: 20,
    justifyContent: "center",
    padding: "50px",
    zIndex: 100,
    [theme.breakpoints.up("md")]: {
      filter: "blur(1.5px)",
      opacity: 0.55,
      perspective: "2200px",
      transform: "rotateZ(3deg) skewY(10deg) translateY(-20px)",
      transformStyle: "preserve-3d",
      transition: `
                transform .8s cubic-bezier(.19,1,.22,1),
                opacity .45s ease,
                filter .45s ease
                `,
      "&:hover": {
        boxShadow: `
        0 45px 80px rgba(15,23,42,.22),
        inset 0 1px 1px rgba(255,255,255,.8),
        inset 0 -1px 1px rgba(255,255,255,.12)
      `,
        filter: "blur(0px)",
        opacity: 1,
        transform: "rotateZ(0deg) translateY(0) scale(1.03)",
      },
    },
  }),
);

export const Header = styled(Stack)<StackProps>(() => ({
  alignItems: "center",
  borderLeft: "2px solid #FFF",
  borderRight: "2px solid #FFF",
  borderTop: "2px solid #FFF",
  borderRadius: "100%",
  flexDirection: "column",
  height: "180px",
  justifyContent: "center",
  width: "250px",
}));

/////////////////////////
/// DONATION SELECTOR ///
/////////////////////////
export const DonationSelector = styled(Stack)<StackProps>(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    flexDirection: "column",
  },
}));

/////////////////////
/// DONATION TABS ///
/////////////////////
export const Root_DonationTabs = styled(Stack)<StackProps>(({ theme }) => ({
  gap: theme.spacing(2),
  flexDirection: "column",

  // Mobile
  position: "sticky",
  top: 70,
  alignSelf: "flex-start",
  zIndex: 10,

  [theme.breakpoints.up("md")]: {
    position: "static",
    flexDirection: "row",
  },
}));

export const Stack_DonationTabs = styled(Stack, {
  shouldForwardProp: (prop) =>
    prop !== "donationId" && prop !== "selectedDonationType",
})<StackProps & Stack_DonationTabs_Props>(
  ({ donationId, selectedDonationType, theme }) => ({
    alignItems: "center",
    justifyContent: "center",

    background:
      selectedDonationType === donationId
        ? "rgba(13,5,5,.2)"
        : "rgba(255,255,255,.3)",

    borderRadius: 20,
    cursor: "pointer",
    padding: theme.spacing(2.5),
    transition: "all .3s ease",

    "&:hover": {
      background: "rgba(255,255,255,.45)",
    },
  }),
);

export const Typo_DonationTabs = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "donationId" && prop !== "selectedDonationType",
})<TypographyProps & Typo_DonationTabs_Props>(
  ({ theme, donationId, selectedDonationType }) => ({
    color: selectedDonationType === donationId ? "#1a0ce8d0" : "#000",

    // MOBILE
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    transform: "rotate(180deg)",

    // DESKTOP
    [theme.breakpoints.up("md")]: {
      writingMode: "horizontal-tb",
      textOrientation: "initial",
      transform: "none",
    },
  }),
);

///////////////////////
/// DONATIONS CARDS ///
///////////////////////
export const Root_DonationCards = styled(Stack)<StackProps>(({ theme }) => ({
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    gap: theme.spacing(2),
  },
}));

export const DonationCard = styled(Stack)<StackProps>(({ theme }) => ({
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  borderRadius: 20,
  background: "rgba(255,255,255,.3)",
  transition: ".3s",
  "&:hover": {
    transform: "translateY(-6px)",
  },
}));

export const Icon_DonationCard = styled(Stack)<StackProps>(() => ({
  alignItems: "center",
  background: "rgba(255, 255, 255, 0.5)",
  borderRadius: "50%",
  justifyContent: "center",
  height: "35px",
  width: "35px",
}));

export const Btn_DonationCard = styled(Button)<ButtonProps>(({ theme }) => ({
  alignItems: "center",
  background: "rgba(255, 255, 255, 0.5)",
  borderRadius: "100%",
  justifyContent: "center",
  // height: "35px",
  // width: "35px",
  padding: theme.spacing(1.5),
  minWidth: 0,
}));

////////////////////////
export const Btn_Video_BottomRight = styled(Button)<ButtonProps>(() => ({
  alignItems: "center",
  bottom: "50px",
  display: "flex",
  flexDirection: "row",
  gap: 1,
  justifyContent: "center",
  position: "absolute",
  right: "35px",
}));
