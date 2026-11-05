export default function TimelineItem() {
  return null;
}

// import { Box, Button, Chip, Typography } from "@mui/material";

// import { FiArrowUpRight } from "react-icons/fi";
// // import { TimelineItem } from "..";

// type TimelineItemProps = {
//   item: TimelineItem;
//   index: number;
//   isMobile: boolean;
// };

// export function TimelineItem({ item, index }: TimelineItemProps) {
//   const isEven = index % 2 === 0;

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         display: "grid",
//         gridTemplateColumns: {
//           xs: "1fr",
//           md: "1fr 80px 1fr",
//         },
//         minHeight: {
//           xs: "auto",
//           md: 620,
//         },
//         pb: {
//           xs: 14,
//           md: 20,
//         },
//       }}
//     >
//       {/* ========================================= */}
//       {/* DATE */}
//       {/* ========================================= */}

//       <Box
//         sx={{
//           gridColumn: {
//             xs: "1",
//             md: isEven ? "1" : "3",
//           },
//           gridRow: {
//             xs: "1",
//             md: "1",
//           },
//           alignSelf: "start",
//           pt: {
//             xs: 0,
//             md: 2,
//           },
//           pl: {
//             xs: 7,
//             md: 0,
//           },
//           pr: {
//             xs: 0,
//             md: isEven ? 8 : 0,
//           },
//           textAlign: {
//             xs: "left",
//             md: isEven ? "right" : "left",
//           },
//         }}
//       >
//         <Typography
//           sx={{
//             fontSize: {
//               xs: 42,
//               md: 64,
//             },
//             lineHeight: 0.9,
//             letterSpacing: "-0.06em",
//             fontWeight: 500,
//           }}
//         >
//           {item.month}
//         </Typography>

//         <Typography
//           sx={{
//             mt: 1.5,
//             fontSize: 10,
//             letterSpacing: "0.18em",
//             textTransform: "uppercase",
//             opacity: 0.4,
//           }}
//         >
//           {item.date}
//         </Typography>
//       </Box>

//       {/* ========================================= */}
//       {/* CENTRAL ICON */}
//       {/* ========================================= */}

//       <Box
//         sx={{
//           position: {
//             xs: "absolute",
//             md: "relative",
//           },
//           top: {
//             xs: 0,
//             md: "auto",
//           },
//           left: {
//             xs: 30,
//             md: "auto",
//           },
//           gridColumn: {
//             md: "2",
//           },
//           gridRow: {
//             md: "1",
//           },
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "flex-start",
//           zIndex: 3,
//         }}
//       >
//         <Box
//           sx={{
//             width: 54,
//             height: 54,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             borderRadius: "50%",
//             backgroundColor: "background.default",
//             border: "1px solid",
//             borderColor: "rgba(255,255,255,.16)",
//             color: "primary.main",
//             fontSize: 21,
//             boxShadow: "0 0 0 10px rgba(255,255,255,.015)",
//           }}
//         >
//           {item.icon}
//         </Box>
//       </Box>

//       {/* ========================================= */}
//       {/* CONTENT */}
//       {/* ========================================= */}

//       <Box
//         sx={{
//           gridColumn: {
//             xs: "1",
//             md: isEven ? "3" : "1",
//           },
//           gridRow: {
//             xs: "2",
//             md: "1",
//           },
//           mt: {
//             xs: 6,
//             md: 10,
//           },
//           pl: {
//             xs: 7,
//             md: isEven ? 8 : 0,
//           },
//           pr: {
//             xs: 0,
//             md: isEven ? 0 : 8,
//           },
//         }}
//       >
//         {/* Image */}

//         <Box
//           sx={{
//             position: "relative",
//             aspectRatio: "16 / 10",
//             overflow: "hidden",
//             borderRadius: {
//               xs: 3,
//               md: 5,
//             },
//             backgroundColor: "rgba(255,255,255,.04)",
//             "& img": {
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               display: "block",
//               transition: "transform 1s cubic-bezier(.16,1,.3,1)",
//             },
//             "&:hover img": {
//               transform: "scale(1.06)",
//             },
//           }}
//         >
//           <Box
//             component="img"
//             src={item.image}
//             alt={item.title}
//             loading="lazy"
//           />

//           {/* Overlay */}

//           <Box
//             sx={{
//               position: "absolute",
//               inset: 0,
//               background:
//                 "linear-gradient(to top, rgba(0,0,0,.45), transparent 55%)",
//               pointerEvents: "none",
//             }}
//           />

//           {/* Index */}

//           <Typography
//             sx={{
//               position: "absolute",
//               top: 20,
//               left: 20,
//               fontSize: 10,
//               letterSpacing: ".18em",
//               color: "#fff",
//               opacity: 0.7,
//             }}
//           >
//             {String(index + 1).padStart(2, "0")}
//           </Typography>
//         </Box>

//         {/* Text */}

//         <Box sx={{ mt: 5 }}>
//           <Typography
//             component="h3"
//             sx={{
//               fontSize: {
//                 xs: 34,
//                 md: 46,
//               },
//               lineHeight: 0.95,
//               letterSpacing: "-0.055em",
//               fontWeight: 500,
//             }}
//           >
//             {item.title}
//           </Typography>

//           {/* Chips */}

//           <Box
//             sx={{
//               display: "flex",
//               flexWrap: "wrap",
//               gap: 1,
//               mt: 3,
//             }}
//           >
//             {item.chips.map((chip) => (
//               <Chip
//                 key={chip}
//                 label={chip}
//                 size="small"
//                 sx={{
//                   height: 28,
//                   borderRadius: "999px",
//                   backgroundColor: "rgba(255,255,255,.04)",
//                   border: "1px solid rgba(255,255,255,.1)",
//                   color: "inherit",
//                   fontSize: 10,
//                   letterSpacing: ".08em",
//                   "& .MuiChip-label": {
//                     px: 1.5,
//                   },
//                 }}
//               />
//             ))}
//           </Box>

//           {/* Description */}

//           <Typography
//             sx={{
//               maxWidth: 520,
//               mt: 3,
//               fontSize: {
//                 xs: 15,
//                 md: 17,
//               },
//               lineHeight: 1.7,
//               opacity: 0.55,
//             }}
//           >
//             {item.description}
//           </Typography>

//           {/* Button */}

//           <Button
//             variant="outlined"
//             endIcon={<FiArrowUpRight />}
//             sx={{
//               mt: 4,
//               minHeight: 48,
//               px: 2.5,
//               borderRadius: "999px",
//               borderColor: "rgba(255,255,255,.15)",
//               color: "inherit",
//               textTransform: "none",
//               fontSize: 12,
//               transition: "all .4s cubic-bezier(.16,1,.3,1)",
//               "&:hover": {
//                 borderColor: "rgba(255,255,255,.4)",
//                 backgroundColor: "rgba(255,255,255,.05)",
//                 transform: "translateY(-2px)",
//               },
//             }}
//           >
//             {item.buttonLabel}
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
