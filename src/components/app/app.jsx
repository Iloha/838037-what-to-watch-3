import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const cardOhHover = () => {};
    const {films} = this.props;

    return (
      <Main
        cardOhHover={cardOhHover}
        films={films}
      />
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
