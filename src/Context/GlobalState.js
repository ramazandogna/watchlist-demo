import React, { createContext, useReducer, useEffect } from "react";

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
};
