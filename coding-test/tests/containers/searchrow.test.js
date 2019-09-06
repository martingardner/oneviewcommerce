import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";
import SearchRow from "../../src/containers/searchrow.js";
import AppReducers from "../../src/reducers/reducers";

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
        <SearchRow />
      </Provider>
    ),
    store
  };
};

describe("SearchRow container", () => {
  it("should render without breaking", () => {
    const component = returnReduxSetup();
    expect(component).toBeTruthy();
    expect(document.querySelector("h2")).toBeTruthy();
  });

  it("by default tbody should be empty", () => {
    const component = returnReduxSetup();
    expect(document.querySelector("table tbody tr")).toBeNull();
  });

  it("should have 1 row of data if searchrowposts has one row of data", () => {
    const dummydata = {
      searchrowposts: [
        {
          userId: 1,
          id: 1,
          title: "Title",
          body: "body"
        }
      ]
    };
    const component = returnReduxSetup(dummydata);

    expect(
      document.querySelector("table tbody tr td:first-child").innerHTML
    ).toBe("Title");
  });

  it("should remove the row of searchrows data if clear search results is clicked emptying tbody", () => {
    const dummydata = {
      searchrowposts: [
        {
          userId: 1,
          id: 1,
          title: "Title",
          body: "body"
        }
      ]
    };
    const component = returnReduxSetup(dummydata);

    expect(
      document.querySelector("table tbody tr td:first-child").innerHTML
    ).toBe("Title");

    fireEvent(
      document.querySelector(".clear-results"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );

    expect(document.querySelector("table tbody tr")).toBeNull();
  });
});
