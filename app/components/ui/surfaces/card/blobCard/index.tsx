import { forwardRef, ReactNode } from "react";

import { Stack, SxProps, Theme } from "@mui/material";
import { formats } from "./data";

type Props = {
  children: ReactNode;
  formatting: 1 | 2 | 3 | 4 | 5;
  background: string;
  sx?: SxProps<Theme>;
};

const BlobCard = forwardRef<HTMLDivElement, Props>(function BlobCard(
  { children, formatting, background, sx },
  ref
) {
  return (
    <Stack
      ref={ref}
      sx={{
        width: 200,
        height: 110,
        background,
        alignItems: "center",
        justifyContent: "center",
        ...formats[formatting],
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
});

BlobCard.displayName = "BlobCard";

export default BlobCard;
