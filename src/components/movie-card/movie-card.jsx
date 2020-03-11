import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movieCard, onCardHover} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseOver={()=>onCardHover(movieCard)}>
        <div className="small-movie-card__image">
          <img src={movieCard.preview} alt={movieCard.name} width="280" height="175"/>
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page" onClick={()=>this.setState({movieCard})}>{movieCard.name}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movieCard: PropTypes.object,
  onCardHover: PropTypes.func,
};

export default MovieCard;
