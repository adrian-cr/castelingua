import React, { createContext, useReducer, useContext } from 'react';
import appReducer, { initialState } from './AppReducer';

const AppContext = createContext({});

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useGameContext() {
  return useContext(AppContext);
}
