import React from "react";
import { Box, Typography, LinearProgress, Chip } from "@mui/material";

export default function SimilarityBar({ score = 0.95 }) {
  const percentage = score * 100;

  const getColor = () => {
    if (percentage >= 90) return "#4caf50";
    if (percentage >= 75) return "#8bc34a";
    if (percentage >= 60) return "#fbc02d";
    return "#ff9800";
  };

  return (
    <Box sx={{ py: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Medicine Similarity
        </Typography>
        <Chip label={`${percentage.toFixed(0)}% Match`} color="primary" />
      </Box>
      <LinearProgress
        variant="determinate"
        value={percentage}
        sx={{
          height: 12,
          borderRadius: 6,
          backgroundColor: "#f0f0f0",
          "& .MuiLinearProgress-bar": {
            backgroundColor: getColor(),
            borderRadius: 6,
          },
        }}
      />
      <Typography
        variant="caption"
        color="textSecondary"
        sx={{ mt: 1, display: "block" }}
      >
        Same active ingredients means equal therapeutic effect
      </Typography>
    </Box>
  );
}
