import { useEffect, useState } from "react";

// Custom hook para cargar los videojuegos desde la API.
//
// MUY IMPORTANTE :
// - Aquí solo se define la **estructura básica** del hook.
// - La lógica real de llamada a la API, manejo de errores y estados

export function useGames() {
  const [gamesByPlatform, setGamesByPlatform] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO:
    // - Usar aquí `apiFetch` (u otra función que implementes) para llamar a
    //   GET /api/videojuegos.
    // - Actualizar `loading`, `error` y `gamesByPlatform` según el resultado.
    // - Tener en cuenta el montaje/desmontaje del componente si es necesario.
    //
    // Pista:
    // - El formato esperado de `gamesByPlatform` es un objeto:
    //   { PC: [...], PlayStation: [...], Xbox: [...], Nintendo: [...] }
  }, []);

  // Devolvemos el contrato que usarán las páginas/componente.
  return {
    gamesByPlatform,
    loading,
    error,
    setGamesByPlatform,
    setLoading,
    setError,
  };
}
