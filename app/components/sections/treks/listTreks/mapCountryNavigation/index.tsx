// GOOD
"use client";

import { Dispatch, ReactNode, RefObject, SetStateAction, useState } from "react";
// COMPONENTS
import ArrowButton from "./arrows";
// HOOKS
import { useMapCountryNavigationAnimation } from "./hooks/useMapCountryNavigationAnimation";
// DATAS
import { TrekCard } from "@/app/utils/constants/data/treks/map/data";
import { NavigationContainer } from "./MapCountryNavigation.Styles";

type Props = {
  children?: ReactNode;
  cardRef: RefObject<HTMLDivElement | null>;
  cards: TrekCard[];
  currentIndex: number;
  isExpanded: boolean;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
};

export default function MapCountryNavigation({
  children,
  cardRef,
  cards,
  currentIndex,
  isExpanded,
  setCurrentIndex,
}: Props) {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const { nextCard, prevCard } = useMapCountryNavigationAnimation({
    cardRef,
    currentIndex,
    cardsLength: cards.length,
    isAnimating,
    setIsAnimating,
    setCurrentIndex,
  });

  return (
    <NavigationContainer>
      {!isExpanded && (
        <ArrowButton direction="left" onClick={prevCard} titleTooltip="Pays Précédent" />
      )}

      {children}

      {!isExpanded && (
        <ArrowButton direction="right" onClick={nextCard} titleTooltip="Pays Suivant" />
      )}
    </NavigationContainer>
  );
}
