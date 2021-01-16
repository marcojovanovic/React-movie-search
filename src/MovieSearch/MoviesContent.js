import React, { useState, useEffect } from 'react';
import SingleMovie from './SingleMovie';
import SearchInput from './SearchInput';

let API_KEY = 'abe85ded&s';

const basicUrl = `https://www.omdbapi.com/?apikey=`;

const searchUrl = `https://www.omdbapi.com/?apikey=${API_KEY}=batman`;

function MoviesContent() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({show:false, msg:''});
  const [query, setQuery] = useState('batman');

  useEffect(() => {
    fetchMovies();
  }, [query]);

  const fetchMovies = async () => {
    let res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}=${query}`
    );
    let data = await res.json();

 if( data.Response === 'True'){

setMovies(data.Search)
setError({show:false, msg:''})

 }else {
   
  
  
setError({show: true, msg:data.Error})

    
  }


}

  return (
    <div className="container">
      <div className="search-container">
        <SearchInput setQuery={setQuery} error={error} />
      </div>

      <div className="movie-container">
        {movies?.map((item) => {
          return <SingleMovie key={item.imdbID} {...item} />;
        })}
      </div>
    </div>
  );
}

export default MoviesContent;
