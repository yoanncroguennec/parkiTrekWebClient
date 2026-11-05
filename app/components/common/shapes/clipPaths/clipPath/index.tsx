import { Box } from "@mui/material";
import { ReactNode } from "react";

type ClipPathForm =
  | "triangle_1"
  | "arrow_1"
  | "arrow_2"
  | "circle"
  | "ellipse"
  | "inset_1"
  | "comic_strip_speech_bubble"
  | "star";

type Props = {
  form: ClipPathForm;
  bg?: string;
  width?: string;
  height?: string;
  children?: ReactNode;
};

const clipPaths: Record<ClipPathForm, string> = {
  triangle_1: "polygon(0 100%, 50% 0, 100% 100%)",

  arrow_1: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)",

  arrow_2: "polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0 50%)",

  circle: "circle(50% at 50% 50%)",

  ellipse: "ellipse(30% 20% at 50% 50%)",

  inset_1: "inset(25% 0 round 0 25%)",

  comic_strip_speech_bubble:
    "polygon(0% 0%,100% 0%,100% 75%,75% 75%,75% 100%,50% 75%,0% 75%)",

  star: "polygon(50% 0%,63% 38%,100% 38%,69% 59%,82% 100%,50% 75%,18% 100%,31% 59%,0 38%,37% 38%)",
};

export default function ClipPath({
  form,
  bg = "primary.main",
  width = "200px",
  height = "200px",
  children,
}: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: form === "circle" ? height : width,
        height,
        bgcolor: children ? undefined : bg,
        clipPath: clipPaths[form],

        "& > img, & > video": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      }}
    >
      {children}
    </Box>
  );
}

// import { Box } from "@mui/material";
// import React from "react";

// type Props = {
//   bg?: string;
//   form: string;
//   height?: string;
//   width?: string;
// };

// export default function ClipPath({ bg= "primary.main", form, height = "200px", width = "200px" }: Props) {
//   if ((form === "triangle_1")) {
//     return (
//       <Box
//         sx={{
//           bgcolor: bg,
//           clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
//           height: height,
//           width: width,
//         }}
//       />
//     );
//   } else if ((form === "arrow_1")) {
//     return (
//       <Box
//         sx={{
//           bgcolor: bg,
//           clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)",
//           height: height,
//           width: width,
//         }}
//       />
//     );
//   } else if ((form === "arrow_2")) {
//     return (
//       <Box
//         sx={{
//           bgcolor: bg,
//           clipPath: "polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0 50%)",
//           height: height,
//           width: width,
//         }}
//       />
//     );
//   } else if ((form === "circle")) {
//     return (
//       <Box
//         sx={{
//           bgcolor: bg,
//           clipPath: "circle(50% at 50% 50%)",
//           height: height,
//           width: height,
//         }}
//       />
//     );
//   } else if ((form === "ellipse")) {
//     return (
//       <Box
//         sx={{
//           bgcolor: bg,
//           clipPath: "ellipse(30% 20% at 50% 50%)",
//           height: height,
//           width: width,
//         }}
//       />
//     );
//   } else if ((form === "")) {
//     return (
//       <Box
//         sx={{
//           bgcolor: bg,
//           clipPath: "inset(25% 0 round 0 25%)",
//           height: height,
//           width: width,
//         }}
//       />
//     );
//   } else if ((form === "comic strip speech bubble")) {
//     return (
//       <Box
//         sx={{
//           bgcolor: bg,
//           clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)",
//           height: height,
//           width: width,
//         }}
//       />
//     );
//   } else if ((form === "star")) {
//     return (
//       <Box
//         sx={{
//           bgcolor: bg,
//           clipPath: "polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)",
//           height: height,
//           width: width,
//         }}
//       />
//     );
//   }
// }
