"use client";

import { format } from "date-fns";
import { fr } from "date-fns/locale";

// ICONS
import { FiCalendar, FiClock, FiMapPin, FiX, MdArrowOutward } from "@/app/utils/constants/icons";

// COMPONENTS
import { PrimaryButton } from "@/app/components/ui";

// DATA
import { type CalendarEvent } from "../../data/calendar.data";

// STYLES
import {
  EventDetailsCardRoot,
  EventHeroContainer,
  EventHeroImage,
  EventHeroOverlay,
  EventDateBadge,
  EventDateMonth,
  EventDateDay,
  EventDateYear,
  EventCloseButton,
  EventContentContainer,
  EventCardContent,
  EventTitle,
  EventCategoryChip,
  EventDetailsDivider,
  InfoRow,
  InfoText,
  EventDescription,
  eventDetailsButtonAppearance,
} from "./EventDetailsCard.Styles";

// ==========================================
// PROPS
// ==========================================

interface EventDetailsCardProps {
  event: CalendarEvent;
  isEventDetailsOpen: boolean;
  onClose: () => void;
}

export default function EventDetailsCard({
  event,
  isEventDetailsOpen,
  onClose,
}: EventDetailsCardProps) {
  // ==========================================
  // EVENT DATES
  // ==========================================

  const start = event.start instanceof Date ? event.start : null;
  const end = event.end instanceof Date ? event.end : null;

  // ==========================================
  // EVENT ACTION
  // ==========================================

  function handleOpenEventDetails() {
    // TODO : Ajouter la navigation vers les détails complets.
  }

  return (
    <EventDetailsCardRoot aria-hidden={!isEventDetailsOpen}>
      {/* ======================================
          HERO IMAGE
      ====================================== */}

      <EventHeroContainer>
        <EventHeroImage
          src="/assets/imgs/trek-dashboard/explorerScreen/calendar/eventDetailsCard/bgCardItem.jpg"
          alt={typeof event.title === "string" ? event.title : "Illustration de l'événement"}
          fill
          sizes="(max-width: 600px) 100vw, 345px"
        />
        <EventHeroOverlay />

        {/* DATE BADGE */}
        <EventDateBadge>
          <EventDateMonth>{start ? format(start, "MMM", { locale: fr }) : "Date"}</EventDateMonth>

          <EventDateDay>{start ? format(start, "dd") : "--"}</EventDateDay>

          <EventDateYear>{start ? format(start, "yyyy") : "----"}</EventDateYear>
        </EventDateBadge>

        {/* CLOSE BUTTON */}
        <EventCloseButton
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          aria-label="Fermer les détails"
          size="small"
        >
          <FiX size={18} />
        </EventCloseButton>
      </EventHeroContainer>

      {/* ======================================
          EVENT CONTENT
      ====================================== */}

      <EventContentContainer>
        <EventCardContent>
          {/* EVENT TITLE */}
          <EventTitle gutterBottom variant="h5" component="h2">
            {event.title}
          </EventTitle>

          {/* EVENT CATEGORY */}
          <EventCategoryChip label={event.category} variant="outlined" size="small" />

          <EventDetailsDivider />

          {/* EVENT DATE */}
          <InfoRow>
            <FiCalendar size={18} />

            <InfoText>
              {start ? format(start, "EEEE d MMMM yyyy", { locale: fr }) : "Date à définir"}
            </InfoText>
          </InfoRow>

          {/* EVENT TIME */}
          <InfoRow>
            <FiClock size={18} />

            <InfoText>
              {start ? format(start, "HH:mm") : "--:--"}
              {" – "}
              {end ? format(end, "HH:mm") : "--:--"}
            </InfoText>
          </InfoRow>

          {/* EVENT LOCATION */}
          <InfoRow>
            <FiMapPin size={18} />

            <InfoText>{event.location ?? "Lieu à définir"}</InfoText>
          </InfoRow>

          <EventDetailsDivider />

          {/* EVENT DESCRIPTION */}
          <EventDescription variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minima aspernatur in
            error rem nihil.
          </EventDescription>

          {/* EVENT ACTION */}
          <PrimaryButton
            buttons={[
              {
                active: true,
                endIcon: MdArrowOutward,
                onClick: handleOpenEventDetails,
                text: "Plus d'informations",
                ...eventDetailsButtonAppearance,
              },
            ]}
          />
        </EventCardContent>
      </EventContentContainer>
    </EventDetailsCardRoot>
  );
}
