import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Página de detalle de un videojuego.
//
// MUY IMPORTANTE :
// - Aquí solo se deja la estructura de estados y el esqueleto visual.
// - Toda la lógica de:
//    * Llamar a la API para obtener el detalle (`/api/videojuegos/:id`),
//    * Llamar a la API para obtener todas las plataformas y deducir la del juego,
//    * Manejar estados de carga, error y juego no encontrado.
//
// Pista:
// - Inspírate en `juego.html` y `js/juego.js` de la versión vanilla.

export function GameDetailPage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [platform, setPlatform] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO:
    // - Usar aquí tu helper de API para:
    //   1) Obtener el juego por id.
    //   2) Obtener todos los juegos y deducir a qué plataforma pertenece.
    // - Actualizar `game`, `platform`, `loading` y `error` según corresponda.
    console.warn(
      "TODO: implementar carga de detalle de videojuego en GameDetailPage",
    );
  }, [id]);

  return (
    <section>
      <h1>Detalle de videojuego (React)</h1>
      <p>
        Página de detalle para el juego con id: <strong>{id}</strong>
      </p>

      {/* TODO:
          - Sustituir este bloque por una versión completa que muestre:
            * Imagen del juego.
            * Desarrollador, año, género, calificación.
            * Plataforma deducida.
            * Requisitos del sistema.
            * Modos de juego.
            * Características.
            * DLCs incluidos (si los hay).
          - Manejar visualmente los casos de:
            * loading === true
            * error !== null
            * game === null (juego no encontrado)
      */}

      <pre
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          background: "rgba(0,0,0,0.4)",
        }}
      >
        <code>
          {`// Ejemplo de estructura de datos esperada (simplificada):
// {
//   "id": 1,
//   "nombre": "Juego X",
//   "desarrollador": "Estudio Y",
//   "año": 2023,
//   "genero": "Acción",
//   "calificacion": 9,
//   "descripcion": "...",
//   "requisitos_sistema": { ... },
//   "modos_juego": ["Singleplayer", "Multiplayer"],
//   "caracteristicas": ["...", "..."],
//   "dlcs_incluidos": [ ... ]
// }`}
        </code>
      </pre>
    </section>
  );
}
