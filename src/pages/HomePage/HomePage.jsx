import React from 'react'
import { fetchTrendingMovies } from 'MoviesApi';
import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';

export const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);


  useEffect(() => {
    
  const loadTrendingMovies = async () =>{
    try {
      const movies = await fetchTrendingMovies();
      setTrendingMovies(movies);
    } catch (error) {
      console.log(error)
    }
  };
  
    loadTrendingMovies();
  }, []);


  return (
    <div> 
        <h2>Trending Today</h2>
        {trendingMovies.length && <MovieList movies={trendingMovies}/>}
    </div>
  )
}
export default HomePage;