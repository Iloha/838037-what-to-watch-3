import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

const movieCard = {
  name: `Bohemian Rhapsody`,
  genre: `comedy`,
  preview: `bohemian-rhapsody.jpg`
};

it(`<MovieCard /> should render movie card`, () => {
  const tree = renderer
    .create(<MovieCard movieCard={movieCard}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
