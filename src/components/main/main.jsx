import React from "react";
import ReactDOM from "react-dom";

const Main = (props) => {
  // eslint-disable-next-line react/prop-types
  const {name} = props;
  // eslint-disable-next-line react/prop-types
  const {genre} = props;
  // eslint-disable-next-line react/prop-types
  const {date} = props;

  return (
    <p>{name} {genre} {date}</p>
  );
};

export default Main;