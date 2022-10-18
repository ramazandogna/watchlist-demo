import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
  const { Watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched 🔱</h1>
        </div>

        {Watched.length > 0 ? (
          <div className="movie-grid">
            {Watched.map((movie) => (
              <MovieCard movie={movie} type="watched" />
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
