import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  InputAdornment,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearch } from "../../hooks/useSearch";

export default function SearchForm() {
  const { query, setQuery, search, loading } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    search(query);
  };

  return (
    <Container maxWidth="lg" sx={{ mb: 4 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          placeholder="Search medicines..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          size="large"
          disabled={loading}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading || !query.trim()}
                >
                  {loading ? "Searching..." : "Search"}
                </Button>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              paddingRight: 0,
            },
          }}
        />
      </Box>
    </Container>
  );
}
