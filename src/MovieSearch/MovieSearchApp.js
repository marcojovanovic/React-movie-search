import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import './movie.css';
import MoviesContent from './MoviesContent';
import MovieDetails from './MovieDetails';


function MovieSearchApp() {


  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/movieDetails/:id">
            <MovieDetails />
          </Route>
          <Route exact path="/">
            <MoviesContent />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default MovieSearchApp;
