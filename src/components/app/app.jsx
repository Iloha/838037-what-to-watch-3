import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  const {
    name, //eslint-disable-line
    genre, //eslint-disable-line
    date //eslint-disable-line
  } = props;

  return (
    <Main {...props}/>
  );
};

export default App;
