import React from "react";
import PropTypes from "prop-types";

const Main = (props) => {
  const {onTitleClick, movieNames} = props;

  return (
    movieNames.map((i, index) => (
      <div
        key={index + i}
        onClick={onTitleClick}
        className="welcome__button">{i}</div>
    ))
  );
};

Main.propTypes = {
  movieNames: PropTypes.arrayOf(
      PropTypes.string
  ),
  onTitleClick: PropTypes.func.isRequired,
};

export default Main;
