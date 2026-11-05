// GOOD
"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useRef } from "react";
// DATA
import { Area } from "@/app/utils/constants/data/treks/map/data";
// HOOKS
import { useJournalButtonAnimation } from "@/app/hooks";
// ICONS
import { IoArrowForward } from "@/app/utils/constants/icons";
// STYLES
import { JournalButtonAction, JournalButtonContainer } from "./JournalButton.Styles";

const id = 1;

type Props = {
  selectedArea: Area | null;
};

export default function JournalButton({ selectedArea }: Props) {
  const locale = useLocale();

  const buttonRef = useRef<HTMLButtonElement>(null);

  useJournalButtonAnimation({
    buttonRef,
  });

  return (
    <JournalButtonContainer>
      <Link
        href={{
          pathname: `/${locale}/treks/${id}`,
          query: {
            area: selectedArea?.code ?? "",
          },
        }}
      >
        <JournalButtonAction
          ref={buttonRef}
          endIcon={<IoArrowForward className="journal-button-arrow" />}
        >
          Voir le journal complet
        </JournalButtonAction>
      </Link>
    </JournalButtonContainer>
  );
}
