import api from './client';

export async function fetchMovies() {
  const response = await api.get('/movies');
  return response.data;
}