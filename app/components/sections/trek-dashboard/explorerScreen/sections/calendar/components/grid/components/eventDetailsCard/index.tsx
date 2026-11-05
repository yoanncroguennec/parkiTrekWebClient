"use client";

import { format } from "date-fns";
import { fr } from "date-fns/locale";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

import { FiCalendar, FiClock, FiMapPin, FiX } from "react-icons/fi";

import { C, type CalendarEvent } from "../../../../data/calendar.data";

import { InfoRow, InfoText } from "./EventDetailsCard.Styles";
import { PrimaryButton } from "@/app/components/ui";
import { MdArrowOutward } from "react-icons/md";

interface EventDetailsCardProps {
  event: CalendarEvent;
  open: boolean;
  onClose: () => void;
}

export default function EventDetailsCard({
  event,
  // open,
  onClose,
}: EventDetailsCardProps) {
  const start = event.start instanceof Date ? event.start : null;
  const end = event.end instanceof Date ? event.end : null;

  function handleOpenEventDetails() { }

  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        borderRadius: "0 24px 24px 0",
        backgroundColor: C.card,
        border: `11px solid ${C.border}`,
        boxShadow: "0 25px 80px rgba(17,17,17,0.18)",
        transform: "perspective(1000px) rotateY(-5deg)",
        transformOrigin: "right center",
        overflow: "hidden",
      }}
    >
      {/* Image et éléments superposés */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image="/assets/imgs/trek-dashboard/explorerScreen/calendar/eventDetailsCard/bgCardItem.jpg"
          alt={typeof event.title === "string" ? event.title : "Illustration de l'événement"}
          sx={{
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Dégradé pour améliorer la lisibilité */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.55) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Date à droite de l'image */}
        <Box
          sx={{
            position: "absolute",
            right: 12,
            bottom: 12,
            zIndex: 2,
            minWidth: 62,
            px: 1.25,
            py: 0.75,
            borderRadius: "10px",
            color: "#fff",
            textAlign: "center",
            backgroundColor: "rgba(17,17,17,0.55)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Typography
            sx={{
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            {start ? format(start, "MMM", { locale: fr }) : "Date"}
          </Typography>

          <Typography
            sx={{
              fontSize: 27,
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            {start ? format(start, "dd") : "--"}
          </Typography>

          <Typography
            sx={{
              fontSize: 10,
              fontWeight: 500,
              opacity: 0.85,
            }}
          >
            {start ? format(start, "yyyy") : "----"}
          </Typography>
        </Box>

        {/* Bouton de fermeture en haut à droite */}
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Fermer les détails"
          size="small"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 3,
            width: 32,
            height: 32,
            color: "#fff",
            backgroundColor: "rgba(17,17,17,0.55)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.25)",
            "&:hover": {
              backgroundColor: "rgba(17,17,17,0.85)",
              transform: "scale(1.05)",
            },
          }}
        >
          <FiX size={18} />
        </IconButton>
      </Box>

      {/* Contenu de la carte */}
      <CardActionArea
        component="div"
        sx={{
          cursor: "default",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <CardContent
          sx={{
            p: 2.5,
            "&:last-child": {
              pb: 2.5,
            },
          }}
        >
          {/* Titre */}
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{
              fontSize: 22,
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              color: C.dark,
            }}
          >
            {event.title}
          </Typography>

          {/* Catégorie */}
          <Chip
            label={event.category}
            variant="outlined"
            size="small"
            sx={{
              fontWeight: 600,
              borderRadius: "6px",
            }}
          />

          <Divider
            sx={{
              my: 2.5,
              borderColor: "rgba(0,0,0,0.06)",
            }}
          />

          {/* Date */}
          <InfoRow>
            <FiCalendar size={18} />
            <InfoText>
              {start
                ? format(start, "EEEE d MMMM yyyy", { locale: fr })
                : "Date à définir"}
            </InfoText>
          </InfoRow>

          {/* Horaires */}
          <InfoRow>
            <FiClock size={18} />
            <InfoText>
              {start ? format(start, "HH:mm") : "--:--"}
              {" – "}
              {end ? format(end, "HH:mm") : "--:--"}
            </InfoText>
          </InfoRow>

          {/* Lieu */}
          <InfoRow>
            <FiMapPin size={18} />
            <InfoText>{event.location ?? "Lieu à définir"}</InfoText>
          </InfoRow>

          <Divider
            sx={{
              my: 2,
              borderColor: "rgba(0,0,0,0.06)",
            }}
          />

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: 13,
              lineHeight: 1.7,
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            minima aspernatur in error rem nihil.
          </Typography>

          <PrimaryButton
            buttons={[
              {
                active: true,
                endIcon: MdArrowOutward,
                onClick: handleOpenEventDetails,
                text: "Plus d'informations",
                variant: "contained",
                background: "linear-gradient(90deg, #22c55e, #84cc16)",
                boxShadow: "0 15px 35px rgba(34,197,94,.35)",
                backgroundHover: "linear-gradient(90deg, #22c55e, #84cc16)",
              },
            ]}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
