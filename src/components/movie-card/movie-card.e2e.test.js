import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card.jsx";

const movieCard = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `comedy`,
  preview: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const onCardHover = jest.fn();

  const main = shallow(
      <MovieCard
        movieCard={movieCard}
        onCardHover={onCardHover}
      />
  );

  const title = main.find(`article.small-movie-card`);

  title.props().onMouseOver();

  expect(onCardHover).toHaveBeenCalledTimes(1);
  expect(onCardHover.mock.calls[0][0]).toMatchObject(movieCard);
});
