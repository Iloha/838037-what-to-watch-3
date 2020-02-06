import React from "react";

const Main = (props) => {
  const {
    name, //eslint-disable-line
    genre, //eslint-disable-line
    date //eslint-disable-line
  } = props;

  return (
    <p>{name} {genre} {date}</p>
  );
};

export default Main;
