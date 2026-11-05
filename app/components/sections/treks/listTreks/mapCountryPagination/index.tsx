// GOOD
"use client";

import { Dispatch, SetStateAction } from "react";
// DATAS
import { TrekCard } from "@/app/utils/constants/data/treks/map/data";
// STYLES
import { PaginationContainer, PaginationDot } from "./MapCountryPagination.Styles";

type Props = {
  cards: TrekCard[];
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
};

export default function MapCountryPagination({ cards, currentIndex, setCurrentIndex }: Props) {
  return (
    <PaginationContainer>
      {cards.map((_, index) => (
        <PaginationDot
          aria-label={`Afficher le trek ${index + 1}`}
          key={index}
          active={index === currentIndex}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </PaginationContainer>
  );
}
