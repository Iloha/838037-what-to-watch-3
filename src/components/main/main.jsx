import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list.jsx";

const Main = (props) => {
  const {films} = props;

  return (
    <MovieList films={films}/>
  );
};

Main.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string,
    preview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    score: PropTypes.number,
    scoreDescription: PropTypes.string,
    votes: PropTypes.number,
    director: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
  }))
};

export default Main;
