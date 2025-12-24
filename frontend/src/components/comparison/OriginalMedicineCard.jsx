import React from "react";
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";

export default function OriginalMedicineCard({ medicine }) {
  return (
    <Card
      sx={{
        background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
        color: "#fff",
        height: "100%",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <LocalPharmacyIcon sx={{ mr: 1, fontSize: 40 }} />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Original Medicine
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
      </CardContent>
    </Card>
  );
}
