"use client";

import Link from "next/link";
import { Box } from "@mui/material";
import { ReactNode, useEffect, useRef } from "react";
// ICONS
import { FiArrowUpRight } from "@/app/utils/constants/icons";

type MagneticLinkProps = {
  children: ReactNode;
  href?: string;
};

export default function MagneticLink({
  children,
  href = "#",
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const move = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();

      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);

      gsap.to(element, {
        x: x * 0.12,
        y: y * 0.12,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
      });
    };

    element.addEventListener("mousemove", move);

    element.addEventListener("mouseleave", leave);

    return () => {
      element.removeEventListener("mousemove", move);

      element.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <Box
      component={Link}
      ref={ref}
      href={href}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "fit-content",
        minWidth: "180px",
        padding: "5px 0",
        color: "#17171d",
        fontSize: "14px",
        textDecoration: "none",
      }}
    >
      <span>{children}</span>

      <FiArrowUpRight />
    </Box>
  );
}
