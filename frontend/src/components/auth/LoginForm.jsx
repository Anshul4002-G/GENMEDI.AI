import React, { useState } from "react";
import { Box, TextField, Button, Link, Typography, Alert } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { authService } from "../../services/auth";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await authService.login(
        formData.email,
        formData.password
      );
      login(response.user, response.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
        size="large"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </Button>
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        Don't have an account?{" "}
        <Link component={RouterLink} to="/signup">
          Sign Up
        </Link>
      </Typography>
    </Box>
  );
}
