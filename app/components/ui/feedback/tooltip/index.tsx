"use client";

import { ReactNode } from "react";
import MuiTooltip, { TooltipProps } from "@mui/material/Tooltip";
import { stylesTooltip, stylesTooltip_Arrow } from "./Tooltip.Styles";

type Props = {
  title: ReactNode;
  children: ReactNode;
} & Omit<TooltipProps, "title" | "children">;

export default function Tooltip({ title, children, ...props }: Props) {
  return (
    <MuiTooltip
      title={title}
      arrow
      placement="top"
      slotProps={{
        tooltip: {
          sx: stylesTooltip,
        },
        arrow: {
          sx: stylesTooltip_Arrow,
        },
      }}
      {...props}
    >
      <span>{children}</span>
    </MuiTooltip>
  );
}
