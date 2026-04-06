import { useGames } from "../hooks/useGames.js";
import { GameCard } from "../components/GameCard.jsx";

const PLATFORMS = ["PC", "PlayStation", "Xbox", "Nintendo"];

// Página principal: catálogo de videojuegos agrupados por plataforma.
// Inspírate en la lógica de js/app.js (versión vanilla).

export function HomePage() {
  const { gamesByPlatform, loading, error } = useGames();

  if (loading) {
    return (
      <section className="status">
        <h2>⏳ Cargando videojuegos...</h2>
        <p>Estamos preparando tu catálogo gaming 🎮</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="status">
        <h2>⚠️ Error al cargar videojuegos</h2>
        <p>{error.message}</p>
      </section>
    );
  }

  if (!gamesByPlatform || typeof gamesByPlatform !== "object") {
    return (
      <section className="status">
        <h2>⚠️ Sin datos</h2>
        <p>No se recibieron videojuegos desde la API.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Catálogo de videojuegos</h1>
      <p>
        Reimplementación en React de la aplicación GameHub. Los datos provienen de
        la API Express.
      </p>

      {/* TODO:
          - Revisa cómo se generan las secciones por plataforma en js/app.js.
          - Aquí debes replicar esa idea usando JSX y el componente GameCard.
      */}
      <div className="grid-platforms">
        
      </div>
    </section>
  );
}

