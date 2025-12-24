import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; // ✅ FIXED
import "./index.css";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2", light: "#42a5f5", dark: "#1565c0" },
    secondary: { main: "#4caf50", light: "#81c784", dark: "#388e3c" },
    background: { default: "#fafafa", paper: "#ffffff" },
    text: { primary: "#212121", secondary: "#757575" },
    error: { main: "#d32f2f" },
    warning: { main: "#ed6c02" },
    info: { main: "#0288d1" },
    success: { main: "#4caf50" },
  },
  typography: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
  shape: { borderRadius: 12 },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
