import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Header({ title, subtitle, backgroundGradient }) {
  return (
    <Box
      sx={{
        background:
          backgroundGradient ||
          "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
        color: "#fff",
        py: 4,
        mb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 700, mb: subtitle ? 1 : 0 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
}
