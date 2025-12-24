import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import HeroButtons from "./HeroButtons";
import HeroPills from "./HeroPills";

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
        color: "#fff",
        py: 8,
        mb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
              Find Affordable Medicine Alternatives
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Compare prices and save up to 80% on your medications
            </Typography>
            <HeroButtons />
            <HeroPills />
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <LocalPharmacyIcon sx={{ fontSize: 200, opacity: 0.5 }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
