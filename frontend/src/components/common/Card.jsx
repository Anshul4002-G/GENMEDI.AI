import React from "react";
import { Card as MuiCard, CardContent, CardActions, Box } from "@mui/material";

export default function Card({
  children,
  actions,
  sx,
  elevation = 2,
  ...props
}) {
  return (
    <MuiCard
      elevation={elevation}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
          transform: "translateY(-4px)",
        },
        ...sx,
      }}
      {...props}
    >
      <CardContent sx={{ flex: 1 }}>{children}</CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </MuiCard>
  );
}
