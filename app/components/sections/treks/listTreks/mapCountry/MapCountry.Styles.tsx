import { Box, BoxProps, styled } from "@mui/material";

interface Animated_Card_Map {
  isExpanded: boolean;
}

export const MapCountryContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isExpanded",
})<BoxProps & Animated_Card_Map>(({ isExpanded, theme }) => ({
  background: `
      radial-gradient(
        circle at top left,
        rgba(34,197,94,.15),
        transparent 35%
      ),
      linear-gradient(
        180deg,
        #f8fffb 0%,
        #eefbf3 50%,
        #e6f7ee 100%
      )
    `,
  borderRadius: 25,
  boxShadow: `
        0 60px 120px rgba(0,0,0,.18),
        0 20px 40px rgba(0,0,0,.08)
      `,
  filter: "blur(0px)",
  height: "90vh",
  overflow: "hidden",
  position: "relative",
  width: "90vw",
  zIndex: 2,
  [theme.breakpoints.up("md")]: {
    borderRadius: isExpanded ? 0 : 50,
    boxShadow: isExpanded
      ? `
        0 60px 120px rgba(0,0,0,.18),
        0 20px 40px rgba(0,0,0,.08)
      `
      : `
        0 80px 140px rgba(0,0,0,.22),
        0 25px 60px rgba(0,0,0,.12)
      `,
    cursor: "pointer",
    filter: isExpanded ? "blur(0px)" : "drop-shadow(0 80px 120px rgba(0,0,0,.25))",
    height: isExpanded ? "100vh" : "80vh",
    transform: isExpanded
      ? `
        perspective(3000px)
        rotateX(0deg)
        rotateY(0deg)
        rotateZ(0deg)
        translateY(0px)
        scale(1)
      `
      : `
        perspective(3000px)
        rotateX(22deg)
        rotateY(-15deg)
        rotateZ(3deg)
        translateY(-40px)
        scale(.88)
      `,
    transition: `
    transform 1.2s cubic-bezier(.22,1,.36,1),
    width .8s cubic-bezier(.22,1,.36,1),
    height .8s cubic-bezier(.22,1,.36,1),
    border-radius .8s cubic-bezier(.22,1,.36,1),
    box-shadow .8s cubic-bezier(.22,1,.36,1),
    filter .8s cubic-bezier(.22,1,.36,1)
  `,
    width: isExpanded ? "100vw" : "80vw",
  },
}));

// import { Box, BoxProps, styled } from "@mui/material";

// interface Animated_Card_Map {
//   isExpanded: boolean;
// }

// export const MapCountryContainer = styled(Box, {
//   shouldForwardProp: (prop) => prop !== "isExpanded",
// })<BoxProps & Animated_Card_Map>(({ isExpanded, theme }) => ({
//   background: `
//       radial-gradient(
//         circle at top left,
//         rgba(34,197,94,.15),
//         transparent 35%
//       ),
//       linear-gradient(
//         180deg,
//         #f8fffb 0%,
//         #eefbf3 50%,
//         #e6f7ee 100%
//       )
//     `,
//   borderRadius: 25,
//   boxShadow: `
//         0 60px 120px rgba(0,0,0,.18),
//         0 20px 40px rgba(0,0,0,.08)
//       `,
//   filter: "blur(0px)",
//   height: "90vh",
//   overflow: "hidden",
//   position: "relative",
//   width: "90vw",
//   zIndex: 2,

//   [theme.breakpoints.up("md")]: {
//     borderRadius: isExpanded ? 0 : 50,
//     boxShadow: isExpanded
//       ? `
//         0 60px 120px rgba(0,0,0,.18),
//         0 20px 40px rgba(0,0,0,.08)
//       `
//       : `
//         0 80px 140px rgba(0,0,0,.22),
//         0 25px 60px rgba(0,0,0,.12)
//       `,
//     cursor: "pointer",
//     filter: isExpanded
//       ? "blur(0px)"
//       : "drop-shadow(0 80px 120px rgba(0,0,0,.25))",
//     height: isExpanded ? "100vh" : "80vh",
//     transform: isExpanded
//       ? `
//         perspective(3000px)
//         rotateX(0deg)
//         rotateY(0deg)
//         rotateZ(0deg)
//         translateY(0px)
//         scale(1)
//       `
//       : `
//         perspective(3000px)
//         rotateX(22deg)
//         rotateY(-15deg)
//         rotateZ(3deg)
//         translateY(-40px)
//         scale(.88)
//       `,
//     transition: `
//     transform 1.2s cubic-bezier(.22,1,.36,1),
//     width .8s cubic-bezier(.22,1,.36,1),
//     height .8s cubic-bezier(.22,1,.36,1),
//     border-radius .8s cubic-bezier(.22,1,.36,1),
//     box-shadow .8s cubic-bezier(.22,1,.36,1),
//     filter .8s cubic-bezier(.22,1,.36,1)
//   `,
//     width: isExpanded ? "100vw" : "80vw",
//   },
// }));
