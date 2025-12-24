import React from "react";
import { Grid, Container } from "@mui/material";

export default function ComparisonGrid({
  original,
  alternative,
  similarity,
  savings,
}) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          {original}
        </Grid>
        <Grid item xs={12} md={6}>
          {alternative}
        </Grid>
      </Grid>
      {similarity && (
        <Grid item xs={12} sx={{ mb: 4 }}>
          {similarity}
        </Grid>
      )}
      {savings && (
        <Grid item xs={12} md={6}>
          {savings}
        </Grid>
      )}
    </Container>
  );
}
