"use client";

import { forwardRef, type ReactNode } from "react";

// import { Navbar, Footer } from "@/app/components/common/layouts";

import { Box } from "@mui/material";

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
        <h1>mmmmjjj</h1>
        {/* {displayNavbar && <Navbar />} */}

        {children}

        {/* {displayFooter && <Footer />} */}
      </Box>
    );
  }
);

ContainerApp.displayName = "ContainerApp";

export default ContainerApp;
