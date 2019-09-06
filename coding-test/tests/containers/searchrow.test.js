import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import SearchRow from "../../src/containers/searchrow.js";
import AppReducers from "../../src/reducers/reducers";

afterEach(() => {
  cleanup;
});

const returnReduxSetup = () => {
  let store = createStore(AppReducers);
  return {
    ...render(
      <Provider store={store}>
        <SearchRow />
      </Provider>
    ),
    store
  };
};

describe("SearchRow container", () => {
  it("should render wtihout breaking", () => {
    const component = returnReduxSetup();
    expect(component).toBeTruthy();
    expect(document.querySelector("h2")).toBeTruthy();
  });

  it("by default tbody should be empty", () => {});
});
