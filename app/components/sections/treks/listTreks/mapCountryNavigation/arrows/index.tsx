"use client";

import { useRef } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
// COMPONENTS
import { CustomTooltip } from "./customTooltip";
// HOOKS
import { useArrowButtonAnimation } from "../hooks/useArrowButtonAnimation";
// ICONS
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
// STYLES
import { ArrowButtonContainer } from "./ArrowButton.Styles";

type Props = {
  direction: "left" | "right";
  onClick: () => void;
  titleTooltip: string;
};

export default function ArrowButton({ direction, onClick, titleTooltip }: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const buttonRef = useRef<HTMLButtonElement>(null);

  const isLeft = direction === "left";

  const { handleMouseEnter, handleMouseLeave } = useArrowButtonAnimation({
    buttonRef,
    direction,
  });

  return (
    <CustomTooltip arrow placement="top" title={titleTooltip}>
      <ArrowButtonContainer
        isLeft={isLeft}
        ref={buttonRef}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isLeft ? (
          <MdArrowBackIosNew color="#000" size={isDesktop ? 45 : 20} />
        ) : (
          <MdArrowForwardIos color="#000" size={isDesktop ? 45 : 20} />
        )}
      </ArrowButtonContainer>
    </CustomTooltip>
  );
}
