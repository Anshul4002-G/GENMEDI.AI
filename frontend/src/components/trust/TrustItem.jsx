import React from "react";
import { Box, Typography } from "@mui/material";

export default function TrustItem({ icon: Icon, title, description }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Icon sx={{ fontSize: 48, color: "#1976d2", mb: 2 }} />
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </Box>
  );
}
