import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Watchlist = () => {
  const { Watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist 📌</h1>
        </div>
        {Watchlist.length}
      </div>
    </div>
  );
};
