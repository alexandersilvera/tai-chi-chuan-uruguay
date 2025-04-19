import React from "react";
import { AuthProvider } from "../context/AuthContext";
import AuthButton from "./AuthButton";

export default function AuthIsland() {
  return (
    <AuthProvider>
      <AuthButton />
    </AuthProvider>
  );
}
