import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import { api } from '../../services/api';

import { Movie } from '../../models/Movie';

import '../../styles/homePage.css';

export function HomePage() {
  const history = useHistory();

  const [movie, setMovie] = useState<Partial<Movie>>();

  const handleCreateMovie = useCallback(
    async (e: any) => {
      e.preventDefault();

      if (!movie?.title || !movie?.director || !movie?.year)
        return alert(
          'Preencha os campos direito, eu sei que tu ta fazendo de propósito.'
        );

      await api.post('/movies', movie);

      alert('Filme cadastrado com sucesso!');
      history.push('/movies');
    },
    [movie, history]
  );

  return (
    <main>
      <h1>Cadastre um filme: </h1>

      <form>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
          value={movie?.title ?? ''}
        />

        <label htmlFor="director">Diretor</label>
        <input
          type="text"
          id="director"
          onChange={(e) => setMovie({ ...movie, director: e.target.value })}
          value={movie?.director ?? ''}
        />

        <label htmlFor="year">Ano</label>
        <input
          type="number"
          id="year"
          onChange={(e) => setMovie({ ...movie, year: Number(e.target.value) })}
          value={movie?.year ?? ''}
        />

        <button onClick={handleCreateMovie}>Criar</button>
      </form>
    </main>
  );
}
