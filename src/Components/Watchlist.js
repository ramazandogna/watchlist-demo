import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watchlist = () => {
  const { Watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist 📌</h1>
        </div>

        {Watchlist.length > 0 ? (
          <div className="movie-grid">
            {Watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movie">
            No movies in your list 😢, Y can add some pls 🥹
          </h2>
        )}
      </div>
    </div>
  );
};
