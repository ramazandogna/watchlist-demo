import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const MovieControls = (movie, type) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    removeFromWatched,
    moveToWatchlist,
  } = useContext(GlobalContext);

  return;
  <div className="inner-card-controls">
    {type === "watchlist" && (
      <>
        <button className="ctrl-btn">
          <i
            className="fa-fw far fa-eye"
            onClick={() => addMovieToWatched(movie)}
          ></i>
        </button>
        <button className="ctrl-btn">
          <i
            className="fa-fw fa fa-times"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          ></i>
        </button>
      </>
    )}

    {type === "watched" && (
      <>
        <button className="ctrl-btn">
          <i
            className="fa-fw far fa-eye-slash"
            onClick={() => moveToWatchlist(movie.id)}
          ></i>
        </button>

        <button className="ctrl-btn">
          <i
            className="fa-fw fa fa-times"
            onClick={() => removeFromWatched(movie.id)}
          ></i>
        </button>
      </>
    )}
  </div>;
};
