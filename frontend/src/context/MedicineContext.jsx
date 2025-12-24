import React, { createContext, useState } from "react";

export const MedicineContext = createContext();

export function MedicineProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [savedAlternatives, setSavedAlternatives] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  const addSearch = (medicine) => {
    setRecentSearches((prev) => [medicine, ...prev.slice(0, 9)]);
  };

  const saveAlternative = (medicine) => {
    setSavedAlternatives((prev) => [
      ...prev.filter((m) => m.id !== medicine.id),
      medicine,
    ]);
  };

  const removeAlternative = (medicineId) => {
    setSavedAlternatives((prev) => prev.filter((m) => m.id !== medicineId));
  };

  return (
    <MedicineContext.Provider
      value={{
        searchResults,
        setSearchResults,
        selectedMedicine,
        setSelectedMedicine,
        savedAlternatives,
        saveAlternative,
        removeAlternative,
        recentSearches,
        addSearch,
      }}
    >
      {children}
    </MedicineContext.Provider>
  );
}
