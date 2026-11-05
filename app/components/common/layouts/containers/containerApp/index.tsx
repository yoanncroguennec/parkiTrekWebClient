"use client";

import { forwardRef, type ReactNode } from "react";
import { Box } from "@mui/material";
// LAYOUTS
import { Navbar, Footer } from "@/app/components/common/layouts";

type Props = {
  children: ReactNode;
  displayNavbar?: boolean;
  displayFooter?: boolean;
  className?: string;
};

const ContainerApp = forwardRef<HTMLDivElement, Props>(
  ({ children, displayNavbar = true, displayFooter = true, className }, ref) => {
    return (
      <Box ref={ref} className={className}>
        {displayNavbar && <Navbar />}

        {children}

        {/* {displayFooter && <Footer />} */}
      </Box>
    );
  }
);

ContainerApp.displayName = "ContainerApp";

export default ContainerApp;
