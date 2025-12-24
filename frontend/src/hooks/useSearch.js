import { useState } from "react";
import { useMedicine } from "./useMedicine";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const { setSearchResults, addSearch } = useMedicine();

  const search = async (searchQuery) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/medicines/search?q=${searchQuery}`
      );
      const results = await response.json();
      setSearchResults(results);
      addSearch(searchQuery);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { query, setQuery, search, loading };
}
