import React from "react";
import { Card, Box, Typography } from "@mui/material"; // ✅ CardContent removed

export default function StepCard({ number, title, description, icon: Icon }) {
  return (
    <Card
      sx={{
        textAlign: "center",
        p: 3,
        height: "100%",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
        },
      }}
    >
      <Box
        sx={{
          width: 70,
          height: 70,
          background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
          color: "#fff",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          fontWeight: 700,
          fontSize: "1.5rem",
          mb: 2,
        }}
      >
        {number}
      </Box>
      {Icon && <Icon sx={{ fontSize: 40, color: "#1976d2", mb: 2 }} />}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </Card>
  );
}
