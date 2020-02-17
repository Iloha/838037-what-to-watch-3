import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const movieNames = [`FFantastic Beasts`, `BBohemian Rhapsody`, `MMacbeth`];

it(`<App /> should render <Main /> component`, () => {
  const tree = renderer
    .create(<App
      movieNames={movieNames}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
