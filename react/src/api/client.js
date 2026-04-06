// Cliente API centralizado para la app React.
// TODAS las llamadas a la API deben usar esta base URL.
// 
// - Aquí SOLO se deja la constante con la base URL.
// - La lógica real de llamadas a la API (fetch, manejo de errores, etc.)

export const API_BASE_URL = "http://localhost:3000/api";

// TODO:
// - Implementar una función helper (por ejemplo `apiFetch`) que reciba:
//     - `path` (string con el endpoint, ej: "/videojuegos")
//     - `options` (objeto opcional para método, headers, body, etc.)
// - Componer la URL completa usando `API_BASE_URL`.
// - Realizar la petición con `fetch` y devolver los datos parseados.
// - Manejar errores de red y respuestas no-OK de forma apropiada.
//
// Pista:
// - Esta función se reutilizará en hooks como `useGames` y en el login.

