import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import TrustItem from "./TrustItem";
import VerifiedIcon from "@mui/icons-material/Verified";
import SecurityIcon from "@mui/icons-material/Security";
import HistoryIcon from "@mui/icons-material/History";
import PeopleIcon from "@mui/icons-material/People";

export default function TrustSection() {
  const items = [
    {
      icon: VerifiedIcon,
      title: "100% FDA Approved",
      desc: "All medicines verified by regulatory bodies",
    },
    {
      icon: SecurityIcon,
      title: "Secure & Private",
      desc: "256-bit encryption for your data",
    },
    {
      icon: HistoryIcon,
      title: "Track History",
      desc: "Keep records of your medications",
    },
    {
      icon: PeopleIcon,
      title: "100K+ Happy Users",
      desc: "Trusted by thousands of Indians",
    },
  ];

  return (
    <Box sx={{ py: 6, my: 6, background: "#f9f9f9", borderRadius: 2 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 4,
          }}
        >
          Why Trust MediCost AI?
        </Typography>
        <Grid container spacing={3}>
          {items.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <TrustItem
                icon={item.icon}
                title={item.title}
                description={item.desc}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
