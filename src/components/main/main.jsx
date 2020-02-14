import React from "react";
import PropTypes from "prop-types";

const Main = (props) => {
  // const {
  //   name,
  //   genre,
  //   date
  // } = props;

  return (
    // <p>{name} {genre} {date}</p>
    <p>{props.movieNames}</p>
  );
};

Main.propTypes = {
  movieNames: PropTypes.arrayOf(
      PropTypes.string
  )
};
export default Main;
