"use client";

import Link from "next/link";
import { MouseEvent, ReactNode, useState } from "react";

import { Menu } from "@mui/material";
import { IoChevronDown } from "react-icons/io5";
// STYLES
import {
  DropdownButton,
  DropdownIcon,
  DropdownItem,
  DropdownLabel,
} from "./Dropdown.Styles";

export type DropdownItem = {
  label: string;
  href: string;
};

type Props = {
  label: string;
  items: DropdownItem[];
  isDesktop?: boolean;
  icon?: ReactNode;
};

export default function PrimaryDropdown({
  label,
  items,
  isDesktop = true,
  icon,
}: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <DropdownButton
        onMouseEnter={isDesktop ? handleOpen : undefined}
        onClick={!isDesktop ? handleOpen : undefined}
      >
        {icon}

        <DropdownLabel>{label}</DropdownLabel>

        <DropdownIcon open={open}>
          <IoChevronDown />
        </DropdownIcon>
      </DropdownButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            onMouseLeave: isDesktop ? handleClose : undefined,
          },
          paper: {
            sx: {
              bgcolor: "#111",
              borderRadius: 3,
              mt: 1,
            },
          },
        }}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={handleClose}
            style={{
              textDecoration: "none",
            }}
          >
            <DropdownItem>{item.label}</DropdownItem>
          </Link>
        ))}
      </Menu>
    </>
  );
}
