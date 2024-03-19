import React from "react";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render } from "@testing-library/react-native";

import combineReducers from "@redux/reducers/reducers";

export const renderWithProviders = (
  ui: any,
  {
    preloadedState = {},
    store = configureStore({
      reducer: combineReducers,
      preloadedState,
    }),
    ...renderOptions
  }: any = {}
) => {
  const Wrapper = ({ children }: any) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
