import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

export default function FilterBar({ onFilterChange }) {
  const handleCategoryChange = (category) => {
    onFilterChange({ category });
  };

  const handlePriceChange = (maxPrice) => {
    onFilterChange({ maxPrice });
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Analgesic">Analgesic</MenuItem>
          <MenuItem value="Antibiotic">Antibiotic</MenuItem>
          <MenuItem value="Antacid">Antacid</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Max Price"
        type="number"
        onChange={(e) => handlePriceChange(e.target.value)}
        sx={{ minWidth: 150 }}
      />
    </Box>
  );
}
