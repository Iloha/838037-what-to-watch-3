import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const titleClick = () => {};

const App = (props) => {
  const {movieNames} = props;
  const {films} = props;


  return (
    <Main
      movieNames={movieNames}
      onTitleClick={titleClick}
      films={films}
    />
  );
};

App.propTypes = {
  movieNames: PropTypes.arrayOf(
      PropTypes.string
  ),
  films: PropTypes.array.isRequired,
};

export default App;
