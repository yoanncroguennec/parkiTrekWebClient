"use client";

import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { FiCalendar, FiClock, FiMapPin, FiX } from "react-icons/fi";

import { C, type CalendarEvent } from "../../../../data/calendar.data";

import {
  AnimatedCard,
  CardHeader,
  CardTitleContainer,
  Eyebrow,
  EventTitle,
  CloseButton,
  CategoryChip,
  InfoRow,
  InfoText,
} from "./EventDetailsCard.Styles";

interface EventDetailsCardProps {
  event: CalendarEvent;
  open: boolean;
  onClose: () => void;
}

export default function EventDetailsCard({
  event,
  open,
  onClose,
}: EventDetailsCardProps) {
  const start = event.start instanceof Date ? event.start : null;
  const end = event.end instanceof Date ? event.end : null;

  return (
    <Card
      sx={{
        borderRadius: "0 24px 24px 0",
        backgroundColor: C.card,
        border: `11px solid ${C.border}`,
        boxShadow: "0 25px 80px rgba(17,17,17,0.18)",
        maxWidth: 345,
        zIndex: 1500,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/assets/imgs/trek-dashboard/explorerScreen/calendar/eventDetailsCard/bgCardItem.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.title}
          </Typography>
          <Chip label={event.category} variant="outlined" />

          <Divider sx={{ my: 2.5, borderColor: "transparent" }} />

          <InfoRow>
            <FiCalendar size={18} />
            <InfoText>
              {start
                ? format(start, "EEEE d MMMM yyyy", { locale: fr })
                : "Date à définir"}
            </InfoText>
          </InfoRow>

          <InfoRow>
            <FiClock size={18} />
            <InfoText>
              {start ? format(start, "HH:mm") : "--:--"}
              {" – "}
              {end ? format(end, "HH:mm") : "--:--"}
            </InfoText>
          </InfoRow>

          <InfoRow>
            <FiMapPin size={18} />
            <InfoText>{event.location ?? "Lieu à définir"}</InfoText>
          </InfoRow>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            minima aspernatur in error rem nihil.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  return (
    <AnimatedCard
      $open={open}
      role="dialog"
      aria-modal="false"
      aria-label={`Détails de ${event.title}`}
    >
      <CardHeader>
        <CardTitleContainer>
          <Eyebrow>Parki Trek / Étape</Eyebrow>
          <EventTitle>{event.title}</EventTitle>
        </CardTitleContainer>

        <CloseButton aria-label="Fermer" onClick={onClose}>
          <FiX />
        </CloseButton>
      </CardHeader>

      <CategoryChip
        eventCategory={event.category}
        label={event.category}
        size="small"
      />

      <Divider sx={{ my: 2.5, borderColor: "transparent" }} />

      <InfoRow>
        <FiCalendar size={18} />
        <InfoText>
          {start
            ? format(start, "EEEE d MMMM yyyy", { locale: fr })
            : "Date à définir"}
        </InfoText>
      </InfoRow>

      <InfoRow>
        <FiClock size={18} />
        <InfoText>
          {start ? format(start, "HH:mm") : "--:--"}
          {" – "}
          {end ? format(end, "HH:mm") : "--:--"}
        </InfoText>
      </InfoRow>

      <InfoRow>
        <FiMapPin size={18} />
        <InfoText>{event.location ?? "Lieu à définir"}</InfoText>
      </InfoRow>
    </AnimatedCard>
  );
}
