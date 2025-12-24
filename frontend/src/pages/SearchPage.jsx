import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import Header from "../components/common/Header";
import SearchForm from "../components/search/SearchForm";
import SearchResults from "../components/search/SearchResults";
import FilterBar from "../components/search/FilterBar";
import { useMedicine } from "../hooks/useMedicine";

export default function SearchPage() {
  const { searchResults } = useMedicine();
  const [loading, setLoading] = useState(false);

  return (
    <Box>
      <Header
        title="Search Medicines"
        subtitle="Find affordable alternatives for your medications"
      />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <SearchForm />
        <FilterBar onFilterChange={(filters) => console.log(filters)} />
        <SearchResults results={searchResults} loading={loading} />
      </Container>
    </Box>
  );
}
