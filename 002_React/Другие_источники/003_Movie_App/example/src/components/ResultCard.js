// ResultCards.js
import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState.js';

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchList, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {
          movie.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
              alt={`${movie.original_title} Poster`}
            />
          ) : (
            <div className="filter-poster"></div>
          ) // Пустое изображение
        }
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.original_title}</h3>

          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : '-'}
          </h4>
        </div>

        <div className="controls">
          <button
            disabled={watchlistDisabled}
            className="btn"
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to Watchlist
          </button>
          <button
            disabled={watchedDisabled}
            className="btn"
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
