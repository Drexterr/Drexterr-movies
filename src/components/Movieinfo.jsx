import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = "http://www.omdbapi.com?apikey=29be82ed";

const Movieinfo = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`${API_URL}&i=${id}`);
      const data = await response.json();
      setMovieDetails(data);
      console.log(data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div className='text-5xl font-bold '>Loading...</div>;
  }
 

  return (
    <div class="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
  
  <div class="absolute inset-0 opacity-5">
    <div class="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCAwIDYwIDkwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIi8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmIiByeD0iMiIgcnk9IjIiLz48cmVjdCB4PSIwIiB5PSIxNSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmIiByeD0iMiIgcnk9IjIiLz48cmVjdCB4PSIwIiB5PSIzMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmIiByeD0iMiIgcnk9IjIiLz48cmVjdCB4PSIwIiB5PSI0NSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmIiByeD0iMiIgcnk9IjIiLz48cmVjdCB4PSIwIiB5PSI2MCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmIiByeD0iMiIgcnk9IjIiLz48cmVjdCB4PSIwIiB5PSI3NSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmIiByeD0iMiIgcnk9IjIiLz48cmVjdCB4PSI1MCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmIiByeD0iMiIgcnk9IjIiLz48cmVjdCB4PSI1MCIgeT0iMTUiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2ZmZiIgcng9IjIiIHJ5PSIyIi8+PHJlY3QgeD0iNTAiIHk9IjMwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmYiIHJ4PSIyIiByeT0iMiIvPjxyZWN0IHg9IjUwIiB5PSI0NSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmIiByeD0iMiIgcnk9IjIiLz48cmVjdCB4PSI1MCIgeT0iNjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2ZmZiIgcng9IjIiIHJ5PSIyIi8+PHJlY3QgeD0iNTAiIHk9Ijc1IiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmYiIHJ4PSIyIiByeT0iMiIvPjwvc3ZnPg==')] bg-repeat"></div>
  </div>
  
  
  <div class="absolute top-1/3 left-1/4 w-1/2 h-1/2 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
  <div class="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
  
  <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
  <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-40"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-40"></div>
  <div class="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent opacity-40"></div>

  <div class="relative z-10 container mx-auto px-4 py-32   flex w-5/6 text-white content-center">
  <img className=' border-4 border-white rounded-xl' src={movieDetails.Poster} alt={movieDetails.Title} />
      <div className='content-center px-16  font-serif'>
        <h1 className='font-bold font-serif text-3xl text-white pb-3'>{movieDetails.Title} ({movieDetails.Year})</h1>
      <p className='items-center text-xl text-white font-[all-petite-caps] pb-16'> {movieDetails.Plot}</p>
      <p className='text-base pb-1'>IMDB: <span className='text-yellow-500'>{movieDetails.imdbRating} </span> </p>
      <p className='text-base pb-1'>Genre: {movieDetails.Genre}</p>
      <p className='text-base pb-1'>Actor: {movieDetails.Actors}</p>
      <p className='text-base pb-1'>Director: {movieDetails.Director}</p>
      <p className='text-base pb-1'>Language: {movieDetails.Language}</p>
      <p className='text-base pb-1'>Runtime: {movieDetails.Runtime}</p>
      </div>
      
  </div>
</div>
    
    
      
      
     
    
  );
}

export default Movieinfo;
