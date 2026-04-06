import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

// Custom hook para consumir el contexto de autenticación.
// Esto simplifica su uso en el resto de la aplicación.

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    // Este error ayuda a detectar si se usa el hook fuera del AuthProvider.
    throw new Error("useAuth debe usarse dentro de un <AuthProvider>");
  }

  return ctx;
}

