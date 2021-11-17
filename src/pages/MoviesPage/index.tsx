import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { Movie } from '../../models/Movie';

import '../../styles/moviesPage.css';

export function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      const response = await api.get<Movie[]>('/movies');

      setMovies(response.data);
    };

    loadMovies();
  }, []);

  return (
    <main>
      <h1>Filmes cadastrados: </h1>

      <section className="movies">
        {movies.map((movie) => (
          <article key={movie.id} className="movie">
            <h3>{movie.title}</h3>
            <div>
              <p>Diretor: {movie.director}</p>
              <strong>{movie.year}</strong>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
