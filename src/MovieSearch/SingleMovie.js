import React, { useState, useEffect } from 'react';
import NoImage from './img/no-image.png'
import { Link } from 'react-router-dom';

function SingleMovie({ Poster, imdbID }) {
  return (
    <>
      <Link to={`/movieDetails/${imdbID}`}>
        <img src={Poster !== 'N/A' ? Poster : NoImage} alt="" className="movie-img" />
      </Link>
    </>
  );
}

export default SingleMovie;
