import React, { useState } from 'react'
import { MovieList } from 'components/MovieList/MovieList';
import { fetchMovieByQuery } from 'MoviesApi';

export const MoviePage = () => {
  const [searchQuery, setSearchQuery] = useState ('');
  const [movies, SetMovies] = useState ([]);

    const fetchMovies = async () =>{
      if (!searchQuery.trim()) return;
      try {
        const movies = await fetchMovieByQuery();
        console.log('movies', movies)
        SetMovies(movies);
      } catch (error) {
        console.log(error)
      }
    };
    

  return (
    <div>
      <div>
        <input onChange={e => setSearchQuery(e.target)} placeholder='Search Movies...'/>
        <button onClick={fetchMovies}/>        
      </div>
      <MovieList movies={movies}/>
    </div>
  )
}
export default MoviePage;