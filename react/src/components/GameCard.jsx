import { Link } from "react-router-dom";

// Tarjeta de videojuego.
// Debe reflejar, en espíritu, la card de la versión JS vanilla (js/app.js),
// mostrando información básica del juego y su DLC principal (si existe).
//
// MUY IMPORTANTE :
// - Este componente está SOLO esbozado.
// - La estructura y el mapeo de datos reales desde `game` y `platform`
//   deben ser IMPLEMENTADOS POR EL ALUMNO.

export function GameCard({ game, platform }) {
  // TODO:
  //  - Leer de `game` las propiedades necesarias:
  //      id, nombre, desarrollador, año, genero, imagen, dlcs_incluidos...
  //  - Construir a partir de esos datos el contenido de la tarjeta.
  //  - Respetar, en lo posible, la información que ya se muestra en la versión JS vanilla.
  //
  // Pista:
  //  - Puedes inspirarte en `js/app.js` (función `retornoCard`) para decidir
  //    qué campos mostrar y cómo organizarlos.

  return (
    <article className="card">
      {/* TODO:
          - Reemplazar este bloque por el JSX definitivo de la tarjeta.
          - Debe incluir al menos:
              * Imagen del juego.
              * Nombre, desarrollador, año y género.
              * Enlace a la ruta de detalle usando el id del juego.
              * Información del DLC principal (si existe).
      */}
    </article>
  );
}
