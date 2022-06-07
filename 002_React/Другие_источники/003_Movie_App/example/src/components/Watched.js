//Watched
import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState.js';
import { MovieCard } from './MovieCard.js';

export const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div>
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">Watched Movies</h1>
          </div>

          <div className="movie-grid">
            {watched.length > 0 ? (
              watched.map((movie) => (
                <MovieCard key={movie.id} movie={movie} type="watched" />
              ))
            ) : (
              <h2 className="no-movies">No movies iny your list, add some!</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
