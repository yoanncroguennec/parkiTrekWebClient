"use client";

import type { RefObject } from "react";
import type { ButtonProps } from "@mui/material/Button";
import type { IconType } from "react-icons";

// ANIMATIONS
import {
  animatePrimaryButtonHover,
  animatePrimaryButtonLeave,
} from "./animations/primaryButtonHover";

// STYLES
import { PrimaryButtonRoot, PrimaryButtonGroup } from "./PrimaryButton.Styles";

// const FILTER_BACKGROUND = "linear-gradient(135deg, #06B6D4, #8B5CF6)";

// const FILTER_BACKGROUND_DEFAULT = "rgba(255, 255, 255, 0.8)";

export type PrimaryButtonItem = {
  icon?: IconType;
  endIcon?: IconType;
  ref?: RefObject<HTMLButtonElement | null>;

  text: string;

  variant?: ButtonProps["variant"];
  onClick?: ButtonProps["onClick"];

  active?: boolean;

  background?: string;
  backgroundHover?: string;
  backdropFilter?: string;
  border?: string;
  boxShadow?: string;
};

type Props = {
  buttons: PrimaryButtonItem[];
};

export default function PrimaryButton({ buttons }: Props) {
  return (
    <PrimaryButtonGroup>
      {buttons.map((button, index) => {
        const Icon = button.icon;
        const EndIcon = button.endIcon;

        // const background = button.active
        //   ? FILTER_BACKGROUND
        //   : FILTER_BACKGROUND_DEFAULT;

        return (
          <PrimaryButtonRoot
            key={`${button.text}-${index}`}
            ref={button.ref}
            active={button.active}
            variant={button.variant}
            background={button.background}
            backgroundHover={button.backgroundHover}
            backdropFilter={button.backdropFilter}
            border={button.border}
            boxShadow={button.boxShadow}
            onClick={button.onClick}
            endIcon={EndIcon && <EndIcon size={22} aria-hidden="true" />}
            onMouseEnter={(event) =>
              animatePrimaryButtonHover(event.currentTarget)
            }
            onMouseLeave={(event) =>
              animatePrimaryButtonLeave(event.currentTarget)
            }
          >
            {Icon && <Icon size={18} aria-hidden="true" />}

            {button.text}
          </PrimaryButtonRoot>
        );
      })}
    </PrimaryButtonGroup>
  );
}
