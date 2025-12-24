import React from "react";
import { Grid, Container } from "@mui/material";
import StepCard from "./StepCard";
import SearchIcon from "@mui/icons-material/Search";
import CompareIcon from "@mui/icons-material/Compare";
import SaveIcon from "@mui/icons-material/Save";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

export default function StepsGrid() {
  const steps = [
    {
      number: 1,
      title: "Search Medicine",
      description: "Enter the name of the medicine you take regularly",
      icon: SearchIcon,
    },
    {
      number: 2,
      title: "View Alternatives",
      description: "See similar medicines with different price points",
      icon: CompareIcon,
    },
    {
      number: 3,
      title: "Compare Details",
      description: "Check composition, similarity score, and savings",
      icon: SaveIcon,
    },
    {
      number: 4,
      title: "Save & Switch",
      description: "Switch to affordable alternatives and save big",
      icon: TrendingDownIcon,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={3}>
        {steps.map((step) => (
          <Grid item xs={12} sm={6} md={3} key={step.number}>
            <StepCard {...step} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
