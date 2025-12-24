import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#fff",
        color: "#1976d2",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <LocalPharmacyIcon sx={{ mr: 1, fontSize: 32 }} />
          <Typography
            variant="h5"
            component={RouterLink}
            to="/"
            sx={{
              flex: 1,
              fontWeight: 700,
              textDecoration: "none",
              color: "#1976d2",
            }}
          >
            MediCost AI
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button component={RouterLink} to="/" color="inherit">
              Home
            </Button>
            <Button component={RouterLink} to="/search" color="inherit">
              Search
            </Button>
            <Button component={RouterLink} to="/how-it-works" color="inherit">
              How It Works
            </Button>

            {isAuthenticated ? (
              <>
                <Button component={RouterLink} to="/dashboard" color="inherit">
                  Dashboard
                </Button>
                <Button
                  onClick={handleMenu}
                  color="primary"
                  variant="contained"
                >
                  {user?.name || "Account"}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={!!anchorEl}
                  onClose={handleClose}
                >
                  <MenuItem component={RouterLink} to="/dashboard">
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      logout();
                      handleClose();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button component={RouterLink} to="/login" color="primary">
                  Login
                </Button>
                <Button
                  component={RouterLink}
                  to="/signup"
                  color="secondary"
                  variant="contained"
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Button onClick={handleMenu}>
              <MenuIcon />
            </Button>
            <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
              <MenuItem component={RouterLink} to="/">
                Home
              </MenuItem>
              <MenuItem component={RouterLink} to="/search">
                Search
              </MenuItem>
              <MenuItem component={RouterLink} to="/how-it-works">
                How It Works
              </MenuItem>
              {isAuthenticated ? (
                <>
                  <MenuItem component={RouterLink} to="/dashboard">
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      logout();
                      handleClose();
                    }}
                  >
                    Logout
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem component={RouterLink} to="/login">
                    Login
                  </MenuItem>
                  <MenuItem component={RouterLink} to="/signup">
                    Sign Up
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
