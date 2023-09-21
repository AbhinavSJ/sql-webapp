"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  dbName: string;
  tabSelected: string;
};

type ActionType = {
  type: string;
  payload?: any;
};

const initialState: StateType = {
  tabSelected: "customers",
  dbName: "",
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_DB":
      return { ...state, dbName: action.payload };
    case "SET_TABLE":
      return { ...state, tabSelected: action.payload };
    default:
      return state;
  }
};

export const GlobalContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
