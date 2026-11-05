"use client";

import { useEffect, useRef } from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import gsap from "gsap";

// DATA
import {
  sportsTrainingSessions,
  trainingCategoryColors,
} from "../../../../data";

// HOOK
import { useCategoryChipAnimation } from "../../../../hooks/useCategoryChip";

// ICONS
import { IoIosTimer } from "react-icons/io";
import { FiCheck } from "react-icons/fi";

// STYLES
import {
  BenefitCheck,
  BenefitsHint,
  BenefitsList,
  CategoryChip,
  CategoryChips,
  ImageContainer,
} from "./SportTrainingCard.Styles";

type SportTrainingCardProps = {
  item: (typeof sportsTrainingSessions)[number];

  isHovered?: boolean;

  isRowExpanded?: boolean;

  onHover?: () => void;

  onLeave?: () => void;
};

export default function SportTrainingCard({
  item,
  isHovered = false,
  isRowExpanded = false,
  onHover,
  onLeave,
}: SportTrainingCardProps) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // ==================================================
  // REFS
  // ==================================================

  const categoryRef = useRef<HTMLDivElement | null>(null);

  const benefitsRef = useRef<HTMLUListElement | null>(null);

  // ==================================================
  // CATEGORY ANIMATION
  // ==================================================

  useCategoryChipAnimation(categoryRef);

  // ==================================================
  // SPORT ICON
  // ==================================================

  const SportIcon = item.iconSport;

  // ==================================================
  // INITIAL STATE
  // ==================================================

  useEffect(() => {
    if (!benefitsRef.current) {
      return;
    }

    if (isDesktop) {
      gsap.set(benefitsRef.current, {
        height: 0,
        opacity: 0,
        y: -15,
        overflow: "hidden",
      });
    } else {
      gsap.set(benefitsRef.current, {
        clearProps: "all",
      });
    }
  }, [isDesktop]);

  // ==================================================
  // HOVER ENTER
  // ==================================================

  const handleMouseEnter = () => {
    // Informe le parent
    onHover?.();

    if (!isDesktop || !benefitsRef.current) {
      return;
    }

    // Évite les conflits si la souris entre/sort rapidement
    gsap.killTweensOf(benefitsRef.current);

    gsap.to(benefitsRef.current, {
      height: "auto",
      opacity: 1,
      y: 0,

      duration: 0.7,

      ease: "power3.out",

      overwrite: "auto",
    });
  };

  // ==================================================
  // HOVER LEAVE
  // ==================================================

  const handleMouseLeave = () => {
    // Informe le parent
    onLeave?.();

    if (!isDesktop || !benefitsRef.current) {
      return;
    }

    gsap.killTweensOf(benefitsRef.current);

    gsap.to(benefitsRef.current, {
      height: 0,
      opacity: 0,
      y: -15,

      duration: 0.65,

      ease: "power2.inOut",

      overwrite: "auto",
    });
  };

  return (
    <Card
      sx={{
        width: "100%",

        maxWidth: 345,

        height: "100%",

        position: "relative",

        overflow: "hidden",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardActionArea
        sx={{
          height: "100%",
        }}
      >
        {/* ================================================== */}
        {/* IMAGE */}
        {/* ================================================== */}

        <ImageContainer ref={categoryRef}>
          <CardMedia
            component="img"
            height="140"
            image={item.mainImage}
            alt={item.sport}
          />

          {/* ================================================== */}
          {/* CATEGORIES */}
          {/* ================================================== */}

          <CategoryChips>
            {item.categories.map((category) => (
              <CategoryChip
                key={category}
                label={category}
                size="small"
                data-category-chip
                sx={{
                  backgroundColor: trainingCategoryColors[category],
                }}
              />
            ))}
          </CategoryChips>
        </ImageContainer>

        {/* ================================================== */}
        {/* CONTENT */}
        {/* ================================================== */}

        <CardContent
          sx={{
            height: "calc(100% - 140px)",
          }}
        >
          {/* ================================================== */}
          {/* TITLE */}
          {/* ================================================== */}

          <Stack
            sx={{
              alignItems: "center",
              flexDirection: "row",
              gap: 1,
            }}
          >
            {/* SPORT ICON */}

            <SportIcon color="green" size={45} />

            {/* SPORT INFORMATION */}

            <Stack>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  marginBottom: 0,
                }}
              >
                {item.sport}
              </Typography>

              {/* DURATION */}

              <Stack
                sx={{
                  alignItems: "center",
                  flexDirection: "row",
                  gap: 0.5,
                }}
              >
                <IoIosTimer size={25} />

                <Typography variant="body1" component="div">
                  {item.practiceDuration} / semaine
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          {/* ================================================== */}
          {/* BENEFITS */}
          {/* ================================================== */}

          <BenefitsList ref={benefitsRef}>
            {item.benefitsForSymptoms.map((benefit) => (
              <ListItem key={benefit}>
                <BenefitCheck>
                  <FiCheck />
                </BenefitCheck>

                <ListItemText primary={benefit} />
              </ListItem>
            ))}
          </BenefitsList>

          {/* ================================================== */}
          {/* HINT DES CARTES VOISINES */}
          {/* ================================================== */}

          {isDesktop && isRowExpanded && !isHovered && (
            <BenefitsHint>
              <Typography>
                Survolez cette carte
                <br />
                pour plus d&apos;informations
              </Typography>
            </BenefitsHint>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// "use client";

// import { useEffect, useRef } from "react";

// import {
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   ListItem,
//   ListItemText,
//   Stack,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";

// import gsap from "gsap";

// // DATAS

// // HOOKS

// // ICONS
// import { IoIosTimer } from "react-icons/io";
// import { FiCheck } from "react-icons/fi";

// // STYLES
// import {
//   BenefitCheck,
//   BenefitsHint,
//   BenefitsList,
//   CategoryChip,
//   CategoryChips,
//   ImageContainer,
// } from "./SportTrainingCard.Styles";
// import { sportsTrainingSessions, trainingCategoryColors } from "../../../../../data";
// import { useCategoryChipAnimation } from "../../../../../hooks/useCategoryChip";

// type SportTrainingCardProps = {
//   item: (typeof sportsTrainingSessions)[number];

//   isHovered?: boolean;

//   isRowExpanded?: boolean;

//   onHover?: () => void;

//   onLeave?: () => void;
// };

// export default function SportTrainingCard({
//   item,
//   isHovered = false,
//   isRowExpanded = false,
//   onHover,
//   onLeave,
// }: SportTrainingCardProps) {
//   const theme = useTheme();

//   const isDesktop = useMediaQuery(
//     theme.breakpoints.up("md")
//   );

//   const categoryRef =
//     useRef<HTMLDivElement | null>(null);

//   const benefitsRef =
//     useRef<HTMLUListElement | null>(null);

//   useCategoryChipAnimation(categoryRef);

//   const SportIcon = item.iconSport;

//   // --------------------------------------------------
//   // INITIAL STATE
//   // --------------------------------------------------

//   useEffect(() => {
//     if (!benefitsRef.current) return;

//     if (isDesktop) {
//       gsap.set(benefitsRef.current, {
//         height: 0,
//         opacity: 0,
//         y: -30,
//         overflow: "hidden",
//       });
//     } else {
//       gsap.set(benefitsRef.current, {
//         clearProps: "all",
//       });
//     }
//   }, [isDesktop]);

//   // --------------------------------------------------
//   // HOVER ENTER
//   // --------------------------------------------------

//   const handleMouseEnter = () => {
//     // Informe le parent
//     onHover?.();

//     if (!isDesktop || !benefitsRef.current) {
//       return;
//     }

//     gsap.to(benefitsRef.current, {
//       height: "auto",
//       opacity: 1,
//       y: 0,

//       duration: 0.5,

//       ease: "power3.out",

//       overwrite: true,
//     });
//   };

//   // --------------------------------------------------
//   // HOVER LEAVE
//   // --------------------------------------------------

//   const handleMouseLeave = () => {
//     // Informe le parent
//     onLeave?.();

//     if (!isDesktop || !benefitsRef.current) {
//       return;
//     }

//     gsap.to(benefitsRef.current, {
//       height: 0,
//       opacity: 0,
//       y: -30,

//       duration: 0.4,

//       ease: "power3.inOut",

//       overwrite: true,
//     });
//   };

//   return (
//     <Card
//       sx={{
//         width: "100%",
//         maxWidth: 345,

//         height: "100%",

//         position: "relative",

//         overflow: "hidden",
//       }}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <CardActionArea
//         sx={{
//           height: "100%",
//         }}
//       >
//         {/* ================================================== */}
//         {/* IMAGE */}
//         {/* ================================================== */}

//         <ImageContainer ref={categoryRef}>
//           <CardMedia
//             component="img"
//             height="140"
//             image={item.mainImage}
//             alt={item.sport}
//           />

//           {/* CATEGORIES */}

//           <CategoryChips>
//             {item.categories.map((category) => (
//               <CategoryChip
//                 key={category}
//                 label={category}
//                 size="small"
//                 data-category-chip
//                 sx={{
//                   backgroundColor:
//                     trainingCategoryColors[
//                       category
//                     ],
//                 }}
//               />
//             ))}
//           </CategoryChips>
//         </ImageContainer>

//         {/* ================================================== */}
//         {/* CONTENT */}
//         {/* ================================================== */}

//         <CardContent
//           sx={{
//             height: "calc(100% - 140px)",
//           }}
//         >
//           {/* ================================================== */}
//           {/* TITLE */}
//           {/* ================================================== */}

//           <Stack
//             sx={{
//               alignItems: "center",
//               flexDirection: "row",
//               gap: 1,
//             }}
//           >
//             {/* SPORT ICON */}

//             <SportIcon
//               color="green"
//               size={45}
//             />

//             {/* SPORT INFORMATION */}

//             <Stack>
//               <Typography
//                 gutterBottom
//                 variant="h5"
//                 component="div"
//                 sx={{
//                   marginBottom: 0,
//                 }}
//               >
//                 {item.sport}
//               </Typography>

//               {/* DURATION */}

//               <Stack
//                 sx={{
//                   alignItems: "center",
//                   flexDirection: "row",
//                   gap: 0.5,
//                 }}
//               >
//                 <IoIosTimer size={25} />

//                 <Typography
//                   variant="body1"
//                   component="div"
//                 >
//                   {item.practiceDuration} / semaine
//                 </Typography>
//               </Stack>
//             </Stack>
//           </Stack>

//           {/* ================================================== */}
//           {/* BENEFITS */}
//           {/* ================================================== */}

//           <BenefitsList ref={benefitsRef}>
//             {item.benefitsForSymptoms.map(
//               (benefit) => (
//                 <ListItem key={benefit}>
//                   <BenefitCheck>
//                     <FiCheck />
//                   </BenefitCheck>

//                   <ListItemText
//                     primary={benefit}
//                   />
//                 </ListItem>
//               )
//             )}
//           </BenefitsList>

//           {/* ================================================== */}
//           {/* HINT POUR LES AUTRES CARTES */}
//           {/* ================================================== */}

//           {isDesktop &&
//             isRowExpanded &&
//             !isHovered && (
//               <BenefitsHint>
//                 <Typography>
//                   Survolez cette carte
//                   <br />
//                   pour plus d'informations
//                 </Typography>
//               </BenefitsHint>
//             )}
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }
