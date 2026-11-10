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

// DATAS

// HOOKS

// ICONS
import { IoIosTimer, FiCheck } from "@/app/utils/constants/icons";

// STYLES
import {
  BenefitCheck,
  BenefitsHint,
  BenefitsList,
  CategoryChip,
  CategoryChips,
  ImageContainer,
} from "./SportTrainingCard.Styles";
import { sportsTrainingSessions, trainingCategoryColors } from "../../../data";
import { useCategoryChipAnimation } from "../../../hooks/useCategoryChip";

export default function SportTrainingCard({
  item,
  isHovered = false,
  isRowExpanded = false,
}: {
  item: (typeof sportsTrainingSessions)[number];
  isHovered?: boolean;
  isRowExpanded?: boolean;
}) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const categoryRef = useRef<HTMLDivElement | null>(null);

  const benefitsRef = useRef<HTMLUListElement | null>(null);

  useCategoryChipAnimation(categoryRef);

  const SportIcon = item.iconSport;

  // --------------------------------------------------
  // INITIAL STATE
  // --------------------------------------------------

  useEffect(() => {
    if (!benefitsRef.current) return;

    if (isDesktop) {
      gsap.set(benefitsRef.current, {
        height: 0,
        opacity: 0,
        y: -30,
        overflow: "hidden",
      });
    } else {
      gsap.set(benefitsRef.current, {
        clearProps: "all",
      });
    }
  }, [isDesktop]);

  // --------------------------------------------------
  // HOVER ENTER
  // --------------------------------------------------

  const handleMouseEnter = () => {
    if (!isDesktop || !benefitsRef.current) return;

    gsap.to(benefitsRef.current, {
      height: "auto",
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
      overwrite: true,
    });
  };

  // --------------------------------------------------
  // HOVER LEAVE
  // --------------------------------------------------

  const handleMouseLeave = () => {
    if (!isDesktop || !benefitsRef.current) return;

    gsap.to(benefitsRef.current, {
      height: 0,
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: "power3.inOut",
      overwrite: true,
    });
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        position: "relative",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardActionArea>
        {/* IMAGE */}
        <ImageContainer ref={categoryRef}>
          <CardMedia component="img" height="140" image={item.mainImage} alt={item.sport} />

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

        {/* CONTENT */}
        <CardContent>
          {/* TITLE */}
          <Stack
            sx={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <SportIcon color="green" size={45} />

            <Stack>
              <Typography gutterBottom variant="h5" component="div">
                {item.sport}
              </Typography>

              <Stack
                sx={{
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <IoIosTimer size={25} />

                <Typography gutterBottom variant="body1" component="div">
                  {item.practiceDuration} / semaine
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          {/* BENEFITS */}
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

          {/* MESSAGE POUR LES AUTRES CARTES DE LA LIGNE */}
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
