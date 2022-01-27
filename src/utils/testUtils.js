import React from "react";
import { render } from "@testing-library/react";
import { Provider as StoreProvider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import configureStore from "../store";
const store = configureStore();

const AllProviders = ({ children }) => {
  return <StoreProvider store={store}>{children}</StoreProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render, store };
