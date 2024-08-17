import { useEffect, useState } from 'react';
import { fetchMovieByQuery } from 'MoviesApi';
import { MovieList } from 'components/MovieList/MovieList';
import { Outlet, useSearchParams, useParams } from 'react-router-dom';
import css from './MoviePage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? 'Friends'; // Default search query is 'Friends'

  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (!movieName.trim()) return;
      setIsLoading(true);

      try {
        const movies = await fetchMovieByQuery(movieName);
        setMovies(movies);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [movieName]);

  return (
    <div>
      {!movieId && (
        <div>
          <div className={css.inputWrapper}>
            <input
              type="text"
              className={css.input}
              onChange={e => updateQueryString(e.target.value)}
              placeholder="Search movies..."
            />
          </div>

          {isLoading ? (
            <p style={{ textAlign: 'center' }}>Loading...</p>
          ) : (
            <MovieList movies={movies} />
          )}
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default MoviesPage;