import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const ResultCard = ({ movie }) => {
   const { addMovieToWatchlist, addMovieToWatched, watchlist } =
      useContext(GlobalContext);
   let storedMovie = watchlist.find((o) => o.id === movie.id);
   const watchlistDisabled = storedMovie ? true : false ? true : false;
   return (
      <div className="result-card">
         <div className="poster-wrapper">
            {movie.poster_path ? (
               <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
               />
            ) : (
               <div className="filler-poster" />
            )}
         </div>

         <div className="info">
            <div className="header">
               <h3 className="title">{movie.title}</h3>
               <h4 className="realase-date">
                  {movie.release_date
                     ? movie.release_date.substring(0, 4)
                     : '-'}
               </h4>
            </div>
            <div className="controls">
               <button
                  className="btn"
                  disabled={watchlistDisabled}
                  onClick={() => addMovieToWatchlist(movie)}
               >
                  Add to Watchlist
               </button>

               <button
                  className="btn"
                  disabled={watchlistDisabled}
                  onClick={() => addMovieToWatched(movie)}
               >
                  Add to Watched
               </button>
            </div>
         </div>
      </div>
   );
};
