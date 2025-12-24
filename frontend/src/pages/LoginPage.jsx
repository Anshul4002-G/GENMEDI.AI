import React from "react";
import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout title="Login to MediCost AI">
      <LoginForm />
    </AuthLayout>
  );
}
