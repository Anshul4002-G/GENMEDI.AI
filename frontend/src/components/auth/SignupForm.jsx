import React, { useState } from "react";
import { Box, TextField, Button, Link, Typography, Alert } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { authService } from "../../services/auth";
import PasswordStrength from "./PasswordStrength";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      let score = 0;
      if (value.length > 8) score += 25;
      if (/[A-Z]/.test(value)) score += 25;
      if (/[0-9]/.test(value)) score += 25;
      if (/[^A-Za-z0-9]/.test(value)) score += 25;
      setPasswordStrength(score);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const response = await authService.signup(
        formData.name,
        formData.email,
        formData.password
      );
      login(response.user, response.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Registration failed. Please try again.");
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
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
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
      <PasswordStrength strength={passwordStrength} />
      <TextField
        fullWidth
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
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
        {loading ? "Creating Account..." : "Create Account"}
      </Button>
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        Already have an account?{" "}
        <Link component={RouterLink} to="/login">
          Login
        </Link>
      </Typography>
    </Box>
  );
}
