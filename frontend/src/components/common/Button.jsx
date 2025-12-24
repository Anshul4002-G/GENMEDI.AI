import React from "react";
import { Button as MuiButton } from "@mui/material";

export default function Button({
  children,
  variant = "contained",
  color = "primary",
  fullWidth = false,
  size = "medium",
  ...props
}) {
  return (
    <MuiButton
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      size={size}
      sx={{
        textTransform: "none",
        fontWeight: 600,
        borderRadius: 1,
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
