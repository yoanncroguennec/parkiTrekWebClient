import { Button } from "@mui/material";

export function GlassButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      sx={{
        px: 3,
        py: 1.2,

        borderRadius: "999px",

        color: "#fff",

        textTransform: "none",

        background: "rgba(255,255,255,.05)",

        backdropFilter: "blur(20px)",

        border: "1px solid rgba(255,255,255,.08)",

        transition: ".4s",

        "&:hover": {
          transform: "translateY(-3px)",

          background: "rgba(255,255,255,.1)",

          boxShadow: `
            0 15px 40px rgba(0,0,0,.35),
            0 0 40px rgba(180,255,57,.18)
          `,
        },
      }}
    >
      {children}
    </Button>
  );
}
