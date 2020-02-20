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
  movieNames: PropTypes.arrayOf(
      PropTypes.string
  ),
  onTitleClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string,
    preview: PropTypes.string.isRequired
  }))
};

export default Main;
