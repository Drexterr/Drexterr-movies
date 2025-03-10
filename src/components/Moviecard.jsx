import React, { useState } from 'react';
const API_URL = "http://www.omdbapi.com?apikey=29be82ed";
import { NavLink } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const [Movieinfo, setMovieinfo] = useState(null)

  const info = async (imdbID) => {

    const response = await fetch(`${API_URL}&i=${imdbID}`);
    const data = await response.json();
    setMovieinfo(data)
    console.log(data)
  }

  return (
    <div onClick={() => info(movie.imdbID)} className='rounded-lg  border-4 transition-transform hover:scale-110  p-3 bg-white bg-opacity-25 border-purple-700 hover:cursor-pointer'>
      <NavLink to={`/movieinfo/${movie.imdbID}`}>
        <img className=' w-full rounded-lg  ' src={movie.Poster} alt="poster" />
        <div className='text-white max-w-[300px] pt-2 '>{movie.Title}</div>
        <p className='text-white'>{movie.Year}</p>
      </NavLink>

    </div>
  );
}

export default MovieCard;