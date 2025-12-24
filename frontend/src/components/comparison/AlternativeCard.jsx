import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function AlternativeCard({
  medicine,
  savings,
  isSaved,
  onSave,
}) {
  return (
    <Card
      sx={{
        background: "linear-gradient(135deg, #4caf50 0%, #81c784 100%)",
        color: "#fff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <TrendingDownIcon sx={{ mr: 1, fontSize: 40 }} />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Cheaper Alternative
          </Typography>
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          {medicine.brandName}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
          Generic: {medicine.genericName}
        </Typography>
        {medicine.strength && (
          <Chip label={medicine.strength} size="small" sx={{ mb: 2 }} />
        )}
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>
            Price per unit
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            ₹{medicine.price}
          </Typography>
        </Box>
        {savings > 0 && (
          <Chip
            icon={<TrendingDownIcon />}
            label={`Save ₹${savings}`}
            sx={{ mt: 2, background: "rgba(255,255,255,0.3)" }}
          />
        )}
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          startIcon={<BookmarkIcon />}
          onClick={() => onSave(medicine)}
          sx={{
            background: "#fff",
            color: "#4caf50",
            fontWeight: 600,
            "&:hover": { background: "rgba(255,255,255,0.9)" },
          }}
        >
          {isSaved ? "Saved" : "Save Alternative"}
        </Button>
      </CardActions>
    </Card>
  );
}
