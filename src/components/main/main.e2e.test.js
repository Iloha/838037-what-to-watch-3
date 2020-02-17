import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const movieNames = [`FFantastic Beasts`];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        movieNames={movieNames}
        onTitleClick={onTitleClick}
      />
  );

  const title = main.find(`div.movie__title`);

  title.props().onClick();

  expect(onTitleClick).toHaveBeenCalledTimes(1);
});
