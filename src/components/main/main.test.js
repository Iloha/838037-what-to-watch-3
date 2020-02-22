import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const films = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `comedy`,
    preview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }
];

it(`<Main /> should render MovieList component`, () => {
  const tree = renderer
    .create(<Main
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
