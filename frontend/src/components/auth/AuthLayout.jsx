import React from "react";
import { Box, Paper, Typography, Container } from "@mui/material";

export default function AuthLayout({ children, title }) {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 300px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>
          {children}
        </Paper>
      </Container>
    </Box>
  );
}
