import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const movieNames = [`FFantastic Beasts`, `BBohemian Rhapsody`, `MMacbeth`];

it(`<Main /> should render movie names`, () => {
  const tree = renderer
    .create(<Main
      movieNames={movieNames}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
