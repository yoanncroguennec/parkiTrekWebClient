import React from "react";
import { format } from "date-fns";
import {
  CalendarBadge,
  CalendarBadgeBrand,
  CalendarBadgeDay,
  CalendarBadgeFooter,
  CalendarBadgeInner,
  CalendarBadgeLabel,
  CalendarImageContainer,
  CalendarSignatureContainer,
} from "./CalendarSignature.Styles";
import OrganicImageShape from "../organicImageShape";
import { CalendarEvent } from "../../data/calendar.data";

interface Props {
  events: CalendarEvent[];
}

export default function CalendarSignature({ events }: Props) {
  const firstEvent = [...events]
    .filter((event) => event.start instanceof Date)
    .sort((a, b) => (a.start as Date).getTime() - (b.start as Date).getTime())[0];

  const firstEventDate = firstEvent?.start instanceof Date ? firstEvent.start : null;

  return (
    <CalendarSignatureContainer>
      <CalendarImageContainer>
        <OrganicImageShape
          src="/assets/imgs/trek-dashboard/explorerScreen/calendar/eventDetailsCard/bgCardItem.jpg"
          alt="Sentier de montagne traversant une forêt"
          width="100%"
          height={760}
        />

        <CalendarBadge>
          <CalendarBadgeInner>
            <CalendarBadgeBrand>PARKI TREK</CalendarBadgeBrand>

            <CalendarBadgeDay>
              {firstEventDate ? format(firstEventDate, "dd") : "--"}
            </CalendarBadgeDay>

            <CalendarBadgeLabel>RENDEZ-VOUS</CalendarBadgeLabel>

            <CalendarBadgeFooter>BOUGER · PARTAGER</CalendarBadgeFooter>
          </CalendarBadgeInner>
        </CalendarBadge>
      </CalendarImageContainer>
    </CalendarSignatureContainer>
  );
}
