import React from "react";
import { Box, Container, Typography, Link, Grid, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bg: "#f5f5f5",
        py: 6,
        mt: 8,
        borderTop: "1px solid #eee",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              MediCost AI
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Find affordable medicine alternatives and save money on
              healthcare.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Link
              href="#"
              underline="none"
              variant="body2"
              display="block"
              sx={{ mb: 1 }}
            >
              About Us
            </Link>
            <Link
              href="#"
              underline="none"
              variant="body2"
              display="block"
              sx={{ mb: 1 }}
            >
              Contact
            </Link>
            <Link href="#" underline="none" variant="body2" display="block">
              Blog
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Legal
            </Typography>
            <Link
              href="#"
              underline="none"
              variant="body2"
              display="block"
              sx={{ mb: 1 }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="none"
              variant="body2"
              display="block"
              sx={{ mb: 1 }}
            >
              Terms of Service
            </Link>
            <Link href="#" underline="none" variant="body2" display="block">
              Disclaimer
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <FacebookIcon sx={{ cursor: "pointer" }} />
              <TwitterIcon sx={{ cursor: "pointer" }} />
              <LinkedInIcon sx={{ cursor: "pointer" }} />
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body2" sx={{ textAlign: "center", color: "#999" }}>
          © 2024 MediCost AI. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
