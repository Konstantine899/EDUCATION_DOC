// MovieCard.js
import React from 'react';
import { MovieControls } from './MovieControls.js';

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
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
      <MovieControls type={type} movie={movie} />
    </div>
  );
};
