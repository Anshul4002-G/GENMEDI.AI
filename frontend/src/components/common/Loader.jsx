import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loader({ text = "Loading...", fullScreen = false }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: fullScreen ? "100vh" : "50vh",
        gap: 2,
      }}
    >
      <CircularProgress size={60} />
      <Typography variant="h6" sx={{ color: "#757575" }}>
        {text}
      </Typography>
    </Box>
  );
}
