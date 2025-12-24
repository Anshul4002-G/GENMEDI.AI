import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import HeroSection from "../components/hero/HeroSection";
import TrustSection from "../components/trust/TrustSection";
import TrustBadges from "../components/trust/TrustBadges";
import SearchForm from "../components/search/SearchForm";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <SearchForm />
      <TrustBadges />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: 700, mb: 6 }}
        >
          Why Choose MediCost AI?
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              title: "Save Money",
              desc: "Find cheaper alternatives and save up to 80%",
            },
            {
              title: "Quality Verified",
              desc: "All medicines are FDA approved",
            },
            {
              title: "100% Safe",
              desc: "Secure and encrypted data protection",
            },
            { title: "24/7 Support", desc: "Expert support always available" },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card sx={{ textAlign: "center", p: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <TrustSection />
    </Box>
  );
}
