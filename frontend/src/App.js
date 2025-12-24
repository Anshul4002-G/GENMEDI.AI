import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import ComparisonPage from "./pages/ComparisonPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import { AuthProvider } from "./context/AuthContext";
import { MedicineProvider } from "./context/MedicineContext";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <MedicineProvider>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Navbar />
            <Box component="main" sx={{ flex: 1, py: 4 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/compare/:id" element={<ComparisonPage />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </MedicineProvider>
      </AuthProvider>
    </Router>
  );
}
export default App;
