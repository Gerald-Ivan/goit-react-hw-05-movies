import PropTypes from 'prop-types';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import css from './MovieList.module.css'

export const MovieList = ({ movies }) => {
  return (
    <ul className={css.movieUl}>
      {movies.map(({ id, title, backdrop_path }) => (
        <MovieListItem
          key={id}
          id={id}
          title={title}
          moviepath={backdrop_path}
        />
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};