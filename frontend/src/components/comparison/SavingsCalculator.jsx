import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  LinearProgress,
} from "@mui/material";

export default function SavingsCalculator({ originalPrice, alternativePrice }) {
  const [quantity, setQuantity] = useState(1);
  const savings = (originalPrice - alternativePrice) * quantity;
  const savingsPercent = Math.round(
    ((originalPrice - alternativePrice) / originalPrice) * 100
  );

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
          💰 Savings Calculator
        </Typography>
        <TextField
          type="number"
          label="Quantity (number of units)"
          value={quantity}
          onChange={(e) =>
            setQuantity(Math.max(1, parseInt(e.target.value) || 1))
          }
          inputProps={{ min: 1 }}
          fullWidth
          sx={{ mb: 3 }}
        />
        <Box sx={{ p: 2, background: "#f5f5f5", borderRadius: 2, mb: 3 }}>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
            Total Savings
          </Typography>
          <Typography variant="h4" sx={{ color: "#4caf50", fontWeight: 700 }}>
            ₹{savings.toFixed(2)} ({savingsPercent}%)
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Original Total:{" "}
            <strong>₹{(originalPrice * quantity).toFixed(2)}</strong>
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Alternative Total:{" "}
            <strong>₹{(alternativePrice * quantity).toFixed(2)}</strong>
          </Typography>
          <LinearProgress
            variant="determinate"
            value={savingsPercent}
            sx={{ height: 8, borderRadius: 4 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
