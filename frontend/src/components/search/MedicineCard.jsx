import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

export default function MedicineCard({ medicine }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          {medicine.brandName}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          {medicine.genericName}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
          {medicine.strength && <Chip label={medicine.strength} size="small" />}
          {medicine.category && <Chip label={medicine.category} size="small" />}
        </Box>
        <Typography variant="h5" sx={{ color: "#4caf50", fontWeight: 700 }}>
          ₹{medicine.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component={RouterLink}
          to={`/compare/${medicine.id}`}
          variant="contained"
          fullWidth
          endIcon={<TrendingDownIcon />}
        >
          Find Alternatives
        </Button>
      </CardActions>
    </Card>
  );
}
