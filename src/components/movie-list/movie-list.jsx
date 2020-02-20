import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

const MovieList = (props) => {
  const {films, onCardHover} = props;
  const movieList = films.map((i, index) => (
    <MovieCard key={i.name + index} movieCard={i} onCardHover={onCardHover}/>
  ));

  return (
    <div className="catalog__movies-list">
      {movieList}
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.array,
  onCardHover: PropTypes.func,
};

export default MovieList;
