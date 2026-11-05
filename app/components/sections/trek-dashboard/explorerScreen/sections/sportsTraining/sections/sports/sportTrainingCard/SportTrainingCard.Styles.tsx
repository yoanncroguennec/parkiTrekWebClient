import { Box, Chip, List, styled } from "@mui/material";

export const ImageContainer = styled(Box)({
  position: "relative",
  overflow: "hidden",
});

export const CategoryChips = styled(Box)({
  position: "absolute",
  top: "12px",
  right: "12px",

  display: "grid",

  "& > *": {
    gridArea: "1 / 1",
  },
});

export const CategoryChip = styled(Chip)({
  width: "fit-content",
  justifySelf: "end",

  border: "none",

  fontWeight: 600,
  fontSize: "0.7rem",

  opacity: 0,
  pointerEvents: "none",
});

/* -------------------------------------------------- */
/* BENEFITS */
/* -------------------------------------------------- */

export const BenefitsList = styled(List)({
  padding: 0,

  "& .MuiListItem-root": {
    display: "flex",
    alignItems: "flex-start",

    gap: "10px",

    padding: "5px 0",
  },
});

export const BenefitCheck = styled("span")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  flexShrink: 0,

  color: "#2E7D32",

  fontSize: "18px",

  marginTop: "2px",
});

/* -------------------------------------------------- */
/* HINT DES CARTES VOISINES */
/* -------------------------------------------------- */

export const BenefitsHint = styled(Box)({
  minHeight: "145px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "20px",

  textAlign: "center",

  pointerEvents: "none",

  "& p": {
    margin: 0,

    color: "#777",
    fontSize: "0.9rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },
});

// import { Box, Chip, List, styled } from "@mui/material";

// export const ImageContainer = styled(Box)({
//   position: "relative",
//   overflow: "hidden",
// });

// export const CategoryChips = styled(Box)({
//   position: "absolute",

//   top: "12px",
//   right: "12px",

//   display: "grid",

//   "& > *": {
//     gridArea: "1 / 1",
//   },
// });

// export const CategoryChip = styled(Chip)({
//   width: "fit-content",

//   justifySelf: "end",

//   border: "none",

//   fontWeight: 600,
//   fontSize: "0.7rem",

//   opacity: 0,

//   pointerEvents: "none",
// });

// export const BenefitsList = styled(List)({
//   padding: 0,

//   "& .MuiListItem-root": {
//     display: "flex",
//     alignItems: "flex-start",
//     gap: "10px",
//     padding: "5px 0",
//   },
// });

// export const BenefitCheck = styled("span")({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",

//   flexShrink: 0,

//   color: "#2E7D32",
//   fontSize: "18px",

//   marginTop: "2px",
// });
