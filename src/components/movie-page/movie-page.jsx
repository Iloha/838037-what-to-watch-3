import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MoviePage extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movieCard} = this.props;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movieCard.poster} alt={movieCard.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movieCard.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movieCard.genre}</span>
                <span className="movie-card__year">{movieCard.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    {/* <use xlink:href="#play-s"></use> */}
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    {/* <use xlink:href="#add"></use> */}
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movieCard.poster} alt={movieCard.name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{movieCard.score}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{movieCard.scoreDescription}</span>
                  <span className="movie-rating__count">{movieCard.votes}</span>
                </p>
              </div>

              <div className="movie-card__text">
                {movieCard.description}
                <p className="movie-card__director"><strong>Director: {movieCard.director}</strong></p>
                <p className="movie-card__starring"><strong>Starring: {movieCard.actors}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

MoviePage.propTypes = {
  movieCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string,
    preview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    score: PropTypes.number,
    scoreDescription: PropTypes.string,
    votes: PropTypes.number,
    director: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
    description: PropTypes.string,
    year: PropTypes.string,
  })
};

export default MoviePage;
