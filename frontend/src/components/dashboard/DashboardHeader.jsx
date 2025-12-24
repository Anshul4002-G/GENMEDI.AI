import React from "react";
import { Box, Typography, Card, Grid, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoneyIcon from "@mui/icons-material/AttachMoney";
import { useAuth } from "../../hooks/useAuth";

export default function DashboardHeader() {
  const { user } = useAuth();
  const stats = [
    { icon: SearchIcon, label: "Total Searches", value: 12 },
    { icon: BookmarkIcon, label: "Saved Alternatives", value: 5 },
    { icon: MoneyIcon, label: "Total Savings", value: "₹2,450" },
  ];

  return (
    <Container maxWidth="lg" sx={{ mb: 6 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Welcome back, {user?.name || "User"}! 👋
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Here's your MediCost AI dashboard
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {stats.map((stat, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ p: 3, textAlign: "center" }}>
              <stat.icon sx={{ fontSize: 40, color: "#1976d2", mb: 1 }} />
              <Typography variant="body2" color="textSecondary">
                {stat.label}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
                {stat.value}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
