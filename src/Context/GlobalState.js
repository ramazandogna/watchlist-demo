import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// our initial state
const initialState = {
  watchlist: [],
  watched: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components here
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  <GlobalContext.Provider
    value={{
      watchlist: state.watchlist,
      watched: state.watched,
      addMovieToWatchlist,
    }}
  >
    {props.children}
  </GlobalContext.Provider>;
};
