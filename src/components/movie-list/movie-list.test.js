import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list";

const films = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `comedy`,
    preview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    name: `Bohemian Rhapsody`,
    genre: `comedy`,
    preview: `bohemian-rhapsody.jpg`
  }
];

it(`<MovieList /> should render movie list`, () => {
  const tree = renderer
    .create(<MovieList films={films}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
