import React from "react";
import { Box, Chip, Stack, Container } from "@mui/material";

export default function TrustBadges() {
  const badges = [
    "🏥 AYUSH Approved",
    "🔒 Data Secure",
    "✅ FDA Verified",
    "⭐ 4.9/5 Rating",
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {badges.map((badge, i) => (
          <Chip key={i} label={badge} variant="outlined" />
        ))}
      </Stack>
    </Container>
  );
}
