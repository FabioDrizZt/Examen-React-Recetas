import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

// Layout principal de la app.
// Incluye cabecera, navegación básica y pie de página.
// El login se integra en la cabecera usando el contexto de autenticación.

export function Layout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleLogout = () => {
    // TODO:
    // - Implementar correctamente el cierre de sesión usando:
    //    * `logout()` del contexto de autenticación.
    //    * Navegación a la ruta que consideres apropiada (por ejemplo "/").
    console.warn(
      "TODO: implementar handleLogout en Layout (logout + navegación)",
    );
  };

  return (
    <div className="app-shell">
      <header>
        <div className="brand">
          <span className="brand-title">🎮 GAMEHUB</span>
          <span className="brand-subtitle">
            Tu catálogo de videojuegos definitivo
          </span>
        </div>
        <nav className="layout-nav">
          <Link to="/">Inicio</Link>

          {/* TODO:
              - Mostrar el nombre del usuario y su rol cuando esté logueado,
                de forma similar a la versión vanilla (login.js).
              - Integrar aquí el formulario/botón de login si decides no usar
                un componente de página separado.
          */}
          {user ? (
            <>
              <span className="user-chip">
                Bienvenido, {user.fullName} - {user.rol}
              </span>
              <button
                className="btn-gaming btn-secondary"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </>
          ) : null}
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          🎮 GameHub React © {currentYear} - Examen de Migración a React | Juega
          Responsable 🕹️
        </p>
      </footer>
    </div>
  );
}
