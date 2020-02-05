import React from "react";
import ReactDOM from "react-dom";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {name} = props;
  // eslint-disable-next-line react/prop-types
  const {genre} = props;
  // eslint-disable-next-line react/prop-types
  const {date} = props;

  return (
    <Main name={name} genre={genre} date={date}/>
  );
};

export default App;
