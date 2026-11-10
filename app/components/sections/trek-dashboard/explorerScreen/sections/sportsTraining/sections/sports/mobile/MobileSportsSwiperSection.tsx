"use client";

import { useState } from "react";

import { Box, Typography } from "@mui/material";

// COMPONENT
import SportTrainingCard from "../sportTrainingCard";

// HOOK
import { useMobileSportsSwiper } from "./hooks/useMobileSportsSwiper";

// ICONS
import { FiChevronLeft, FiChevronRight } from "@/app/utils/constants/icons";
// DATAS
import { sportsTrainingSessions } from "../../../data";
// STYLES
import {
  SwipeContainer,
  SwipeCard,
  SwipeActions,
  SwipeButton,
  SwipeCounter,
} from "./MobileSportsSwiperSection.Styles";

export default function MobileSportsSwiperSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ==================================================
  // CURRENT
  // ==================================================

  const currentItem = sportsTrainingSessions[currentIndex];

  // ==================================================
  // NEXT
  // ==================================================

  const nextItem = sportsTrainingSessions[currentIndex + 1];

  // ==================================================
  // NEXT NEXT
  // ==================================================

  const nextNextItem = sportsTrainingSessions[currentIndex + 2];

  // ==================================================
  // SWIPE HOOK
  // ==================================================

  const {
    cardRef,
    navigateCard,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerCancel,
  } = useMobileSportsSwiper({
    currentIndex,

    totalItems: sportsTrainingSessions.length,

    onChange: setCurrentIndex,
  });

  // ==================================================
  // FIN
  // ==================================================

  if (!currentItem) {
    return (
      <SwipeContainer>
        <Typography variant="h6">Toutes les activités ont été découvertes.</Typography>
      </SwipeContainer>
    );
  }

  return (
    <SwipeContainer>
      {/* ================================================== */}
      {/* CARD STACK */}
      {/* ================================================== */}

      <Box className="swipe-stack">
        {/* ================================================== */}
        {/* 3ÈME CARTE */}
        {/* ================================================== */}

        {nextNextItem && (
          <SwipeCard className="card card-third">
            <SportTrainingCard item={nextNextItem} />
          </SwipeCard>
        )}

        {/* ================================================== */}
        {/* 2ÈME CARTE */}
        {/* ================================================== */}

        {nextItem && (
          <SwipeCard className="card card-second">
            <SportTrainingCard item={nextItem} />
          </SwipeCard>
        )}

        {/* ================================================== */}
        {/* CARTE PRINCIPALE */}
        {/* ================================================== */}

        <SwipeCard
          ref={cardRef}
          className="card card-main"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          <SportTrainingCard item={currentItem} />
        </SwipeCard>
      </Box>

      {/* ================================================== */}
      {/* COMPTEUR */}
      {/* ================================================== */}

      <SwipeCounter>
        {currentIndex + 1} / {sportsTrainingSessions.length}
      </SwipeCounter>

      {/* ================================================== */}
      {/* NAVIGATION */}
      {/* ================================================== */}

      <SwipeActions>
        {/* PREVIOUS */}

        {currentIndex > 0 && (
          <SwipeButton onClick={() => navigateCard("previous")} aria-label="Activité précédente">
            <FiChevronLeft />
          </SwipeButton>
        )}

        {/* NEXT */}

        {currentIndex < sportsTrainingSessions.length - 1 && (
          <SwipeButton onClick={() => navigateCard("next")} aria-label="Activité suivante">
            <FiChevronRight />
          </SwipeButton>
        )}
      </SwipeActions>
    </SwipeContainer>
  );
}
