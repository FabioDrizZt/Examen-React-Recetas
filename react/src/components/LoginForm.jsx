import { useState } from "react";
import { useAuth } from "../hooks/useAuth.js";

// Componente de formulario de login.
//
// MUY IMPORTANTE (EXAMEN):
// - Este componente está pensado para usarse dentro del `Layout`
//   (similar a cómo el login aparece en el header en la versión JS vanilla).
// - Aquí solo se deja la estructura del formulario y los estados básicos.
// - La llamada real a la API (usando **POST** a `/api/login`) y la integración
//   con el contexto de autenticación deben ser IMPLEMENTADAS POR EL ALUMNO.

export function LoginForm() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    // TODO:
    // - Llamar a la API para validar credenciales usando:
    //     POST /api/login
    // - Si las credenciales son correctas, llamar a `login(...)` del contexto.
    // - Si no, mostrar un mensaje de error adecuado en `setError(...)`.
    // - Al finalizar, volver a poner `loading` en false.
    console.warn(
      "TODO: implementar lógica de login (llamadas a API y uso de AuthContext)",
    );
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
    >
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn-gaming" disabled={loading}>
        {loading ? "Ingresando..." : "Ingresar"}
      </button>
      {error && (
        <p style={{ marginTop: "0.25rem", color: "#ffb3b3", fontSize: "0.8rem" }}>
          {error.message}
        </p>
      )}
    </form>
  );
}

