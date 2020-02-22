import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const films = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `comedy`,
    preview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }
];

it(`<App /> should render <Main /> component`, () => {
  const tree = renderer
    .create(<App
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
