import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Table from "../../src/containers/table.js";
import AppReducers from "../../src/reducers/reducers";
import { data } from "../data/userdata";

afterEach(() => {
  cleanup;
});

const returnReduxSetup = () => {
  let store = createStore(AppReducers, data);

  return {
    ...render(
      <Provider store={store}>
        <Table />
      </Provider>
    ),
    store
  };
};

describe("Table container", () => {
  it("should render without breaking", () => {
    const component = returnReduxSetup();
    expect(component).toBeTruthy();
    expect(document.querySelector(".user-table")).toBeTruthy();
  });

  it("by default given data dummy set, there should be 10 rows", () => {
    const component = returnReduxSetup();
    expect(document.querySelectorAll("table tbody tr").length).toBe(10);
  });

  it("should only show one row if search input is given Lea, and the row name should be Leanne Graham", () => {
    const component = returnReduxSetup();

    fireEvent.change(document.querySelector("input"), {
      target: { value: "Lea" }
    });

    expect(
      document.querySelector(".user-table tbody tr td:first-child").innerHTML
    ).toBe("Leanne Graham");

    expect(document.querySelectorAll(".user-table tbody tr").length).toBe(1);
  });
});
