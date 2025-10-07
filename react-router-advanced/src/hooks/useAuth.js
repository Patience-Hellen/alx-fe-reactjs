// src/hooks/useAuth.js
import { useState } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // change to false to test redirects
  return { isAuthenticated, setIsAuthenticated };
}
