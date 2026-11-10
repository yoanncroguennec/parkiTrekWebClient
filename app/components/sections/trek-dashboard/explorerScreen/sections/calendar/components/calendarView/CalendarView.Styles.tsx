import { Box, styled } from "@mui/material";
import { C } from "../../data/calendar.data";

/* =========================================================
   01 — TYPOGRAPHY
   Typographie générale du calendrier
========================================================= */

const typographyStyles = {
  "& .rbc-calendar": {
    fontFamily: "inherit",
    color: "#19ef6e",
  },
};

/* =========================================================
   02 — MONTH VIEW STRUCTURE
   Structure générale de la vue mensuelle
========================================================= */

const monthStructureStyles = {
  // Conteneur principal du calendrier mensuel
  "& .rbc-month-view": {
    minHeight: 680,
    border: "10px solid rgba(10, 255, 108, 0.12)",
    borderRadius: "25px",
    overflow: "hidden",
    backgroundColor: "rgba(0, 255, 255, 0.1)",
  },

  // Conteneur de l'en-tête mensuel
  "& .rbc-month-header": {
    backgroundColor: "red",
  },

  // Masquer la toolbar native de react-big-calendar
  "& .rbc-toolbar": {
    display: "none",
  },

  // Lignes représentant les semaines
  "& .rbc-month-row": {
    minHeight: "115px",
    borderTop: "10px solid rgba(19, 181, 84, 0.1)",
    overflow: "hidden",
  },

  // Conteneur des arrière-plans des cellules
  "& .rbc-row-bg": {
    backgroundColor: "#14209d",
  },
};

/* =========================================================
   03 — DAY HEADERS
   En-têtes des jours de la semaine
========================================================= */

const dayHeaderStyles = {
  "& .rbc-header": {
    padding: "16px 8px",
    border: "none",
    borderBottom: "10px solid rgba(11, 239, 102, 0.92)",
    color: "#65746A",
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
  },
};

/* =========================================================
   04 — CALENDAR CONTROLS
   Boutons et contrôles natifs du calendrier
========================================================= */

const calendarControlStyles = {
  // Apparence générale des boutons de dates
  "& .rbc-button-link": {
    color: C.dark,
    font: "inherit",
  },
};

/* =========================================================
   05 — DAY CELLS
   Apparence des cellules individuelles des jours
========================================================= */

const dayCellStyles = {
  "& .rbc-day-bg": {
    position: "relative",
    borderLeft: "1px solid rgba(38, 53, 44, 0.08)",
    backgroundColor: "#f6ca1c",
    transition: "background-color 250ms ease",
    cursor: "pointer",
  },

  // Survol des cellules
  "& .rbc-day-bg:hover": {
    backgroundColor: "rgba(180, 221, 15, 0.9)",
  },
};

/* =========================================================
   06 — DAY NUMBERS
   Positionnement et apparence des numéros des jours
========================================================= */

const dayNumberStyles = {
  // Conteneur du numéro de jour
  "& .rbc-date-cell": {
    padding: "12px 12px 8px",
    textAlign: "left",
    fontSize: "12px",
    fontWeight: 600,
    color: "#526257",
  },

  // Bouton contenant le numéro
  "& .rbc-date-cell .rbc-button-link": {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "28px",
    height: "28px",
    borderRadius: "50%",
    color: "inherit",
    transition: "all 200ms ease",
  },

  // Survol du numéro de jour
  "& .rbc-date-cell .rbc-button-link:hover": {
    backgroundColor: "#6d15e8",
    color: "#ec5c08",
  },
};

/* =========================================================
   07 — CURRENT DAY
   Mise en évidence de la date actuelle
========================================================= */

const currentDayStyles = {
  // Fond de la cellule du jour actuel
  "& .rbc-today": {
    backgroundColor: "rgba(114, 200, 137, 0.10)",
  },

  // Numéro du jour actuel
  "& .rbc-now .rbc-button-link": {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "27px",
    height: "27px",
    borderRadius: "50%",
    backgroundColor: "#263F31",
    color: "#FFFFFF",
    fontWeight: 700,
  },
};

/* =========================================================
   08 — PAST DAYS
   Personnalisation des jours précédant aujourd'hui
========================================================= */

const pastDayStyles = {
  "& .rbc-past": {
    background: "#F22",
    border: "15px solid blue",
    opacity: 1,
  },
};

/* =========================================================
   09 — OFF RANGE DAYS
   Gestion des jours hors du mois affiché
========================================================= */

const offRangeDayStyles = {
  // Fond des cellules hors du mois
  "& .rbc-off-range-bg": {
    backgroundColor: "rgba(241, 14, 173, 0.99)",
  },

  // Apparence des éléments des jours hors du mois
  "& .rbc-off-range": {
    color: "#190ef5",
  },

  // Couleur du numéro des jours hors du mois
  "& .rbc-off-range .rbc-button-link": {
    color: "#00F",
  },
};

/* =========================================================
   10 — CALENDAR EVENTS
   Apparence des événements dans la grille
========================================================= */

const calendarEventStyles = {
  // Carte de l'événement
  "& .rbc-event": {
    padding: "6px 10px",
    marginBottom: "3px",
    border: "none",
    borderRadius: "8px",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.01em",
    boxShadow: "0 2px 6px rgba(30, 50, 35, 0.06)",
    transition: "transform 200ms ease, box-shadow 200ms ease",
    cursor: "pointer",
  },

  // Interaction au survol
  "& .rbc-event:hover": {
    transform: "translateY(-2px) translateX(3px)",
    boxShadow: "0 5px 12px rgba(30, 50, 35, 0.12)",
  },

  // Horaire de l'événement
  "& .rbc-event-label": {
    display: "none",
    fontSize: "10px",
    fontWeight: 500,
    opacity: 0.8,
  },

  // Titre de l'événement
  "& .rbc-event-content": {
    fontWeight: 700,
    lineHeight: 1.5,
    whiteSpace: "normal",
  },

  // Lien pour afficher les événements supplémentaires
  "& .rbc-show-more": {
    padding: "4px 8px",
    color: "#426B4C",
    fontSize: "10px",
    fontWeight: 700,
    backgroundColor: "transparent",
    cursor: "pointer",
  },
};

/* =========================================================
   11 — POPUP OVERLAY
   Fenêtre des événements supplémentaires
========================================================= */

const popupStyles = {
  // Conteneur flottant des événements supplémentaires
  "& .rbc-overlay": {
    border: "15px solid red",
    borderRadius: "14px",
    backgroundColor: C.card,
    boxShadow: "0 16px 45px rgba(17,17,17,0.1)",
  },

  // En-tête de la fenêtre flottante
  "& .rbc-overlay-header": {
    padding: "102px",
    borderBottom: "15px solid red",
  },
};

/* =========================================================
   12 — TIME VIEWS
   Vues temporelles : semaine et jour
========================================================= */

const timeViewStyles = {
  // Conteneur des vues semaine et jour
  "& .rbc-time-view": {
    border: "10px solid blue",
    borderRadius: "20px",
    overflow: "hidden",
    backgroundColor: C.card,
  },

  // En-tête et contenu temporel
  "& .rbc-time-header, & .rbc-time-content": {
    borderColor: C.border,
  },

  // Groupes de créneaux horaires
  "& .rbc-timeslot-group": {
    borderColor: C.border,
  },

  // Colonne des heures et libellés
  "& .rbc-time-gutter, & .rbc-label": {
    color: C.muted,
    fontSize: "11px",
  },
};

/* =========================================================
   13 — AGENDA VIEW
   Personnalisation de la vue sous forme de liste
========================================================= */

const agendaViewStyles = {
  // Conteneur de l'agenda
  "& .rbc-agenda-view": {
    padding: "20px",
    border: "10px solid blue",
    borderRadius: "20px",
    overflow: "hidden",
    backgroundColor: C.card,
  },

  // Tableau de l'agenda
  "& .rbc-agenda-table": {
    border: "none",
    width: "100%",
  },

  // En-tête du tableau
  "& .rbc-agenda-table thead > tr > th": {
    padding: "12px",
    borderBottom: "5px solid red",
    color: C.muted,
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },

  // Lignes du tableau
  "& .rbc-agenda-table tbody > tr > td": {
    padding: "12px",
    borderBottom: "5px solid red",
  },
};

/* =========================================================
   14 — RESPONSIVE
   Adaptation du calendrier aux écrans mobiles
========================================================= */

const responsiveStyles = {
  "@media (max-width: 600px)": {
    // Structure mensuelle
    "& .rbc-month-view": {
      borderWidth: "4px",
      borderRadius: "14px",
    },

    "& .rbc-month-row": {
      minHeight: "75px",
    },

    // En-têtes des jours
    "& .rbc-header": {
      padding: "12px 2px",
      fontSize: "8px",
    },

    // Numéros des jours
    "& .rbc-date-cell": {
      padding: "6px",
      fontSize: "10px",
    },

    "& .rbc-now .rbc-button-link": {
      width: "23px",
      height: "23px",
    },

    // Événements
    "& .rbc-event": {
      padding: "4px",
      fontSize: "9px",
    },

    // Vues temporelles
    "& .rbc-time-view": {
      borderWidth: "4px",
      borderRadius: "14px",
    },

    // Vue agenda
    "& .rbc-agenda-view": {
      padding: "8px",
      borderWidth: "4px",
      borderRadius: "14px",
    },

    "& .rbc-agenda-table thead > tr > th": {
      padding: "8px",
    },

    "& .rbc-agenda-table tbody > tr > td": {
      padding: "8px",
    },
  },
};

/* =========================================================
   15 — CALENDAR WRAPPER
   Assemblage de toutes les catégories de styles
========================================================= */

export const CalendarWrapper = styled(Box)(() => ({
  ...typographyStyles,
  ...monthStructureStyles,
  ...dayHeaderStyles,
  ...calendarControlStyles,
  ...dayCellStyles,
  ...dayNumberStyles,
  ...currentDayStyles,
  ...pastDayStyles,
  ...offRangeDayStyles,
  ...calendarEventStyles,
  ...popupStyles,
  ...timeViewStyles,
  ...agendaViewStyles,
  ...responsiveStyles,
}));
