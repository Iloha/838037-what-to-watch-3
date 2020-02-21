import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list.jsx";

const Main = (props) => {
  const {films, cardOhHover} = props;

  return (
    <MovieList films={films} cardOhHover={cardOhHover}/>
  );
};

Main.propTypes = {
  cardOhHover: PropTypes.func,
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string,
    preview: PropTypes.string.isRequired
  }))
};

export default Main;
