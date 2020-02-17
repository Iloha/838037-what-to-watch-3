import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const titleClick = () => {};

const App = (props) => {
  // const {
  //   name,
  //   genre,
  //   date
  // } = props;
  const {movieNames} = props;


  return (
    <Main
      movieNames={movieNames}
      onTitleClick={titleClick}
    />
  );
};

App.propTypes = {
  movieNames: PropTypes.arrayOf(
      PropTypes.string
  )
};

export default App;
