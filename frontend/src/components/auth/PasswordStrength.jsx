import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

export default function PasswordStrength({ strength }) {
  const getColor = () => {
    if (strength < 25) return "#d32f2f";
    if (strength < 50) return "#ed6c02";
    if (strength < 75) return "#fbc02d";
    return "#4caf50";
  };

  const getLabel = () => {
    if (strength < 25) return "Weak";
    if (strength < 50) return "Fair";
    if (strength < 75) return "Good";
    return "Strong";
  };

  return (
    <Box>
      <LinearProgress
        variant="determinate"
        value={strength}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: "#f0f0f0",
          "& .MuiLinearProgress-bar": {
            backgroundColor: getColor(),
          },
        }}
      />
      <Typography
        variant="caption"
        sx={{
          color: getColor(),
          fontWeight: 600,
          mt: 1,
          display: "block",
        }}
      >
        Password Strength: {getLabel()}
      </Typography>
    </Box>
  );
}
