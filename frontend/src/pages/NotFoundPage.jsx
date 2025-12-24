import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h1" sx={{ fontWeight: 700, mb: 2 }}>
          404
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Page Not Found
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          color="primary"
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
}
