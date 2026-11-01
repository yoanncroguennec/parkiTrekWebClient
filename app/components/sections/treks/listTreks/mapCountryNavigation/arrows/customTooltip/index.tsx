import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    slotProps={{
      transition: {
        timeout: 400,
      },
    }}
  />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    background: `
      linear-gradient(
        135deg,
        rgba(255,255,255,.08),
        rgba(255,255,255,.02)
      ),
      rgba(15,23,42,.9)
    `,
    backdropFilter: "blur(30px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: 22,
    letterSpacing: 2,
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#fff",
    padding: "12px 18px",
    fontSize: 13,
    border: "1px solid rgba(255,255,255,.1)",
    boxShadow: `
      0 20px 50px rgba(0,0,0,.25),
      inset 0 1px 0 rgba(255,255,255,.08)
    `,
  },

  [`& .${tooltipClasses.arrow}`]: {
    color: "rgba(15,23,42,.85)",
  },
}));
