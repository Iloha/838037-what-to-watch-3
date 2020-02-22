import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {films} = this.props;
    const onCardHover = (e) => {
      this.setState({activeCard: e});
    };
    const movieList = films.map((i, index) => (
      <MovieCard key={i.name + index} movieCard={i} onCardHover={() => onCardHover(i)}/>
    ));

    return (
      <div className="catalog__movies-list">
        {movieList}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.array,
};

export default MovieList;
