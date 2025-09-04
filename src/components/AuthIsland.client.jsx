import React from "react";
import { AuthProvider } from "../context/AuthContext";
import AuthContent from "./AuthContent";

export default function AuthIsland() {
  return (
    <AuthProvider>
      <AuthContent />
    </AuthProvider>
  );
}
