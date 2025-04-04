import React, {useState, useEffect} from 'react'
import search from "./search.svg";
import MovieCard from './Moviecard';
const API_URL = "http://www.omdbapi.com?apikey=29be82ed";



const home = () => {

    const [SearchValue, setSearchValue] = useState('')
    const [Movies, setMovies] = useState([])
        const SearchMovies = async(title) =>{
            const response = await fetch (`${API_URL}&s=${title}`);
            const data = await response.json()
            
            
    setMovies(data.Search)
    
        }
        useEffect(() => {
          SearchMovies({SearchValue})
        }, [])
        

  return (
    <div className='bg-black pt-24'>
        <div><h1 className='text-6xl font-semibold text-purple-700 flex justify-center'>DREXTERr Movies</h1></div>
       <div className=''>
        <div className='flex my-14 justify-between px-4 py-2 rounded-2xl border-purple-700 border-2 w-[40%] mx-auto'>
      <input className='bg-transparent w-full focus:outline-none text-white ' placeholder='Search movies' onChange={(e)=>setSearchValue(e.target.value)}/>

      <img className=''  src={search} alt="searchicon" onClick={()=>SearchMovies(SearchValue)}/></div>
    <div className='grid grid-rows-12 grid-cols-4  mx-32  gap-10' >
        {Movies?.length > 0 ? (

    Movies.map((movie)=>(
        <MovieCard movie={movie} />
    ))
    ) : (
        <h2>No movies found</h2>
      )
}

    </div>
    </div>
    
  
    
    
    </div>
  )
}

export default home
