import React from "react";
import { Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function HeroButtons() {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
      <Button
        component={RouterLink}
        to="/search"
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<SearchIcon />}
      >
        Search Medicines
      </Button>
      <Button
        component={RouterLink}
        to="/how-it-works"
        variant="outlined"
        size="large"
        sx={{ borderColor: "#fff", color: "#fff" }}
      >
        Learn More
      </Button>
    </Box>
  );
}
