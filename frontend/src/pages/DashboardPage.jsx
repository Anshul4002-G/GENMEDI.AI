import React from "react";
import { Box } from "@mui/material";
import Header from "../components/common/Header";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import QuickSearchWidget from "../components/dashboard/QuickSearchWidget";
import RecentSearches from "../components/dashboard/RecentSearches";
import SavedAlternatives from "../components/dashboard/SavedAlternatives";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function DashboardPage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Box>
      <Header
        title="Your Dashboard"
        subtitle="Manage your searches and saved medicines"
      />
      <DashboardHeader />
      <QuickSearchWidget />
      <RecentSearches />
      <SavedAlternatives />
    </Box>
  );
}
