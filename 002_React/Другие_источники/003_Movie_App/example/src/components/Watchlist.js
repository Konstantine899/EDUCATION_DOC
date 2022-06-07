//Watchlist
import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState.js';
import { MovieCard } from './MovieCard.js';

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div>
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">My Watch list</h1>
          </div>

          <div className="movie-grid">
            {watchlist.length > 0 ? (
              watchlist.map((movie) => (
                <MovieCard key={movie.id} movie={movie} type="watchlist" />
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
