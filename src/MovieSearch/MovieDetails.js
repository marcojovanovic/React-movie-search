import React, { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';


let API_KEY = 'abe85ded&s';

function MovieDetails() {
  const [details, setDetailse] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    fetchMovies();
  }, [id]);

  const fetchMovies = async () => {
    let res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
    let data = await res.json();

  

    setDetailse(data);
  };

  const { Poster, Plot, Title, Released } = details;

  return (
    <div className="single-container">
      <div className="single-flex">
        <img src={details.Poster} alt="" />
        <div className='movie-info'>
        <h2>{Title}</h2>
        <h3 className='movie-plot'>{Plot}</h3>
        <h3>{Released}</h3>
        <Link to='/'>
          <button className='movie-btn'>Back Home</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
