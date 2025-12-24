import React from "react";
import { Box } from "@mui/material";
import Header from "../components/common/Header";
import StepsGrid from "../components/howItWorks/StepsGrid";
import FAQ from "../components/howItWorks/FAQ";
import Disclaimer from "../components/howItWorks/Disclaimer";

export default function HowItWorksPage() {
  return (
    <Box>
      <Header
        title="How It Works"
        subtitle="Simple 4-step process to find affordable medicines"
      />
      <StepsGrid />
      <FAQ />
      <Disclaimer />
    </Box>
  );
}
