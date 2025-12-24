import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import Loader from "../common/Loader";
import MedicineCard from "./MedicineCard";

export default function SearchResults({ results, loading, error }) {
  if (loading) return <Loader text="Searching medicines..." />;

  if (error) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        </Box>
      </Container>
    );
  }

  if (results.length === 0) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography variant="h6" color="textSecondary">
            No medicines found. Try a different search.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {results.map((medicine) => (
          <Grid item xs={12} sm={6} md={4} key={medicine.id}>
            <MedicineCard medicine={medicine} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
