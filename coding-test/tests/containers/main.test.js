import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Main from "../../src/containers/main.js";
import AppReducers from "../../src/reducers/reducers";
import { data } from "../data/userdata";
import { userpost } from "../data/userpost";

afterEach(() => {
  cleanup;
});

const returnReduxSetup = initvalues => {
  let store = initvalues
    ? createStore(AppReducers, initvalues)
    : createStore(AppReducers);

  return {
    ...render(
      <Provider store={store}>
        <Main />
      </Provider>
    ),
    store
  };
};

describe("Main Container", () => {
  let defaultStore = {
    searchrow: false,
    searchrowposts: { userpost },
    data: data
  };

  it("should render without breaking", () => {
    const component = returnReduxSetup();
    expect(component).toBeTruthy();
    expect(document.querySelector("div").innerHTML).toBe("<div>Loading</div>");
  });

  it("should show .user-table when data is supplied", () => {
    const component = returnReduxSetup(defaultStore);
    expect(document.querySelector(".user-table")).toBeTruthy();
  });
});

describe("Main Container Flow", () => {
  let defaultStore = {
    searchrow: false,
    searchrowposts: {},
    data: data
  };

  it("clicking on a tablerow should show .searchrow-posts table", () => {
    expect(document.querySelector(".searchrow-posts")).toBeNull();

    setTimeout(() => {
      fireEvent(
        document.querySelector(".user-table tbody tr"),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        })
      );
    }, 250);

    setTimeout(() => {
      expect(document.querySelector(".searchrow-posts")).toBeTruthy();
    }, 250);
  });
});
