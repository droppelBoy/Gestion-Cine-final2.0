import { delay, http, HttpResponse } from 'msw';
import { peliculasIniciales } from './data.js';

const peliculas = [...peliculasIniciales];

export const handlers = [
  // Intercepta la petición de películas
  http.get('/api/movies', async () => {
    await delay(700); // Simula el retraso de red
    return HttpResponse.json(peliculas);
  }),

  // Por si buscas una película por su ID
  http.get('/api/movies/:id', async ({ params }) => {
    await delay(400);
    const { id } = params;
    const movie = peliculas.find((p) => p.id === Number(id));

    if (!movie) {
      return HttpResponse.json(
        { message: 'Película no encontrada' },
        { status: 404 }
      );
    }

    return HttpResponse.json(movie);
  })
];