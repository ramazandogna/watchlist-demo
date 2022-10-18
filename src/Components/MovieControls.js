import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const MovieControls = (movie, type) => {
  const { removeMovieFromWatchlist, addMovieToWatched } =
    useContext(GlobalContext);

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
  </div>;
};
