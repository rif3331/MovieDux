import React from "react";
import "../styles.css";

const DEFAULT_IMAGE = "images/default.jpg";
const RATING_CLASSES = {
  good: "rating-good",
  ok: "rating-ok",
  bad: "rating-bad",
};

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src = DEFAULT_IMAGE;
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) return RATING_CLASSES.good;
    if (rating >= 5) return RATING_CLASSES.ok;
    return RATING_CLASSES.bad;
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(movie.id)}
          ></input>
          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
