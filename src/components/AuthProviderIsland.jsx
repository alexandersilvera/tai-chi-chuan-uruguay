import React from "react";
import { AuthProvider } from "../context/AuthContext";

export default function AuthProviderIsland({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
