import { Box, BoxProps, Stack, Typography, styled } from "@mui/material";

/* =========================================================
   ROOT
========================================================= */
import type { SxProps, Theme } from "@mui/material/styles";

import { C } from "./data/calendar.data";

export const calendarRootSx: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  color: C.dark,
  fontFamily: "Inter, sans-serif",

  "& .rbc-calendar": {
    minHeight: 720,
    fontFamily: "inherit",
  },

  "& .rbc-toolbar": {
    display: "none",
  },

  "& .rbc-month-view": {
    minHeight: 680,
    border: `1px solid ${C.border}`,
    borderRadius: { xs: "12px", md: "20px" },
    overflow: "hidden",
    backgroundColor: C.card,
  },

  "& .rbc-month-header": {
    backgroundColor: C.card,
  },

  "& .rbc-header": {
    py: { xs: 1.5, md: 2 },
    px: 1,
    borderBottom: `1px solid ${C.border}`,
    borderLeft: "none",
    color: C.muted,
    fontSize: { xs: "9px", md: "11px" },
    fontWeight: 800,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },

  "& .rbc-month-row": {
    minHeight: { xs: 90, md: 125 },
    borderTop: `1px solid ${C.border}`,
    overflow: "visible",
  },

  "& .rbc-day-bg": {
    borderLeft: `1px solid ${C.border}`,
    transition: "background-color 250ms ease",
  },

  "& .rbc-day-bg:hover": {
    backgroundColor: "#F0F6EC",
  },

  "& .rbc-off-range-bg": {
    backgroundColor: "#F8F7F2",
  },

  "& .rbc-off-range .rbc-button-link": {
    color: "#B8B8AF",
  },

  "& .rbc-today": {
    backgroundColor: "#F0F6EC",
  },

  "& .rbc-date-cell": {
    p: { xs: 1, md: 1.5 },
    textAlign: "left",
    fontSize: { xs: "12px", md: "14px" },
    fontWeight: 700,
  },

  "& .rbc-button-link": {
    color: C.dark,
    font: "inherit",
  },

  "& .rbc-now .rbc-button-link": {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: { xs: 24, md: 30 },
    height: { xs: 24, md: 30 },
    borderRadius: "50%",
    backgroundColor: C.green,
    color: C.dark,
    fontWeight: 800,
  },

  "& .rbc-event": {
    mx: { xs: 0.25, md: 0.75 },
    my: 0.5,
    px: { xs: 0.5, md: 1.25 },
    py: { xs: 0.5, md: 0.75 },
    border: "none",
    borderRadius: { xs: "4px", md: "5px 12px 12px 5px" },
    transition: "transform 250ms ease",
  },

  "& .rbc-event:hover": {
    transform: "translateX(3px)",
  },

  "& .rbc-event-label": {
    display: "none",
  },

  "& .rbc-event-content": {
    fontSize: { xs: "9px", md: "12px" },
    fontWeight: 700,
    lineHeight: 1.5,
    whiteSpace: "normal",
  },

  "& .rbc-show-more": {
    px: 1,
    color: C.greenDark,
    fontSize: { xs: "9px", md: "11px" },
    fontWeight: 800,
  },

  "& .rbc-overlay": {
    border: `1px solid ${C.border}`,
    borderRadius: "14px",
    backgroundColor: C.card,
    boxShadow: "0 16px 45px rgba(17,17,17,0.1)",
  },

  "& .rbc-overlay-header": {
    p: 1.5,
    borderBottom: `1px solid ${C.border}`,
  },

  "& .rbc-time-view, & .rbc-agenda-view": {
    border: `1px solid ${C.border}`,
    borderRadius: { xs: "12px", md: "20px" },
    overflow: "hidden",
    backgroundColor: C.card,
  },

  "& .rbc-time-header, & .rbc-time-content, & .rbc-timeslot-group": {
    borderColor: C.border,
  },

  "& .rbc-time-gutter, & .rbc-label": {
    color: C.muted,
    fontSize: "11px",
  },

  "& .rbc-agenda-view": {
    p: { xs: 1, md: 2.5 },
  },

  "& .rbc-agenda-table": {
    border: "none",
  },

  "& .rbc-agenda-table thead > tr > th": {
    p: 1.5,
    borderBottom: `1px solid ${C.border}`,
    color: C.muted,
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },

  "& .rbc-agenda-table tbody > tr > td": {
    p: 1.5,
    borderBottom: `1px solid ${C.border}`,
  },

  "@media (max-width: 600px)": {
    "& .rbc-calendar": {
      minHeight: 500,
    },

    "& .rbc-month-view": {
      minHeight: 500,
    },

    "& .rbc-month-row": {
      minHeight: 75,
    },

    "& .rbc-header": {
      py: 1.5,
      px: 0.25,
      fontSize: "8px",
      letterSpacing: 0,
    },

    "& .rbc-date-cell": {
      p: 0.5,
      fontSize: "10px",
    },

    "& .rbc-event": {
      mx: 0.125,
      my: 0.25,
      px: 0.375,
      py: 0.5,
      borderRadius: "4px",
    },

    "& .rbc-event-content": {
      fontSize: "8px",
      lineHeight: 1.3,
    },
  },
};

export const Root = styled(Stack)(({ theme }) => ({
  position: "relative",

  width: "100%",

  minHeight: "100vh",

  padding: "clamp(35px, 6vw, 90px) clamp(18px, 5vw, 80px) 70px",

  background: "#F4F2EC",

  color: "#111111",

  overflow: "hidden",

  /* subtle grain */

  "&::before": {
    content: '""',

    position: "fixed",

    inset: 0,

    zIndex: 100,

    pointerEvents: "none",

    opacity: 0.018,

    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.8'/%3E%3C/svg%3E\")",

    mixBlendMode: "multiply",
  },

  /* =====================================================
       CALENDAR
    ===================================================== */

  "& .rbc-calendar": {
    width: "100%",

    height: "100%",

    minHeight: 650,

    fontFamily: "inherit",
  },

  "& .rbc-toolbar": {
    display: "none",
  },

  /* =====================================================
       CUSTOM TOOLBAR
    ===================================================== */

  "& .parki-toolbar": {
    position: "relative",

    display: "grid",

    gridTemplateColumns: "1fr auto 1fr",

    alignItems: "center",

    gap: 20,

    minHeight: 100,

    marginBottom: 0,

    padding: "20px 0 24px",

    borderBottom: "1px solid rgba(17,17,17,.09)",
  },

  "& .toolbar-center": {
    textAlign: "center",
  },

  "& .toolbar-month": {
    fontSize: "clamp(34px, 4vw, 58px)",

    lineHeight: 0.9,

    fontWeight: 500,

    letterSpacing: "-.065em",

    whiteSpace: "nowrap",
  },

  "& .toolbar-subtitle": {
    marginTop: 12,

    fontSize: 8,

    fontWeight: 800,

    letterSpacing: ".28em",

    textTransform: "uppercase",

    opacity: 0.35,
  },

  "& .toolbar-arrow": {
    width: 38,

    height: 38,

    border: "1px solid rgba(17,17,17,.12)",

    color: "#111",

    transition: "all 400ms cubic-bezier(.22,1,.36,1)",
  },

  "& .toolbar-arrow:hover": {
    background: "#111",

    color: "#fff",

    transform: "translateY(-2px)",
  },

  "& .toolbar-views": {
    justifySelf: "end",

    padding: 4,

    borderRadius: "999px",

    background: "rgba(17,17,17,.045)",
  },

  "& .toolbar-views button": {
    border: 0,

    padding: "7px 11px",

    borderRadius: "999px",

    background: "transparent",

    color: "#111",

    fontFamily: "inherit",

    fontSize: 8,

    fontWeight: 700,

    letterSpacing: ".06em",

    cursor: "pointer",

    transition: "all 300ms ease",
  },

  "& .toolbar-views button.active": {
    background: "#111",

    color: "#fff",

    boxShadow: "0 5px 18px rgba(0,0,0,.12)",
  },

  /* =====================================================
       MONTH
    ===================================================== */

  "& .rbc-month-view": {
    display: "flex",

    flexDirection: "column",

    width: "100%",

    minHeight: 600,

    border: "none",

    borderRadius: 0,

    overflow: "hidden",

    background: "rgba(255,255,255,.12)",
  },

  /* =====================================================
       HEADER
    ===================================================== */

  "& .rbc-month-header": {
    display: "flex",

    flex: "0 0 auto",

    minHeight: 48,
  },

  "& .rbc-header": {
    display: "flex",

    alignItems: "center",

    justifyContent: "flex-start",

    flex: "1 0 0%",

    minWidth: 0,

    padding: "15px 14px",

    border: "none",

    borderBottom: "1px solid rgba(17,17,17,.08)",

    color: "rgba(17,17,17,.42)",

    fontSize: 8,

    fontWeight: 800,

    letterSpacing: ".24em",

    textTransform: "uppercase",
  },

  "& .rbc-header + .rbc-header": {
    borderLeft: "1px solid rgba(17,17,17,.035)",
  },

  /* =====================================================
       RBC STRUCTURE
    ===================================================== */

  "& .rbc-month-row": {
    display: "flex",

    flexDirection: "column",

    flex: "1 0 0%",

    minHeight: 0,

    border: "none",

    overflow: "hidden",
  },

  "& .rbc-row": {
    display: "flex",

    flexDirection: "row",

    width: "100%",
  },

  "& .rbc-row-bg": {
    display: "flex",

    flex: "1 0 0%",

    width: "100%",

    overflow: "hidden",
  },

  "& .rbc-row-content": {
    position: "relative",

    zIndex: 20,

    marginTop: "-1px",
  },

  /* =====================================================
       DAYS
    ===================================================== */

  "& .rbc-day-bg": {
    position: "relative",

    flex: "1 0 0%",

    minWidth: 0,

    border: "none",

    borderLeft: "1px solid rgba(17,17,17,.035)",

    borderBottom: "1px solid rgba(17,17,17,.035)",

    background: "rgba(255,255,255,.08)",

    transition: "background 500ms cubic-bezier(.22,1,.36,1)",
  },

  "& .rbc-day-bg:first-child": {
    borderLeft: "none",
  },

  "& .rbc-day-bg:hover": {
    background: "rgba(114,200,137,.055)",
  },

  "& .rbc-off-range-bg": {
    background: "rgba(17,17,17,.012)",
  },

  "& .rbc-today": {
    background: "rgba(114,200,137,.045)",
  },

  /* =====================================================
       DATES
    ===================================================== */

  "& .rbc-date-cell": {
    flex: "1 1 0%",

    minWidth: 0,

    padding: "11px 13px",

    fontSize: 10,

    fontWeight: 500,

    color: "rgba(17,17,17,.58)",

    textAlign: "right",

    zIndex: 30,
  },

  "& .rbc-date-cell > a": {
    display: "inline-flex",

    alignItems: "center",

    justifyContent: "center",

    width: 30,

    height: 30,

    borderRadius: "50%",

    color: "rgba(17,17,17,.72)",

    fontSize: 10,

    fontWeight: 500,

    textDecoration: "none",

    transition: "all 450ms cubic-bezier(.22,1,.36,1)",
  },

  "& .rbc-date-cell > a:hover": {
    background: "#111",

    color: "#fff",

    transform: "scale(1.08)",
  },

  "& .rbc-now > a": {
    background: "#72C889",

    color: "#fff",

    fontWeight: 800,

    boxShadow:
      "0 0 0 7px rgba(114,200,137,.08), 0 8px 25px rgba(114,200,137,.25)",
  },

  /* =====================================================
       EVENTS
    ===================================================== */

  "& .rbc-row-segment": {
    flex: "1 0 auto",

    padding: "0 7px 6px",
  },

  "& .rbc-event": {
    position: "relative",

    minHeight: 34,

    padding: "8px 13px",

    border: "none",

    borderRadius: "0 999px 999px 0",

    fontSize: 9,

    fontWeight: 700,

    letterSpacing: ".015em",

    overflow: "visible",

    boxShadow: "0 5px 18px rgba(17,17,17,.07)",

    transition: "all 500ms cubic-bezier(.22,1,.36,1)",

    zIndex: 25,
  },

  "& .rbc-event:hover": {
    transform: "translateX(9px) translateY(-2px)",

    boxShadow: "0 16px 40px rgba(17,17,17,.13)",

    zIndex: 60,
  },

  "& .parki-event": {
    position: "relative",

    display: "flex",

    alignItems: "center",

    gap: 8,

    width: "100%",

    height: "100%",
  },

  "& .parki-event-dot": {
    flexShrink: 0,

    width: 5,

    height: 5,

    borderRadius: "50%",

    background: "rgba(255,255,255,.9)",

    boxShadow: "0 0 0 3px rgba(255,255,255,.12)",
  },

  "& .parki-event-title": {
    overflow: "hidden",

    textOverflow: "ellipsis",

    whiteSpace: "nowrap",
  },

  /* =====================================================
       JOURNEY PATH
    ===================================================== */

  "& .journey-path": {
    zIndex: 10,
  },

  "& .journey-path-svg": {
    overflow: "visible",
  },

  "& .journey-marker": {
    zIndex: 15,
  },

  /* =====================================================
       SHOW MORE
    ===================================================== */

  "& .rbc-show-more": {
    marginTop: 4,

    padding: "2px 7px",

    color: "#111",

    fontSize: 8,

    fontWeight: 800,

    textDecoration: "none",
  },

  /* =====================================================
       TIME VIEWS
    ===================================================== */

  "& .rbc-time-view": {
    display: "flex",

    flexDirection: "column",

    height: "100%",

    border: "none",

    background: "rgba(255,255,255,.10)",
  },

  "& .rbc-time-header": {
    borderBottom: "1px solid rgba(17,17,17,.08)",
  },

  "& .rbc-time-content": {
    display: "flex",

    flex: "1 0 0%",

    borderTop: "none",

    background: "rgba(255,255,255,.08)",
  },

  "& .rbc-time-column": {
    display: "flex",

    flexDirection: "column",

    flex: "1 0 0%",
  },

  "& .rbc-timeslot-group": {
    display: "flex",

    flexDirection: "column",

    minHeight: 90,

    borderBottom: "1px solid rgba(17,17,17,.035)",
  },

  "& .rbc-time-slot": {
    flex: "1 0 0%",

    borderTop: "1px solid rgba(17,17,17,.02)",
  },

  "& .rbc-current-time-indicator": {
    height: 2,

    background: "#72C889",

    boxShadow: "0 0 15px rgba(114,200,137,.6)",
  },

  /* =====================================================
       AGENDA
    ===================================================== */

  "& .rbc-agenda-view": {
    width: "100%",

    border: "none",

    background: "transparent",
  },

  "& .rbc-agenda-view table": {
    width: "100%",

    borderCollapse: "collapse",
  },

  "& .rbc-agenda-view tbody > tr > td": {
    padding: "20px 14px",

    borderBottom: "1px solid rgba(17,17,17,.06)",
  },

  /* =====================================================
       FOOTER
    ===================================================== */

  "& .calendar-footer": {
    display: "grid",

    gridTemplateColumns: "1fr 1fr 1fr",

    alignItems: "end",

    marginTop: 70,

    paddingTop: 26,

    borderTop: "1px solid rgba(17,17,17,.09)",
  },

  "& .footer-number": {
    fontSize: "clamp(70px, 9vw, 130px)",

    lineHeight: 0.72,

    fontWeight: 500,

    letterSpacing: "-.09em",
  },

  "& .footer-label": {
    marginTop: 10,

    fontSize: 8,

    fontWeight: 800,

    letterSpacing: ".22em",

    textTransform: "uppercase",

    opacity: 0.38,
  },

  "& .footer-manifesto": {
    justifySelf: "center",

    maxWidth: 230,

    fontSize: 11,

    lineHeight: 1.6,

    textAlign: "center",

    opacity: 0.48,
  },

  "& .footer-brand": {
    justifySelf: "end",

    fontSize: 9,

    fontWeight: 800,

    letterSpacing: ".20em",

    textTransform: "uppercase",
  },

  "& .footer-brand span": {
    marginLeft: 5,

    fontSize: 14,
  },

  /* =====================================================
       MOBILE
    ===================================================== */

  [theme.breakpoints.down("md")]: {
    padding: "30px 12px 50px",

    "& .parki-toolbar": {
      gridTemplateColumns: "auto 1fr",

      minHeight: 80,
    },

    "& .toolbar-center": {
      order: -1,

      textAlign: "left",
    },

    "& .toolbar-month": {
      fontSize: 34,
    },

    "& .toolbar-subtitle": {
      marginTop: 8,

      fontSize: 7,
    },

    "& .toolbar-views": {
      gridColumn: "1 / -1",

      justifySelf: "start",
    },

    "& .rbc-calendar": {
      minHeight: 500,
    },

    "& .rbc-month-view": {
      minHeight: 500,
    },

    "& .rbc-header": {
      padding: "11px 2px",

      justifyContent: "center",

      fontSize: 7,

      letterSpacing: ".08em",
    },

    "& .rbc-month-row": {
      minHeight: 72,
    },

    "& .rbc-date-cell": {
      padding: "6px 4px",

      fontSize: 8,
    },

    "& .rbc-date-cell > a": {
      width: 24,

      height: 24,

      fontSize: 8,
    },

    "& .rbc-event": {
      minHeight: 23,

      padding: "5px 6px",

      borderRadius: "0 999px 999px 0",

      fontSize: 7,
    },

    "& .parki-event-dot": {
      width: 4,

      height: 4,
    },

    "& .calendar-footer": {
      gridTemplateColumns: "1fr 1fr",

      gap: 20,

      marginTop: 45,
    },

    "& .footer-manifesto": {
      display: "none",
    },

    "& .footer-brand": {
      justifySelf: "end",
    },
  },
}));

/* =========================================================
   HEADER
========================================================= */

export const Header = styled(Stack)(({ theme }) => ({
  display: "grid",

  gridTemplateColumns: "minmax(0,1fr) 250px",

  alignItems: "end",

  gap: 40,

  width: "100%",

  marginBottom: 55,

  [theme.breakpoints.down("md")]: {
    display: "block",

    marginBottom: 35,
  },
}));

/* =========================================================
   EYEBROW
========================================================= */

export const Eyebrow = styled(Typography)(() => ({
  display: "flex",

  alignItems: "center",

  gap: 28,

  marginBottom: 25,

  fontSize: 9,

  fontWeight: 800,

  letterSpacing: ".32em",

  textTransform: "uppercase",

  color: "#111",

  "& span": {
    position: "relative",

    fontWeight: 600,

    opacity: 0.45,
  },

  "& span::after": {
    content: '""',

    position: "absolute",

    right: -35,

    top: "50%",

    width: 25,

    height: 1,

    background: "#111",

    opacity: 0.35,
  },
}));

/* =========================================================
   TITLE
========================================================= */

export const Title = styled(Typography)(({ theme }) => ({
  margin: 0,

  maxWidth: 1050,

  fontSize: "clamp(60px, 8.5vw, 145px)",

  lineHeight: 0.8,

  fontWeight: 600,

  letterSpacing: "-.085em",

  color: "#111",

  "& span": {
    opacity: 0.92,
  },

  "& em": {
    fontStyle: "italic",

    fontWeight: 400,

    fontFamily: "Georgia, 'Times New Roman', serif",

    WebkitTextStroke: "0",

    color: "#111",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "clamp(48px, 14vw, 80px)",

    lineHeight: 0.84,
  },
}));

/* =========================================================
   HEADER DESCRIPTION
========================================================= */

export const HeaderDescription = styled(Box)(() => ({
  display: "flex",

  flexDirection: "column",

  alignItems: "flex-start",

  gap: 13,

  paddingBottom: 5,

  "& .description-number": {
    fontSize: 10,

    fontWeight: 800,

    letterSpacing: ".20em",

    color: "#72C889",
  },

  "& .MuiTypography-root": {
    fontSize: 11,

    lineHeight: 1.65,

    color: "rgba(17,17,17,.55)",
  },

  "& .description-line": {
    width: 55,

    height: 1,

    marginTop: 3,

    background: "#111",

    opacity: 0.25,
  },

  "& .description-small": {
    marginTop: 12,

    fontSize: 8,

    fontWeight: 800,

    lineHeight: 1.6,

    letterSpacing: ".22em",

    color: "#111",

    opacity: 0.65,
  },
}));

/* =========================================================
   CALENDAR WRAPPER
========================================================= */

export const CalendarWrapper = styled(Box)<BoxProps>(() => ({
  position: "relative",

  width: "100%",

  maxWidth: 1900,

  margin: "0 auto",
}));
