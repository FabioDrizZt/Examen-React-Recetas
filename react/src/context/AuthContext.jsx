import { createContext, useState, useEffect } from "react";

// Contexto de autenticación.
//
// MUY IMPORTANTE :
// - Aquí se deja solo la estructura mínima del contexto.
// - La lógica real de:
//    * restaurar el usuario desde localStorage,
//    * iniciar sesión (login),
//    * cerrar sesión (logout),
//
// Pista:
// - Inspírate en `js/login.js` de la versión vanilla.
// - Respeta las claves de localStorage usadas allí (`usuario`, `rol`).

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // TODO:
    // - Leer de localStorage el usuario y su rol.
    // - Si existe, llamar a `setUser` con un objeto adecuado.
  }, []);

  const login = (userData) => {
    // TODO:
    // - Guardar el usuario en el estado (`setUser`).
    // - Persistir la información necesaria en localStorage.
    // - `userData` debería contener al menos: fullName y rol.
    console.warn("TODO: implementar lógica de login en AuthContext");
  };

  const logout = () => {
    // TODO:
    // - Limpiar el usuario del estado.
    // - Borrar la información de localStorage.
    console.warn("TODO: implementar lógica de logout en AuthContext");
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
